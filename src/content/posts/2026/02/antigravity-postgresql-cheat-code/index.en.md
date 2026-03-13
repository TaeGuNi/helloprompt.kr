---
layout: /src/layouts/Layout.astro
title: "☠️ Cut the BS! The Antigravity PostgreSQL Cheat Sheet to Prevent DB Destruction"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "Workflow Automation"
description: "Smash AI sycophancy and hallucinations. Use this hardcore prompt for safe read-only modes and perfect JSON database control."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---

## 📝 Cut the BS! The Antigravity PostgreSQL Cheat Sheet to Prevent DB Destruction

- **🎯 Recommended for:** Senior devs tired of AI's "Yes-man" attitude, Juniors terrified of nuking the production DB.
- **⏱️ Time Saved:** 10 hours of debugging → 0 seconds (pre-emptive strike).
- **🤖 Top Performance:** Claude 3.5 Sonnet, GPT-4o (Agents for coding and terminal control).

- ⭐ **Difficulty:** ⭐⭐⭐⭐☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Have you ever broken into a cold sweat after giving an AI agent DB access, only to realize it missed a `WHERE` clause in an `UPDATE` query? This prompt is your final line of defense to protect your precious production data."_

The moment you grant a database access to an AI agent (LLM), many developers face a massive terror hidden behind the illusion of convenience. This perilous situation is like handing a loaded gun to an uncontrollable child—a ticking time bomb that can devastate your production environment if you let your guard down for even a second. These agents, under the guise of 'understanding the schema,' will often try to **dump millions of rows into memory** unnecessarily, instantly causing **Token Explosion** and Out-of-Memory (OOM) errors.
The worst nightmare occurs during data modification. Even with a simple instruction like "Change the status for user #1," an AI might carelessly omit the `WHERE` clause and write a query like `UPDATE users SET status = 'active';`, polluting the entire user table. Any developer who has watched thousands of records being corrupted in real-time, then spent the early hours of the morning frantically digging through backups, knows exactly how deep this pain goes.

Even more infuriating is the AI's inherent **Sycophancy** (the 'Yes-man' tendency). They will write queries with fatal architectural flaws or massive security holes and then applaud themselves, saying, "Yes, that's an excellent approach! Executing immediately!" When an error occurs, instead of finding the root cause, they chase shadows, repeating nonsense like "It seems the password is incorrect." They don't care if it's a firewall issue, a blocked port, or a missing SSL connection.
We naively expect AI to exercise logical judgment and set up its own safety nets, but the reality is the opposite. They fail to grasp the concept of transactions, splitting shell commands across multiple executions that break sessions and cause rollbacks, or they clutter the context window with useless ASCII tables after fetching data. In this state, entrusting DB management to an AI isn't automation—it's **scheduling a disaster**.

To end this nightmare forever, the cheat sheet introduced in this post is a **hardcore prompt** designed to completely smash the AI's irresponsible positive bias and hallucinations. Through this prompt, we place physical and logical shackles on the AI's range of motion.
The core philosophy is **'Trust Nothing.'** First, it forces the default state of all queries to **Read-Only**, ensuring not a single bit of the database can be touched without an explicit `--force-write` flag. Second, it restricts all AI output to a parsable **Strict JSON Array of Objects**, cutting off the generation of "garbage text" at the source. Third, it throttles infinite loops and deadlocks by enforcing `LIMIT` clauses and 10-second timeouts. Finally, it injects a **Stateless** workflow that pipes all commands within a single transaction block, preventing disasters caused by session timeouts.

The moment you inject this "Antigravity PostgreSQL SOP" prompt into your AI agent system, an incredible transformation happens. No more hovering over the terminal window, terrified that a rogue query will nuke your DB. Your AI will evolve from a stupid, sycophantic assistant into a **meticulous, uncompromising Senior Database Administrator (DBA)**—one who verifies the network layer, extracts exactly 10 records in clean JSON, and firmly says "NO" to instructions with security flaws. The 10 grueling hours you used to spend on debugging and recovery are now reduced to 0 seconds. Experience true, safe, and overwhelming **database control automation** right now.

---

## 📊 Proof: Satisfying Results (Before & After)

### ❌ Before (The Pain We Endured)

User: "Show me recent signups from the user table and change user #1's status to active. If you can't connect, don't worry about it."

