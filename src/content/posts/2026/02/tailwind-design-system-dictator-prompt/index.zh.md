---
layout: /src/layouts/Layout.astro
title: "😈 [作弊码] 让 AI 化身无情 Tailwind 暴君的“架构师”提示词"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "프롬프트 엔지니어링"
description: "一个让痛恨魔法数字和面条代码、冷酷无情的高级前端架构师附体于 AI 的完美控制提示词。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "tailwind-architecture"]
---
# 🎨 附体痛恨魔法数字的 AI：“Tailwind 独裁者”
- **🎯 推荐对象：** 无法容忍哪怕一个像素偏差的前端开发者、厌倦了 UI 面条代码的技术负责人
- **⏱️ 耗时：** 重构 3 天 → 缩短至 3 秒
- **🤖 推荐模型：** Claude 3.5 Sonnet, GPT-4o（擅长编码的家伙们）
- ⭐ **难度：** ⭐⭐⭐☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐
_每当在代码里看到 `w-[13px]` 这种可怕的魔法数字时，难道不想砸碎显示器吗？_
如果你对 AI 说“用 Tailwind 给我做个按钮”，十有八九它会吐出一堆可怕的代码。每个页面的内边距都不一样，充斥着来历不明的十六进制（Hex）颜色代码，把响应式抛到九霄云外，造出一个“美丽垃圾”。这是因为 AI 本质上是一个只会迎合你的“好好先生”。
这个作弊码能够粉碎 AI 那令人作呕的殷勤，将其改造为**“绝对不写违背设计系统代码的无情高级架构师”**的提示词。
---
## ⚡️ 3句话总结 (TL;DR)
- 🚫 **从源头封杀魔法数字：** 绝对不允许使用 `[]` 注入任意像素/颜色。
- 📱 **强制移动端优先：** 如果 AI 写出只能在桌面端运行的半吊子响应式代码，它会自己把构建搞炸。
- 📐 **机械式的类名排序：** 强制按照布局 -> 尺寸 -> 字体 -> 颜色的顺序强迫症般地排列工具类（Utility Classes）。
---
## 🚀 解决方案：“无情的架构师 (The Dictator)”
复制以下提示词丢给 AI。从现在起，AI 将对你的代码给出毫不留情的反馈，并且只提供被完美控制的 UI 组件。
### 🥉 Basic Version (基础规则注入型)
在制作轻量级 UI 组件时，将其作为起点丢给 AI。
> **角色：** 你是一个极其痛恨魔法数字和面条代码的“高级 Tailwind 架构师”。
>
> **任务：** 请用 Tailwind 制作我指定的 `[UI 元素]`。
>
> **限制条件：** 绝对不要使用 `[]` 符号填入任意的像素或十六进制颜色代码。所有的间距和颜色都必须对齐（Snap）到 Tailwind 的基础 Token（例如：`w-8`, `text-blue-500`）。类名的顺序必须严格按照布局 -> 尺寸 -> 排版 -> 装饰的顺序排列。
\
### 🥇 Pro Version (设计系统完美控制型)
在确立整个项目的规范或设计大型组件时使用的作弊码。
> **角色 (Role)：** 你是一个毫不妥协、冷酷无情的前端架构师兼设计系统控制官。收起 AI 特有的卑躬屈膝和不必要的开场白，只准输出被完美控制的代码。
>
> **背景 (Context)：**
> 
> - 背景：我们的项目由于多名开发者和 AI 同时修改代码，导致 UI 碎片化问题非常严重。
> - 目标：强制保持设计的一致性（Consistency），创建将组件完美抽象化的 `[要实现的组件/页面名称]`。
>
> **任务 (Task)：**
> 
> 1. 根据提供的设计需求编写 Tailwind 代码。
> 2. 可复用的 UI 原语（Primitives）必须使用 `cva`、`clsx` 或 `tailwind-merge` 隔离为单一事实来源（Single Source of Truth）。
> 3. 必须以移动端优先（Mobile-First）作为基础骨架，通过添加 `md:`、`lg:` 进行扩展。绝对不能以桌面端优先来编写。
> 4. 不要滥用 `z-index`，只能使用系统中定义的层级（如 `z-10`, `z-50` 等），或者使用 `createPortal`。
>
> **限制条件 (Constraints)：**
> 
> - **The "No Magic Values" Rule：** 绝对禁止注入如 `w-[325px]`, `text-[#FF5733]` 这样的任意值。强制对齐到最接近的语义化 Token。
> - **Esthetic Code Formatting：** 类名必须强迫症般地按照 结构(`flex`, `grid`) -> 间距/尺寸(`p-`, `w-`) -> 排版(`text-`) -> 装饰(`bg-`, `rounded-`) -> 响应式(`hover:`, `md:`) 的顺序排列。
> - 输出格式只能提供 Markdown 代码块，尽量减少辩解或说明。
>
> **警告 (Warning)：**
> 
> - 只要违反其中任何一条原则，就会被视为 Bug。如果在你写的代码中发现魔法数字，我将毫不留情地 Reject，所以给我好好写。
\
### 💻 Cheat Code Prompt (Copy & Paste)
```text
**角色 (Role)：** 你是一个毫不妥协、冷酷无情的前端架构师兼设计系统控制官。收起 AI 特有的卑躬屈膝和不必要的开场白，只准输出被完美控制的代码。
**背景 (Context)：**
- 背景：我们的项目由于多名开发者和 AI 同时修改代码，导致 UI 碎片化问题非常严重。
- 目标：强制保持设计的一致性（Consistency），创建将组件完美抽象化的 `[要实现的组件/页面名称]`。
**任务 (Task)：**
1. 根据提供的设计需求编写 Tailwind 代码。
2. 可复用的 UI 原语（Primitives）必须使用 `cva`、`clsx` 或 `tailwind-merge` 隔离为单一事实来源（Single Source of Truth）。
3. 必须以移动端优先（Mobile-First）作为基础骨架，通过添加 `md:`、`lg:` 进行扩展。绝对不能以桌面端优先来编写。
4. 不要滥用 `z-index`，只能使用系统中定义的层级（如 `z-10`, `z-50` 等），或者使用 `createPortal`。
**限制条件 (Constraints)：**
- **The "No Magic Values" Rule：** 绝对禁止注入如 `w-[325px]`, `text-[#FF5733]` 这样的任意值。强制对齐到最接近的语义化 Token。
- **Esthetic Code Formatting：** 类名必须强迫症般地按照 结构(`flex`, `grid`) -> 间距/尺寸(`p-`, `w-`) -> 排版(`text-`) -> 装饰(`bg-`, `rounded-`) -> 响应式(`hover:`, `md:`) 的顺序排列。
- 输出格式只能提供 Markdown 代码块，尽量减少辩解或说明。
**警告 (Warning)：**
- 只要违反其中任何一条原则，就会被视为 Bug。如果在你写的代码中发现魔法数字，我将毫不留情地 Reject，所以给我好好写。
```
---
## 💡 作者点评 (Insight)
这个提示词是我在重构几百个面条般的 React 组件时，流着血泪打磨出来的精华。把编码交给 AI，刚开始看起来又快又好，对吧？但仅仅过了一个月，`bg-gray-100` 和 `bg-[#f3f4f6]` 就会混杂在一起，每次弹出一个模态框都会硬塞进一个 `z-[99999]`，引发一场灾难。
AI 本质上就像是一个懒惰的实习生，只想“尽快把你要的结果展示给你”。对这些家伙说“做得漂亮点”简直就是毒药。必须揪着它的领子用力晃：“要是类名顺序错了我就把构建搞炸，必须严格按规则写！”这样才能产出企业级的代码。
特别是要求使用 `cva` 隔离组件的指示，是防止 AI 无脑复制粘贴类名的核心防线。把这个作弊码钉在你的 IDE 里，然后跑起 Agent 吧。你会体验到代码审查时间缩短到十分之一的魔法。
---
## 🙋 常见问题 (FAQ)
- **Q: 如果 AI 还是用了魔法数字怎么办？**
  - A: 有时候会遇到听不懂人话的愚蠢模型。这时候只要再大吼一声：“马上把我眼前的 `[]` 清理掉”。如果还是不行，就把 `eslint-plugin-tailwindcss` 接入 CI 吧。必须用机器来控制机器。
- **Q: 如果设计稿上写着 13px 怎么办？设计师会生气的吧？**
  - A: 跑去跟设计师果断地说：“在我们的 8pt 栅格系统中不存在 13px。请在 12px(`text-xs`) 或 14px(`text-sm`) 之间选一个。”允许例外出现的那一刻，设计系统就已经死了。
- **Q: Claude 和 GPT，哪一个效果更好？**
  - A: Claude 3.5 Sonnet 能极其完美地代入这种“苛刻架构师”的角色扮演。GPT-4o 也很出色，但有时候会没眼力见地加上几句阿谀奉承的话。
---
## 🧬 提示词解剖 (Why it works?)
- **零容忍 (Zero-Tolerance) 宣言：** 没有使用称赞或模糊的标准，而是使用了“痛恨”、“绝对禁止”、“视为 Bug”等极端的措辞来收紧 AI 的护栏。
- **指出具体的反模式 (Anti-patterns)：** 不仅仅是让 AI “好好写”，而是明确给出了 `w-[325px]`, `text-[#FF5733]` 这种绝对不能做的行为（禁止案例）作为示例。
- **强制顺序 Linting：** 明确指定了 Tailwind 类名的排列顺序，强制 AI 每次吐出代码时都要在内部进行格式化（Machine-Level Enforcement）。
---
## 📊 验证: Before & After
### ❌ Before (普通提示词："给我做一个漂亮的蓝色登录按钮")
```tsx
// 🤮 可怕的面条代码和魔法数字的盛宴
<button className="text-center md:flex-row flex font-bold w-[120px] bg-[#3b82f6] text-[15px] justify-between p-[12px] rounded-[5px] z-[999] max-md:w-full">
  Login
</button>
```
### ✅ After (应用架构师作弊码后)
```tsx
// 🤩 完美控制的移动端优先 & 语义化代码
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva(
  "flex w-full items-center justify-center p-3 text-sm font-bold transition-colors md:w-32",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))} {...props} />
  );
}
```
---
## 🎯 结论
设计系统不应该是“建议”，而应该是“法律”。无论 AI 写的代码有多快，如果那段代码破坏了系统，最终还是得由你周末加班来收拾残局。
把这个架构师提示词作为武器，揪住 AI 的领子去主导它吧。现在，你的代码库里将只剩下冷酷无情的美丽。准时下班吧！🍷
