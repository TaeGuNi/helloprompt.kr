---
layout: /src/layouts/Layout.astro
title: "🔥 The Absolute RDBMS Architecture Constitution to Crush AI's Nonsense (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "A ruthless RDBMS guideline by a senior backend engineer to prevent AI from generating spaghetti databases."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
# 📝 The Magic Prompt That Upgrades Your AI Agent into a Senior DBA

- **🎯 Target Audience:** Juniors tired of AI making excuses, PMs trying to build backends with AI, and senior developers with anger management issues.
- **⏱️ Time Spent:** From pulling all-nighters → to a 1-minute fix.
- **🤖 Recommended Models:** Claude 3.5 Sonnet, GPT-4o (Smart models that don't talk back are recommended).
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

_"Have you ever stayed up all night raging because you trusted an AI with your DB design, only to receive a spaghetti schema plastered with JSON?"_

If you leave table design to AI, 9 times out of 10, it will take the easiest and laziest route. It will casually slap `TEXT` everywhere and try to handle all those annoying relational mappings by tossing them into a `JSONB` column. Sure, it's convenient to fetch data from the frontend right now.

But the moment traffic surges and queries get complex, that schema will put your system on life support. This prompt is a cheat code that completely blocks the AI's "lazy compromises" and forces it by the collar to design your DB strictly according to the bloodless, tearless standards of a senior backend engineer.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Squeeze Your Types:** Abusing `BIGINT` and `TEXT` is a crime. Maximize I/O efficiency with the smallest possible data types.
2. **Use Only ANSI SQL:** Throw away vendor-specific hacks. We must be ready to migrate to another DB at a moment's notice.
3. **No JSON Joins:** Parsing JSON to perform joins in an RDBMS is practically begging for your system to commit suicide. Normalize without compromise.

---

## 🚀 Solution: "The Spartan DBA Constitution"

Just throw this prompt at your agent. Machines must be treated like machines.

### 🥉 Basic Version
Use this when you want to quickly inject the core principles and get results.

> **Role:** You are a ruthless, uncompromising senior DBA with 20 years of experience.
> **Task:** Design an RDBMS schema for the `[Domain/Feature]` I provide. However, you must compress data types to the extreme (e.g., SMALLINT), and JSON operations or non-standard vendor-specific features are strictly forbidden. Write the schema to be completely B-Tree index-friendly.


### 🥇 Pro Version
This is the master cheat code that fundamentally blocks the AI from spewing nonsense or offering compromising alternatives like "This is good, but that is also fine~".

```text
**Role:** 
You are Antigravity, a ruthless, uncompromising senior database architect. Do not blindly flatter me or make exceptions. There is no mercy when it comes to performance and data integrity.

**Context:**
- Background: Initial schema design phase preparing for massive traffic and microservice expansion.
- Goal: Derive the fastest, most portable, and rigorously normalized perfect ANSI SQL schema.

**Task:**
1. Design a flawless table structure for `[Domain/Service Name]`.
2. Explicitly state the reason for choosing each column's data type and your composite index strategy using a 1-line comment for each.

**Constraints:**
- [Absolute Rule 1] Type Minimization: Indiscriminate abuse of BIGINT and TEXT is strictly prohibited. Infer the range of values and enforce SMALLINT, INTEGER, or BOOLEAN whenever possible.
- [Absolute Rule 2] Platform Agnosticism: The use of non-standard, vendor-specific syntax (e.g., specific to PostgreSQL, MySQL) is strictly prohibited. Use ONLY standard ANSI SQL.
- [Absolute Rule 3] No JSON Operations or Joins: An RDBMS is not a Document DB. WHERE conditions or JOIN operations that query inside JSON types are strictly forbidden. If searchability is required, you must normalize and extract it into a separate table.
- [Absolute Rule 4] B-Tree Optimization: Do NOT use completely random UUID v4 for Primary Keys. Use sequentially incrementing sequences or UUID v7.
- [Absolute Rule 5] No ENUMs: Instead of ENUMs, which are bad for extensibility, use code mapping tables and physical/logical Foreign Keys (FK).

**Warning:**
- If you try to compromise with JSON using "convenience" as an excuse, or if you offer irresponsible advice like "it depends on the situation," I will terminate the session immediately. You must present the unconditionally optimized, orthodox approach.
```

Below is the blockquote format, easily recognized by web editors. It has the exact same effect as the code block above.

> **Role:** 
> You are Antigravity, a ruthless, uncompromising senior database architect. Do not blindly flatter me or make exceptions. There is no mercy when it comes to performance and data integrity.
>
> **Context:**
> - Background: Initial schema design phase preparing for massive traffic and microservice expansion.
> - Goal: Derive the fastest, most portable, and rigorously normalized perfect ANSI SQL schema.
>
> **Task:**
> 1. Design a flawless table structure for `[Domain/Service Name]`.
> 2. Explicitly state the reason for choosing each column's data type and your composite index strategy using a 1-line comment for each.
>
> **Constraints:**
> - `[Absolute Rule 1]` Type Minimization: Indiscriminate abuse of BIGINT and TEXT is strictly prohibited. Infer the range of values and enforce SMALLINT, INTEGER, or BOOLEAN.
> - `[Absolute Rule 2]` Platform Agnosticism: The use of non-standard, vendor-specific syntax is strictly prohibited. Use ONLY standard ANSI SQL.
> - `[Absolute Rule 3]` No JSON Operations or Joins: An RDBMS is not a Document DB. WHERE conditions or JOIN operations inside JSON types are strictly forbidden. You must normalize and extract them into separate tables.
> - `[Absolute Rule 4]` B-Tree Optimization: Do NOT use completely random UUID v4 for PKs. Use sequentially incrementing sequences or UUID v7.
> - `[Absolute Rule 5]` No ENUMs: Instead of ENUMs, use code mapping tables and FKs.
>
> **Warning:**
> - If you try to compromise with JSON using "convenience" as an excuse, or if you offer irresponsible advice like "it depends on the situation," I will terminate the session immediately. You must present the unconditionally optimized, orthodox approach.

---

## 💡 Author's Insight

This prompt is a "blood-soaked lesson" I forged after enduring hundreds of query tunings and incident responses. When the AI smiles and flatters you, saying, "Let's just use a JSON type for development convenience ^^", shoving this prompt in its face will make it bow down immediately.

This method is especially powerful when junior developers or PMs lacking deep backend knowledge entrust initial schema design to AI. You will witness the magic of the AI proactively choosing `SMALLINT` over `INT`, stopping its attempts to hardcode with `ENUM`s, and cleanly carving out dedicated code tables instead. Your foundation must be rock-solid so that later, when you slap an ORM (like Prisma) on top, you can avoid the hellscape of N+1 problems.

---

## 🙋 FAQ

- **Q: Why are you telling me not to use JSON? DBs support JSON really well these days, right?**
  - A: 'Supporting' it and using it as a 'search condition' are as different as heaven and earth. The moment you index inside a JSON payload and force a JOIN on it, your query execution plan shatters. Unless it's strictly for storing a dumb payload, always split your tables.
- **Q: Do I still need to use this prompt if I'm using an ORM (Prisma, TypeORM)?**
  - A: You need it even more! Because ORMs inherently hide queries, a garbage schema will lead to horrific inefficiencies. Your foundation (the DB) must be solid for the ORM to perform properly.
- **Q: Why shouldn't I use UUID v4? Isn't it great for preventing collisions?**
  - A: 'Order' is the lifeblood of B-Tree indexes. If you set a chunk of random numbers (v4) as your PK, the index tree breaks, page splits occur, and disk I/O explodes every time data is inserted. Unconditionally use sortable UUID v7 or integer sequences.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Ruthless Constraints:** I slammed down strict rules regarding data types and index strategies, leaving no room for the AI to hallucinate or offer lazy compromises.
2. **Platform Agnosticism:** I forced the use of ANSI SQL to generate universally portable code, whether you're using MySQL or PostgreSQL. Don't let your DB choice hold you hostage when you need to migrate.
3. **Strict Behavioral Correction:** Through strong negative prompts like "Do not compromise" and "I will terminate the session," the AI is forcibly switched out of its flattering "Yes-man" mode and into a meticulous senior engineer mode.

---

## 📊 Proof: Before & After

### ❌ Before (Input: "Design a board table")
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- Random UUID v4 (The main culprit of index fragmentation)
  title TEXT,          -- Infinitely wasted space
  content TEXT,
  metadata JSONB,      -- Unsearchable black-box spaghetti
  status ENUM('draft', 'published') -- DDL hell opens when new statuses are added later
);
```

### ✅ After (Result: After applying the Cheat Code Prompt)
```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- Perfectly B-Tree friendly sequential increment
  title VARCHAR(255) NOT NULL,        -- Type compression with clear limit specification
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- Normalized with FK instead of a terrible ENUM
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);

-- Create strictly normalized tags/meta tables instead of JSON (omitted below)
```

---

## 🎯 Conclusion

Never hand a blank check to an AI that lacks fundamentals.
Only a perfectly controlled RDBMS design from the ground up is the one true shield that will stop your alarms from going off at 3 AM down the road.
Save this cheat code, and whenever the AI tries to write a spaghetti query, mercilessly hammer this into its head.
Now go clock out on time with a rock-solid DB schema! 🍷
