---
layout: /src/layouts/Layout.astro
title: "📊 Escape PPT Planning Hell: Auto-Generate Slide Outlines & Scripts Prompt"
author: "Jay"
date: "2026-02-28"
updatedDate: "2026-02-28"
category: " "
description: "Stop pulling all-nighters for presentations. A highly practical prompt that churns out everything from PPT outlines to slide-by-slide speaker scripts in just 1 minute."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ppt-outline-scr"]
---
# 📝 Escape PPT Planning Hell: Auto-Generate Slide Outlines & Scripts Prompt
- **🎯 Recommended for:** Marketers, planners, junior employees, developers with upcoming presentations
- **⏱️ Time Spent:** 3 hours → Reduced to 1 minute
- **🤖 Recommended Models:** All conversational AI (Claude 3.5 Sonnet, ChatGPT, etc.)
- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐
_Are you staring at a blank PowerPoint screen for 30 minutes with a presentation due tomorrow?_
What's far more painful than PPT design is the planning phase: deciding 'what to say, in what order, and how to say it.' This prompt gathers your structureless fragments of ideas and instantly converts them into a perfect slide-by-slide structure and 1-minute scripts. Now, just focus on the design.
---
## ⚡️ 3-Line Summary (TL;DR)
1. Don't start from a blank canvas. Just toss in your core messages, and the AI will build the outline.
2. Get recommendations for visual materials (charts, images, etc.) needed for each slide.
3. Even the speaker scripts are generated at once, securing your time for presentation practice.
---
## 🚀 Solution: "Slide Skeleton Maker"
### 🥉 Basic Version
Use this when you just want to quickly catch the rough flow of the presentation.
> **Role:** You are a `[10-year planning and presentation expert]`.
> **Task:** Organize a 10-slide PPT outline and the core message for each slide regarding the `[launch of a new service]`.
### 🥇 Pro Version
Use this when you need detailed planning and a script that overwhelms the audience.
> **Role:** You are a `[Presentation Director]` at a top-tier Silicon Valley company. You excel at captivating storytelling and structuring.
>
> **Context:**
>
> - Topic: `[Proposal to introduce an AI-based internal work automation solution]`
> - Audience: `[C-level executives prioritizing cost reduction]`
> - Presentation Time: `[15 minutes (approx. 10~15 slides)]`
> - Core Objective: `[Budget approval for solution introduction]`
>
> **Task:**
>
> 1. Construct the entire slide outline, starting with an opening that grabs the audience's attention.
> 2. You must include the following 4 elements for each slide:
>    - Slide Headline
>    - Recommended visual materials for the screen (Visual Idea)
>    - Core text within the slide (Key Message)
>    - The actual script the speaker will say (conversational tone, about 1 minute per slide)
> 3. Indicate the `[Topic]`, `[Audience]`, `[Presentation Time]`, and `[Core Objective]` with brackets so the user can fill them in.
>
> **Constraints:**
>
> - Minimize technical jargon and write in a business language that is easy for the audience to understand.
> - Instead of obvious greetings like "Hello," the script must immediately start with a question that hits the audience's pain point.
> - Format the output as an easy-to-read list based on the slide numbers.
>
> **Warning:**
>
> - Instead of vague expressions (e.g., "It will be very helpful"), present specific expected effects. (Prevent hallucinations)
---
## 💡 Author's Insight
Blank Canvas Syndrome. This is the stage where professionals waste the most time when they open a PPT. I designed this prompt to 100% finish the planning in Word or Notepad before even opening a design tool.
Setting the `[Audience]` variable clearly is especially key. If the target is the working-level staff, a script focused on "how to implement" will be derived; if the target is the executives, a script focused on "cost reduction and risk mitigation" will be derived. 
From experience, I do not recommend reading the script the AI generated word-for-word. Leave about 80% of the skeleton and flow to the AI, and layer your own field experience or specific company metrics onto the script for the remaining 20%. You'll get off work 3 hours earlier, and the presentation quality will double.
---
## 🙋 Frequently Asked Questions (FAQ)
- **Q: Can I increase or decrease the number of slides?**
  - A: Yes. If you change the `[Presentation Time]` variable in the Context to 5 minutes (5 slides), 30 minutes (30 slides), etc., the AI will automatically adjust the pacing and match the script length.
- **Q: What if the conversational tone sounds too awkward?**
  - A: Give a follow-up prompt saying, "Revise the tone of the script to be a bit more firm and confident business tone," and it will become much more natural.
---
## 🧬 Prompt Anatomy (Why it works?)
1. **Target-Oriented Storytelling:** By specifying the `[Audience]` and `[Core Objective]` instead of simply saying "Make a PPT," I forced the AI to focus on 'persuasion' rather than just listing information.
2. **Separating Visual Ideas:** The AI pre-plans "What picture should I put here?", which is the most daunting part of creating a PPT, saving you the agony during the design phase.
3. **Conversational Script Directive:** By designing the task to separate the text to be displayed on the screen (summary) and the words the speaker will say (explanation), it completes a perfect presentation structure.
---
## 📊 Proof: Before & After
### ❌ Before (Input)
```text
I'm going to present to the executives about introducing a new AI solution. Write a 10-slide PPT content for me.
```
### ✅ After (Result)
```text
Slide 2: The Hidden Costs We Are Wasting (Pain Point)
- Visual Idea: A graph showing stagnant work efficiency contrasted with increasing labor costs over the past 3 years.
- Key Message: 4,800 hours wasted annually on manual reporting.
- Script: "Executives, please look at this graph. We are spending 400 hours per department every month just on simple data compilation. How much is that converted into annual salary? This number is the biggest bottleneck keeping our company stagnant and unable to grow."
... (The rest of the 10 slides perfectly structured)
```
---
## 🎯 Conclusion
If the planning is solid, the presentation will succeed even if the design is a bit clunky.
Don't waste time on flashy animations. Grab the skeleton with this prompt, and add your own insights. Now, get off work on time! 🍷
