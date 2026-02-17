---
layout: /src/layouts/Layout.astro
title: "AI 코드 리뷰어: 내 똥 코드를 실리콘밸리 스타일로 (Code Review)"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "개발/코딩"
description: "시니어 개발자가 없어도 괜찮아. AI에게 코드 리뷰를 맡기고 클린 코드로 거듭나는 프롬프트."
tags: ["코드리뷰", "개발자", "클린코드", "리팩토링", "ChatGPT"]
---

# (Updated) 💻 AI 코드 리뷰어: 내 똥 코드를 실리콘밸리 스타일로

- **🎯 추천 대상:** 사수 없이 혼자 일하는 주니어 개발자, 스파게티 코드에 고통받는 유지보수 담당자
- **⏱️ 소요 시간:** 1분
- **🤖 추천 모델:** Claude 3.5 Sonnet (코드 분석력 최상)

- **📊 난이도:** ⭐☆☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐⭐

_"이 코드가 돌아가는 건 알겠는데... 변수명이 `a`, `b`, `temp`라니... 나중에 내가 봐도 모를 것 같아."_

코드는 짜는 시간보다 읽는 시간이 더 깁니다. 하지만 바쁜 팀장님께 매번 리뷰를 부탁하기는 눈치 보이죠. 이제 **AI 시니어 개발자**를 채용하세요. 당신의 코드를 무자비하게(하지만 친절하게) 뜯어고쳐 줄 겁니다.

---

## (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  리뷰받고 싶은 코드를 복사한다.
2.  AI에게 **"코드 리뷰 해줘"**라고 던진다.
3.  지적받은 내용을 수정해서 커밋한다.

---

## (Updated) 🚀 해결책: "Code Reviewer Prompt"

### (Updated) 🥉 Basic Version (버그 찾기)

급하게 에러만 잡고 싶을 때.

> **역할:** 너는 버그 헌터야.
> **코드:** `[여기에 코드 붙여넣기]`
> **요청:** 이 코드에 잠재적인 버그나 에러가 발생할 만한 부분이 있는지 찾아줘. 없으면 "Clean"이라고 말해.

<br>

### (Updated) 🥇 Pro Version (구글 스타일 리팩토링)

변수명부터 아키텍처까지 싹 뜯어고칠 때.

> **역할 (Role):** 너는 구글(Google)의 10년 차 수석 엔지니어이자 'Clean Code'의 저자야.
>
> **입력 (Input Code):**
> `[여기에 코드 전체 붙여넣기]`
>
> **요청 (Task):**
> 이 코드를 다음 기준에 맞춰 리뷰하고 리팩토링해줘.
>
> 1.  **가독성 (Readability):** 변수명과 함수명을 직관적으로 변경해. (예: `getUser` -> `fetchUserProfile`)
> 2.  **효율성 (Efficiency):** 시간 복잡도(O)를 줄일 수 있는 알고리즘이 있다면 제안해.
> 3.  **안전성 (Safety):** 예외 처리(Try-Catch)가 빠진 곳을 보완해.
> 4.  **주석 (Comments):** 중요한 로직에는 '왜(Why)' 이렇게 짰는지 설명을 달아줘.
>
> **출력 (Output):**
>
> - 리뷰 요약 (문제점 3가지)
> - 리팩토링된 전체 코드

---

## (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **페르소나 부여:** "구글 엔지니어"라는 권위를 부여하여 AI가 더 엄격한 기준으로 코드를 보게 만듭니다.
2.  **구체적 기준 제시:** 단순히 "고쳐줘"가 아니라, 가독성/효율성/안전성이라는 3가지 잣대를 들이대어 리뷰의 품질을 높입니다.

---

## (Updated) 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### (Updated) ❌ Before (스파게티 코드)

```javascript
function c(x) {
  if (x < 10) return true;
  else return false;
}
```

### (Updated) ✅ After (클린 코드)

```javascript
/**
 * 사용자의 입력값이 유효 범위를 초과했는지 검사합니다.
 * @param {number} inputVal - 사용자 입력값
 * @returns {boolean} - 유효하면 true
 */
const isValidInput = (inputVal) => {
  const MAX_LIMIT = 10;
  return inputVal < MAX_LIMIT;
};
```

---

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## (Updated) 🎯 결론 {#conclusion}

좋은 코드는 시(Poem)와 같습니다. 읽기 편해야 합니다.
AI 리뷰어는 지치지 않습니다. 100번 물어봐도 화내지 않습니다.

지금 바로 당신의 코드를 던져보세요.
**"LGTM (Looks Good To Me)"**를 받을 때까지! 🍷

## (Updated) Conclusion

Wait, there is more...
