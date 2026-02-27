---
layout: /src/layouts/Layout.astro
title: " \"麻烦的 API 文档化，给代码就能搞定 Swagger\""
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "编码/开发"
description: " \"只需粘贴 API 代码，即可自动生成标准的 OpenAPI (Swagger) 规范或 Markdown 格式的接口文档。\""
tags: ["API", "文档化", "Swagger", "OpenAPI", "后端"]
---

# 📝 麻烦的 API 文档化，给代码就能搞定 Swagger

- **🎯 推荐对象:** 后端开发者、全栈工程师、技术负责人
- **⏱️ 所需时间:** 30分钟 → 1分钟
- **🤖 推荐模型:** 所有对话型 AI (ChatGPT, Claude, Gemini 等)

- ⭐ **难度:** ⭐☆☆☆☆
- ⚡️ **有效性:** ⭐⭐⭐⭐⭐
- 🚀 **实用性:** ⭐⭐⭐⭐⭐

> _“接口写完了，文档什么时候给？（前端开发者绝望的凝视）”_
> _“啊... 马上马上！（其实连一行还没写）”_

比写代码更痛苦的，难道不是写 API 文档吗？参数类型、是否必填、各种状态码的响应示例，纯手工敲打简直是消磨生命的枯燥活儿。

现在，你只需要把 Controller 或 Router 的代码直接扔给 AI，它就能瞬间为你生成结构完美的 Swagger (OpenAPI) 规范或极具可读性的 Markdown 文档。

---

## ⚡️ 3行总结 (TL;DR)

1. **精准提取**：直接从代码逻辑中解析出精确的请求参数与响应格式。
2. **格式自由**：可一键生成标准 OpenAPI (Swagger) YAML/JSON 或 Markdown 表格。
3. **真实示例**：自动补充符合业务逻辑的 Mock 数据，让前端一看就懂。

---

## 🚀 解决方案："API 文档生成器"

### 🥉 Basic Version (基础版)

当你只需要快速生成一个基础文档时使用。

> **角色:** 你是一位严谨的技术作家兼资深后端开发者。
> **请求:** 请分析以下代码，并将其转换为带有参数说明和响应示例的 Markdown API 文档。
> **代码:**
> `[在此粘贴你的代码]`


### 🥇 Pro Version (专家版)

当你需要交付给前端或第三方，要求极高标准和详细规范时使用。

> **角色 (Role):** 你是一位严谨的技术作家兼资深后端开发者。
>
> **情况 (Context):**
>
> - 背景: 我已经完成了后端接口的开发，现在需要为前端团队提供清晰、标准的 API 接口文档。
> - 目标: 基于提供的代码，自动生成无遗漏且易于阅读的 API 文档。
>
> **请求 (Task):**
> 分析下面提供的 API 代码，并以 `[选择你需要的格式: OpenAPI 3.0 YAML / Markdown Table]` 的形式编写文档。
> 必须包含以下核心要素:
>
> 1. **Endpoint & Method:** URL 路径和 HTTP 请求方法。
> 2. **Summary:** 接口功能的简短描述。
> 3. **Request Parameters:** Body, Query, Path 参数（需明确数据类型、是否必填及字段说明）。
> 4. **Response:** 成功 (200) 以及失败 (如 400, 401, 500) 时的响应数据结构，并提供真实的 JSON 示例数据。
>
> **代码:**
> `[在此粘贴你的 Controller / Router 代码]`
>
> **约束事项 (Constraints):**
>
> - 必须明确标注所有数据类型 (如 String, Integer, Boolean, Array)。
> - 响应示例 (Example Value) 请勿使用 foo/bar 等无意义字符，必须填充符合真实业务场景的 Mock 数据。
> - 如果代码中缺少必要的错误处理，请基于你的经验补充标准的 400 或 500 响应规范。
>
> **注意 (Warning):**
>
> - 请严格根据代码逻辑推导字段，不要凭空捏造代码中不存在的必填业务参数。

