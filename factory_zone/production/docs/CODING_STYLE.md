# 💻 코딩 스타일 가이드 (Coding Style Guide)

> **"Code is read much more often than it is written."**
> 우리는 읽기 쉽고, 예측 가능하며, 유지보수하기 쉬운 코드를 작성합니다.

---

## 0. 핵심 원칙 (Core Principles)

1.  **TypeScript First:** 모든 로직은 TypeScript로 작성합니다. (`.js` 금지)
2.  **Explicit is Better than Implicit:** 암시적인 타입 추론에 의존하기보다, 명시적으로 타입을 정의합니다.
3.  **Component Driven:** UI는 작고 재사용 가능한 컴포넌트 단위로 쪼갭니다.

---

## 1. 명명 규칙 (Naming Convention)

일관된 네이밍은 코드의 가독성을 높이는 가장 쉬운 방법입니다.

### 파일 및 디렉토리

- **컴포넌트:** `PascalCase` (예: `PromptCard.astro`, `Header.tsx`)
- **페이지/라우트:** `kebab-case` (예: `posts/excel-guide.md`, `about-us.astro`)
- **유틸리티/훅:** `camelCase` (예: `dateUtils.ts`, `useSearch.ts`)
- **이미지:** `snake_case` (예: `og_image_default.png`)

### 코드 (Code)

- **변수/함수:** `camelCase` (예: `const totalCount`, `function getPosts`)
- **상수 (Global):** `UPPER_SNAKE_CASE` (예: `const MAX_RETRY = 3`)
- **타입/인터페이스:** `PascalCase` (예: `interface PostProps`, `type UserRole`)
- **CSS 클래스:** `kebab-case` (예: `.btn-primary`, `.card-header`)

---

## 2. TypeScript 가이드 (TypeScript Guidelines)

### 🚫 `any` 금지

`any`는 TypeScript를 쓰는 이유를 무색하게 만듭니다. 정말 피치 못할 사정(외부 라이브러리 타입 부재 등)이 아니라면 절대 사용하지 마세요.

```typescript
// Bad
function process(data: any) { ... }

// Good
interface ProcessData {
  id: string;
  value: number;
}
function process(data: ProcessData) { ... }
```

### 타입 정의 위치

- 컴포넌트 내부에서만 쓰이는 타입: 해당 파일 상단에 정의
- 여러 파일에서 쓰이는 타입: `src/types/` 디렉토리 또는 관련 `.ts` 파일에서 `export`

---

## 3. 컴포넌트 설계 (Component Design)

### Astro 컴포넌트

- **Props 정의:** 파일 상단 `---` 프론트매터 영역에 `interface Props`를 정의하여 타입을 안전하게 받습니다.

```astro
---
interface Props {
  title: string;
  publishedAt: Date;
}
const { title, publishedAt } = Astro.props;
---

<h1>{title}</h1>
```

### 구조화

- 비즈니스 로직이 길어지면 별도의 `hooks`나 `utils`로 분리하세요.
- 뷰(View)와 로직(Logic)을 최대한 분리하여 가독성을 높이세요.

---

## 4. 에러 처리 (Error Handling)

- **예측 가능한 에러:** `try-catch`로 감싸고, 사용자에게 의미 있는 피드백(UI 또는 로그)을 제공하세요.
- **Fail Gracefully:** API 호출 실패 등으로 앱 전체가 멈추지 않도록, 기본값(Fallback)이나 에러 상태 UI를 준비하세요.

---

## 5. 주석 (Comments)

- **Do Not:** 코드를 그대로 설명하는 주석 (예: `// i를 1 증가시킴`)
- **Do:** **"왜(Why)"** 이렇게 짰는지, 어떤 **"제약 사항(Constraints)"**이 있는지 설명하는 주석
- **TODO:** 나중에 해야 할 일은 `// TODO: [작성자] 내용` 형식으로 남기세요.

---

## 6. 포맷팅 및 린트 (Formatting & Lint)

- **Prettier:** 저장 시 자동 포맷팅이 적용되도록 에디터를 설정하세요. (.prettierrc 준수)
- **ESLint:** 경고(Warning)도 에러(Error)처럼 다루고, 무시하지 마세요.

---

**이 가이드를 준수함으로써 우리는 더 빠르고 안전하게 개발할 수 있습니다.**
