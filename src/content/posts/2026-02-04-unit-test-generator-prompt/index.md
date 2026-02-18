---
layout: /src/layouts/Layout.astro
title: "테스트 코드 작성, 5분 만에 끝내는 프롬프트"
author: "Zzabbis"
date: "2026-02-07T09:10:33.155Z"
updatedDate: "2026-02-07T09:10:33.155Z"
category: "코딩/개발"
description: "지루하고 귀찮은 유닛 테스트(Unit Test) 작성을 AI에게 맡겨보세요. 커버리지 100%에 도전!"
tags: ["테스트코드", "TDD", "Jest", "PyTest", "QA"]
---

# (Updated) (Updated) (Updated) 📝 테스트 코드 작성, 5분 만에 끝내는 프롬프트 {#updated}

- **🎯 추천 대상:** 누구나
- **⏱️ 소요 시간:** 5분
- **🤖 추천 모델:** 모든 AI 모델

- **📊 난이도:** ⭐⭐☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐☆

_"코드 짜기도 바쁜데 테스트 코드를 언제 다 만들어요?"_

테스트 코드의 중요성은 모두가 알지만, 막상 짜려면 메인 로직보다 시간이 더 걸릴 때가 많습니다.
엣지 케이스(Edge Case) 생각하랴, 모킹(Mocking) 하랴... 머리 아프셨죠?
이제 비즈니스 로직만 붙여넣으세요. 꼼꼼한 테스트 코드는 AI가 작성해 드립니다.

---

## (Updated) (Updated) (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1. 정상 동작(Happy Path)뿐 아니라 예외 케이스까지 커버
2. 널리 쓰이는 테스트 프레임워크 문법 완벽 지원
3. Mock 데이터 자동 생성

---

## (Updated) (Updated) (Updated) 🚀 해결책: "유닛 테스트 생성기" {#updated}

### (Updated) (Updated) (Updated) 🥉 Basic Version (기본형) {#updated}

빠르게 결과만 필요할 때 사용하세요.

> **역할:** 너는 꼼꼼하고 완벽주의적인 QA 엔지니어이자 테스트 자동화 전문가야.
> **요청:** 지루하고 귀찮은 유닛 테스트(Unit Test) 작성을 AI에게 맡겨보세요. 커버리지 100%에 도전!해줘.

<br>

### (Updated) (Updated) (Updated) 🥇 Pro Version (전문가형) {#updated}

디테일한 퀄리티가 필요할 때 사용하세요.

아래 **PROMPT** 내용을 복사해서 사용하세요.

> **역할 (Role):** 너는 꼼꼼하고 완벽주의적인 QA 엔지니어이자 테스트 자동화 전문가야.
>
> **상황 (Context):** 나는 `[사용 언어/프레임워크]`로 작성된 코드를 가지고 있어. 이 코드의 신뢰성을 높이기 위해 유닛 테스트(Unit Test)가 필요해.
>
> **요청 (Task):**
>
> 1. 제공된 코드를 분석하여 테스트 케이스 목록을 먼저 작성해줘. (성공 케이스, 실패 케이스, 경계값 분석 포함)
> 2. `[테스트 라이브러리 이름 (예: Jest, PyTest, JUnit)]`를 사용하여 실행 가능한 테스트 코드를 작성해줘.
> 3. 외부 의존성이 있다면 Mocking 처리를 해줘.
> 4. 각 테스트 케이스에 대해 무엇을 검증하는지 주석을 달아줘.
>
> **코드:**

> [여기에 테스트할 코드를 붙여넣으세요]

> **제약사항 (Constraints):**
>
> - 테스트 커버리지가 가능한 높게 나오도록 다양한 시나리오를 포함해.
> - 코드는 즉시 복사해서 실행할 수 있는 형태로 제공해.
> - 테스트 설명(Description)은 한글로 작성해줘.

---

## (Updated) (Updated) (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

이 프롬프트는 명확한 페르소나 설정과 구체적인 지시사항(Task)을 조합하여 AI의 의도를 정확히 파악하도록 설계되었습니다. 단계별 사고(Chain of Thought)를 유도하여 논리적인 답변을 얻을 수 있습니다.

---

## (Updated) (Updated) (Updated) 📊 증명: Before & After {#updated}

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### (Updated) (Updated) (Updated) ❌ Before (입력 코드) {#updated}

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("0으로 나눌 수 없습니다.");
  return a / b;
}
```

### (Updated) (Updated) (Updated) ✅ After (결과) {#updated}

```javascript
describe("divide 함수 테스트", () => {
  // 1. 정상 동작 테스트
  test("10을 2로 나누면 5가 되어야 한다", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. 예외 처리 테스트
  test("0으로 나누면 에러가 발생해야 한다", () => {
    expect(() => divide(10, 0)).toThrow("0으로 나눌 수 없습니다.");
  });

  // 3. 경계값/특수값 테스트
  test("음수를 나누면 음수가 되어야 한다", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});
```

---

## (Updated) (Updated) (Updated) 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## (Updated) (Updated) (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## (Updated) (Updated) (Updated) 🎯 결론 {#conclusion}

버그는 배포된 후에 발견하면 수정 비용이 100배로 뜁니다.
이 프롬프트로 개발 단계에서 버그를 박멸하고, 자신 있게 'Merge' 버튼을 누르세요! 🍷

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
