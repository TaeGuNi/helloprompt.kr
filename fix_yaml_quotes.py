import os
import re

CONTENT_DIR = 'src/content/posts'

def fix_yaml_quotes():
    print("🚀 Scanning for YAML Quote Issues...")
    count = 0
    
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if not file.endswith('.md'): continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Simple regex to find description: "..." where inside there are unescaped "
            # This is tricky, so we will look for specific pattern: description: ".*".*".*"
            
            lines = content.split('\n')
            new_lines = []
            changed = False
            in_frontmatter = False
            fm_count = 0
            
            for line in lines:
                if line.strip() == '---':
                    fm_count += 1
                    in_frontmatter = (fm_count == 1)
                
                if in_frontmatter and line.strip().startswith('description: "'):
                    # Check if there are quotes inside
                    # Strip key
                    value = line.replace('description: "', '')
                    # If it ends with ", check if there are more " in middle
                    if value.strip().endswith('"'):
                        inner = value.strip()[:-1] # Remove last quote
                        if '"' in inner:
                            # Found nested quotes!
                            print(f"⚠️ Found nested quotes in {file}: {line}")
                            # Fix: Swap outer quotes to single quotes
                            # description: "..." -> description: '...'
                            # But we need to handle if inner has ' too. 
                            # Safe bet: Escape inner double quotes
                            
                            # Reconstruct line:
                            # description: "Part 1 "Part 2" Part 3"
                            # -> description: 'Part 1 "Part 2" Part 3'
                            
                            key, val = line.split(':', 1)
                            val = val.strip()
                            if val.startswith('"') and val.endswith('"'):
                                inner_val = val[1:-1]
                                new_line = f"{key}: '{inner_val}'"
                                print(f"   -> Fixed: {new_line}")
                                new_lines.append(new_line)
                                changed = True
                                count += 1
                                continue

                new_lines.append(line)
            
            if changed:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write('\n'.join(new_lines))

    print(f"🏁 YAML Quote Fix Complete. Modified {count} files.")

if __name__ == "__main__":
    fix_yaml_quotes()
