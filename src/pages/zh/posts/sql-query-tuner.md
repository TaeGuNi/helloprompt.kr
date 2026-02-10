---
layout: /src/layouts/Layout.astro
title: "慢得要死的 SQL 查询，3 秒调优的秘诀"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "编码/开发"
description: "分析复杂且低效的 SQL 查询，优化性能并推荐索引的提示词。"
tags: ["SQL", "DB调优", "查询优化", "数据库"]
---

# 📝 慢得要死的 SQL 查询，3 秒调优的秘诀

**🎯 推荐对象:** 所有人
**⏱️ 所需时间:** 5 分钟
**🤖 推荐模型:** 所有 AI 模型

|  难度   |   有效性   |  实用性   |
| :-----: | :--------: | :-------: |
| ⭐⭐☆☆☆ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_“数据稍微多一点，查询就要花 5 秒...”_

起初很快的查询，随着数据增加变成了乌龟。
看执行计划 (Explain Plan) 也是黑的是字白的是背景，感到茫然吗？
给 AI 看查询，它会找出低效的部分，并进行魔法般的索引推荐。

---

## ⚡️ 3 行总结 (TL;DR)

1. 改善低效的连接 (Join) 和子查询
2. 推荐必要的索引 (Index)
3. 用可读性好的现代 SQL 语法重写

---

## 🚀 解决方案：“SQL 查询调优器”

### 🥉 Basic Version (基础版)

当你只需要快速结果时使用。

> **角色:** 你是 20 年经验的首席 DBA (Database Administrator) 兼 SQL 调优专家。
> **请求:** 请制作分析复杂且低效的 SQL 查询，优化性能并推荐索引的提示词。

<br>

### 🥇 Pro Version (专家版)

当你需要详细质量时使用。

请复制以下 **PROMPT** 内容使用。

> **角色 (Role):** 你是 20 年经验的首席 DBA (Database Administrator) 兼 SQL 调优专家。
>
> **情况 (Context):** 我应用程序中使用的 SQL 查询随着数据量增加正在引起性能下降。
>
> **任务 (Task):**
> 分析下面提供的 SQL 查询，执行以下作业:
>
> 1. **问题诊断:** 指出当前查询中可能引发性能下降的部分 (Full Table Scan 等)。
> 2. **查询优化:** 重写为返回相同结果但运行效率更高的查询。
> 3. **索引推荐:** 为了最大化查询性能，请用 `CREATE INDEX` 语句建议应该在哪个列上建立索引。
>
> **使用中的 DB:** `[MySQL / PostgreSQL / Oracle / MS-SQL]`
>
> **对象查询:**
>
> ```sql
> [请在此处粘贴慢查询]
> ```
>
> **约束事项 (Constraints):**
>
> - 现有查询的结果数据集绝对不能变更。
> - 请简单解释一下为什么变快了的运行原理。

---

## 🧬 提示词解剖 (Why it works?)

---

## 📊 证明: Before & After

### ❌ Before (输入查询)

```sql
SELECT * FROM users
WHERE id IN (SELECT user_id FROM orders WHERE price > 10000);
```

_问题点: 子查询可能每行都执行 (Dependent Subquery)。_

### ✅ After (结果)

**优化后的查询 (使用 JOIN):**

```sql
SELECT DISTINCT u.*
FROM users u
INNER JOIN orders o ON u.id = o.user_id
WHERE o.price > 10000;
```

**推荐索引:**

```sql
CREATE INDEX idx_orders_price_userid ON orders(price, user_id);
```

_说明: 将子查询更改为 JOIN 进行优化，并创建复合索引以便用 `price` 过滤后用 `user_id` 进行连接。_

---

## 🎯 结论

虽然有话说“调优是艺术”，但现在是可以获得 AI 帮助的‘科学’。
别因为慢查询受苦，接受 AI DBA 的免费咨询吧！🍷
