# ⚙️ DevOps & 인프라 가이드

이 프로젝트의 빌드, 테스트, 배포 파이프라인 및 인프라 구성에 대한 문서입니다.

## 1. 배포 파이프라인 (CI/CD Pipeline)

우리는 **Git Flow** 전략을 기반으로 안전한 배포를 지향합니다.

### 🌿 브랜치 전략 (Branch Strategy)

- **`develop` (CI):** 개발 및 통합 브랜치.
  - Push/PR 시: **통합 CI 워크플로우** 실행 (Lint, Unit, E2E 병렬 수행)
  - **Concurrency:** 동일 PR에 새 커밋 푸시 시 이전 테스트 자동 취소 (자원 절약)
  - 목적: 코드 품질 검증
- **`main` (CD):** 배포 브랜치.
  - Push 시: **Vercel이 자동으로 코드를 가져가서(Pull) 배포합니다.**
  - 목적: 실제 서비스 운영

## 2. 품질 보증 시스템 (CQA System) [New]

우리는 코드뿐만 아니라 **콘텐츠 품질**까지 자동화된 시스템으로 관리합니다.

### 🛡️ 1차 방어선: 로컬 (Husky Hooks)

개발자(작가)가 코드를 커밋하기 전(`pre-commit`), 자동으로 다음 검사가 수행됩니다.

1.  **Staged File Linting:** 변경된 파일에 대해 `prettier` 포맷팅 적용.
2.  **Content Audit (`pnpm qa`):** 변경된 `.md` 파일이 품질 기준(모바일 호환성, 필수 섹션 등)을 충족하는지 검사.
    - `STYLE_TABLE`: 표 대신 리스트 사용 여부
    - `MISSING_INSIGHT`: 작성자 코멘트 섹션 존재 여부
    - `LOC_KOREAN_REMAINS`: 번역 파일 내 한글 잔존 여부

### 🛡️ 2차 방어선: CI (GitHub Actions)

PR 생성 시 전체 테스트 스위트가 실행됩니다.

- **Unit Test (Vitest):** 순수 로직 테스트 (`src/utils.ts` 등)
- **E2E Test (Playwright):** 사용자 시나리오 테스트
- **Full Content Audit:** 전체 문서(`src/pages/**/*.md`) 일괄 품질 검사

## 3. 코드 및 콘텐츠 품질 기준 (Quality Gate)

다음 기준을 만족하지 못하면 배포 파이프라인이 중단됩니다.

- **Test Coverage:** 단위 테스트 커버리지 **90% 이상** 유지
- **Content Quality:** `pnpm qa` 검사 **Error 0건** (Warning은 허용하되 개선 권장)
- **Linting:** `prettier` 및 `astro check` 오류 0건

```bash
# 수동 검수 명령어
pnpm qa        # 전체 문서 검사
pnpm qa:check  # 사이트맵 등 기술적 SEO 검증 (scripts/qa/sitemap-check.ts)
```

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
A. 에러 메시지를 확인하세요. `[MISSING_INSIGHT]` 에러라면 해당 마크다운 파일에 `## 💡 작성자 코멘트 (Insight)` 섹션을 추가해야 합니다.

**Q. E2E 테스트가 실패해요.**
A. 로컬 서버(`pnpm run dev`)가 정상적으로 뜨는지 확인하고, 브라우저 버전이 호환되는지 체크하십시오.
