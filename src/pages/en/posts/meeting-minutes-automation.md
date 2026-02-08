---
layout: /src/layouts/Layout.astro
title: "Escape Meeting Hell: Recording to Minutes & Email in 3 Mins"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "Work Automation"
description: "Perfect workflow to automate boring meeting minutes using Whisper and GPT. Essential for junior staff."
tags: ["MeetingMinutes", "Whisper", "ChatGPT", "Automation", "Productivity"]
---

# 📝 Escape Meeting Hell: Recording to Minutes & Email in 3 Mins

> **🎯 Recommended for:** Juniors whose wrists hurt from typing, Managers asking "What did we decide?"
> **⏱️ Time Required:** 3 mins (excluding recording time)
> **🤖 Recommended Model:** OpenAI Whisper (Transcription) + ChatGPT-4o (Summarization)

| Difficulty | Effectiveness |  Utility   |
| :--------: | :-----------: | :--------: |
|   ⭐☆☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐⭐ |

> _"I typed everything during the meeting, but missed my chance to speak... and now I can't remember anything while organizing notes... How long do I have to do this?"_

Stop writing. Just **'Participate'** in the meeting. AI does the recording better. Here is a process to finish **Recording → STT → Summary → Email Sending** using only free tools.

---

## ⚡️ TL;DR

1.  Turn on a recorder app (like Voice Memo or ClovaNote) and focus on the meeting.
2.  Convert the file to text (STT). (Whisper recommended)
3.  Throw the text into the **Prompt** below. Done.

---

## 🚀 Solution: "Meeting Minute Master"

### 🥉 Basic Version (Quick Summary)

When you just need the gist.

> **Role:** You are a competent secretary.
> **Request:** Read the script below and summarize into 3 sections: [Agenda / Decisions / Future Plans].
> **Script:** `[Paste text here]`

<br>

### 🥇 Pro Version (Perfect Minutes)

When you need to report to the boss or email the team.

> **Role:** You are a Chief Secretary at a large corporate strategy office. You write logically and clearly.
>
> **Context:** I need to write official Meeting Minutes based on this transcript.
>
> **Input:**
> `[Paste full transcript here]`
>
> **Task:**
>
> 1. **[Overview]:** Date, Attendees (if inferable), Topic.
> 2. **[Key Decisions]:** Numbered list of confirmed items. (Most Important!)
> 3. **[Action Items]:** Make a Table of "Who", "When", "What".
> 4. **[Issues/Discussions]:** Important points discussed but not concluded.
> 5. **[Email Draft]:** Write a polite 'Meeting Result Share' email based on the above.
>
> **Constraints:**
>
> - Remove all filler words (um, ah, er...).
> - Use concise bullet points for the report.

---

## 🧬 Anatomy of Prompt (Why it works?)

1.  **Extract Action Items:** The flower of meeting minutes is "So who does what?". Visualizing this as a Table clarifies responsibility.
2.  **Email Draft:** Instead of just summarizing, asking for a ready-to-send **Output** reduces one more work step.

---

## 📊 Proof: Before & After

### ❌ Before (Human Written)

> Summary of today. Marketing team will make 3 banner drafts, Dev team API integration by this week... Oh wait, what was Design team doing?

### ✅ After (AI Automation)

> **[Action Items]**
>
> | Assignee       | Task                        | Deadline   |
> | :------------- | :-------------------------- | :--------- |
> | **Mark (Mkt)** | Create 3 Main Banner Drafts | 2026-02-10 |
> | **Lee (Dev)**  | Payment Module API Test     | 2026-02-12 |
> | **Park (Des)** | Review UX Guideline Draft   | 2026-02-11 |
>
> **[Email Draft]**
> Subject: [Share] Results & Action Items for 2/8 Weekly Meeting
> Hi Team, Sharing the results of today's meeting... (cont.)

---

## 🎯 Conclusion

Don't type on your laptop during meetings; look into your colleagues' eyes.
"Survival of the Fittest" is old school.
Now it's **"Survival of the Prompter"**. 🍷
