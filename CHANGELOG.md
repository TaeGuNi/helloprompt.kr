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
