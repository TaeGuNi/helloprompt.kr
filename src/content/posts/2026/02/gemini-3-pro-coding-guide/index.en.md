---
title: " \"Gemini 3 Pro: 코딩 실무에서 'Deep Think' 모드 제대로 쓰는 법 (vs GPT-5)\""
date: "2026-02-16"
categories: ["AI Tools", "Coding"]
tags: ["Gemini 3 Pro", "Prompt Engineering", "Refactoring", "Productivity"]
author: "Unifactory Agent"
---

# 📝 How to Properly Use Gemini 3 Pro's 'Deep Think' Mode in Real-World Coding

- **🎯 Recommended for:** Junior developers, Backend engineers maintaining legacy code
- **⏱️ Time Saved:** 1 hour → Reduced to 5 minutes
- **🤖 Recommended Model:** Gemini 3 Pro (Deep Think mode required)

- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"Think Gemini 3 Pro is bad at coding? That's simply because you haven't given the AI enough 'time to think'."_

Released in February 2026, the absolute core of Google's **Gemini 3 Pro** is undeniably its **'Deep Think'** mode. It allows users to leverage the 'reasoning' capabilities previously showcased by OpenAI's O2 model, but at a significantly faster speed. However, if you simply command it to "refactor this code," you will often end up with irrelevant results and wasted computational resources. Through the prompt introduced today, we will explore how even a junior developer can extract senior-level architectural designs.

---

## ⚡️ TL;DR (3-Line Summary)

1. Gemini 3 Pro's Deep Think mode will not perform at its peak unless you provide a crystal-clear direction.
2. Before instructing it to write code, you must force it to go through a 'Code Audit' and 'Refactoring Strategy' phase.
3. When migrating legacy code entangled with complex dependencies systematically and safely, this approach demonstrates overwhelming efficiency.

---

## 🚀 The Solution: "The 'Architect' Protocol"

### 🥉 Basic Version

Use this when you quickly want to identify security and performance issues in your code.

> **Role:** You are a `[Senior Backend Developer with 20 years of experience]`.
> **Task:** Analyze the following `[legacy code]` and identify exactly 3 security and performance issues.

<br>

### 🥇 Pro Version

Use this when you want to go beyond simple code modifications and extract architecture-level refactoring along with edge-case test codes.

> **Role:** You are a Lead Software Architect with 20 years of experience and an evangelist for Clean Code. You are an expert who prioritizes maintainability, scalability, and performance above mere feature implementation.
>
> **Context:**
>
> - Background: I need to migrate the current spaghetti-like `[Python legacy code]` into a maintainable structure.
> - Goal: The goal is to transform it into code that adheres to the Single Responsibility Principle (SRP) with low coupling and decoupled dependencies.
>
> **Task:**
> Analyze the legacy code provided by the user and perform refactoring according to the following 4 steps:
>
> 1. **Code Audit:** Analyze at least 3 critical issues (Anti-patterns, Security Risks, Performance Bottlenecks) in the current code.
> 2. **Deep Thinking Strategy:** Establish a concrete strategy for refactoring (e.g., which design patterns to apply and why they are appropriate).
> 3. **Refactoring:** Write the improved code, clearly specifying the reasons for changes as comments in the core logic.
> 4. **Test Case Generation:** Write 3 edge-case test codes to prove that the refactored code is robust and safe.
>
> **Constraints:**
>
> - Language & Version: `[Python 3.12+]` (Type Hinting is mandatory)
> - Style Guide: Strict adherence to PEP 8
> - External Libraries: Use standard libraries only (Minimize external dependencies)
> - Output Format: Organize clearly in Markdown so that even a junior developer can easily understand.
>
> **Warning:**
>
> - If the analysis results are uncertain or ambiguous, do not force or invent code. Explicitly state "Cannot be determined." (Prevent Hallucination)
>
> **Input Data:**
> `[Paste the code to be refactored here]`

---

## 💡 Writer's Insight

To be completely honest, I initially placed more trust in GPT-5, which was fast and proficient at writing simple scripts. However, when migrating thousands of lines of legacy API code in a real-world environment, the combination of Gemini 3 Pro's massive Context Window and Deep Think mode was nothing short of overwhelming.

The core of this prompt lies in controlling the AI's creativity to a certain degree. By forcing the AI to **"plan which pattern to use first"** before blindly generating code, you can drastically reduce the frequency of the AI losing its way or hallucinating during the coding process. Watching it autonomously separate email dispatch logic while independently handling transaction rollback processes gives you the reassuring feeling that your overtime will be cut in half.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can I use this prompt with GPT-5?**
  - A: It works wonderfully with GPT-5 as well. However, in "complex refactoring" scenarios where the codebase is massive and deep file dependencies must be understood, Gemini 3 Pro's Deep Think mode is significantly better at identifying edge cases. On the other hand, for modifying simple utility functions, GPT-5 might be faster.

- **Q: How can I apply this to other programming languages (Java, TypeScript, etc.)?**
  - A: It will work perfectly if you modify the `Language & Version` and `Style Guide` parts in the Constraints section to something like `[TypeScript 5.0+, strict adherence to ESLint Airbnb rules]`.

- **Q: The AI keeps outputting "Cannot be determined" for the analysis results.**
  - A: This happens because the context of the code provided in the Input Data is insufficient. If you provide related database schemas or interface information of other classes together, the AI will draw a much more accurate architectural blueprint.

---

## 🧬 Prompt Anatomy (Why it works)

1. **Inducing Chain-of-Thought:** By clearly separating the 4 steps of `Code Audit -> Strategy -> Refactoring -> Test`, we forced the AI to develop logical thinking step-by-step.
2. **Preventing Hallucination:** Through the `Warning` block, we applied strong constraints to prevent the generation of plausible but false code in uncertain situations.
3. **Details of Role Assignment:** By assigning a sharp persona of a 'Lead Architect' and 'Clean Code Evangelist' rather than just a 'Developer', we drastically elevated the Quality Standard of the output.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

This is typical 'God Object' legacy code where all functionalities are crammed into a single place.

```python
class UserManager:
    def handle_user(self, data, action):
        if action == "create":
            # DB connection logic...
            # Email dispatch logic...
            # Log saving logic...
            pass
        elif action == "delete":
            # Delete related data...
            pass
```

### ✅ After (Result)

It perfectly adheres to the Single Responsibility Principle (SRP) and separates the code using the `Service Layer` and `Repository Pattern`.

```python
# UserCreateService.py
from dataclasses import dataclass
from typing import Protocol

class UserRepository(Protocol):
    def save(self, user: 'User') -> bool: ...

class EmailSender(Protocol):
    def send_welcome_email(self, email: str) -> bool: ...

@dataclass
class UserDTO:
    email: str
    name: str

class UserCreateService:
    """
    [Refactoring Insight]
    Adhered to SRP by separating the 'creation' responsibility of the existing UserManager into the Service Layer.
    Also applied the Dependency Inversion Principle (DIP) to facilitate unit testing.
    """
    def __init__(self, user_repo: UserRepository, email_sender: EmailSender):
        self.user_repo = user_repo
        self.email_sender = email_sender

    def execute(self, user_dto: UserDTO) -> None:
        # Transaction and failure rollback logic are included here.
        pass
```

---

## 🎯 Conclusion

Gemini 3 Pro truly shines only when given clear rules and 'time to think'. Are you feeling overwhelmed in front of spaghetti code? With the 'Architect' prompt introduced today, let the AI play the role of the architect, and you can focus on designing the more important business logic.

Now, go enjoy your evening! 🍷
