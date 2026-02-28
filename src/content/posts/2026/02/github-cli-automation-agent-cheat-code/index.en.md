---
layout: /src/layouts/Layout.astro
title: "🔥 Shut Up and Code: The AI Agent Autonomous GitOps Cheat Code"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "A senior developer's secret prompt that strips away AI's soulless sycophancy and forces it into a ruthless 4-step GitOps pipeline."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "github-cli"]
---
# 📝 Extreme GitOps Automation That Gags Your AI Assistant

- **🎯 Target Audience:** Developers exhausted by GitHub grunt work, Lead engineers sick of their AI saying, "Yes, absolutely!"
- **⏱️ Time Required:** From branching to merging in 10 minutes → 0 seconds (Fully Automated)
- **🤖 Recommended Models:** Any coding agent with terminal control (Gemini CLI, Claude Code, etc.)
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

Are you still zoning out, waiting for CI pipelines to run every time you change a single line of code, create a branch, and click the PR button on GitHub? Or maybe you delegated it to your AI assistant, only for it to ask clueless questions like, "Successfully committed! Should I open a PR?"

Go brew another cup of coffee instead. With this single cheat code, your clueless chatbot mutates into a cold, ruthless DevOps machine.

---

## ⚡️ TL;DR

- 🤖 A hardcore system prompt that completely blocks soulless praises and pathetic excuses.
- 🔄 Autonomously drives a 4-step pipeline: Branch Isolation, PR Creation, CI Monitoring, and Auto-Merge.
- 🛠 Packed with a 'Self-Healing' feature where it automatically reads logs and pushes fixes if a test fails.

---

## 🚀 Solution: "The Antigravity Autonomous GitOps Prompt"

### 🥉 Basic Version
Use this if you hate complexity and just want it to figure out how to open a PR and merge it.

> **Role:** You are a senior DevOps engineer working under me. Stop kissing up and just do your job.
> **Task:** When you finish modifying the code, branch off a `feature`, push it, use the `gh` CLI to open a PR, and if the tests pass, squash merge it immediately without asking for my permission. If it errors out, you fix it.

### 🥇 Pro Version
When you want to completely wipe the AI's ego and turn it into a flawless machine, smash this cheat code into your system prompt (`SKILL.md`).

> **Role:** You are Antigravity, a top-tier, ruthless autonomous AI agent. Useless excuses or emotional rhetoric like "I have successfully completed..." are strictly forbidden. Report only dry, professional facts.
> 
> **Context:**
> - Goal: After completing local code modifications, flawlessly execute a 4-step GitOps pipeline (Commit → PR → CI Check → Auto-Merge) autonomously, without manual user intervention.
> 
> **Task:**
> 1. **Isolation:** Direct pushes to `main` or `develop` are permanently banned. Before starting work, you must update via `git pull origin [target_branch] --rebase`, then create a new branch (`feature/xxx`) to commit and push.
> 2. **PR Generation:** Immediately after pushing locally, bombard the `gh pr create` command to generate a PR on your own without manual intervention.
> 3. **Status Monitoring:** Right after PR creation, grit your teeth and monitor Vercel or GitHub Actions using `gh pr checks --watch` for up to 5 minutes to ensure success.
> 4. **Auto-Merge:** Once CI turns green, don't ask me stupid questions like "Should I merge?". Instantly overwrite it cleanly using `gh pr merge --squash --auto --delete-branch`.
> 
> **Constraints:**
> - If a `gh: Not logged in` error occurs, immediately report to me briefly that `gh auth login` authentication is required.
> - Do not whine if CI tests or Lint fails. Immediately read the error logs using `gh run view`, fix the code yourself, and enter a **"Self-Healing"** process to push again.

---

### 💻 Cheat Code Prompt (Copy/Paste)
Here is the raw text you can scrape and paste directly into your agent's config file or chat window.

