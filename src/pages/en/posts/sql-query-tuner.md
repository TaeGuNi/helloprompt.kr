---
layout: /src/layouts/Layout.astro
title: "Slow SQL Query, Secret to Tuning in 3 Seconds"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that analyzes complex and inefficient SQL queries to optimize performance and recommend indexes."
tags: ["SQL", "DB Tuning", "Query Optimization", "Database"]
---

# 📝 Slow SQL Query, Secret to Tuning in 3 Seconds

> **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Even with just a little data piled up, it takes 5 seconds to query..."_

Queries that were fast at first become turtles as data increases.
Did you feel lost looking at the Execution Plan (Explain Plan) because the black is letters and white is background?
If you show the query to AI, it finds inefficient parts and even makes magical index recommendations.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Improve inefficient Joins and Subqueries
2. Recommend necessary Indexes
3. Rewrite with readable modern SQL syntax

---

## 🚀 The Solution: "SQL Query Tuner"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Chief DBA (Database Administrator) with 20 years of experience and a SQL tuning expert.
> **Request:** A prompt that analyzes complex and inefficient SQL queries to optimize performance and recommend indexes.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Chief DBA (Database Administrator) with 20 years of experience and a SQL tuning expert.
>
> **Context:** The SQL query used in my application is causing performance degradation as the data amount increases.
>
> **Task:**
> Analyze the provided SQL query below and perform the following tasks:
>
> 1. **Problem Diagnosis:** Point out parts that can cause performance degradation in the current query (Full Table Scan, etc.).
> 2. **Query Optimization:** Rewrite into a query that returns the same result but operates more efficiently.
> 3. **Index Recommendation:** Suggest which columns to index with `CREATE INDEX` syntax to maximize query performance.
>
> **DB Used:** `[MySQL / PostgreSQL / Oracle / MS-SQL]`

- **Target Query:**
  > ```sql
  > [Paste slow query here]
  > ```
  >
  > **Constraints:**
  >
  > - The result dataset of the existing query must never change.
  > - Briefly explain the execution principle of why it became faster.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Query)

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE price > 10000);
```

_Problem: Subquery might run for every row (Dependent Subquery)._

### ✅ After (Result)

**Optimized Query (Using JOIN):**

```sql
SELECT DISTINCT u.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.price > 10000;
```

**Recommended Index:**

```sql
CREATE INDEX idx_orders_price_userid ON orders(price, user_id);
```

_Explanation: Optimized by changing subquery to JOIN, and created a composite index to join by `user_id` after filtering by `price`._

---

## 🎯 Conclusion

They say "Tuning is an art", but now it's a 'science' where you can get help from AI.
Don't suffer from slow queries, get free consulting from AI DBA! 🍷
