import os
import re
import glob

def slugify(text):
    text = text.lower()
    text = re.sub(r'[^a-z0-9]+', '-', text)
    return text.strip('-')

def has_korean(text):
    return bool(re.search(r'[\u3131-\uD79D]', text))

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_lines = []
    modified = False
    
    prompt_keywords = ['**Role**', '**Task**', '**Context**', '**Format**', '**Constraint**', '**Input**', '**Output**', '**Goal**']

    for i, line in enumerate(lines):
        original_line = line
        stripped = line.strip()
        
        # 1. Heading IDs
        if stripped.startswith('#') and '{#' not in line:
            if has_korean(line):
                match = re.search(r'\(([^)]+)\)', line)
                if match:
                    eng_text = match.group(1)
                    if re.search(r'[a-zA-Z]', eng_text):
                        pid = slugify(eng_text)
                        line = line.rstrip() + f" {{#{pid}}}\n"
                        modified = True
                else:
                    if '결론' in line:
                        line = line.rstrip() + " {#conclusion}\n"
                        modified = True
                    elif '요약' in line:
                        line = line.rstrip() + " {#summary}\n"
                        modified = True
                    elif '참고' in line or '레퍼런스' in line:
                         line = line.rstrip() + " {#references}\n"
                         modified = True
                    elif '개요' in line or '들어가며' in line:
                         line = line.rstrip() + " {#intro}\n"
                         modified = True

        # 2. Blockquotes for Prompts
        for kw in prompt_keywords:
            if stripped.startswith(kw) and not line.startswith('>'):
                line = '> ' + line
                modified = True
                break
        
        new_lines.append(line)

    if modified:
        print(f"Fixing {filepath}")
        try:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.writelines(new_lines)
        except Exception as e:
            print(f"Error writing {filepath}: {e}")

base_dir = os.path.dirname(os.path.abspath(__file__))
# Looking for src/**/*.md
search_path = os.path.join(base_dir, 'src/**/*.md')
files = glob.glob(search_path, recursive=True)
# Filter for actual posts directory
files = [f for f in files if '/posts/' in f]

if not files:
    print("No post files found to scan.")

for fp in files:
    process_file(fp)
