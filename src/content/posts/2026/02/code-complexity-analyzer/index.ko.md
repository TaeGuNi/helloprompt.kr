---
layout: /src/layouts/Layout.astro
title: 복잡한 코드는 이제 그만! AI 복잡도 분석기 (Code Complexity Analyzer)
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: Development
description: "스파게티 코드를 분석하고 명확한 리팩토링 포인트를 짚어주는 AI 프롬프트입니다. 복잡한 로직을 단순하고 유지보수하기 쉽게 풀어내세요."
tags: [AI, Refactoring, Clean Code, Development]
---

# 🍝 복잡한 코드는 이제 그만! AI 복잡도 분석기 (Code Complexity Analyzer)

- **🎯 추천 대상:** 주니어 개발자, 레거시 코드를 물려받은 유지보수 담당자, 코드 리뷰어
- **⏱️ 소요 시간:** 1시간 → 3분 단축
- **🤖 추천 모델:** GPT-4o, Claude 3.5 Sonnet (코드 추론 능력이 뛰어난 모델 권장)

- ⭐ **난이도:** ⭐⭐⭐☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"if문 안에 for문, 그 안에 또 if문... 돌아가긴 하는데 건드리면 터질 것 같은 시한폭탄 코드를 마주하고 절망한 적 있으신가요?"_

개발을 하다 보면 필연적으로 복잡도가 높은 '스파게티 코드'를 마주하게 됩니다. 기능 추가와 버그 수정이 반복되면서 코드는 점점 비대해지고, 순환 복잡도(Cyclomatic Complexity)는 치솟습니다. 이런 코드는 읽기 힘들 뿐만 아니라, 수정 시 사이드 이펙트를 예측하기 어려워 유지보수 악몽의 주범이 됩니다.

하지만 어디서부터 어떻게 쪼개야 할지 막막하다면? AI에게 코드 복잡도 분석을 맡겨보세요. 객관적인 지표로 문제점을 진단하고, 디자인 패턴과 클린 코드 원칙에 입각한 구체적인 리팩토링 전략을 제시합니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. 읽기 힘든 중첩 조건문과 거대한 함수를 AI가 구조적으로 분석합니다.
2. 조기 리턴(Early Return), 함수 추출(Extract Method) 등 실무적인 리팩토링 기법을 제안받습니다.
3. 로직의 변경 없이 가독성과 유지보수성이 극대화된 깔끔한 코드를 얻을 수 있습니다.

---

## 🚀 해결책: "코드 복잡도 분석 및 리팩토링 프롬프트"

### 🥉 Basic Version (기본형)

빠르게 코드의 문제점만 파악하고 싶을 때 사용하세요.

> **역할:** 너는 `[시니어 백엔드 개발자]`야.
> **요청:** 아래 코드의 복잡도를 분석하고, 어떻게 리팩토링하면 좋을지 3가지 포인트로 짚어줘.
>
> ```
> [여기에 코드 붙여넣기]
> ```

<br>

### 🥇 Pro Version (전문가형)

정확한 지표 분석과 구체적인 디자인 패턴 적용이 필요할 때 사용하세요.

> **역할 (Role):** 너는 클린 코드 아키텍처에 정통한 `[10년 차 시니어 소프트웨어 엔지니어]`야.
>
> **상황 (Context):**
>
> - 배경: 현재 `[언어/프레임워크, 예: TypeScript/NestJS]`로 작성된 레거시 코드를 리팩토링하고 있어.
> - 목표: 코드의 순환 복잡도를 낮추고 가독성과 유지보수성을 극대화하는 것.
>
> **요청 (Task):**
>
> 1. **복잡도 진단:** 제공된 코드의 순환 복잡도(Cyclomatic Complexity)와 인지적 복잡도(Cognitive Complexity)를 평가하고 주요 원인(깊은 중첩, 단일 책임 원칙 위배 등)을 분석해 줘.
> 2. **리팩토링 전략:** 조기 리턴(Guard Clauses), 함수 추출(Extract Method), 다형성(Polymorphism) 활용 등 구체적인 리팩토링 기법을 제안해 줘.
> 3. **개선된 코드:** 위 전략을 적용하여, 기존 비즈니스 로직은 100% 동일하게 유지하되 구조가 개선된 코드를 작성해 줘.
>
> **코드 입력 (Code):**
>
> ```
> [여기에 리팩토링할 코드를 붙여넣으세요]
> ```
>
> **제약사항 (Constraints):**
>
> - 개선된 코드에는 각 변경 사항에 대한 짧은 주석을 달아줘.
> - 설명은 주니어 개발자가 이해할 수 있도록 친절하고 단계적으로 해줘.
>
> **주의사항 (Warning):**
>
> - 원본 코드의 비즈니스 로직(결과값, 사이드 이펙트 등)이 절대 변경되어서는 안 돼.

