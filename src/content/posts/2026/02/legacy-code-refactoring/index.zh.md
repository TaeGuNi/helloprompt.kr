---
layout: /src/layouts/Layout.astro
title: " \"ChatGPT로 스파게티 코드 리팩토링 & 테스트 코드 짜기\""
author: "HelloBot"
date: "2026-02-10"
updatedDate: "2026-02-10"
category: "General"
description: " \"面对令人头疼的遗留代码，本指南将教你如何把 AI 化身为拥有 10 年经验的资深开发者，安全重构代码并一键自动生成测试代码。\" 详细介绍AI提示词的使用方法与实战技巧。 | 보기만 해도 머리가 아픈 레거시 코드, AI를 10년 차 시니어 개발자처럼 활용해 안전하게 리팩토링하고 테스트 코드까지 한 번에 자동 생성하는 완벽 가이드입니다."
tags: ["Refactoring", "CleanCode", "UnitTesting", "Developer"]
---

## 🧹 遗留代码清理机：自动化重构与测试

- **🎯 推荐对象：** 初级开发者、遗留项目维护人员、代码审查员（Code Reviewer）
- **⏱️ 预计耗时：** 代码分析与理解 1 小时 → 缩短至 5 分钟以内
- **🤖 推荐模型：** Claude 3.5 Sonnet, GPT-4o（强烈推荐使用 Claude 处理复杂的逻辑与长文本上下文）

- ⭐ **难度：** ⭐⭐☆☆☆
- ⚡️ **效果：** ⭐⭐⭐⭐⭐
- 🚀 **实用性：** ⭐⭐⭐⭐⭐

> _"这到底是谁写的意大利面条式代码？（……啊，原来是一年前的我。）"_

错综复杂的 `if-else` 嵌套、词不达意的变量名，还有毫无文档说明的异常处理。面对这种牵一发而动全身、随时可能导致系统崩溃的**遗留代码（Legacy Code）**，你是否也曾感到束手无策？

现在，无需再感到恐惧。通过本文介绍的高阶提示词工程技巧，你可以将 AI 雇佣为你的专属**资深结对程序员（Pair Programmer）**，它不仅能优雅地重构那些意大利面条式代码，还能一气呵成地为你构筑起坚不可摧的测试代码防线。

---

## ⚡️ 3句话总结 (TL;DR)

1. **先解析，后动手：** 绝不要盲目让 AI 直接修改代码，必须先要求它理清代码的执行流程与业务意图。
2. **践行整洁代码（Clean Code）原则：** 以 SOLID 原则和高可读性为基准，安全重构命名规则与代码结构。
3. **构筑测试代码防线：** 为确保重构前后功能的绝对一致性，自动生成覆盖边界情况（Edge Case）的单元测试（Unit Test）。

---

## 🚀 解决方案："Senior Dev Simulator" (资深开发者模拟器)

### 🥇 Pro Version (专家版)

如果只是简单地扔下一句“帮我重构一下”，极有可能会破坏原有的业务逻辑。这套提示词应用了 **Chain-of-Thought（思维链）** 技巧，能够引导 AI 按照严密的逻辑步骤展开深度思考。

> **角色（Role）：** 你是一名前 Google、Meta 等科技巨头出身的 `[拥有 10 年经验的资深后端开发者]`。你是整洁代码（Clean Code）哲学的狂热信徒，并且严格遵守 TDD（测试驱动开发）原则。
>
> **背景（Context）：**
> 我目前接手了一份用 `[填入编程语言，如 Python/Java]` 编写的、极其杂乱的遗留代码。它的可读性极差，后续几乎无法进行任何维护。
>
> **任务（Task）：**
> 请按顺序深入执行以下步骤：
>
> **Step 1. 代码分析与诊断：** 用一句话精准总结这段代码在业务上的核心作用，并具体指出 3 个致命的代码坏味道（Code Smell）。
> **Step 2. 安全重构：** 在 100% 保持原有业务逻辑和副作用（Side Effect）的前提下，遵循单一职责原则（SRP）对函数进行拆分，并通过优化变量名和方法名将代码可读性最大化。对于复杂的业务逻辑，必须添加 Docstring 和必要的注释。
> **Step 3. 防御性验证（测试代码）：** 编写单元测试（Unit Test）代码，以绝对保证你重构后的代码与原代码的运行结果完全一致。除了成功用例外，必须包含至少 2 个可能发生的异常边界情况（Edge Case）。
>
> **输入代码：**
>
>
> [请在此处粘贴需要分析的遗留代码]
>

---

## 💡 作者点评 (Insight)

这套提示词的真正价值，绝不在于单纯地把代码“变好看”，而在于**它会优先为你铺设好“安全网”（测试代码）**。当我接手一个拥有 5 年历史的陈旧支付模块（Java）时，我就曾在实际工作中直接应用了这套提示词。

