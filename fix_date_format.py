import os
import re
import yaml
from datetime import datetime

CONTENT_DIR = 'src/content/posts'

def fix_date_format():
    print("🚀 Scanning for Invalid Date Formats...")
    count = 0
    
    for root, dirs, files in os.walk(CONTENT_DIR):
        for file in files:
            if not file.endswith('.md'): continue
            
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            parts = re.split(r'^---$', content, maxsplit=2, flags=re.MULTILINE)
            if len(parts) < 3: continue

            frontmatter_raw = parts[1]
            try:
                fm = yaml.safe_load(frontmatter_raw) or {}
            except:
                continue
            
            # Check date
            date_val = fm.get('date')
            new_date = None
            
            if not date_val:
                # Missing date -> Infer from folder name
                folder_name = os.path.basename(os.path.dirname(file_path))
                match = re.match(r'(\d{4}-\d{2}-\d{2})', folder_name)
                if match:
                    new_date = match.group(1)
                else:
                    new_date = datetime.now().strftime('%Y-%m-%d')
            else:
                # Check format
                try:
                    # Valid formats: YYYY-MM-DD or datetime object
                    if isinstance(date_val, datetime): # Already parsed by yaml as date
                        # Ensure it's string for consistency
                        new_date = date_val.strftime('%Y-%m-%d')
                    else:
                        str_val = str(date_val).strip()
                        # Clean up quotes if manual parsing failed
                        str_val = str_val.replace('"', '').replace("'", "")
                        datetime.strptime(str_val, '%Y-%m-%d') # Test parse
                except ValueError:
                    # Invalid format -> Fix it
                    print(f"⚠️ Invalid Date in {file}: {date_val}")
                    # Try to infer again
                    folder_name = os.path.basename(os.path.dirname(file_path))
                    match = re.match(r'(\d{4}-\d{2}-\d{2})', folder_name)
                    if match:
                        new_date = match.group(1)
                    else:
                        new_date = datetime.now().strftime('%Y-%m-%d')

            if new_date and new_date != date_val:
                # Update Frontmatter
                # Regex replace to preserve comments/structure if possible, 
                # but YAML dump is safer for validity
                fm['date'] = new_date
                
                new_content = "---\n" + yaml.dump(fm, allow_unicode=True, default_flow_style=False) + "---\n" + parts[2]
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"✅ Fixed Date: {file_path} ({date_val} -> {new_date})")
                count += 1

    print(f"🏁 Date Fix Complete. Modified {count} files.")

if __name__ == "__main__":
    fix_date_format()
