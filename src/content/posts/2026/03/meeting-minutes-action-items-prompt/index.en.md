---
layout: /src/layouts/Layout.astro
title: "🎙️ Structured Prompt to Clean Up Messy Meeting Minutes in 1 Minute"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: "Work Automation"
description: "A practical prompt that instantly converts rambling meeting voice transcripts into clean summaries and action items."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "meeting-minutes"]
---
# 📝 Structuring Messy Meeting Minutes in 1 Minute
<!-- ⚠️ [CRITICAL RULE]   (10   ) ⚠️
    (`index.ko.md`)  ,
****   9  (`index.[lang].md`)   .
 (9): en, de, es, fr, it, ja, pt, ru, zh
 10(+9 )       . -->
<!-- ⚠️ [Lint Rule]   . (Table)      . -->
- **🎯 Recommended for:** Junior Employees, Project Managers, Marketers
- **⏱️ Time Saved:** 30 minutes → 1 minute
- **🤖 Recommended Model:** Any Conversational AI (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Difficulty:** ⭐☆☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐
<!-- ⚠️ [Lint Rule] (>) Basic/Pro   (_..._)     . -->
> _"Did you waste your entire afternoon organizing meeting minutes today?"_
Even if you convert the recorded audio into text right after the meeting (using tools like Clova Note, Whisper, etc.), extracting the core points from a chaotic mix of conversations is another painful task. This prompt sharply extracts only the **'Key Decisions'** and **'Action Items' (who needs to do what)** from a contextless pile of text. Just copy and paste it right away.
---
## ⚡️ 3-Line Summary (TL;DR)
1. Copy the raw, voice-converted text and feed it to the AI.
2. The AI filters out the small talk and extracts only the core decisions.
3. It clearly identifies the most important 'Action Items per person'.
---
## 🚀 Solution: "Automated Meeting Minutes Structuring Prompt"
<!-- ⚠️ [Lint Rule] (>) (Prompt ) Prompt  . -->
### 🥉 Basic Version
Use this when you need quick results.
> **Role:** You are a `[Senior Project Manager]`.
> **Task:** Read the following `[Meeting Transcript]` and summarize only the core Key Decisions and Action Items.
### 🥇 Pro Version
Use this when you need detailed quality.
> **Role:** You are a `[10-year experienced IT Service Planner and PM]`. You are an expert at grasping the context of a meeting and clearly organizing who needs to do what and by when.
>
> **Context:**
> - Background: You have a messy text transcript from a `[Weekly Status Report or Ideation Meeting]`.
> - Goal: Create a cleanly structured summary so that attendees can quickly understand the meeting contents and perform their Action Items without confusion.
>
> **Task:**
> 1. Read the `[Meeting Transcript]` below and summarize it according to the following structure:
>   - 📌 Main Topic
>   - 🎯 Key Decisions
>   - 🚨 Pending Issues
>   - ✅ Action Items (Specify assignee, deadline, and task)
> 2. Completely remove greetings, unnecessary small talk, and repetitive content.
> 3. Maintain a business tone and manner (polite and clear written style).
>
> **Constraints:**
> - Output the format as a list using Markdown symbols (-, *, backticks, etc.) and emojis.
> - Absolutely do not use Markdown tables.
> - If the assignee for an action item is unclear, mark it as '[Needs Confirmation]'.
>
> **Warning:**
> - Absolutely do not make up information that is not in the transcript. (Prevent hallucination)
>
> **Input:**
> - Meeting Transcript: `[Paste your copied transcript text here]`
---
<!-- ✅ [Lint Rule]  .   CI  . -->
## 💡 Author's Comment (Insight)
The core of this prompt is **'Action Item Extraction'** and **'Hallucination Suppression'**. 
The real purpose of writing meeting minutes is not 'recording what was said', but 'clarifying what to do next'. 
When used in actual work, you'll often find the AI confidently making up plausible schedules that were never mentioned in the meeting. To prevent this, I included the constraint "do not make up information" and the defensive instruction "if the assignee is unclear, mark as [Needs Confirmation]". Try throwing the text extracted from an STT tool like Clova Note into Claude 3.5 Sonnet or GPT-4o along with this prompt. A text-refining task that usually takes 30 minutes will shrink to 1 minute. Enjoy another cup of coffee with the time you saved.
---
<!-- ⚠️ [Lint Rule]  .    . -->
## 🙋 Frequently Asked Questions (FAQ)
- **Q: Can I input a transcript of a 1-hour long meeting all at once?**
  - A: Yes, the latest models (Claude 3.5 Sonnet, GPT-4o, etc.) have excellent context-grasping abilities and can easily handle a 1-hour transcript. However, if you hit a token limit, divide it in half and input it separately.
- **Q: Does this work on the free version of ChatGPT?**
  - A: It's possible, but the ability to grasp the context and accurately follow instructions might be slightly lower in free models (like GPT-3.5). We recommend using the latest models if possible.
---
## 🧬 Prompt Anatomy (Why it works?)
1. **Assigning a Role:** By using the persona of a 10-year experienced PM, we forced a tone and manner of 'clarifying work instructions' rather than simply shortening the text.
2. **Structuring the Task:** By breaking down the output format into agenda, decisions, pending issues, and action items, we prevented the AI from answering in an irrelevant format.
3. **Constraints:** We completely blocked the use of Markdown tables, which ruin mobile readability, and forced the use of an emoji list format.
---
## 📊 Proof: Before & After
### ❌ Before (Input)
```text
Team Leader Kim: Ah, yes, can you hear me? We're gathered today regarding the marketing campaign for this quarter. Assistant Manager Park, how is the preparation for Plan A and Plan B going?
Assistant Manager Park: Yes, I think we'll have to put Plan A on hold because it seems to exceed the budget, and we should probably go with Plan B.
Employee Choi: Excuse me, if we go with Plan B, I will have a list of influencers ready by this Friday.
Team Leader Kim: Okay, let's fix it at Plan B then. Assistant Manager Park, please draft the budget plan again and report by next Tuesday. And for the landing page design... ah, this hasn't been discussed with the design team yet, right?
Assistant Manager Park: Yes, not yet.
```
### ✅ After (Result)
```text
📌 Main Topic
- Discussion on Q3 Marketing Campaign Plan
🎯 Key Decisions
- Plan A on hold due to budget constraints, Plan B finalized
🚨 Pending Issues
- Landing page design planning (Needs discussion with the design team)
✅ Action Items
- 👨‍💼 Assistant Manager Park: Redraft and report budget plan based on Plan B (Deadline: Next Tuesday)
- 🧑‍💻 Employee Choi: List up influencers related to Plan B (Deadline: This Friday)
- ❓ [Needs Confirmation]: Assignee for landing page discussion with the design team is undecided
```
---
## 🎯 Conclusion
Don't waste your energy organizing complex meeting minutes. 
Leave the messy text cleanup to the AI, and focus on executing the decided action items yourself. 
Now, go home on time! 🍷
