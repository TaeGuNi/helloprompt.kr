---
layout: /src/layouts/Layout.astro
title: "我的代码是垃圾！整洁代码重构教练"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "编程/IT"
description: "把只能运行的脏代码升级为‘易读、好维护’的整洁代码的提示词。"
tags: ["重构", "整洁代码", "开发者", "代码审查"]
---

# 📝 我的代码是垃圾！整洁代码重构教练

**🎯 推荐对象:** 所有人
**⏱️ 所需时间:** 5 分钟
**🤖 推荐模型:** 所有 AI 模型

|  难度   |   有效性   |  实用性   |
| :-----: | :--------: | :-------: |
| ⭐⭐☆☆☆ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐☆ |

_"说以后改，过了 1 年。现在不敢碰了。"_

意大利面代码 (纠缠的代码) 是开发者的敌人。如果可读性下降，很难找 Bug，也很难添加功能。这个提示词让罗伯特·C·马丁 (整洁代码作者) 附身，洗刷擦拭你的代码让它闪闪发光。

---

## ⚡️ 3 行总结 (TL;DR)

1. 消除重复代码及分离函数 (Extract Method)
2. 改善意义不明确的变量/函数名 (Naming Convention)
3. 性能优化及应用最新语法 (Modern Syntax)

---

## 🚀 解决方案：“整洁代码洗衣店”

### 🥉 Basic Version (基础版)

当你只需要快速结果时使用。

> **角色:** 你是 `[整洁代码传道士兼首席架构师]`。
> **请求:** 请制作把只能运行的脏代码升级为‘易读、好维护’的整洁代码的提示词。

<br>

### 🥇 Pro Version (专家版)

当你需要详细质量时使用。

请复制以下 **PROMPT** 内容使用。

> **角色 (Role):** 你是 `[整洁代码传道士兼首席架构师]`。
>
> **情况 (Context):** 我的代码虽然有功能，但脏且难读 (Dirty Code)。请为了容易维护进行重构。
>
> **任务 (Task):**
>
> 1. **[命名品味]**: 请把变量名和函数名改得直观且有意义。(例: `a` -> `userAge`)
> 2. **[结构改善]**: 太长的函数按角色分开，重复的逻辑合为一个。
> 3. **[Modernize]**: 如果可能，请应用最新语言语法 (ES6+, Python 3.10+ 等)。
> 4. **[Before & After]**: 请比较哪里怎么变了，并说明为什么那样改的理由。
>
> **约束事项 (Constraints):**
>
> - 代码的动作 (功能) 绝对不能变。
> - 注释 (Comment) 只在必须的地方加。(如果代码能说明就删除注释)
>
> **对象代码:**
>
> ```python
> [在此粘贴脏 (?) 代码]
> ```

---

## 🧬 提示词解剖 (Why it works?)

---

## 📊 证明: Before & After

### ❌ Before (输入)

```python
def calc(x, y):
    if x > 19:
        print("Adult")
        p = y * 0.9
        return p
    else:
        print("Student")
        return y
```

(函数名 `calc` 不知道算什么，`p` 也意义不明)

### ✅ After (提示词结果)

```python
def calculate_discounted_price(age, price):
    ADULT_AGE_THRESHOLD = 20
    DISCOUNT_RATE = 0.9

    if age >= ADULT_AGE_THRESHOLD:
        print("You are an adult.")
        return price * DISCOUNT_RATE

    print("You are a student.")
    return price
```

**[改善点]**

1. **更改函数名**: `calc` -> `calculate_discounted_price` (明确是折扣价格计算)
2. **消除魔法数字**: 把 `19`, `0.9` 这样的数字声明为常量赋予意义。
3. **消除不必要的 else**: 使用 Early Return 模式减少缩进深度。

---

## 🎯 结论

写得好的代码像写得好的随笔一样读起来顺畅。为了未来的我 (还有同事) 请打扫代码。

现在准时下班洗澡吧。不是代码是身体。🍷
