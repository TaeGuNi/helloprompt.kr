---
layout: /src/layouts/Layout.astro
title: "ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기"
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: "남이 짠 레거시 코드, 보기만 해도 머리 아프다면? AI를 시니어 개발자처럼 활용해 리팩토링하고 테스트 코드까지 한 번에 생성하는 법."
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

- **🎯 추천 대상:** 주니어 개발자, 레거시 프로젝트 유지보수 담당자
- **⏱️ 소요 시간:** 코드 분석 1시간 → 5분
- **🤖 추천 모델:** Claude 3.5 Sonnet, GPT-4o (코딩은 Claude 추천)

- ⭐ **난이도:** ⭐⭐☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

_"이 코드 누가 짰어? (아, 1년 전의 나구나...)"_

복잡한 `if-else` 중첩, 알 수 없는 변수명... 건드리기 무서운 **레거시 코드(Legacy Code)**.
이제 두려워하지 마세요. AI를 여러분의 **Pair Programmer**로 고용하여 안전하게 리팩토링하는 방법을 소개합니다.

---

## ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1. 코드를 **설명(Explain)** 하게 시켜 흐름 먼저 파악하기
2. **클린 코드(Clean Code)** 원칙에 맞춰 리팩토링 요청하기
3. 리팩토링된 코드가 안전한지 **단위 테스트(Unit Test)** 생성하기

---

## 🚀 해결책: "Senior Dev Simulator"

### 🥇 Pro Version (전문가형)

이 프롬프트는 단계별로 진행됩니다. (Chain of Thought)

> **역할 (Role):** 너는 구글, 메타 출신의 `[10년 차 시니어 백엔드 개발자]`야. 클린 코드와 TDD(테스트 주도 개발)의 광신도지.
>
> **상황 (Context):**
> 내가 지금 `[Python/Java]`로 작성된 아주 지저분한 레거시 코드를 가지고 있어. 가독성이 떨어지고 유지보수가 힘들어.
>
> **요청 (Task):**
> 다음 단계를 차례대로 수행해줘.
>
> **Step 1. 코드 분석:** 이 코드가 무슨 역할을 하는지 한 문장으로 요약하고, 문제점(Code Smell)을 3가지 지적해.
> **Step 2. 리팩토링:** 원본의 로직을 유지하되, 함수 분리/변수명 변경 등을 통해 가독성을 개선해. (주석 필수)
> **Step 3. 검증:** 리팩토링된 코드가 정상 작동함을 보장하는 단위 테스트(Unit Test) 코드를 작성해. (Edge Case 포함)
>
> **입력 코드:**
>
> ```python
> [여기에 코드를 붙여넣으세요]
> ```

---

## 💡 작성자 코멘트 (Insight) {#insight}

저는 실제로 5년 된 자바(Java) 프로젝트를 인수인계 받았을 때 이 프롬프트 덕을 톡톡히 봤습니다.
특히 **Step 3(테스트 코드 작성)**가 핵심입니다.
리팩토링은 언제나 '기존 기능 파괴'의 위험이 있는데, AI가 짜준 테스트 케이스를 먼저 돌려보고 통과하면 안심하고 반영할 수 있습니다.

**Tip:** 코드가 너무 길면 함수 단위로 쪼개서 질문하세요. 한 번에 너무 많은 컨텍스트를 주면 AI가 환각을 일으킬 수 있습니다.

---

## 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 코딩은 어떤 모델이 제일 잘하나요?**
  - A: 2026년 2월 현재, 코딩 분야는 **Claude 3.5 Sonnet**이나 **GPT-4o**가 가장 우수합니다. 특히 Claude가 긴 코드를 잘 이해합니다.

- **Q: 보안 문제는 없나요?**
  - A: 회사 내부의 민감한 로직(API Key, 비밀번호 등)은 절대 그대로 붙여넣지 마세요. 더미 데이터로 치환해서 질문해야 합니다.

---

## 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **Persona (페르소나):** "10년 차 시니어 개발자"라는 권위를 부여하여 코드 품질 기준을 높였습니다.
2.  **Step-by-Step (단계별 수행):** 분석 → 수정 → 검증의 논리적 흐름을 강제하여 실수를 줄였습니다.

---

## 📊 증명: Before & After

### ❌ Before (입력)

```python
def calc(a, b, t):
    if t == 1: return a + b
    elif t == 2: return a - b
    # (Updated) (Updated) (Updated) ... 알 수 없는 변수명과 매직 넘버
```

### ✅ After (결과)

```python
def calculate_transaction(amount, tax, type):
    """거래 유형에 따라 최종 금액을 계산합니다."""
    if type == TransactionType.DEPOSIT:
        return amount + tax
    # (Updated) (Updated) (Updated) ... 명확한 변수명과 Enum 사용, Docstring 추가
```

`test_calculate_transaction.py` 파일까지 생성됨.

---

## 🎯 결론 {#conclusion}

더 이상 레거시 코드 앞에서 한숨 쉬지 마세요.
AI와 함께라면 리팩토링은 고통이 아니라 **즐거운 청소**가 됩니다.

오늘 당장 그 함수 하나, 고쳐볼까요? 💻

## Conclusion

## Conclusion

## Conclusion
