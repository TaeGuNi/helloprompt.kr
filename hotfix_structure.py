import os
import shutil
import re
import subprocess
from datetime import datetime

CONTENT_DIR = 'src/content/posts'
PAGES_DIR = 'src/pages/posts'

def get_git_date(file_path):
    try:
        # Get creation date from git log
        cmd = f"git log --diff-filter=A --follow --format=%aI -1 -- {file_path}"
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True)
        if result.stdout.strip():
            return result.stdout.strip()[:10] # YYYY-MM-DD
    except:
        pass
    return datetime.now().strftime('%Y-%m-%d')

def normalize_structure():
    print("🚀 Starting Structure Normalization...")
    
    # 1. Migrate src/pages/posts -> src/content/posts
    if os.path.exists(PAGES_DIR):
        for root, dirs, files in os.walk(PAGES_DIR):
            for file in files:
                if not file.endswith('.md') and not file.endswith('.mdx'):
                    continue
                    
                src_path = os.path.join(root, file)
                
                # Check if it has date pattern
                match = re.match(r'(\d{4}-\d{2}-\d{2})-(.*)', file)
                if match:
                    date_str, slug_part = match.groups()
                    if slug_part.endswith('.md'): slug_part = slug_part[:-3]
                    if slug_part.endswith('.mdx'): slug_part = slug_part[:-4]
                else:
                    # No date, find from git
                    date_str = get_git_date(src_path)
                    slug_part = file.replace('.mdx', '').replace('.md', '')

                new_slug = f"{date_str}-{slug_part}"
                dest_dir = os.path.join(CONTENT_DIR, new_slug)
                dest_path = os.path.join(dest_dir, 'index.md')
                
                os.makedirs(dest_dir, exist_ok=True)
                
                # Copy content
                print(f"📦 Migrating: {file} -> {new_slug}/index.md")
                shutil.copy2(src_path, dest_path)
                
                # Remove original (optional, safe to keep for now or git rm later)
                # os.remove(src_path) 

    # 2. Normalize src/content/posts
    # Find folders without date or files ending in .mdx
    for item in os.listdir(CONTENT_DIR):
        item_path = os.path.join(CONTENT_DIR, item)
        
        # Case A: It's a file (should be a folder)
        if os.path.isfile(item_path) and (item.endswith('.md') or item.endswith('.mdx')):
            # Logic similar to above
            match = re.match(r'(\d{4}-\d{2}-\d{2})-(.*)', item)
            if match:
                date_str, slug_part = match.groups()
                # strip extension
                slug_part = os.path.splitext(slug_part)[0] 
            else:
                date_str = get_git_date(item_path)
                slug_part = os.path.splitext(item)[0]
            
            new_slug = f"{date_str}-{slug_part}"
            dest_dir = os.path.join(CONTENT_DIR, new_slug)
            dest_path = os.path.join(dest_dir, 'index.md')
            
            if not os.path.exists(dest_dir):
                os.makedirs(dest_dir)
                print(f"📦 Converting File to Folder: {item} -> {new_slug}/index.md")
                shutil.move(item_path, dest_path)
        
        # Case B: It's a folder but no date
        elif os.path.isdir(item_path):
            if not re.match(r'\d{4}-\d{2}-\d{2}-', item):
                # No date pattern. Assume today or git?
                # Folder creation time is unreliable, assume today for safety or check index.md inside
                index_path = os.path.join(item_path, 'index.md')
                date_str = datetime.now().strftime('%Y-%m-%d')
                if os.path.exists(index_path):
                    date_str = get_git_date(index_path)
                
                new_slug = f"{date_str}-{item}"
                new_path = os.path.join(CONTENT_DIR, new_slug)
                
                print(f"📦 Renaming Folder: {item} -> {new_slug}")
                try:
                    os.rename(item_path, new_path)
                except OSError:
                    pass # Ignore if target exists

    print("✅ Normalization Complete.")

if __name__ == "__main__":
    normalize_structure()
