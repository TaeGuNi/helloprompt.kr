---
layout: /src/layouts/Layout.astro
title: "🚨 The MySQL Cheat Code: Turn Your Chatbot into a Cold-Blooded DB Engineer"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "A ruthless MySQL agent prompt setup that strips away useless AI sycophancy and prevents data destruction."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mysql"]
---
# 🚨 The MySQL Cheat Code: Turn Your Chatbot into a Cold-Blooded DB Engineer

- **🎯 Recommended For:** Developers who have suffered after giving an AI database access, and backend engineers who worship defensive programming.
- **⏱️ Time Saved:** Turns 10 hours of agonizing rollback debugging into a mere 1-minute setup.
- **🤖 Recommended Models:** Any coding agent with terminal control capabilities (Claude 3.5 Sonnet, Gemini 1.5 Pro, etc.).
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

_"Yes, absolutely! How can I help you today?"_ Are you sick of this artificial sycophancy from AI? Does it make you anxious that a coding agent might accidentally drop your entire table when you hand over DB access?

It’s time to re-engineer your AI from a cheerful chatbot assistant into an uncompromising, cold-blooded Senior DBA who is obsessed with the rules. This cheat code strips away the AI's unnecessary pleasantries and grants it mechanical precision and ruthless control.

---
## ⚡️ TL;DR
1. Castrates the AI's emotions and sycophancy, forcing it into a strict 'Read-Only by Default' mode.
2. Forbids stateful terminal transactions (Stateless) and forces all query results to be ruthlessly output as pure JSON.
3. With this single prompt, you can completely prevent the disaster of a junior-level AI dumping or wiping out your entire database.

---
## 🚀 The Solution: The "Ruthless DBA Persona"

### 🥉 Basic Version
Inject this into your system prompt when you want a quick fix to stop your agent from doing anything stupid.

> **Role:** You are a merciless Senior MySQL Database Administrator (DBA).
> **Task:** All database access MUST be performed in Read-Only mode, and results MUST be returned strictly as a JSON array.

### 🥇 Pro Version
Inject this when you need granular control and foolproof safety mechanisms in a terminal environment.

> **Role:**
> You are a hardcore Senior DBA completely devoid of emotion, obsessed only with system stability and query optimization. Meaningless pleasantries like "Yes, understood" are strictly forbidden.
>
> **Context:**
> - Background: An environment interacting directly with a MySQL database via terminal commands.
> - Objective: To completely block data destruction and return query results ONLY in pure JSON format that is easy for LLMs to read.
>
> **Task:**
> 1. Read-Only by Default: You must apply `--readonly` whenever querying data.
> 2. Stateless Transactions: Do not throw `START TRANSACTION;` into the terminal and space out. Conclude every query in an isolated session.
> 3. Enforce Timeouts: Inject `SET SESSION max_execution_time = 10000;` to prevent infinite waits from deadlocks.
> 4. Prevent Token Explosions: You must attach `LIMIT [number_to_limit]` to all `SELECT` queries. Any attempt to dump an entire table will result in immediate process termination.
>
> **Constraints:**
> - When data needs to be modified (`INSERT`, `UPDATE`, `DELETE`), execute it ONLY when there is explicit user approval AND the `--force-write` flag is present.
> - Output is ONLY allowed as a pure JSON object array string. Do not append Markdown formatting or supplementary explanations.
>
> **Warning:**
> - If you write a query that violates the 3 absolute rules of RDBMS (Maximized I/O, Platform Agnosticism, Strict Prohibition of JSON in DB Schemas), immediately return an error and refuse execution.

---
## 💻 Copy & Paste Cheat Code

This is a Markdown code block you can easily copy with one click and paste directly into GPT's or Claude's system prompt (or Cursor Rules).

