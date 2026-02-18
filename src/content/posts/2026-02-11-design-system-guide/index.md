---
layout: /src/layouts/Layout.astro
title: "디자인 시스템 구축: 디자이너와 개발자가 안 싸우는 법"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "디자인/UX"
description: "Figma 변수와 CSS 변수를 동기화하는 법. 토큰(Token) 기반 디자인 시스템 가이드."
tags: ["디자인시스템", "Figma", "CSS", "UI-UX", "협업"]
---

# (Updated) (Updated) (Updated) 🎨 디자인 시스템 구축: 디자이너와 개발자가 안 싸우는 법 {#updated}

- **🎯 추천 대상:** "버튼 색깔이 시안이랑 달라요" 소리 듣는 개발자, "개발자가 내 디자인을 망쳤어" 우는 디자이너
- **⏱️ 소요 시간:** 10분 (개념 정립)
- **🤖 추천 모델:** ChatGPT-4o (시스템 설계)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐☆

_"Primary Color가 `#0055FF` 아니었어? 왜 여긴 `#0050FF` 야?"_

하드코딩은 죄악입니다. **디자인 토큰(Design Token)**을 쓰세요. 색상, 폰트, 여백을 변수로 정의하고 공유하는 약속입니다. 이것만 있으면 디자이너가 피그마를 고치면 코드도 자동으로 바뀝니다.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **Token:** `#0055FF` 대신 `primary-500`이라고 부르기로 약속한다.
2.  **Figma:** Variables 기능으로 토큰을 정의한다.
3.  **Code:** `tailind.config.js`나 CSS 변수에 똑같이 정의한다.

---

## (Updated) (Updated) (Updated) 🚀 해결책: "Design Token Prompt" {#updated}

### (Updated) (Updated) (Updated) 🥉 Basic Version (이름 짓기) {#updated}

변수명을 어떻게 지을지 막막할 때.

> **요청:** "디자인 시스템 컬러 팔레트를 만들 거야. Primary(파랑), Secondary(회색), Error(빨강) 색상을 각각 100~900 단계로 나누고, 시멘틱(Semantic)한 이름(`text-primary`, `bg-surface-default`)을 추천해줘."

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (코드 자동 생성) {#updated}

피그마 토큰을 코드로 변환할 때.

> **역할 (Role):** 너는 디자인 옵스(Design Ops) 엔지니어야.
>
> **입력 (JSON):** (피그마에서 추출한 토큰 JSON)
>
> ```json
> {
>   "colors": {
>     "blue": { "500": "#3b82f6" }
>   }
> }
> ```
>
> **요청 (Task):**
>
> 1. 이 JSON을 **Tailwind CSS 설정 파일(`tailwind.config.ts`)** 형식으로 변환해줘.
> 2. 동시에 **CSS Variables(`:root { --color-blue-500: ... }`)** 코드도 만들어줘.
> 3. 다크 모드(`dark:`) 대응 전략도 짜줘.

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

디자인 시스템은 한 번에 만드는 게 아닙니다. **"가장 많이 쓰는 것(버튼, 인풋)"**부터 하나씩 토큰화하세요. 처음부터 완벽하려고 하면 지쳐서 포기합니다. 이것을 **'점진적 채택(Incremental Adoption)'**이라고 합니다.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 피그마 플러그인 추천 좀요.**
  - A: **'Tokens Studio for Figma'**가 국룰입니다. 이걸로 JSON을 뽑아서 깃허브에 올리면 됩니다.

- **Q: 작은 팀도 필요한가요?**
  - A: 팀원이 2명 이상이라면 무조건 필요합니다. 미래의 나(Future Self)도 남이니까요.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **시멘틱 네이밍:** "파란색"이 아니라 "주요 버튼 배경색"이라고 의미를 부여하게 유도합니다. 그래야 나중에 브랜드 컬러가 초록색으로 바뀌어도 `primary` 변수만 바꾸면 해결되니까요.
2.  **포맷 변환:** JSON을 주면 Tailwind나 CSS로 바꿔주는 건 AI가 가장 잘하는 단순 노동입니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After {#updated}

### (Updated) (Updated) (Updated) ❌ Before (하드코딩) {#updated}

`background-color: #3b82f6;` (색상 바꿀 때 파일 100개 수정 😱)

### (Updated) (Updated) (Updated) ✅ After (디자인 토큰) {#updated}

`background-color: var(--primary-500);` (변수 하나만 바꾸면 앱 전체 적용 🚀)

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

디자인과 개발 사이의 통역사는 '사람'이 아니라 **'시스템'**이어야 합니다.
싸우지 마세요. 토큰으로 대화하세요.

**"이건 `gray-200`이 아니라 `surface-subtle`입니다."** 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
