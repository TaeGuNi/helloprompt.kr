# Hello Prompt (헬로 프롬프트) 👋

![License](https://img.shields.io/badge/license-MIT-blue.svg)

> **AI가 낯선 당신을 위한 가장 친절한 가이드**
> 누구나 쉽게 따라 할 수 있는 실전 프롬프트와 활용 팁을 제공하는 블로그입니다.

## 🚀 주요 기능 (Features)

- **🎨 Cyberpunk UI:** 다크 모드, 네온 글래스모피즘, 반응형 디자인
- **🔍 Smart Search:** Fuse.js 기반 실시간 검색 (한글 지원) + **🔥 인기 태그 추천**
- **📑 Auto TOC:** 게시글 목차 자동 생성 및 네비게이션
- **🤖 Prompt Box:** 복사하기 쉬운 전용 UI (PROMPT/RESULT)
- **🔗 Related Posts:** 태그 기반 관련 글 자동 추천 시스템
- **🛡️ CQA System:** 콘텐츠 품질 자동 검수 (`pnpm qa`) 및 휴먼 터치(Human Touch) 검증

## 🛠 기술 스택 (Tech Stack)

- **Runtime:** Node.js v24.13.0 (LTS)
- **Framework:** [Astro](https://astro.build) (v5)
- **Language:** TypeScript
- **Styling:** CSS (No external UI libraries)
- **Quality Assurance:** Husky, Lint-staged, Custom QA Scripts
- **Test:** Vitest, Playwright
- **Deploy:** Vercel

## 🏃‍♂️ 실행 방법 (How to Run)

```bash
# 0. Node 버전 설정
nvm use

# 1. 의존성 설치
pnpm install

# 2. 개발 서버 실행
pnpm run dev -- --host

# 3. 품질 검수 (New!)
pnpm qa        # 전체 문서 품질 체크 (모바일 호환성, 필수 섹션 등)

# 4. 테스트 실행
pnpm test       # Unit Test
pnpm test:e2e   # E2E Test

# 5. 배포 (자동 검사 포함)
pnpm run deploy
```

## 📚 프로젝트 문서 (Documentation)

이 프로젝트는 체계적인 문서화를 지향합니다.

### 🏛️ 기획 및 관리

- [프로젝트 관리 & 로드맵](docs/MANAGEMENT.md): 비전, 일정, KPI
- [소프트웨어 아키텍처](docs/ARCHITECTURE.md): 시스템 구조 및 데이터 흐름
- [변경 이력 (Changelog)](CHANGELOG.md): 버전별 변경 사항

### 🎨 디자인 및 콘텐츠

- [디자인 시스템](docs/DESIGN_SYSTEM.md): 컬러, 폰트, UI 가이드라인
- [콘텐츠 품질 평가 모델](docs/QUALITY_MODEL.md): 글 발행 기준표 (**700점 만점**)
- [작가 가이드](docs/WRITER_GUIDE.md): 톤앤매너 및 글 작성법 (**Human Insight 필수**)

### 💻 개발 및 운영

- [코딩 스타일 가이드](docs/CODING_STYLE.md): 변수명, 폴더 구조 규칙
- [Git 커밋 컨벤션](docs/COMMIT_CONVENTION.md): 커밋 메시지 규칙
- [DevOps & 인프라](docs/DEVOPS.md): 배포 파이프라인 및 테스트 전략
- [AdSense 가이드](docs/ADSENSE_GUIDE.md): 광고 설정 및 단위 ID 관리
- [토큰 최적화 가이드](docs/TOKEN_OPTIMIZATION.md): AI 비용 절감 전략
- [AI 협업 가이드](GEMINI.md): AI 에이전트를 위한 지침서

## ✍️ 글 작성 가이드 (Writer's Guide)

1. `docs/POST_TEMPLATE.md` (v4.0) 복사
2. **필수 섹션 작성:** `Insight`, `FAQ`, `Customization` 포함
3. **이미지:** `src/assets/images/` 경로 사용 (자동 최적화)
4. **검수:** `pnpm qa` 실행하여 통과 여부 확인

## 🤝 기여하기 (Contributing)

Hello Prompt는 오픈소스 커뮤니티의 기여를 환영합니다.
버그 제보, 기능 제안, PR 제출 등 다양한 방법으로 참여할 수 있습니다.

1. 이 저장소를 포크(Fork)합니다.
2. 새로운 브랜치를 생성합니다. (`git checkout -b feature/AmazingFeature`)
3. 변경 사항을 커밋합니다. (`git commit -m 'feat: Add some AmazingFeature'`)
4. 브랜치에 푸시합니다. (`git push origin feature/AmazingFeature`)
5. Pull Request를 생성합니다.

## 📂 폴더 구조

- `src/content/posts/`: 블로그 글 (Markdown) (Master Collection)
- `src/layouts/`: 레이아웃 및 디자인
- `src/components/`: 재사용 가능한 UI 컴포넌트 (`RelatedPosts`, `AdUnit` 등)
- `scripts/qa/`: 품질 검수 스크립트
- `docs/`: 프로젝트 관리 문서
