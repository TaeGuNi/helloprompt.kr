---
layout: /src/layouts/Layout.astro
title: "My Code is Trash! Clean Code Refactoring Coach"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/IT"
description: "A prompt that upgrades messy, barely-functioning code into readable, maintainable, and elegant clean code."
tags: ["Refactoring", "CleanCode", "Developer", "CodeReview"]
---

# 📝 My Code is Trash! Clean Code Refactoring Coach

- **🎯 Recommended For:** Developers, Tech Leads, Junior Programmers
- **⏱️ Time Required:** 5 minutes → Reduced to 1 minute
- **🤖 Recommended Model:** All Conversational AIs (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> _"I promised myself I’d fix it later... but a year has passed, and now I'm terrified to even touch it."_

Spaghetti code is every developer's worst nightmare. When readability plummets, hunting down bugs or adding new features becomes an agonizing chore. This prompt channels the spirit of Clean Code architects, washing away the technical debt and polishing your code until it shines.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Extract & Simplify:** Eradicates duplicate logic and modularizes overly long functions.
2. **Naming Conventions:** Replaces cryptic variables with intuitive, self-documenting names.
3. **Modernization:** Upgrades obsolete syntax to leverage the latest language features securely.

---

## 🚀 The Solution: "Clean Code Laundry"

### 🥉 Basic Version

Use this when you need a quick, no-fuss cleanup for a small snippet.

> **Role:** You are a `[Senior Software Architect and Clean Code Evangelist]`.
> **Task:** Refactor the provided code snippet. Transform this messy, barely-working code into highly readable, maintainable, and idiomatic clean code.

<br>

### 🥇 Pro Version (Expert)

Use this when tackling complex logic that requires meticulous architectural improvements.

> **Role (Role):** You are a `[Senior Software Architect and Clean Code Evangelist]`.
>
> **Context (Context):**
>
> - Background: The current codebase functions correctly but is incredibly messy, difficult to read, and plagued by technical debt.
> - Goal: Refactor the code to prioritize maintainability, readability, and long-term scalability without altering its core behavior.
>
> **Task (Task):**
>
> 1. **[Naming Sense]**: Rename variables and functions to be highly intuitive and self-documenting (e.g., `a` -> `userAge`).
> 2. **[Structural Improvement]**: Decompose overly long functions based on the Single Responsibility Principle (SRP). Consolidate redundant logic.
> 3. **[Modernization]**: Apply the latest language syntax and best practices (e.g., ES6+ for JavaScript, Python 3.10+ features) where appropriate.
> 4. **[Before & After Analysis]**: Provide a concise breakdown comparing the original code with the refactored version. Explain the architectural reasoning behind your changes.
>
> **Constraints (Constraints):**
>
> - The business logic and core functionality MUST remain exactly the same.
> - Add comments ONLY where the logic is inherently complex. If the code explains itself, omit the comment.
> - Format the final output cleanly using markdown code blocks.
>
> **Warning (Warning):**
>
> - Do not invent missing variables or dependencies. If something is ambiguous, state your assumptions clearly rather than guessing.

_(Append your target code below the prompt like this:)_

> **Target Code:**
> `[Paste your spaghetti code here]`

---

## 💡 Writer's Insight

This prompt is an absolute lifesaver during legacy code migrations or Friday afternoon code reviews. The true power of this prompt lies in the **[Before & After Analysis]** constraint. Instead of just blindly accepting the AI's rewritten code, it forces the AI to explain _why_ it made those architectural decisions. This transforms the AI from a mere code formatter into an active mentoring tool. I highly recommend using this not just to clean up code, but to learn modern design patterns and idiomatic syntax you might not have been familiar with.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Will this prompt change how my application behaves?**
  - A: No. The prompt explicitly constrains the AI to preserve the core functionality and business logic. However, it's always best practice to run your unit tests after applying any AI-generated refactoring.

- **Q: Does this work well with niche or older programming languages?**
  - A: Yes! While it excels at modern languages like Python, TypeScript, and Go, you can specify the target language and version in the `[Modernization]` step (e.g., "Apply idiomatic Rust patterns").

- **Q: What if the code I paste is too long?**
  - A: If you exceed the AI's context window, break your code down into smaller, logical modules (like a single class or a specific helper file) and run the prompt iteratively.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Role Playing:** By assigning the persona of a "Senior Software Architect," the AI defaults to industry-standard best practices rather than amateur solutions.
2. **Strict Constraints:** Enforcing the rule to "not alter core behavior" prevents the AI from getting overly creative and breaking your application.
3. **Educational Output:** Demanding a Before & After analysis ensures you actually understand the refactoring, turning a chore into a continuous learning opportunity.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```python
def calc(x, y):
    if x > 19:
        print("Adult")
        p = y * 0.9
        return p
    else:
        print("Student")
        return y
```

_(The function name `calc` is ambiguous, the magic number `19` lacks context, and `p` is an unhelpful variable name.)_

### ✅ After (Result)

```python
def calculate_discounted_price(age: int, base_price: float) -> float:
    ADULT_AGE_THRESHOLD = 20
    ADULT_DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("You are an adult.")
        return base_price * ADULT_DISCOUNT_RATE

    print("You are a student.")
    return base_price
```

**[Improvement Breakdown]**

1. **Descriptive Naming**: `calc` became `calculate_discounted_price`, instantly clarifying the function's purpose. Type hinting was also added for safety.
2. **Eradicating Magic Numbers**: Hardcoded values like `19` and `0.9` were abstracted into explicitly named constants (`ADULT_AGE_THRESHOLD`).
3. **Early Return Pattern**: Removed the unnecessary `else` block, reducing indentation depth and improving readability.

---

## 🎯 Conclusion

Well-crafted code reads as smoothly as a well-written essay. Do a favor for your future self (and your deeply appreciative colleagues) by running your messy scripts through this Clean Code laundry.

Now, go clock out on time and take a shower. Wash your body, not just your code. 🍷
