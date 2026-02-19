---
layout: /src/layouts/Layout.astro
title: "My Code is Trash?! Clean Code Refactoring Coach"
author: "Zzabbis"
date: "2026-02-07T09:10:33.120Z"
updatedDate: "2026-02-07T09:10:33.120Z"
category: "Coding/IT"
description: "A prompt that upgrades messy code that 'just works' into clean code that is 'easy to read and maintain'."
tags: ["Refactoring", "Clean Code", "Developer", "Code Review"]
---

# 📝 My Code is Trash?! Clean Code Refactoring Coach

- **🎯 Recommended For:** Everyone
- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI models

- **📊 Difficulty:** ⭐⭐☆☆☆
- **⚡️ Effectiveness:** ⭐⭐⭐⭐⭐
- **🛠️ Utility:** ⭐⭐⭐⭐☆

_"I said I'd fix it later, but a year has passed. Now I'm scared to touch it."_

Spaghetti code (tangled code) is a developer's enemy. If readability is poor, it's hard to find bugs and difficult to add features. This prompt acts as if possessed by Robert C. Martin (author of Clean Code) to scrub and polish your code until it shines.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Remove duplicate code and separate functions (Extract Method)
2. Improve unclear variable/function names (Naming Convention)
3. Optimize performance and apply modern syntax (Modern Syntax)

---

## 🚀 Solution: "Clean Code Laundry"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a `[Clean Code Evangelist and Chief Architect]`.
> **Request:** Provide a prompt that upgrades messy code that 'just works' into clean code that is 'easy to read and maintain'.

<br>

### 🥇 Pro Version

Use this when you need detailed quality.

Copy the **PROMPT** content below to use.

> **Role:** You are a `[Clean Code Evangelist and Chief Architect]`.
>
> **Context:** My code works, but it is messy and hard to read (Dirty Code). Refactor it to be easier to maintain.
>
> **Task:**
>
> 1. **[Naming Sense]**: Change variable and function names to be intuitive and meaningful. (e.g., `a` -> `userAge`)
> 2. **[Structure Improvement]**: Split functions that are too long by role, and merge duplicate logic into one.
> 3. **[Modernize]**: If possible, apply the latest language syntax (ES6+, Python 3.10+, etc.).
> 4. **[Before & After]**: Compare what changed and how, and explain the reason for the change.
>
> **Constraints:**
>
> - The code's behavior (function) must absolutely not change.
> - Add comments only where necessary. (Delete comments if the code explains itself)
>
> **Target Code:**

> [Paste your dirty(?) code here]

---

## 🧬 Prompt Anatomy (Why it works?)

This prompt is designed to accurately grasp the AI's intent by combining a clear persona setting with specific instructions (Task). It induces a logical answer by encouraging Chain of Thought.

---

## 📊 Proof: Before & After

The difference between a simple command and an optimized prompt is clear. Using the provided prompt yields a more specific and structured answer, saving time on re-prompting.

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

(Function name `calc` doesn't say what it calculates, and `p` is meaningless)

### ✅ After (Prompt Result)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("성인입니다.")
        return price * DISCOUNT_RATE

    print("학생입니다.")
    return price
```

**[Improvement Points]**

1. **Function Name Change**: `calc` -> `calculate_discounted_price` (It becomes clear that it is a discount price calculation)
2. **Remove Magic Numbers**: Assigned meaning to numbers like `19`, `0.9` by declaring them as constants.
3. **Remove Unnecessary else**: Reduced indentation depth using the Early Return pattern.

---

## 💡 Author's Comment (Insight)

This prompt focused on practicality for immediate use in actual work.
If the result is not satisfactory, try setting the input variables or context a little more specifically.

---

## 🙋 Frequently Asked Questions (FAQ)

**Q. I don't like the result.**
A. Add specific examples or describe the situation (Context) in more detail.

**Q. Is it possible in other languages?**
A. Yes, it is possible if you translate the instructions of the prompt into that language.

---

## 🎯 Conclusion

Well-written code reads easily like a well-written essay. Clean your code for your future self (and colleagues).

Now leave work on time and take a shower. Your body, not the code. 🍷