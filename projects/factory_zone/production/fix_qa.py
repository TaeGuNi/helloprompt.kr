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
    with open(filepath, 'r', encoding='utf-8') as f:
        lines = f.readlines()

    new_lines = []
    modified = False
    
    # Simple state machine for prompt blocks could be complex, 
    # but let's stick to the requested "Wrap prompt sections"
    # We'll target specific keywords at the start of lines.
    
    prompt_keywords = ['**Role**', '**Task**', '**Context**', '**Format**', '**Constraint**', '**Input**', '**Output**', '**Goal**']

    for i, line in enumerate(lines):
        original_line = line
        stripped = line.strip()
        
        # 1. Heading IDs
        # Look for headers # ... that have Korean and no ID
        if stripped.startswith('#') and '{#' not in line:
            # Check if it has Korean
            if has_korean(line):
                # Try to find English in parens: "## 제목 (Title)"
                match = re.search(r'\(([^)]+)\)', line)
                if match:
                    eng_text = match.group(1)
                    # Ensure it contains English (not just more Korean)
                    if re.search(r'[a-zA-Z]', eng_text):
                        pid = slugify(eng_text)
                        line = line.rstrip() + f" {{#{pid}}}\n"
                        modified = True
                else:
                    # Common mappings based on Korean text
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
        # If line starts with a keyword and not >, add >
        for kw in prompt_keywords:
            if stripped.startswith(kw) and not line.startswith('>'):
                line = '> ' + line
                modified = True
                break
        
        new_lines.append(line)

    if modified:
        print(f"Fixing {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

base_dir = '/Users/jjhome/openclaw/5/.openclaw/workspace/factory_zone/qa/src/content/posts'
files = glob.glob(os.path.join(base_dir, '**/*.md'), recursive=True)

for fp in files:
    process_file(fp)
