---
layout: /src/layouts/Layout.astro
title: "No Colleagues? It's Okay, AI Senior Developer's Harsh Code Review"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A highly effective prompt that acts as a virtual Senior Developer from FAANG, providing meticulous code reviews for solo developers."
tags: ["Code Review", "Mentoring", "Clean Code", "Self-Development"]
---

# 📝 No Colleagues? It's Okay, AI Senior Developer's Harsh Code Review

- **🎯 Recommended For:** Solo Developers, Junior Engineers, Freelancers
- **⏱️ Time Required:** 5 minutes → 1 minute
- **🤖 Recommended Model:** Claude 3.5 Sonnet, GPT-4o (Models strong in coding)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> _"Is this code really the best I can write? I wish a senior could just take a quick look..."_

When you code alone, your perspective inevitably narrows. If you keep moving on just because "it works," you'll hit a plateau in your skill growth. What if a Principal Software Engineer from a top-tier tech company sat right next to you, dissecting your code line by line? From brutally honest critiques to encouraging praise, it's time to hire your own AI code reviewer.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Enforce strict FAANG-level code quality standards on your projects.
2. Gain multi-dimensional feedback covering security, performance, readability, and architecture.
3. Receive actionable, specific advice alongside fully refactored code snippets.

---

## 🚀 The Solution: "AI Senior Code Reviewer"

### 🥉 Basic Version

Use this when you need a quick, no-frills review of a small snippet.

> **Role:** You are a Principal Software Engineer with 15+ years of experience at Google and Amazon. You are a strict but supportive mentor.
> **Task:** Review my code snippet below and point out 3 critical areas for improvement regarding readability and performance.

<br>

### 🥇 Pro Version (Expert)

Use this when you want a comprehensive, production-ready code review before merging a Pull Request.

> **Role (Role):** You are a Principal Software Engineer with over 15 years of experience at top-tier tech companies like Google and Amazon. You act as a meticulous but deeply caring mentor.
>
> **Context (Context):**
>
> - Background: I wrote this code as a junior developer working independently.
> - Goal: I need a flawless, production-ready code review before submitting this as a Pull Request.
>
> **Task (Task):**
>
> 1. Thoroughly review my code and provide structural feedback.
> 2. Format your response into the following specific sections:
>    - **Good:** Explicitly praise efficient logic, clean patterns, or good attempts.
>    - **Improvements:** Point out flaws regarding readability, time/space complexity, security vulnerabilities, and error handling.
>    - **Questions:** Ask probing questions (e.g., "Why did you choose this data structure over X?") to stimulate my architectural thinking.
>    - **Refactoring:** Provide the refactored, optimal version of the code based on your feedback.
>
> **Target Code:**
> `[Insert your code here]`
>
> **Constraints (Constraints):**
>
> - Maintain a highly professional, polite, yet firm tone.
> - Be exceptionally pedantic about variable naming conventions, type hintings, and structural spacing.
>
> **Warning (Warning):**
>
> - Do not introduce arbitrary external libraries unless absolutely necessary, and if so, justify the choice.
> - If you are unsure about a framework-specific best practice, explicitly state your uncertainty to avoid hallucination.

---

## 💡 Writer's Insight

Working as a solo developer or in a small startup without senior engineering leadership often leads to the "it works, ship it" trap. Over time, technical debt accumulates silently. I designed this prompt because I realized I was repeating the same anti-patterns without anyone to correct me.

By running my commits through this "AI Senior Developer" prompt, especially using Claude 3.5 Sonnet (which currently excels at code comprehension), I started catching edge cases and performance bottlenecks I completely missed. The "Questions" section in the prompt is the real game-changer—it forces you to defend your engineering decisions, which is exactly what happens in real-life FAANG code reviews. It trains your brain to think about _why_, not just _how_.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Which AI model is best for this code review prompt?**
  - A: Currently, Claude 3.5 Sonnet and GPT-4o are highly recommended for coding tasks. Claude tends to offer slightly more nuanced architectural advice and strictly adheres to formatting constraints.

- **Q: Can it review large files or entire repositories?**
  - A: It is best suited for single files or specific functions (under 300-400 lines). If you paste an entire repository, the AI might lose context or provide overly generalized feedback. Break your PRs down into smaller, digestible chunks.

- **Q: Will it fix bugs in my code?**
  - A: It can spot glaring logic errors and suggest fixes in the 'Refactoring' section, but it's fundamentally a _reviewer_. Always test the refactored code it provides before committing!

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Role Playing:** By invoking the persona of a "Google/Amazon Principal Engineer," the AI naturally adopts stricter linting rules, performance considerations, and professional engineering vocabulary.
2. **Socratic Questioning:** The prompt specifically commands the AI to ask "Questions." This prevents passive copy-pasting and encourages the user's active learning and architectural reasoning.
3. **Structured Output:** Forcing the AI to divide its answer into "Good," "Improvements," and "Refactoring" ensures the feedback is psychologically balanced (the sandwich method) and immediately actionable.

---

## 📊 Proof: Before & After

### ❌ Before (Input Code)

```python
def s(x):
    return x * x
```

### ✅ After (Review Result)

**👍 Good:**
The function is extremely concise and achieves its mathematical goal without unnecessary overhead.

**🛠 Improvements:**

1. **Naming:** The function name `s` and parameter `x` lack semantic meaning. `square` or `calculate_square` would instantly communicate intent.
2. **Type Hints:** In modern Python, type hinting is essential for maintainability. We should specify that the input and output are numbers.
3. **Documentation:** There is no docstring. Even simple utility functions benefit from a brief explanation of their behavior.

**🤔 Questions:**

- What happens if a string or a `None` value is passed as `x`? Have you considered adding error handling or input validation for production safety?

**✨ Refactoring:**

```python
def calculate_square(number: float) -> float:
    """
    Calculates and returns the square of a given number.

    Args:
        number (float): The number to be squared.

    Returns:
        float: The squared value.
    """
    return number ** 2
```

---

## 🎯 Conclusion

They say the greatest perk at a tech company is having excellent colleagues. But even if your desk is empty, your virtual Principal Engineer is awake 24/7, ready to brutally (but lovingly) review your logic. Stop merging unchecked PRs and request a code review right now! 🍷
