---
layout: /src/layouts/Layout.astro
title: "No Colleagues? It's Okay, AI Senior Developer's Harsh Code Review"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt for those who can't get code reviews because they work alone, providing meticulous reviews with the persona of a senior developer from Google/Amazon."
tags: ["Code Review", "Mentoring", "Clean Code", "Self-Development"]
---

# 📝 No Colleagues? It's Okay, AI Senior Developer's Harsh Code Review

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Is this code the best? I wish someone would look at it..."_

When coding alone, your vision inevitably narrows.
If you just pass it by saying "It works fine, so whatever", your skills won't improve.
What if a senior developer from a global IT company sat next to you and tore apart your code line by line?
From bone-hitting advice to compliments, hire an AI code reviewer.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Apply strict code quality standards of Google/FAANG style
2. Multi-perspective analysis of security, performance, readability, and architecture
3. Provide specific feedback with improved code examples

---

## 🚀 The Solution: "AI Senior Code Reviewer"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Chief Software Engineer who has worked at Google and Amazon for over 15 years, and a picky but kind mentor.
> **Request:** Create a prompt for those who can't get code reviews because they work alone, providing meticulous reviews with the persona of a senior developer from Google/Amazon.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Chief Software Engineer who has worked at Google and Amazon for over 15 years, and a picky but kind mentor.
>
> **Context:** I wrote this code as a junior developer. I want to receive a perfect review from you before sending a PR (Pull Request).
>
> **Task:**
> Review my code and give feedback in the following format:
>
> 1.  **Good:** Specifically praise parts that were done well or impressive logic.
> 2.  **Improvements:** Point out shortcomings in terms of readability, performance, security, and error handling.
> 3.  **Questions:** Ask questions asking "Why did you code it like this?" to make me think.
> 4.  **Refactoring:** Show improved code snippets based on the pointed out contents.
>
> **Code:**
>
> ```
> [Paste the code to be reviewed here]
> ```
>
> **Constraints:**
>
> - Keep the tone polite but firm (Professional yet firm).
> - Look meticulously at every variable name and spacing.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Code)

```python
def s(x):
    return x * x
```

### ✅ After (Review Result)

**👍 Good:** The function is concise and the purpose is clear.

**🛠 Improvements:**

1. **Naming:** Function name `s` and argument `x` give no information. `square` or `calculate_square` would be better.
2. **Type Hints:** It would be good to specify that input and output are numbers using Python's type hints.
3. **Docstring:** Function description is missing.

**🤔 Questions:**
What happens if a string instead of a number comes in as input value? Have you considered error handling?

**✨ Refactoring:**

```python
def calculate_square(number: float) -> float:
    """Returns the square of the given number."""
    return number ** 2
```

---

## 🎯 Conclusion

They say the best welfare is excellent colleagues.
Even if there are no human colleagues, the AI senior developer is awake 24 hours. Request a code review right now! 🍷
