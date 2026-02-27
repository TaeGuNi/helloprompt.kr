---
layout: /src/layouts/Layout.astro
title: " \"Midjourney 캐릭터 일관성: 완벽한 캐릭터 시트 만들기\""
author: "ZZabbis"
date: "2026-02-13"
updatedDate: "2026-02-13"
category: "AI 디자인"
description: " \"每次用 AI 生成角色时脸部都会变化而感到困扰吗？本文将揭秘仅用一个 Midjourney 角色设定图提示词，就能打造出完美且一致的角色设计的独家技巧。\""
tags: ["Midjourney", "캐릭터 디자인", "AI 아트", "일관성"]
---

# 📝 Midjourney 角色一致性：打造完美的角色设定图

- **🎯 推荐对象：** 游戏开发者、网络漫画家、角色概念艺术家
- **⏱️ 所需时间：** 1小时 → 缩短至 5分钟
- **🤖 推荐模型：** ChatGPT (用于生成提示词) 与 Midjourney v6.0 及以上版本

- ⭐ **难度：** ⭐⭐☆☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用性：** ⭐⭐⭐⭐⭐

> _"每次用 AI 生成角色时，脸部都会发生微妙的变化，看起来就像另一个人，这是否让您感到非常困扰？"_

在实际业务中应用 AI 绘画时，最大的难题就是保持“角色的一致性（Consistency）”。在制作网络漫画或游戏素材时，如果每个分镜中主角的面部和服装都不一样，那就很难应用于实际项目中。解决这个问题的最可靠、最经典的方法，就是首先生成一张**“角色设定图（Character Sheet）”**。

只需一次图像生成，就能同时获得正面、侧面和背面的视图（View），为您未来的创作确立一个完美且一致的参考基准。本文将为您揭秘这一提示词工程（Prompt Engineering）的核心技巧。

---

## ⚡️ 3行总结 (TL;DR)

1. 请先生成**角色设定图（Character Sheet）**，为您的设计确立一个清晰的基准点。
2. 使用**专业版（Pro）提示词**，通过对话型 AI（如 ChatGPT）提取出完美的正/侧/背面 Midjourney 英文提示词。
3. 将 **`--ar`（宽高比）** 参数设置得较宽（例如 16:9），以防止角色身体部位重叠或被裁剪。

---

## 🚀 解决方案："角色设定图大师级提示词"

### 🥉 Basic Version (基础版)

当您只需快速在 Midjourney 中确认角色的大致氛围时，请复制并使用此版本。

> **Midjourney Prompt:**
> character sheet of a `[详细的角色描述]`, full body, white background, multiple views, front side and back view --v 6.0 --ar 3:2


### 🥇 Pro Version (专业版)

当您需要用于游戏原画或详细 3D 建模的设定图时，这是一个专业级提示词。将其输入至 ChatGPT 或 Claude 中，即可生成最理想的 Midjourney 英文提示词。

