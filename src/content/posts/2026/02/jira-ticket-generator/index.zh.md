---
layout: /src/layouts/Layout.astro
title: " \"Jira 티켓 자동 생성: 기획서만 넣으면 개발 티켓 10개가 뚝딱\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"专为整理 Ticket 头疼的 PM 打造的提示词。自动将策划文档结构化拆解为 Epic、Story 和 Task。\""
tags: ["Jira", "지라", "PM", "기획", "애자일"]
---

# 🎫 自动生成 Jira Ticket：只需输入策划文档，瞬间拆分数十个开发任务

- **🎯 推荐对象：** 整天被催“建一下 Ticket”的 PM/PO、厌倦整理 Backlog 的 Scrum Master
- **⏱️ 所需时间：** 1 分钟（输入策划文档 -> 转换为 CSV）
- **🤖 推荐模型：** Claude 3.5 Sonnet（在文档结构化与逻辑拆分方面表现卓越）

- ⭐ **难度：** ⭐☆☆☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐

> _“策划案终于写完了，现在还要一个个搬到 Jira 上去……唉。”_

把策划文档里的内容复制粘贴，逐个建 Jira Ticket。这种纯体力活，为什么现在还要人工来做？为了和开发团队高效沟通，将策划案拆解成具体的开发任务是必不可少的，但这个过程本身是完全可以 100% 自动化的机械性工作。

现在，只需把策划案扔给 AI 并指示：“**请把这些内容拆解成开发人员可以直接着手开发的任务（Task）单位。**” 原本需要耗费一整天的 Backlog 创建工作，短短 1 分钟就能搞定。

---

## ⚡️ 3句话总结 (TL;DR)

1. 直接复制已完成的策划文档（PRD）全文。
2. 指示 AI：“请将这些内容拆分为 Epic、Story 和 Task，并生成可导入 Jira 的 CSV 格式。”
3. 将生成的结果保存为文件，利用 Jira 的“从 CSV 导入”功能上传，即可一次性批量生成数十个 Ticket。

---

## 🚀 解决方案："Jira Backlog Generator"

### 🥉 Basic Version (基础版)

适用于只想快速提取任务清单（To-Do List）的场景。

> **角色：** 你是一位`[资深产品经理兼 Scrum Master]`。
> **策划文档：** `[粘贴策划案全文]`
> **任务：** 请将这份策划案拆解为开发人员可立即着手的**详细任务（Task）**单位，并制作成清单。请明确区分前端（Frontend）和后端（Backend）的工作内容。


### 🥇 Pro Version (专业版)

适用于生成可直接上传至 Jira 的完美 CSV 文件。AI 会为你严谨地编写验收标准（AC）。

> **角色 (Role)：** 你是一位精通敏捷（Agile）开发流程的资深 Scrum Master 兼 Technical PM。
>
> **背景 (Context)：**
>
> - 背景：新功能的策划案（PRD）已完成，需要基于此进行 Sprint Planning。
> - 目标：将策划内容转换为结构完美的 CSV 数据，以便直接导入并注册到 Jira 中。
>
> **任务 (Task)：**
>
> 1. 请分析下方提供的策划案，将所需的开发任务以 **Jira CSV 格式** 输出。
> 2. 必须按顺序包含以下列：`Issue Type`, `Summary`, `Description`, `Priority`, `Assignee`。
> 3. `Assignee` 列请留空。
> 4. `Description` 中必须包含 **Given-When-Then 格式的验收标准（Acceptance Criteria, AC）**，以便开发人员进行测试。
>
> **策划文档 (PRD)：**
> `[在此处粘贴策划案全文]`
>
> **约束条件 (Constraints)：**
>
> - 层级结构必须严格按照以下顺序清晰划分：1. Epic -> 2. Story -> 3. Sub-task（区分 FE/BE）。
> - 输出格式不要使用 Markdown 表格，请仅输出方便复制粘贴到 Excel 的**逗号分隔文本（CSV 原始数据）**。请将其放在代码块（Code Block）中。
>
> **注意事项 (Warning)：**
>
> - 不要随意捏造策划案中没有的功能或策略。遇到不确定的部分，请在 Description 中明确标注“[需要确认]”。