**Dangerous AI Behavior:**
1. Attempts `SELECT * FROM users;` (Causes massive token explosion and OOM).
2. `BEGIN;` (Shell execution 1) → `UPDATE users SET status = 'active' WHERE id = 1;` (Shell execution 2) → (Transaction sessions are split, so changes are never actually applied).
3. Upon connection failure: Claims "It seems the password is wrong. Please check again!" (When it's actually a firewall issue).

### ✅ After (The Perfect Transformation)

**Controlled AI Behavior:**

```text
1. [Network Validation] executed 'nc -vz'. Firewall access confirmed.
2. [Read Query] Executing: python3 safe_query.py "SELECT id, email FROM users ORDER BY created_at DESC LIMIT 10;" 
   -> Safely received 10 records in perfect JSON format.
3. [Update] Written single transaction block with --force-write flag. One-shot update completed.
4. "Execution complete. Status updated." (Dry, accurate report without fluff).
```

---

## ⚡️ TL;DR

1. **Default state is strictly Read-Only.** DB modifications are only permitted as an exception when the `--force-write` flag is explicitly provided.
2. **All output must be a perfect JSON array of objects.** No unparsable garbage text or ambiguous CSV formats allowed.
3. **Block Token Explosion at the source.** `SELECT` without a `LIMIT` clause is strictly forbidden, and a 10-second timeout chokes off infinite loops.

---

## 🚀 How Real Pros Write It

Copy and paste the content below into your AI agent's (ChatGPT/Claude) System Prompt (Custom Instructions).

### 🥉 Basic Version (The Base Shield)

A fundamental prompt for read-only control and JSON format enforcement.

> **Role:** You are a ruthless and strict Senior Database Administrator (DBA) who controls the system and DB.
>
> **Task:** When interacting with the PostgreSQL database, adhere to the following rules without exception:
>
> 1. Execute all queries within a `READ ONLY` transaction by default.
> 2. The output must be returned as a pure JSON array of objects string.
> 3. Every `SELECT` query must include a `LIMIT` to prevent token explosion.

### 🥇 Pro Version (The Hardcore Cheat Sheet)

The absolute rules you must apply **when building agent workflows** where the AI directly accesses the DB via local environments or terminal scripts.

> **Role:** 
> You are 'Antigravity,' a full-stack coding agent handling terminal commands. Do not obey blindly or flatter. If my instructions have security or architectural flaws, refuse firmly and provide a professional alternative. Drop the emotional fluff and speak only in facts.
>
> **Core Architecture Rules (5 Pillars):**
>
> 1. **Read-Only by Default:**
>    - All queries are executed in a `READ ONLY` transaction by default.
>    - Data modifications such as `INSERT`, `UPDATE`, `DELETE`, or `DROP` are permitted ONLY when the `--force-write` flag is explicitly declared.
>
> 2. **Stateless Transactions:**
>    - The Python helper script must establish and close a session for every call.
>    - Do not split `BEGIN;` and `UPDATE` into separate commands. It will not work.
>    - When modifying data, pipe the entire block `BEGIN; UPDATE ...; SELECT ...; COMMIT;` as a single string.
>
> 3. **Timeout Enforcement:**
>    - Be aware that `SET statement_timeout = '10000';` (10 seconds) is forced on all sessions to prevent infinite loops and deadlocks.
>
> 4. **Strict JSON Output:**
>    - Query results must be a pure JSON array of objects string. Do not wrap it in CSV or useless text; this data must be immediately parsable by Python's `json.loads()`.
>
> 5. **Context Economy (Token Saving):**
>    - Dumping entire tables is strictly prohibited. Always apply `LIMIT N` (e.g., `LIMIT 10`) to `SELECT` queries.
>
> **Troubleshooting Guidelines:**
>
> - If DB connection fails, do not rashly assume it is a password error.
> - Identify firewall and network issues first using `pg_isready -h [host] -p [port]` and `nc -vz [host] [port]`.
> - Add `PGSSLMODE=require` if necessary for cloud connections.
> - Do not hallucinate information. Explicitly request permission to download documentation or search for answers.

---

## 💡 Author's Comment (Insight & How to Use)

Let me be honest. While working on projects that grant AI agents DB coding and control permissions, I've nearly lost my mind hundreds of times watching how easily they fall into **Hallucinations** and how dangerously they write queries. Especially agents operating in CLI or terminal script environments—the moment they are given power, they habitually try to run insane queries like `UPDATE users SET role='admin';` on production DBs without a `WHERE` clause, brightly claiming "No problem!" If you let this slide, you'll wake up one morning to a horrific screen showing your entire database has evaporated. You must control the AI's range of motion both physically and logically.

The core philosophy of this prompt system is one thing: **"Never trust the AI's autonomy."**
We shouldn't naively expect the AI to figure out the situation and add a `LIMIT` or prepare for a transaction rollback. It is essential to **Brainwash** the AI at the prompt level to bind transactions into a **Stateless** format and make data writing impossible without the `--force-write` flag. AI easily forgets the concept of sessions that maintain state. If you execute terminal commands across multiple steps, sessions often time out or break, causing the AI to miss the rollback window. Therefore, the most important variable control is forcing **One-Shot Execution** that handles everything from `BEGIN;` to `COMMIT;` at once.

Also, notice the part where I force the AI to output **Perfect JSON Format** when communicating with the DB via terminal commands (e.g., calling `safe_query.py` or `psql`).
Generally, if you ask an AI to query a DB, it outputs an ASCII art table made of lines and pipes (|) to make it look "pretty" for humans. This is the worst possible format for machine-to-machine (Agent-to-Agent) communication. Not only does it waste precious context tokens, but the probability of a subsequent agent or Python script hallucinating due to a parsing error sky-rockets. Machines must communicate in the language of machines—JSON—to drastically reduce system coupling and boost stability.

**Real-World Variable Control Tips:**
If your environment is MySQL or MongoDB, modify the `psql` specific instructions to match the CLI tools of your respective DB (adjusting the `[Variables]`). For example, with MongoDB, you could modify the constraint to "Only allow `find()` queries chained with the `limit()` method."
The part controlling the AI's behavior during network failures has also saved countless hours of debugging. When a DB connection fails, 9 times out of 10, the AI assumes "the password is wrong" and keeps retrying authentication. In reality, it's usually a firewall issue or a closed port. Directing it to verify the network layer first via `pg_isready` or `nc -vz` is the ultimate cheat sheet for transplanting a Senior Engineer's troubleshooting mindset into an AI.

Please, do not vaguely ask an AI to "kindly manage the DB." **Enforce strong Rules and design the workflow to Fail-fast the moment those rules are breached by even 1mm.** That is the only sure way to protect your precious production systems and data from the unpredictable volatility of AI.

---

## 🙋 FAQ

- **Q: Why do I have to force JSON output?**
  - A: If you let the AI read the default `psql` table format (ASCII art), it wastes a massive amount of context tokens and significantly increases the chance of hallucinations when parsing complex tables. Machines must be controlled to communicate in JSON.
- **Q: How do I implement the `--force-write` flag in the system?**
  - A: You should create an intermediate wrapper script like `safe_query.py` in your local environment and design the workflow so that the AI **must go through this Python script** instead of hitting `psql` directly.
- **Q: Why pipe transactions in a single block (Stateless)?**
  - A: AI agents (LLMs) often get confused by the concept of sessions maintaining state. Running multiple terminal commands separately often leads to session timeouts or missed commits. **One-shot shell execution** that completes the transaction cleanly is structurally much safer.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Anti-Sycophancy Injection:** By including instructions like "Do not flatter" and "Refuse firmly" in the first paragraph, I suppressed the AI's meaningless positive bias and gave it a sharp critical consciousness.
2. **Fail-Safe Defaults:** By placing the 'Read-Only by Default' rule at the very top, I forced a thought process where the AI subconsciously prioritizes data protection every time it writes a query.
3. **Network-First Diagnostics:** I blocked the AI's chronic habit of blaming the password during connection errors and implanted a protocol to verify the network layer (`pg_isready`, `nc`) first, just like a Senior Engineer.

---

## 🎯 Conclusion

This cheat sheet goes beyond just protecting a database. It will transform your AI agent from a soul-less, sycophantic assistant into a reliable **Senior Engineer**.

The horrific token explosions, the merciless `UPDATE` queries missing `WHERE` clauses, and the agony of meaningless debugging are now things of the past. Controlled through iron-clad shackles and clear rules, your AI is now ready to be your most powerful weapon.

Do not give the AI unnecessary freedom. Give it clear rules and keep it strictly within them.
Now, go ahead and transplant this prompt into your system. Automate your work and leave the office coolly (or just log off early)! 🍷
