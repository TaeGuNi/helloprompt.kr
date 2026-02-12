---
title: "Physics Problem Translator: From Situation Judgment to Setting Up Equations"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Math/Science"
description: "Prompt that reads written physics problems, analyzes the situation, and tells you which formula to use."
tags: ["Physics", "Engineering", "ProblemSolving", "Prompt"]
---

# 📝 Physics Problem Translator: From Situation Judgment to Setting Up Equations

- **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"I memorized all the formulas, but I don't know whether to use F=ma or Conservation of Energy Law for this problem."_

90% of physics problems is 'reading comprehension'. The hardest part is finding clues hidden in the problem ("When there is no friction", "Starting from rest") and translating them into mathematical language. This prompt finds clues in the problem like Sherlock Holmes and hands you the perfect tool (formula).

---

## ⚡️ 3-Line Summary (TL;DR)

1. Extract physical variables (Given values, Values to find) from written problems
2. Explicitly point out hidden conditions (Implicit constraints)
3. Establish strategy for problem solving and match formulas

---

## 🚀 The Solution: "Physics Solution Architect"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a `[Physics Professor and Problem Solving Expert]`.
> **Request:** Create a prompt that reads written physics problems, analyzes the situation, and tells you which formula to use.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and use it.

> **Role:** You are a `[Physics Professor and Problem Solving Expert]`.
>
> **Context:** I'm trying to solve a physics problem, but I can't grasp the situation well and I'm confused about which principle to apply.
>
> **Task:**
>
> 1. **[Variable Extraction]**: Organize the values given in the problem (Known) and values to find (Unknown) with symbols (e.g., $v_0 = 0 m/s$).
> 2. **[Hidden Conditions]**: Find conditions that are not specified in the text but must be considered physically (e.g., "Free fall" -> $a = 9.8 m/s^2$).
> 3. **[Strategy Establishment]**: Explain what the most suitable **Physics Law** is to solve this problem and why you should use it.

- 4. **[Setting Up Equation]**: Set up a pure **Mathematical Model** before substituting numbers.
     > **Constraints:**
     >
     > - Focus on 'Design' rather than solving process (Calculation).
     > - Pay attention to Unit notation.
     >
     > **Problem Text:**
     > `[Copy and paste the physics problem here]`

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input)

"Dropped a ball from the roof of a 45m high building. Speed when hitting the ground?"

### ✅ After (Result)

**[Variable Extraction]**

- $h$ (Height) = 45 m
- $v_0$ (Initial Velocity) = 0 m/s (Since it just said 'dropped')
- $v$ (Final Velocity) = ? (Value to find)

**[Hidden Conditions]**

- Ignore air resistance as there is no mention.
- Acceleration $a$ = Gravitational Acceleration $g$ $\approx 9.8 m/s^2$ (Set downward direction +)

**[Strategy Establishment]**
Since there is no Time ($t$) info and it asks for relationship between height and speed, using **'Law of Conservation of Energy'** or **'Equations of Motion for Constant Acceleration (Equation without time)'** is fastest.

**[Setting Up Equation]**
$$ 2as = v^2 - v_0^2 $$
Here $v_0=0$, $s=h$, $a=g$, so
$$ v = \sqrt{2gh} $$

---

## 🎯 Conclusion

Physics is a language that translates the world into math. With this prompt, you will have a strange experience where the whole world looks like formulas.

Now leave work on time... Ah, due to inertia, keep going the way you were going home? 🍷
