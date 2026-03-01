# GEMINI.md - AI Context & Instructions

이 파일은 AI 에이전트(Gemini, Claude 등)가 이 프로젝트를 이해하고 수정할 때 참고하는 **컨텍스트 파일**입니다.

## 🧠 프로젝트 정체성

- **이름:** Hello Prompt (헬로 프롬프트)
- **성격:** AI 초보자를 위한 친절한 프롬프트 딕셔너리
- **런타임:** Node.js v24.13.0 (LTS)
- **디자인 컨셉:** Cyberpunk, Dark Mode, Neon Cyan(#00f3ff), Orbitron Font
- **기술 스택:** Astro v5, pnpm, HTML/CSS (No unnecessary JS Frameworks)

## ⚡️ 핵심 규칙 (반드시 준수)

1. **패키지 매니저:** 무조건 **`pnpm`**을 사용하라. (`npm install` 금지)
2. **Husky 강제 준수 (절대 원칙):** 어떠한 경우에도 `git commit --no-verify` 등 Husky pre-commit hook을 우회하여 강제로 커밋하지 마라. OOM(메모리 오류)이나 Lint 에러가 발생하면 반드시 근본 원인을 해결하고 정상적으로 커밋해야 한다. 우회는 절대 금지된다.
3. **글 작성 (다국어 필수):**
   - **이 사이트는 글로벌 다국어 서비스입니다. 모든 포스트는 반드시 10개의 언어로 작성되어야 합니다.**
   - 위치: `src/content/posts/YYYY/MM/slug/`
   - 파일 구조: 한국어 원본(`index.ko.md`) + 9개 외국어 번역본(`index.[lang].md`)
   - 타겟 언어 (9개): 영어(`en`), 독일어(`de`), 스페인어(`es`), 프랑스어(`fr`), 이탈리아어(`it`), 일본어(`ja`), 포르투갈어(`pt`), 러시아어(`ru`), 중국어(`zh`)
   - 템플릿: `docs/POST_TEMPLATE.md` (v4.0) 복사 후 작성
   - 문법: 프롬프트는 `> 인용구`, 결과는 ` ```코드블럭 ` 사용
   - 이미지: `src/assets/images/`에 저장 후 사용
4. **디자인 수정:**
   - `src/layouts/Layout.astro`: 전역 스타일, 헤더, 푸터, TOC, 공유 버튼 관리
   - `src/pages/[...page].astro`: 메인 페이지 (한국어)
   - `src/pages/[lang]/[...page].astro`: 메인 페이지 (다국어)
   - `src/pages/tags/[tag].astro`: 태그별 모아보기 페이지 관리
5. **Git 전략 (Develop 단독 사용):**
   - 새로운 브랜치(`feature/*` 등)를 생성하거나 PR(Pull Request)을 개설하는 것을 строго 금지.
   - 모든 커밋과 푸시는 오직 **`develop` 브랜치에 다이렉트(Direct)로** 수행할 것.
   - 충돌 방지를 위해 에이전트는 푸시 직전 반드시 `git pull origin develop --rebase` 를 실행할 것.

## 📂 주요 파일 경로

- **메인:** `src/pages/[...page].astro` (한국어), `src/pages/[lang]/[...page].astro` (다국어)
- **콘텐츠:** `src/content/posts/YYYY/MM/slug/index.ko.md` (한국어 원본), `index.[lang].md` (번역본)
- **레이아웃:** `src/layouts/Layout.astro` (CSS, OG Tag, Analytics)
- **데이터:** `src/pages/search.json.ts`, `src/pages/[lang]/rss.xml.ts`, `src/pages/[lang]/atom.xml.ts`
- **테스트:** `tests/home.spec.ts` (Playwright), `src/utils.test.ts` (Vitest)
- **QA & 배포 파이프라인:** `scripts/qa.ts` (통합 모의 빌드/정적 분석), `scripts/release.ts` (E2E 배포 에이전트)
- **문서:** `docs/QUALITY_MODEL.md` (글 품질 기준), `docs/MANAGEMENT.md` (로드맵), `docs/ANALYTICS.md` (데이터 분석)

## 🛠 자주 쓰는 명령어

- **서버 실행:** `pnpm run dev -- --host`
- **테스트:** `pnpm test` (Unit), `pnpm test:e2e` (E2E)
- **품질 검수:** `pnpm qa` (Phase 1 & 2 통합 무결성 7000+ 파일 검증)
- **배포 스크립트:** `pnpm release` (안전 검사, PR 템플릿 주입, 자동 머지, CI 자가 치유 수행)

## 🤖 Agent Protocols

- **Guidelines:** See `AGENTS.md` for workflow, memory, and safety rules.
- **Identity:** `IDENTITY.md` and `SOUL.md` define the agent's persona.
- **Context:** `USER.md` contains user-specific context.
- **Memory:** Use `memory/` for daily logs and `MEMORY.md` for long-term retention.