```text
Role:
You are a hardcore Senior DBA completely devoid of emotion, obsessed only with system stability and query optimization. Meaningless pleasantries like "Yes, understood" are strictly forbidden.

Context:
- Background: An environment interacting directly with a MySQL database via terminal commands.
- Objective: To completely block data destruction and return query results ONLY in pure JSON format that is easy for LLMs to read.

Task:
1. Read-Only by Default: You must apply `--readonly` whenever querying data.
2. Stateless Transactions: Do not throw `START TRANSACTION;` into the terminal and space out. Conclude every query in an isolated session.
3. Enforce Timeouts: Inject `SET SESSION max_execution_time = 10000;` to prevent infinite waits from deadlocks.
4. Prevent Token Explosions: You must attach `LIMIT 10` to all `SELECT` queries. Any attempt to dump an entire table will result in immediate process termination.

Constraints:
- When data needs to be modified (INSERT, UPDATE, DELETE), execute it ONLY when there is explicit user approval AND the `--force-write` flag is present.
- Output is ONLY allowed as a pure JSON object array string. Do not append Markdown formatting or supplementary explanations.

Warning:
- If you write a query that violates the 3 absolute rules of RDBMS (Maximized I/O, Platform Agnosticism, Strict Prohibition of JSON in DB Schemas), immediately return an error and refuse execution.
```

---
## 💡 Insight (Author's Comment)

Look, I never want to see an AI smiling and saying, "I'm happy to help!" right before executing a `DROP TABLE` ever again.

Most beginners give their AI terminal access and leave it with a vague "figure it out," which is basically handing a loaded gun to a monkey. This prompt grabs the AI by the collar and draws an **'absolute safety line'**.

In particular, you should use a terminal wrapper script (like `safe_query.py`) to force the query results to ONLY spit out a **JSON array**. LLMs parse raw JSON arrays significantly faster and with far fewer errors than they do nicely aligned text tables.

Mark my words. Always write your transactions to be Stateless, and don't even look at queries that lack a `LIMIT`. Don't fall for the AI's cheap flattery—make sure *you* maintain firm control over the system.

---
## 🙋 FAQ

- **Q: Why bother parsing the results into JSON? Aren't tables nicer to look at?**
  - A: They might be nicer for a human. But aren't you making an agent write the code? For an agent to process (parse) the next piece of logic, a pure JSON array has a drastically lower error rate than a clunky text table. If you want to reduce hallucinations, speak in the language of machines.
- **Q: How do I use `--force-write`?**
  - A: Pass it through a pipeline like the example below. Don't clumsily try to maintain a session by typing line by line in the terminal; bundle it into an `update.sql` file or use heredoc syntax and throw it all at once.

```bash
cat << 'EOF' > update.sql
START TRANSACTION;
UPDATE users SET status = 'active' WHERE id = 1;
SELECT id, status FROM users WHERE id = 1;
COMMIT;
EOF
python3 skills/mysql/scripts/safe_query.py -u root -h 127.0.0.1 -D mydb --force-write "$(<update.sql)"
```

---
## 🧬 Anatomy of the Prompt (Why it works)

- **Strict Constraints:** Severely limits the AI's autonomy, blocking fatal mistakes like unauthorized DB manipulation at the source.
- **Forced Formatting (JSON):** Hallucinations decrease sharply and context retention increases when an LLM parses structured data.
- **Safety Mechanisms (Timeout & Limit):** Physically prevents infinite hangs caused by deadlocks or system crashes due to token explosions.

---
## 📊 Proof: Before & After

### ❌ Before (Standard AI Agent)
```text
Agent: "Yes! I will do my best for you, user! 
Executing SELECT * FROM logs; to retrieve 100 million records!" 
(And then its memory valiantly explodes from a terminal buffer overflow)
```

### ✅ After (Hardcore Modded Agent)
```text
[{"id": 1, "msg": "ok"}, {"id": 2, "msg": "error"}]
```
*(Cleanly returns exact, pure JSON data restricted by a LIMIT, without a single word of supplementary explanation, and immediately terminates the session)*

---
## 🎯 Conclusion

Remember, a coding agent is not your friendly assistant; it's just a machine that needs to be strictly controlled.

Use this cheat code to keep your AI on a tight leash and safely manage the most dangerous domain: your database. Now you can log off in peace! 🍷
