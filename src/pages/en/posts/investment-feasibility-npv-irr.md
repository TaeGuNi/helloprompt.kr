---
layout: /src/layouts/Layout.astro
title: "Investment Feasibility Analysis: NPV & IRR Auto-Calculation Excel"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Work Automation"
description: "Should I do this business? Easily calculate Net Present Value (NPV) and Internal Rate of Return (IRR), key indicators of investment decision, with Excel."
tags: ["Excel", "InvestmentAnalysis", "NPV", "IRR"]
---

# 📝 Investment Feasibility Analysis: NPV & IRR Auto-Calculation Excel

> **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Is it profitable to invest 100 million now and earn 200 million in 5 years? It depends on the interest rate."_

You shouldn't just look at the profit amount. Because the value of money changes over time. **NPV (Net Present Value)** and **IRR (Internal Rate of Return)**, the golden rules of corporate investment decisions. Concepts are difficult, but with Excel functions, even elementary students can calculate. AI creates perfect template formulas.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Understand NPV and IRR concepts based on Cash Flow data
2. Create auto-calculation formulas utilizing Excel `NPV`, `IRR` functions
3. Suggest investment judgment criteria according to discount rate (interest rate) changes

---

## 🚀 The Solution: "Investment Reviewer AI"

### 🥉 Basic Version

Use this when you just need a quick result.

- **Role:** You are a `[Financial Modeling Expert]`.
  > **Request:** Should I do this business? Easily calculate Net Present Value (NPV) and Internal Rate of Return (IRR), key indicators of investment decision, with Excel.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and use it.

- **Role:** You are a `[Financial Modeling Expert]`.
  > **Context:** I want to analyze investment feasibility of a new project with Excel.
  >
  > - **Initial Investment (Year 0):** -100 Million KRW (Cell B2)
  > - **Expected Revenue (Year 1~5):** 30 Million KRW annually (Cells B3~B7)
  > - **Discount Rate (Required Return):** 10% (Cell C2)
  >
  > **Task:**
  >
  > 1. Tell me **Excel formula to find NPV (Net Present Value)** of this project.
  > 2. Tell me **Excel formula to find IRR (Internal Rate of Return)**.
  > 3. Explain judgment criteria on whether to invest or not when calculation results are **NPV > 0** or **IRR > Discount Rate**.
  >
  > **Constraints:**
  >
  > - Write formula noting that Excel's `NPV` function should be input from Year 1. (Process initial investment separately)

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
Tell me how to find NPV IRR in Excel.
```

### ✅ After (Result)

```text
### 📊 Investment Analysis Excel Formulas

**1. Finding NPV (Net Present Value)**
- **Formula:** `=B2 + NPV(C2, B3:B7)`
- **Interpretation:** Just add initial investment (-100M), and discount only revenues from Year 1 with NPV function to be accurate.
- **Judgment:** If result is **greater than 0**, invest! (Money-making business)

**2. Finding IRR (Internal Rate of Return)**
- **Formula:** `=IRR(B2:B7)`
- **Interpretation:** Just grab the entire range from initial investment to last revenue.
- **Judgment:** If result (e.g., 15%) is **higher than discount rate (10%)**, invest!

**💡 Summary:**
NPV shows amount (How much earned?), IRR shows return rate (What % earned?). Best if both satisfy.
```

---

## 🎯 Conclusion

Investment is not hunch but science. Prevent multi-billion mistakes with two lines of Excel formulas.

Now leave work! 🍷
