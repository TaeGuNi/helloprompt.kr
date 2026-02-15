import os
import sys
import datetime
import subprocess

def run_gemini(prompt):
    try:
        # Use -p for non-interactive mode
        result = subprocess.run(
            ["gemini", "-p", prompt], 
            capture_output=True, 
            text=True, 
            check=True
        )
        return result.stdout.strip()
    except subprocess.CalledProcessError as e:
        print(f"Gemini Error: {e}")
        return None

def generate_content(slug, title_en, insight, image_url):
    # Determine directory
    date_str = datetime.datetime.now().strftime("%Y-%m-%d")
    base_dir = f"src/content/posts/{date_str}-{slug}"
    os.makedirs(base_dir, exist_ok=True)

    langs = {
        'index.md': ('Korean', 'ko'),
        'index.en.md': ('English', 'en'),
        'index.jp.md': ('Japanese', 'jp'),
        'index.es.md': ('Spanish', 'es'),
        'index.fr.md': ('French', 'fr'),
        'index.de.md': ('German', 'de'),
        'index.it.md': ('Italian', 'it'),
        'index.cn.md': ('Simplified Chinese', 'cn'),
        'index.tw.md': ('Traditional Chinese', 'tw'),
        'index.ru.md': ('Russian', 'ru')
    }

    print(f"Generating content for {slug}...")

    # Generate English content
    prompt_en = f"""Write a technical blog post in Markdown about "{title_en}".
    Target Audience: Developers.
    Tone: Professional yet engaging.
    Insight to include: "{insight}".
    Do not include triple backticks or ```markdown at the start/end. Just raw markdown.
    Structure:
    # {title_en}
    ## Introduction
    ## Analysis
    ## Conclusion
    """
    content_en_body = run_gemini(prompt_en)
    
    if not content_en_body:
        content_en_body = f"# {title_en}\n\n*Error generating content.*"

    # Generate Korean translation/version
    prompt_ko = f"""Translate the following English technical blog post to Korean.
    Keep the tone professional.
    Do not include triple backticks.
    Content:
    {content_en_body}
    """
    content_ko_body = run_gemini(prompt_ko)
    
    if not content_ko_body:
        print("Warning: Korean translation failed. Using English content as fallback.")
        content_ko_body = f"# {title_en} (Korean - Translation Failed)\n\n*(Translation failed, showing English original)*\n\n{content_en_body}"

    def get_frontmatter(title, description, date, image, tags):
        return f"""---
title: "{title}"
description: "{description}"
date: "{date}"
image: "{image}"
tags: {tags}
---
"""

    tags = f'["AI", "Tech", "{slug}"]'

    for filename, (lang_name, lang_code) in langs.items():
        body = ""
        title = f"{title_en} ({lang_name})"
        
        if lang_code == 'en':
            body = content_en_body
            title = title_en
        elif lang_code == 'ko':
            body = content_ko_body
            # Extract title from body if possible, or just use English title translated
            # For now, keep English title in frontmatter for simplicity or ask gemini for title
            pass 
        else:
            # Placeholder for other languages to save time/tokens
            body = f"{content_en_body}\n\n*(Automated translation to {lang_name} pending)*"

        full_content = get_frontmatter(title, insight, date_str, image_url, tags) + "\n" + body
        
        with open(os.path.join(base_dir, filename), 'w') as f:
            f.write(full_content)

    print(f"Generated 10 files for {slug}")

if __name__ == "__main__":
    # Usage: python generate_batch.py [slug] [title_en] [insight] [image_url]
    if len(sys.argv) < 5:
        print("Usage: python generate_batch.py [slug] [title_en] [insight] [image_url]")
        sys.exit(1)
    generate_content(sys.argv[1], sys.argv[2], sys.argv[3], sys.argv[4])
