---
layout: /src/layouts/Layout.astro
title: "AI Can't Understand You? Use 'Delimiters'"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Does AI get confused when summarizing long text or fixing code? Use the Delimiter technique to separate sections and double your accuracy."
tags: ["Delimiters", "Readability", "XML Tags"]
---

# 🚧 AI Can't Understand You? Use "Delimiters"

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

When you throw a long text at an AI and say "Summarize this," the AI sometimes gets confused about where the text to summarize ends and where the instructions begin.

Just as humans divide text into **paragraphs** when reading, you need to draw a clear **boundary (Delimiter)** for the AI, saying **"From here to here is the content."**

---

## ⚡️ 3-Line Summary (TL;DR)

1. AI can struggle to distinguish between commands and data in long texts.
2. Use XML tags (`< >`) or special symbols (`"""`) to set clear boundaries.
3. The habit of dividing sections reduces AI recognition errors and increases task accuracy.

---

## 🚀 The Solution: "Using XML Tags or Special Symbols"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a competent **Editor**.
> **Request:** Does AI get confused when summarizing long text or fixing code? Use the Delimiter technique to separate sections and double your accuracy.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

The best way is to use `< >` tags or `"""` (triple quotes).

> **Role:** You are a competent **Editor**.
>
> **Request:** Summarize the content wrapped in `<text>` tags below into 3 sentences.
>
> **Input Data:**
> <text>
> `[Insert incredibly long news article or report content here]`
> </text>

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input without delimiters)

AI: It might include the instruction "Summarize this" as part of the summary itself, or just read the beginning of the text and finish hastily.

```text
(Confusing mix of instructions and data)
```

<br>

### ✅ After (Wrapping with tags)

The AI recognizes only the content inside `<text>` as **"data to process"** and clearly distinguishes the rest as **"commands."**

```text
(Accurately extracts only the content inside <text> and summarizes it perfectly)
```

---

## 🎯 Conclusion

Experts habitually divide **Sections** when crafting prompts.

- `<context>` (Situation)
- `<instruction>` (Instructions)
- `<data>` (Data)

This single small habit makes the error rate of your prompts 0%. 🧱
