---
layout: /src/layouts/Layout.astro
title: " \"디자인 시스템 구축: 디자이너와 개발자가 안 싸우는 법\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "General"
description: "How to synchronize Figma variables with CSS variables. A complete guide to building a token-based design system."
tags: ["디자인시스템", "Figma", "CSS", "UI-UX", "Collaboration"]
---

## 🎨 Building a Design System: How Designers and Developers Can Stop Fighting

- **🎯 Recommended for:** Developers tired of hearing "the button color doesn't match the design," and designers frustrated that "the developers ruined my design."
- **⏱️ Time Required:** 10 minutes → Reduced to 1 minute (Initial token design & automated code conversion)
- **🤖 Recommended AI:** ChatGPT-4o, Claude 3.5 Sonnet (For architecture design & code generation)

- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Wasn't the Primary Color `#0055FF`? Why is it `#0050FF` here?"_

Hardcoded colors and absolute spacing values scattered across your codebase are the primary culprits behind maintenance nightmares. It's time to adopt **Design Tokens**. Think of tokens as the ultimate single source of truth—a reliable contract that defines and shares all visual elements, from colors and typography to spacing and shadows, as meaningful variables. Once you establish a token-based system, you'll experience the magic of automatic code synchronization the exact moment a designer updates a value in Figma.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Tokenize Your Design:** Stop relying on absolute hex values like `#0055FF` and start using a shared, semantic language like `primary-500`.
2. **Apply Figma Variables:** Leverage Figma's native Variables and Styles features to define your visual properties as a systematic hierarchy of tokens.
3. **Automate Code Sync:** Automatically convert extracted token data into a `tailwind.config.ts` file or global CSS variables, applying them directly to your codebase without manual data entry.

---

## 🚀 The Solution: "Design Token Generator Prompt"

### 🥉 Basic Version

Use this prompt when you're struggling to structure your initial color palette and need help establishing a logical naming convention for your variables.

> **Task:**
> I am planning a design system color palette for a new product.
> I want to divide the `[Primary (Blue)]`, `[Secondary (Gray)]`, and `[Error (Red)]` colors into 9 steps each, ranging from 100 to 900.
> Please recommend the hex codes for each step in a table format, along with intuitive and semantic variable names (e.g., `text-primary`, `bg-surface-default`) so that these colors can be seamlessly integrated into our codebase.

### 🥇 Pro Version

Use this advanced prompt to perfectly translate raw token JSON data extracted from Figma into production-ready code tailored for your frontend environment.

> **Role:** You are a senior Design Ops engineer with 10 years of experience and a Frontend Architect.
>
> **Context:**
>
> - Background: A product designer has defined our design tokens in Figma and exported them as a JSON file.
> - Objective: Perfectly convert this JSON data into production-ready code that can be immediately applied to our frontend project.
>
> **Input Data:**
>
> `[Paste the token JSON data extracted from Figma here]`
>
> **Task:**
>
> 1. Analyze the input data and convert it into the format of a modern **Tailwind CSS configuration file (`tailwind.config.ts`)**.
> 2. Additionally, generate the raw **CSS Variables (`:root { --color-blue-500: ... }`)** code so that the system remains independent of any specific CSS framework.
> 3. Provide a strategy and example code for robust dark mode support (` @public/images/hooks/social-media-planner.jpg (prefers-color-scheme: dark)` or the `.dark` class) to adapt seamlessly to system themes.
>
> **Constraints:**
>
> - Output the result strictly as Markdown code blocks (`ts`, `css`).
> - Strictly maintain kebab-case for all variable names.
>
> **Warning:**
>
> - Do not invent arbitrary color values or add scaling steps outside of the provided JSON structure. (Prevent hallucination)

---

## 💡 Writer's Insight

Building a design system doesn't mean drafting a massive master plan and executing it all at once. If you try to fully tokenize every single component and typography rule from day one, you'll likely burn out and abandon the project.

I strongly recommend an **Incremental Adoption** strategy. Start by replacing the **"most frequently and repetitively used elements"**—like the background color of a Primary Button or your core body text color—with variables, one by one. A single, well-defined token acts as the crucial first step toward dramatically reducing unnecessary communication overhead and friction between designers and developers.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Which plugin should I use to export tokens from Figma?**
  - A: In the industry, **'Tokens Studio for Figma'** is widely considered the de facto standard. It allows you to extract your JSON tokens and sync them directly with a GitHub repository. Recently, Figma's native Variables feature has also become significantly more powerful, making direct REST API integrations a highly popular alternative.

- **Q: We are a small startup with only 2-3 people. Do we really need a design system?**
  - A: If your team consists of more than two people, or if the project's maintenance lifecycle exceeds three months, you absolutely must adopt one. The technical debt incurred by saying "Let's organize this later when we have more time" will eventually snowball and drastically slow down your release velocity. Remember, your "Future Self" is essentially a different person who won't remember why you hardcoded that specific hex value.

---

## 🧬 Anatomy of the Prompt (Why it works?)

1. **Forcing Semantic Naming:** This prompt compels the AI to generate meaning-based nomenclature—like "main button background color (`bg-primary-default`)"—rather than literal descriptions like "light blue." This guarantees that even if the brand color completely pivots from blue to purple in the future, updating a single hex value will instantly and accurately reflect across the entire project.
2. **Delegating Repetitive Format Conversion:** Manually transcribing JSON formats into Tailwind configuration objects or raw CSS variable syntax is a tedious, error-prone chore for humans. The AI handles these pattern-based, structural code conversions with overwhelming accuracy and speed, entirely eliminating the risk of human error.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

Every time the brand design changes, you're forced to manually search for and replace hex codes across more than 100 scattered files. 😱

```css
.button-primary {
  background-color: #3b82f6;
}

.text-highlight {
  color: #3b82f6;
}
```

### ✅ After (Result)

Modifying just a single semantic variable value perfectly and instantly updates the UI across the entire product. 🚀

```css
:root {
  --primary-500: #3b82f6;
  --bg-primary-default: var(--primary-500);
}

.button-primary {
  background-color: var(--bg-primary-default);
}
```

---

## 🎯 Conclusion

The translator bridging the gap between design and development shouldn't be an emotional human being; it should be a **'system'** governed by clear, undeniable rules.

Stop arguing over stray pixels and mismatched color values. Start communicating in the shared, unified language of tokens.

**"Hey developer, this isn't `gray-200`, it's `surface-subtle`. Please check the tokens."** 🍷
