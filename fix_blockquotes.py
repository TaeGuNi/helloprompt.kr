import os
import re

ALLOWED_KEYWORDS = ['basic', 'pro', 'prompt']

def is_allowed_section(header):
    header_lower = header.lower()
    return any(kw in header_lower for kw in ALLOWED_KEYWORDS)

def process_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            lines = f.readlines()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    new_lines = []
    current_header = ""
    modified = False
    in_code_block = False
    
    for line in lines:
        stripped = line.strip()
        
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
            
        if in_code_block:
            new_lines.append(line)
            continue
        
        if stripped.startswith('#'):
            current_header = stripped
            new_lines.append(line)
            continue
            
        # Check for blockquote usage
        if stripped.startswith('>'):
            if not is_allowed_section(current_header):
                # Remove blockquote marker
                # Handle cases like "> Text" -> "Text"
                line = re.sub(r'^\s*>\s?', '', line)
                modified = True
        
        new_lines.append(line)
        
    if modified:
        print(f"Fixed blockquotes in {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

# Scan directories
base_dirs = ['src/content/posts', 'src/pages/posts']
for d in base_dirs:
    if os.path.exists(d):
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith('.md'):
                    process_file(os.path.join(root, file))
