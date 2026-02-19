---
layout: ../../../layouts/MarkdownPostLayout.astro
title: '利用 Google LangExtract 掌握结构化数据提取'
pubDate: 2024-05-20
description: '了解如何使用 Google 新推出的 LangExtract 库从 LLM 中提取精确的 JSON 和结构化数据。'
author: 'Hello Prompt'
image:
    url: 'https://docs.astro.build/assets/full-logo-light.png'
    alt: 'Google LangExtract Logo'
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

虽然大型语言模型（LLM）在写诗或生成代码方面表现出色，但在商业应用最需要的“结构化数据提取”任务中，它们往往面临挑战。仅依靠提示工程（Prompt Engineering）从文本中提取特定信息并精确匹配 JSON 格式是有局限性的。

Google 最近发布的 **LangExtract** 是一个全新的 Python 库，旨在正面解决这一问题。在本文中，我们将探讨 LangExtract 是什么，以及它如何革新您的数据管道。

## 什么是 LangExtract？

LangExtract 基于 Google 的 Gemini 和 Vertex AI 模型运行，将非结构化文本数据转换为结构化对象（通常是 Pydantic 模型或 Python Dataclass）。与传统的 LangChain 解析器或简单的提示指令相比，它提供了更强大的**类型安全性**和**错误恢复能力**。

### 主要功能

1.  **基于模式的提取**：定义 Pydantic 模型，强制 LLM 生成与该模式完全匹配的数据。
2.  **自动错误修正 (Self-Correction)**：如果模型输出错误的格式，该库会自动检测解析错误并要求模型自行修正，从而获得正确的结果。
3.  **Gemini 优化**：充分利用 Google 最新的 Gemini Pro 和 Flash 模型的函数调用功能，快速且低成本地执行提取任务。

## 使用示例

让我们看一个从简单的电子邮件正文中提取会议信息的示例。

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. 定义数据提取的模式
class MeetingInfo(BaseModel):
    topic: str = Field(description="会议主题")
    participants: list[str] = Field(description="与会者姓名列表")
    start_time: datetime = Field(description="会议开始时间")
    location: str | None = Field(description="会议地点（如果没有则为 null）")

# 2. 初始化提取器（使用 Gemini 模型）
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
我们要安排下周二下午 2 点召开“Q3 营销策略”会议。
与会者有张三、李四和王五。
地点是 301 会议室。请不要迟到！
"""

# 3. 执行数据提取
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# 输出:
# topic='Q3 营销策略'
# participants=['张三', '李四', '王五']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='301 会议室'
```

## 为什么选择 LangExtract？

以前，您必须使用正则表达式（Regex）或编写复杂的提示，但使用 LangExtract，您可以以**代码优先（Code-first）**的方式构建数据管道。这在 RAG（检索增强生成）系统中从检索到的文档中提取回答所需的关键参数，或在客户支持聊天机器人中构建订单信息以传递给 API 时特别有用。

## 结论

Google LangExtract 将 LLM 从简单的聊天机器人转变为**可靠的数据处理引擎**。立即安装并将其引入您的项目中。数据预处理的痛苦将大大减少。
