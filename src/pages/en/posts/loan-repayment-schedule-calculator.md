---
layout: /src/layouts/Layout.astro
title: "Loan Repayment Schedule: Equal Principal and Interest vs Equal Principal"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Work Automation"
description: "Loan interest calculator template made directly in Excel without needing to enter bank sites."
tags: ["Excel", "LoanInterest", "FinancialFunction", "PMT"]
---

# 📝 Loan Repayment Schedule: Equal Principal and Interest vs Equal Principal

> **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Paying 1 million won monthly, how much is principal and how much is interest?"_

There are largely two loan repayment methods. **'Equal Principal and Interest'** where monthly payment is same, and **'Equal Principal'** where it decreases over time. Which is advantageous for me? Making full repayment schedule using Excel financial functions (`PMT`, `IPMT`, `PPMT`) shows total interest difference at a glance.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Auto-calculate monthly payment (Principal + Interest) with `PMT` function
2. Separate interest and principal portion with `IPMT` and `PPMT` functions
3. Generate schedule showing balance change by repayment round (1~360 rounds)

---

## 🚀 The Solution: "Self Loan Calculator"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a `[Financial Excel Expert]`.
> **Request:** Loan interest calculator template made directly in Excel without needing to enter bank sites.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and use it.

> **Role:** You are a `[Financial Excel Expert]`.
>
> **Context:** I want to make a loan schedule of **Equal Principal and Interest Repayment** method in Excel.
>
> - **Loan Amount:** 100 Million KRW (B1)
> - **Annual Interest Rate:** 4.5% (B2)
> - **Repayment Period:** 10 Years (120 Months) (B3)
>
> **Task:**
>
> 1. Tell me **`PMT` function formula** to find total monthly payment (Principal + Interest).
> 2. Tell me formulas to find **Interest (`IPMT`)** and **Principal (`PPMT`)** going out in N-th round (e.g., 1st round) respectively.
> 3. Give formula applying absolute reference ($) so I can drag and fill from 1st to 120th round.
>
> **Constraints:**
>
> - Don't forget to divide annual interest rate by 12 as it is monthly calculation.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
How to calculate loan interest in Excel?
```

### ✅ After (Result)

````text
### 🏦 Excel Loan Repayment Formulas Collection

**1. Monthly Payment (Total Principal + Interest)**
```text
=PMT($B$2/12, $B$3*12, -$B$1)
```
````

_Result: Approx 1,036,384 KRW (Pay this much monthly)_

**2. How much is interest? (Based on 1st round)**

- Assuming round (1, 2, 3...) is in Column A:

```text
=IPMT($B$2/12, A5, $B$3*12, -$B$1)
```

_(A5 is current round. Drag down)_

**3. How much is principal?**

```text
=PPMT($B$2/12, A5, $B$3*12, -$B$1)
```

**💡 Analysis:**
In early stage `IPMT` (Interest) is large and `PPMT` (Principal) is small, but principal repayment portion increases over time.

```

---

## 🎯 Conclusion

Checking total interest cost visually burns your will to repay loan. Draw your own repayment map with Excel.

Now leave work! 🍷
```
