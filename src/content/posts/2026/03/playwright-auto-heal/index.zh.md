---
layout: /src/layouts/Layout.astro
title: "E2E 测试总是报错中断？用 Playwright Auto-healing 提示词 1 分钟搞定 🛠️"
author: "Jay"
date: "2026-03-01"
updatedDate: "2026-03-01"
category: " "
description: "公开实战提示词：用 AI 自动修复因选择器变更而崩溃的 Playwright 测试。"
tags: ["prompt-engineering", "ai-agent", "playwright-auto"]
---
# 📝 E2E 测试总是报错中断？用 Playwright Auto-healing 提示词 1 分钟搞定 🛠️


- **🎯 推荐对象：** QA 工程师、前端开发者、测试自动化负责人
- **⏱️ 耗时：** 2小时 → 缩短至 1 分钟
- **🤖 推荐模型：** Claude 3.5 Sonnet, GPT-4o
- ⭐ **难度：** ⭐⭐⭐☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐

_“昨天还跑得好好的 E2E 测试，今天早上就因为改了一个按钮的 CSS 类名全挂了。难道又要去重新找选择器吗？”_
在进行前端开发或 QA 工作时，UI 变更导致 E2E（端到端）测试崩溃简直是家常便饭。尤其是在使用 Playwright 或 Cypress 这类工具时，一旦 DOM 结构或类名发生变化，测试代码必定会无情地抛出错误。每次都要去找出错的测试，打开开发者工具，复制新的选择器，这个过程极其浪费时间。现在，让我们把错误日志和修改后的 HTML 结构丢给 AI，让它自己进行“Auto-healing（自动修复）”吧。
---
## ⚡️ 3句话总结 (TL;DR)
1. 这是一个让 AI 自行分析并修复因 UI 变更而崩溃的 Playwright 选择器的提示词。
2. 不仅仅是修改代码，你还能获得编写强健（Resilient）、抗变更的选择器策略建议。
3. 只需提供错误日志和最新的 DOM 快照，1 分钟内就能得到修复后的代码。
---
## 🚀 解决方案："Playwright 自愈 (Auto-healing) 提示词"

### 🥉 Basic Version (基础版)
当你只想快速把报错的代码和错误信息丢过去，并直接获取修改后的代码时，请使用此版本。
> **角色：** 你是一名 `[资深 QA 工程师]`。
> **任务：** 请根据提供的 Playwright 错误日志和新的 HTML，修复 `[崩溃的测试代码]`。
### 🥇 Pro Version (专业版)
当你不仅想要简单的修复，还希望能重构为易于维护、稳健的代码时，请使用此版本。
> **角色 (Role)：** 你是一名测试自动化专家 `[资深 SDET (Software Development Engineer in Test)]`。你对 Playwright 的最佳实践 (Best Practices) 了如指掌。
> 
> **背景 (Context)：**
> 
> - 背景：最近的 UI 更新导致现有的 Playwright E2E 测试失败。主要原因是选择器 (Selector) 发生了变更。
> - 目标：修复失败的测试代码，并将其优化为对未来 UI 变更具有强抗性 (Resilient) 的稳健选择器结构。
> 
> **任务 (Task)：**
> 
> 1. 分析下方提供的 `[错误日志]` 和 `[变更后的 HTML 结构]`，找出错误的根本原因。
> 2. 修改 `[现有测试代码]`，使测试能够重新通过。
> 3. 修改时，优先使用面向用户 (User-Facing) 的属性（如文本、ARIA 属性、data-testid 等），而不是依赖 CSS 类名或 XPath。
> 4. 对修改的部分添加简短的代码注释，说明“为什么要这样修改”。
> 
> **输入数据：**
> - 错误日志：`[完整复制/粘贴错误日志]`
> - 变更后的 HTML 结构：`[从开发者工具中复制的相关 HTML 片段]`
> - 现有测试代码：`[失败的 Playwright 代码片段]`
> 
> **约束条件 (Constraints)：**
> 
> - 输出必须是可直接复制/粘贴的完整代码块格式。
> - 必须优先使用 Playwright 的内置定位器 (Locators)（例如：`getByRole`、`getByText`、`getByTestId`）。
> 
> **注意事项 (Warning)：**
> 
> - 如果在提供的 HTML 片段中找不到合适的元素，请不要强行猜测，请回答：“由于 HTML 信息不足，无法找到准确的选择器。请提供额外的 DOM 信息。”
---

## 💡 作者点评 (Insight)
在实际工作中，当几十个测试同时崩溃时，这种方法就能发挥出真正的价值。过去，只要一个选择器变了，我就得打开 30 个测试文件，挨个用 `Ctrl + F` 搜索并修改。但是，如果把这个提示词注册到 IDE 内置的 AI 或 Claude 中，只需把错误日志和浏览器 Elements 标签页的复制内容丢给它，就能完美地将繁琐的选择器提取工作外包出去。
特别需要强调的是“使用面向用户的属性”这个约束条件。AI 默认倾向于定位最简单的 CSS 类名，但加上这个约束后，它就能写出像 `getByRole('button', { name: 'Submit' })` 这样优秀的代码。这是能让你至少提前 1 小时下班的利器。试一次你就知道了！
---

## 🙋 常见问题 (FAQ)
- **Q: HTML 结构太长怎么办？**
  - A: 不需要复制整个页面，只需复制报错元素（如按钮或表单）及其父级标签的 HTML 结构提供给 AI 即可。
- **Q: 除了 Playwright，能在 Cypress 或 Selenium 中使用吗？**
  - A: 可以的，只需把提示词中的“Playwright”替换为你正在使用的工具名称，它同样能出色地完成任务。
- **Q: 在没有 `data-testid` 的项目中也能正常工作吗？**
  - A: 是的，AI 会聪明地找到基于无障碍访问（Accessibility）的替代方案，比如 `getByRole` 或 `getByText`。
---
## 🧬 提示词解剖 (Why it works?)
1. **赋予 SDET 角色设定：** 让 AI 具备专业测试工程师的视角，而不是普通开发者，从而引导其生成符合 Playwright 最佳实践的代码，而不仅仅是能跑通的代码。
2. **强制使用 User-Facing 定位器：** 在提示词层面强制执行 Playwright 的核心理念，从根本上减少测试的不稳定性 (Flakiness)，从而提升代码质量。
3. **防止幻觉的安全机制：** 为了防止 AI 在信息不足时生成无意义的代码，导致调试更加混乱，明确设定了“不知道就说不知道”的约束条件。
---
## 📊 效果验证：Before & After
### ❌ Before (输入)
```text
错误日志：
Error: locator.click: Target closed
=========================== logs ===========================
waiting for locator('.btn-primary.submit-btn')
============================================================
变更后的 HTML 结构：
<div class="actions">
  <button class="button--blue" aria-label="Submit Order">Order Now</button>
</div>
现有测试代码：
await page.locator('.btn-primary.submit-btn').click();
```
### ✅ After (结果)
```typescript
// 修改原因：CSS 类名 ('.btn-primary.submit-btn') 发生了变更，导致测试失败。
// 改进方案：使用无障碍属性 (ARIA label) 和 Role 替代容易变更的 CSS 类名，使其对 UI 变更具有更强的抗性。
await page.getByRole('button', { name: 'Submit Order' }).click();
```
---
## 🎯 结论
测试代码是守护产品代码的盾牌，但我们绝不应该在修补盾牌上浪费太多时间。利用 AI Auto-healing 提示词，逃离维护的地狱吧。
现在，把修复测试的时间交给 AI，你只需享受一杯咖啡的悠闲，准点下班！🍷
