---
layout: ../../../layouts/BlogPost.astro
title: 掌握结构化输出（JSON）：将大语言模型完美集成到系统中
date: 2026-02-13
description: 学习如何完美控制 LLM 的 JSON 格式输出，以便可靠地集成到应用程序中。这是一份从提示工程到 API 设置的开发者综合指南。
---

大语言模型（LLM）擅长写诗、讲笑话和进行哲学辩论。但是，作为开发人员，当我们试图将 LLM 集成到实际应用程序中时，我们会遇到一个主要障碍：**“非结构化文本”**。

我的 Python 后端或 JavaScript 前端不需要 LLM 说：“当然！这是你要的数据：”，然后才给出文本。它们只需要干净、可解析的 **JSON**。

本文涵盖了从 LLM 获取可靠结构化输出（Structured Outputs）的关键策略。

## 为什么要掌握结构化输出？

如果不只是将 LLM 用作聊天机器人，你需要将模型的智能与现有的软件系统连接起来。
- **自动化：** 分析电子邮件内容以在 CRM 中自动创建工单。
- **数据提取：** 从新闻文章中提取日期、人物和事件并保存到数据库中。
- **UI 渲染：** 将生成的内容映射到特定的网站组件（卡片、列表等）。

在所有这些过程中，JSON 充当了 AI 和代码之间的通用语言（Lingua Franca）。

## 策略 1：强大的系统提示 (System Prompting)

最基本的方法是在系统提示中强制设定角色和输出格式。你需要比单纯说“给我 JSON”更具体的指令。

```text
你是一个数据提取助手。分析用户输入并根据以下 JSON 模式输出。
不要包含任何其他解释或 Markdown 代码块（```json）。仅输出原始 JSON 字符串。

{
  "summary": "string",
  "sentiment": "positive | negative | neutral",
  "keywords": ["string"]
}
```

**关键提示：** “不要使用 Markdown 代码块”的指令至关重要。许多模型习惯性地用 \`\`\`json ... \`\`\` 包裹输出，这需要在解析时进行额外的后处理。

## 策略 2：单样本学习 (One-Shot Learning)

如果模型不理解模式，展示一个例子胜过千言万语。

**User:**
```text
分析以下评论：“发货真的很快，但质量低于预期。”
```

**Assistant:**
```json
{
  "summary": "发货快，质量低",
  "sentiment": "mixed",
  "tags": ["delivery", "quality"]
}
```

通过在聊天记录（history）或提示中包含一个示例，模型会立即明白：“啊，我应该使用这种语气和格式。”

## 策略 3：利用原生 API 功能 (JSON Mode & Response Format)

现代模型提供了 API 级别的功能来强制结构化输出，而不完全依赖提示工程。

### OpenAI & Others
OpenAI 的 GPT-4o 和更新的模型支持 `response_format={"type": "json_object"}` 参数。使用此参数会强制模型生成没有语法错误的有效 JSON。最近，`json_schema` 甚至允许定义更严格的结构（Strict Mode）。

### Google Gemini
Gemini 也允许定义 `response_schema` 来控制输出格式。这确保了模型严格遵循模式中定义的字段和类型。

## 需要避免的陷阱

1.  **尾随逗号 (Trailing Commas)：** JSON 标准不允许在列表或对象的最后一项后加逗号。然而，LLM 经常犯这个错误。如果你的 JSON 解析器支持宽松模式（lenient mode），那没问题，否则可能会发生错误。
2.  **包含注释：** 标准 JSON 不支持注释。你必须警告模型不要添加像 `// explanation` 这样的注释。
3.  **幻觉 (Hallucination)：** 完美的格式并不能保证内容的真实性。即使是结构化数据也始终需要验证。

## 结论

结构化输出是将 LLM 从玩具进化为工具的核心技术。
从提示工程开始，在生产环境中利用原生模型功能（JSON Mode, Tool Calling 等）来确保稳定性。

现在，你的应用程序可以兼具 AI 的创造力和代码的稳定性。
