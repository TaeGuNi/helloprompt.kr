# 💾 커밋 컨벤션 (Commit Convention)

> **"A commit message is a communication tool."**
> 미래의 나와 동료를 위해 친절하고 명확한 히스토리를 남깁니다.

우리는 [Conventional Commits](https://www.conventionalcommits.org/) 스펙을 따릅니다.

---

## 1. 기본 구조 (Structure)

```text
<type>(<scope>): <subject>

<body>

<footer>
```

- **Subject:** 50자 이내, 명령문(Imperative) 사용. (마침표 X)
- **Body:** (선택) 변경의 이유(Why)와 상세 내용(What) 설명.
- **Footer:** (선택) 관련 이슈 번호 (예: `Closes #123`)

---

## 2. 타입 (Types)

가장 많이 쓰는 순서대로 나열했습니다.

| 타입       | 이모지 | 설명                                           |
| :--------- | :----: | :--------------------------------------------- |
| `feat`     |   ✨   | **새로운 기능** 추가                           |
| `fix`      |   🐛   | **버그** 수정                                  |
| `docs`     |   📝   | **문서** (README, 가이드) 수정                 |
| `style`    |   💄   | 코드 포맷팅, 세미콜론 누락 등 (로직 변경 없음) |
| `refactor` |   ♻️   | 기능 변경 없는 **코드 구조 개선**              |
| `test`     |   ✅   | 테스트 코드 추가/수정                          |
| `chore`    |   🔧   | 빌드 설정, 패키지 매니저 설정 등               |
| `perf`     |   ⚡️   | 성능 최적화                                    |
| `ci`       |   👷   | CI/CD 설정 변경 (GitHub Actions 등)            |

---

## 3. 작성 규칙 (Rules)

### 1) 제목 (Subject)

- **명령문 사용:** "수정함" (X) -> "수정" (O) / "Fixed" (X) -> "Fix" (O)
- **간결함:** 50자를 넘기지 않도록 노력합니다.
- **끝에 마침표 금지:** 제목은 문장이 아닙니다.

### 2) 본문 (Body)

- `Subject`만으로 설명이 부족할 때 작성합니다.
- **"무엇을"** 변경했는지보다 **"왜"** 변경했는지에 집중하세요.

### 3) 범위 (Scope) - 선택 사항

- 변경된 모듈이나 범위를 괄호 안에 명시하면 좋습니다.
- 예: `feat(search):`, `fix(ui):`, `docs(readme):`

---

## 4. 예시 (Examples)

**Good:**

```text
feat(search): 실시간 검색 기능 구현

Fuse.js 라이브러리를 도입하여 클라이언트 사이드 검색을 구현함.
사용자가 입력할 때마다 즉시 결과를 필터링하여 보여줌.
```

**Good (간단한 경우):**

```text
docs: WRITER_GUIDE.md 오타 수정
```

**Bad:**

```text
검색 기능 수정함.
```

_(무엇을 어떻게 고쳤는지 알 수 없음)_

---

**커밋 메시지는 프로젝트의 역사입니다.**
깨끗한 역사를 만들어주세요.
