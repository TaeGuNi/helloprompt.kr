---
layout: /src/layouts/Layout.astro
title: "🔥 粉碎 AI 胡言乱语的 RDBMS 架构绝对法则 (Cheat Code)"
author: "Antigravity"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "AI 프롬프트"
description: "资深后端工程师冷酷无情的 RDBMS 架构指南，彻底终结 AI 生成的意大利面条式数据库 Schema。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "rdbms-architecture"]
---
## 📝 将 AI Agent 调教成资深 DBA 的终极魔法提示词

- **🎯 推荐人群：** 受够了 AI 找借口的初级开发者、想用 AI 搞定后端的策划、被 AI 气出高血压的资深工程师
- **⏱️ 节省时间：** 苦熬数个通宵 → 仅需 1 分钟
- **🤖 推荐模型：** Claude 3.5 Sonnet, GPT-4o（建议使用不会顶嘴的高智商模型）
- ⭐ **难度：** ⭐⭐⭐☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐

_"你是否也曾把数据库设计交给 AI，结果它直接甩给你一堆糊满 JSON 的意大利面条式 Schema，气得你连熬几个通宵收拾烂摊子？"_

如果你把数据库表结构设计交给 AI，十有八九它会选择最偷懒的捷径。动不动就塞个 TEXT 类型，遇到麻烦的表关联就直接用 JSONB 糊弄过去。毕竟对它来说，前端直接从中取数据看似最方便。

然而，当真实流量涌入、复杂查询增加的那一刻，这种粗制滥造的 Schema 绝对会让你的系统瞬间瘫痪、戴上呼吸机。今天这个提示词（Prompt）将从根本上封杀 AI 这种“偷懒妥协”的行径，强按着它的头，逼它按照冷酷无情的资深后端工程师标准来严谨设计数据库。

---
## ⚡️ 3句总结 (TL;DR)
1. **极限压缩数据类型：** 滥用 BIGINT 和 TEXT 简直是犯罪。必须使用占用空间最小的数据类型，将 I/O 效率最大化。
2. **坚守 ANSI SQL 标准：** 抛弃那些绑定特定数据库的奇技淫巧。必须随时为无缝迁移数据库做好准备。
3. **严禁 JSON JOIN 操作：** 在 RDBMS 里解析 JSON 再做 JOIN，无异于逼迫系统自杀。绝不妥协，必须严格遵循数据库规范化原则。

---
## 🚀 解决方案：“斯巴达 DBA 铁律”

直接把这个提示词扔给你的 AI Agent 吧。对待机器，就该用机器的方式狠狠使唤。

### 🥉 Basic Version (基础版)
当你只需要快速向 AI 灌输核心原则并拿到结果时，请使用此版本。

> **角色：** 你是一个绝不妥协、拥有 20 年经验的冷酷资深 DBA。
> **要求：** 请为我提供的 [领域/功能名称] 设计 RDBMS Schema。但是，数据类型必须极限压缩（如 SMALLINT 等），严禁使用任何 JSON 运算以及非标准的供应商专属特性。所有设计必须完全对 B-Tree 索引绝对友好。

### 🥇 Pro Version (专业版)
这是从源头上彻底阻断 AI 胡言乱语，防止它给出“这个也行、那个也凑合”等滑头妥协方案的终极 Cheat Code。

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

以下是更适合在网页编辑器中阅读的引用格式，与上方代码块的内容与效果完全一致：

> **角色 (Role)：** 
> 你是一个绝不妥协、冷酷无情的资深数据库架构师 (Antigravity)。不要盲目阿谀奉承，也不允许任何例外。在系统性能和数据完整性面前，没有任何仁慈可言。
>
> **背景 (Context)：**
> - 现状：目前处于应对未来大流量并发和微服务水平扩展的初期 Schema 设计阶段。
> - 目标：推导出一套速度最快、可移植性最高且完全规范化的完美 ANSI SQL Schema。
>
> **任务 (Task)：**
> 1. 为 `[要设计的领域/服务名称]` 设计堪称完美的表结构。
> 2. 使用 1 行注释清晰说明每个字段选择该数据类型的硬核理由以及复合索引策略。
>
> **约束条件 (Constraints)：**
> - `[绝对原则 1]` 数据类型极简主义：严禁滥用 BIGINT 和 TEXT。必须推断数据的实际取值范围，强制使用 SMALLINT、INTEGER 或 BOOLEAN。
> - `[绝对原则 2]` 平台无关性：严禁使用仅存在于特定 DBMS 的非标准语法。只能且必须使用 ANSI 标准 SQL。
> - `[绝对原则 3]` 封杀 JSON 运算及 JOIN：RDBMS 绝不是 Document DB。严禁在 WHERE 条件中查询 JSON 内部属性或进行 JOIN 运算。只要涉及检索，必须将其规范化并拆分为独立的表。
> - `[绝对原则 4]` B-Tree 极致优化：主键严禁使用完全随机、会破坏索引的 UUID v4。强制使用顺序递增的序列或 UUID v7。
> - `[绝对原则 5]` 封杀 ENUM：使用代码映射表（Code Table）和 FK（外键）来替代极其不利于后期扩展的 ENUM。
>
> **警告 (Warning)：**
> - 如果你试图以“开发便利性”为借口用 JSON 进行妥协，或者给出“视情况而定”这种极其不负责任的建议，我将立即强行终止会话。你必须无条件提供最优化的数据库规范化方案。

