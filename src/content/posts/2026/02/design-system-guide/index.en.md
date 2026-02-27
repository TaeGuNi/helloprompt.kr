---
layout: /src/layouts/Layout.astro
title: " \"디자인 시스템 구축: 디자이너와 개발자가 안 싸우는 법\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "디자인/UX"
description: " \"How to synchronize Figma variables with CSS variables. A complete guide to building a token-based design system.\""
tags: ["디자인시스템", "Figma", "CSS", "UI-UX", "협업"]
---

# 🎨 Building a Design System: How Designers and Developers Can Stop Fighting

- **🎯 Recommended for:** Developers tired of hearing "the button color doesn't match the design," and Designers frustrated that "developers ruined my design."
- **⏱️ Time Required:** 10 minutes → Reduced to 1 minute (Initial token design & automated code conversion)
- **🤖 Recommended AI:** ChatGPT-4o, Claude 3.5 Sonnet (For architecture design & code generation)

- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Wasn't the Primary Color `#0055FF`? Why is it `#0050FF` here?"_

Hardcoded colors and spacing values scattered across your codebase are the primary culprits behind maintenance nightmares. It's time to adopt **Design Tokens**. This is the most reliable contract for defining and sharing all visual elements—colors, typography, spacing, shadows—as meaningful variables. Once a token-based system is established, you will experience the magic of automatic code synchronization the moment a designer updates a value in Figma.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Tokenize Your Design:** Instead of relying on absolute hex values like `#0055FF`, use a shared, semantic language like `primary-500`.
2. **Apply Figma Variables:** Leverage Figma's Variables and Styles features to define visual properties as systematic tokens.
3. **Automate Code Sync:** Automatically convert extracted token data into a `tailwind.config.ts` file or global CSS variables to apply them directly to your project's codebase.

---

## 🚀 The Solution: "Design Token Generator Prompt"

### 🥉 Basic Version

Use this prompt when you are struggling to structure your initial color palette and figure out variable naming conventions.

> **Task:**
> I am planning a design system color palette for a new product.
> I want to divide the `[Primary (Blue)]`, `[Secondary (Gray)]`, and `[Error (Red)]` colors into 9 steps each, from 100 to 900.
> Please recommend the hex codes for each step in a table format, along with intuitive and semantic variable names (e.g., `text-primary`, `bg-surface-default`) so that these colors can be directly applied to the codebase.


### 🥇 Pro Version

Use this prompt to perfectly convert token JSON data extracted from Figma into code tailored for an actual frontend environment.

> **Role:** You are a senior Design Ops engineer with 10 years of experience and a Frontend Architect.
>
> **Context:**
>
> - Background: A designer has defined design tokens in Figma and exported them as JSON.
> - Objective: Perfectly convert this JSON data into code that can be immediately applied to a frontend project.
>
> **Input Data:**
>
> `[Paste the token JSON data extracted from Figma here]`
>
> **Task:**
>
> 1. Analyze the input data and convert it into the format of a modern **Tailwind CSS configuration file (`tailwind.config.ts`)**.
> 2. Also, write the **CSS Variables (`:root { --color-blue-500: ... }`)** code so that it is not dependent on a specific CSS framework.
> 3. Add a strategy and example code for dark mode support (`@media (prefers-color-scheme: dark)` or the `.dark` class) to adapt seamlessly to system themes.
>
> **Constraints:**
>
> - Output the result strictly as Markdown code blocks (`ts`, `css`).
> - Strictly maintain kebab-case for all variable names.
>
> **Warning:**
>
> - Do not invent arbitrary color values or steps outside of the provided JSON structure. (Prevent hallucination)

---

## 💡 Writer's Insight

Building a design system is not about creating a massive master plan and finishing it all at once. If you try to fully tokenize every single component and typography rule from the start, you will highly likely burn out and give up.
I strongly recommend an **Incremental Adoption** strategy: start by replacing the **"most frequently and repetitively used elements"** (e.g., the background color of a Primary Button, body text color) with variables one by one.
A single, small token will serve as the first step toward dramatically reducing unnecessary communication overhead between designers and developers.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Which plugin should I use to export tokens from Figma?**
  - A: In the industry, **'Tokens Studio for Figma'** is widely considered the de facto standard. It allows you to extract JSON and sync it directly with a GitHub repository. Recently, Figma's native Variables feature has also become much more powerful, making REST API integrations a popular trend as well.

- **Q: We are a small startup with only 2-3 people. Do we really need a design system?**
  - A: If your team has more than two people, or if the project's maintenance period exceeds three months, you absolutely must adopt one. The technical debt of saying "Let's organize this later when we have time" will eventually blow up and drastically slow down your project. After all, your "Future Self" is essentially a different person.

---

## 🧬 Anatomy of the Prompt (Why it works?)

1. **Forcing Semantic Naming:** It prompts the AI to use meaning-based naming like "main button background color (`bg-primary-default`)" instead of "light blue." This ensures that even if the brand color completely changes from blue to purple later, modifying a single hex value will instantly update the entire project.
2. **Delegating Repetitive Format Conversion:** Manually typing and transferring JSON formats into Tailwind configuration objects or CSS variable syntax is a painful chore for humans. AI boasts overwhelming accuracy and speed in these pattern-based, simple code conversions and structuring tasks, completely eliminating human error.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

Every time the design changes, you have to manually search for and replace hex codes across more than 100 files. 😱

```css
.button-primary {
  background-color: #3b82f6;
}

.text-highlight {
  color: #3b82f6;
}
```

### ✅ After (Result)

Modifying just a single variable value perfectly updates the UI of the entire product. 🚀

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

The translator between design and development shouldn't be an emotional 'person', but a **'system'** with clear rules.
Stop arguing over pixels and color values. Start communicating in the shared language of tokens.

**"Hey developer, this isn't `gray-200`, it's `surface-subtle`. Please check the tokens."** 🍷
