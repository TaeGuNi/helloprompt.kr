---
layout: /src/layouts/Layout.astro
title: 커밋 전 자동 점검! AI Git Hook 생성기 (Git Hook Generator)
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: DevOps
description: Husky와 pre-commit을 위한 완벽한 쉘 스크립트를 AI로 1초 만에 만드세요. 코드 품질을 자동으로 사수하는 방법입니다.
tags: [AI, Git, DevOps, Automation]
---

## (Updated) 1. Intro

"아차, 린트(Lint) 돌리는 거 깜빡했다!" 하고 커밋했다가 CI/CD 파이프라인에서 빨간 불이 들어온 경험, 다들 있으시죠? 🚨
사람은 실수를 하지만, 스크립트는 실수를 하지 않습니다. Git Hook을 사용하면 커밋(commit)이나 푸시(push) 전에 자동으로 테스트를 돌리고, 포맷을 맞추고, 비밀키가 포함되었는지 검사할 수 있습니다.
하지만 쉘 스크립트(Shell Script)를 직접 짜는 건 꽤나 귀찮고 어려운 일입니다. AI에게 상황만 설명하면, 완벽한 Hook 스크립트를 짜줍니다.

## (Updated) 2. TL;DR

- **핵심:** 커밋/푸시 전에 실행할 자동화 스크립트(Git Hooks)를 AI로 작성합니다.
- **준비물:** Husky 설정 또는 `.git/hooks` 디렉토리, 원하는 자동화 규칙.
- **효과:** 팀 전체의 코드 컨벤션 강제, 실수 방지, CI 실패 확률 획기적 감소.

## (Updated) 3. Solution (The Prompt)

원하는 자동화 규칙을 설명하고 스크립트를 요청해 보세요.

**⚓️ Git Hook 스크립트 생성 프롬프트**

```markdown
Git Hook으로 사용할 쉘 스크립트를 작성해 주세요.

**상황/요구사항:**

- [예: Husky를 사용 중입니다 / 순수 .git/hooks를 사용합니다]
- [예: 'git commit' 하기 전에 'npm run lint'와 'npm run test'를 실행하고 싶어.]
- [예: 만약 테스트가 실패하면 커밋을 막아야 해.]
- [예: 커밋 메시지가 'feat:', 'fix:' 등으로 시작하는지 검사하는 로직도 추가해줘.]

**요청 사항:**

1. **스크립트 작성:** 바로 사용할 수 있는 쉘 스크립트(sh/bash) 코드를 작성해 주세요.
2. **설치 방법:** 이 스크립트를 어디에 저장하고, 실행 권한(`chmod +x`)은 어떻게 주는지 간단히 설명해 주세요.
3. **Husky 설정(선택):** 만약 Husky를 쓴다면 `package.json`이나 `.husky/` 설정 방법도 알려주세요.
```

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

저는 이 프롬프트로 "메인 브랜치(main/master)에 직접 푸시하는 것을 막는 pre-push 훅"을 만들어서 사용합니다. 실수로 `git push origin main`을 입력했을 때, AI가 짜준 스크립트가 "잠깐! PR을 통해서만 병합할 수 있어요."라고 막아줄 때의 안도감이란! 🛡️

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 윈도우(Windows)에서도 작동하나요?**
A. Git Bash나 WSL을 사용한다면 작동하지만, 팀원들의 OS가 다양하다면 Husky와 같은 Node.js 기반 도구를 사용하는 것이 호환성 면에서 좋습니다.

**Q. 스크립트가 너무 느리면 어떡하나요?**
A. 모든 파일을 검사하지 말고, `git diff --cached --name-only` 명령어를 써서 "변경된 파일"만 검사하도록 프롬프트에 요청해 보세요. 훨씬 빨라집니다.

## (Updated) Conclusion

Wait, there is more...
