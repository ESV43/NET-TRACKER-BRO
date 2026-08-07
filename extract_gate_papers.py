import json, re, subprocess, tempfile, pathlib

ROOT = pathlib.Path(__file__).parent
FILES = {
    'gate2017': ('GATE 2017.pdf', 'GATE 2017'),
    'gate2018': ('GATE 2018 Questions.pdf', 'GATE 2018'),
    'gate2019': ('GATE Question Paper 2019.pdf', 'GATE 2019'),
    'gate2021': ('3.GATE-Physics-Solution-2021.pdf', 'GATE 2021'),
    'gate2022': ('4.GATE-Physics-Solution-2022.pdf', 'GATE 2022'),
    'gate2023': ('5.GATE-Physics-Solution-2023.pdf', 'GATE 2023'),
    'gate2026': ('GATE-Physics-2026_Question-Paper.pdf', 'GATE 2026'),
}

def text_from_pdf(path):
    out = subprocess.check_output(['pdftotext', '-layout', str(path), '-'], text=True, errors='replace')
    return out.replace('\u00a0', ' ')

def clean(value):
    value = re.sub(r'\s+', ' ', value).strip()
    return value[:3000]

def answer_value(raw, options):
    if not raw:
        return None, None
    raw = clean(raw)
    letters = re.findall(r'\b(?:option\s*)?\(?([A-Da-d])\)?\b', raw)
    # Restrict letter extraction to explicit answer forms, avoiding prose.
    if letters and (re.search(r'\([A-Da-d]\)', raw) or raw.lower().startswith(('option', 'a', 'b', 'c', 'd'))):
        vals = sorted(set(ord(x.upper()) - 65 for x in letters if ord(x.upper()) - 65 < 4))
        if vals:
            return (vals if len(vals) > 1 else vals[0]), 'msq' if len(vals) > 1 else 'mcq'
    return raw, 'nat'

def gate2019_key(path):
    """Read the published 2019 key; the question PDF itself has no answers."""
    result = {}
    for line in pathlib.Path(path).read_text(errors='replace').splitlines():
        m = re.match(r'^\s*(\d+)\s+\d+\s+(MCQ|NAT)\s+(GA|PH)\s+(.+?)\s+([12])\s*$', line)
        if not m:
            continue
        number, kind, section, raw, _marks = m.groups()
        n = int(number) if section == 'GA' else int(number) + 10
        if kind == 'MCQ':
            ans = ord(raw.strip()[-1].upper()) - 65
            result[n] = (ans, 'mcq') if 0 <= ans < 4 else (None, 'mcq')
        else:
            result[n] = (raw.strip(), 'nat')
    return result

def parse_questions(text, year):
    starts = list(re.finditer(r'(?m)^\s*Q\.?\s*(\d{1,2})(?!\s*[–-]\s*Q)(?:\s*[.:]\s*|\s+)', text))
    records, seen = [], 0
    for i, match in enumerate(starts):
        raw_n = int(match.group(1)); block = text[match.end():(starts[i+1].start() if i+1 < len(starts) else len(text))]
        # Skip section labels and solution-only references with no question body.
        if len(clean(block)) < 20 or re.match(r'\s*[–-]\s*Q', block):
            continue
        # A reset from subject Q1 after GA Q10 means the subject section is 11–65.
        # GATE 2018/19/21 source PDFs number GA and subject questions in
        # separate blocks; normalize the subject block to the global 11–65
        # simulator numbering.
        n = raw_n + (10 if year in ('gate2018','gate2019','gate2021') and seen >= 10 else 0)
        if year == 'gate2023' and records and raw_n <= records[-1]['raw_n']:
            # The supplied 2023 solution contains topic chapters; retain the
            # source number but make IDs unique for the simulator.
            n = len(records) + 1
        # Strip solution prose after the first answer marker where possible.
        answer_match = re.search(r'(?im)^\s*Ans\.?\s*:?\s*([^\n]+)', block)
        answer_raw = answer_match.group(1) if answer_match else ''
        question_part = block[:answer_match.start()] if answer_match else block
        # Remove repeated page headers and solution labels.
        question_part = re.sub(r'(?im)^\s*(Solution|Ans\.?|Physics by fiziks|Learn Physics.*)$', '', question_part)
        option_matches = list(re.finditer(r'\(([A-Da-d])\)\s*', question_part))
        opts = []
        if option_matches:
            qtext = question_part[:option_matches[0].start()]
            for j, om in enumerate(option_matches):
                end = option_matches[j+1].start() if j+1 < len(option_matches) else len(question_part)
                opts.append(clean(question_part[om.end():end]))
        else:
            qtext = question_part
        qtext = clean(qtext)
        if len(qtext) < 12:
            continue
        ans, kind = answer_value(answer_raw, opts)
        if kind == 'nat' and opts:
            kind = 'mcq'
        if year == 'gate2017': part = 'A' if n >= 56 else 'B'
        else: part = 'A' if n <= 10 else 'B'
        marks = 1 if n <= 35 else 2
        records.append({'n': n, 'raw_n': raw_n, 'page': text[:match.start()].count('\f') + 1, 'part': part, 'q': qtext, 'opts': opts[:4], 'ans': ans, 'type': kind, 'correctMarks': marks, 'wrongMarks': marks/3 if marks else 0})
        seen += 1
    # Keep first occurrence of each normalized question number.
    unique=[]; used=set()
    for q in records:
        if q['n'] in used: continue
        used.add(q['n']); unique.append(q)
    return unique

def main():
    result={}
    for key,(filename,label) in FILES.items():
        path = ROOT / filename
        source = path
        if key == 'gate2018' and pathlib.Path('/tmp/gate2018-solution.pdf').exists():
            source = pathlib.Path('/tmp/gate2018-solution.pdf')
        qs = parse_questions(text_from_pdf(source), key)
        if key == 'gate2019' and pathlib.Path('/tmp/gate2019-key.txt').exists():
            key_data = gate2019_key('/tmp/gate2019-key.txt')
            for q in qs:
                if q['n'] in key_data:
                    q['ans'], q['type'] = key_data[q['n']]
        image_source = {'gate2017':'GATE 2017.pdf','gate2018':'GATE 2018 Questions.pdf','gate2019':'GATE Question Paper 2019.pdf','gate2021':'3.GATE-Physics-Solution-2021.pdf','gate2022':'4.GATE-Physics-Solution-2022.pdf','gate2023':'5.GATE-Physics-Solution-2023.pdf','gate2026':'GATE-Physics-2026_Question-Paper.pdf'}[key]
        for q in qs:
            q['sourceImage'] = f'./gate-source/{key}-q{q["n"]}.jpg'
        result[key]={'id':key,'label':label,'status':'ready','totalQ':len(qs),'durationSec':10800,'questions':qs,
                     'partCounts':{'A':sum(q['part']=='A' for q in qs),'B':sum(q['part']=='B' for q in qs)}}
    print(json.dumps(result, ensure_ascii=False, separators=(',',':')))

if __name__ == '__main__': main()
