---
layout: /src/layouts/Layout.astro
title: "DeepSeek R1 本地部署指南：在电脑里养一个免费的编程奴隶"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "开发/编程"
description: "使用Ollama在本地安装DeepSeek R1，获得无限免费的编程助手。无数据泄露风险，100%隐私安全。"
tags: ["DeepSeek", "Ollama", "Local LLM", "编程", "生产力"]
---

# 💻 在电脑里养一个免费的编程奴隶：DeepSeek R1 本地部署指南

> **🎯 推荐人群：** 担心公司代码泄露的开发者、想省API费用的学生、需要在离线环境工作的极客
> **⏱️ 所需时间：** 10分钟
> **🤖 推荐模型：** DeepSeek-R1-Distill-Llama-8B (或 70B)

|  难度   |    效果    |   实用性   |
| :-----: | :--------: | :--------: |
| ⭐⭐☆☆☆ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

> _"因为公司安全政策不能把代码贴到ChatGPT？但又不想用那些笨拙的旧模型？现在，把 **DeepSeek R1** 关进你的电脑里，尽情地压榨它吧。100%免费，100%隐私。"_

2026年，开发者圈子里最火的关键词绝对是 **"Local LLM"**。其中，**DeepSeek R1** 被称为“开源界的失误”，因为它展现出了令人难以置信的性能（尤其是编程能力）。本文将教你如何以最简单、最快的方式在 Mac（或 Windows PC）上安装 DeepSeek。

---

## ⚡️ 3行总结 (TL;DR)

1.  安装 **Ollama** (LLM 运行器)
2.  在终端输入一行命令 (`ollama run deepseek-r1`)
3.  在 VS Code 或浏览器中享受无限免费的编程服务

---

## 🚀 第一步：安装 Ollama

首先，我们需要安装运行 LLM 的引擎 —— **Ollama**。它比 Docker 简单得多。

### Mac / Linux

打开终端，复制并粘贴以下命令：

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

访问 [Ollama 官网](https://ollama.com)，点击 `Download for Windows` 下载并运行安装程序。

---

## 🚀 第二步：召唤 DeepSeek R1

现在，让我们下载并运行模型。请根据你的电脑配置选择。

### 🥉 基础版：8B 模型 (普通笔记本)

在 M1/M2 MacBook Air 或普通游戏本上运行流畅。

```bash
ollama run deepseek-r1:8b
```

### 🥇以此专业版：70B 模型 (高性能台式机/M3 Max)

建议 32GB 以上内存。拥有媲美 GPT-4 的推理能力。

```bash
ollama run deepseek-r1:70b
```

输入命令后会自动开始下载，完成后立即进入聊天界面。

---

## 🚀 第三步：实战应用 (VS Code 集成)

在终端里聊天太极客了。让我们把它集成到 **VS Code** 中，打造真正的 Copilot。

1.  在 VS Code 扩展商店搜索并安装 **"Continue"**。
2.  安装后点击左侧侧边栏图标 -> 选择 `Add Model`。
3.  Provider 选择 `Ollama`。
4.  Model 选择 `DeepSeek R1`。(或者点击 Autodetect 自动检测)
5.  现在选中代码并按 `Cmd + L` (Windows 按 `Ctrl + L`) 即可提问。

> **Q:** "重构这个函数。"
> **A:** (DeepSeek 瞬间吐出优化后的代码)

---

## 🧬 提示词解剖 (Why it works?)

“等等，这不是安装指南吗？提示词在哪里？”
别急，这里提供 **DeepSeek 最强编程提示词**。由于 DeepSeek 重视“思维链 (Chain of Thought)”，关键在于让它**“先思考”**。

### DeepSeek 专用编程提示词

> **角色 (Role):** 你是 Google 的高级工程师，也是 Clean Code 的布道者。
>
> **背景 (Context):** 我写的这段代码虽然能跑，但可读性差且效率低。
>
> **任务 (Task):**
>
> 1. 先分析代码的问题（时间复杂度、命名规范等）。(**必须先输出思考过程(Thinking Process)**)
> 2. 编写优化后的代码。
> 3. 用注释解释为什么要这样修改。

---

## 📊 效果证明：Before & After

### ❌ Before (免费版 ChatGPT)

“这段代码... 嗯... 我不太确定。请重新提问。” (或者给出模棱两可的回答)

### ✅ After (DeepSeek R1 本地版)

```text
<think>
用户提供的双重循环是 O(n^2)，数据量大时会卡死。
我可以用 Hash Map 优化到 O(n)。
变量名 'a', 'b' 意义不明，建议改为 'userList', 'targetId'。
</think>

(输出优化后的代码...)
```

_速度取决于你的电脑配置，但可以无限次提问，完全不用担心数据泄露！_

---

## 🎯 结论

现在，你的电脑里住着一位 **免费的高级工程师**。
即使断网，即使公司倒闭，你的 DeepSeek 永远都会陪着你。

现在就打开终端。
`ollama run deepseek-r1`

祝你早点下班。 🍷
