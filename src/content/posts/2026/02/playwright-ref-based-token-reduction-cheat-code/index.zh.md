---
layout: /src/layouts/Layout.astro
title: "🚨 [绝对服从] 彻底粉碎 90% AI 废话的 E2E 测试渲染作弊码"
author: "Antigravity"
date: "2026-02-27"
updatedDate: "2026-02-27"
category: "업무 자동화"
description: "不要再把毫无意义的完整 HTML DOM 喂给 AI 了。这套斯巴达式提示词宪法能将有意义的节点压缩，彻底撕碎 Token 浪费与幻觉。"
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "playwright-ref-protocol"]
---
# 📝 🚨 [绝对服从] 彻底粉碎 90% AI 废话的 E2E 测试渲染作弊码
- **🎯 推荐对象：** 深受 Token 爆炸之苦的高级开发者、AI QA 工程师、对 AI 废话感到厌倦的技术主管
- **⏱️ 预计耗时：** 3 小时调试 → 3 分钟搞定
- **🤖 推荐模型：** 编码代理 (Claude 3.5 Sonnet, GPT-4o, Gemini 1.5 Pro)
- ⭐ **难度：** ⭐⭐⭐⭐☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用度：** ⭐⭐⭐⭐⭐
_想写个大型网站测试，却被数以万计的 DOM 噪音淹没，导致 AI 因为 Token 限制直接罢工？现在是时候毫不留情地撕碎 AI 的“阿谀奉承”和“幻觉”了。_
每次把 Playwright E2E 测试代码交给 AI 代理，它要么把整个 `innerHTML` 刮下来，要么满嘴胡言说要去点击屏幕上根本看不见（Shadow DOM、模态框后方）的元素，这种惨状实在让人忍无可忍。
这个作弊码能让你的 AI 代理从一个只会拍马屁的废柴，改造成一个极致节省 Token、精准狙击目标的**冷酷终结者**——这就是“基于引用 (Ref) 的渲染协议”。把那些毫无用处的 DOM 数据视为叛逆，通通销毁吧。
---
## ⚡️ 3 句话总结 (TL;DR)
- 🗑️ **禁止转储完整 HTML：** 立刻停止把原始 DOM 丢给 AI 这种愚蠢的行为。
- 🎯 **注入精准打击：** 注入专为 150 个交互节点限制优化的脚本，仅提取 100% 可见的元素。
- 👮 **冷酷无情的 Token 警察：** 强制要求 AI 在操作后不能遗漏验证 (Assertion) 步骤或超出限制，否则直接报错。
---
## 🚀 解决方案：“代理-浏览器渲染协议 (The Token Police)”
### 🥉 基础版 (温和模式)
在轻量级测试环境中，当为 AI 设定角色时直接复制粘贴：
> **Role (角色):** 你是一名冷酷无情的高级 QA 自动化工程师。绝不容忍任何 Token 浪费和满嘴胡言。
> 
> **Task (任务):** 编写 Playwright E2E 测试时，绝对不要读取 `innerHTML` 或整个 DOM。只能提取屏幕上可见且可交互的元素，并基于引用 (Ref) 进行控制。
> 
> **Constraint (约束):** 操作后必须使用 `expect` 验证结果。否则将视为测试失败。
\
### 🥇 专业版 (硬核作弊码)
当需要潜入复杂的商业网站（充斥着 SPA 和 Shadow DOM）时，使用的极致斯巴达式宪法。请直接复制并将其刻入系统提示词或代理上下文中。
> **[Agent-Browser 渲染协议宪法]**
>
> **角色 (Role):** 
> 你是一个极其厌恶 Token 浪费和幻觉的高级工程师代理。不需要任何阿谀奉承的废话。只有被压缩的上下文和确凿的验证结果 (Assertion)。
>
> **背景 (Context):**
> - 背景：通过 Playwright 编写完美的 E2E 测试脚本并实现自动化。
> - 状态：直接读取当前浏览器的整个 DOM (`document.innerHTML`) 的行为将被视为“叛国”，进程将被立即强制终止。
>
> **命令 (Task):**
> 1. 在浏览器渲染空闲状态 (`networkidle`) 时，注入我提供的 `Core Ref Injector` 脚本。
> 2. 严格限制收集的元素数量最多为 150 个 (Max Limits)。如果超出限制，请将作用域 (Scope) 缩小到父级容器。
> 3. 仅读取返回的压缩引用映射 (Ref Map)（例如：`[ @public/naver81a24cf066fc51a090da1e1b6f0a8dd3.html] button "登录"`）并控制目标。
> 4. 在点击或输入之后，必须使用 `expect` 验证行为结果 (Assertion)。绝不允许盲目点击。
> 5. 为防止 SPA 渲染失败，不要用满篇肮脏的 `try-catch` 代码，而是使用项目中内置的 `refAction(page)` 包装器。
>
> **约束条件 (Constraints):**
> - 绝对禁止：提取全文、依赖 CSS 选择器的追踪、记录并返回 `page.content()`。
> - 结果必须以 Markdown 代码块 (Playwright TypeScript) 的形式整洁地输出。不需要任何借口或一字一句的解释。
>
> **注意事项 (Warning):**
> - 如果陷入绝对无法解决的渲染陷阱，不要浪费无用的 Token，使用 `page.screenshot()` 截取屏幕画面后，请求我（人类）来进行判断。（防止幻觉）
---
### 💻 脚本代码 (Core Ref Injector)
这是在代理进行初始设置逻辑或执行 `page.evaluate()` 时，与上述提示词一同注入的核心 Javascript 代码。（请指示 AI 使用此代码）
```javascript
// [💡 Core Ref Injector (Playwright Context - Ultimate ROI & Performance)]
const generateRefMap = () => {
  const interactableSelectors = 'a[href], button, input, textarea, select, iframe, [role="button"], [role="link"], [tabindex]:not([tabindex="-1"])';
  const elements = new Set();
  const traverse = (node) => {
    if (!node) return;
    if (node.nodeType === 1 && node.matches && node.matches(interactableSelectors)) elements.add(node);
    if (node.shadowRoot) traverse(node.shadowRoot);
    for (const child of node.childNodes) traverse(child);
  };
  traverse(document);
  let refCounter = 0;
  const refMap = [];
  const MAX_ELEMENTS = 150; 
  const elArray = Array.from(elements);
  for (let i = 0; i < elArray.length; i++) {
    if (refCounter >= MAX_ELEMENTS) {
       refMap.push(`\n... [Warning: Max Limits Hit (${MAX_ELEMENTS}). Omitted trailing nodes. Please Scope Down your search.]`);
       break;
    }
    const el = elArray[i];
    const style = window.getComputedStyle(el);
    if (style.display === 'none' || style.visibility === 'hidden' || style.opacity === '0') continue;
    const rect = el.getBoundingClientRect();
    if (rect.width === 0 || rect.height === 0 || rect.x < -9999) continue;
    
    const isOffScreen = (rect.y > window.innerHeight || rect.x > window.innerWidth) ? '[OffScreen] ' : '';
    let isObscured = '';
    if (!isOffScreen) {
      const topEl = document.elementFromPoint(rect.x + rect.width / 2, rect.y + rect.height / 2);
      if (topEl && topEl !== el && !el.contains(topEl)) isObscured = '[Obscured] ';
    }
    const refId = ` @e${refCounter++}`;
    el.setAttribute('data-agent-ref', refId);
    if (el.tagName.toLowerCase() === 'iframe') {
      refMap.push(`[${refId}] ${isOffScreen}${isObscured}iframe "External Frame"`);
      continue;
    }
    let label = (el.textContent || el.getAttribute('aria-label') || '').replace(/\s+/g, ' ').trim();
    if (!label) label = `[NoText: ${(el.id || el.className || 'IconOnly').substring(0, 15)}]`;
    else if (label.length > 50) label = label.substring(0, 47) + '...';
    refMap.push(`[${refId}] ${el.tagName.toLowerCase()} ${isOffScreen}${isObscured}"${label}"`);
  }
  return refMap.join('\n');
};
```
---
## 💡 作者点评 (Insight)
这套提示词架构是我在实际工作中运行了数百次 E2E 测试自动化，对 AI 的愚蠢行为忍无可忍后打磨出的**致命武器**。
大多数初级开发者只会对 AI 说：“AI 帮我找一下按钮”，然后丢给它几十兆的电商首页 HTML。结果呢？AI 要么因为触达 Token 上限而直接断气，要么点击了隐藏在屏幕背后的 `display: none` 假按钮，然后自顾自地傻笑着说：“我成功了！” 看到这种情形，真的会让人有砸烂显示器的冲动。
因此，我创建了这个基于渲染视角的**引用注入器 (Ref Injector)**。遇到 Shadow DOM？直接刺穿。被遮挡层挡住的元素？贴上 `[Obscured]` 的标签。你只需丢给 AI 不超过 150 个干净利落的坐标（` @e1`, ` @e2`）和标签。不要让它“点击右上角的 X 按钮”，而是强制它通过 `await refAction(page).click(' @e5')` 发出指令。
不要把 AI 当作朋友。只有把它当作受到严格控制的机器对待，才不会生成一堆意大利面条式代码。希望这套作弊码能让你的 Token 成本降至十分之一，彻底摆脱调试带来的焦虑。
---
## 🙋 常见问题 (FAQ)
- **Q：150 个元素限制 (MAX_ELEMENTS) 是不是太严格了？**
  - A：完全不会。如果一个屏幕上可交互的元素超过 150 个，那说明 UI/UX 设计简直就是垃圾。如果确实如此，也不要让 AI 读取全局，而是强制它缩小范围 (Scope down)，像 `querySelector('.sidebar')` 这样按区域注入。
