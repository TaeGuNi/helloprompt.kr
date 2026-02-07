# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.0.12] (2026-02-08)

### Features

- **AdSense:**
  - `public/ads.txt` 파일 추가 (Google AdSense 연동 준비).
  - `<AdUnit />` 컴포넌트 추가 (수동 광고 배치 지원, Placeholder 기능).
  - 레이아웃(Top, Bottom)에 수동 광고 슬롯(`7945897337`, `8812266186`) 배치.
  - "Manual Strategy" 적용 (자동 광고 OFF).

### Refactoring

- **i18n:** `src/i18n/languages.ts` 도입하여 언어 설정 중앙화 (Single Source of Truth 적용).
- **Routing:** 반복되던 `getStaticPaths` 코드를 `getLangStaticPaths` 헬퍼 함수로 대체 (RSS, Atom, Pages 적용).
- **Optimization:** `Layout.astro` 스크립트에 `is:inline` 속성 추가로 Astro 빌드 경고 해결.

### Testing

- **E2E:** `tests/seo-og.spec.ts`의 `@vercel/og` 테스트 스킵 해제 및 정상 작동 확인.

### Documentation

- **Guide:** `docs/ADSENSE_GUIDE.md` 업데이트 (Manual Strategy 기준).

### [0.0.11](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.10...v0.0.11) (2026-02-05)

### Features

- add localized tag pages ([ac27a2a](https://github.com/TaeGuNi/helloprompt.kr/commit/ac27a2ac4e894bd3a4b37fbed3c3d5eb4fda4ee1))
- persist language in navigation and translate UI ([3f1e611](https://github.com/TaeGuNi/helloprompt.kr/commit/3f1e611b746e130111bb71dc44a57bbfce7bbc4e))
- translate posts to German and update content ([2da8dda](https://github.com/TaeGuNi/helloprompt.kr/commit/2da8ddabed2f03ebea50cb8e5a5c5e1eeaa315aa))

### Bug Fixes

- localized tag links and html lang attribute ([eea65e7](https://github.com/TaeGuNi/helloprompt.kr/commit/eea65e7bebdac33a5c031feae51bcbea123438bc))
- pass lang to frontmatter in localized home pages ([897bdee](https://github.com/TaeGuNi/helloprompt.kr/commit/897bdee910b1a69bdaae03109713b440e547df90))
- **syntax highlighting**: add `vba` language support to Shiki config for Excel macro posts

### [0.0.10](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.5...v0.0.10) (2026-02-05)

### [0.0.9](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.5...v0.0.9) (2026-02-05)

### [0.0.8](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.5...v0.0.8) (2026-02-04)

### [0.0.7](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.5...v0.0.7) (2026-02-04)

### [0.0.6](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.5...v0.0.6) (2026-02-04)

### [0.0.5](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.2...v0.0.5) (2026-02-04)

### [0.0.4](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.2...v0.0.4) (2026-02-04)

### [0.0.3](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.2...v0.0.3) (2026-02-04)

### 0.0.2 (2026-02-04)

### Bug Fixes

- Resolve build errors and unify UI style ([4411a5a](https://github.com/TaeGuNi/helloprompt.kr/commit/4411a5ad72f8ce7dc2ba5d43c8c5f6630b35f591))
- Restore Google Analytics code ([0b1737d](https://github.com/TaeGuNi/helloprompt.kr/commit/0b1737df9d1558e553e3f2e4ad6d7666292ca8ef))

# 📜 변경 이력 (Changelog)

이 프로젝트의 주요 변경 사항을 기록합니다.

### 🛡️ 안정성 및 품질 강화 (Stability Polish)

- **DevOps:** Husky & lint-staged 도입 (커밋 전 자동 검사)
- **Formatting:** Prettier 설정 강화 (`.prettierrc.mjs`) 및 전체 코드 포맷팅
- **UI/UX:**
  - 검색 결과창 디자인 개선 (Backdrop Blur, Neon Border)
  - 복사 버튼(Copy Button) 스크립트 안정화 (중복 실행 버그 수정)
  - 프롬프트 박스 디자인 변경 (파란색 테두리 + 라벨)
- **Analytics:** Google Analytics 스크립트 위치 수정 (감지율 향상을 위해 Head 최상단으로 이동)
- **SEO:** Sitemap 파일명 변경 (`sitemap-index.xml` -> `sitemap.xml`) 및 모든 페이지 포함 설정 (Pagination 제한 해제)

## [v1.0.0] - 2026-02-04

### 🚀 초기 런칭 (Initial Launch)

- **Framework:** Astro v5 프로젝트 생성
- **Design:** Cyberpunk Dark Mode 테마 적용
- **Content:**
  - 전문가 가이드 3편 (CoT, Few-Shot, Delimiter)
  - 실전 꿀팁 100개 (자동화 생성)
- **Features:**
  - 실시간 검색 (Fuse.js)
  - 페이지네이션 (12개 단위)
  - 태그 필터링 시스템
  - 목차(TOC) 및 관련 글 추천
  - RSS / Atom 피드 및 404 페이지
- **Quality:**
  - E2E 테스트 (Playwright) 및 단위 테스트 (Vitest) 구축
  - CI/CD 배포 스크립트 작성
  - 웹 접근성(A11y) 및 SEO 최적화 (Sitemap, OG Tag)

## [v0.9.0] - Beta

- 글 템플릿 v3.0 (Target, TL;DR, Anatomy) 적용
- 마크다운 문법 매핑 (`>` -> Prompt Box)

## [v0.1.0] - Alpha

- 기본 레이아웃 및 스타일링
- 첫 번째 글 작성
