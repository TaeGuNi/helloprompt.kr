---
layout: /src/layouts/Layout.astro
title: " \"고객 문의 자동 분류 및 우선순위 지정 (CS Automation)\""
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "업무 자동화"
description: " \"A CS triage prompt that analyzes customer sentiment to identify and prioritize 'angry customers' who need immediate attention.\""
tags: ["CS", "고객경험", "자동화", "감정분석"]
---

# 📝 Don't Keep Angry Customers Waiting

- **🎯 Target Audience:** CS Managers, E-commerce Operators, Customer Experience (CX) Specialists
- **⏱️ Time Saved:** 1 Hour → 1 Minute
- **🤖 Recommended AI:** GPT-3.5 Turbo (Fast), GPT-4o (Accurate)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐☆
- 🚀 **Utility:** ⭐⭐⭐☆☆

> _"Speed is kindness. Protect the golden hour for your furious customers."_

Have you ever felt overwhelmed staring at a dashboard piled up with hundreds of customer support tickets? You've probably experienced the nightmare of answering tickets chronologically, only to miss an urgent "shipping accident" or "duplicate billing error" until the customer's frustration completely boiled over. Now, use AI to filter customers' emotional states and the urgency of their inquiries first. It's time to restructure your CS workflow priorities like an emergency room triage.

---

## ⚡️ 3-Line Summary (TL;DR) {#tl-dr}

1. **Data Collection:** Gather customer inquiry logs and feed them to the AI.
2. **AI Triage:** The AI analyzes and categorizes each ticket based on "sentiment score" and "category."
3. **Priority Response:** Swiftly resolve high-priority tickets first—those with high emotional volatility (anger/dissatisfaction) and urgent categories (billing/shipping).

---

## 🚀 The Solution: "CS ER Triage Prompt"

### 🥉 Basic Version

Use this when you just need quick and simple categorization.

> **Role:** You are a fast and highly accurate `[CS Team Lead]`.
> **Task:** Read the following inquiry, determine its `[Category]` and `[Urgency (High/Medium/Low)]`, and provide the result.
> **Input:** `[Paste the customer's inquiry here]`

\

### 🥇 Pro Version

Use this to combine customer sentiment analysis for churn risk management and clear prioritization. This structure is perfectly optimized for automated pipelines (Zapier, Make, etc.).

> **Role (Role):** You are a `[Senior Customer Experience (CX) Specialist]` equipped with sharp judgment and deep empathy.
>
> **Context (Context):**
>
> - **Background:** We are dealing with an overwhelming surge of inquiries with limited CS staff. Establishing clear priorities is absolutely critical.
> - **Goal:** The primary objective is to identify and prioritize inquiries from highly dissatisfied customers (Churn Risk) to prevent service abandonment.
>
> **Task (Task):**
>
> Analyze the provided `[Inquiry List]` and execute the following three tasks:
>
> 1. **Sentiment Score:** Evaluate the emotional state of each inquiry on a scale of 1 to 5. (1: Highly Satisfied/Joyful ~ 5: Furious/Highly Dissatisfied)
> 2. **Categorization:** Classify each inquiry into one of the following categories: Shipping / Refund / Product Defect / Simple Question / Other.
> 3. **Priority & Reasoning:** Based on the sentiment score and category, assign a processing priority (High/Medium/Low) and provide a clear, one-sentence explanation for your decision.
>
> **Constraints (Constraints):**
>
> - **Output Format:** You MUST output the result EXCLUSIVELY as a JSON array. (This is for system integration, so absolutely NO additional conversational text or markdown outside the JSON).
> - **JSON Structure Example:** `[{"id": 1, "sentiment": 5, "category": "Refund", "priority": "High", "reason": "Strong complaint about delayed refund and mention of legal action"}]`
>
> **Input Data (Input):**
> `[Paste the entire list of inquiries to be analyzed here]`

---

## 💡 Writer's Insight {#insight}

The true value of this prompt isn't just generating text responses—it shines brightest when building **"Automated Workflows"**. Because the output format is strictly constrained to JSON, it seamlessly integrates with no-code automation tools like Zapier or Make.

For instance, try setting up a trigger: **"When the AI detects an inquiry with a sentiment score of 5 (Furious), immediately send an [URGENT] alert message to the CS team's Slack channel."** This allows you to secure the golden hour before a customer's frustration spills over onto social media or community forums. After implementing this exact method, I significantly reduced the number of cases that almost escalated into malicious claims.

---

## 🙋 Frequently Asked Questions (FAQ) {#faq}

- **Q: How many inquiries can I analyze at once?**
  - A: Using GPT-4o, you can easily process about 50 to 100 inquiries per batch. However, considering token limits and context windows, it is highly recommended to input data in smaller, time-based chunks (e.g., hourly or half-day batches) rather than dumping thousands at once.

- **Q: Does the AI catch sarcasm or passive-aggressive tones?**
  - A: Yes. Modern models like GPT-4o are excellent at understanding context and will accurately flag sarcastic remarks like, "Wow, this sure arrived _super_ fast ^^" as dissatisfied. However, if your industry uses specific jargon, simply add a line in the `Context` section like, "In our industry, the phrase 'XYZ' implies a critical error," to drastically improve accuracy.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Sentiment Scoring:** By quantifying ambiguous human emotions into a hard 1-5 scale, we enable mechanical filtering and systemic sorting.
2. **Strict Constraints:** Forcing the AI to output _only_ JSON prevents it from adding unnecessary pleasantries, which completely eliminates parsing errors when connecting to APIs or no-code tools.
3. **Mandatory Reasoning:** Demanding a one-sentence justification for why a ticket is marked "High" priority grants CS agents predictability. They understand the severity of the situation before even opening the ticket.

---

## 📊 Proof: Before & After

### ❌ Before (Traditional Method: Chronological Sorting)

```text
[Ticket 1 - 09:00] Hello, is it possible to exchange the size?
[Ticket 2 - 09:02] When will my order be shipped?
[Ticket 3 - 09:05] Hey, I canceled my payment yesterday but you charged me again? Are you kidding me? I'm suing you.
[Ticket 4 - 09:10] I forgot my password.
```

_The Problem: The highly volatile, urgent ticket received at 09:05 gets buried under simple, routine inquiries and its resolution is delayed._

### ✅ After (AI Triage Applied)

```json
[
  {
    "id": 3,
    "sentiment": 5,
    "category": "Refund",
    "priority": "High",
    "reason": "Severe anger over duplicate billing and explicit threat of legal action."
  },
  {
    "id": 2,
    "sentiment": 3,
    "category": "Shipping",
    "priority": "Medium",
    "reason": "Standard inquiry regarding shipping schedule."
  },
  {
    "id": 1,
    "sentiment": 2,
    "category": "Other",
    "priority": "Low",
    "reason": "Simple size exchange request."
  },
  {
    "id": 4,
    "sentiment": 2,
    "category": "Other",
    "priority": "Low",
    "reason": "Simple account password inquiry."
  }
]
```

_The Result: The AI immediately recognizes the severity of `id: 3` and escalates it to the very top of the High-priority queue._

---

## 🎯 Conclusion

You simply cannot process every single ticket at the exact same speed. What truly matters is having a system that decides **"Who do we rescue first?"**

Copy this prompt today and apply it to your CS channels. You will drastically reduce unnecessary emotional burnout and be able to focus your energy entirely on genuine crises. Here's to leaving work on time! 🍷
