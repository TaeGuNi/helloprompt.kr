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

> 🚨 **ABSOLUTE RULE: No Bypass (`--no-verify`) Allowed**
> 어떠한 경우에도 (OOM, Lint Error 포함) `git commit --no-verify`를 사용하여 Husky pre-commit hook을 우회하지 마십시오. 에러가 발생하면 반드시 근본 원인을 해결하고 정상적으로 커밋해야 합니다.

개발자가 코드를 커밋(`git commit`)할 때, **변경된 파일(Staged Files)**에 대해서만 다음 검사가 빠르게 실행됩니다.

1. **Commit Convention (`commitlint`):**
    - 메시지 형식 강제: `type: subject` (예: `feat: add new prompt`)
    - 허용 타입: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`
2. **Lint-Staged (`pre-commit`):**
    - **속도 최적화:** 모든 파일(`code`, `docs`, `posts`)에 대한 `prettier --write`를 **단일 프로세스로 병렬 실행**하여 대기 시간을 최소화했습니다.
    - **Markdown (`src/pages/**/*.md`):**
      - `fix-placeholders.js`: `[입력]` 같은 플레이스홀더 자동 표준화.
      - `fill-empty-sections.js`: 빈 섹션(Insight/FAQ) 자동 채움.
      - `pnpm qa`: 품질 검사 (표 스타일, 필수 섹션, 인용구 오남용 등).
    - **Code (`*.ts, *.js, *.astro`):**
      - `eslint`: 코드 논리 및 Astro 규칙 검사.
      - `vitest related`: 변경된 파일과 관련된 단위 테스트 실행.

### 🛡️ 2차 방어선: CI (GitHub Actions)

PR 생성 및 Merge 시 전체 프로젝트 스위트가 실행됩니다.

- **Content Quality & Artifacts (`pnpm qa`):** [New] 본문 한글/주석 누락 여부(Phase 1) 및 sitemap, rss 생성물(Phase 2) 결함 시 Merge Block 강제.
- **Link Integrity (`lychee`):** 모든 문서 및 코드 내의 내부/외부 링크 유효성 검사 (404 방지).
- **Code Quality (`ESLint` & `Biome`):** 전체 코드베이스에 대한 정적 분석 (잠재적 버그 탐지).
- **Unit Test (`Vitest`):** 로직 테스트.
- **E2E Test (`Playwright`):** 사용자 시나리오 테스트.

## 3. 릴리즈 프로세스 (Release Process) [New]

우리는 통합 CI 툴과 AI 에이전트(`gemini`)가 연계된 **Automated Release Engine (`scripts/release.ts`)**을 배포에 사용합니다.

### 🚀 버전 릴리즈 방법

1. `develop` 브랜치에서 모든 개발 및 로컬 테스트가 완료되면 다음 명령어를 실행합니다.

   ```bash
   pnpm release
   ```

2. **자동화되는 파이프라인 엔진 작업 상세:**
   - **Branch Lock**: `develop` 브랜치가 아니면 즉시 실행을 중지하여 휴먼 에러 차단.
   - **Garbage Cleanup**: `test-*.mjs`, `tmp-*` 등 임시 파일 및 스크립트를 식별 후 자동 삭제 + 보존 커밋 발행.
   - **Quality Assurance**: `pnpm qa` 로컬 사전 무결성 검증 통과 후 진행.
   - **Versioning**: `standard-version`이 실행되어 `package.json` 버전을 올리고 CHANGELOG.md 생성 후 태그 부착.
   - **PR Template Injection**: `.github/pull_request_template.md`를 불러와 체크 항목을 기입하고 자동으로 GitHub PR(`gh pr create`) 생성.
   - **CI Monitoring & Auto-Merge**: CI 상태(`gh pr status`)를 15초 단위로 모니터링하여 성공(`SUCCESS`) 시 `develop -> main` 자동 머지 커밋팅.
   - **Zombie Protocol (Auto-Heal)**: CI가 `FAILURE` 발생 시, 스크립트가 죽지 않고 GitHub Actions 로그를 `gemini` AI에게 던진 뒤, 도출된 Raw Bash 수정 패치를 다운로드하여 다시 커밋 후 CI 재도전을 시도하는 자가 복구 무한 보호 루프 작동 (최대 3회).

## 4. 인프라 (Infrastructure)

- **Platform:** Vercel (Serverless / Edge Network)
- **Node Version:** Node.js v24.13.0 (LTS)
- **Package Manager:** pnpm (Strict Mode)
- **Deployment Strategy:** Vercel Git Integration (Managed Build)

## 5. SEO 및 기술적 검증

배포 전, 로컬 빌드를 통해 기술적 SEO 요소가 정상 생성되었는지 검증할 수 있습니다. 이미 배포 엔진에 포함되어 있습니다.

```bash
pnpm qa
```

위 통합 테스트는 Phase 2 단계에서 아래를 자동 검증합니다.

- 빌드된 `dist/` 내부의 각 언어별 `search.json` 렌더링 검증
- `sitemap.xml` 파싱 유효성 검증 및 갯수 밸런스 체크
- `rss.xml`, `atom.xml` DOM 트리 구조 체크

## 6. 트러블 슈팅 (Troubleshooting)

**Q. 커밋이 안 돼요 (Husky pre-commit failed).**
A. 에러 메시지를 확인하세요.

- `[MISSING_INSIGHT]`: 마크다운 파일에 `## 💡 작성자 코멘트 (Insight)` 섹션 추가 필요.
- `[FORMAT_BLOCKQUOTE_MISUSE]`: `Basic/Pro` 섹션 외에는 인용구(`>`) 사용 금지.
- `[LOC_KOREAN_REMAINS]`: 다국어 파일 본문에 한국어가 남아있음.

**Q. 링크 검사(Link Check)가 너무 오래 걸려요.**
A. 로컬에서는 실행하지 않고 CI에서만 실행됩니다. 로컬 확인이 필요하면 `lychee .`를 실행하세요.

**Q. 다국어 파일(번역본)에서 자꾸 에러(`LOC_KOREAN_REMAINS`)가 나요.**
A. `scripts/qa.ts`는 **본문(Body) 내용**에서 한국어를 감지합니다.

- **Frontmatter(상단 설정)의 한국어(태그, 카테고리 등)는 무시**됩니다. 안심하세요.
- 만약 본문에 한국어가 없다면, 번역이 완료되지 않은 파일일 수 있습니다.

**Q. 릴리즈 파이프라인에서 CI가 계속 실패하며 무한 힐링(Zombie Protocol)에 빠져요.**
A. `scripts/release.ts`는 CI 실패 시 `gemini` 기반 패치를 최대 3번 시도합니다. 만약 3번 이상 실패하며 크래시가 났다면, AI가 혼자 해결할 수 없는 아키텍처 수준의 심각한 결함일 수 있습니다. 즉시 개발팀에 보고하고 수동 배포를 통해 문제를 입증하십시오.
