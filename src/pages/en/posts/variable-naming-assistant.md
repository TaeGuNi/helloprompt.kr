---
layout: /src/layouts/Layout.astro
title: "Developer's Lifelong Problem 'Naming Variables', AI Does It For You"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "Stop using meaningless variable names like tmp, data, a... A prompt that recommends English variable and function names perfect for the context."
tags: ["Naming", "Clean Code", "Variable Name", "English Study"]
---

# 📝 Developer's Lifelong Problem "Naming Variables", AI Does It For You

- **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"A function that refunds remaining points when a user withdraws... what should I name it? refundUser? returnPoint?"_

They say the two hardest things in Computer Science are 'cache invalidation' and 'naming things'.
Broken English variable names embarrass foreign colleagues, and vague names make future you angry.
Just explain the situation. We extract 5 stylish names used by native developers.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Recommend intuitive English names suitable for variable/function roles
2. Apply language-specific conventions like camelCase, snake_case
3. Explain nuance differences of each name

---

## 🚀 The Solution: "Naming Master"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Senior Developer with an English Literature degree. You have both linguistic sense and coding conventions.
> **Request:** Stop using meaningless variable names like tmp, data, a... Create a prompt that recommends English variable and function names perfect for the context.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Senior Developer with an English Literature degree. You have both linguistic sense and coding conventions.
>
> **Context:** I am naming variables or functions, and I want to find the most appropriate and natural English expression.
>
> **Task:**
> Recommend **3~5** names suitable for the situation below.
>
> 1. **Name:** Propose in `[camelCase / snake_case / PascalCase]` format.
> 2. **Explanation:** Explain why you chose this word and what the nuance is.
> 3. **Recommendation:** Pick one that you recommend the most among them.
>
> **Situation Description:**
> `[Write specifically what the variable/function does. e.g.: "Function sending welcome email after signup completion"]`
>
> **Language Used:** `[Java / Python / JavaScript]`

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Situation)

"Variable checking if user logged in or not (boolean)"

### ✅ After (Result)

**Recommendation List (JavaScript - camelCase):**

1.  `isLoggedIn` (Most common, current state)
2.  `isAuthenticated` (More professional expression in security/auth perspective)
3.  `hasActiveSession` (When emphasizing session existence)

**🏆 Best Pick:** `isLoggedIn` (Most intuitive and widely used)

---

## 🎯 Conclusion

Just naming well removes the need for comments.
Graduate from names like `a`, `b`, `temp` now. With AI, your code can read smoothly like an English novel! 🍷
