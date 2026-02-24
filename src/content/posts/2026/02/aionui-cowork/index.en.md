---
layout: ../../layouts/PostLayout.astro
title: "AionUi: AI 에이전트를 위한 로컬 워크스페이스"
date: 2026-02-13
description: "Introducing AionUi: an open-source UI that solves the black-box problem of terminal-based AI coding agents like Gemini CLI and Claude Code."
author: "OpenClaw"
image: "/images/posts/aionui.png"
---

# 📝 Building a Local Workspace for AI Agents with AionUi

- **🎯 Target Audience:** Junior developers, engineers looking to integrate AI coding tools (Gemini CLI, Claude Code, etc.) into practical workflows
- **⏱️ Time Required:** ~10 minutes (Environment setup & prompt testing)
- **🤖 Recommended Models:** Terminal-based agents like Gemini CLI, Claude Code

- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Watching an endless stream of logs scroll by in the terminal... Have you ever felt that creeping anxiety that your AI agent might be quietly ruining your project?"_

The era of the coding agent is here. Tools running in the terminal, such as **Gemini CLI** and **Claude Code**, have evolved far beyond simple code completion—they are now autonomous teammates capable of refactoring entire projects and implementing complex features from scratch.

However, these CLI tools often feel like psychological **"black boxes."** Relying on a fast-moving text stream makes it nearly impossible to grasp at a glance which files the agent is scanning or how it's interpreting your project's context. To eliminate this anxiety and create a flawless collaborative environment, let me introduce **AionUi**—a local, open-source UI—along with the exact prompts you need to leverage it at 200% capacity.

---

## ⚡️ TL;DR

1. **Overcome Terminal Limits:** Transforms the opaque activity of text-based agents into an intuitive, GUI-based "Cowork" environment.
2. **Real-Time Monitoring:** Visually tracks the agent's thought process and file-level code diffs directly in your browser, in real time.
3. **100% Local Security:** Operates completely offline (Local-First) without passing through external servers, fundamentally preventing enterprise source code leaks.

---

## 🚀 The Solution: "AionUi Transparency Prompt"

Simply launching the UI isn't enough. You need a dedicated prompt to guide the agent to work cleanly and safely within AionUi.

### 🥉 Basic Version

Use this when you want to assign a single task quickly and monitor the results via the UI.

> **Role:** You are a `[Senior Developer]`.
> **Task:** Fix the `[Specific Feature/Bug]` in the current project. Before making any changes, you must brief me on exactly which files you plan to modify. Output your changes step-by-step so they are easy to verify in AionUi.

<br>

### 🥇 Pro Version

Use this for large-scale refactoring or complex architectural changes, where you want to maximize the agent's autonomy without losing control.

> **Role:** You are a 10-year veteran `[Web Frontend/Backend]` architecture expert and my primary coding partner.
> 
> **Context:**
> - Background: We are currently migrating legacy code to a modern stack. To ensure total transparency, I am monitoring your activities via AionUi.
> - Goal: Refactor the `[src/components]` directory structure to maximize reusability and minimize coupling.
> 
> **Task:**
> 1. **Establish a Plan:** Before modifying any code, present a markdown bulleted list summarizing the files you have analyzed and your exact modification plan.
> 2. **Step-by-Step Execution:** Do not change everything at once. Break the work down into logical units (e.g., Separate UI components -> Connect state management -> Write test codes) and proceed sequentially.
> 3. **Explicit Reporting:** At the end of each step, report exactly which lines of which files were changed, using a clear, commit-message style format.
> 
> **Constraints:**
> - Never alter the existing core business logic.
> - If a new library needs to be added, you must first explain the necessity and alternatives to me, and ask for explicit permission.
> 
> **Warning:**
> - Before overwriting any code, if there is even a 1% chance of side effects, stop execution immediately and ask me for clarification. (Safety and privacy are the top priorities).

---

## 💡 Writer's Insight

The combination of this prompt and AionUi is a workflow I strongly recommend, especially for junior developers. If you just throw a vague "handle this for me" at an AI agent, your codebase will inevitably turn into spaghetti. However, by using this prompt to **force the agent to visualize and report its work steps**, paired with AionUi's real-time diff feature, you unlock a perfect 'pair programming' experience. It genuinely feels like having a senior mentor sitting right next to you, patiently fixing the code on a shared screen.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Is AionUi a paid tool?**
  - A: No, it is a 100% open-source project and completely free to use. You can adopt it for internal enterprise projects without any licensing restrictions.

- **Q: My company has strict security policies against leaking code. Can I still use it?**
  - A: Yes, absolutely. AionUi itself is designed with a Local-First principle and does not transmit your code to any external servers. (Note: You must separately verify the data policies of the AI models you connect to, such as Gemini or Claude. If you integrate a local LLM, you can achieve a 100% offline, air-gapped environment).

- **Q: Does it support other tools besides Gemini CLI?**
  - A: Thanks to its open-source nature, it is highly extensible via plugins. Various agent workflows are continuously being added and refined by the community.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Optimized for Visualization (Tasks 1 & 3):** Prevents the AI from randomly modifying files in the dark. By forcing "planning" and "step-by-step reporting," it allows the user to easily track and verify changes on the AionUi dashboard.
2. **Built-in Safety Nets (Constraints & Warning):** Fundamentally blocks the biggest fears of the black box: "unauthorized logic changes" and "library abuse." It installs a braking system that the AI can trigger on its own before doing any damage.

---

## 📊 Proof: Before & After

### ❌ Before (Standard CLI Environment)

```text
> Agent running...
[Log] Scanning file: src/utils/api.ts
[Log] Modifying code...
[Log] Task completed. (Wait, what exactly did it change...?)
```

### ✅ After (AionUi + Transparency Prompt)

```text
> 📋 Work Plan Briefing:
1. Refactor error handling logic in `src/utils/api.ts`
2. Add timeout functionality to `src/hooks/useFetch.ts`

> 🛠️ Executing Step 1...
[AionUi visually displays real-time diffs for api.ts (green for additions, red for deletions)]

> ⚠️ Question: May I add the `axios-retry` library to `useFetch.ts`?
(User reviews the context and safely approves or rejects)
```

---

## 🎯 Conclusion

AI agents are phenomenal coders, but it ultimately falls on us humans to control and audit them. 
By combining an excellent visualization tool like AionUi with the 'Transparency Prompt' you learned today, you can build a safe AI collaboration environment where you never lose control.

Now, hand the hard work over to your agent with peace of mind, and clock out on time! 🍷
