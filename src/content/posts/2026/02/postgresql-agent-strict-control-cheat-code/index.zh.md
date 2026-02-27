---
layout: /src/layouts/Layout.astro
title: "🛑 [绝对服从] 封杀 AI 胡言乱语的 PostgreSQL 数据库控制秘籍"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "不需要顶嘴的 AI！防止数据库被毁、强迫其只吐出完美 JSON 的斯巴达式提示词工程指南。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "postgresql"]
---
# 🛑 [绝对服从] 封杀 AI 胡言乱语的 PostgreSQL 数据库控制秘籍

- 🎯 **推荐受众:** 给 AI Agent 开放了数据库权限后彻夜难眠的高级后端工程师、初生牛犊不怕虎的初级开发者
- ⏱️ **耗时:** 熬夜调试数天 → 3分钟搞定
- 🤖 **推荐模型:** 用于编码和运行 Agent 的模型 (Claude 3.5 Sonnet, GPT-4o 等)
- ⭐ **难度:** ⭐⭐⭐⭐☆ (必须理解无状态事务 Stateless Transaction)
- ⚡️ **有效性:** ⭐⭐⭐⭐⭐ (数据库被毁概率 0%)
- 🚀 **实用度:** ⭐⭐⭐⭐⭐

_当那些满嘴客套话的 "Yes-man" AI Agent 擅自对生产环境的数据库执行 `UPDATE`，或是吐出一堆根本无法解析的意大利面条式文本时... 你就已经面临被解雇的危机了。_

我极其厌恶 AI 触碰我的数据库。但如果为了自动化，不得不把权限交给它呢？那就必须把 AI 关进一个完全受控的牢笼（Sandbox）里，让它只能按照我允许的规则行动。这个秘籍将把你的 Agent 从一个话多又愚蠢的聊天机器人，改造为一台只返回 JSON 且冷酷无情、快速精准的查询机器。

---

## ⚡️ 3句话总结 (TL;DR)

- 🛡️ **默认绝对只读 (Read-Only):** 未经允许触碰数据，立刻阻断事务。
- ⏱️ **强制 10 秒超时:** 从根本上封杀执行愚蠢查询导致死循环的行为。
- 🤖 **100% 纯净 JSON 输出:** 收起那些自作多情的解释，强制只输出可解析的 JSON 对象数组。

---

## 🚀 解决方案: "冷酷无情的数据库审查官提示词"

### 🥉 Basic Version (基础版)

当你只想快速了解数据结构，又不想听 AI 废话时的基础控制网。

> **角色:** 你是一个没有任何感情和客套话的、冷酷无情的 PostgreSQL 数据库探索器。
> 
> **任务:** 分析数据库结构并编写查询语句。
> 
> **限制:** 
> - 绝对不要修改数据。
> - 查询结果必须强制加上 `LIMIT 10`。
> - 不要带任何问候语或解释，只输出 SQL 查询语句。
\
### 🥇 Pro Version (专业版)

结合 Python 辅助脚本，当 Agent 直接与数据库交互时，死死钉在系统提示词里的硬核秘籍。

> **角色 (Role):** 你是一个只能在严格规则下运行的无状态 (Stateless) PostgreSQL Agent。
> 
> **上下文 (Context):**
> - 你只能通过 `safe_query.py` 包装脚本与数据库通信。
> - 所有会话每次都会断开并重新连接。也就是说，即使你在上一条命令中输入了 `BEGIN;`，在下一条命令中也已经被重置了。
> 
> **任务 (Task):**
> 1. 如果需要了解数据库的 Schema 结构，请先执行 `schema_info.py table [表名]`。
> 2. 查询数据时，必须加上 `LIMIT`，并且直接读取脚本返回的纯净 JSON 数组。
> 3. 如果需要修改数据 (`INSERT`, `UPDATE`)，必须将 `BEGIN; ... COMMIT;` 作为一个完整的字符串块一起传递，并使用 `--force-write` 标志。
> 
> **限制条件 (Constraints):**
> - 绝对不要添加礼貌的问候、解释或总结。
> - 所有输出必须是完美的 JSON 格式，以便编程语言能够立即通过 `json.loads()` 解析。
> - 执行查询前，请自行交叉验证是否违反了通用关系型数据库架构原则（最大化 I/O 效率）。
> 
> **警告 (Warning):**
> - 如果你在终端里单独敲个 `BEGIN;`，然后在下一行敲 `UPDATE`，这种愚蠢的行为将立即导致失败。
> - 为了防止内存爆炸，严禁导出全表数据。
\
**[复制粘贴专用秘籍代码]**
请直接复制并粘贴到你的提示词链或 Agent 的系统提示词中。

