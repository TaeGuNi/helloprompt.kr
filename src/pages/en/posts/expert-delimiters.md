---
layout: ../../layouts/Layout.astro
title: "AI Not Understanding You? Build a 'Fence' (Delimiters)"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Does AI get confused when summarizing long text or fixing code? Double your accuracy with the Delimiter technique using special characters."
tags: ["Delimiters", "Readability", "XML Tags"]
---

# 🚧 AI Not Understanding You? Build a "Fence"

> **🎯 Recommended for:** Everyone
> **⏱️ Time required:** 5 minutes
> **🤖 Recommended model:** All AI models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

When you throw a long text at AI and say "Summarize this", the AI sometimes gets confused about where the text to summarize starts and ends, and which part is the command.

Just as humans divide text into **paragraphs**, you need to draw a clear **Delimiter** for AI saying **"From here to here"**.

---

## ⚡️ 3-Line Summary (TL;DR)

1. AI can struggle to distinguish between commands and data in long texts.
2. Use XML tags (`< >`) or special characters (`"""`) to set clear boundaries.
3. The habit of dividing sections reduces AI perception errors and increases task accuracy.

---

---

## 🚀 Solution: "Use XML Tags or Special Characters"

### 🥉 Basic Version

Use this when you just need quick results.

> **Role:** You are a capable **Editor**.
> **Request:** Does AI get confused when summarizing long text or fixing code? Double your accuracy with the Delimiter technique using special characters.

<br>

### 🥇 Pro Version

Use this when you need detailed quality.

The best method is to use `< >` tags or `"""` (triple quotes).

> **Role:** You are a capable **Editor**.
>
> **Request:** Summarize the content wrapped in `<text>` tags below into 3 sentences.
>
> **Input Data:**
> <text>
> `[Huge news article or report content here]`
> </text>

---

---

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input without distinction)

AI: It might include the command "Summarize this" in the summary itself, or just read the beginning of the text and finish hastily.

```text
(Confused mixture of commands and data)
```

<br>

### ✅ After (Wrapped in tags)

AI recognizes only the content inside `<text>` as **"Data to process"** and clearly distinguishes the rest as **"Commands"**.

```text
(Perfectly summarizes by extracting only the content inside <text>)
```

---

---

---

## 🎯 Conclusion

Experts habitually divide **Sections** when writing prompts.

- `<context>` (Situation)
- `<instruction>` (Instructions)
- `<data>` (Data)

This single small habit brings the prompt error rate down to 0%. 🧱
