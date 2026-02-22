---
layout: /src/layouts/Layout.astro
title: "感性的背景模糊 'Bokeh & Depth of Field'"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "图像生成"
description: "模糊背景以突出被摄体，制造感性光斑 (Bokeh) 的提示词。"
tags: ["Midjourney", "DALL-E", "Stable Diffusion", "Photography", "Effect"]
---

# 📝 光斑的魔法: Bokeh & Depth of Field

- **🎯 推荐对象:** 设计师、内容创作者、摄影爱好者、新媒体运营
- **⏱️ 所需时间:** 5分钟 → 1分钟
- **🤖 推荐模型:** 所有图像生成 AI (Midjourney, DALL-E 3, Stable Diffusion 等)

- ⭐ **难度:** ⭐⭐☆☆☆
- ⚡️ **有效性:** ⭐⭐⭐⭐⭐
- 🚀 **实用性:** ⭐⭐⭐⭐☆

> _“想要主体清晰锐利，背景却如梦似幻般化作唯美光斑？你只需掌握一个摄影词汇。”_

**Bokeh (散景)** 是指未对焦区域的光源模糊成光斑的物理现象。利用 **Shallow Depth of Field (浅景深)**，我们可以将视觉焦点牢牢锁定在被摄主体上，营造出电影般浪漫、高级的氛围。在 AI 图像生成中，精准地使用这些摄影术语，能让原本平庸的照片瞬间拥有商业单反级的质感。

---

## ⚡️ 3行总结 (TL;DR)

1. `Bokeh` (散景) 和 `Blurry background` (背景模糊) 是打造高级感的必杀关键词。
2. 务必加入 `Shallow depth of field` (浅景深) 或具体的镜头光圈值（如 `f/1.8`, `f/1.2`）以增强物理真实感。
3. 带有霓虹灯的夜间街道或雨夜城市，是展现华丽散景效果的最佳舞台。

---

## 🚀 解决方案: "Night Portrait Prompt"

### 🥉 Basic Version (基础版)

当你只需要快速获得带有背景模糊效果的基础出图时使用。

> **角色:** 你是一位专业的肖像摄影师。
> **请求:** 请生成一张具有感性光斑 (Bokeh) 效果的照片，模糊背景以突出主体。主体是 `[你的被摄体，例如：一只正在喝咖啡的猫]`，背景是 `[场景，例如：夜晚的咖啡馆]`。

<br>

### 🥇 Pro Version (专家版)

需要达到商业级单反质感，对光影和细节有极高要求时使用。

> **角色 (Role):** 你是一位拥有 20 年经验的顶级商业肖像摄影师，精通徕卡 (Leica) 镜头的特性与电影级布光。
>
> **状况 (Context):**
>
> - 背景: 需要为一篇时尚杂志文章生成一张极具氛围感的夜间肖像图。
> - 目标: 创造出令人惊艳的背景光斑 (Bokeh)，同时保持主体面部极其锐利。
>
> **请求 (Task):**
>
> 1. 请使用以下参数作为 AI 绘画模型的 Prompt 核心。
> 2. `[主体]` 和 `[场景]` 部分由用户自定义。
>
> **核心 Prompt 结构:**
>
> **Subject:** Portrait of `[主体, e.g., a jazz musician playing saxophone]`, set in `[场景, e.g., a rainy street at night]`.
> **Camera:** Bokeh background, shallow depth of field, f/1.2 aperture, sharp focus on face, shot on 85mm lens.
> **Style:** Cinematic mood, colorful city lights blurring in background, emotional, high resolution, photorealistic, 8k.
>
> **约束条件 (Constraints):**
>
> - 绝对不要生成带有卡通或 3D 渲染质感的图像，必须是 100% 真实照片风格 (Photorealistic)。
>
> **注意事项 (Warning):**
>
> - 确保背景中存在足够的光源（如路灯、车灯），否则无法形成高质量的散景光斑。

---

## 💡 作者见解 (Insight)

在 AI 绘图中，很多新手常常抱怨生成的照片“太假”或者“太像网图”。核心原因在于缺乏真实的**光学物理反馈**。通过加入 `f/1.2 aperture` (光圈) 和 `85mm lens` (焦距) 这样的具体摄影参数，我们实际上是在强迫 AI 模拟真实世界中顶级镜头的物理特性。这种方法在处理夜景或背后有密集点光源（如车水马龙、圣诞树灯饰）的场景时尤为惊艳，能瞬间拉升画面的整体格调，是电商配图和社媒发文的绝佳利器。

---

## 🙋 常见问题 (FAQ)

- **Q: 这些提示词在 Midjourney 和 DALL-E 中都适用吗？**
  - A: 是的，摄影术语在主流 AI 绘图工具中都是通用的底层逻辑。不过，Midjourney 对 `f/1.2` 这类光学参数的光影还原度通常比 DALL-E 更加细腻逼真。

- **Q: 为什么我加了 Bokeh，但背景还是显得很乱，没有光斑？**
  - A: 散景的形成需要满足两个条件：一是背景有“点光源”，二是主体与背景有足够的距离。你可以尝试在 Prompt 中补充 `subject is close to the camera`（主体靠近镜头）或 `distant background`（遥远的背景），并在场景设定中强调 `colorful lights in the background`（背景中有色彩丰富的灯光）。

---

## 🧬 提示词解剖 (Why it works?)

1. **精确的光学指令:** 摒弃了单纯的“模糊背景”这种模糊的词汇，转而使用 `f/1.2 aperture` 和 `Shallow depth of field`，赋予了 AI 明确的物理光学逻辑。
2. **光源配合:** `colorful city lights` (多彩的城市灯光) 为散景效果提供了完美的“发光点”，这是产生唯美圆润 Bokeh 的核心前提。

---

## 📊 对比证明: Before & After

### ❌ Before (输入)

```text
Musician in street night.
```

_(结果: 背景里的广告牌字体清晰可见，画面扁平，视线被杂乱的街道元素严重分散。)_

### ✅ After (结果)

```text
Portrait of a jazz musician playing saxophone, rainy street at night. Bokeh background, shallow depth of field, f/1.2 aperture, sharp focus on face. Cinematic mood, colorful city lights blurring.
```

_(结果: 音乐家背后的霓虹灯化作了唯美圆润的光斑，人物表情细节拉满，画面呈现出高级的电影级质感。)_

---

## 🎯 结论

模糊不仅仅是失焦，它是一种突出核心的美学。用一个完美的 Bokeh 提示词，让你的 AI 摄影作品瞬间身价倍增吧！

现在，准时下班吧！🍷
