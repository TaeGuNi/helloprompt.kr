---
layout: /src/layouts/Layout.astro
title: "When AI Acts Stupid: Use 'Chain of Thought (CoT)'"
author: "Zzabbis"
date: "2026-02-03"
updatedDate: "2026-02-04"
category: "Prompt Engineering"
description: "Does AI answer simple questions well but fail at complex logic? Learn the CoT technique used by top 1% prompt engineers."
tags: ["CoT", "Logical Thinking", "Problem Solving"]
---

# 🧠 When AI Acts Stupid

> **🎯 Recommended For:** Everyone
> **⏱️ Time Required:** 5 minutes
> **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"It does the simple stuff well, but give it more than 3 conditions and it spouts nonsense."_

AI (LLMs) basically relies on **"intuitive probability."** So when it faces a complex logic problem, it doesn't **"think"** like a human; it just **"guesses"** the most plausible-sounding answer. (We call this 'hallucination'.)

What you need here is a technique to forcibly grant it **"time to think."** That is **Chain of Thought (CoT)**.

---

## ⚡️ 3-Line Summary (TL;DR)

1. AI tends to rely on intuition for complex problems, leading to wrong answers.
2. The "Chain of Thought (CoT)" technique gives the AI time to think, inducing logical reasoning.
3. You can dramatically increase accuracy by following 3 steps: Think -> Verify -> Conclusion.

---

## 🚀 The Solution: "Logic Triple Combo"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a **Senior Project Manager (PM)** who spots logical errors.
> **Request:** My AI answers simple questions well but fails at complex logic. Explain the real way to use the CoT technique used by top 1% prompt engineers.

<br>

### 🥇 Pro Version

Use this when you need detailed quality.

Simply saying "think step-by-step" is not enough.
To see a real effect, order the 3 steps: **Think -> Review -> Answer**.

> **Role:** You are a **Senior Project Manager (PM)** who spots logical errors.
>
> **Context:** The project schedule is a mess. Look at the conditions below and find a solution.
>
> **Request:**
>
> 1. **[Think]** Don't answer immediately. List each team's schedule in chronological order. (**Think step-by-step**)
> 2. **[Review]** Check your own logic for contradictions.
> 3. **[Conclusion]** Summarize the final project end date and the cause of delay in one sentence.
>
> **[Conditions]**
>
> - The Design Team (takes 3 days) must finish before the Development Team (takes 5 days) can start.
> - However, the Development Team Lead is on vacation for 2 days starting today.
> - The QA Team (takes 2 days) starts after development ends, but they don't work on weekends.
> - Today is Monday.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (General Question)

AI: (Simple addition: 3+5+2 = 10 days) "The project will take 10 days and finish next Wednesday."
-> **Wrong.** (It failed to calculate vacation and weekend variables and just added the numbers intuitively.)

<br>

### ✅ After (Applying CoT)

The AI thinks while drawing a calendar like a human.

```text
[1. Step-by-step Thinking]
- Today (Mon): Design Team starts (Day 1)
- Wednesday: Design Team finishes (Takes 3 days)
- Thursday: Development Team can start... Dev Lead vacation (Today~Tue) has no impact.
- Thursday~Next Wednesday: Development Team takes 5 days (Thu, Fri, Mon, Tue, Wed / Excluding weekend)
- Next Thursday: QA Team starts (Takes 2 days)
- Next Friday: QA Team finishes

[2. Review]
- Dev Lead is on vacation until Tuesday, but dev starts Thursday, so no impact.
- Weekend (Sat, Sun) work excluded, so calculation is correct.

[3. Conclusion]
The final end date is 'Next Friday', and including the weekend, the total duration is 12 days (10 business days).
```

---

## 🎯 Conclusion

Is your complex Excel formula twisted, or does the AI look stupid when organizing a tangled schedule?
It's not the AI's intelligence at fault. **It's your fault for not giving it time to think.**

Add this one phrase to the end of your prompt right now.
**"Think step-by-step, and verify your logic."**
