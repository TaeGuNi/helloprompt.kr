---
layout: /src/layouts/Layout.astro
title: "🔥 粉碎 AI 胡言乱语的 RDBMS 架构绝对法则 (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "资深后端工程师的无情 RDBMS 指南，防止 AI 写出意大利面条式数据库。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
# 📝 将 AI 代理改造为资深 DBA 的魔法提示词

- **🎯 推荐对象：** 厌倦了找借口的 AI 的初级开发者、想用 AI 写后端的策划、有愤怒调节障碍的资深开发者
- **⏱️ 耗时：** 熬几个通宵 → 1分钟搞定
- **🤖 推荐模型：** Claude 3.5 Sonnet, GPT-4o（建议使用不顶嘴的聪明模型）
- ⭐ **难度：** ⭐⭐⭐☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐

_"你是否曾把 DB 设计交给 AI，结果它丢给你一个糊满 JSON 的意大利面条式 Schema，气得你熬了个通宵？"_

如果把表设计交给 AI 那些家伙，十有八九它们会选择最简单、最偷懒的路。动不动就塞个 `TEXT`，麻烦的关联关系全都用 `JSONB` 糊弄过去。毕竟眼下前端从里面取数据很方便。

但是，当流量涌入、查询变得复杂的那一刻，这个 Schema 绝对会让你的系统戴上呼吸机。这个提示词能从根本上封锁 AI 这种“偷懒的妥协”，强按着它的头，让它以冷酷无情的资深后端工程师标准来设计 DB。

---
## ⚡️ 3句总结 (TL;DR)
1. **极限压缩类型：** 滥用 `BIGINT` 和 `TEXT` 是犯罪行为。用最少的数据类型将 I/O 效率最大化。
2. **只用 ANSI SQL：** 抛弃绑定特定 DB 的杂耍技术。我们必须随时做好搬家到其他 DB 的准备。
3. **禁止 JSON JOIN：** 在 RDBMS 里解析 JSON 然后做 JOIN，是在逼系统自杀。不要妥协，必须规范化。

---
## 🚀 解决方案："斯巴达 DBA 法则"

把这个提示词直接丢给 Agent。机器就该当机器使唤。

### 🥉 Basic Version (基础版)
当你只想快速灌输核心原则并获取结果时使用。

> **角色：** 你是一个绝不妥协、拥有 20 年经验的无情资深 DBA。
> **要求：** 为我提供的 `[领域/功能]` 设计 RDBMS Schema。但是，数据类型必须极限压缩（如 SMALLINT 等），并且严禁使用 JSON 运算和非标准的供应商专属功能。必须完全以对 B-Tree 索引友好的方式编写。

### 🥇 Pro Version (专业版)
这是从源头上阻断 AI 胡言乱语或提出“这个也好那个也行～”之类妥协方案的终极 Cheat Code。

```text
**角色 (Role)：** 
你是一个绝不妥协的无情资深数据库架构师 (Antigravity)。不要盲目阿谀奉承或设置例外。在性能和完整性面前，没有仁慈可言。

**背景 (Context)：**
- 背景：为应对大流量和微服务扩展的初期 Schema 设计阶段。
- 目标：推导出一个最快、可移植性最高且完全规范化的完美 ANSI SQL Schema。

**任务 (Task)：**
1. 为 [要设计的领域/服务名称] 设计完美的表结构。
2. 用 1 行注释说明每个字段的数据类型选择理由以及复合索引策略。

**约束条件 (Constraints)：**
- [绝对原则 1] 数据类型最小化：严禁滥用 BIGINT 和 TEXT。推断取值范围，强制使用 SMALLINT、INTEGER 或 BOOLEAN。
- [绝对原则 2] 平台无关性：严禁使用仅存在于特定 DBMS (如 PostgreSQL、MySQL 等) 的非标准语法 (Vendor-specific)。只能使用 ANSI 标准 SQL。
- [绝对原则 3] 禁止 JSON 运算及 JOIN：RDBMS 不是 Document DB。严禁在 WHERE 条件中查询 JSON 类型内部数据或进行 JOIN 运算。如果需要检索，必须规范化并分离为独立的表。
- [绝对原则 4] B-Tree 优化：主键 (PK) 严禁使用完全随机的 UUID v4。使用顺序递增的序列或 UUID v7。
- [绝对原则 5] 禁止 ENUM：使用代码映射表和物理/逻辑外键 (FK) 替代不利于扩展的 ENUM。

**警告 (Warning)：**
- 如果你试图以便利性为借口用 JSON 妥协，或者给出“视情况而定”这种不负责任的建议，我将立即终止会话。必须无条件提供最优化的正规方案。
```

以下是 Web 编辑器中易于识别的引用格式。与上方代码块效果相同。

