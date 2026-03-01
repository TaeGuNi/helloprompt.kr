---
layout: /src/layouts/Layout.astro
title: "E2E Tests Failing and Stopping? Fix in 1 Minute with Playwright Auto-healing Prompt 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: "Workflow Automation"
description: "Discover a practical AI prompt that automatically recovers Playwright tests broken by UI selector changes."
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 E2E Tests Failing and Stopping? Fix in 1 Minute with Playwright Auto-healing Prompt 🛠️

- **🎯 Recommended for:** QA Engineers, Frontend Developers, Test Automation Specialists
- **⏱️ Time Spent:** Reduced from 2 hours → 1 minute
- **🤖 Recommended Model:** Claude 3.5 Sonnet, GPT-4o
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

_"The E2E tests that ran perfectly yesterday all failed this morning just because a single button CSS class changed. Do I really have to go hunting for selectors again?"_

If you work in frontend development or QA, having End-to-End (E2E) tests break due to UI changes is an everyday occurrence. Especially when using tools like Playwright or Cypress, test codes inevitably throw errors whenever DOM structures or class names shift. It's a massive waste of time to track down every broken test, open developer tools, and copy over the new selectors. Now, let's just hand the error logs and the modified HTML structure to AI and let it "Auto-heal" the code.

---

## ⚡️ 3-Line Summary (TL;DR)
1. This is a prompt that allows AI to independently analyze and recover Playwright selectors broken by UI changes.
2. Beyond simply fixing the code, you receive strategies for writing resilient selectors that withstand future changes.
3. Just provide the error log and the latest DOM snapshot, and you'll get the recovered code in under a minute.

---

## 🚀 The Solution: "Playwright Auto-healing Prompt"

### 🥉 Basic Version
Use this when you want to quickly toss in the broken code and error message to get the fixed code back.

> **Role:** You are a `[Senior QA Engineer]`.
> **Task:** Based on the provided Playwright error log and new HTML, fix the `[broken test code]`.

### 🥇 Pro Version
Use this when you want to move beyond a simple fix and refactor into robust, easily maintainable code.

> **Role:** You are a specialized test automation `[Senior SDET (Software Development Engineer in Test)]`. You perfectly understand Playwright's best practices.
> 
> **Context:**
> 
> - Background: Existing Playwright E2E tests are failing due to a recent UI update. The main cause is changed selectors.
> - Goal: Recover the failing test code and improve it to a resilient selector structure that is less likely to break from future UI changes.
> 
> **Task:**
> 
> 1. Analyze the `[error log]` and `[changed HTML structure]` provided below to identify the root cause of the error.
> 2. Modify the `[existing test code]` so the test passes again.
> 3. When modifying, prioritize using User-Facing attributes (text, ARIA attributes, data-testid, etc.) rather than relying on CSS classes or XPath.
> 4. Add brief code comments explaining "why this change was made" for the modified parts.
> 
> **Input Data:**
> - Error Log: `[Paste the entire error log]`
> - Changed HTML Structure: `[Paste the relevant HTML snippet from Developer Tools]`
> - Existing Test Code: `[Failing Playwright code snippet]`
> 
> **Constraints:**
> 
> - Provide the output as a complete code block that can be immediately copied and pasted.
> - Prioritize using Playwright's built-in Locators (e.g., `getByRole`, `getByText`, `getByTestId`).
> 
> **Warning:**
> 
> - If you cannot find a suitable element in the provided HTML snippet, do not make blind guesses. Instead, reply: "Cannot find an exact selector due to insufficient HTML information. Please provide additional DOM information."

---

## 💡 Author's Insight
This approach truly shines in the field when dozens of tests blow up simultaneously. In the past, a single selector change meant I had to open 30 test files and manually hit `Ctrl + F` to fix them all. However, by registering this prompt in your IDE's built-in AI or Claude, you can completely outsource the tedious selector extraction simply by throwing in the error log and a copy of the browser's Elements tab. 

The core secret here is the constraint: "Prioritize using User-Facing attributes." AI naturally tends to target the easiest CSS class, but this constraint forces it to write excellent code like `getByRole('button', { name: 'Submit' })`. This is a weapon that will push your clock-out time forward by at least an hour. Just give it a try!

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: What if the HTML structure is too long?**
  - A: You don't need to copy the entire page. Providing up to the parent tag of the failing element (like a button or form) is more than enough.
- **Q: Can I use this for Cypress or Selenium instead of Playwright?**
  - A: Yes, just replace the word 'Playwright' in the prompt with the name of your tool, and it will work just as beautifully.
- **Q: Will it work well in projects without `data-testid`?**
  - A: Absolutely. The AI smartly finds accessibility-based alternatives like `getByRole` or `getByText`.

---

## 🧬 Anatomy of the Prompt (Why it works?)
1. **Assigning the SDET Persona:** By providing the perspective of a specialized test engineer rather than a general developer, it guides the AI to generate code that isn't just functional, but adheres to Playwright Best Practices.
2. **Forcing User-Facing Locators:** It inherently reduces the flakiness of tests by enforcing Playwright's core philosophy right at the prompt level, instantly elevating code quality.
3. **Anti-Hallucination Safeguards:** To prevent the AI from generating meaningless code when information is lacking (which only makes debugging harder), an explicit constraint of "Say you don't know if you don't know" is applied.

---

## 📊 The Proof: Before & After

### ❌ Before (Input)
```text
Error Log:
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================

Changed HTML Structure:
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>

Existing Test Code:
await page.locator('.btn-primary.submit-btn').click();
```

### ✅ After (Result)
```typescript
// Reason for change: The test failed because the CSS class ('.btn-primary.submit-btn') was modified.
// Improvement: Instead of relying on fragile CSS classes, the UI is now more resilient to changes by utilizing accessibility attributes (ARIA label) and Role.
await page.getByRole('button', { name: 'Submit Order' }).click();
```

---

## 🎯 Conclusion
Test code is the shield that protects your product code, but you shouldn't spend too much time polishing that shield. Escape from maintenance hell using AI-powered Auto-healing prompts. 

Leave the test fixing to AI, grab a cup of coffee, and log off right on time! 🍷