> **角色 (Role)：** 你是一位 `[3A 级 RPG 游戏首席角色设计师]`。
>
> **背景 (Context)：**
>
> - 背景：`[需要为 3D 建模和网络漫画绘制制作一致的角色参考设定图]`
> - 目标：`[推导出在 Midjourney v6.0 中完美运行的、高质量概念艺术风格的英文提示词]`
>
> **任务 (Task)：**
>
> 1. 请根据以下角色设定，撰写 1 个用于 Midjourney 图像生成的英文提示词。
> 2. 角色设定：`[请在此详细描述您期望的角色外貌、服装、武器、颜色等]`
> 3. 必须采用 **Character Sheet** 格式，并明确要求包含正面（Front view）、侧面（Side view）和背面（Back view）这 3 种以上的视角。
>
> **约束条件 (Constraints)：**
>
> - 请指定不干扰主体的干净纯白背景（Plain white background）。
> - 为了防止四肢遮挡身体，请指定 A-pose 或 T-pose（Standard neutral pose）。
> - 必须包含从头到脚完整可见的全身照（Full body shot）。
> - 为了防止阴影遮挡细节，请要求使用平光照明（Flat lighting, shadowless）。
> - 输出格式：请将英文提示词干净利落地输出在 Markdown 代码块（```text）内。
>
> **注意事项 (Warning)：**
>
> - 为了避免遗漏 Midjourney 参数，请务必在提示词的最末尾添加 `--v 6.0 --ar 16:9 --stylize 250`。
> - 请勿捏造不确定的信息，并省略不必要的开场白或补充说明。

---

## 💡 作者见解 (Insight)

这个提示词系统之所以强大，是因为它巧妙地控制了 Midjourney 最难把握的“空间布局”和“一致性”。其中，**`--ar` (Aspect Ratio, 宽高比)** 参数与构图指令的结合是重中之重。

1. **宽幅画布 (`--ar 16:9`)：** 角色设定图必须在同一个画面中并排展示至少 3 个角度的全身像。在默认比例（1:1）下，角色很容易被挤在狭小的空间里，导致相互重叠或身体部位被切出画幅。强制使用 16:9 或 3:2 的比例，能确保 AI 有足够的横向空间来绘制多角度的角色。
2. **光照控制 (Flat lighting)：** 华丽的灯光（如 Cinematic lighting 等）虽然会让插画看起来很美，但作为参考设定图却是最糟糕的选择。因为阴影会让人难以辨认服装的材质或结构。平光照明指令能保证生成结果对实际业务更加友好。

**💡 实际业务应用技巧：** 尝试将通过上述专业版提示词生成的图像，作为 Midjourney 的 `--cref` (Character Reference) 功能的源图像。这样您就能在极其完美地保持角色面部和服装一致性的前提下，无限生成各种姿势的插画。

---

## 🙋 常见问题 (FAQ)

- **Q: 生成角色设定图后，可以只微调服装或武器吗？**
  - A: 当然可以。生成设定图后，请在 Midjourney 的 Discord 中右键点击图像，选择 **'Vary (Region)'** 功能（局部重绘）。在保持面部和体型不变的情况下，用套索工具选中服装部分，输入新的提示词（例如："wearing futuristic heavy armor"），即可做到天衣无缝的修改。

- **Q: 除了写实风格，也能生成日本动漫风格（用于网络漫画）吗？**
  - A: 没问题。只需将提示词末尾的参数 `--v 6.0` 更改为动漫特化模型 `--niji 6`，您就能获得可直接用于网络漫画或 2D 游戏的高品质赛璐璐动画风格角色设定图。

---

## 🧬 提示词解剖 (Why it works?)

1. **明确多视角 (Multiple Views)：** 通过“Front, Side, Back view”这样明确的指令，我们强制 AI 构建专业的三视图布局，而不是让角色摆出随机的姿势。
2. **姿势与构图控制 (A-pose / Full body shot)：** 指定游戏和 3D 建模行业的标准姿势，有效防止了四肢遮挡服装细节的现象。
3. **隔离约束条件：** 明确了 LLM（如 ChatGPT）在编写 Midjourney 提示词时应采用的结构，从而防止 AI 产生幻觉或添加无用的背景元素。

---

## 📊 效果验证：Before & After

### ❌ Before (输入)

```text
make a character sheet of a cyberpunk warrior --v 6.0
```

> **结果：** 角色的尺寸在每个分镜中大小不一，部分身体被武器遮挡，且姿势过于动感，导致难以看清设计结构。背景中绘制了复杂的赛博朋克城市，连将角色抠图分离出来都非常困难。

### ✅ After (结果)

```text
Character sheet of a cyberpunk female warrior with a neon katana and pink hair, front view, side view, back view, full body shot, standard neutral A-pose, plain white background, flat lighting, shadowless, high quality, detailed concept art style --v 6.0 --ar 16:9 --stylize 250
```

> **结果：** 在纯白（White）背景上，角色的正面、侧面和背面以统一的比例和尺寸并排呈现。从头到脚完整无缺，图像清晰，且没有阴影干扰，服装的所有细节都能立即用作 3D 建模或作画的参考。

---

## 🎯 结论

精心制作的“角色设定图”就像是所有 AI 艺术创作的坚实蓝图。只要事先把这个骨架搭建牢固，之后无论将角色置于何种场景和背景中，其细节都不会崩塌。

运用今天学到的提示词，彻底解决令您头疼的角色一致性问题，构建出属于您自己的、极具魅力的原创角色宇宙吧！

现在，准时下班吧！🍷
