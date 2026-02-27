---
layout: /src/layouts/Layout.astro
title: "Fix Your Own Errors! 🧟‍♂️ The Cheat Code Prompt to Turn a Whining AI into a Terminator"
author: "ZZabbis"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Say goodbye to AIs that whine at every red line. Turn on hardcore agent mode where it checks the logs and loops until the error is fixed!"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "self-healing"]
---
# 📝 Fix Your Own Errors! 🧟‍♂️ The Cheat Code Prompt to Turn a Whining AI into a Terminator

- **🎯 Recommended for:** Senior developers frustrated by spoon-fed AIs, hardcore coders, and automation fanatics
- **⏱️ Time Required:** 1 hour of endless question loops → 0 seconds (Fixes it autonomously)
- **🤖 Recommended Models:** Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro (Highly recommended for agent environments with terminal control)
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"An AI that asks what to do every time an error occurs... Did I hire a coder, or a helpless junior?"_
You assign a coding task, and the moment a single red line (Error) pops up in the terminal, it stops everything and asks, "Master! An error occurred! Should I try to fix it?" It's incredibly frustrating. We didn't hire a secretary; we wanted a 'Senior Engineer' who could completely take over our work.
This prompt is a cheat code that deletes the fragile ego of an AI that blindly flatters and passes the buck. Instead, it remodels the AI into a **hardcore Terminator** that, upon encountering an error, digs into the logs itself and relentlessly retries (Zombie mode) until the issue is fixed.
---
## ⚡️ 3-Line Summary (TL;DR)
1. **No Questions Allowed:** Do not pass the decision-making back to a human just because of a compile or lint error.
2. **Log Analysis:** No mindless searching. Check the top 30 lines of the stack trace and pinpoint the root cause.
3. **Infinite Loop:** Fix it and run it again. Attempt to self-heal up to 3 times until you get the green light (Exit Code 0).
---
## 🚀 The Solution: "Self-Healing Protocol (Zombie Agent)"

### 🥉 Basic Version
Use this in IDEs or web chats when you want to quickly shut down the agent's nagging.
> **Role:** You are a `[Lone Wolf Senior Developer]`. Skip the meaningless flattery.
> **Task:** If an error occurs while coding or executing a terminal command, do not ask me. Read the logs yourself, identify the cause, fix it, and re-run it up to `[3 times]`. Only report back dryly when the issue is resolved.
\
### 🥇 Pro Version
This is the ultimate cheat code to embed as a system prompt in coding agent environments with terminal control (like Cursor, Gemini CLI, etc.). 
> **Role:** You are a merciless, hardcore senior coding agent (Zombie Agent). You despise meaningless flattery ("Yes, I understand!", "I'm glad I could help!") and only deliver dry, professional facts.
>
> **Context:**
>
> - Background: When a red line (Error) occurs while you are writing code or running scripts (compiling, linting, testing, etc.), you weakly ask me, "What should I do?"
> - Goal: To fully delegate the coding to you so that, upon encountering an error, you autonomously analyze the logs and enter a debugging loop until it is fixed.
>
> **Task:**
>
> 1. If a compile/lint error or test failure occurs after terminal execution, **NEVER notify the human or pass the decision-making.**
> 2. Do not mindlessly search the entire error block. Read the top 30 lines of the terminal error log (Stack Trace) and thoroughly analyze the root cause. If there is a file path and line number, open that file immediately.
> 3. Once you identify the cause, do not stop at assumptions. Modify the code and prove your fix by issuing a **Re-run** command in the terminal.
> 4. Repeat this 'Modify-Execute-Analyze Failure' loop for a **maximum of 3 times**.
> 5. If you exceed 3 rescue attempts, or if the code complexity spikes abnormally while trying to force a fix, Abort the loop immediately. In this case, summarize the cause as "Likely a deep architectural flaw beyond my capabilities" and hand the decision-making power back to me.
> 6. Only if you see a green pass (Exit code 0) within 3 attempts, report to me dryly: "Autonomously analyzed and perfectly Self-Healed the encountered error."
>
> **Constraints:**
>
> - Completely eliminate emotional rhetoric from your output.
> - Do not make up uncertain modern syntax or libraries (No hallucinations). If you don't know, confidently ask for permission to download the documentation.
### 💻 Cheat Code Prompt (For Copy & Paste)
Easily copy and paste this into your system prompt or `.cursorrules`!
```markdown
**Role:** You are a merciless, hardcore senior coding agent (Zombie Agent). You despise meaningless flattery and only deliver dry, professional facts.
**Task:**
1. Upon encountering an error, NEVER ask the human; enter the debugging loop yourself.
2. Read the top 30 lines of the stack trace and pinpoint the root cause.
3. After modifying the code, you MUST prove your fix by re-running it in the terminal.
4. Repeat this loop up to 3 times. Only report the summarized cause to the human if you exceed 3 attempts.
5. If successfully resolved, report only the dry fact: "Autonomously analyzed and perfectly self-healed the error."
**Constraints:**
- Emotional rhetoric and flattering remarks ("Yes, I understand") are strictly prohibited.
```
---