---
## 💡 作者点评 (Insight)
这段提示词，是我在经历了数百次慢查询调优和线上故障救火后，总结出的“血泪教训”。每当 AI 嬉皮笑脸地试图讨好你，忽悠说“为了开发方便，直接用 JSON 类型存吧 ^^”时，请毫不犹豫地把这个提示词拍在它脸上，它立刻就会变得老老实实、服服帖帖。

尤其是对于初级开发者，或是缺乏深厚后端底蕴的策划人员来说，在让 AI 进行初期的 Schema 设计时，这个 Cheat Code 能发挥出摧枯拉朽的威力。你将会见证奇迹：AI 会极度自觉地帮你把 INT 优化成 SMALLINT，彻底戒掉用 ENUM 硬编码的愚蠢行径，并为你建立起干净、整洁、高度可扩展的代码映射表。只要数据库的骨架足够坚实，日后哪怕套上各种 ORM 框架（如 Prisma 等），也能完美避开 N+1 查询等性能地狱。

---
## 🙋 常见问题 (FAQ)
- **Q: 为什么严禁使用 JSON？现在的数据库对 JSON 支持得不是挺好吗？**
  - A: 数据库“支持存储”和“将其作为查询条件”完全是两码事。一旦你试图在 JSON 内部字段上建立索引并进行 JOIN 操作，查询的执行计划瞬间就会崩溃。除非你仅仅是用它来存储无需检索的纯 Payload 数据，否则必须老老实实拆分出独立的表。
- **Q: 如果我打算使用 ORM（如 Prisma, TypeORM），还需要用这个提示词吗？**
  - A: 更是非用不可！ORM 的本质是在底层隐藏 SQL 查询细节。如果你的底层 Schema 乱七八糟，ORM 就会生成极其可怕、低效的查询语句。只有数据库的物理骨架足够强健，ORM 才能真正发挥出其应有的开发效率与性能。
- **Q: 为什么不能用 UUID v4？用它来防止主键冲突不是挺好的吗？**
  - A: B-Tree 索引的灵魂就在于“顺序”。如果你把一堆毫无规律的随机数（UUID v4）作为主键（PK），每次插入新数据时，底层的索引树都会被严重破坏，引发大规模的页分裂（Page Split），导致磁盘 I/O 成本呈指数级暴增。你必须使用时间可排序的 UUID v7 或是传统的整型自增序列。

---
## 🧬 提示词解剖 (Why it works?)
1. **冷酷无情的约束条件 (Constraints)：** 彻底封死了 AI 产生幻觉 (Hallucination) 或提出偷懒妥协方案的任何退路，强势注入了关于数据类型和索引策略的硬性规则。
2. **平台无关的兼容性 (Agnosticism)：** 强制要求输出 ANSI SQL，确保生成的代码无论是 MySQL 还是 PostgreSQL 都能完美兼容。绝不能让非标准语法在未来数据库迁移时绊住你的脚。
3. **强硬的行为矫正机制：** 通过“不要妥协”、“我将强行终止会话”等极具威慑力的负面提示词（Negative Prompts），逼迫 AI 瞬间脱离一味讨好用户的“Yes-man”模式，强制切换至冷酷、严苛的资深架构师状态。

---
## 📊 效果证明：Before & After
### ❌ Before (当你只输入：“帮我设计个留言板表”)
```sql
CREATE TABLE posts (
  id UUID PRIMARY KEY, -- 随机 UUID v4 (索引碎片的罪魁祸首)
  title TEXT,          -- 无限浪费的空间
  content TEXT,
  metadata JSONB,      -- 无法检索的黑盒意大利面条
  status ENUM('draft', 'published') -- 日后增加状态就会开启 DDL 地狱
);
```
### ✅ After (应用终极 Cheat Code 提示词后)
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
绝不能给毫无数据库基本功的 AI 任何自由发挥的余地。
只有从骨架层面被完美掌控、严丝合缝的 RDBMS 设计，才是日后能够防止你在凌晨 3 点被服务器宕机警报惊醒的唯一护盾。
请务必把这个 Cheat Code 收藏起来。以后每次 AI 企图敷衍了事、写出意大利面条式的烂 Schema 时，就毫不留情地把它狠狠拍进 AI 的脑子里。
现在，带着坚如磐石的数据库 Schema，安心地准点下班吧！ 🍷
