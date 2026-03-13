---
layout: /src/layouts/Layout.astro
title: " \"회의록을 Jira 티켓으로 자동 변환하기\""
author: "Jay"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "General"
description: " \"Discover a magical prompt that converts a 1-hour meeting transcript into flawless Jira tickets in just 10 seconds.\""
tags: ["PM", "Jira", "회의록", "Productivity"]
---

## 📝 The AI Prompt That Auto-Converts Meeting Notes into Jira Tickets in 10 Seconds

- **🎯 Target Audience:** PMs, POs, Scrum Masters, Planners, Tech Leads
- **⏱️ Time Saved:** 30 minutes → 10 seconds
- **🤖 Recommended AI:** Claude 3.5 Sonnet (Superior for long contexts), GPT-4o

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Are you missing out on today's actual work because you're still organizing yesterday's meeting notes?"_

Countless ideas and action items fly around during meetings. Yet, the moment the call ends, clarity vanishes—leaving everyone wondering who is doing what, and by when. If you're still burning precious hours manually extracting action items from raw audio transcripts and porting them into Jira or Asana, this prompt will be a game-changer for your workflow.

---

## ⚡️ TL;DR (3-Line Summary)

1. **Grab your raw transcript:** Export the Speech-to-Text (STT) log from Zoom, Microsoft Teams, or Otter.ai.
2. **Run the prompt:** Feed the transcript into the AI using our specialized framework to instantly extract **Action Items** perfectly structured as **Jira Tickets**, skipping the useless fluff.
3. **Copy, paste, and execute:** Drop the generated tickets directly into Jira, Asana, or Notion, and let your team start sprinting immediately.

---

## 🚀 The Solution: "The PM's Perfect Assistant: Auto Ticket Generator"

### 🥉 Basic Version

Use this lightweight version when you need a rapid, no-nonsense list of action items detailing exactly who is responsible for what.

> **Role:** You are a `[meticulous Project Manager with 10 years of experience]`.
> 
> **Task:** From the provided meeting transcript, extract only the actionable items, clearly listing the 'Assignee', 'Due Date', and 'Task' in a clean list format.
> 
> **Transcript:** `[Paste your raw meeting transcript here]`

### 🥇 Pro Version

Take it to the next level. This advanced prompt engineers fully fleshed-out Jira tickets—complete with strict **User Stories** and comprehensive **Acceptance Criteria (AC)**—so your engineering team can hit the ground running without needing a follow-up meeting.

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
> `[Paste the full raw transcript here]`

---

## 💡 Writer's Insight

The real magic of this prompt is how it elevates a generic "meeting summary" into **highly structured, actionable data** ready for Jira.

In a professional setting, casually asking an AI to "summarize this call" usually results in a dense paragraph of text that developers can't act on. By imposing strict **Constraints**—specifically requiring `User Stories` and `Acceptance Criteria`—you force the AI to parse through messy human dialogue and logically deduce the exact technical requirements.

**Pro Tip:** For this specific task, **Claude 3.5 Sonnet** is an absolute powerhouse due to its massive context window. You can dump a raw, unedited transcript of a 60-minute meeting directly into the prompt. It will flawlessly maintain context, filter out the irrelevant small talk, and surgically extract only the critical deliverables. No manual clean-up required!

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can the AI handle a transcript from a meeting that lasted over an hour?**
  - A: Absolutely. Top-tier models like Claude 3.5 Sonnet and GPT-4o feature massive context windows capable of effortlessly digesting a 60-minute transcript (roughly 10,000 to 20,000 words). However, avoid using older models like GPT-3.5, as they will likely truncate the input and lose critical context.
- **Q: What if the generated format doesn't match our company's internal Jira standards?**
  - A: Customizing the output is incredibly simple. Just paste your team's specific ticket template directly into the `[Constraints]` section of the prompt. Add a firm directive like, "You MUST strictly format the output to match this internal template," and the AI will adapt seamlessly.
- **Q: Are there any specific Speech-to-Text (STT) tools you recommend for capturing the transcript?**
  - A: For highly accurate speaker diarization, dedicated tools like Otter.ai and Fireflies.ai are phenomenal. Alternatively, the native transcription features built into Zoom, Google Meet, and Microsoft Teams work exceptionally well. Just export the raw text file and plug it directly into the prompt.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Persona Optimization:** Injecting the "Lead Scrum Master" persona shifts the AI's mindset from a passive note-taker to a proactive project leader. It instinctively understands software development lifecycles and structures the deliverables accordingly.
2. **Hallucination Suppression:** Directives like "NEVER invent details" and the mandatory `TBD` section serve as ironclad guardrails. This completely neutralizes the risk of the AI hallucinating non-existent features or making unauthorized assumptions.
3. **Forced Acceptance Criteria (AC):** Defining the QA baseline is often the most time-consuming part of ticket creation. By forcing the AI to draft these criteria upfront, you eliminate the endless back-and-forth alignment usually required between Product Managers and Engineers.

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

The longer and more complex a meeting gets, the more daunting it becomes to untangle the resulting transcript. But with this prompt in your arsenal, **the second you hit 'End Meeting', your team's entire sprint backlog is practically written for you.**

Grab a transcript from your messiest meeting yesterday and test it out right now. Getting your life back and leaving the office on time starts with just one powerful prompt! 🍷