---

## 💡 作者见解 (Insight)

开发人员最欢迎的策划案，绝不是花里胡哨的页面定义文档，而是 **“验收标准（AC）清晰明确的 Ticket”**。这个提示词的核心，不仅在于简单的任务拆解，更在于强制 AI 在 `Description` 区域编写 **Given-When-Then** 格式的验收标准。

在实际工作中引入这套方法后，“点击这个按钮会发生什么？”或“异常情况该怎么处理？”这类开发人员反复确认的问题大幅减少。Ticket 的质量直接决定了 Sprint 的推进速度。

---

## 🙋 常见问题 (FAQ)

- **Q: 如何将 AI 生成的结果导入到 Jira 中？**
  - A: 复制 AI 输出的 CSV 原始数据，粘贴到记事本（或任何文本编辑器）中，并保存为 `jira_tickets.csv`。然后在 Jira 的菜单中选择 [Issues（议题）] -> [Import issues from CSV（从 CSV 导入议题）]，上传该文件即可。

- **Q: 如果策划案内容太长，超出了 Token 限制怎么办？**
  - A: 建议不要一次性塞入整篇文档，而是按核心功能模块（例如：“登录/注册”、“支付模块”）分批次运行提示词。这样生成的 Ticket 会更加详细和精准。

- **Q: 可以自动添加标签（Labels）或故事点（Story Points）吗？**
  - A: 当然可以！只需在提示词的“任务 (Task)”部分增加指示：“请添加 Labels 列，为前端任务打上 'frontend' 标签，后端任务打上 'backend' 标签。再添加 Story Points 列，并根据预估难度分配 1、2、3、5 或 8 个故事点。”

---

## 🧬 提示词解剖 (Why it works?)

1.  **强制层级结构 (Hierarchy)：** 明确规定 Epic -> Story -> Sub-task 的敏捷标准结构，防止 AI 将任务无序地碎片化，确保颗粒度合理。
2.  **验收标准 (AC) 自动化：** 强制使用决定开发质量的 BDD (Behavior-Driven Development) 核心语法 Given-When-Then，将 Ticket 的实用性最大化。
3.  **数据格式优化：** 要求输出 CSV 原始数据而非 Markdown 表格，充分考虑了用户体验（UX），只需复制保存为文件即可实现一键导入。

---

## 📊 效果对比：Before & After

### ❌ Before (输入：粗略的策划要求)

```text
任务名：购物车功能开发
说明：请参考附件的策划文档（购物车_v1.0.pdf），完成页面和 API 的开发。需要包含修改数量、删除、全选功能。
```

### ✅ After (结果：结构完美的 Backlog)

```csv
Issue Type,Summary,Description,Priority,Assignee
Epic,构建购物车系统,"包含加入购物车、查询、修改、删除等所有功能",High,
Story,用户可以将商品加入购物车,"加入购物车相关 Story",High,
Sub-task,[FE] 实现商品详情页「加入购物车」按钮 UI,"**Given** 用户停留在商品详情页时，**When** 点击「加入购物车」按钮，**Then** 底部必须弹出成功的 Toast 提示信息。",High,
Sub-task,[BE] 实现加入购物车 API (POST /cart),"**Given** 存在有效 Session 时，**When** 接收到 POST /cart 请求，**Then** 必须将数据存入 DB 并返回 200 OK。",High,
```

---

## 🎯 结论

产品经理或策划人员的真正实力，并不在于“文档有多厚”，而在于 **“能否将工作拆解为开发人员易于执行的颗粒度”**。那些繁琐、重复的文档转换工作，就放心交给 AI 助手吧。

只需丢进策划案，Backlog 就能被完美整理出来。现在，彻底告别写 Ticket 的焦虑，准点下班吧！🍷
