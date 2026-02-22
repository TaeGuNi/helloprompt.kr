---
layout: /src/layouts/Layout.astro
title: "只要扔 JSON，TypeScript 类型定义就出来了！(feat. Zod)"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "编码/开发"
description: "将复杂的 JSON 数据自动转换为 TypeScript 接口或 Zod 架构的提示词。"
tags: ["TypeScript", "Zod", "JSON", "类型定义", "生产力"]
---

# 📝 只要扔 JSON，TypeScript 类型定义就出来了！(feat. Zod)

- **🎯 适用人群:** 前端开发者、Node.js 后端开发者、全栈工程师
- **⏱️ 节省时间:** 30分钟 → 10秒
- **🤖 推荐模型:** 所有主流 AI 模型 (ChatGPT, Claude, Gemini 等)

- ⭐ **难度:** ⭐⭐☆☆☆
- ⚡️ **效果:** ⭐⭐⭐⭐⭐
- 🚀 **实用性:** ⭐⭐⭐⭐☆

> _“面对后端抛来的几百行嵌套 JSON 响应，你还在手工逐行敲 `interface` 吗？”_

在前端或 Node.js 开发中，处理外部 API 返回的复杂 JSON 结构总是令人头疼。深层嵌套的对象、包含多种类型的数组、以及时不时出现的 `null` 值，手工编写 TypeScript 类型不仅耗时，还极易出错。如果能直接复制粘贴 JSON，瞬间得到完美的 TypeScript 接口定义，甚至连用于运行时校验的 Zod Schema 都一并生成，岂不是能极大地释放生产力？今天我们将分享一个让你告别重复劳动、瞬间构建类型安全防线的终极提示词。

---

## ⚡️ 核心总结 (TL;DR)

1. **自动化类型推导：** 丢入任意复杂 JSON，一键生成精确的 TypeScript Interface 和 Type。
2. **运行时安全保障：** 同步生成对应的 Zod Schema，实现前后端数据结构的双重校验。
3. **嵌套结构完美处理：** 自动拆解嵌套对象并生成独立的接口，确保代码结构清晰易维护。

---

## 🚀 解决方案：“类型大师”提示词

### 🥉 Basic Version (基础版)

当你只需要快速将简单的 JSON 转为 TypeScript 类型时使用。

> **角色:** 你是一位资深的前端架构师，精通 TypeScript 类型系统。
> **任务:** 请将我提供的 JSON 数据转换为 TypeScript 接口，请确保所有嵌套对象都被正确分离。
> **输入:** `[在此处粘贴您的 JSON 数据]`

<br>

### 🥇 Pro Version (专家版)

当你需要构建生产级别的类型安全体系，并要求包含运行时验证和详细注释时使用。

> **角色 (Role):** 你是一位精通 TypeScript 生态系统的首席开发者，尤其擅长数据类型推导与 Zod 验证体系。
>
> **背景 (Context):**
>
> - 现状：我们从外部 API 接收到一段复杂的 JSON 数据响应。
> - 目标：为了在项目中实现极致的类型安全（Type-safety），需要将其转化为严谨的类型定义及验证架构。
>
> **任务 (Task):**
>
> 1. 请基于下方提供的 JSON 数据，编写对应的 **TypeScript Interface**。（采用 PascalCase 命名规范）
> 2. 为确保运行时的安全性，请同步编写配套的 **Zod Schema**。
> 3. 请包含使用 `z.infer` 从 Zod Schema 中反向推导 TypeScript Types 的代码示例。
>
> **JSON 数据:**
> `[请在此处粘贴复杂的 JSON 数据]`
>
> **约束条件 (Constraints):**
>
> - 默认所有字段均为必填（required）。仅当字段值明确包含 `null` 时，才将其处理为可选或允许为空（`nullable().optional()`）。
> - 数组内部的对象必须拆分为独立命名的 Interface 或 Schema 进行定义，以提升类型定义的复用性。
> - 请为每个字段添加详尽的 JSDoc 注释，根据字段名和数据类型推测并说明其业务含义。
>
> **注意事项 (Warning):**
>
> - 请只输出代码本身，不要包含多余的寒暄或解释说明。代码必须是可以直接复制到项目中运行的生产级水准，严禁出现任何未经证实的假设导致幻觉。

