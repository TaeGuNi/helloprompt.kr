---
layout: /src/layouts/Layout.astro
title: "My Code is Trash?! Clean Code Refactoring Coach"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Coding/IT"
description: "A powerful prompt that transforms messy, 'just-works' spaghetti code into clean, readable, and highly maintainable architecture."
tags: ["Refactoring", "Clean Code", "Developer", "Code Review"]
---

# 📝 My Code is Trash?! Clean Code Refactoring Coach

- **🎯 Recommended For:** All Developers (Junior to Senior)
- **⏱️ Time Required:** 30 minutes → 1 minute
- **🤖 Recommended Model:** Any conversational AI (ChatGPT, Claude, Gemini)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> _"I swore I’d refactor it later. A year passed, and now I'm terrified to even look at it."_

Spaghetti code is the silent killer of productivity. When readability plummets, bugs hide in plain sight and feature development grinds to a halt. This prompt summons the spirit of a seasoned Principal Engineer (think Robert C. Martin's "Clean Code") to ruthlessly scrub, polish, and optimize your code until it shines.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Extract & Simplify:** Eradicates duplicate logic and modularizes bloated functions.
2. **Semantic Naming:** Replaces cryptic variables with crystal-clear, intuitive names.
3. **Modernization:** Upgrades archaic syntax to modern standards for peak performance.

---

## 🚀 Solution: "The Clean Code Refiner"

### 🥉 Basic Version

When you need a quick cleanup without overthinking it.

> **Role:** You are a Senior Software Architect.
> **Task:** Refactor the following code to make it clean, readable, and highly maintainable.

<br>

### 🥇 Pro Version

When you need an enterprise-grade refactoring session with detailed explanations.

> **Role:** You are a `[Clean Code Evangelist & Principal Engineer]`.
>
> **Context:**
>
> - Background: My code works functionally, but it's messy, tightly coupled, and hard to read (Dirty Code).
> - Goal: Refactor it to be scalable, robust, and easy to maintain by other developers.
>
> **Task:**
>
> 1. **Semantic Naming:** Rename variables and functions to be highly intuitive and self-documenting (e.g., change `a` to `userAge`).
> 2. **Structural Integrity:** Break down massive functions based on the Single Responsibility Principle (SRP). Consolidate any duplicate logic.
> 3. **Modernization:** Refactor using the latest, most idiomatic syntax for the target language (e.g., ES6+ for JS, Python 3.10+).
> 4. **Code Review:** Provide a concise Before/After breakdown explaining exactly _why_ each change was made.
>
> **Constraints:**
>
> - The core business logic and functional behavior MUST remain exactly the same.
> - Only add comments for complex business logic. Remove redundant comments if the new code is self-explanatory.
> - Output the final code in a Markdown code block.
>
> **Target Code:**
> `[Paste your spaghetti code here]`

---

## 💡 Writer's Insight

This prompt is a lifesaver when inheriting legacy code or returning to a rushed prototype. The magic lies in the **Code Review** instruction. By forcing the AI to explain _why_ it made changes (like applying early returns or removing magic numbers), you don't just get better code—you actually learn how to write better code yourself. I highly recommend running your PRs through this prompt before submitting them; it catches those embarrassing "tired developer" mistakes instantly.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Will this prompt change the logic and break my app?**
  - A: The constraints strictly instruct the AI to preserve the original behavior. However, always run your unit tests after applying AI-generated refactoring to guarantee no edge-case regressions occurred.

- **Q: Does this work for obscure or older programming languages?**
  - A: Yes. Large Language Models have been trained on vast repositories of code in almost every language. Just specify the exact language and version in the prompt (e.g., "Refactor this legacy Perl 5 script").

- **Q: Is it safe to paste proprietary company code?**
  - A: Be cautious. Do not paste sensitive API keys, credentials, or highly confidential proprietary logic into public AI models unless your company uses a secure, enterprise-tier AI plan with zero data retention.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Explicit Persona:** Setting the role to "Clean Code Evangelist" primes the AI to prioritize readability and established software design patterns over just making it work.
2. **Clear Constraints:** Instructing the AI to "remove redundant comments" and "preserve core logic" prevents the hallucination of unnecessary features and keeps the focus strictly on structural improvement.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```python
def calc(x, y):
    if x > 19:
        print("성인")
        p = y * 0.9
        return p
    else:
        print("학생")
        return y
```

### ✅ After (Result)

```python
def calculate_discounted_price(age: int, base_price: float) -> float:
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return base_price * DISCOUNT_RATE

    print("학생입니다.")
    return base_price
```

**[Improvement Breakdown]**

1. **Semantic Naming:** `calc` became `calculate_discounted_price`, instantly revealing its purpose.
2. **Magic Numbers Eliminated:** `19` and `0.9` are now clear, editable constants.
3. **Guard Clauses:** Removed the unnecessary `else` block by using an Early Return, reducing indentation depth.

---

## 🎯 Conclusion

Beautiful code reads like a well-crafted essay. Refactor your code not just for the machine, but for the human who has to maintain it tomorrow—which is usually you.

Now close your IDE, log off, and go take a shower. Wash your body, not just your code. 🍷
