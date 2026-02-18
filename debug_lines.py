with open('src/pages/posts/tarot-reading-ai-fortune.md', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines):
    stripped = line.strip()
    if stripped.startswith(">"):
        print(f"Line {i+1} starts with >: {stripped[:20]}...")
    else:
        if "**AI:**" in stripped:
             print(f"Line {i+1} has AI but NO >: {stripped[:20]}... repr: {repr(stripped)}")