---

## 💡 作者见解 (Insight)

在实际开发中，静态类型（TypeScript）只能保证编译时的安全，一旦 API 接口的实际返回值与预期不符，应用依然会在运行时抛出异常甚至崩溃。这就是为什么我们不仅需要生成 TypeScript Interface，更需要引入 Zod 的原因。

通过这套提示词，我们实际上是利用大语言模型（LLM）的逻辑分析能力，把“编写类型”这一机械性工作升级为了“构建防御性护城河”。我特别在提示词中加入了“拆解嵌套对象”和“生成 JSDoc 注释”的指令，这在处理大型 API 响应时，能让你的代码可读性产生质的飞跃。下次接入第三方服务时，不妨试试这个方法，你会发现它比各种在线 JSON-to-TS 工具都要聪明、灵活得多，因为 AI 能够真正理解数据的“语义”。

---

## 🙋 常见问题 (FAQ)

- **Q: 为什么不直接用网上的 JSON to TypeScript 转换工具？**
  - A: 传统工具大多只能生成基础的 TypeScript 类型，无法处理复杂的业务逻辑推断（例如智能推测某个字段是否应该是枚举类型），更无法同时为你生成带有详尽业务注释的 Zod Schema。AI 能够理解业务语境，这是传统正则解析工具做不到的。

- **Q: 如果 JSON 中的数据缺失，AI 会怎么处理？**
  - A: 在提示词的约束条件中，我们明确要求“只有包含 `null` 时才处理为可选”。如果你的原始 JSON 样本中某个本该可选的字段恰好有值，AI 会将其视为必填。因此，建议在提供 JSON 样本时，尽量提供字段最全、最具代表性的数据结构，或者在生成后根据实际业务逻辑微调 `optional()`。

- **Q: 支持除了 Zod 之外的验证库吗（比如 Yup 或 Joi）？**
  - A: 完全没问题。你只需要把提示词中的“Zod Schema”替换为“Yup Schema”或“Joi Schema”，AI 就能完美适配并生成对应的验证逻辑和类型推导代码。

---

## 🧬 提示词解剖 (Why it works?)

1. **双效合一的指令：** 同时要求生成 TypeScript Interface 和 Zod Schema，打破了编译时与运行时的壁垒，一次性解决全链路类型验证的痛点。
2. **严格的空值约束（Constraints）：** “仅当出现 `null` 时处理为可选”这一规则，避免了 AI 为了省事把所有字段都变成 `?` 的不良倾向，保证了类型系统的严谨性。
3. **架构层面的思考：** 强制拆分嵌套对象并添加 JSDoc，确保输出的结果不仅仅是“能跑的代码”，更是符合团队协作标准的高质量代码资产。

---

## 📊 效果对比：Before & After

### ❌ Before (原始 JSON)

```json
{
  "id": 8472,
  "userName": "Jay",
  "contact": {
    "email": "jay@example.com",
    "phone": null
  },
  "roles": ["developer", "admin"]
}
```

### ✅ After (AI 生成结果)

```typescript
import { z } from "zod";

/** 用户联系方式验证架构 */
export const ContactSchema = z.object({
  /** 用户的电子邮箱地址 */
  email: z.string().email(),
  /** 用户的联系电话，允许为空 */
  phone: z.string().nullable().optional(),
});

/** 用户主体信息验证架构 */
export const UserSchema = z.object({
  /** 用户的唯一标识符 */
  id: z.number(),
  /** 用户的登录名或昵称 */
  userName: z.string(),
  /** 用户的联系方式详情 */
  contact: ContactSchema,
  /** 用户所拥有的角色列表 */
  roles: z.array(z.string()),
});

/**
 * 用户联系方式接口
 */
export type Contact = z.infer<typeof ContactSchema>;

/**
 * 用户主体信息接口
 */
export type User = z.infer<typeof UserSchema>;
```

---

## 🎯 总结

类型定义是我们代码库的安全带，但这根安全带不应该由我们手工一针一线去缝制。
借助 AI 的力量，让繁琐的 JSON 数据瞬间化身为坚不可摧的类型防线，把节约下来的时间花在更具创造性的业务逻辑上吧！

现在，带着这份神器，准时下班！ 🍷
