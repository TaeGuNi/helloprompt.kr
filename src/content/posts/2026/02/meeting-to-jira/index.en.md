---
layout: /src/layouts/Layout.astro
title: " \"회의록을 Jira 티켓으로 자동 변환하기\""
author: "Jay"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "프로젝트 관리"
description: " \"Discover a magical prompt that converts a 1-hour meeting transcript into flawless Jira tickets in just 10 seconds.\""
tags: ["PM", "Jira", "회의록", "생산성"]
---

# 📝 The AI Prompt That Auto-Converts Meeting Notes into Jira Tickets in 10 Seconds

- **🎯 Target Audience:** PMs, POs, Scrum Masters, Planners, Tech Leads
- **⏱️ Time Saved:** 30 minutes → 10 seconds
- **🤖 Recommended AI:** Claude 3.5 Sonnet (Superior for long contexts), GPT-4o

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Are you missing out on today's actual work because you're still organizing yesterday's meeting notes?"_

During meetings, countless ideas and action items are poured out. But once the meeting ends, it often becomes unclear who is doing what and by when. If you are wasting precious time manually transferring raw audio transcripts or meeting notes into Jira tickets or Asana tasks, this prompt is your ultimate solution.

---

## ⚡️ TL;DR (3-Line Summary)

1. Prepare your meeting transcript (STT) extracted from tools like Zoom, Teams, or Otter.ai.
2. Feed the transcript to the AI using our specialized prompt to extract **'Actionable Items'** formatted strictly as **'Jira Tickets'**—not just a generic summary.
3. Copy the generated output, paste it directly into Jira, Notion, or Asana, and start working immediately.

---

## 🚀 The Solution: "The PM's Perfect Assistant: Auto Ticket Generator"

### 🥉 Basic Version

Use this when you just need a quick list of 'Action Items'—who needs to do what.

> **Role:** You are a `[Meticulous PM with 10 years of experience]`.
> **Task:** From the provided meeting transcript, extract only the actionable items clearly listing the 'Assignee', 'Due Date', and 'Task' in a clean list format.
> **Transcript:** `[Paste your meeting transcript here]`


### 🥇 Pro Version

Go beyond simple summaries. This version generates perfect Jira tickets complete with **User Stories** and **Acceptance Criteria (AC)**, enabling your development team to start working immediately.

> **Role:** You are an `[Agile Coach and Lead Scrum Master with 15 years of experience]`.
>
> **Context:**
>
> - Background: A feature planning meeting has just concluded. Based on this meeting, we need to create clear Jira tickets to assign to our developers and designers.
> - Goal: Write Epic and Story-level tickets with explicit Acceptance Criteria (AC) so the development team can begin work immediately without needing further clarification.
>
> **Task:**
>
> 1. Analyze the meeting transcript and separate the Development Tasks from Design Tasks.
> 2. Summarize each task using the **User Story format** ("As a [persona], I want to [action] so that [outcome]").
> 3. For each ticket, write at least 3 specific **Acceptance Criteria (AC)** that cover edge cases and serve as a baseline for QA testing.
> 4. If a specific person was mentioned during the meeting, assign them as the 'Assignee'. If no one was mentioned, mark it as 'TBD'.
>
> **Constraints:**
>
> - You MUST strictly follow the Markdown format provided below.
> - `[Ticket Title (Summary)]`
> - `**Assignee:** [Name]` / `**Due Date:** [Date]`
> - `**User Story:** [Content]`
> - `**Acceptance Criteria:**`
>   - `[Criterion 1]`
>   - `[Criterion 2]`
>
> **Warning:**
>
> - Do not hallucinate. NEVER invent details that were not mentioned in the transcript.
> - If anything is ambiguous, extract it and list it at the bottom of the ticket under a `**TBD (To Be Determined):**` section with specific questions.
>
> **Meeting Transcript:**
>
> `[Paste the full transcript here]`

---

## 💡 Writer's Insight

The true power of this prompt lies in transforming a simple "meeting summary" into **"actionable, structured data (Jira Tickets)."**
In the real world, simply asking an AI to "summarize the meeting" yields a condensed narrative that is rarely ready to be handed off to developers. However, by enforcing **Constraints** to use `User Story` and `Acceptance Criteria` formats, you force the AI to deduce the "operational conditions" from ambiguous conversations.

**Tip:** **Claude 3.5 Sonnet** is exceptionally powerful at handling long contexts. You can copy and paste an entire 1-hour raw meeting transcript, and it won't lose the flow while accurately pinning down action items. It automatically filters out small talk and jokes, meaning you don't even need to clean up the transcript beforehand.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can it process long meeting transcripts exceeding an hour?**
  - A: Yes. Models like Claude 3.5 Sonnet and GPT-4o have massive context windows, easily handling a 1-hour transcript (approx. 10,000–20,000 words). Be cautious with older models (like GPT-3.5) as they might truncate the text due to token limits.

- **Q: The output isn't exactly the format I want. How do I tune it?**
  - A: If your team has a unique Jira template or specific Status fields, simply paste your template into the `[Constraints]` section and add a line like: "You MUST output the result strictly matching this internal template." This will yield highly optimized results tailored to your team.

- **Q: Which Speech-to-Text (STT) tool do you recommend?**
  - A: For English meetings, tools like Otter.ai, Fireflies.ai, or the built-in transcription features in Zoom and Microsoft Teams provide excellent speaker diarization and accuracy. Just grab the raw output from these tools and feed it into the prompt.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Persona Optimization:** By assigning the role of a "Lead Scrum Master," the AI moves beyond acting as a simple stenographer. It begins to understand the core of development work and structures the output accordingly.
2. **Hallucination Suppression:** Constraints like "Do not invent details" and "List ambiguous items under TBD" act as safety rails, completely mitigating the risk of the AI spontaneously creating unauthorized features.
3. **Forced Acceptance Criteria (AC):** By drafting the 'QA baseline'—which usually costs the most communication time—the AI drastically reduces the time needed to sync expectations between PMs and Developers.

---

## 📊 Proof: Before & After

### ❌ Before (Input - Raw Meeting Transcript)

```text
PM: "Hmm.. Users keep dropping off at the checkout page. I think it's because the items in their cart disappear after 3 days. Can we extend this to a week? David, when can this be done?"
David (Dev): "I'll need to update the DB, so probably by this Friday. Oh, should we also send a notification message a day before it expires?"
PM: "Oh, that's a great idea. Sarah, could you draft the notification text by Wednesday?"
```

### ✅ After (Result - Using Pro Version)

```text
[Checkout/Cart] Extend Cart Retention Period and Send Expiration Notification

**Assignee:** David (Dev), Sarah (Copywriting) / **Due Date:** This Friday (Notification text by Wednesday)

**User Story:**
As a potential buyer, I want my cart items to be saved for 7 days and receive a notification before they expire, so that I don't lose my items and can complete my purchase.

**Acceptance Criteria:**
- [ ] The cart session retention period must be extended from 3 days to 7 days.
- [ ] An automated notification message must be sent to the user 24 hours before the cart items expire.
- [ ] (Copywriting) The draft text for the notification message must be delivered by Wednesday.

**TBD (To Be Determined):**
- Need to confirm whether the notification message should include a direct link to the cart/items.
```

---

## 🎯 Conclusion

The longer the meeting, the more overwhelming the transcript becomes, making it a nightmare to organize.
However, with this prompt, **the moment you hit 'End Meeting', your team's sprint backlog for next week is magically completed.**

Try copying and pasting yesterday's meeting transcript right now.
Leaving work on time starts with just one line of prompt! 🍷
