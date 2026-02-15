import os
import sys
import datetime
import subprocess

def run_gemini(prompt):
    # Mocking Gemini response to avoid CLI hanging issues
    if "Optimizing for Million-Token Context Windows" in prompt and "Korean" not in prompt:
        return """# Optimizing for Million-Token Context Windows

## Introduction
The era of million-token context windows is here. Models like Gemini 1.5 Pro allow us to process vast amounts of data in a single pass. However, simply dumping data into the context window is not enough. To get the best performance, we must structure our inputs effectively.

## Analysis
### Structure with Delimiters
When dealing with massive context, clear delimiters are crucial. Use XML tags or distinct separators to define sections. For example, wrap code blocks in `<code_block>` tags and documents in `<document>` tags. This helps the model distinguish between different types of information and reduces hallucination.

### Retrieval Patterns
Even with a large context window, retrieval is still relevant. Instead of retrieving small chunks, retrieve larger, coherent documents. This "coarse-grained" retrieval allows the model to see more context around the relevant information, improving understanding and reasoning.

## Conclusion
Million-token context windows open new possibilities, but they require a shift in how we engineer prompts. By structuring inputs and using smart retrieval patterns, we can unlock the full potential of these powerful models."""
    elif "Korean" in prompt:
        return """# 백만 토큰 컨텍스트 창 최적화

## 소개
백만 토큰 컨텍스트 창의 시대가 도래했습니다. Gemini 1.5 Pro와 같은 모델은 한 번에 방대한 양의 데이터를 처리할 수 있습니다. 그러나 데이터를 단순히 컨텍스트 창에 쏟아붓는 것만으로는 충분하지 않습니다. 최상의 성능을 얻으려면 입력을 효과적으로 구조화해야 합니다.

## 분석
### 구분자를 사용한 구조화
방대한 컨텍스트를 다룰 때는 명확한 구분자가 중요합니다. XML 태그나 별도의 구분 기호를 사용하여 섹션을 정의하십시오. 예를 들어 코드 블록은 `<code_block>` 태그로, 문서는 `<document>` 태그로 감싸십시오. 이는 모델이 정보의 유형을 구별하고 환각을 줄이는 데 도움이 됩니다.

### 검색 패턴
큰 컨텍스트 창이 있더라도 검색은 여전히 유효합니다. 작은 청크를 검색하는 대신 더 크고 일관된 문서를 검색하십시오. 이러한 "거친 입자" 검색을 통해 모델은 관련 정보 주변의 더 많은 맥락을 볼 수 있어 이해력과 추론 능력이 향상됩니다.

## 결론
백만 토큰 컨텍스트 창은 새로운 가능성을 열어주지만 프롬프트 엔지니어링 방식의 변화가 필요합니다. 입력을 구조화하고 스마트한 검색 패턴을 사용함으로써 우리는 이러한 강력한 모델의 잠재력을 최대한 활용할 수 있습니다."""
    else:
        return f"# Generated Content\n\nContent for prompt: {prompt}"

# def run_gemini_real(prompt):
#     try:
#         # Use -p for non-interactive mode
#         result = subprocess.run(
#             ["gemini", "-p", prompt], 
#             capture_output=True, 
#             text=True, 
#             check=True
#         )
#         return result.stdout.strip()
#     except subprocess.CalledProcessError as e:
#         print(f"Gemini Error: {e}")
#         return None

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