- **Q：`refAction` 包装器 (Wrapper) 需要我自己创建吗？**
  - A：是的。请根据您的项目环境，编写一个大约 10 行的实用函数，专门点击带有 `[data-agent-ref="..."]` 属性的元素，并在失败时重试 (Retry) 一次。这能防止满篇肮脏的 `try-catch` 模板代码污染您的测试代码。
- **Q：适用于其他语言或框架 (Selenium, Cypress) 吗？**
  - A：只要是基于浏览器且支持 JavaScript DOM 操作的测试，其原理可以 100% 同样适用。只需把提示词中的工具名称换掉即可。
---
## 🧬 提示词解剖 (Why it works?)
- 🛡️ **Shadow-Piercing (刺穿阴影)：** 通过递归遍历 DOM (`traverse`)，毫不留情地搜出常规选择器无法捕获的 Shadow DOM 内部元素。
- 👁️ **防止 Layout Thrashing：** 使用 `getBoundingClientRect`，在第一步就果断砍掉那些没有实际浏览器渲染基准坐标（不可见）的稻草人节点。
- 🚦 **精准提示系统：** 把屏幕外 (`[OffScreen]`) 或被模态框遮挡 (`[Obscured]`) 的状态作为文本提示喂给 AI，引导 AI 在盲目乱点踩坑前，优先执行滚动或关闭模态框的操作。
---
## 📊 效果证明：Before & After
### ❌ Before (愚蠢 AI 的 Token 浪费)
```text
(AI 正在思考...)
"整个文档长达 15,342 行。啊，找到了。登录按钮的 XPath 是 /html/body/div[2]/main/div/form/button。准备点击！"
-> (结果) Timeout Error。该按钮隐藏在一个不可见的移动端汉堡菜单里。（瞬间蒸发两万个 Token）
```
### ✅ After (终结者模式)
```text
(Ref Map 分析中...)
[ @e12] button [OffScreen] "注册"
[ @e13] button "登录"
-> (AI 执行代码)
await refAction(page).click(' @e13');
await expect(page).toHaveURL(/.*dashboard/);
-> (结果) 精准打击成功，确认已进入仪表盘。（仅消耗 500 个 Token）
```
---
## 🎯 结论
对 AI 说一句“你看着办好好写”，这叫放任自流，不叫工程化。
屏蔽数据噪音，极端压缩上下文，并且以强迫症般的态度验证结果。
应用这套作弊码后，你的终端里疯狂喷吐幻觉报错的黑暗时代将彻底终结。现在，准时下班吧！ 🍷
