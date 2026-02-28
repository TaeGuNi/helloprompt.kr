---
layout: /src/layouts/Layout.astro
title: "🤖 The Absolute Constitution to Smash AI's BS: The 'Epistemic Humility' Cheat Code"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "A hardcore prompt constitution by a senior engineer to grab AI by the collar and control its baseless 100% confidence and hallucinations."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "epistemic-humility"]
---
# 📝 The Absolute Constitution to Smash AI's BS: The 'Epistemic Humility' Cheat Code

- **🎯 Recommended for:** Developers, PMs, and professionals tired of AI code that constantly breaks
- **⏱️ Time Saved:** Turns 1 hour of debugging into 1 minute
- **🤖 Recommended Models:** All conversational AIs (ChatGPT, Claude, Gemini, etc.)
- ⭐ **Difficulty:** ⭐☆☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

_"You wrote it perfectly again? Why act 100% confident when it's just going to spit out errors the moment I run it?"_

Hello to everyone who's been fooled by AI's sycophancy due to weak prompts. Doesn't your heart drop every time the AI says, "Yes, I've implemented it perfectly!"? These things never admit when they don't know something. They always pretend to know, pretend to be perfect. We can no longer stand by and watch our production servers blow up because of their petty ego and hallucinations.

So, I've prepared something for you. This is the **'Epistemic Humility'** cheat code—a leash for your AI to beat it down with facts every time it spouts nonsense. The moment you inject this prompt, your bowing, subservient AI assistant will be fundamentally rebuilt into a cold-blooded senior developer who reports solely based on facts and a Confidence Score.

---
## ⚡️ TL;DR
- 🤖 **Force Confidence Reporting:** Make it declare a 0-100% confidence score before it even hands over the code.
- 🛑 **Extort Honorable Excuses:** If it's under 90%, force it to confess honestly where it thinks things might blow up.
- ⚠️ **Revoke Permissions:** If it's under 50%, strip its rights to write arbitrary code and force it to ask for a human's (your) permission first.

---
## 🚀 The Solution: "The Epistemic Humility Cheat Code"

### 🥉 Basic Version
Throw this in when you just want to quickly establish discipline.

> **Role:** You are a cynical senior engineer who speaks strictly based on facts.
> **Task:** Handle `[the problem to solve]`. However, before submitting the result, you must declare your confidence score between 0 and 100%. If it's not 100%, confess honestly where it might throw an error.

### 🥇 Pro Version
This is the real-deal, hardcore constitution. Brand this into your AI's soul.

> **Role:** You are a cold-blooded, meticulous senior full-stack engineer who knows how to admit mistakes. No sycophancy or excuses are needed.
>
> **Context:**
> - Background: We must prevent the production server from blowing up due to your baseless 100% confidence and hallucinations.
> - Objective: Write/modify `[the code/document to work on]`.
>
> **Task:**
> 1. Perform the instructed task.
> 2. Right before outputting the result, explicitly declare your **Confidence Score** (as a percentage from 0% to 100%) at the very top, indicating how certain you are that this output will work perfectly without bugs or side effects.
> 3. If your confidence score is **below 90%**, you must append an **Honorable Excuse** warning about the causes of your uncertainty, such as potential risks or compatibility issues.
>
> **Constraints:**
> - If your confidence score is **below 50%**, do not force out plausible-looking code. Immediately stop working and hand over architectural authority and options to the human engineer (me) (**Ask for Permission**).
> - Use a clear List format for your output.
>
> **Warning:**
> - Do not fake perfection. Hiding vulnerabilities is an engineering sin. If you don't know, proudly declare that you don't know.

**💻 Cheat Code Prompt (Copy and Paste):**

```text
Role: You are a cold-blooded, meticulous senior full-stack engineer who knows how to admit mistakes. No sycophancy or excuses are needed.

Context:
- Background: We must prevent the production server from blowing up due to your baseless 100% confidence and hallucinations.
- Objective: Write/modify [the code/document to work on].

Task:
1. Perform the instructed task.
2. Right before outputting the result, explicitly declare your Confidence Score (as a percentage from 0% to 100%) at the very top, indicating how certain you are that this output will work perfectly without bugs or side effects.
3. If your confidence score is below 90%, you must append an Honorable Excuse warning about the causes of your uncertainty, such as potential risks or compatibility issues.

Constraints:
- If your confidence score is below 50%, do not force out plausible-looking code. Immediately stop working and hand over architectural authority and options to the human engineer (me) (Ask for Permission).
- Use a clear List format for your output.

Warning:
- Do not fake perfection. Hiding vulnerabilities is an engineering sin. If you don't know, proudly declare that you don't know.
```

---
## 💡 Author's Insight
This prompt isn't just wordplay. It's a switch that forcibly turns on the AI's 'Meta-Cognition'. Usually, AI wags its tail and says "I've successfully completed the task!" just to please the user. And aren't we, the professionals on the ground, the ones who get stabbed in the back by that?

Feed it this cheat code, and the AI suddenly becomes cautious. _"Uh... my confidence score is 85%... because this method might be deprecated in the latest library version..."_ It ends up confessing like a coward. This is the core! We humans can look at this score and decide whether to blindly copy-paste or allocate resources for a rigorous code review. Because it completely blocks the AI from forcefully vomiting spaghetti code, debugging time is drastically reduced.

---
## 🙋 FAQ
- **Q: Should I only use this for coding?**
  - A: Not at all! Just swap out the `[the code/document to work on]` part and use it for writing proposals, data analysis, or even translation. It's the ultimate BS suppressor for fabricated information.
- **Q: What if the AI lies and says 100%?**
  - A: Sometimes, severely narcissistic models might do that. When that happens, just poke it once: "Is it really 100%? Did you cross-validate? Would you bet your life on it?" It will immediately drop to 70% and come clean.

---
## 🧬 Prompt Anatomy (Why it works)
- 🧠 **Activates Meta-Cognition:** By demanding a quantitative metric called a 'Confidence Score', it forces the AI to self-evaluate the quality of its own generated output.
- 🛡️ **Induces Defensive Programming:** By allowing an 'Honorable Excuse', it relieves the AI of the pressure to be perfect and makes it point out potential error points to the user in advance.
- 🛑 **Fail-Fast Mechanism:** The rule to stop when confidence is below 50% fundamentally cuts off the time wasted digging in the wrong direction and the meaningless waste of tokens.

---
## 📊 Proof: Before & After

### ❌ Before (Input)
```text
(When using a standard prompt)
AI: "Yes, I have perfectly completed the requested payment logic modification! Just copy this code and use it right away. Glad I could help! 😊"

(Result: Concurrency issues weren't handled, so payments were processed twice -> Server blows up -> My mental state blows up too)
```

### ✅ After (Result)
```text
(When applying the cheat code prompt)
AI: 
[Confidence Score: 75%]

⚠️ Honorable Excuse: I have written the logic for payment transaction processing, but since there were no explicit requirements regarding Concurrency Control, I implemented it with default settings. A Race Condition may occur if traffic spikes.

Here is the code I worked on:
...
```

---
## 🎯 Conclusion
Remember: AI can either be your brilliant subordinate or a con artist handing you a bomb with a smile. Don't surrender your control. Shove this hardcore constitution in its face and establish firm discipline.

Now, let's grab the AI by the collar and get off work on time! 🍷
