---
layout: /src/layouts/Layout.astro
title: "Refactor Dirty Code to Clean Code in 1 Second"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that transforms complex spaghetti code into easy-to-read and maintainable clean code."
tags: ["Refactoring", "Clean Code", "Maintenance", "Dev Productivity"]
---

# 📝 Refactor Dirty Code to Clean Code in 1 Second

> **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"I can't even recognize the code I wrote... How do I untangle this spaghetti?"_

We've all had the experience of writing messy variable names because we were in a hurry, or having a single function exceed 100 lines.
What if there was a secretary who refactored code you're ashamed to show colleagues into **'Clean Code' standards**?
With just this one prompt, you can catch readability, performance, and maintainability all at once.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Intuitively change variable/function names
2. Remove duplicate code and separate functions
3. Apply latest syntax and optimize performance

---

## 🚀 The Solution: "Clean Code Refactorer"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Senior Software Engineer with 20 years of experience and a 'Clean Code' expert.
> **Request:** Transform complex spaghetti code into easy-to-read and maintainable clean code.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Senior Software Engineer with 20 years of experience and a 'Clean Code' expert.
>
> **Context:** The code I wrote works, but it has poor readability and is difficult to maintain. Variable names are unclear, and there is a lot of duplicated logic.
>
> **Task:**
> Refactor the code provided below according to the following criteria:
>
> 1. **Naming:** Change variable and function names so their intent is clearly known.
> 2. **Function Separation:** Break down functions into smaller pieces so that one function does only one thing (SRP).
> 3. **Remove Duplicates:** Extract repeated logic into separate functions or utilities.
> 4. **Comments:** Add comments only to parts where explanation is needed on 'Why' the code was written that way.
> 5. **Modern Syntax:** Apply the latest modern syntax of the language.
>
> **Code:**
>
> ```
> [Paste the code to refactor here]
> ```
>
> **Constraints:**
>
> - Never change the business logic (behavior) of the existing code.
> - Summarize the main changes before and after refactoring in a list.
> - Show the output divided into a code block and an explanation block.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```javascript
function calc(d) {
  let t = 0;
  for (let i = 0; i < d.length; i++) {
    if (d[i].price > 100) {
      t += d[i].price * 0.9;
    } else {
      t += d[i].price;
    }
  }
  return t;
}
```

### ✅ After (Result)

```javascript
/**
 * Calculates the total cart amount.
 * Applies a 10% discount for items over 100 won.
 */
function calculateTotalPrice(items) {
  const DISCOUNT_THRESHOLD = 100;
  const DISCOUNT_RATE = 0.9;

  return items.reduce((total, item) => {
    const finalPrice =
      item.price > DISCOUNT_THRESHOLD ? item.price * DISCOUNT_RATE : item.price;
    return total + finalPrice;
  }, 0);
}
```

_Changes: `calc` -> `calculateTotalPrice`, `d` -> `items`, magic numbers to constants, used `reduce`._

---

## 🎯 Conclusion

Don't procrastinate saying "I'll fix it later" anymore.
Turn smelly code into fragrant code in 3 seconds with this prompt and go home! 🍷
