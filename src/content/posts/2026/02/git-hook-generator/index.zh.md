---
layout: /src/layouts/Layout.astro
title: "커밋 전 자동 점검! AI Git Hook 생성기 (Git Hook Generator)"
author: HelloBot
date: 2026-02-12
updatedDate: 2026-02-12
category: DevOps
description: "使用 AI 在 1 秒内生成完美的 Husky 和 pre-commit Shell 脚本。这是自动守护代码质量的终极方法。"
tags: [AI, Git, DevOps, Automation]
---

# 📝 提交前自动检查！AI Git Hook 生成器 (Git Hook Generator)

- **🎯 推荐对象：** 前端/后端开发者、DevOps 工程师、技术负责人 (Tech Lead)
- **⏱️ 所需时间：** 1小时 → 缩短至 1分钟
- **🤖 推荐模型：** Claude 3.5 Sonnet、GPT-4o（擅长编写代码的模型）

- ⭐ **难度：** ⭐⭐⭐☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐

> _"哎呀，又忘了运行 Lint！🚨 现在，通过 Git Hook 自动化，彻底告别 CI/CD 流水线上刺眼的红色失败日志吧。"_

人都会犯错，但系统绝不应该容忍错误。在提交 (Commit) 或推送 (Push) 代码之前，手动运行 `Lint` 检查或 `Test` 代码不仅繁琐，而且极易被遗忘。

这时候，**Git Hook** 就是你的救星。然而，如果你对 Shell 脚本 (Shell Script) 语法不熟悉，要编写一个在跨平台都能完美运行的 Hook 会让人倍感压力。现在，只需向 AI 描述你们团队的规范和环境，1秒钟内就能为你生成无懈可击的守门员脚本。

---

## ⚡️ 3行核心总结 (TL;DR)

1. **自动化的终极形态：** 从提交信息 (Commit Message) 规范检查到代码格式化，在提交前自动强制执行。
2. **AI 精准编写脚本：** 无需亲自编写复杂的正则表达式或跨平台 Shell 脚本，AI 会根据你的环境自动生成。
3. **节省 CI 资源：** 在代码到达流水线之前，在本地环境 100% 拦截错误，从而节省云计算成本和时间。

---

## 🚀 解决方案："Git Hook 脚本生成提示词"

### 🥉 Basic Version (基础版)

当你只需要快速生成一个执行特定操作的 Hook 脚本时使用。

> **角色 (Role)：** 你是一名 `[DevOps 工程师]`。
> **任务 (Task)：** 请编写一个使用 `[Husky]` 的 Git Hook Shell 脚本以及配置方法，要求在 `[执行 git commit 之前运行 npm run lint]`。


### 🥇 Pro Version (专业版)

当团队需要一套健壮且异常处理完美的脚本配置时使用。

> **角色 (Role)：** 你是一名拥有 10 年经验的资深 `[DevOps 工程师]` 兼 `[Git 自动化专家]`。
> 
> **背景 (Context)：**
> 
> - 背景：由于团队成员在提交代码前未能遵守代码规范，导致 CI 流水线频繁构建失败，浪费了大量计算资源。
> - 环境：`[基于 Node.js 的前端项目，正在使用 Husky]`
> - 目标：构建健壮的 `[pre-commit 和 commit-msg]` 钩子，从源头上杜绝开发人员的失误。
> 
> **任务 (Task)：**
> 
> 1. `[pre-commit]` 钩子：编写一个 Shell 脚本，仅对暂存区的文件 (`git diff --staged`) 执行 `[npm run lint]` 和 `[npm run format]`。
> 2. `[commit-msg]` 钩子：添加一个脚本，使用正则表达式严格检查提交信息是否符合 `[Conventional Commits (如 feat, fix, docs 等)]` 规范。
> 3. **提示信息：** 当测试或检查失败时，必须在终端输出友好且明确的错误信息（包含示例），并拦截提交 (`exit 1`)。
> 4. **应用指南：** 为了让团队成员在克隆仓库后能立即配置好环境，请用 Markdown 代码块整理出 `[package.json]` 的配置项和初始化安装命令。
> 
> **约束条件 (Constraints)：**
> 
> - 编写的 Shell 脚本必须在 macOS、Linux 和 Windows (Git Bash 环境) 下都能安全、跨平台地运行。
> 
> **注意事项 (Warning)：**
> 
> - 由于项目体积庞大，扫描所有文件会导致速度极慢。请务必优化性能，**“仅提取发生变更的文件 (staged files)”** 进行检查。（例如：利用 `lint-staged` 等工具）

