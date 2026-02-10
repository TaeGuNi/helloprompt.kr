---
layout: /src/layouts/Layout.astro
title: "Alien-like Regex, Order in Natural Language"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "Don't struggle with complex regular expressions like deciphering codes. Just say the pattern you want, and AI will create the regex."
tags: ["Regex", "Regular Expression", "String Processing", "Validation"]
---

# 📝 Alien-like Regex, Order in Natural Language

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"What was the email validation regex again... Ah, and how do I put hyphens in phone numbers?"_

Regular Expression (Regex), new every time you use it and looks like alien language every time you see it, right?
Typing `^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$`... yourself is torture.
Now just say "Find email format" in natural language.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Request complex pattern matching in natural language
2. Provide detailed explanation for the generated regex
3. Verify with test cases

---

## 🚀 The Solution: "Regex Interpreter"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Regex Master.
> **Request:** Don't struggle with complex regular expressions like deciphering codes. Just say the pattern you want, and AI will create the regex.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Regex Master.
>
> **Context:** I need to extract or validate specific patterns from text data. But regex syntax is too difficult.
>
> **Task:**
>
> 1. Write a **Regular Expression (Regex)** that perfectly fits the pattern I describe.
> 2. Explain how the written regex works by breaking it down into parts.
> 3. Show 3 examples that match (Match) and 3 examples that don't match (Non-match) with this regex respectively.
>
> **Pattern I want to find:**
> `[Describe the pattern you want in natural language here. e.g.: "Mobile phone number in 010-1234-5678 format"]`
>
> **Language/Environment:** `[e.g.: JavaScript / Python / Java]`
>
> **Constraints:**
>
> - Ensure special character escape processing is done correctly.
> - Create an expression that is as concise yet accurate as possible.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input)

**Pattern:** "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character."

### ✅ After (Result)

**Regex (JavaScript):**

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

**Explanation:**

- `^`: Start of string
- `(?=.*[a-z])`: Contains at least one lowercase letter
- `(?=.*[A-Z])`: Contains at least one uppercase letter
- `(?=.*\d)`: Contains at least one number
- `{8,}`: 8 characters or more

**Test:**

- ✅ `Pass1234!` (Match)
- ❌ `pass1234` (No special char/uppercase)

---

## 🎯 Conclusion

Regex is powerful but too unfriendly for humans to read.
Now leave that complex code deciphering to AI, and you just enjoy the magic of text processing! 🍷
