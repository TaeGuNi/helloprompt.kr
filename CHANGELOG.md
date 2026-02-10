# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.1.0](https://github.com/TaeGuNi/helloprompt.kr/compare/v0.0.11...v1.1.0) (2026-02-10)

### Features

- **404:** add recommended posts to 404 page ([39a6ecb](https://github.com/TaeGuNi/helloprompt.kr/commit/39a6ecb6a30987e4c5fbc62f1ba6a513ba70c427))
- **404:** implement client-side localization for recommended posts ([d41a831](https://github.com/TaeGuNi/helloprompt.kr/commit/d41a8315a0c91887b30b15a9a1d4239a1756a77f))
- **404:** increase recommended posts count to 4 ([b5b374b](https://github.com/TaeGuNi/helloprompt.kr/commit/b5b374bcaf0b4400b971c23c4ae09bc5f0b3f2c3))
- add ads.txt placeholder ([a7b80ed](https://github.com/TaeGuNi/helloprompt.kr/commit/a7b80ed3dbe6edf767ba4f7c226876d749f91b94))
- add HouseAd fallback for unapproved AdSense slots ([3b5d880](https://github.com/TaeGuNi/helloprompt.kr/commit/3b5d880073b0b4c64551be4df2d4610100ffb68d))
- add manual ad units (hybrid strategy) ([9012d17](https://github.com/TaeGuNi/helloprompt.kr/commit/9012d17beb7588139c9e16014ca35b49b2d6396e))
- add real google adsense id and script ([193c833](https://github.com/TaeGuNi/helloprompt.kr/commit/193c8335e08e40dc573e2976f9ef8fc7f7e3e99c))
- complete AdSense preparation (pages, ux, seo) and fix QA scope ([907f53a](https://github.com/TaeGuNi/helloprompt.kr/commit/907f53a0e9e2b4e199a76e5e23d96d4f2a1cb315))
- complete german translation for tip-222 to tip-300 ([6b3e55f](https://github.com/TaeGuNi/helloprompt.kr/commit/6b3e55fe74aa597d94d25a284c5e27e5bbc49fa5))
- complete spanish translation for tip-011 to tip-300 ([64603a5](https://github.com/TaeGuNi/helloprompt.kr/commit/64603a50b0bc8488852ea4502c04c3c8a0f289f1))
- **content:** add 5 daily trending prompts ([e2c3538](https://github.com/TaeGuNi/helloprompt.kr/commit/e2c35387a5ada98a8c64bd31390c6534d83666ed))
- **content:** add 5 developer-focused prompts ([e887fb5](https://github.com/TaeGuNi/helloprompt.kr/commit/e887fb58dddf5a39a8b7b9498a738f28e6f036db))
- **content:** add 5 new AI life-hack articles ([318649f](https://github.com/TaeGuNi/helloprompt.kr/commit/318649f35adb64cb6535bf1934b14a0d018d0879))
- **content:** add/update full-auto-test-post ([f09c0f8](https://github.com/TaeGuNi/helloprompt.kr/commit/f09c0f83df689fbc8ae8d4efbd751c943e18d11d))
- **content:** force update 5 daily posts (QA Passed) ([80a2330](https://github.com/TaeGuNi/helloprompt.kr/commit/80a23309e1f691a7d416cf944a9ed3d7793a4460))
- **content:** improve content quality for adsense approval (fill empty sections, update about page) ([7f71ceb](https://github.com/TaeGuNi/helloprompt.kr/commit/7f71ceb4b310e0af3c889998d252841598103449))
- enhance SEO with JSON-LD, Dynamic OG, and add CI workflow ([5819d21](https://github.com/TaeGuNi/helloprompt.kr/commit/5819d21283bc0d37462b5a939cae7dcb38f6d28a))
- i18n content factory, timezone, and SEO improvements ([5bb68bb](https://github.com/TaeGuNi/helloprompt.kr/commit/5bb68bb08f54e4346543a6e3c742f34bb9b9dd4d))
- **i18n:** implement localization for HouseAd banners ([b610352](https://github.com/TaeGuNi/helloprompt.kr/commit/b610352da875ffd1a3a39b88e5855ba84e781725))
- implement related posts component and update image guide ([a021919](https://github.com/TaeGuNi/helloprompt.kr/commit/a021919e7f3745442b6525c2ecdcec4d7ef73c7a))
- integrate AdSense manual units (top/bottom) and update docs ([81ce624](https://github.com/TaeGuNi/helloprompt.kr/commit/81ce624966e4eaa4967adef6256585bf44df5019))
- **layout:** add Terms and Contact links to footer for AdSense compliance ([b068fc0](https://github.com/TaeGuNi/helloprompt.kr/commit/b068fc0fccfce0036ee84cea6eb6011788b96daf))
- **qa:** implement content quality assurance workflow (pnpm qa) ([12e59a4](https://github.com/TaeGuNi/helloprompt.kr/commit/12e59a471be03480297a4f1ec3220d1c9c67aa9d))
- **search:** implement fuzzy search using Fuse.js & fix content qa ([5181811](https://github.com/TaeGuNi/helloprompt.kr/commit/51818117fba7957bc6d6a78bc3e7ded1c443ea9a))
- **seo:** add robot bait & open dataset for AI agents ([d4caa6b](https://github.com/TaeGuNi/helloprompt.kr/commit/d4caa6ba4341f272868e7a0451b9ed99e2fe74d4))
- standardize date format and display logic with TDD/E2E tests ([7bd3c2f](https://github.com/TaeGuNi/helloprompt.kr/commit/7bd3c2ff8e7a983718b9e499a19bf6003adaf5e8))
- **ux:** implement interactive prompt inputs to boost engagement ([69ade65](https://github.com/TaeGuNi/helloprompt.kr/commit/69ade6589b5818fac3d19f94c3d428320783c36d))

### Bug Fixes

- 다국어 페이지 내비게이션 언어 유지 및 YAML 오류 수정 ([ed12881](https://github.com/TaeGuNi/helloprompt.kr/commit/ed128814bb93b3b44de6bd5824106818c9a87db1))
- **build:** add missing date frontmatter and enhance QA audit ([cf73d30](https://github.com/TaeGuNi/helloprompt.kr/commit/cf73d303cc54f2f902082b95c4d0483a5c1d4876))
- **ci:** add missing typescript-eslint dependency ([5e863ba](https://github.com/TaeGuNi/helloprompt.kr/commit/5e863bafa00f270f7d6660c632f8b96c68fd2045))
- **ci:** correct lychee configuration and arguments ([1e83fec](https://github.com/TaeGuNi/helloprompt.kr/commit/1e83fec12d2ded03e101e9db8207b7fc82f5a00f))
- **ci:** exclude AI chatbot URLs from link check and fix docs formatting ([5b66913](https://github.com/TaeGuNi/helloprompt.kr/commit/5b669138f88a4157d72f45412861bddd377cf17d))
- **ci:** optimize vercel deployment strategy (static dist upload) ([f9801e7](https://github.com/TaeGuNi/helloprompt.kr/commit/f9801e7cc205a0d739fa7fb9af5f014fd2e4e0cb))
- **ci:** use --archive=tgz for vercel deploy to avoid file limit ([db0857f](https://github.com/TaeGuNi/helloprompt.kr/commit/db0857f666ef12d9675cd5cc8a790ed49ac639bd))
- **content:** improve en translation tone (ideally -> unfortunately, tiki-taka -> back-and-forth) ([15f4e0c](https://github.com/TaeGuNi/helloprompt.kr/commit/15f4e0c996a0e55d8c9691a91044cc2af4b465e2))
- correct invalid regex source pattern in vercel.json ([f8cc73d](https://github.com/TaeGuNi/helloprompt.kr/commit/f8cc73daf171a66227880bdaa3b937055800f2be))
- disable relatedPosts logic to resolve runtime reference error in CI ([e9f64a1](https://github.com/TaeGuNi/helloprompt.kr/commit/e9f64a15933925c07eb62b36825d8e27cedcc3ac))
- disable relatedPosts logic to resolve runtime reference error in CI ([1d55d27](https://github.com/TaeGuNi/helloprompt.kr/commit/1d55d27cbf657a605bdff8742056642160ac8985))
- ensure dynamic og image meta tag is correctly rendered ([21e058a](https://github.com/TaeGuNi/helloprompt.kr/commit/21e058a5f3e9bf99fac465430a331fe5ab967ed9))
- **house-ad:** correct broken links to use valid tags and home route ([cb4d897](https://github.com/TaeGuNi/helloprompt.kr/commit/cb4d8974cf6d92f5430276e2f89d3a0812caf9d8))
- **layout:** replace blockquotes with lists in posts and add bookmark button to layout ([c574399](https://github.com/TaeGuNi/helloprompt.kr/commit/c5743998d5b42bd4ea4f3e62c4d89c5945030970))
- **lint:** resolve eslint errors in astro config and pages ([d906564](https://github.com/TaeGuNi/helloprompt.kr/commit/d906564e21598f37fafff93e5bcd829b418b73d9))
- **lint:** resolve remaining eslint errors and improve type safety ([6f3fe1a](https://github.com/TaeGuNi/helloprompt.kr/commit/6f3fe1ad4aa861b055dc2b11ee16a00ea4f14720))
- **privacy:** add missing date field to frontmatter ([23422a4](https://github.com/TaeGuNi/helloprompt.kr/commit/23422a42064fb46a3344d7752189d19acc966437))
- refactor relatedPosts logic to prevent runtime reference error ([ea54c1e](https://github.com/TaeGuNi/helloprompt.kr/commit/ea54c1e6c33fddb94e60a079df5e0ef9b7ffc679))
- remove unsupported vba language tag to resolve shiki errors ([456b840](https://github.com/TaeGuNi/helloprompt.kr/commit/456b8400f7b1a1d907661abfea3958995d51f5d6))
- resolve astro client-side script warning ([ab86f91](https://github.com/TaeGuNi/helloprompt.kr/commit/ab86f9159eeffc52435df7dd68cb3fdce99ec6bf))
- resolve JSX syntax error in AdUnit.astro (fragment) ([a3684c4](https://github.com/TaeGuNi/helloprompt.kr/commit/a3684c4c6b3e0cd4998d131cb0765ba61a99fe21))
- **seo:** prune thin tag pages (< 3 posts) for AdSense approval ([b1803f3](https://github.com/TaeGuNi/helloprompt.kr/commit/b1803f3ce9da502a40bf535e2e4758fb495c92dc))
- **test:** stabilize i18n navigation e2e test ([1999fc3](https://github.com/TaeGuNi/helloprompt.kr/commit/1999fc3599b4f04d28b7030cd20eb328d88dfe74))
- **type:** remove remaining any types in astro pages ([e454f32](https://github.com/TaeGuNi/helloprompt.kr/commit/e454f32760aff4984f6c6d150ccd3ce5f0ce5541))
- **type:** resolve astro check errors and cleanup ts comments ([8ddea5a](https://github.com/TaeGuNi/helloprompt.kr/commit/8ddea5a087b6409913da96fb81102454c0d173c7))

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
