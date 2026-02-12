# ⚙️ DevOps & 인프라 가이드

이 프로젝트의 빌드, 테스트, 배포 파이프라인 및 인프라 구성에 대한 문서입니다.

## 1. 배포 파이프라인 (CI/CD Pipeline)

우리는 **Git Flow** 전략을 기반으로 안전한 배포를 지향합니다.

### 🌿 브랜치 전략 (Branch Strategy)

- **`develop` (CI):** 개발 및 통합 브랜치.
  - Push/PR 시: **통합 CI 워크플로우** 실행 (Link Check, Lint, Unit, E2E 병렬 수행)
  - **Concurrency:** 동일 PR에 새 커밋 푸시 시 이전 테스트 자동 취소 (자원 절약)
  - 목적: 코드 및 콘텐츠 품질 검증
- **`main` (CD):** 배포 브랜치.
  - Push 시: **Vercel이 자동으로 코드를 가져가서(Pull) 배포합니다.**
  - 목적: 실제 서비스 운영

## 2. 품질 보증 시스템 (CQA System)

우리는 코드뿐만 아니라 **콘텐츠 품질**까지 자동화된 시스템으로 관리합니다.

### 🛡️ 1차 방어선: 로컬 (Husky Hooks)

개발자가 코드를 커밋(`git commit`)할 때, **변경된 파일(Staged Files)**에 대해서만 다음 검사가 빠르게 실행됩니다.

1.  **Commit Convention (`commitlint`):**
    - 메시지 형식 강제: `type: subject` (예: `feat: add new prompt`)
    - 허용 타입: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
2.  **Lint-Staged (`pre-commit`):**
    - **속도 최적화:** 모든 파일(`code`, `docs`, `posts`)에 대한 `prettier --write`를 **단일 프로세스로 병렬 실행**하여 대기 시간을 최소화했습니다.
    - **Markdown (`src/pages/**/\*.md`):\*\*
      - `fix-placeholders.js`: `[입력]` 같은 플레이스홀더 자동 표준화.
      - `fill-empty-sections.js`: 빈 섹션(Insight/FAQ) 자동 채움.
      - `pnpm qa`: 품질 검사 (표 스타일, 필수 섹션, 인용구 오남용 등).
    - **Code (`*.ts, *.js, *.astro`):**
      - `eslint`: 코드 논리 및 Astro 규칙 검사.
      - `vitest related`: 변경된 파일과 관련된 단위 테스트 실행.

### 🛡️ 2차 방어선: CI (GitHub Actions)

PR 생성 및 Merge 시 전체 프로젝트 스위트가 실행됩니다.

- **Link Integrity (`lychee`):** [New] 모든 문서 및 코드 내의 내부/외부 링크 유효성 검사 (404 방지).
- **Code Quality (`ESLint`):** [New] 전체 코드베이스에 대한 정적 분석 (잠재적 버그 탐지).
- **Unit Test (`Vitest`):** 로직 테스트.
- **E2E Test (`Playwright`):** 사용자 시나리오 테스트.

## 3. 릴리즈 프로세스 (Release Process) [New]

우리는 `standard-version`을 사용하여 시맨틱 버전을 관리하고 `CHANGELOG.md`를 자동 생성합니다.

### 🚀 버전 릴리즈 방법

1. `develop` 브랜치에서 작업이 완료되면 다음 명령어를 실행합니다.
   ```bash
   pnpm release
   ```
2. **자동화되는 작업:**
   - `package.json` 버전 업 (v1.0.0 -> v1.1.0 등)
   - `CHANGELOG.md` 업데이트 (커밋 내역 기반)
   - Git Tag 생성 (v1.1.0)
   - `git push` 및 태그 푸시

## 4. 인프라 (Infrastructure)

- **Platform:** Vercel (Serverless / Edge Network)
- **Node Version:** Node.js v24.13.0 (LTS)
- **Package Manager:** pnpm (Strict Mode)
- **Deployment Strategy:** Vercel Git Integration (Managed Build)

## 5. SEO 및 기술적 검증

배포 전, 로컬 빌드를 통해 기술적 SEO 요소를 검증할 수 있습니다.

```bash
pnpm build
npx tsx scripts/qa/sitemap-check.ts
```

- `robots.txt` 내 사이트맵 선언 여부 확인
- `sitemap-index.xml` 생성 여부 확인

## 6. 트러블 슈팅 (Troubleshooting)

**Q. 커밋이 안 돼요 (Husky pre-commit failed).**
A. 에러 메시지를 확인하세요.

- `[MISSING_INSIGHT]`: 마크다운 파일에 `## 💡 작성자 코멘트 (Insight)` 섹션 추가 필요.
- `[FORMAT_BLOCKQUOTE_MISUSE]`: `Basic/Pro` 섹션 외에는 `> `(인용구) 사용 금지.
- `[LOC_KOREAN_REMAINS]`: 다국어 파일 본문에 한국어가 남아있음.

**Q. 링크 검사(Link Check)가 너무 오래 걸려요.**
A. 로컬에서는 실행하지 않고 CI에서만 실행됩니다. 로컬 확인이 필요하면 `lychee .`를 실행하세요.

**Q. 다국어 파일(번역본)에서 자꾸 에러(`LOC_KOREAN_REMAINS`)가 나요.**
A. `scripts/qa/audit.ts`는 **본문(Body) 내용**에서 한국어를 감지합니다.

- **Frontmatter(상단 설정)의 한국어(태그, 카테고리 등)는 무시**됩니다. 안심하세요.
- 만약 본문에 한국어가 없다면, 번역이 완료되지 않은 파일일 수 있습니다.
- **긴급 조치:** 파일 내용을 모두 지우고 아래와 같이 채워 넣으세요.

  ```markdown
  ---
  (기존 Frontmatter 유지)
  ---

  # Translation in Progress

  This post is currently being translated.
  ```