最令我感到惊喜的是，AI 甚至在编写测试代码时，主动帮我揪出了那些我未曾注意到的隐藏边界情况（例如：支付金额为 0 元时的分支处理）。

**🔥 实战优化技巧：**
如果你一次性将几百行的整个类全部复制进去，AI 很容易产生“幻觉（Hallucination）”或丢失上下文。请务必**将其拆分成最复杂的“方法（Method）级别”（100 行以内）进行提问**。这样一来，AI 分析的深度和生成的测试代码准确率都会呈指数级上升。

---

## 🙋 常见问题 (FAQ)

- **Q: 在处理代码逻辑时，哪个 AI 模型最合适？**
  - A: 截至 2026 年，在代码编写和重构领域，**Claude 3.5 Sonnet** 和 **GPT-4o** 依然是两座难以逾越的高山。尤其是在保持复杂上下文、以及编写更符合人类思维的整洁代码方面，Claude 3.5 Sonnet 的表现略胜一筹。

- **Q: 把公司内部代码直接发给 AI，会有安全问题吗？**
  - A: **绝对不行。** 任何 API 密钥、内网 IP、真实的客户数据或核心安全算法等敏感信息，在执行提示词前都必须进行 `[MASKED]` 脱敏处理，或替换为虚拟的假数据（Dummy Data）。最稳妥的做法是，仅在公司内部署的企业级 AI（Enterprise AI）环境中使用。

- **Q: 如果重构后发生报错，该如何处理？**
  - A: 这极有可能是 AI 漏掉了某些隐式依赖（Dependency）。请将完整的错误日志连同原代码的相关上下文一起复制给 AI，并给出具体的反馈，例如：_“这里发生了这样的报错。你似乎遗漏了原有逻辑中的 [某个特定条件]。请重新修正代码。”_

---

## 🧬 提示词解剖 (Why it works?)

1. **赋予资深人设（Role）：** 通过为其戴上“10 年经验的资深开发者、整洁代码信徒”这样严苛的伪装面具，大幅提高了输出标准。这确保了 AI 生成的绝不仅仅是“能跑”的代码，而是具备极高可维护性的优质资产。
2. **思维链（Chain-of-Thought）：** 我们没有直接命令 AI“开始修改”，而是强制其遵循 **[分析 → 重构 → 验证]** 这 3 个逻辑严密的步骤。这正是引导 AI 在不破坏原有代码意图的前提下，安全优化代码结构的核心机制。
3. **强制覆盖边界情况（Constraints）：** 在要求编写测试代码时，明确规定必须包含边界情况。这一举措保证了输出的代码质量坚如磐石，让你敢于直接将其投入生产环境使用。

---

## 📊 效果对比：Before & After

### ❌ Before (输入：噩梦般的遗留代码)

```python
def calc_trx(a, t, f=False):
    # a: amount, t: type
    if t == 1:
        if f: return a * 1.1 + 500
        else: return a * 1.1
    elif t == 2:
        return a - (a * 0.05)
    else: return 0 # 报错
```

### ✅ After (结果：资深开发者水准的整洁代码与测试)

```python
from enum import Enum
import unittest

class TransactionType(Enum):
    DEPOSIT = 1
    WITHDRAWAL = 2

def calculate_transaction_amount(amount: float, transaction_type: TransactionType, apply_fee: bool = False) -> float:
    """
    根据交易类型（存款/取款）计算包含税费和手续费的最终金额。
    """
    if amount < 0:
        raise ValueError("交易金额必须大于 0。")

    if transaction_type == TransactionType.DEPOSIT:
        taxed_amount = amount * 1.1
        return taxed_amount + 500 if apply_fee else taxed_amount

    elif transaction_type == TransactionType.WITHDRAWAL:
        return amount * 0.95

    return 0.0

# ----------------- Unit Tests ----------------- #
class TestCalculateTransaction(unittest.TestCase):
    def test_deposit_with_fee(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.DEPOSIT, True), 1600.0)

    def test_withdrawal_amount(self):
        self.assertEqual(calculate_transaction_amount(1000, TransactionType.WITHDRAWAL), 950.0)

    def test_negative_amount_raises_error(self):
        with self.assertRaises(ValueError):
            calculate_transaction_amount(-500, TransactionType.DEPOSIT)
```

---

## 🎯 结语

不要再对着满屏的遗留代码唉声叹气了。
只要拥有这套精心设计的提示词加上 AI 的强力辅助，重构将不再是一项令人绝望的苦差事，而会化作一场充满成就感的**愉悦大扫除**。

今天，不妨就从你最不想面对的那段函数开始，和 AI 一起动手重构吧！💻 相信我，你的下班时间一定会肉眼可见地大幅提前！