---

## 💡 创作者洞察 (Insight)

写 API 文档往往是开发流程中最容易产生摩擦的环节。这个提示词的精妙之处在于它不仅**节省了时间**，更重要的是**保证了代码与文档的一致性**。

过去我们习惯先写文档再写代码，或者写完代码再凭记忆补充文档，这经常导致字段遗漏或类型错误。通过直接让 AI 分析真实的 Controller 层代码，我们可以捕捉到诸如 `if (!email) return res.status(400)` 这样的隐式验证逻辑，从而在文档中自动将 `email` 标记为必填项 (Required)。

**实战技巧**：如果你使用的是 TypeScript 或带有类型提示的语言（如 Go, Rust, Java），由于类型定义明确，生成的效果会精确到令人发指的地步。

---

## 🙋 常见问题 (FAQ)

- **Q: 生成的 Swagger YAML 报错，无法渲染怎么办？**
  - A: 偶尔 AI 生成的 YAML 会有缩进问题。建议在提示词的格式要求中指定 `生成 JSON 格式的 OpenAPI 规范`。JSON 格式的结构更加严谨，直接粘贴到 Swagger Editor 中几乎不会出错。

- **Q: 如果我的接口依赖了很多复杂的 DTO 或 Entity 类，AI 能懂吗？**
  - A: 如果只给 Controller 代码，AI 只能猜出基本字段。对于复杂的嵌套结构，建议把相关的 DTO、Model 类的代码一并复制粘贴给 AI，它会完美解析出所有的嵌套关系和嵌套对象的参数说明。

---

## 🧬 提示词解剖 (Why it works?)

1. **角色赋能 (Role)**：赋予“技术作家兼后端开发者”的双重身份，保证了生成内容既懂代码逻辑，又具备文档的排版美感。
2. **结构化指令 (Task)**：强制要求按 Endpoint、Summary、Parameters、Response 四大核心板块输出，避免 AI 遗漏关键信息。
3. **真实数据约束 (Constraints)**：明确禁止使用无意义的占位符（如 test, foo），要求生成真实的业务数据，极大地提升了前端阅读文档的体验。

---

## 📊 证明: Before & After

### ❌ Before (输入的代码 - Node.js Express)

```javascript
app.post("/api/v1/users", (req, res) => {
  const { username, email, age } = req.body;
  if (!email || !username) {
    return res.status(400).send({ error: "Missing required fields" });
  }
  if (age && typeof age !== "number") {
    return res.status(400).send({ error: "Invalid age" });
  }

  // 模拟保存逻辑...
  res.status(201).send({
    id: 1024,
    username,
    email,
    age,
    createdAt: new Date().toISOString(),
  });
});
```

### ✅ After (AI 生成结果 - Markdown 格式)

### **POST /api/v1/users**

创建新用户。

**Request Body**

| 字段名     | 类型    | 必填 | 说明                        |
| :--------- | :------ | :--: | :-------------------------- |
| `username` | String  |  ✅  | 用户昵称                    |
| `email`    | String  |  ✅  | 用户电子邮箱地址 (唯一标识) |
| `age`      | Integer |  ❌  | 用户年龄                    |

**Responses**

**201 Created** (注册成功)

```json
{
  "id": 1024,
  "username": "jay_dev",
  "email": "jay.dev@example.com",
  "age": 28,
  "createdAt": "2026-02-04T12:00:00.000Z"
}
```

**400 Bad Request** (参数校验失败)

```json
{
  "error": "Missing required fields"
}
```

---

## 🎯 结论

优秀的文档绝不应该是开发者的负担，而是前后端协作的润滑剂。
把这种机械式的提取与翻译工作交给 AI 吧。腾出精力，去思考那些真正需要人类智慧的系统架构设计。

现在，去拯救你那些没有文档的旧项目吧！🍷
