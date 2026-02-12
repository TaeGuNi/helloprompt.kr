---
title: "Excel Sensitivity Analysis: Perfect Prep for 'What If' Scenarios"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Work Automation"
description: "How much profit decreases if exchange rate rises 10%? Calculating dozens of cases at once with Excel Data Table function."
tags: ["Excel", "SensitivityAnalysis", "Scenario", "DataTable"]
---

# 📝 Excel Sensitivity Analysis: Perfect Prep for "What If" Scenarios

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Nobody knows the future. But we can calculate all futures."_

Most important thing when planning business is variable. **'Sensitivity Analysis'** table showing how operating profit changes when exchange rate, raw material price, sales volume etc. change. Using Excel's hidden cheat key **'Data Table'** function, you can auto-generate 100 scenarios with one formula.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Setting relationship between variables (Exchange rate, Sales volume) and result (Operating profit)
2. Generating matrix utilizing 'What-If Analysis > Data Table' function
3. Simulating result when two variables change simultaneously

---

## 🚀 The Solution: "Scenario Matrix Generator"

### 🥉 Basic Version

Use this when you just need a quick result.

- **Role:** You are a `[Financial Modeling Expert]` in strategic planning office.
  > **Request:** How much profit decreases if exchange rate rises 10%? Calculating dozens of cases at once with Excel Data Table function.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and use it.

- **Role:** You are a `[Financial Modeling Expert]` in strategic planning office.
  > **Context:** I want to do **Sensitivity Analysis** in Excel.
  >
  > - **Goal:** Observe 'Operating Profit' change
  > - **Variable 1 (Row):** Exchange Rate (1,200 KRW ~ 1,400 KRW, 50 KRW unit)
  > - **Variable 2 (Column):** Sales Volume (10k ~ 50k, 10k unit)
  >
  > **Task:**
  >
  > 1. Tell me step by step order to use Excel's **'Data Table'** function.
  > 2. Explain clearly where to link Row Input Cell and Column Input Cell not to be confused.
  > 3. Give tip to derive insight like "Hedging is needed as profit plummets if exchange rate rises" seeing completed table.
  >
  > **Constraints:**
  >
  > - Specify menu path (Data tab > What-If Analysis > Data Table).

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
How to make exchange rate fluctuation scenario in Excel?
```

### ✅ After (Result)

```text
### 🌪️ Excel Sensitivity Analysis 3-Step Guide

**1. Laying the Board (Matrix Structure)**
- Enter **Exchange Rate** scenarios (1200, 1250...) in Column A (Vertical).
- Enter **Sales Volume** scenarios (10k, 20k...) in Row 1 (Horizontal).
- **Key:** Must link **'Operating Profit Calculation Formula (=C10)'** to the **Corner (A1)** cell where Column A and Row 1 meet.

**2. Casting Magic (Running Data Table)**
- Select entire table ➔ [Data] tab ➔ [What-If Analysis] ➔ Click [Data Table].
- **Row Input Cell:** Click **'Sales Volume'** cell of original data (Because it's horizontal axis!)
- **Column Input Cell:** Click **'Exchange Rate'** cell of original data (Because it's vertical axis!)

**3. Checking Result**
- Moment you press OK, blanks in table are filled with dozens of operating profit estimates.
- **💡 Tip:** Apply Conditional Formatting (Color Scales). 'Deadline' where profit turns to deficit (Red) is seen at a glance.
```

---

## 🎯 Conclusion

When executive asks "What happens if exchange rate becomes 1,350?", don't panic and read (1350, Sales Volume) coordinate of Excel table. That is 'prepared talent'.

Now leave work! 🍷
