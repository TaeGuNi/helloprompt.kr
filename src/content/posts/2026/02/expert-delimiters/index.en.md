---
layout: /src/layouts/Layout.astro
title: "AI Can't Understand You? Use 'Delimiters'"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Does your AI get confused when summarizing long text or fixing code? Use the Delimiter technique to separate commands from data and double your accuracy."
tags: ["Delimiters", "Readability", "XML Tags"]
---

# 🚧 AI Can't Understand You? Use "Delimiters"

- **🎯 Recommended For:** Everyone working with long texts or complex instructions
- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All Conversational AI Models (ChatGPT, Claude, Gemini, etc.)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> _"Stop letting AI mix up your instructions with your data—draw the line with delimiters and take absolute control of the output."_

When you throw a massive wall of text at an AI and say, "Summarize this," it often struggles to figure out where your command ends and the source material begins.

Just as humans use paragraphs and punctuation to navigate complex documents, you need to provide the AI with clear, undeniable boundaries. By using **Delimiters**, you are essentially telling the AI: **"Here is the exact start and end of the data you need to process."**

---

## ⚡️ 3-Line Summary (TL;DR)

1. AI models frequently confuse instructions with input data when reading long, unstructured texts.
2. By utilizing XML tags (`< >`) or special characters (like `"""`), you create unambiguous boundaries.
3. Making delimiters a standard part of your prompting habit drastically reduces hallucinations and boosts task accuracy to near 100%.

---

## 🚀 The Solution: "Delimiter Formatting"

### 🥉 Basic Version (Quick & Dirty)

Use this when you need a fast result for a simple, everyday task.

> **Role:** You are a meticulous `[Editor]`.
> **Task:** Summarize the text enclosed in triple quotes into 3 bullet points.
>
> """
> `[Insert your lengthy text here]`
> """

<br>

### 🥇 Pro Version (Expert Precision)

Use this when dealing with complex data, coding, or high-stakes content generation. XML tags are the industry standard for advanced prompting.

> **Role (Role):** You are a Senior `[Data Analyst]`.
>
> **Context (Context):**
>
> - Background: We need to extract key metrics from a chaotic quarterly report.
> - Goal: Provide a clean, structured summary of the financial data.
>
> **Task (Task):**
>
> 1. Read the raw data provided inside the `<report_data>` tags.
> 2. Extract only the revenue and growth metrics.
> 3. Ignore any marketing fluff or forward-looking statements.
>
> **Constraints (Constraints):**
>
> - Output the final result as a Markdown table.
>
> **Warning (Warning):**
>
> - If a specific metric is missing from the data, explicitly state "Data not found." Do not hallucinate numbers.
>
> **Input Data:**
> <report_data>
> `[Insert the incredibly long and messy quarterly report here]`
> </report_data>

---

## 💡 Writer's Insight

Why is this technique so crucial? In my experience, skipping delimiters is the number one cause of "prompt bleeding"—where the AI accidentally incorporates your instructions into its final answer, or worse, treats a piece of the input data as a command.

Think of XML tags like `<context>`, `<instructions>`, and `<data>` as separate filing cabinets. When you organize your prompt this way, the AI processes each section sequentially and logically. It’s particularly effective when you're feeding the AI raw code, legal documents, or unstructured interview transcripts. Once you start using XML tags, you'll never go back to messy, unformatted prompts.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Do I always have to use XML tags? Can I use something else?**
  - A: You don't have to use XML tags! Triple quotes (`"""`), triple backticks (`` ` ``), or even dashes (`---`) work perfectly well. However, for highly complex prompts (especially with Claude and Gemini), XML tags are natively recognized by their underlying architecture and tend to yield the most reliable results.

- **Q: Does this work on the free versions of ChatGPT or Claude?**
  - A: Absolutely. In fact, using delimiters is even _more_ important on less capable, free-tier models because they are far more prone to getting confused by unstructured text.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Clear Separation:** By isolating the `[Data]` from the `[Task]`, the AI knows exactly what to analyze and what to execute.
2. **Reduced Cognitive Load:** The model doesn't have to guess your intent. It safely ignores the instruction syntax when reading the data payload.
3. **Scalability:** You can easily stack multiple inputs (e.g., `<article_1>` and `<article_2>`) without the AI mixing them up.

---

## 📊 Proof: Before & After

### ❌ Before (Input without delimiters)

```text
Summarize the following text. The quarterly results were great but revenue dropped by 2%. Ensure you highlight the revenue drop. Also, the CEO stepped down. Keep the summary under 2 sentences.
```

_Result: The AI might get confused, summarize the instruction itself, or provide a disjointed response because the command and data are tangled together._

<br>

### ✅ After (Wrapping with tags)

```text
Summarize the text enclosed in <data> tags into exactly 2 sentences. Ensure you highlight the revenue drop.

<data>
The quarterly results were great but revenue dropped by 2%. Also, the CEO stepped down.
</data>
```

_Result: The AI cleanly extracts the data, applies the constraints perfectly, and delivers a flawless, two-sentence summary without hallucinating._

---

## 🎯 Conclusion

Top-tier prompt engineers habitually divide their inputs into structured **Sections**:

- `<context>` (The Situation)
- `<instruction>` (The Command)
- `<data>` (The Payload)

Adopt this one small habit, and watch your AI error rate drop to zero. 🧱
