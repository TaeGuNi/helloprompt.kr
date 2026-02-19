import os
import re
import yaml
import subprocess
from datetime import datetime

CONTENT_DIR = 'src/content/posts'

def get_git_date(file_path):
    try:
        cmd = f"git log --diff-filter=A --follow --format=%aI -1 -- {file_path}"
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if result.stdout.strip():
            return result.stdout.strip()[:10]
    except:
        pass
    return datetime.now().strftime('%Y-%m-%d')

def fix_frontmatter_and_content(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # 1. Split Frontmatter
    parts = re.split(r'^---$', content, maxsplit=2, flags=re.MULTILINE)
    
    if len(parts) < 3:
        print(f"⚠️ Invalid format (No Frontmatter): {file_path}")
        return False # Skip weird files

    frontmatter_raw = parts[1]
    body = parts[2]
    
    try:
        fm = yaml.safe_load(frontmatter_raw) or {}
    except yaml.YAMLError:
        print(f"⚠️ YAML Error: {file_path}")
        return False

    # 2. Fix Frontmatter
    changed = False
    
    if 'layout' not in fm:
        fm['layout'] = '/src/layouts/Layout.astro'
        changed = True
        
    if 'date' not in fm:
        fm['date'] = get_git_date(file_path)
        changed = True
        
    if 'title' not in fm:
        # Infer title from filename or H1
        match = re.search(r'^#\s+(.+)$', body, re.MULTILINE)
        if match:
            fm['title'] = match.group(1).strip()
        else:
            fm['title'] = "Untitled Post"
        changed = True

    # 3. Fix Body (Remove H1)
    # Remove the FIRST H1 if it matches the title or just generic H1 at top
    new_body = re.sub(r'^\s*#\s+.*$', '', body, count=1, flags=re.MULTILINE)
    if new_body != body:
        body = new_body
        changed = True

    # 4. Save if changed
    if changed:
        new_content = "---\n" + yaml.dump(fm, allow_unicode=True, default_flow_style=False) + "---\n" + body
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"✅ Fixed: {file_path}")
        return True
    
    return False

def rename_folder(folder_path, slug):
    # Check if folder name is YYYY-MM-DD-slug
    folder_name = os.path.basename(folder_path)
    if not re.match(r'\d{4}-\d{2}-\d{2}-', folder_name):
        # Need rename
        index_path = os.path.join(folder_path, 'index.md')
        date_str = datetime.now().strftime('%Y-%m-%d')
        if os.path.exists(index_path):
            date_str = get_git_date(index_path)
        
        new_name = f"{date_str}-{folder_name}"
        new_path = os.path.join(os.path.dirname(folder_path), new_name)
        
        print(f"📦 Renaming Folder: {folder_name} -> {new_name}")
        try:
            os.rename(folder_path, new_path)
            return new_path
        except OSError as e:
            print(f"❌ Rename Failed: {e}")
            
    return folder_path

def main():
    print("🚀 Starting Comprehensive Fix...")
    
    # 1. Loop through all folders
    for item in os.listdir(CONTENT_DIR):
        item_path = os.path.join(CONTENT_DIR, item)
        
        if os.path.isdir(item_path):
            # Step 1: Rename Folder if needed
            item_path = rename_folder(item_path, item)
            
            # Step 2: Fix index.md
            index_path = os.path.join(item_path, 'index.md')
            if os.path.exists(index_path):
                fix_frontmatter_and_content(index_path)
            else:
                # Handle non-index.md files inside?
                pass

    print("🏁 Fix Complete.")

if __name__ == "__main__":
    main()
