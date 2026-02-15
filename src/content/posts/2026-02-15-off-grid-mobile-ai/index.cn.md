---
title: "Off Grid：在手机上离线运行 AI 文本、图像生成和视觉识别"
description: "介绍 Off Grid，一款开源工具，可在没有互联网连接的情况下在智能手机上离线运行文本、图像和视觉 AI。"
date: 2026-02-15
tags: ["AI", "Local LLM", "Mobile", "Offline", "Privacy", "Open Source"]
category: "AI Tools"
author: "Assistant"
---

## Off Grid 是什么？

[Off Grid](https://github.com/alichherawalla/off-grid-mobile) 不仅仅是一个本地 LLM 聊天应用程序；它是一个完整的离线 AI 套件，直接在您的智能手机硬件上运行。它在没有互联网连接的情况下提供文本生成、图像生成、视觉 AI、语音转录和文档分析等功能。所有数据仅在设备上处理，不会泄露到外部，确保了极佳的隐私保护。

## 主要功能

### 1. 文本生成 (Text Generation) {#text-generation}

支持最新的轻量级模型，如 Qwen 3、Llama 3.2、Gemma 3 和 Phi-4，还可以加载 `.gguf` 文件格式的自定义模型。在旗舰设备上，它以每秒 15-30 个 token 的速度快速响应，支持流式响应和“思考模式”。

### 2. 图像生成 (Image Generation) {#image-generation}

在设备上运行 Stable Diffusion，提供实时预览。利用 Snapdragon 芯片组的 NPU 加速，可以在 5-10 秒内生成图像（iOS 使用 Core ML），支持包括 Absolute Reality 和 DreamShaper 在内的 20 多个模型。

### 3. 视觉 AI (Vision AI) {#vision-ai}

您可以将相机对准物体或文档，然后向 AI 提问。使用 SmolVLM、Qwen3-VL 等，可以分析文档、阅读收据和描述场景。

### 4. 语音输入和文档分析

内置 OpenAI 的 Whisper 模型，支持语音转文本，您还可以将 PDF、代码文件、CSV 等附加到对话中，以分析和总结内容。

## 性能 (Performance) {#performance}

在配备 Snapdragon 8 Gen 2/3 或 Apple A17 Pro 芯片组的旗舰设备上的性能如下：

- **文本生成:** 15-30 tok/s
- **图像生成 (NPU):** 5-10 秒
- **视觉 AI:** 约 7 秒
- **语音识别:** 实时处理

## 安装方法

Android 用户可以从 [GitHub Releases](https://github.com/alichherawalla/off-grid-mobile/releases/latest) 页面下载并安装最新的 APK 文件。iOS 用户必须编译源代码进行安装。

## 结论

Off Grid 允许您在没有云依赖的情况下在手持设备上利用强大的 AI 功能。如果数据隐私很重要，或者您想在互联网连接困难的环境中使用 AI，我们强烈建议您尝试一下。
