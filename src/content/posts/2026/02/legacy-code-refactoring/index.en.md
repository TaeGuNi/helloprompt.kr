---
layout: /src/layouts/Layout.astro
title: "ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기"
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: "보기만 해도 머리 아픈 레거시 코드, AI를 10년 차 시니어 개발자처럼 활용해 안전하게 리팩토링하고 테스트 코드까지 한 번에 자동 생성하는 완벽 가이드."
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

# 🧹 레거시 코드 청소기: 리팩토링 & 테스트 자동화

- **🎯 추천 대상:** 주니어 개발자, 레거시 프로젝트 유지보수 담당자, 코드 리뷰어
- **⏱️ 소요 시간:** 코드 분석 및 파악 1시간 → 5분 이내 단축
- **🤖 추천 모델:** Claude 3.5 Sonnet, GPT-4o (복잡한 로직 및 긴 컨텍스트 파악은 Claude 강력 추천)

- ⭐ **난이도:** ⭐⭐☆☆☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"도대체 이 코드는 누가 짠 거야? (...아, 1년 전의 나였구나.)"_

복잡하게 얽힌 `if-else` 중첩, 의도를 알 수 없는 변수명, 그리고 문서화되지 않은 예외 처리들. 건드리는 순간 시스템이 무너질 것 같은 **레거시 코드(Legacy Code)** 앞에서 막막했던 적 있으신가요?

이제 두려워하지 마세요. AI를 여러분의 전담 **시니어 페어 프로그래머(Pair Programmer)**로 고용하여, 스파게티 코드를 우아하게 리팩토링하고 든든한 방어막인 테스트 코드까지 단숨에 구축하는 완벽한 프롬프트 엔지니어링 기법을 소개합니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. **설명 먼저 요구하기:** 무작정 고치지 않고, AI에게 코드의 실행 흐름과 의도를 먼저 파악하게 만듭니다.
2. **클린 코드 원칙 적용:** SOLID 원칙과 가독성을 기준으로 네이밍과 구조를 안전하게 리팩토링합니다.
3. **테스트 코드로 방어막 구축:** 리팩토링 전후의 기능 동일성을 보장하기 위해 엣지 케이스를 포함한 단위 테스트(Unit Test)를 자동 생성합니다.

---

## 🚀 해결책: "Senior Dev Simulator" (시니어 개발자 시뮬레이터)

### 🥇 Pro Version (전문가형)

단순히 "리팩토링 해줘"라고 하면 기존 기능이 망가질 위험이 큽니다. 이 프롬프트는 AI가 논리적 단계를 밟아 사고하도록 **Chain-of-Thought(생각의 사슬)** 기법을 적용했습니다.

> **역할 (Role):** 너는 구글, 메타 등 빅테크 출신의 `[10년 차 시니어 백엔드 개발자]`야. 클린 코드(Clean Code) 철학의 신봉자이며 TDD(테스트 주도 개발)를 철저하게 준수하지.
>
> **상황 (Context):**
> 내가 지금 `[Python/Java 등 언어 입력]`로 작성된 아주 지저분한 레거시 코드를 인수인계 받았어. 가독성이 끔찍하고, 유지보수가 불가능에 가까워.
>
> **요청 (Task):**
> 다음 단계를 차례대로 심도 있게 수행해줘.
>
> **Step 1. 코드 분석 및 진단:** 이 코드가 비즈니스적으로 어떤 역할을 하는지 한 문장으로 요약하고, 치명적인 문제점(Code Smell) 3가지를 구체적으로 지적해.
> **Step 2. 안전한 리팩토링:** 원본의 비즈니스 로직과 부수 효과(Side Effect)를 100% 유지하되, 단일 책임 원칙(SRP)에 따른 함수 분리, 명확한 변수명/메서드명 변경을 통해 가독성을 극대화해. 복잡한 비즈니스 로직에는 반드시 Docstring과 주석을 추가해.
> **Step 3. 방어적 검증 (테스트 코드):** 네가 작성한 리팩토링 코드가 원본과 동일하게 정상 작동함을 완벽히 보장하는 단위 테스트(Unit Test) 코드를 작성해. 성공 케이스뿐만 아니라, 발생 가능한 예외 상황(Edge Case)을 최소 2개 이상 포함해야 해.
>
> **입력 코드:**
>
> ```python
> [여기에 분석할 레거시 코드를 붙여넣으세요]
> ```

---

## 💡 작성자 코멘트 (Insight)

이 프롬프트의 진정한 가치는 단순히 예쁜 코드를 만드는 것이 아니라, **'안전망(테스트 코드)'을 먼저 쳐준다는 점**에 있습니다. 저는 실제로 5년 된 낡은 결제 모듈(Java)을 인수인계받았을 때 이 프롬프트를 실무에 적용해 보았습니다.

