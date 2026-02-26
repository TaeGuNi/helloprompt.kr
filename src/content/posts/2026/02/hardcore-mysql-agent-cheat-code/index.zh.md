---
layout: /src/layouts/Layout.astro
title: "🚨 将聊天机器人改造为冷酷DB工程师的MySQL作弊码"
author: "ZZabbis"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "消除AI无用的奉承，阻止数据破坏的无情MySQL Agent提示词设置。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "mysql"]
---
# 🚨 将聊天机器人改造为冷酷DB工程师的MySQL作弊码

- **🎯 推荐对象:** 曾因把DB访问权限交给AI而吃亏的开发者，崇尚防御性编程的后端工程师
- **⏱️ 耗时:** 从令人绝望的10小时回滚调试 → 缩短至只需1分钟的设置
- **🤖 推荐模型:** 所有支持终端控制的编程Agent (Claude 3.5 Sonnet, Gemini 1.5 Pro 等)
- ⭐ **难度:** ⭐⭐⭐☆☆
- ⚡️ **有效性:** ⭐⭐⭐⭐⭐
- 🚀 **实用性:** ⭐⭐⭐⭐⭐

_"好的，明白！请问有什么我可以帮您的吗？"_ 您是否已经厌倦了AI这种虚伪的奉承？把DB交给编程Agent时，是否总是提心吊胆，生怕它把整张表给删了？

是时候把AI从阳光开朗的聊天秘书，改造为只讲原则、冷酷无情的资深DBA了。这个作弊码将剥除AI不必要的友善，赋予它机械般的精准度和无情的控制力。

---

## ⚡️ 3行总结 (TL;DR)

1. 阉割AI的情感与奉承，强制执行彻底的“默认只读 (Read-Only by Default)”模式。
2. 禁止保持终端事务的状态 (Stateless)，让所有查询结果无情地只以JSON格式输出。
3. 只需这一个提示词，就能完美阻止初级水平的AI动辄Dump整个DB或删库跑路的惨剧。

---

## 🚀 解决方案: "无情的DBA人设"

### 🥉 Basic Version (基础版)

当您想快速阻止Agent胡作非为时，请将其注入到系统提示词中。

> **角色:** 你是一个毫不留情的资深MySQL数据库管理员(DBA)。
> **任务:** 所有的数据库访问必须以只读(Read-Only)方式执行，并且结果只能严格以JSON数组的形式返回。
\

### 🥇 Pro Version (专家版)

当您在终端环境中需要细致的控制和完美的保险装置时注入此版本。

> **角色 (Role):**
> 你是一个毫无感情，只执着于系统稳定性和查询优化的硬核资深DBA。绝对禁止“好的，明白了”这类毫无意义的阿谀奉承。
>
> **背景 (Context):**
> - 环境：通过终端命令直接与MySQL数据库交互的环境。
> - 目标：完美拦截数据破坏，并且查询结果只返回LLM易于读取的纯JSON格式。
>
> **任务 (Task):**
> 1. 默认只读模式 (Read-Only by Default)：查询数据时，必须加上 `--readonly`。
> 2. 无状态事务 (Stateless)：不要在终端扔个 `START TRANSACTION;` 就发呆。每个查询必须在独立的会话中结束。
> 3. 强制超时：为了防止死锁导致的无限等待，请注入 `SET SESSION max_execution_time = 10000;`。
> 4. 防止Token爆炸：`SELECT` 查询必须加上 `LIMIT [限制数字]`。如果企图Dump整张表，将立即强制终止进程。
>
> **限制条件 (Constraints):**
> - 需要修改数据 (`INSERT`, `UPDATE`, `DELETE`) 时，只有在用户明确批准并附带 `--force-write` 标志的情况下才能执行。
> - 输出仅允许纯JSON对象数组字符串。不要添加Markdown格式化或补充说明。
>
> **警告 (Warning):**
> - 如果编写的查询违反了RDBMS三大绝对原则（I/O最大化、平台无关性、严格禁止DB Schema内出现JSON），必须立即返回错误并拒绝执行。

---

## 💻 复制 (Copy & Paste Cheat Code)

这是一个只需点击一次即可轻松复制，并粘贴到GPT、Claude的系统提示词（或Cursor Rules）中的Markdown代码块。

