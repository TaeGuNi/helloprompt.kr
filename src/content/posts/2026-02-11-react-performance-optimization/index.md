---
layout: /src/layouts/Layout.astro
title: "React 성능 최적화: 렌더링 낭비 0%에 도전한다 (useMemo, useCallback)"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "개발/코딩"
description: "습관적으로 쓰는 useMemo, 정말 필요할까? React Profiler로 병목을 찾고 렌더링 최적화하는 법."
tags: ["React", "성능최적화", "프론트엔드", "JavaScript", "렌더링"]
---

# (Updated) ⚡️ React 성능 최적화: 렌더링 낭비 0%에 도전한다 {#updated}

- **🎯 추천 대상:** "앱이 왜 이렇게 버벅대지?" 고민하는 프론트엔드 개발자, `useEffect` 무한 루프에 빠져본 사람
- **⏱️ 소요 시간:** 10분 (Profiler 분석)
- **🤖 추천 모델:** Claude 3.5 Sonnet (코드 문맥 이해)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"useMemo랑 useCallback... 좋다는 건 아는데 어디에 써야 해?"_

남발하면 오히려 독이 됩니다. React 성능 최적화의 핵심은 **"불필요한 렌더링(Re-render)을 막는 것"**입니다. 감으로 때려 맞히지 말고, **React DevTools**와 AI의 분석을 통해 정확한 수술 부위를 찾으세요.

---

## (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **React DevTools Profiler**로 느린 컴포넌트를 찾는다. (회색 말고 노란색/빨간색)
2.  해당 컴포넌트 코드를 복사해서 AI에게 준다.
3.  **"불필요한 렌더링 원인 찾고 최적화해줘"**라고 시킨다.

---

## (Updated) 🚀 해결책: "React Performance Doctor" {#updated}

### (Updated) 🥉 Basic Version (메모이제이션 적용) {#updated}

특정 함수나 값이 자꾸 재생성될 때.

> **코드:** `[컴포넌트 코드]`
> **요청:** "이 컴포넌트가 부모가 리렌더링될 때마다 같이 리렌더링돼. `React.memo`랑 `useCallback`을 어디에 적용해야 막을 수 있는지 알려줘."

<br>

### (Updated) 🥇 Pro Version (근본적인 구조 개선) {#updated}

상태 관리(State Management)부터 뜯어고칠 때.

> **역할 (Role):** 너는 메타(Meta)의 React Core 팀 엔지니어여.
>
> **상황 (Context):**
>
> - 거대한 `Table` 컴포넌트가 있다.
> - `Input`에 글자 하나 칠 때마다 테이블 전체(행 100개)가 리렌더링된다.
> - 상태(`inputValue`)가 최상위 부모에 있다.
>
> **요청 (Task):**
>
> 1. **상태 분리 (State Colocation):** 입력창 상태를 하위 컴포넌트로 내리거나 분리해서 테이블 리렌더링을 막는 구조로 리팩토링해줘.
> 2. **가상화 (Virtualization):** 행이 1000개가 넘어가면 느려져. `react-window` 도입 예시 코드를 짜줘.
> 3. **안티 패턴 지적:** 현재 코드에서 성능을 갉아먹는 나쁜 습관(예: 인라인 함수 정의)을 찾아서 고쳐줘.

---

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

`useMemo`보다 더 좋은 최적화는 **"구조 변경"**입니다.
상태(State)를 필요한 곳으로 최대한 밀어 넣으세요(Push down).
`App` 컴포넌트에 모든 상태를 몰아넣으면, 엔터 한 번 칠 때마다 앱 전체가 새로 그려집니다. 이건 `memo`로도 못 막습니다.

---

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 모든 함수에 useCallback 쓰면 안 되나요?**
  - A: 안 됩니다. 메모이제이션 자체도 비용(메모리 점유, 비교 연산)이 듭니다. 렌더링 비용이 싼(단순 HTML) 컴포넌트는 그냥 두는 게 더 빠릅니다.

- **Q: React Compiler(React 19) 쓰면 이거 안 해도 되나요?**
  - A: React 19가 나오면 많은 부분이 자동화되지만, **상태 구조 설계**는 여전히 인간의 몫입니다.

---

## (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **구체적 증상(Input 칠 때 렉걸림):** 증상을 말해주면 AI가 "아, 상태가 너무 상위에 있구나"라고 원인을 바로 파악합니다.
2.  **고급 패턴 요구(가상화):** 단순히 "빠르게 해줘"가 아니라 `react-window` 같은 구체적인 솔루션을 언급하면, 실무에 바로 적용 가능한 코드를 줍니다.

---

## (Updated) 📊 증명: Before & After {#updated}

### (Updated) ❌ Before (통짜 리렌더링) {#updated}

키보드 입력 1회 -> `App` 리렌더링 -> `Header`, `Table`, `Footer` 전부 리렌더링 (30ms 소요 🐢)

### (Updated) ✅ After (상태 분리 + 가상화) {#updated}

키보드 입력 1회 -> `SearchInput` 컴포넌트만 리렌더링. (Table은 가만히 있음) (1ms 소요 🚀)

---

## (Updated) 🎯 결론 {#conclusion}

사용자는 0.1초의 렉도 용서하지 않습니다.
당신의 앱이 무겁게 느껴진다면, 기능이 많아서가 아니라 **최적화가 안 돼서**입니다.

지금 바로 DevTools를 켜세요.
**빨간색 그래프를 없애버립시다.** 🍷

## (Updated) Conclusion

Wait, there is more...