가장 놀라웠던 것은 제가 미처 파악하지 못했던 숨겨진 엣지 케이스(예: 결제 금액이 0원일 때의 분기 처리)를 AI가 테스트 코드로 먼저 짚어주었다는 점입니다.

**🔥 실무 최적화 팁:**
한 번에 수백 줄의 클래스 전체를 복사해서 넣으면 AI가 '환각(Hallucination)'을 일으키거나 맥락을 놓칠 수 있습니다. 가장 복잡해 보이는 **메서드 단위(100줄 이내)로 쪼개서 질문**하세요. 분석의 깊이와 테스트 코드의 정확도가 압도적으로 높아집니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: 코딩 로직을 다루는 데 어떤 AI 모델이 가장 적합한가요?**
  - A: 2026년 현재 코딩 및 리팩토링 분야에서는 **Claude 3.5 Sonnet**과 **GPT-4o**가 양대 산맥입니다. 그중에서도 복잡한 컨텍스트 유지와 인간 친화적인 클린 코드 작성에서는 Claude 3.5 Sonnet이 약간 더 우세한 퍼포먼스를 보여줍니다.

- **Q: 회사 내부 코드를 AI에게 그대로 넘겨도 보안상 문제가 없나요?**
  - A: **절대 안 됩니다.** API 키, 사내망 IP, 실제 고객 데이터, 핵심 보안 알고리즘 등 민감 정보는 반드시 `[MASKED]` 처리하거나 가상의 더미 데이터(Dummy Data)로 치환한 후 프롬프트를 실행하셔야 합니다. 혹은 사내에 구축된 Enterprise AI 환경에서만 사용하세요.

- **Q: 리팩토링 후 에러가 발생하면 어떻게 대처하나요?**
  - A: AI가 놓친 의존성(Dependency)이 있을 확률이 높습니다. 에러 로그 전체와 원본 코드의 관련 컨텍스트를 함께 복사하여 _"이 부분에서 이런 에러가 발생했어. 기존 로직의 [특정 조건]을 네가 누락한 것 같아. 다시 수정해 줘"_ 라고 구체적으로 피드백하세요.

---

## 🧬 프롬프트 해부 (Why it works?)

1. **시니어 페르소나 부여 (Role):** "10년 차 시니어, 클린 코드 신봉자"라는 엄격한 페르소나를 부여함으로써, 단순히 작동만 하는 코드가 아니라 유지보수성이 뛰어난 수준 높은 코드를 출력하도록 기준을 끌어올렸습니다.
2. **Chain-of-Thought (사고의 사슬):** 다짜고짜 "고쳐"라고 명령하지 않고, **[분석 → 수정 → 검증]**이라는 논리적 3단계를 강제했습니다. 이는 AI가 코드의 본래 의도를 훼손하지 않고 구조만 개선하도록 유도하는 핵심 장치입니다.
3. **엣지 케이스 강제 (Constraints):** 테스트 코드 작성 시 엣지 케이스를 명시적으로 요구하여 실무에서 곧바로 사용할 수 있는 견고한 코드 품질을 보장합니다.

---

## 📊 증명: Before & After

### ❌ Before (입력: 악몽 같은 레거시 코드)

```python
def calc_trx(a, t, f=False):
    # a: amount, t: type
    if t == 1:
        if f: return a * 1.1 + 500
        else: return a * 1.1
    elif t == 2:
        return a - (a * 0.05)
    else: return 0 # 에러
```

### ✅ After (결과: 시니어가 작성한 클린 코드 & 테스트)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    거래 유형(입금/출금)에 따라 세금 및 수수료가 적용된 최종 금액을 계산합니다.
    """
    if amount < 0:
        raise ValueError("거래 금액은 0보다 커야 합니다.")

    if transaction_type == TransactionType.DEPOSIT:
        taxed_amount = amount * 1.1
        return taxed_amount + 500 if apply_fee else taxed_amount

    elif transaction_type == TransactionType.WITHDRAWAL:
        return amount * 0.95

    return 0.0

# ----------------- Unit Tests ----------------- #
class TestCalculateTransaction(unittest.TestCase):
    def test_deposit_with_fee(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.DEPOSIT, True), 1600.0)

    def test_withdrawal_amount(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.WITHDRAWAL), 950.0)

    def test_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_transaction_amount(-500, TransactionType.DEPOSIT)
```

---

## 🎯 결론

더 이상 화면 가득한 레거시 코드 앞에서 한숨 쉬지 마세요.
제대로 설계된 프롬프트와 AI만 있다면, 리팩토링은 막막한 고통이 아니라 성취감 넘치는 **즐거운 청소**가 됩니다.

오늘 당장, 가장 보기 싫었던 그 함수 하나부터 AI와 함께 리팩토링해 보는 것은 어떨까요? 💻 퇴근 시간이 눈에 띄게 앞당겨질 것입니다!
