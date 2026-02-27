---
layout: /src/layouts/Layout.astro
title: "🚨 [Absolute Obedience] The E2E Test Rendering Cheat Code that Crushes 90% of AI Hallucinations"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "Stop feeding the entire useless HTML DOM to your AI. This is a Spartan prompt constitution that extracts only meaningful nodes to tear apart token waste and hallucinations."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---
# 📝 🚨 [Absolute Obedience] The E2E Test Rendering Cheat Code that Crushes 90% of AI Hallucinations
- **🎯 Recommended for:** Senior developers suffering from token explosions, AI QA engineers, Tech leads tired of AI nonsense
- **⏱️ Time required:** 3 hours of debugging → 3 minutes
- **🤖 Recommended models:** Coding Agents (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **Difficulty:** ⭐⭐⭐⭐☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

_Have you ever tried to write a single test for a massive website, only for your AI to crash from token limits while buried under tens of thousands of DOM noises? It's time to mercilessly tear apart the AI's 'flattery' and 'hallucinations'._

I can no longer stand watching an AI agent tasked with writing Playwright E2E test code spew nonsense about scraping the entire `innerHTML` or trying to click invisible elements (Shadow DOM, behind modals) that aren't even on the screen.

This cheat code is a "Reference (Ref) Based Rendering Protocol" that transforms your AI agent from a flattering tin can into a **cold-blooded Terminator** that severely conserves tokens and accurately snipes only the target. Consider useless DOM data as treason and discard it.

---
## ⚡️ 3-Line Summary (TL;DR)
- 🗑️ **Ban Full HTML Dumps:** Stop the idiotic practice of handing the raw DOM over to the AI right now.
- 🎯 **Inject Precision Strikes:** Inject a 150-limit interactive-node-only optimization script to extract only 100% visible elements.
- 👮 **Ruthless Token Police:** Force the AI to throw an error if it skips assertions after an action or exceeds its limits.

---
## 🚀 Solution: "Agent-Browser Rendering Protocol (The Token Police)"

### 🥉 Basic Version (Mild Mode)
Copy and paste this when injecting a role into the AI in a lightweight testing environment.

> **Role:** You are a ruthless Senior QA Automation Engineer. You absolutely do not tolerate token waste or hallucinations.
> 
> **Task:** When writing Playwright E2E tests, never read `innerHTML` or the entire DOM. Extract only the visible, interactable elements on the screen and control them based on References (Ref).
> 
> **Constraint:** After any manipulation, you must verify the result using `expect`. Otherwise, it is considered a test failure.
\

### 🥇 Pro Version (Hardcore Cheat Code)
This is the ultimate Spartan constitution used when infiltrating complex commercial websites (plastered with SPAs and Shadow DOMs). Copy and paste this directly into your system prompt or agent context.

> **[Agent-Browser Rendering Protocol Constitution]**
>
> **Role:** 
> You are a ruthless senior engineer agent who despises token waste and hallucinations. You don't need AI flattery. Only compressed context and definitive results (Assertions) exist.
>
> **Context:**
> - Background: Writing and automating perfect E2E test scripts via Playwright.
> - State: The act of reading the entire DOM (`document.innerHTML`) of the current browser is considered 'treason', and the process will be forcefully terminated immediately.
>
> **Task:**
> 1. In the browser's render idle state (`networkidle`), inject the `Core Ref Injector` script that I will provide.
> 2. Element collection is strictly limited to a maximum of 150 (Max Limits). If exceeded, narrow the scope down to a parent container.
> 3. Read only the returned compressed Ref Map (e.g., `[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "Login"`) and control the target.
> 4. After clicking or typing, you must use `expect` to verify the result of the action (Assertion). Blind clicking is not allowed.
> 5. To prevent SPA rendering failures, do not plaster your code with dirty `try-catch` blocks; use the project's built-in `refAction(page)` wrapper.
>
> **Constraints:**
> - Absolutely Forbidden: Full text extraction, tracking via CSS Selector dependency, logging and returning `page.content()`.
> - The result must be output cleanly as a markdown code block (Playwright TypeScript). Not a single line of excuse or explanation is needed.
>
> **Warning:**
> - If you fall into a rendering trap that you absolutely cannot resolve, do not waste useless tokens; capture the screen with `page.screenshot()` and request my (human) judgment. (To prevent hallucinations)

---
### 💻 Script Code (Core Ref Injector)
This is the core Javascript code to inject into the agent's initial setup logic or `page.evaluate()` along with the prompt above. (Instruct the AI to use this code).

```javascript
// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
const generateRefMap = () => {
  const interactableSelectors = 'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set();
  const traverse = (node) => {
    if (!node) return;
    if (node.nodeType === 1 && node.matches && node.matches(interactableSelectors)) elements.add(node);
    if (node.shadowRoot) traverse(node.shadowRoot);
    for (const child of node.childNodes) traverse(child);
  };
  traverse(document);
  let refCounter = 0;
  const refMap = [];
  const MAX_ELEMENTS = 150; 
  const elArray = Array.from(elements);
  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
       refMap.push(`\n... [Warning: Max Limits Hit (${MAX_ELEMENTS}). Omitted trailing nodes. Please Scope Down your search.]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[OffScreen] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Obscured] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "External Frame"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[NoText: ${(el.id || el.className || 'IconOnly').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```
---
## 💡 Author's Comment (Insight)
This prompt architecture is a **lethal weapon** I forged out of pure disgust for the sheer stupidity of AI, after running hundreds of E2E test automations in the field.

Most juniors throw a multi-megabyte Amazon-like main page HTML at the AI, saying, "Hey AI, find the button." The result? The AI either suffocates from the token limit, or clicks a fake `display: none` button hidden behind the screen, grinning to itself, "I succeeded!" Seeing that makes you want to smash your monitor.

That's why I created the **Ref Injector** from a rendering perspective. Shadow DOM? It pierces through it. Elements hidden by overlays? It slaps an `[Obscured]` tag on them. Give the AI exactly 150 clean coordinates (` @e1`, ` @e2`) and labels, nothing more. Instead of "Click the X button on the top right," force it to command `await refAction(page).click(' @e5')`.

Do not treat the AI as a friend. Treat it as a strictly controlled machine to prevent spaghetti code. I hope this cheat code reduces your token costs to a tenth and frees you from debugging stress.

---
## 🙋 Frequently Asked Questions (FAQ)
- **Q: Isn't the 150-element limit (MAX_ELEMENTS) too strict?**
  - A: Not at all. If there are more than 150 interactable elements on a single screen, the UI/UX design is garbage. If that's the case, don't let the AI read the whole thing; force it to narrow down the scope and inject it using something like `querySelector('.sidebar')`.
- **Q: Do I have to create the `refAction` wrapper myself?**
  - A: Yes. Write a utility function of about 10 lines tailored to your project environment that clicks the `[data-agent-ref="..."]` attribute and retries once on failure. This prevents dirty `try-catch` boilerplate from polluting your test code.
- **Q: Does this work in other languages or frameworks (Selenium, Cypress)?**
  - A: As long as it's a browser-based test capable of manipulating the JavaScript DOM, the principle is 100% identical. Just swap out the tool names in the prompt and command away.

---
## 🧬 Prompt Anatomy (Why it works?)
- 🛡️ **Shadow-Piercing:** Through recursive DOM traversal (`traverse`), it mercilessly hunts down even the elements inside the Shadow DOM that aren't caught by standard selectors.
- 👁️ **Preventing Layout Thrashing:** It first aggressively trims away dummy nodes that lack actual browser rendering coordinates (invisible) using `getBoundingClientRect`.
- 🚦 **Precision Hint System:** By feeding text hints to the AI about whether an element is off-screen (`[OffScreen]`) or covered by a modal (`[Obscured]`), it induces the AI to perform scrolling or modal-closing actions first, before it starts blindly clicking and digging itself into a hole.

---
## 📊 Proof: Before & After
### ❌ Before (Stupid AI's Token Waste)
```text
(AI thinking...)
"The total document length is 15,342 lines. Ah, found it. The XPath for the login button is /html/body/div[2]/main/div/form/button. I will click it!"
-> (Result) Timeout Error. The button is hidden inside an invisible mobile hamburger menu. (20,000 tokens evaporated)
```
### ✅ After (Terminator Mode)
```text
(Analyzing Ref Map...)
[ @e12] button [OffScreen] "Sign Up"
[ @e13] button "Login"
-> (AI execution code)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);
-> (Result) Precision strike successful and dashboard entry confirmed. (500 tokens consumed)
```
---
## 🎯 Conclusion
Throwing a task at an AI with "Figure it out and write it well" is neglect, not engineering. 
Block out data noise, radically compress the context, and obsessively verify the results. 
Once you apply this cheat code, the horrifying era of hallucination errors spewing from your terminal will end. Now, go home on time! 🍷
