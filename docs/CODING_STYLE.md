# 💻 코딩 스타일 가이드 (Coding Style Guide)

협업 시 코드의 일관성을 유지하기 위한 규칙입니다.

## 0. 핵심 원칙 (Core Principles)
- **NO JavaScript:** 프로젝트 내 모든 로직은 반드시 **TypeScript (.ts, .tsx)**로 작성해야 합니다. `.js` 파일 생성 금지.
- **Strict Typing:** `any` 사용을 지양하고, 명시적인 타입을 정의합니다.

## 1. 명명 규칙 (Naming Convention)

### 파일 및 폴더
- **페이지/라우트:** `kebab-case` (예: `prompt-guide.md`, `rss.xml.js`)
- **컴포넌트:** `PascalCase` (예: `PromptCard.astro`, `SearchBar.svelte`)
- **이미지:** `snake_case` 권장 (예: `og_image.png`)

### 변수 및 함수
- **JavaScript/TS:** `camelCase` (예: `const allPosts`, `function getStaticPaths`)
- **CSS Class:** `kebab-case` (예: `.post-card`, `.ai-title`)

## 2. 프로젝트 구조 (Structure)
```text
src/
├── components/   # 재사용 가능한 UI 조각 (버튼, 카드)
├── layouts/      # 페이지 전체 레이아웃 (헤더, 푸터 포함)
├── pages/        # 실제 라우트 (URL)
│   ├── posts/    # 블로그 글 (.md)
│   └── tags/     # 태그 페이지
└── utils/        # 공통 함수 (날짜 포맷팅 등)
```

## 3. 코드 작성 규칙 (Rules)
- **세미콜론:** 항상 사용 (Always use semicolons)
- **따옴표:** 작은따옴표(`'`) 권장
- **비동기:** `async/await` 사용 (Promise 체이닝 지양)
- **타입:** TypeScript 사용 시 `any` 사용 지양 (단, 빌드 문제 시 예외적으로 허용)

## 4. 에러 처리 (Error Handling)
- **Try-Catch:** 예상치 못한 오류가 발생할 수 있는 로직(API 호출, 파일 시스템 접근 등)은 반드시 `try-catch` 블록으로 감쌉니다.
- **Graceful Failure:** 에러 발생 시 사용자에게 친절한 UI를 보여주거나, 적절한 기본값을 제공하여 앱이 중단되지 않도록 합니다.

```typescript
try {
  const data = await fetchData();
} catch (error) {
  console.error('Failed to fetch data:', error);
  // 폴백 UI 처리 또는 기본값 할당
}
```

## 5. 로깅 (Logging)
- **Console Log:** 개발 환경(`dev`)에서만 `console.log`를 사용하고, 프로덕션 배포 전에는 제거합니다.
- **Error Log:** `console.error`는 심각한 오류 발생 시에만 사용하며, 에러 메시지는 명확하게 작성합니다.

## 6. 커밋 메시지 (Commit Message)
- `feat`: 새로운 기능 추가
- `fix`: 버그 수정
- `docs`: 문서 수정
- `style`: 디자인 변경 (로직 영향 없음)
- `refactor`: 코드 리팩토링
- `chore`: 빌드 스크립트 등 기타 작업

## 7. 클린 코드 및 리팩토링 원칙 (Clean Code)

### 성능 최적화 (Performance)
- **Debounce:** 검색, 윈도우 리사이즈 등 빈번한 이벤트에는 반드시 `debounce`를 적용합니다.
- **Fragment:** 반복적인 DOM 조작 시 `DocumentFragment`를 사용하여 리플로우를 최소화합니다.

### 가독성 (Readability)
- **네이밍:** 변수명은 의도가 명확해야 합니다.
    - Bad: `data`, `list`
    - Good: `searchIndex`, `filteredPosts`
- **함수 분리:** 하나의 함수는 하나의 일만 하도록 쪼갭니다. (예: `handleSearch`와 `renderResults` 분리)

### 주석 (Comments)
- **JSDoc:** 복잡한 로직이나 유틸리티 함수에는 JSDoc 스타일의 주석을 답니다.
- **Why:** "무엇을" 하는지보다 **"왜"** 이렇게 짰는지를 설명합니다.