---

## 💡 작성자 코멘트 (Insight)

실무에서 남이 짠(혹은 과거의 내가 짠) 레거시 코드를 리뷰하거나 수정해야 할 때 가장 먼저 사용하는 프롬프트입니다. AI가 단순히 코드를 짧게 줄여주는 것을 넘어, "이 조건문은 뎁스(Depth)가 4단계이므로 Guard Clauses로 빼는 것이 낫습니다"처럼 논리적인 명분을 제공해 줍니다.

특히 코드 리뷰를 앞두고 내 코드의 복잡도를 자체 검열할 때 매우 유용합니다. PR(Pull Request)을 올리기 전 이 프롬프트로 한 번만 필터링을 거치면, 동료들로부터 "코드 깔끔하네요"라는 피드백을 받을 확률이 비약적으로 상승합니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: 파일 전체를 한 번에 넣어서 분석해도 되나요?**
  - A: LLM의 컨텍스트 윈도우 한계와 집중도 저하로 인해 추천하지 않습니다. 수백 줄이 넘는 파일보다는, 50~150줄 내외의 '특정 함수'나 '단일 클래스' 단위로 쪼개어 프롬프트에 입력하는 것이 훨씬 날카롭고 정확한 리팩토링 결과를 얻을 수 있습니다.

- **Q: AI가 리팩토링한 코드를 그대로 프로덕션에 적용해도 안전한가요?**
  - A: 절대 그대로 복사해서 붙여넣지 마세요! AI는 가끔 비즈니스 로직의 미묘한 엣지 케이스를 놓치고 로직을 변형(Hallucination)시킬 위험이 있습니다. **반드시 기존 유닛 테스트(Unit Test)를 통과하는지 확인**한 후 반영해야 합니다.

- **Q: 특정 언어나 프레임워크에 맞춰서 개선해 주나요?**
  - A: 네, Pro 버전에 있는 `[언어/프레임워크]` 변수에 'Java/Spring Boot' 또는 'Python/FastAPI' 등을 명시하면 해당 생태계에서 권장하는 네이밍 컨벤션과 디자인 패턴을 반영하여 코드를 개선해 줍니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1. **지표 중심의 진단 요구:** "단순히 예쁘게 짜줘"가 아니라, '순환 복잡도'라는 구체적인 소프트웨어 공학 지표를 요구하여 AI가 구조적인 결함에 집중하도록 유도합니다.
2. **동작 유지 제약(Constraints):** 리팩토링의 제1원칙인 '외부 동작의 불변성'을 명시하여, AI가 로직 자체를 마음대로 수정하는 위험을 최소화했습니다.

---

## 📊 증명: Before & After

### ❌ Before (입력: 중첩이 심한 스파게티 코드)

```javascript
function processOrder(order) {
  if (order != null) {
    if (order.status === "PENDING") {
      if (order.items && order.items.length > 0) {
        let total = 0;
        for (let i = 0; i < order.items.length; i++) {
          if (order.items[i].price > 0) {
            total += order.items[i].price * order.items[i].quantity;
          }
        }
        if (total > 100) {
          order.discount = total * 0.1;
        } else {
          order.discount = 0;
        }
        return total - order.discount;
      } else {
        return 0;
      }
    } else {
      throw new Error("Order is not pending");
    }
  } else {
    throw new Error("Invalid order");
  }
}
```

### ✅ After (결과: Guard Clauses 및 배열 메서드를 활용한 깔끔한 코드)

```javascript
function processOrder(order) {
  // 1. Guard Clauses: 예외 상황 조기 리턴 (중첩 감소)
  if (!order) throw new Error("Invalid order");
  if (order.status !== "PENDING") throw new Error("Order is not pending");
  if (!order.items || order.items.length === 0) return 0;

  // 2. 고차 함수 활용: 반복문 단순화
  const total = order.items
    .filter((item) => item.price > 0)
    .reduce((sum, item) => sum + item.price * item.quantity, 0);

  // 3. 비즈니스 로직 분리 및 단순화
  const discount = total > 100 ? total * 0.1 : 0;
  order.discount = discount;

  return total - discount;
}
```

---

## 🎯 결론

복잡한 코드 앞에서 더 이상 머리를 쥐어뜯지 마세요. AI의 분석을 통해 문제의 핵심을 파악하고, 제안된 리팩토링 전략을 하나씩 적용해 나간다면 유지보수하기 좋은 우아한 코드를 작성할 수 있습니다.

이제 테스트 코드를 돌려보고, 가벼운 마음으로 퇴근하세요! 🍷
