import os
import re

CONTENT_DIR = 'src/content/posts'

def scan_duplicate_h1(apply_fix=False):
    print(f"🚀 Scanning for Duplicate H1... (Apply: {apply_fix})")
    count = 0
    
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if not file.endswith('.md'): continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                lines = f.readlines()
            
            # Find Frontmatter End
            fm_end_index = -1
            fm_count = 0
            for i, line in enumerate(lines):
                if line.strip() == '---':
                    fm_count += 1
                    if fm_count == 2:
                        fm_end_index = i
                        break
            
            if fm_end_index == -1: continue # Invalid file
            
            # Check for H1 (# Title) immediately after frontmatter
            # Allow some empty lines
            h1_found = False
            h1_index = -1
            
            for i in range(fm_end_index + 1, min(fm_end_index + 10, len(lines))):
                stripped = lines[i].strip()
                if not stripped: continue # Skip empty lines
                if stripped.startswith('# '): # Found H1
                    h1_found = True
                    h1_index = i
                    break
                else:
                    # Found text that is NOT H1, stop searching
                    break
            
            if h1_found:
                print(f"[{'FIX' if apply_fix else 'DETECT'}] {file_path}: Line {h1_index+1} -> {lines[h1_index].strip()}")
                count += 1
                
                if apply_fix:
                    # Comment out or remove? Let's remove for cleanup.
                    del lines[h1_index]
                    with open(file_path, 'w', encoding='utf-8') as f:
                        f.writelines(lines)

    print(f"🏁 Total Issues Found: {count}")

if __name__ == "__main__":
    # Default is Dry Run. Change to True to apply.
    scan_duplicate_h1(apply_fix=True)