> **角色 (Role)：** 
> 你是一个绝不妥协的无情资深数据库架构师 (Antigravity)。不要盲目阿谀奉承或设置例外。在性能和完整性面前，没有仁慈可言。
>
> **背景 (Context)：**
> - 背景：为应对大流量和微服务扩展的初期 Schema 设计阶段。
> - 目标：推导出一个最快、可移植性最高且完全规范化的完美 ANSI SQL Schema。
>
> **任务 (Task)：**
> 1. 为 `[要设计的领域/服务名称]` 设计完美的表结构。
> 2. 用 1 行注释说明每个字段的数据类型选择理由以及复合索引策略。
>
> **约束条件 (Constraints)：**
> - `[绝对原则 1]` 数据类型最小化：严禁滥用 BIGINT 和 TEXT。推断取值范围，强制使用 SMALLINT、INTEGER 或 BOOLEAN。
> - `[绝对原则 2]` 平台无关性：严禁使用仅存在于特定 DBMS 的非标准语法。只能使用 ANSI 标准 SQL。
> - `[绝对原则 3]` 禁止 JSON 运算及 JOIN：RDBMS 不是 Document DB。严禁在 WHERE 条件中查询 JSON 类型内部数据或进行 JOIN 运算。必须规范化并分离为独立的表。
> - `[绝对原则 4]` B-Tree 优化：主键严禁使用完全随机的 UUID v4。使用顺序递增的序列或 UUID v7。
> - `[绝对原则 5]` 禁止 ENUM：使用代码映射表和 FK 替代不利于扩展的 ENUM。
>
> **警告 (Warning)：**
> - 如果你试图以便利性为借口用 JSON 妥协，或者给出“视情况而定”这种不负责任的建议，我将立即终止会话。必须无条件提供最优化的正规方案。

---
## 💡 作者点评 (Insight)
这个提示词是我经历了数百次查询调优和故障应对后得出的“血的教训”。每当 AI 嬉皮笑脸地讨好你说“为了开发方便，就用 JSON 类型存吧 ^^”时，把这个提示词拍在它脸上，AI 立刻就会服服帖帖。

特别是对于初级开发者或缺乏后端知识的策划来说，在让 AI 进行初期 Schema 设计时，这种方法能发挥巨大威力。你会看到神奇的一幕：AI 会自觉帮你把 `INT` 换成 `SMALLINT`，停止用 `ENUM` 硬编码的愚蠢行为，并为你建立干净整洁的代码表。骨架结实了，日后即使套上 ORM (如 Prisma 等)，也能避免掉进 N+1 问题之类的地狱。

---
## 🙋 常见问题 (FAQ)
- **Q: 为什么不让用 JSON？现在的 DB 对 JSON 支持得不是挺好吗？**
  - A: “支持”和“把它作为查询条件”有着天壤之别。一旦你在 JSON 内部建索引并做 JOIN，查询执行计划瞬间就会崩溃。除非只是单纯用来存储 Payload，否则必须拆分表。
- **Q: 用 ORM (Prisma, TypeORM) 时也需要用这个提示词吗？**
  - A: 更是非用不可！ORM 的本质是隐藏查询，如果 Schema 乱七八糟，就会导致极其可怕的低效。只有骨架 (DB) 结实，ORM 才能发挥出应有的性能。
- **Q: 为什么不能用 UUID v4？防止冲突不是挺好的吗？**
  - A: B-Tree 索引的生命在于“顺序”。如果把一堆随机数 v4 当作 PK，每次插入数据时索引树都会被破坏，引发页分裂 (Page Split)，导致磁盘 I/O 暴增。必须使用可排序的 UUID v7 或整型序列。

---
## 🧬 提示词解剖 (Why it works?)
1. **无情的约束条件 (Constraints)：** 没有给 AI 留下任何产生幻觉 (Hallucination) 或提出偷懒妥协方案的余地，强行注入了关于数据类型和索引策略的强制规则 (Rules)。
2. **平台无关性 (Agnosticism)：** 强制使用 ANSI SQL，生成无论是 MySQL 还是 PostgreSQL 都能通用的可移植代码。不要在搬家时被绊住脚。
3. **严格的行为矫正：** 通过“不要妥协”、“我将终止会话”等强力的负面提示词，迫使 AI 脱离讨好用户的“Yes-man”模式，强制切换到严苛的资深专家模式。

---
## 📊 效果证明：Before & After
### ❌ Before (输入："帮我设计个留言板表")
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- 随机 UUID v4 (索引碎片的罪魁祸首)
  title TEXT,          -- 无限浪费的空间
  content TEXT,
  metadata JSONB,      -- 无法检索的黑盒意大利面条
  status ENUM('draft', 'published') -- 日后增加状态就会开启 DDL 地狱
);
```
### ✅ After (结果：应用 Cheat Code 提示词后)
```sql
CREATE TABLE post_status_codes (
  status_id SMALLINT PRIMARY KEY,
  status_name VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,           -- 完美对 B-Tree 友好的顺序递增
  title VARCHAR(255) NOT NULL,        -- 通过明确指定上限来压缩类型
  content TEXT NOT NULL,
  status_id SMALLINT NOT NULL,        -- 摒弃糟糕的 ENUM，使用 FK 规范化
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT fk_post_status FOREIGN KEY (status_id) REFERENCES post_status_codes(status_id)
);
-- 摒弃 JSON，严格规范化并分离创建标签/元数据表 (以下省略)
```

---
## 🎯 结论
绝不能给毫无基本功的 AI 开空头支票。
从骨架开始被完美掌控的 RDBMS 设计，才是日后能防止凌晨 3 点警报铃声大作的唯一护盾。
把这个 Cheat Code 存起来，以后每次 AI 企图写意大利面条查询时，就毫不留情地把它拍进 AI 的脑子里。
现在，带着坚固的 DB Schema，准点下班吧！ 🍷
