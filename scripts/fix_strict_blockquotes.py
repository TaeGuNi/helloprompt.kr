import os
import re
import glob

# Allowed headers from audit.ts
ALLOWED_HEADERS = [
    "basic", "pro", "기본", "전문가", "prompt", "프롬프트", 
    "request", "role", "指令", "提示", "プロンプト"
]

def is_allowed_section(header):
    header = header.lower()
    return any(allowed in header for allowed in ALLOWED_HEADERS)

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_lines = []
    modified = False
    current_header = ""
    
    # We also need to skip the frontmatter
    in_frontmatter = False
    frontmatter_count = 0

    for i, line in enumerate(lines):
        stripped = line.strip()
        
        # Track frontmatter
        if stripped == "---":
            frontmatter_count += 1
            in_frontmatter = (frontmatter_count < 2)
            new_lines.append(line)
            continue
            
        if in_frontmatter:
            new_lines.append(line)
            continue

        # Track headers
        header_match = re.match(r'^(#+)\s*(.+)$', stripped)
        if header_match:
            current_header = header_match.group(2)
            new_lines.append(line)
            continue

        # Check blockquotes
        if stripped.startswith(">"):
            # Exception: Hook sentences (Italicized) are allowed anywhere
            # audit.ts: if (line.match(/^>\s*[_*]/)) continue;
            if re.match(r'^>\s*[_*]', stripped):
                new_lines.append(line)
                continue

            # Check if current section is allowed
            if not is_allowed_section(current_header):
                # Remove the blockquote marker
                # We need to be careful. "> Text" -> "Text"
                # ">" -> ""
                content = line.lstrip('>').lstrip()
                # If it was just ">", it becomes empty string + newline
                if not content and line.strip() == ">":
                     new_lines.append("\n") 
                else:
                     new_lines.append(content)
                modified = True
                continue

        new_lines.append(line)

    if modified:
        print(f"Fixed blockquotes in {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

# Target the files that caused errors
base_dir = '/Users/jjhome/openclaw/5/.openclaw/workspace/factory_zone/qa/src/pages'
files = glob.glob(os.path.join(base_dir, '**/*.md'), recursive=True)

print(f"Scanning {len(files)} files in {base_dir}...")
for fp in files:
    process_file(fp)
