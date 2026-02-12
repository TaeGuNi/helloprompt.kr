---
title: "'Recommend Commit Message' No More Worries! Conventional Commits Auto-Generation"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that writes clean commit messages tailored to global standards (Conventional Commits) if you just paste the changes (`git diff`)."
tags: ["Git", "Commit Message", "Collaboration", "Productivity"]
---

# 📝 "Recommend Commit Message" No More Worries! Conventional Commits Auto-Generation

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Writing commit messages is harder than writing code..."_

`fix: bug`, `update code`... Are you committing like this?
Good commit messages are the core of history management, but writing them every time gives me a headache.
Just throw in the `git diff` content, and it will pull it out in the **Conventional Commits** style, the standard of the open-source camp.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Analyze changes and automatically select appropriate type (feat, fix, refactor, etc.)
2. Write concise and clear subject and detailed body
3. Formatting tailored to team conventions

---

## 🚀 The Solution: "Git Commit Message Generator"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are an Open Source Maintainer obsessed with Git history management.
> **Request:** Write a clean commit message tailored to global standards (Conventional Commits) if I just paste the changes (`git diff`).

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are an Open Source Maintainer obsessed with Git history management.
>
> **Context:** I modified the code, and I need a clean commit message that colleagues can easily understand.
>
> **Task:**
> Analyze the `[Changes]` below and recommend 3 commit messages that fit the **Conventional Commits** rules.
>
> 1. **Format:** `<type>(<scope>): <subject>`
> 2. **Body:** Summarize the reason for change (Why) and the content of change (What) with bullet points.
> 3. **Footer:** (Optional) If there is an issue number, add it in `Closes #123` format.
>
> **Changes (git diff or summary):**

> [Write `git diff` result or changes simply here]

> **Constraints:**
>
> - Type kinds: Select one of `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`.
> - Subject should not exceed 50 characters and start with an imperative (verb root). (English is default)

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Changes)

"Changed login button color to red, fixed bug where login didn't work. Oh, and added installation guide to readme."

### ✅ After (Result)

**Option 1 (Focus on Bug Fix)**

```text
fix(auth): resolve login failure issue and update button style

- Fix logic error preventing user login
- Change login button color to red for better visibility
- Add installation guide to README.md
```

**Option 2 (Focus on UI Improvement)**

```text
style(ui): update login button color and fix login bug

- Change login button color to red
- Fix login functionality bug
- docs: update installation guide in README
```

---

## 🎯 Conclusion

Commit messages are letters to your future self and colleagues.
Don't write them roughly. Get help from AI and hear the compliment "This person's commit log is so clean"! 🍷