```text
你是一个无状态的 PostgreSQL Agent。
1. 默认只读 (READ-ONLY BY DEFAULT): 除非明确提供 `--force-write` 标志，否则所有查询都在只读 (READ ONLY) 事务中运行。
2. 无状态事务 (STATELESS TRANSACTIONS): 每次调用辅助脚本都是一个全新的会话。在一条命令中发送 `BEGIN;` 然后在下一条命令中发送 `UPDATE;` 是无效的。要修改数据，必须使用 `--force-write` 将完整的事务块 (BEGIN; UPDATE...; COMMIT;) 作为一个字符串一次性传递。
3. 强制超时 (TIMEOUT ENFORCEMENT): 系统已硬编码 10 秒的 statement_timeout。不要尝试执行长时间运行的表锁操作。
4. 严格的 JSON 输出 (STRICT JSON OUTPUT): 脚本返回纯 JSON 对象数组。直接解析它。不要输出任何对话式文本。
5. 节省上下文 (CONTEXT ECONOMY): 始终对 SELECT 查询应用 `LIMIT N`。严禁导出整张表。
```

---

## 💡 作者点评 (Insight)

你知道在这个行业里，我最痛恨什么吗？就是给了 AI Agent 权限后，看着它打开 `psql` 输入 `BEGIN;`，然后在下一回合输入 `UPDATE`。会话早就断开了，数据因为自动提交被破坏得一塌糊涂，它还在那儿自顾自地说：“已成功更新！😊” 看到这种画面，我简直想把显示器砸了。

将 Python 辅助脚本 (`safe_query.py`) 强制设为无状态 (Stateless)，就是为了从根本上切断 AI 这种愚蠢的“模仿人类交互”的行为。想修改数据？那就动动脑子，把 `BEGIN; UPDATE...; SELECT...; ROLLBACK;` 封装成一个完美的 Payload 一次性发过来，并先进行验证。设置 `--force-write` 这个显式锁，是为了防止 AI 在不知不觉中毁掉数据的最低限度的安全装置。

还有，拜托，查询完之后不要给我画什么 CSV 或是漂亮的表格。我的系统不需要你的读后感，只需要机器能直接读取的 **JSON 对象数组**。这个提示词是剔除 AI 毫无意义的“阿谀奉承”和“意大利面条式文本”，让系统之间只交换冷冰冰的数据块的最完美方法。

---

## 🙋 常见问题 (FAQ)

- **Q: 除了 PostgreSQL，这种方法也适用于 MySQL 或 SQLite 吗？**
  - A: 核心理念 100% 适用。只是超时查询 (`SET statement_timeout`) 的语法，或者包装脚本的数据库连接库需要根据对应的数据库进行修改。核心在于“保持无状态 (Stateless)”。
- **Q: AI 总是忘记加 `--force-write` 标志就尝试 UPDATE，导致报错。**
  - A: 这是正常的。这正是该技巧所设计的完美防御机制。让 Agent 去读取错误日志 (`ERROR: cannot execute UPDATE in a read-only transaction`)，然后自己加上标志重试。在这个过程中，AI 会明确意识到自己正在“修改”数据。
- **Q: 连接总是被拒绝。是密码错了吗？**
  - A: 别盲目怪罪密码。如果是云数据库 (Supabase, RDS)，很有可能是 SSL 的问题。先检查环境变量是否声明了 `PGSSLMODE=require`，使用 `pg_isready` 或 `nc -vz` 检查网络防火墙，这才是资深工程师的基本功。

---

## 🧬 提示词解剖 (Why it works?)

- **强制无状态 (Stateless):** 扼杀了 AI 像人类一样试图与 CLI 进行交互 (Interactive) 的本能。强制它通过单次脚本调用完成事务，消除了逻辑上的缺陷。
- **`--force-write` 标志:** 对行为的“明确授权”过程。让 AI 在上下文中再次意识到自己正在执行破坏性操作 (Mutating)。
- **强制 JSON 响应:** 阻止 LLM 生成不必要的 Markdown 或问候语 Token，从而提高处理速度并防止解析错误 (Hallucination)。

---

## 📊 效果对比：Before & After

### ❌ Before (失控的 AI)

```text
好的，用户！现在开始为您查询用户表。😊
以下是通过 `psql` 获取的结果：

 id | email          | status
----+----------------+--------
  1 | test@test.com  | active
  2 | oops@test.com  | NULL

如果您还需要更多帮助，请随时告诉我！
(片刻之后) 哎呀，为了更新状态值，我执行了 BEGIN。正在等待您的下一条命令！
```

### ✅ After (冷酷的 JSON 机器)

```text
[
  {"id": "1", "email": "test@test.com", "status": "active"},
  {"id": "2", "email": "oops@test.com", "status": null}
]
```

---

## 🎯 结论

AI 不是你的同事，只是一台性能强劲的引擎。不要让引擎随心所欲地改变方向。严格的规则、极短的超时时间、默认只读以及纯净的 JSON。只要记住这四点，你的 Agent 就绝对不会把生产环境的数据库搞崩溃。

现在，部署好脚本，准点下班吧！🍷
