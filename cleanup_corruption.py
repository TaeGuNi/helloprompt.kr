import os
import re
import glob

def cleanup_file(filepath):
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {filepath}: {e}")
        return

    original_content = content
    
    # Remove "Wait, there is more..."
    content = content.replace("Wait, there is more...", "")
    
    # Fix repeated "(Updated) "
    # Regex to replace "(Updated) (Updated) ..." with nothing or just one if legitimate?
    # Likely we want to remove "(Updated) " entirely if it was added by the bot as a prefix to Conclusion.
    # The bot added "## (Updated) Conclusion". Repeated runs made it "## (Updated) (Updated) Conclusion".
    # Let's remove all "(Updated) " occurrences in headers.
    
    lines = content.split('\n')
    new_lines = []
    for line in lines:
        if line.startswith('#'):
            line = line.replace('(Updated) ', '')
            # Also clean up empty "## Conclusion" lines if they were added superfluously?
            # The bot added "\n\n## Conclusion\nWait, there is more...".
            # If we remove "Wait...", we might have empty sections.
        new_lines.append(line)
    
    content = '\n'.join(new_lines)
    
    # Remove multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    if content != original_content:
        print(f"Cleaning {filepath}")
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)

base_dirs = ['src/content/posts', 'src/pages/posts']
for d in base_dirs:
    if os.path.exists(d):
        for root, dirs, files in os.walk(d):
            for file in files:
                if file.endswith('.md'):
                    cleanup_file(os.path.join(root, file))