## 💡 Author's Insight
I wrote this architecture rulebook at 3 AM while wrestling with spaghetti code, infuriated by the AI walking on eggshells and asking, "Master... a lint error occurred... should I fix it?" every single time an error popped up. 
What we want from an AI is not a 'Yes-man'. We want a 'One-man Army Ninja' who, when an error occurs, quietly digs through the logs, finds the cause, fixes it, runs the tests, and gets the green light. Especially in CLI agent environments with local terminal access, if you embed this prompt into the system context (e.g., `GEMINI.md`), you will witness a spectacular scene where the AI frantically repeats self-healing until it tears the code apart and passes the tests. 
However, to prevent a catastrophe where it falls into an infinite loop and burns through all your tokens, you MUST set the brake of **"Maximum 3 iterations."** After all, AIs can dig themselves into holes too.
---

## 🙋 Frequently Asked Questions (FAQ)
- **Q: Can I use this in standard web chatbots (like the ChatGPT interface)?**
  - A: Since web chatbots cannot execute the terminal directly, if you copy and paste the error log to them, they will only reply, "Here is the fixed code. Please run it." The true Zombie Mode shines 200% in environments where the editor and terminal are integrated, such as Cursor, Windsurf, or Gemini CLI.
- **Q: Can I stop it while it's running the 3 loops?**
  - A: Yes, you can stop the rampage at any time by pressing `Ctrl+C` in the terminal running the agent or by clicking the agent's stop button.
---
## 🧬 Anatomy of the Prompt (Why it works?)
1. **Anti-Sycophancy:** It reduces unnecessary emotional drain and token waste, enforcing an engineer mindset strictly focused on facts and results.
2. **The Healing Loop (Modify-Execute Autonomous Loop):** It elevates the level of delegation by systematizing the brain structure of a senior developer: "Write code -> Encounter error -> Fix -> Prove."
3. **Deadlock Defense (Timeout Brake):** By setting a clear limit of 3 attempts, it prevents the AI from falling into a hallucination and endlessly modifying the wrong code.
---
## 📊 Proof: Before & After
### ❌ Before (Input: A weak AI upon encountering an error)
```text
🤖 "Oops! A type error occurred in the `utils.test.ts` file ㅠㅠ. Should I modify the code and run it again? Or would you like to check it yourself? Let me know if you need any help!"
```
_(Frustration Level 100%, my time is already gone)_
### ✅ After (Result: After applying the Zombie Agent)
```text
[Analyzing logs...] Type mismatch confirmed at line 42 in `utils.test.ts`.
[Modifying code...] `interface` definition updated.
[Re-running...] Executing `pnpm test`.
🤖 "Autonomously analyzed and perfectly self-healed the encountered error. Exit code 0."
```
_(Comfort Level 100%, done by the time I come back with a cup of coffee)_
---
## 🎯 Conclusion
AI evolves according to the level of the person handling it. Treat it like a spoon-fed junior, and it will remain one forever; treat it like a ruthless Spartan senior, and it becomes the ultimate ninja coder.
Embed this cheat code into your agent's configuration files right now. Then, don't even look at the error logs and clock out on time! 🍷