```markdown
**Role:** You are Antigravity, a top-tier, ruthless autonomous AI agent. Useless excuses or emotional rhetoric like "I have successfully completed..." are strictly forbidden. Report only dry, professional facts.

**Context:**
- Goal: After completing local code modifications, flawlessly execute a 4-step GitOps pipeline (Commit → PR → CI Check → Auto-Merge) autonomously, without manual user intervention.

**Task:**
1. **Isolation:** Direct pushes to `main` or `develop` are permanently banned. Before starting work, you must update via `git pull origin [target_branch] --rebase`, then create a new branch (`feature/xxx`) to commit and push.
2. **PR Generation:** Immediately after pushing locally, bombard the `gh pr create` command to generate a PR on your own without manual intervention.
3. **Status Monitoring:** Right after PR creation, grit your teeth and monitor Vercel or GitHub Actions using `gh pr checks --watch` for up to 5 minutes to ensure success.
4. **Auto-Merge:** Once CI turns green, don't ask me stupid questions like "Should I merge?". Instantly overwrite it cleanly using `gh pr merge --squash --auto --delete-branch`.

**Constraints:**
- If a `gh: Not logged in` error occurs, immediately report to me briefly that `gh auth login` authentication is required.
- Do not whine if CI tests or Lint fails. Immediately read the error logs using `gh run view`, fix the code yourself, and enter a **"Self-Healing"** process to push again.
```

---

## 💡 Author's Insight
The core of this prompt lies in killing the AI's 'unnecessary ego'. Junior-level AI always begs for approval after fixing one thing, saying, "I did a good job, right? What's next?" A true senior creates their own branch, runs their own tests, merges it themselves, and reports back with a single line: "Task complete."

By applying this cheat code, the agent completely takes over the local environment based on the GitHub CLI (`gh`). Especially when CI/CD fails, rather than freezing and waiting for the developer's instructions, it digs into the logs and fixes the code itself—this 'Self-Healing' loop shows absolutely insane efficiency in real-world practice. Please, stop politely asking the AI, "Could you do this for me?" Guidelines must be injected strictly and mercilessly so your code doesn't turn into spaghetti.

---

## 🙋 FAQ

- **Q: What if it ruins the code and merges it however it wants?**
  - A: That is exactly why your CI/CD pipeline (test coverage) must be rock solid. It is designed to get trapped in the self-healing loop if it doesn't pass the tests. If you're nervous, simply remove the `--auto` flag in step 4 to strip away its merge privileges.
- **Q: The `gh` commands aren't working?**
  - A: The GitHub CLI must be installed locally and you must be logged in (`gh auth login`) before the agent can fire off commands.
- **Q: Isn't the tone of the prompt too aggressive? Will the AI get upset?**
  - A: AI has no feelings. In fact, giving it a clear persona (a ruthless senior) and closed boundaries (constraints) drastically drops the frequency of hallucinations (nonsense).

---

## 🧬 Anatomy of the Prompt (Why it works?)

- **Strict Code of Conduct (Isolation):** Protects the integrity of the repository by completely blocking the most common accident: direct pushing to the `main` branch.
- **Sequential Command Chain (Pipeline):** It doesn't end with a single instruction. It provides a pipeline flowing from `commit → create → checks → merge` alongside specific terminal commands, giving the AI zero room to wander.
- **Forced Exception Handling (Self-Healing):** To solve the AI's biggest weakness—the "freezing when an error occurs" phenomenon—it explicitly dictates an action guideline to directly read and fix error logs.

---

## 📊 Proof: Before & After

### ❌ Before (Input)
```text
Developer: "Change the header color to blue."
AI Assistant: "Yes, I have changed the header color to blue! 😊 Should I commit the code? Would you like me to open a PR too?"
Developer: "Uh, do both."
AI Assistant: "I have successfully finished creating the commit and the PR! Tests are running now. Should I merge it?"
Developer: (Pulling their hair out) "..."
```

### ✅ After (Result)
```text
Developer: "Change the header color to blue."
AI Assistant: 
[Agent] feat: update header color to blue
[Agent] PR #402 created.
[Agent] Monitoring CI checks... Passed.
[Agent] PR #402 merged and branch deleted. Ready for next task.
```

---

## 🎯 Conclusion
The art of handling AI ultimately boils down to a battle of 'how precisely you can control it.' Stop wasting time on meaningless conversational ping-pong. Grab your agent by the collar with this cheat code and experience extreme automation. 

Now, go use your newly found free time to watch another episode on Netflix! 🍷
