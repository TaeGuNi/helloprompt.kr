---
layout: /src/layouts/Layout.astro
title: " \"회의록 지옥 탈출: 1시간 회의를 10초 만에 정리하는 프롬프트\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 생산성"
description: " \"두서없는 회의 스크립트를 깔끔한 액션 아이템(Action Item)과 결정 사항으로 변환하는 마법의 프롬프트.\""
tags: ["회의록", "요약", "클로바노트", "액션아이템"]
---

# 📝 Escape Meeting Minutes Hell: A Prompt That Summarizes a 1-Hour Meeting in 10 Seconds

- **🎯 Highly Recommended For:** Junior PMs, New hires tasked with note-taking, Leaders drowning in back-to-back meetings
- **⏱️ Time Saved:** 30 minutes → 10 seconds
- **🤖 Recommended AI Models:** Claude 3.5 Sonnet (Unbeatable for long context), GPT-4o

- ⭐ **Difficulty:** ⭐☆☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"The meeting is finally over, but are you staying another 30 minutes late just to type up the minutes? Free yourself completely from the agony of meeting summaries with a single 'Copy + Paste'."_

You've managed to secure the transcript via dictation tools or Zoom captions. But when you open it, it's an unreadable mess filled with "uh," "so," and awkward casual chatter. You can't possibly share this raw text with your boss or team. What you *actually* need in the real world is a crystal-clear list of Action Items that explicitly state **'Who, is doing What, by When'**.

---

## ⚡️ TL;DR (3-Line Summary)

1. **Raw transcripts are a sin:** Pre-processing is absolutely essential to perfectly filter out small talk and useless filler words.
2. **Structure is everything:** Drastically improve readability by clearly separating the meeting's 'Decisions' from the 'Action Items'.
3. **Crystal-clear accountability:** Every single Action Item must have a designated assignee and a strict deadline (R&R) attached like a price tag to ensure execution.

---

## 🚀 The Solution: "Meeting Minutes Master" Prompt

### 🥉 Basic Version

Perfect for when you just need a rapid grasp of the core context without any complex formatting.

> **Role:** You are an `[Expert Executive Assistant]`.
> **Task:** Analyze the meeting transcript below and provide a clean summary divided into: 1) Key Discussion Topics, 2) Final Decisions, and 3) Next Steps.
>
> `[Paste the meeting transcript here]`


### 🥇 Pro Version

Transforms raw audio logs into a flawless, ready-to-publish format that you can instantly copy and paste directly into an executive report or a team Slack channel.

> **Role:** You are a 10-year Senior Product Manager and an impeccable Scribe who never misses a critical detail.
>
> **Context:**
>
> - Background: This is the raw voice-to-text transcript (audio log) of a recently concluded meeting regarding `[Meeting Topic]`. The content is highly disorganized and mixed with participants' casual small talk.
> - Objective: Create a definitive 'Meeting Outcome Report' that allows team members to instantly understand the decisions and immediately execute their assigned tasks (Action Items).
>
> **Task:**
>
> Meticulously analyze the provided transcript and structure the output strictly using the Markdown format below.
>
> 1.  **🔍 Meeting Overview**
>     - Date & Participants (Infer and list if deducible from the text)
>     - Core Meeting Topic (1-sentence summary)
> 2.  **✅ Key Decisions**
>     - List only the finalized, confirmed decisions using concise bullet points (`-`).
> 3.  **🏃‍♂️ Action Items**
>     - Structure as a highly readable checklist (`- [ ]`) optimized for mobile viewing.
>     - Format: `- [ ] **[Assignee]**: [Specific Task] (Deadline: [Due Date, or 'TBD' if not mentioned])`
> 4.  **💬 Key Discussions**
>     - Summarize any fierce debates, bottlenecks, or newly brainstormed ideas in 2-3 sentences.
>
> **Constraints:**
>
> - 100% filter out filler words like "um...", "uh...", and any casual chatter completely irrelevant to the business.
> - Ruthlessly eliminate vague statements (e.g., "Let's do our best", "We'll see later"). Record only concrete facts and actionable directives.
> - If the specific assignee for a task is unclear in the transcript, you MUST explicitly state 'TBD (To Be Determined)' in the assignee bracket.
> - Do not fabricate, hallucinate, or invent any information that is not explicitly stated in the text.
>
> **Transcript Data:**
> `[Paste the entire raw transcript text here]`

---

## 💡 Writer's Insight

This prompt is my absolute "secret weapon." I actually have it integrated directly into our internal Notion meeting notes template and use it daily. **Claude 3.5 Sonnet**, in particular, boasts arguably the best long-context processing capabilities available today. You can shove an entire 1-to-2-hour meeting transcript into it, and it will flawlessly extract the critical signal from the noise without losing the overarching context.

**💡 Pro Tip:** Before feeding the transcript to the AI, simply add a single line at the very top: `Participants: John (Marketing), Sarah (Dev)`. By explicitly defining the roles or names upfront, the AI's accuracy in speaker diarization and R&R (Roles & Responsibilities) mapping skyrockets.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: The text is too long, and the AI refuses the input or cuts off mid-generation.**
  - A: When exporting text from transcription tools, make sure to disable the 'Include timestamps' option to extract only the raw text. If you still hit the token limit, simply split the transcript in half and prompt sequentially: "Continuing from the previous context, summarize this next part..." This solves the issue perfectly.

- **Q: Is it safe to upload highly confidential internal meeting transcripts to AI?**
  - A: For meetings involving sensitive data, I strongly urge the use of Enterprise AI solutions. If you must use public AI models, it is absolutely critical that you **anonymize (mask)** proper nouns—such as specific company names, core project codenames, or exact financial figures—replacing them with placeholders like 'Company A', 'Project B', or '$X' before pasting.

---

## 🧬 Anatomy of the Prompt (Why it works)

1.  **Format Enforcing:** By forcing the Action Items into a checklist (`- [ ]`) with explicit 'Assignee/Deadline' brackets—rather than using plain text or horizontal-scrolling tables—we drastically improve mobile readability and preemptively eliminate task omissions.
2.  **Noise Filtering:** The constraints explicitly instruct the AI to strip out filler words and small talk, maximizing the Signal-to-Noise Ratio of the final document.
3.  **TBD Handling (Controlling Uncertainty):** By forcing the AI to flag unassigned tasks as 'TBD' instead of arbitrarily guessing an owner, it visually highlights the dangerous 'accountability holes' that so often occur in real-world corporate environments.

---

## 📊 Proof: Before & After

### ❌ Before (Raw Transcript Input)

```text
"Uh, hey Assistant Manager Kim, about that... main banner draft for this week? Could you, you know, take care of that? Oh right, what are we having for lunch today? (Laughs) Anyway, that's really important so make sure to hit the deadline..."
```

### ✅ After (AI Summary Report)

```text
**🏃‍♂️ Action Items**

- [ ] **Assistant Manager Kim**: Create and share the main banner design draft (Deadline: Expected this Friday) ※ High Priority
```

---

## 🎯 Conclusion

Meeting minutes are not merely historical records of yesterday's conversations; they are strategic documents designed to drive tomorrow's actions.
Generate flawless meeting summaries in exactly 10 seconds, and invest your newly reclaimed time into truly impactful deep work (or a well-deserved coffee break).

Time to clock out! 🍷
