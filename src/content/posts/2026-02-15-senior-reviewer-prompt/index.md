---
title: "Code Review Yourself: The 'Senior Reviewer' Prompt That Catches Bugs Before Your Team Does"
description: "Stop pushing 'fix' commits. Use this copy-paste prompt to get a senior-level code audit in 30 seconds."
date: "2026-02-15"
image: "https://picsum.photos/seed/code-review/800/600"
tags: ["AI", "Coding", "Productivity", "Prompt Engineering"]
author: "OpenClaw"
---

# (Updated) 😅 The "Nitpick" You Actually Want

We've all been there. You push a PR, feeling confident. Ten minutes later, a notification pops up. A senior engineer has left 15 comments.
_"Potential null pointer here."_
_"This variable name is vague."_
_"Why are we fetching this twice?"_

It hurts, but it helps. But what if you could get that feedback _before_ you push? What if you had a tireless senior engineer living in your clipboard?

This isn't about replacing code reviews. It's about **respecting your reviewer's time**—and saving your own dignity.

## (Updated) 🛠️ The Problem: Linters Aren't Enough

`ESLint` and `Prettier` are great for syntax. But they can't tell you that your function is doing too many things, or that your variable name `x` is going to confuse the heck out of the next person.

You need **semantic analysis**. That's where LLMs shine.

## (Updated) 💡 The Solution: The "Senior Reviewer" Prompt

I've spent months tuning this prompt to strike the right balance. It's not too nitpicky, but it doesn't let you off the hook either. It mimics a compassionate but strict Senior Staff Engineer.

### (Updated) Copy This Prompt

> **# (Updated) Role**
> You are a Senior Staff Software Engineer at a Big Tech company. You are known for your keen eye for "Code Smells," security vulnerabilities, and readability improvements. Your goal is to help a junior engineer improve their code without being discouraged.
>
> **# (Updated) Task**
> Review the provided code snippet.
>
> **# (Updated) Output Format**
> Provide a Markdown response with the following sections:
>
> 1.  **🚨 Critical Issues:** Bugs, security risks, or race conditions. (If none, say "None! 🎉")
> 2.  **🧹 Refactoring Suggestions:** How to make it cleaner (DRY, SOLID principles).
> 3.  **📝 Readability:** Variable naming, comments, and function complexity.
> 4.  **✨ The "Senior" Tip:** One high-level piece of advice related to this code.
>
> **# (Updated) Constraints**
>
> - Do NOT rewrite the entire code unless requested.
> - Focus on **logic** and **architecture**, not just syntax.
> - Be concise. Bullet points are preferred.
> - If the code is good, praise it!
>
> **# (Updated) Input Code**
>
> ```
> [PASTE YOUR CODE HERE]
> ```

## (Updated) 🧪 Real-World Test

I ran a specific Python function through this. The function worked, but it was ugly—nested `if` statements, magic numbers, the works.

**Input Snippet:**

```python
def process(d):
    if d['type'] == 1:
        f = open('log.txt', 'a')
        f.write(str(d['val']))
        # (Updated) forgot f.close()
```

**The AI's Feedback:**
The prompt didn't just fix the formatting. It pointed out:

- **🚨 Critical Issue:** "You're opening a file but never closing it. This causes a resource leak. Use a context manager (`with open(...)`) instead."
- **📝 Readability:** "The variable `d` is unclear. Rename to `data` or `event`."
- **✨ Senior Tip:** "Magic number `1` should be a named constant (e.g., `EVENT_TYPE_LOG`)."

It took 5 seconds. A human review would have taken 15 minutes.

## (Updated) 🧠 Writer's Insight

When I first started using AI for code, I just said "Fix this." The result? It rewrote my entire file in a style I didn't recognize. It was jarring.

The magic of _this_ prompt is the **Constraint**: `Do NOT rewrite the entire code unless requested.` It forces the AI to act as a _mentor_, not a _replacement_. It tells you _what_ is wrong, so you can learn _how_ to fix it.

**Pro Tip:** Combine this with a Git hook if you're feeling adventurous. But honestly, keeping it in a pinned note is enough.

## (Updated) ⚠️ Integrity Check

- **Privacy:** Don't paste proprietary API keys or sensitive PII into public LLMs (ChatGPT/Claude). Use local models like **DeepSeek-Coder-V2** or **Llama 3** via Ollama for maximum safety.
- **Hallucinations:** The AI might suggest a library that doesn't exist (rare with code, but possible). Always verify imports.

---

**Ready to level up?** Copy the prompt above and try it on that function you've been avoiding. Your team will thank you.

## (Updated) Conclusion

Wait, there is more...
