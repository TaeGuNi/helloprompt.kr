import os

filepath = '/Users/jjhome/openclaw/5/.openclaw/workspace/factory_zone/qa/src/pages/posts/tarot-reading-ai-fortune.md'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

new_lines = []
modified = False

for line in lines:
    stripped = line.strip()
    if stripped.startswith('>'):
        # Force remove blockquote
        content = line.lstrip('>').lstrip()
        # If empty
        if not content and line.strip() == ">":
             new_lines.append("\n")
        else:
             # Preserve indentation if any? usually none for >
             # Just append content with newline if needed
             if not content.endswith('\n'):
                  content += '\n'
             new_lines.append(content)
        modified = True
    else:
        new_lines.append(line)

if modified:
    print(f"Force fixing {filepath}")
    with open(filepath, 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
else:
    print("No blockquotes found to fix.")
