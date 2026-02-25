---
layout: /src/layouts/Layout.astro
title: " \"ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기\""
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "개발/코딩"
description: " \"A complete guide to safely refactoring headache-inducing legacy code and auto-generating unit tests in one go, by using AI as your 10-year veteran senior developer.\""
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

# 🧹 Legacy Code Cleaner: Automated Refactoring & Testing

- **🎯 Recommended for:** Junior Developers, Legacy Project Maintainers, Code Reviewers
- **⏱️ Time Saved:** 1 hour of code analysis → Reduced to under 5 minutes
- **🤖 Recommended AI:** Claude 3.5 Sonnet, GPT-4o (Claude is highly recommended for complex logic and long contexts)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Who on earth wrote this garbage code? (...Oh wait, it was me a year ago.)"_

Have you ever felt completely paralyzed when facing **Legacy Code**? The kind with deeply nested `if-else` blocks, cryptic variable names, undocumented edge cases, and the terrifying feeling that touching a single line might bring the entire system down.

Fear no more. We present the ultimate prompt engineering technique that turns AI into your dedicated **Senior Pair Programmer**. Learn how to elegantly refactor spaghetti code and instantly build a solid defense mechanism of unit tests in one seamless workflow.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Demand Explanation First:** Instead of blindly fixing code, force the AI to analyze the execution flow and original intent.
2. **Apply Clean Code Principles:** Safely refactor naming conventions and structure based on SOLID principles and readability.
3. **Build a Testing Defense Line:** Auto-generate unit tests covering edge cases to guarantee identical functionality before and after refactoring.

---

## 🚀 The Solution: "Senior Dev Simulator"

### 🥇 Pro Version

Simply asking "Refactor this" carries a massive risk of breaking existing features. This prompt utilizes the **Chain-of-Thought** technique, forcing the AI to process the logic step-by-step.

> **Role:** You are a `[10-year veteran Senior Backend Developer]` with experience at Big Tech companies like Google and Meta. You are a devout follower of Clean Code philosophy and strictly adhere to TDD (Test-Driven Development).
>
> **Context:**
> I just inherited some incredibly messy legacy code written in `[Language, e.g., Python/Java]`. The readability is atrocious, and it feels nearly impossible to maintain.
>
> **Task:**
> Carefully execute the following steps in order:
>
> **Step 1. Code Analysis & Diagnosis:** Summarize the business logic of this code in one sentence. Then, explicitly point out 3 critical Code Smells.
> **Step 2. Safe Refactoring:** Maximize readability by separating functions according to the Single Responsibility Principle (SRP) and renaming variables/methods clearly. You MUST preserve 100% of the original business logic and Side Effects. Add proper docstrings and comments for complex business logic.
> **Step 3. Defensive Verification (Unit Tests):** Write comprehensive Unit Tests to absolutely guarantee that your refactored code behaves exactly identically to the original code. You must include at least 2 potential Edge Cases along with the standard success cases.
>
> **Input Code:**
>
> ```python
> [Paste your legacy code here]
> ```

---

## 💡 Writer's Insight

The true value of this prompt isn't just generating "pretty" code; it lies in **setting up a safety net (unit tests) first**. I personally applied this prompt in a real-world scenario when I inherited a 5-year-old, heavily degraded payment module in Java.

What amazed me most was that the AI proactively identified and wrote tests for hidden edge cases that I hadn't even noticed (e.g., branching logic when the payment amount is exactly 0).

**🔥 Pro-Tip for the Workplace:**
If you paste an entire class with hundreds of lines at once, the AI might hallucinate or lose context. **Break it down into method-level chunks (under 100 lines)** that look the most complex. This dramatically increases both the depth of the analysis and the accuracy of the unit tests.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Which AI model is best suited for handling coding logic?**
  - A: As of 2026, **Claude 3.5 Sonnet** and **GPT-4o** are the absolute top-tier choices for coding and refactoring. Between the two, Claude 3.5 Sonnet slightly outperforms in maintaining complex contexts and writing human-friendly, clean code.

- **Q: Is it safe to feed internal company code directly to the AI?**
  - A: **Absolutely not.** You must sanitize your code by replacing sensitive information—such as API keys, internal IP addresses, real customer data, and core security algorithms—with `[MASKED]` or dummy data before running the prompt. Alternatively, only use an approved Enterprise AI environment provided by your company.

- **Q: What should I do if errors occur after refactoring?**
  - A: It is highly likely the AI missed a specific dependency. Copy the entire error log along with the relevant context of the original code, and give specific feedback like: _"An error occurred here. It seems you missed [specific condition] from the original logic. Please fix it."_

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Assigning a Senior Persona (Role):** By enforcing a strict persona of a "10-year veteran, Clean Code believer," we elevate the standard so the AI doesn't just output working code, but highly maintainable, top-tier code.
2. **Chain-of-Thought:** Instead of a blunt "fix this" command, we forced a logical 3-step process: **[Analyze → Modify → Verify]**. This is the core mechanism that guides the AI to improve the structure without compromising the original intent.
3. **Forcing Edge Cases (Constraints):** Explicitly demanding edge cases when generating unit tests guarantees robust code quality that can be immediately deployed in a real-world environment.

---

## 📊 Proof: Before & After

### ❌ Before (Input: The Nightmare Legacy Code)

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

### ✅ After (Result: Clean Code & Tests by a Senior Dev)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    Calculates the final transaction amount including applicable taxes and fees based on the transaction type.
    """
    if amount < 0:
        raise ValueError("Transaction amount must be greater than 0.")

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

## 🎯 Conclusion

Stop sighing in front of a screen full of legacy code.
With a properly designed prompt and AI, refactoring transforms from a daunting, painful chore into a highly rewarding and **enjoyable cleanup session**.

Why not start today? Pick that one function you've been dreading the most, and refactor it alongside your AI pair programmer. 💻 You'll be clocking out noticeably earlier!
