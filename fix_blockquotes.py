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
        
        # Track code blocks
        if stripped.startswith('```'):
            in_code_block = not in_code_block
            new_lines.append(line)
            continue
            
        if in_code_block:
            new_lines.append(line)
            continue
        
        # Track current header
        if stripped.startswith('#'):
            current_header = stripped
            new_lines.append(line)
            continue
            
        # Check blockquote usage
        if stripped.startswith('>'):
            # If we are in a code block, ignore (though > in code block is rare unless diff)
            # Actually, > in markdown is blockquote.
            # We assume > at start of line is blockquote.
            
            if not is_allowed_section(current_header):
                # Invalid blockquote. Remove '> '
                # Use regex to replace only the leading '> ' or '>'
                # Be careful not to break nested blockquotes if any (usually > >)
                # But here we just want to remove the top level one.
                
                # Check if it's a blockquote
                if line.lstrip().startswith('>'):
                    # Replace strictly the first > and optional space
                    line = re.sub(r'^\s*>\s?', '', line)
                    modified = True
        
        new_lines.append(line)
        
    if modified:
        print(f"Fixed blockquotes in {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.writelines(new_lines)

# Scan src/pages/posts
target_dir = 'src/pages/posts'
if not os.path.exists(target_dir):
    print(f"Directory not found: {target_dir}")
    exit(1)

count = 0
for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.md'):
            process_file(os.path.join(root, file))
            count += 1
            if count % 100 == 0:
                print(f"Scanned {count} files...", end='\r')

print(f"\nScanning complete. Processed {count} files.")
