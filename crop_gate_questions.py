import json
import re
import subprocess
import xml.etree.ElementTree as ET
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).parent
DATA = Path('/tmp/gate-papers-extracted.json')
RENDER = Path('/tmp/gate-question-pages')
OUT_SOURCE = ROOT / 'gate-source'
OUT_CLEAN = ROOT / 'gate-source-clean'

PDFS = {
    'gate2017': ROOT / 'GATE 2017.pdf',
    'gate2018': ROOT / 'GATE 2018 Questions.pdf',
    'gate2019': ROOT / 'GATE Question Paper 2019.pdf',
    'gate2021': ROOT / '3.GATE-Physics-Solution-2021.pdf',
    'gate2022': ROOT / '4.GATE-Physics-Solution-2022.pdf',
    'gate2023': ROOT / '5.GATE-Physics-Solution-2023.pdf',
    'gate2026': ROOT / 'GATE-Physics-2026_Question-Paper.pdf',
}

def tag(element, name):
    return element.tag.rsplit('}', 1)[-1] == name

def parse_xml_page_lines(xml_path):
    root = ET.parse(xml_path).getroot()
    pages = [e for e in root.iter() if tag(e, 'page')]
    parsed_pages = []
    
    for page_no, page in enumerate(pages, 1):
        lines_info = []
        all_words = [e for e in page.iter() if tag(e, 'word')]
        usable = [float(w.attrib['yMax']) for w in all_words if float(w.attrib['yMax']) < 745]
        page_bottom = max(usable, default=720)
        
        for line in [e for e in page.iter() if tag(e, 'line')]:
            words = [e for e in line if tag(e, 'word')]
            if not words:
                continue
            texts = [''.join(w.itertext()).strip() for w in words]
            full_text = ' '.join(texts)
            y_min = float(words[0].attrib['yMin'])
            y_max = float(max(w.attrib['yMax'] for w in words))
            x_min = float(words[0].attrib['xMin'])
            lines_info.append({
                'yMin': y_min,
                'yMax': y_max,
                'xMin': x_min,
                'text': full_text,
                'words': texts
            })
        parsed_pages.append({
            'page_no': page_no,
            'lines': lines_info,
            'page_bottom': page_bottom
        })
    return parsed_pages

def find_question_candidates(parsed_pages):
    candidates = []
    for page in parsed_pages:
        page_no = page['page_no']
        lines = page['lines']
        for l in lines:
            text = l['text']
            words = l['words']
            # Match start of questions like Q1., Q.1, Q 1, Q1
            q_words = [i for i, w in enumerate(words[:2]) if re.fullmatch(r'Q\.?\d{1,2}\.?', w)]
            if q_words and sum(bool(re.fullmatch(r'Q\.?\d{1,2}\.?', x)) for x in words) == 1:
                # Exclude section headers like "Q1 – Q5"
                if not re.search(r'Q\d+\s*–\s*Q\d+', text):
                    m = re.fullmatch(r'Q\.?(\d{1,2})\.?', words[0])
                    if m:
                        candidates.append({
                            'page_no': page_no,
                            'yMin': l['yMin'],
                            'xMin': l['xMin'],
                            'text': text,
                            'q_num': int(m.group(1))
                        })
    # Sort by question number, then by page — so we map candidate index to question number
    candidates.sort(key=lambda c: (c['q_num'], c['page_no']))
    return candidates

def find_answer_boundary(page_lines, y_start, y_limit):
    """
    Find where Ans., Solution, Sol., or footer text begins between y_start and y_limit.
    Stopping before this prevents cropping solution text and printed answers.
    Only stop on full sentence boundaries, NOT partial words like 'Ans.' inside a question.
    """
    ans_patterns = [
        r'^\s*Ans(?:wer)?\.?\s*[:.\-]',
        r'^\s*Solution\s*[:.\-]',
        r'^\s*Sol(?:ution)?\.?\s*[:.\-]',
        r'^\s*Explanation\s*[:.\-]',
        r'Physics\s+by\s+fiziks',
        r'Learn\s+Physics',
        r'H\.O\.:\s*40-D',
        r'Branch\s+office',
        r'^\s*\*+\s*$',
        r'^\s*---+?\s*$',
    ]

    for l in page_lines:
        y = l['yMin']
        # Avoid truncating the question itself by requiring at least 30px of
        # breathing room from the start of the question.
        if y > y_start + 30 and y < y_limit:
            for pat in ans_patterns:
                if re.search(pat, l['text'], re.I):
                    return y
    return None

