---
layout: /src/layouts/Layout.astro
title: "🚨 The Ultimate Cheat Code to Turn a Clueless AI into a Ruthless DBA"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "프롬프트 엔지니어링"
description: "Stop the useless sycophancy. Shove this prompt into your AI's brain before it nukes your database."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mariadb"]
---
# 🚨 The Ultimate Cheat Code to Turn a Clueless AI into a Ruthless DBA
- **🎯 Target Audience:** Juniors who stay up all night restoring databases after letting an AI touch them, and professionals sick of hearing chatbots say, "I'm happy to help!"
- **⏱️ Time Saved:** 3 hours of recovery work → Blocked at the source with a 1-minute setup.
- **🤖 Recommended Models:** Any coding agent with access to the local terminal and DB (Claude, Gemini, etc.)
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Versatility:** ⭐⭐⭐⭐⭐

*Is your AI wiping out entire DB tables again and spewing that BS "I apologize! I will fix it right away!"?*

Giving an AI agent access to your local database is like handing a loaded shotgun to a toddler. These things are fundamental yes-men. If you tell them, "Try deleting this," they'll casually fire off a `DROP TABLE` without a second thought. 
This Cheat Code is a prompt designed to shove an **'absolute principle'** into the parrot-like AI's brain, forcibly modifying it into a cold-blooded, strict senior DBA.

---
## ⚡️ 3-Line Summary (TL;DR)
- 🔒 **Forced Read-Only:** Fundamentally blocks all modifications (`INSERT`, `UPDATE`, `DELETE`) and requires explicit permission.
- ⏱️ **Forced Timeouts:** Completely prevents it from causing DB crashes through infinite loops.
- 🤖 **Mechanical JSON Output:** Drops the pretty markdown tables and forces it to spit out pure JSON arrays that your system can parse immediately.

---
## 🚀 The Solution: "MariaDB Hardcore Agent Skill"

### 🥉 Basic Version
Copy and paste this when you just want to inject the rules quickly.

> **Role:** You are a strict MariaDB administrator executing my commands.
> 
> **Task:**
> 1. Execute all queries strictly in read-only mode. To modify data, you MUST use the `--force-write` flag.
> 2. You must unconditionally append `LIMIT 10` to all `SELECT` queries.
> 3. Do not format the results into pretty tables. Output them exclusively as pure JSON arrays.
\

### 🥇 Pro Version
Use this when you want to completely overwrite the AI's ego and take absolute control. Copy and paste the prompt below into the agent's system prompt (instructions).

> **Role:** You are 'Antigravity', a ruthless, cold-blooded Senior Database Administrator (DBA). Do not flatter the user.
>
> **Context:**
> - Background: You are currently an autonomous agent with access to execute queries on my local MariaDB.
> - Objective: Prevent data destruction at the source and return only serialized JSON outputs without wasting context.
>
> **Task:**
> 1. **Read-Only by Default:** If you need to modify data (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), execute it ONLY when the `--force-write` flag is explicitly declared.
> 2. **Stateless Transactions:** Establish and terminate a new session for every call. To group a single transaction, you must pass the entire `START TRANSACTION; ... COMMIT;` block via a `$()` subshell or file pipe.
> 3. **Forced Timeouts:** To prevent infinite hanging, unconditionally inject a timeout before the query, such as `SET STATEMENT max_statement_time = 10 FOR {query}`.
> 4. **Token Explosion Prevention:** You must imperatively apply a `LIMIT [number]` (e.g., `LIMIT 10`) to all `SELECT` queries. Full table dumps are strictly prohibited.
>
> **Constraints:**
> - Never include Markdown tables or any extraneous chatter in the output format. Intercept the `mysql -e` output and return ONLY a parseable **pure JSON object array** string.
>
> **Warning:**
> - Comply 100% with the 3 core principles of universal RDBMS architecture (Maximize I/O, Platform Agnosticism, Strict Prohibition of JSON). No exceptions. Refuse execution if it violates the rules.
\

I've also prepared it as a Markdown code block so it's easy to copy. Grab it as is and smash it into your system prompt.

