---
layout: /src/layouts/Layout.astro
title: "Missed Details While Taking Minutes? Let AI Organize It for You"
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "Work Automation"
description: "Don't ask 'What was that again?' after the meeting. Just a recording file, and the summary is done in 1 minute."
tags: ["Meeting", "Summary", "Productivity"]
---

# 📝 Missed Details While Taking Minutes? Let AI Organize It for You

- **🎯 Recommended for:** All Office Workers, PMs, Secretaries
- **⏱️ Time Required:** 30 min → Reduced to 1 min
- **🤖 Recommended Models:** Clova Note (STT), ChatGPT (GPT-4), Claude 3

- ⭐ **Difficulty:** ⭐☆☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Don't ask 'What was that again?' after the meeting. Just a recording file, and the summary is done in 1 minute."_

Recording the entire meeting content is inefficient. What matters are 'Decisions Made' and 'Action Items'. This prompt converts scattered meeting details into a clear task list.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Summarize long minutes and extract key points
2. Auto-generate Action Items (Assignee/Deadline)
3. Specify decisions made and future plans

---

## 🚀 Solution: "Meeting Minutes Master"

### 🥉 Basic Version

Use this when you want to quickly grasp the key points.

> **Role:** You are a competent secretary.
> **Request:** Summarize these meeting minutes and give me just the 3 key points.
> **Input:** `[Meeting Minutes Text]`

<br>

### 🥇 Pro Version

Use this when you need to share systematic meeting minutes.

> **Role:** You are a meticulous Project Manager (PM).
>
> **Context:**
>
> - Meeting Type: `[Weekly Meeting / Kickoff / Brainstorming]`
> - Attendees: `[Attendee List]`
>
> **Task:**
>
> 1. Organize the minutes according to the template below.
>    - **📅 Date:** `[Meeting Date]`
>    - **👥 Attendees:** `[Attendees]`
>    - **🗣️ Agenda:** `[Agenda List]`
>    - **✅ Decisions:** `[Decided Content]`
>    - **📝 Action Items:**
>      - `[Assignee]` : `[Task]` (~`[Deadline]`)
>    - **⏭️ Next Meeting:** `[Scheduled Date]`
>
> **Constraints:**
>
> - Remove unnecessary small talk (jokes, weather talk, etc.).
> - Write Action Items as specific actions (e.g., "Review" -> "Write report and send email").
>
> **Warning:**
>
> - Verify dates and numbers accurately.

---

## 💡 Author's Comment (Insight)

The effect is maximized if you first extract text using an STT (Speech-to-Text) tool like Clova Note and then use this prompt. Sharing it within 5 minutes after the meeting will get you recognized as a "high performer".

---

## 🙋 FAQ

- **Q: What if the meeting minutes are too long?**
  - A: Since ChatGPT has an input limit, split the text or upload the file (using Code Interpreter) for analysis. Claude is advantageous for processing long contexts.

- **Q: Does it work with text without speaker separation?**
  - A: Yes, it can infer who said what from context to some extent, but having speaker labels is better for accuracy.

---

## 🧬 Prompt Anatomy (Why it works?)

1.  **Template Provided:** Clearly provided the desired output format to the AI, reducing processing time.
2.  **Explicit Instruction:** Improved quality by giving clear instructions like "Remove unnecessary small talk" and "Write specific actions".

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
(중구난방인 회의 녹취록 텍스트...)
김대리: 아, 그 건은 제가 이번 주까지 할게요.
박부장: 그래, 그거 중요하니까 빨리 처리해. 그리고 다음 주 워크샵 장소 섭외는?
이사원: 제가 몇 군데 알아보고 있는데 강남 쪽으로...
```

### ✅ After (Result)

```markdown
**📝 할 일 (Action Items):**

- 김대리 : 중요 안건 처리 (~이번 주)
- 이사원 : 워크샵 장소(강남 인근) 섭외 및 리스트 보고 (~다음 주)
```

---

## 🎯 Conclusion

Records to AI, Thinking to Humans! 🍷