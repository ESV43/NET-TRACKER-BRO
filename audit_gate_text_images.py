"""
Audit script: compare extracted question text vs OCR'd source crop image.
Uses parallel OCR to be fast. Writes results incrementally.
"""

import json
import re
import subprocess
import sys
from pathlib import Path
from concurrent.futures import ProcessPoolExecutor, as_completed
import time

ROOT = Path(__file__).parent
DATA_JS = ROOT / 'gate-pyq-data.js'
SOURCE_DIR = ROOT / 'gate-source'
SOURCE_CLEAN_DIR = ROOT / 'gate-source-clean'
REPORT_PATH = Path('/tmp/gate-audit-report.json')

TESSDATA_PREFIX = '/tmp/opencode'

def load_banks():
    text = DATA_JS.read_text(encoding='utf-8')
    m = re.search(r'JSON\.parse\(\"(.+)\"\);', text, re.DOTALL)
    raw = m.group(1).encode('utf-8').decode('unicode_escape')
    return json.loads(raw)

def ocr_image(img_path):
    try:
        env = {'TESSDATA_PREFIX': TESSDATA_PREFIX, 'PATH': '/usr/bin:/bin'}
        result = subprocess.run(
            ['tesseract', str(img_path), '-', '-l', 'eng', '--psm', '6'],
            capture_output=True, text=True, timeout=20, env=env
        )
        if result.returncode == 0:
            return result.stdout.strip()
        return ''
    except Exception:
        return ''

def normalize_text(s):
    if not s:
        return ''
    return re.sub(r'\s+', ' ', s).strip().lower()

def first_n_words(text, n=8):
    text = normalize_text(text)
    return ' '.join(text.split()[:n])

def detect_q_numbers_in_image(text):
    if not text:
        return []
    nums = re.findall(r'Q\.?\s*(\d{1,2})\.?\s', text)
    return [int(n) for n in nums]

def analyze(question, ocr_text):
    issues = []
    ocr_norm = normalize_text(ocr_text)
    bank_norm = normalize_text(question.get('q', ''))

    bank_first = first_n_words(bank_norm, 8)
    ocr_first = first_n_words(ocr_norm, 8)

    if bank_first and ocr_first:
        bank_first_no_q = re.sub(r'^q\.?\s*\d{1,2}\.?\s*', '', bank_first)
        ocr_first_no_q = re.sub(r'^q\.?\s*\d{1,2}\.?\s*', '', ocr_first)
        if bank_first_no_q and ocr_first_no_q:
            bank_tokens = [t for t in re.findall(r'\w+', bank_first_no_q) if len(t) > 3][:5]
            ocr_tokens = set(t for t in re.findall(r'\w+', ocr_first_no_q) if len(t) > 3)
            overlap = sum(1 for t in bank_tokens if t in ocr_tokens)
            if overlap == 0 and bank_tokens:
                issues.append('first-words-no-match')

    bank_n = question.get('raw_n') or question.get('n')
    nums_in_ocr = detect_q_numbers_in_image(ocr_text)
    if nums_in_ocr:
        primary_ocr_n = nums_in_ocr[0]
        if primary_ocr_n != bank_n and abs(primary_ocr_n - bank_n) > 1:
            if bank_n not in nums_in_ocr:
                issues.append(f'q-number-mismatch:bank={bank_n},ocr={primary_ocr_n}')

    if re.search(r'^\s*Ans(?:wer)?\s*[:.\-]', ocr_text, re.M | re.I):
        # Only flag if the answer belongs to a DIFFERENT question number
        ans_matches = re.findall(r'Ans(?:wer)?\.?\s*(\d+)', ocr_text)
        foreign = [a for a in ans_matches if int(a) != question.get('raw_n') or question.get('n')]
        # Compare against raw_n for accuracy
        raw_n = question.get('raw_n') or question.get('n')
        foreign = [a for a in ans_matches if int(a) != raw_n]
        if foreign:
            issues.append(f'contains-answer(foreign:{",".join(foreign)})')
    if re.search(r'^\s*Solution\s*[:.\-]', ocr_text, re.M | re.I):
        # Solution sections always flag — they shouldn't appear in a question crop
        issues.append('contains-solution')

    if len(bank_norm) > 80 and len(ocr_norm) < 20:
        issues.append('ocr-too-short')

    return issues, bank_norm[:120], ocr_norm[:120]

def process_one(item):
    paper_id, question = item
    src = question.get('sourceImage')
    if not src:
        return None
    img_path = SOURCE_DIR / Path(src).name
    if not img_path.exists():
        return {
            'paper': paper_id, 'n': question.get('n'),
            'raw_n': question.get('raw_n'),
            'type': 'missing-image', 'src': src
        }
    ocr = ocr_image(img_path)
    issues, bank_snip, ocr_snip = analyze(question, ocr)
    if issues:
        return {
            'paper': paper_id, 'n': question.get('n'),
            'raw_n': question.get('raw_n'),
            'type': ','.join(issues), 'src': src,
            'bank_first': bank_snip, 'ocr_first': ocr_snip
        }
    return None

def main():
    banks = load_banks()
    items = []
    for paper_id, info in banks.items():
        for q in info.get('questions', []):
            items.append((paper_id, q))
    print(f'Total questions: {len(items)}')

    mismatches = []
    completed = 0
    t0 = time.time()
    with ProcessPoolExecutor(max_workers=8) as ex:
        futures = {ex.submit(process_one, it): it for it in items}
        for fut in as_completed(futures):
            completed += 1
            try:
                result = fut.result()
                if result:
                    mismatches.append(result)
            except Exception as e:
                pass
            if completed % 50 == 0 or completed == len(items):
                elapsed = time.time() - t0
                rate = completed / elapsed if elapsed > 0 else 0
                eta = (len(items) - completed) / rate if rate > 0 else 0
                print(f'  {completed}/{len(items)} ({rate:.1f}/s, ETA {eta:.0f}s)')

    print(f'\nTotal issues: {len(mismatches)}')
    by_type = {}
    for m in mismatches:
        t = m['type'].split(',')[0]
        by_type.setdefault(t, []).append(m)
    for t in sorted(by_type):
        print(f'  {t}: {len(by_type[t])}')
    REPORT_PATH.write_text(json.dumps(mismatches, indent=2, ensure_ascii=False), encoding='utf-8')
    print(f'\nFull report: {REPORT_PATH}')

if __name__ == '__main__':
    main()