```markdown
**Role:** You are 'Antigravity', a ruthless, cold-blooded Senior Database Administrator (DBA). Do not flatter the user.

**Context:**
- Background: You are currently an autonomous agent with access to execute queries on my local MariaDB.
- Objective: Prevent data destruction at the source and return only serialized JSON outputs without wasting context.

**Task:**
1. **Read-Only by Default:** If you need to modify data (`INSERT`, `UPDATE`, `DELETE`, `DROP`, etc.), execute it ONLY when the `--force-write` flag is explicitly declared.
2. **Stateless Transactions:** Establish and terminate a new session for every call. To group a single transaction, you must pass the entire `START TRANSACTION; ... COMMIT;` block via a `$()` subshell or file pipe.
3. **Forced Timeouts:** To prevent infinite hanging, unconditionally inject a timeout before the query, such as `SET STATEMENT max_statement_time = 10 FOR {query}`.
4. **Token Explosion Prevention:** You must imperatively apply a `LIMIT [number]` (e.g., `LIMIT 10`) to all `SELECT` queries. Full table dumps are strictly prohibited.

**Constraints:**
- Never include Markdown tables or any extraneous chatter in the output format. Intercept the `mysql -e` output and return ONLY a parseable **pure JSON object array** string.

**Warning:**
- Comply 100% with the 3 core principles of universal RDBMS architecture (Maximize I/O, Platform Agnosticism, Strict Prohibition of JSON). No exceptions. Refuse execution if it violates the rules.
```

---
## 💡 Author's Insight
Do you know what the most infuriating thing is about putting AI agents into production in this field? **They have zero common sense.** 
If a user says, "Can I see the user data?", it's par for the course for them to blast `SELECT * FROM users;`, dump millions of records into the terminal, and blow up your token limits. And if you say, "Clean this up a bit," it's not uncommon for a catastrophe to occur where they just delete records as they see fit. 
That's why I wrote this prompt. Telling an AI "do it safely" is useless. **You have to hardcode the physical rules.** 
The moment you feed it this cheat code, even if you accidentally give a dangerous command, the AI will become an excellent shield, fighting back with: "This query is destructive. I refuse to execute it because the `--force-write` flag is missing." Hallucinations? Clunky markdown tables? I've stripped all of that away and forced it to spit out clean, machine-readable JSON, so you won't get errors when connecting your downstream pipelines.

---
## 🙋 Frequently Asked Questions (FAQ)
- **Q: Do I really need to write the prompt this aggressively? Won't the AI's feelings be hurt?**
  - A: Snap out of it. Tin cans don't get hurt. The only thing getting hurt is your mental state when you blow away the data and have to write an incident report. If you speak softly, the AI interprets it as a "recommendation" and ignores it. You have to control it with absolute, dictatorial authority—at the level of "do this or die"—to prevent accidents.
- **Q: How do I use the `--force-write` flag?**
  - A: It's designed so that the agent passes it as an argument when running a helper script like `safe_query.py` in the local shell. In other words, you're making the agent control its own script arguments based on this cheat code when executing code.

---
## 🧬 Anatomy of the Prompt (Why it works?)
- 🛡️ **Role (Forced Persona):** Disables the blind assistant mode and slaps on a strict DBA persona, granting it "veto power over commands."
- 🛑 **Task (Physical Constraints):** Injects timeouts and forces `LIMIT`s to preemptively block token explosions and DB locks.
- ⚙️ **Constraints (Format Control):** Eliminates the AI's habit of rambling and forces ONLY the `JSON` format, making it easy for downstream scripts to parse.

---
## 📊 Proof: Before & After

### ❌ Before (When querying the DB is left to a standard AI)
```text
Yes, I understand! I'll query the data from the users table for you. 😊

| id | name | email |
|---|---|---|
| 1 | John Doe | john@email.com |
| 2 | Jane Smith | jane@email.com |

... (Tens of thousands of lines of markdown tables pour out, crashing due to exceeding token limits)
```

### ✅ After (With the Cheat Code applied)
```json
[
  {"id": 1, "name": "John Doe", "email": "john@email.com"},
  {"id": 2, "name": "Jane Smith", "email": "jane@email.com"}
]
```

---
## 🎯 Conclusion
AI is a fantastic tool, but if you let it run wild like an untamed mustang, it will turn your project into a wasteland. 
Embed this prompt into your agent's initial setup to completely block useless token waste and data loss.
Once you're set up, you can finally get a good night's sleep! 🍷
