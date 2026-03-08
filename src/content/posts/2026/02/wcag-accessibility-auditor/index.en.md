---
layout: /src/layouts/Layout.astro
title: " \"WCAG 2.2 웹 접근성 감사(Audit) 봇\""
author: "Jay"
date: "2026-02-09"
updatedDate: "2026-02-09"
category: "프론트엔드"
description: "Is your code accessible to everyone? This prompt audits your markup to ensure strict compliance with WCAG 2.2 accessibility standards."
tags: ["Accessibility", "HTML", "WCAG"]
---

## ♿️ Is Your Code Kind to Everyone? The Automated WCAG Accessibility Auditor

- **🎯 Recommended for:** Developers on public or enterprise projects, job seekers polishing their portfolios, and senior frontend engineers.
- **⏱️ Time Saved:** 2 hours of manual checklist verification → 1 minute of automated AI auditing.
- **🤖 Recommended AI:** Claude 3.5 Sonnet (exceptional at code analysis), GPT-4o.

- ⭐ **Difficulty:** ⭐☆☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> _"You can build the most dazzling animations, but if someone cannot even press the login button, your code has failed."_

Web accessibility (A11y) is no longer just a "nice-to-have" courtesy; it forms the fundamental baseline of a modern service and is increasingly becoming a strict legal requirement. However, memorizing and perfectly applying the massive, complex WCAG (Web Content Accessibility Guidelines) 2.2 during every coding session is nearly impossible. This prompt scans your markup and component code to identify critical accessibility flaws that trap screen readers and keyboard navigation, refactoring them into flawless, semantic HTML in just 60 seconds.

---

## ⚡️ TL;DR

1. **Semantic Markup Conversion:** Automatically transforms a messy soup of `<div>` tags into meaningful HTML5 semantic elements.
2. **Strict WCAG 2.2 Compliance:** Thoroughly verifies complex accessibility standards, including color contrast, focus management, and WAI-ARIA misuse.
3. **Actionable Testing Guide:** Provides specific, hands-on testing scenarios using only a screen reader (VoiceOver, NVDA) and a keyboard (Tab key).

---

## 🚀 The Solution: "The A11y Auditor"

### 🥉 Basic Version

Use this for a quick check when you suspect an accessibility issue within a specific button or form element.

> **Role:** You are a Web Accessibility (A11y) Expert.
>
> **Task:** Review the following HTML code for potential accessibility issues during screen reader or keyboard navigation, and refactor it semantically.
>
> **Code:**
>
> [Paste your code here]

### 🥇 Pro Version

Use this to inspect highly complex UI components like modals, dropdowns, and tab interactions.

> **Role:** You are a strict WCAG 2.2 Certification Auditor and a Senior Frontend Engineer with 10 years of experience.
>
> **Context:**
>
> - Target: I have just developed the `[Component Name, e.g., Sign-up Form Modal]` component.
> - Goal: Keyboard-only users and visually impaired users (relying on screen readers) must be able to interact with this UI without encountering any barriers.
>
> **Task:**
>
> 1. **WCAG 2.2 Audit:** Thoroughly inspect the provided code for any violations of WCAG 2.2 Level AA standards (e.g., color contrast, focus management, form labels, alternative text).
> 2. **Semantic Refactoring:** Eliminate the excessive use of meaningless `<div>` or `<span>` tags. Rewrite the code utilizing appropriate HTML5 semantic tags.
> 3. **WAI-ARIA Optimization:** Adhere strictly to the "First Rule of ARIA" (No ARIA is better than bad ARIA). Apply `aria-*` attributes and `role` only when absolutely necessary and native HTML cannot solve the problem.
> 4. **Focus Trap:** If the component is a modal or popup, design a logical focus flow to ensure keyboard focus remains trapped inside the component while it is active.
> 5. **Verification Guide:** Provide exactly 3 lines of specific, actionable scenarios detailing how I can manually test this code using a keyboard (Tab/Shift+Tab, Space/Enter) and a screen reader.
>
> **Code:**
>
> [Paste your component code here]
>
> **Constraints:**
>
> - You must identify and implement screen-reader-only (`sr-only`) utility classes where elements need to be visually hidden but read aloud by screen readers.

---

## 💡 Writer's Insight

Improving web accessibility often degenerates into randomly slapping WAI-ARIA attributes everywhere. However, incorrectly assigning `aria-label` or `role` creates catastrophic confusion for screen reader users.

The core strength of this prompt lies in forcing the AI to strictly abide by the **"First Rule of ARIA"**—which states that you should use native HTML elements whenever possible. When you run a complex custom Select Box or Modal through this prompt in a real-world project, it flawlessly catches unexpected keyboard focus losses and missing form labels. Especially when paired with Claude 3.5 Sonnet, it feels exactly like having an uncompromising accessibility expert sitting right next to you, conducting an exhaustive code review.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can I audit accessibility using just a UI design image?**
  - A: Yes! You can attach a screenshot of your component to GPT-4o or Claude 3.5 Sonnet and add, "Check if the color contrast meets WCAG AA standards." It will uncover hidden design flaws before you even write a single line of code.

- **Q: I use Tailwind CSS. Will it update the class names accordingly?**
  - A: Absolutely. Just specify in the Context section: "Please use Tailwind CSS and apply `sr-only` utility classes where appropriate." The AI will output code perfectly tailored to your tech stack.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Clear Evaluation Standards:** Instead of a vague "make this accessible," injecting the international standard "WCAG 2.2 Level AA" into the AI's persona completely neutralizes hallucinations and guarantees accurate results.
2. **Enforcing the First Rule of ARIA:** It prevents the AI from recklessly overusing ARIA attributes, guiding it toward fundamental, semantic markup leveraging native HTML specs.
3. **Actionable Testing Guide:** Rather than simply handing over the correct code, it demands practical test scenarios. This allows developers to manually verify the UI with their keyboards, maximizing real-world utility and learning.

---

## 📊 Proof: Before & After

### ❌ Before (Input: The Worst Button, Built with `div`)

```html
<div class="submit-btn" onclick="sendData()">
  <img src="send-icon.png" />
  <span>Send</span>
</div>
```

### ✅ After (Result: Flawless Keyboard & Screen Reader Support)

```html


<button type="button" class="submit-btn" onClick="sendData()">
  <img src="send-icon.png" alt="" aria-hidden="true" />
  <span>Send</span>
</button>
```

---

## 🎯 Conclusion

Accessibility (A11y) might seem like a "convenient extra feature" to some, but to others, it is an insurmountable wall dictating whether they can use a service at all. A great developer doesn't just write code that works; they write code that leaves no user behind.

Now, go write some kind code, and clock out on time! 🍷
