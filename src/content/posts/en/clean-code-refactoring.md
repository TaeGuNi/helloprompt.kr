---
title: "My Code is Trash! Clean Code Refactoring Coach"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/IT"
description: "Prompt that upgrades messy code that only works into 'easy to read and maintain' clean code."
tags: ["Refactoring", "CleanCode", "Developer", "CodeReview"]
---

# 📝 My Code is Trash! Clean Code Refactoring Coach

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"I said I would fix it later but 1 year passed. Now I'm scared to touch it."_

Spaghetti code (tangled code) is the enemy of developers. If readability is low, it is hard to find bugs and hard to add features. This prompt possesses Robert C. Martin (Author of Clean Code), washing and polishing your code to make it shiny.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Remove duplicate code and separate functions (Extract Method)
2. Improve unclear variable/function names (Naming Convention)
3. Optimize performance and apply modern syntax (Modern Syntax)

---

## 🚀 The Solution: "Clean Code Laundry"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a `[Clean Code Evangelist and Chief Architect]`.
> **Request:** Create a prompt that upgrades messy code that only works into 'easy to read and maintain' clean code.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and use it.

> **Role:** You are a `[Clean Code Evangelist and Chief Architect]`.
>
> **Context:** My code functions, but it's messy and hard to read (Dirty Code). Refactor it so it's easy to maintain.
>
> **Task:**
>
> 1. **[Naming Sense]**: Change variable and function names to be intuitive and meaningful. (e.g., `a` -> `userAge`)
> 2. **[Structure Improvement]**: Split functions that are too long by role, and combine duplicate logic into one.
> 3. **[Modernize]**: If possible, apply latest language syntax (ES6+, Python 3.10+, etc.).
> 4. **[Before & After]**: Compare where and how it changed, and explain the reason why you changed it like that.
>
> **Constraints:**
>
> - The operation (function) of the code must never change.
> - Add comments only where absolutely necessary. (Delete comments if explained by code)

- **Target Code:**

  > [Paste dirty(?) code here]

---

## 🧬 Prompt Anatomy (Why it works?)

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

(Function name `calc` doesn't tell what it calculates, `p` is also unclear)

### ✅ After (Prompt Result)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("You are an adult.")
        return price * DISCOUNT_RATE

    print("You are a student.")
    return price
```

**[Improvement Points]**

1. **Change Function Name**: `calc` -> `calculate_discounted_price` (Clear that it's discount price calculation)
2. **Remove Magic Numbers**: Declared numbers like `19`, `0.9` as constants to give meaning.
3. **Remove Unnecessary else**: Reduced indentation depth using Early Return pattern.

---

## 🎯 Conclusion

Well-written code reads smoothly like a well-written essay. Clean your code for future self (and colleagues).

Now leave work on time and take a shower. Body, not code. 🍷