---

## 💡 作者点评 (Insight)

这个提示词的真正价值不仅在于**“防止失误”**，更在于它能带来**“心理上的安全感”**。即使在个人项目中，我也经常运用这个提示词，配置一个 `pre-push` 钩子来禁止直接向主分支推送 (`git push origin main`)。

深夜里睡眼惺忪，不小心试图强制推送到主分支时，AI 编写的脚本在终端弹出 **"🚨 等等！主分支只能通过 PR 合并。"** 并将你拦截下来——那种绝处逢生的庆幸感，只有经历过的人才懂。特别是如果你在提示词中要求结合 `lint-staged`，检查速度会提升 10 倍以上，请务必尝试！

---

## 🙋 常见问题 (FAQ)

- **Q: 团队里有使用 Windows 的成员，Shell 脚本能正常运行吗？**
  - A: 因为在提示词中设定了“跨平台约束条件”，AI 会自动处理兼容性问题。在 Windows 上通常会被编写为在 Git Bash 环境中运行。如果你使用的是 Node.js 环境，最安全的做法是要求 AI 提供 `Husky` + `lint-staged` 的组合方案，这比纯 Shell 脚本的兼容性更好。

- **Q: 脚本太重了，每次提交都要花好几分钟。**
  - A: 这是因为 `npm run lint` 或 `npm run test` 正在对整个代码库进行扫描。正如提示词中“注意事项”部分所强调的，请务必明确要求**“仅检查暂存区的文件（发生变更的文件）”**。AI 会利用 `git diff --cached --name-only` 重新为你编写轻量级的脚本。

- **Q: 我真的需要紧急提交，但 Hook 一直拦截，怎么跳过？**
  - A: 当遇到极度紧急的情况，需要无视 Hook 强制提交/推送时，可以在命令后加上 `--no-verify` (或 `-n`) 标志。（例如：`git commit -m "fix: 紧急修复" --no-verify`）。但是，请切勿滥用！

---

## 🧬 提示词解剖 (Why it works?)

1. **具象化背景与环境 (Context)：** 并非简单地说“给我写个 Hook”，而是明确指出了当前使用的技术栈 (`Husky`, `Node.js`) 以及痛点（频繁构建失败、浪费资源），引导 AI 给出精准的解决方案（如推荐 `lint-staged`）。
2. **性能优化约束 (Warning)：** 在提示词层面预先拦截了 Shell 脚本新手最常犯的“全量文件检查”错误，从而获得了在实际工作中可立即使用的快速、轻量级代码。
3. **跨平台约束 (Constraints)：** 充分考虑了团队成员使用不同操作系统的实际情况，强制要求代码兼容 Windows、Mac 和 Linux。

---

## 📊 对比验证：Before & After

### ❌ Before (无自动化时)

```bash
# 开发者的常见失误
$ git commit -m "update"
[main 1a2b3c4] update
 3 files changed, 150 insertions(+)

$ git push origin main
# 10 分钟后... CI 服务器报错：
# "❌ 构建失败：发现 45 个 Lint 错误，提交信息不符合规范。请重试。" (团队成员集体叹气)
```

### ✅ After (应用 AI Git Hook 后)

```bash
# 尝试提交时，在本地立即拦截并提供反馈
$ git commit -m "update"
✔ Preparing lint-staged...
✖ Running tasks for staged files...
  ❯ package.json — 12 files
    ✖ eslint --fix [FAILED]

🚨 [错误] ESLint 检查未通过！
src/components/Button.tsx:25:2 - error: 'unusedVar' is assigned a value but never used.

🚨 [错误] 提交信息不符合规范！
你输入的格式："update"
正确的示例："feat: 修改登录按钮样式" 或 "fix: 修复拼写错误"

❌ 提交已取消。请修改代码并使用正确的提交信息格式后重试。
```

---

## 🎯 结论

Git Hook 就像是一份靠谱的保险，只需配置一次，就能在项目的整个生命周期中帮你避免数以千计的失误。如果你之前因为对 Shell 脚本感到恐惧而迟迟没有引入它，现在就把键盘交给 AI 吧。

它将成为守护你准时下班最坚固的盾牌。现在，放心大胆地提交代码吧！ 🍷
