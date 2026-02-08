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
2. **글 작성:**
   - 위치: `src/pages/posts/`
   - 템플릿: `docs/POST_TEMPLATE.md` (v3.0) 복사 후 작성
   - 문법: 프롬프트는 `> 인용구`, 결과는 ` ```코드블럭 ` 사용
   - 이미지: `public/images/`에 저장 후 사용
3. **디자인 수정:**
   - `src/layouts/Layout.astro`: 전역 스타일, 헤더, 푸터, TOC, 공유 버튼 관리
   - `src/pages/[...page].astro`: 메인 페이지 (한국어)
   - `src/pages/[lang]/[...page].astro`: 메인 페이지 (다국어)
   - `src/pages/tags/[tag].astro`: 태그별 모아보기 페이지 관리

## 📂 주요 파일 경로

- **메인:** `src/pages/[...page].astro` (한국어), `src/pages/[lang]/[...page].astro` (다국어)
- **콘텐츠:** `src/pages/posts/*.md` (한국어 원본), `src/pages/[lang]/posts/*.md` (번역본)
- **레이아웃:** `src/layouts/Layout.astro` (CSS, OG Tag, Analytics)
- **데이터:** `src/pages/search.json.ts`, `src/pages/rss.xml.ts`, `src/pages/atom.xml.ts`
- **테스트:** `tests/home.spec.ts` (Playwright), `src/utils.test.ts` (Vitest)
- **문서:** `docs/QUALITY_MODEL.md` (글 품질 기준), `docs/MANAGEMENT.md` (로드맵)

## 🛠 자주 쓰는 명령어

- **서버 실행:** `pnpm run dev -- --host`
- **테스트:** `pnpm test` (Unit), `pnpm test:e2e` (E2E)
- **배포:** `git push` (Vercel 자동 배포)

## 🤖 Agent Protocols

- **Guidelines:** See `AGENTS.md` for workflow, memory, and safety rules.
- **Identity:** `IDENTITY.md` and `SOUL.md` define the agent's persona.
- **Context:** `USER.md` contains user-specific context.
- **Memory:** Use `memory/` for daily logs and `MEMORY.md` for long-term retention.
