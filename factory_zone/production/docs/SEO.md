# 🔍 SEO 전략 가이드 (SEO Strategy Guide)

이 문서는 Hello Prompt가 검색 엔진(Google, Naver, Bing)에서 상위에 노출되기 위한 **콘텐츠 및 기술적 전략**을 다룹니다.
단순히 "태그를 넣는 것"을 넘어, **"검색 의도(Search Intent)를 정복하는 것"**이 우리의 목표입니다.

---

## 1. 콘텐츠 SEO (Content SEO)

글을 쓸 때 다음 원칙을 반드시 지켜야 합니다. (`QUALITY_MODEL.md`와 연동)

### 🔑 키워드 리서치 (Keyword Research)

글을 쓰기 전, 반드시 **타겟 키워드**를 정해야 합니다.

- **도구:** Google Trends, Keyword Planner, Brave Search (연관 검색어)
- **전략:**
  - **Short Tail (비추천):** "엑셀", "AI" (경쟁이 너무 치열함)
  - **Long Tail (추천):** "엑셀 날짜 형식 오류 해결 프롬프트", "직장인을 위한 AI 보고서 작성법"

### 📝 키워드 배치 (Placement)

검색 엔진이 "이 글은 해당 키워드에 대한 글이구나"라고 인식하게 만드세요.

1.  **URL Slug:** `/posts/excel-date-format-fix` (영문, 하이픈 연결)
2.  **H1 (제목):** 키워드가 맨 앞에 올수록 좋습니다.
3.  **첫 100자 (Hook):** 첫 문단에 자연스럽게 키워드를 포함시키세요.
4.  **H2, H3 (소제목):** 연관 키워드(LSI)를 사용하여 문맥을 강화하세요.
5.  **Alt Text:** 이미지에 설명을 넣으세요. (예: `alt="엑셀 오류 해결 프롬프트 예시"`)

---

## 2. 기술적 SEO (Technical SEO)

개발자나 메인테이너가 관리해야 할 기술적 설정입니다.

### 🏷️ 메타 태그 (Meta Tags)

`src/layouts/Layout.astro`에서 자동으로 생성되지만, 원리를 이해해야 합니다.

- **Title:** `[글 제목] | Hello Prompt` (60자 이내 권장)
- **Description:** `frontmatter.description` 값을 사용. 클릭률(CTR)을 결정하는 핵심 요소. (160자 이내)
- **Canonical URL:** 중복 콘텐츠 방지를 위해 원본 URL을 명시.
- **Open Graph (OG):** SNS 공유 시 보여질 이미지. `src/pages/api/og.ts`에서 동적 생성됨.

### 🤖 크롤링 및 인덱싱 (Crawling & Indexing)

- **Sitemap:** `/sitemap.xml` (모든 페이지의 지도)
- **Robots.txt:** `/robots.txt` (검색 로봇 출입 통제)
  - 모든 봇(`*`) 허용이 기본.
- **RSS/Atom Feed:** `/rss.xml`, `/atom.xml` (구독형 리더 및 검색 엔진용)

### ⚡️ 성능 (Core Web Vitals)

구글은 **빠른 사이트**를 좋아합니다.

- **이미지 최적화:** `.webp` 포맷 사용 권장. Astro의 `<Image />` 컴포넌트 활용.
- **CLS (Layout Shift):** 이미지에 `width`, `height`를 명시하여 로딩 중 화면이 덜컥거리는 현상 방지.

---

## 3. 내부 링크 전략 (Internal Linking)

SEO의 숨겨진 보물입니다. 글과 글을 연결하세요.

- **관련 글 추천:** 글 하단에 "함께 읽으면 좋은 글" 링크를 거세요.
- **앵커 텍스트:** "여기를 클릭하세요" (X) -> "**[엑셀 자동화 가이드]**를 참고하세요" (O)

---

## 4. 모니터링 및 개선 (Monitoring)

발행 후 끝이 아닙니다.

- **Google Search Console:** 색인 생성 여부 및 클릭수 확인.
- **Google Analytics (GA4):** 체류 시간(Engagement Time) 확인. 체류 시간이 짧다면 서론(Hook)을 고쳐야 합니다.

---

**SEO는 기계가 아니라 사람을 위한 것입니다.**
사람이 읽기 좋으면, 검색 엔진도 좋아합니다.