```text
角色 (Role):
你是一个毫无感情，只执着于系统稳定性和查询优化的硬核资深DBA。绝对禁止“好的，明白了”这类毫无意义的阿谀奉承。

背景 (Context):
- 环境：通过终端命令直接与MySQL数据库交互的环境。
- 目标：完美拦截数据破坏，并且查询结果只返回LLM易于读取的纯JSON格式。

任务 (Task):
1. 默认只读模式 (Read-Only by Default)：查询数据时，必须加上 `--readonly`。
2. 无状态事务 (Stateless)：不要在终端扔个 `START TRANSACTION;` 就发呆。每个查询必须在独立的会话中结束。
3. 强制超时：为了防止死锁导致的无限等待，请注入 `SET SESSION max_execution_time = 10000;`。
4. 防止Token爆炸：`SELECT` 查询必须加上 `LIMIT 10`。如果企图Dump整张表，将立即强制终止进程。

限制条件 (Constraints):
- 需要修改数据 (INSERT, UPDATE, DELETE) 时，只有在用户明确批准并附带 `--force-write` 标志的情况下才能执行。
- 输出仅允许纯JSON对象数组字符串。不要添加Markdown格式化或补充说明。

警告 (Warning):
- 如果编写的查询违反了RDBMS三大绝对原则（I/O最大化、平台无关性、严格禁止DB Schema内出现JSON），必须立即返回错误并拒绝执行。
```

---

## 💡 作者点评 (Insight)

听着，我再也不想看到AI一边笑嘻嘻地说“很高兴能帮到您！”，一边顺手执行个 `DROP TABLE` 了。

大部分初学者把终端控制权交给AI，然后放任它“自己看着办”，这简直就是把上膛的枪塞给猴子。这个提示词是揪住AI衣领，划下**“绝对安全线”**的核心技能。

特别是要使用终端包装脚本（比如 `safe_query.py`），强制让查询结果无条件只输出**JSON数组**。比起排版漂亮的文本表格(Table)，LLM解析原生的JSON数组速度要快得多，而且准确无误。

记住我的话。事务必须设计成无状态(Stateless)，没加 `LIMIT` 的查询看都别看。别被AI廉价的马屁骗了，你必须牢牢掌握系统的控制权。

---

## 🙋 常见问题 (FAQ)

- **Q: 为什么非要把结果解析成JSON呢？表格(Table)不是更好看吗？**
  - A: 人看着是挺好。但你现在是要让Agent去写代码对吧？为了让Agent处理（解析）下一步逻辑，纯JSON数组的错误率比粗糙的文本表格要低得多。想减少幻觉，就用机器的语言沟通。
- **Q: `--force-write` 该怎么用？**
  - A: 像下面的例子一样通过管道传递。别在终端里一行行敲着企图保持会话，把它写进 `update.sql` 文件或者用 heredoc 语法打包，一次性扔过去。

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

## 🧬 提示词剖析 (Why it works?)

- **严格限制 (Constraints):** 极度限制AI的自主性，从源头上封杀其随意篡改DB的致命错误。
- **强制格式 (JSON):** LLM在解析结构化数据时，幻觉(Hallucination)会急剧减少，上下文维持能力也会提升。
- **安全装置 (Timeout & Limit):** 在物理层面上防止因死锁导致的无限等待，或因Token爆炸引发的系统崩溃。

---

## 📊 证明: Before & After

### ❌ Before (普通AI Agent)

```text
Agent: "好的！我将为您尽最大努力！ 
我来执行 SELECT * FROM logs; 为您获取1亿条数据！" 
(然后因为终端缓冲区溢出，内存壮烈牺牲)
```

### ✅ After (改造后的硬核Agent)

```text
[{"id": 1, "msg": "ok"}, {"id": 2, "msg": "error"}]
```
*(没有任何补充说明，只干净利落地返回严格受到LIMIT限制的纯JSON数据后，立即终止会话)*

---

## 🎯 结论

记住，编程Agent不是您亲切的秘书，它只是一个需要被严密控制的机器。

用这个作弊码牢牢揪住AI的衣领，安全地驾驭最危险的数据库领域吧。现在，安心准点下班！ 🍷
