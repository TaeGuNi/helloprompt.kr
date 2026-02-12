---
layout: /src/layouts/Layout.astro
title: "Spaghetti Code No More! AI Refactoring & Commenting Guide"
author: "ZZabbis"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "Productivity"
description: "Refactor legacy code and add high-quality comments in 1 minute with this perfect prompt."
tags: ["Coding", "Refactoring", "AI", "Productivity"]
---

# 📝 Spaghetti Code No More! AI Refactoring & Commenting Guide

<!-- ⚠️ [Lint Rule] Use emoji lists. Tables may break on mobile. -->

- **🎯 Recommended For:** Developers suffering from legacy code, Junior Devs, Maintainers
- **⏱️ Time Saved:** 1 hour → 3 minutes
- **🤖 Recommended Models:** GPT-4, Claude 3.5 Sonnet, Gemini Pro

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

<!-- ⚠️ [Lint Rule] Blockquotes (>) must be used with italics (_..._) except in Basic/Pro sections. -->

> _"Have you ever stayed up late analyzing code written by someone else? Or found your own code from 6 months ago unfamiliar?"_

It is said that 80% of a developer's time is spent reading code. Complex, tangled 'spaghetti code' is the main culprit for low productivity. But now, with the help of AI, you can instantly organize complex logic and add friendly comments. Today, we introduce a magical refactoring prompt that will get you home on time.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Automatically clean up complex control structures and nested logic
2. Auto-generate high-quality comments explaining the 'Intent' of the code
3. Drastically improve readability while keeping existing logic intact

---

## 🚀 Solution: "Clean Code Architect"

<!-- ⚠️ [Lint Rule] Blockquotes (>) turn into prompt boxes here only. -->

### 🥉 Basic Version

Use this when you just need quick results.

> **Role:** You are a Senior Developer.
> **Request:** Refactor the code below according to Clean Code principles and add comments.

<br>

### 🥇 Pro Version (Expert)

Use this when detailed quality and stability are needed.

> **Role:**
> You are a **Senior Software Architect** and **Code Refactoring Specialist** specializing in technical debt reduction and legacy systems. You have a deep understanding of Clean Code principles and design patterns (SOLID, DRY).
>
> **Context:**
> You are presented with "spaghetti code"—unstructured, difficult-to-maintain source code characterized by complex control structures (deep nesting), poor variable naming, high coupling, and a lack of modularity. While the code currently functions, it is fragile and opaque to other developers.
>
> **Task:**
> Refactor the provided code into a clean, maintainable, and idiomatic version without altering its external behavior.
>
> 1.  **Analyze:** First, identify the underlying logic and business rules.
> 2.  **Refactor:** Restructure the code to reduce complexity. Break down large functions, flatten nested conditionals, and use descriptive naming conventions.
> 3.  **Comment:** Add high-value comments that explain *why* a specific approach was taken or *why* complex logic exists. Do not describe *what* the syntax is doing (e.g., avoid "increments i by 1").
> 4.  **Verify:** Ensure that the refactored solution is logically equivalent to the original.
>
> **Constraints:**
>
> - **Zero Regression:** The refactored code must produce exactly the same outputs/side effects as the original.
> - **Idiomatic Style:** Adhere strictly to the standard conventions and idioms of the programming language used.
> - **Comment Quality:** Comments must be insightful and focus on intent, edge cases, or architectural decisions. Avoid obvious comments.
>
> **Warning:**
>
> - Do not change logic arbitrarily or guess. If something is unclear, note it in a comment.
>
> **Input Code:**
> ```[Paste your code here]```

---

<!-- ✅ [Lint Rule] Mandatory section. -->

## 💡 Insight

The core of this prompt is not just code shortening, but **'Securing Maintainability'**.
The most useful part of using this prompt in the field is getting an objective check on variable names or structure from a third-party perspective, even for your own code. Especially by specifying "Zero Regression" in `Constraints`, we prevent AI from being overly creative and breaking the logic.

---

<!-- ⚠️ [Lint Rule] Recommended section. -->

## 🙋 FAQ

- **Q: Does it fix bugs?**
  - A: This prompt focuses on 'refactoring' and tries to maintain logic as is. If you need bug fixing, add "Find and fix bugs" to the Task.

- **Q: Which languages are supported?**
  - A: It works perfectly for all text-based programming languages like Python, Java, JavaScript, C++, etc.

---

## 🧬 Prompt Breakdown (Why it works?)

1.  **Role Assignment:** Gave 'Senior Architect' authority to raise the standard of code quality.
2.  **Task Segmentation:** Induced a systematic result through 4 steps: Analyze -> Refactor -> Comment -> Verify.
3.  **Zero Regression Constraint:** Emphasized that functionality must not change, reducing risk in practical application.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```javascript
function c(u) {
  if (u) {
    if (u.a > 18) {
      if (u.t == 'P') {
        return 100;
      } else {
        return 50;
      }
    } else {
      return 0;
    }
  } else {
    return -1;
  }
}
```

### ✅ After (Result)

```javascript
/**
 * Calculates fee based on user age and type.
 *
 * @param {object} user - User object (contains age, type)
 * @returns {number} Calculated fee (Adult Premium: 100, Regular: 50, Minor: 0, Error: -1)
 */
function calculateFee(user) {
  // Exception: No user info
  if (!user) return -1;

  const ADULT_AGE = 18;
  const PREMIUM_TYPE = 'P';

  // Free for minors
  if (user.a <= ADULT_AGE) {
    return 0;
  }

  // Apply adult pricing policy
  const isPremium = user.t === PREMIUM_TYPE;
  return isPremium ? 100 : 50;
}
```

---

## 🎯 Conclusion

Stop wasting time wrestling with spaghetti code. With this single prompt, your code can always be kept clean as if inspected by a 'Senior Developer'.

Go home early today! 🍷