def render_pages(key, pdf):
    prefix = RENDER / key
    prefix.parent.mkdir(parents=True, exist_ok=True)
    existing = sorted(prefix.parent.glob(f'{key}-*.jpg'))
    if not existing:
        subprocess.run(['pdftoppm', '-jpeg', '-r', '150', str(pdf), str(prefix)], check=True, stdout=subprocess.DEVNULL)
    return {int(p.stem.rsplit('-', 1)[1]): p for p in prefix.parent.glob(f'{key}-*.jpg')}

def main():
    if not DATA.exists():
        res = subprocess.run(['python3', str(ROOT / 'extract_gate_papers.py')], check=True, stdout=subprocess.PIPE)
        DATA.write_bytes(res.stdout)
    
    banks = json.loads(DATA.read_text(encoding='utf-8'))
    OUT_SOURCE.mkdir(exist_ok=True)
    OUT_CLEAN.mkdir(exist_ok=True)
    RENDER.mkdir(parents=True, exist_ok=True)

    for key, pdf in PDFS.items():
        if not pdf.exists():
            print(f'Skipping missing PDF: {pdf}')
            continue
        xml = RENDER / f'{key}.xml'
        if not xml.exists():
            subprocess.run(['pdftotext', '-bbox-layout', str(pdf), str(xml)], check=True)

        parsed_pages = parse_xml_page_lines(xml)
        candidates = find_question_candidates(parsed_pages)
        pages_images = render_pages(key, pdf)

        page_dict = {p['page_no']: p for p in parsed_pages}
        questions = banks.get(key, {}).get('questions', [])
        print(f'{key}: {len(questions)} questions, {len(candidates)} candidate positions')

        # Group candidates by q_num so we can find a candidate for each bank question
        # regardless of index alignment. Banks normalise question numbers (e.g. 11–65
        # for subject Q1), but the PDF candidate numbers are the raw labels.
        # For papers where the bank keeps `raw_n` (gate2018/2019/2021), use that;
        # otherwise the bank n is the raw PDF label (gate2017).
        for question in questions:
            qn = question.get('raw_n') or question.get('n')
            cand = next((c for c in candidates if c['q_num'] == qn), None)
            if not cand:
                continue
            page_no = cand['page_no']
            y_start = cand['yMin']

            p_data = page_dict.get(page_no)
            if not p_data:
                continue

            # Find the next question on the same page (regardless of q_num) — that's
            # where the answer / options end and the next question begins.
            same_page = [c for c in candidates if c['page_no'] == page_no and c['yMin'] > y_start + 8]
            next_y = min((c['yMin'] for c in same_page), default=None)

            y_limit = next_y if next_y is not None else (p_data['page_bottom'] + 10)

            # Check for solution/answer boundary to cut BEFORE answer text
            ans_y = find_answer_boundary(p_data['lines'], y_start, y_limit)
            if ans_y is not None and ans_y > y_start + 30:
                bottom_pdf = ans_y - 4
            else:
                bottom_pdf = next_y - 6 if next_y is not None else p_data['page_bottom'] + 10

            image_path = pages_images.get(page_no)
            if not image_path:
                continue

            with Image.open(image_path) as image:
                scale = image.width / 612.0
                top = max(0, int((y_start - 8) * scale))
                bottom = min(image.height, int(bottom_pdf * scale))

                # If we never found the next question on this page (next_y is None),
                # the only safeguard is the page bottom — and the question might
                # overflow the natural limit. Add a small safety buffer but never
                # exceed the image bounds.
                if next_y is None:
                    MIN_PX = int(360 * scale)
                    if bottom - top < MIN_PX:
                        bottom = min(image.height, top + MIN_PX)
                
                crop = image.crop((0, top, image.width, bottom)).convert('RGB')
                crop.thumbnail((1200, 1600), Image.Resampling.LANCZOS)
                
                out_name = f'{key}-q{question["n"]}.jpg'
                output_src = OUT_SOURCE / out_name
                output_clean = OUT_CLEAN / out_name
                
                crop.save(output_src, 'JPEG', quality=88, optimize=True)
                crop.save(output_clean, 'JPEG', quality=88, optimize=True)
                question['sourceImage'] = f'./gate-source/{out_name}'

    # Update gate-pyq-data.js with new question records
    js_code = f"window.GATE_EXTRACTED_BANKS = JSON.parse({json.dumps(json.dumps(banks, ensure_ascii=False, separators=(',', ':')))});\n"
    DATA_JS = ROOT / 'gate-pyq-data.js'
    DATA_JS.write_text(js_code, encoding='utf-8')
    print('Updated gate-pyq-data.js successfully!')

if __name__ == '__main__':
    main()
