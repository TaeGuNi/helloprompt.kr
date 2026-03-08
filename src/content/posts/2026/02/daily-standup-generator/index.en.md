---
layout: /src/layouts/Layout.astro
title: " \"1분 만에 끝내는 스크럼/데일리 스탠드업 작성법\""
author: "Jay"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "협업"
description: "Organize your scattered daily tasks into a clean 'Yesterday / Today / Blockers' format in just one minute."
tags: ["Scrum", "Agile", "Standup", "Communication"]
---

## 📝 How to Write Your Daily Standup in 1 Minute

- **🎯 Recommended for:** Developers, Product Managers, Marketers, Junior Employees
- **⏱️ Time Saved:** 15 minutes → 1 minute
- **🤖 Recommended AI:** Any conversational AI (ChatGPT, Claude, Gemini)

- ⭐ **Difficulty:** ⭐☆☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Staring at a blank Slack message every morning, trying to remember what you actually did yesterday? Stop wasting your peak morning energy on status updates."_

Daily standups and Scrum updates are supposed to be quick check-ins, yet we often spend way too much time formatting scattered thoughts into a concise, professional message. Instead of diving into deep work, we end up overthinking our phrasing, worrying about sounding productive enough, or entirely forgetting to mention critical blockers.

Think of this prompt as your personal Agile coach. Simply brain-dump your messy, unstructured thoughts, and the AI will instantly organize them into a flawless, copy-paste-ready update that your entire team will appreciate.

---

## ⚡️ TL;DR

1. Stop struggling to format your thoughts while simultaneously trying to remember them.
2. Dump your raw notes, code commits, and fragmented memories directly into the AI.
3. Use the structured prompt below to automatically generate a clean "Yesterday / Today / Blockers" update.

---

## 🚀 The Solution: "The 1-Minute Scrum Master Prompt"

### 🥉 Basic Version

Use this when you just need a quick formatting fix for your rough notes.

> **Role:** You are an experienced Scrum Master and agile communicator.
> **Task:** Convert the following rough notes into a standard Daily Standup format (Yesterday, Today, Blockers). Keep the tone professional, concise, and action-oriented.
> **Notes:** `[Insert your messy notes here]`

### 🥇 Pro Version

Use this when you want your updates to highlight your impact, align with team goals, and clearly communicate technical blockers without getting bogged down in jargon.

> **Role:** You are a Senior Tech Lead and an expert Agile Scrum Master. Your communication is crisp, impact-driven, and highly readable.
>
> **Context:**
>
> - Background: I need to share my daily standup update with my team on Slack/Teams.
> - Goal: To transform my raw, unstructured brain-dump into a highly professional update that highlights my progress, sets clear expectations for today, and explicitly calls out any blockers where I need help.
>
> **Task:**
>
> 1. Analyze my `[Raw Notes]` provided below.
> 2. Categorize the information strictly into three sections: **Yesterday**, **Today**, and **Blockers**.
> 3. Rewrite the points to be action-oriented (start with strong verbs like "Implemented", "Reviewed", "Resolved").
> 4. If any point is too vague, refine it to sound professional but do not invent metrics.
> 5. If there are no blockers mentioned, explicitly state "None" or "No blockers."
>
> **Input Variable:**
>
> - `[Raw Notes]`: `[Insert your raw notes here]`
>
> **Constraints:**
>
> - Use bullet points for readability.
> - Do not include any introductory or concluding conversational filler (e.g., "Here is your update"). Just output the final result.
> - Keep the tone collaborative and confident.
>
> **Warning:**
>
> - Do not hallucinate or add tasks I did not mention. Only use the information provided in the raw notes.

---

## 💡 Writer's Insight

This prompt is an absolute lifesaver, especially on Monday mornings or after a chaotic day of putting out fires. The real magic of the **Pro Version** lies in the instruction to use "action-oriented verbs." When you casually type "worked on the login bug," the AI elevates it to "Investigated and resolved the authentication issue on the login page." It subtly shifts your update from sounding passive to highly impactful.

For developers, you can literally copy and paste your git commit history from yesterday straight into the `[Raw Notes]` section. The AI will effortlessly translate that technical jargon into a business-readable Scrum update in a matter of seconds.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Does this work well in non-tech environments?**
  - A: Absolutely. The "Yesterday / Today / Blockers" format is universally effective. Whether you are in marketing, HR, or sales, structuring your daily progress this way builds trust and team transparency.

- **Q: Can I customize the sections?**
  - A: Yes! If your team uses a different format like "Done / Doing / Needs Review", simply change the target categories within the **Task** section of the prompt to match your workflow.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Role Assignment:** By assigning the persona of a "Senior Tech Lead / Scrum Master," the AI adopts a concise, no-nonsense, and professional tone perfectly suited for business communication.
2. **Action-Oriented Verbs:** Instructing the AI to start bullet points with strong verbs ensures your update sounds proactive rather than passive.
3. **Strict Constraints:** The instruction to avoid conversational filler guarantees the output is immediately ready to be pasted into your team's chat, saving you the hassle of editing out the AI's chatty pleasantries.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
[Raw Notes]
yesterday I spent like 3 hours trying to fix that weird bug on the checkout page, think it's the API. also had a meeting with design about the new buttons. today I guess I'll keep looking at the API issue and maybe start on the user profile ticket if I have time. oh and I need access to the staging database, I can't test without it.
```

### ✅ After (Output)

```text
**Yesterday:**
- Investigated the checkout page bug; identified the external API as the likely root cause.
- Synced with the Design team to review specifications for the new button components.

**Today:**
- Continue debugging and resolving the checkout API issue.
- Begin implementation of the User Profile feature (time permitting).

**Blockers:**
- I am currently blocked from testing the checkout fix. Need access credentials for the staging database.
```

---

## 🎯 Conclusion

Writing your daily standup shouldn't be the hardest task of your morning. By offloading the formatting and wordsmithing to AI, you can share clear, impactful updates in seconds.

Now, simply copy the prompt, drop in your notes, and get your morning back! ☕️
