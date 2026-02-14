---
title: "Structuring Complex Prompts: The CREATE Framework"
date: "2026-02-15"
desc: "Learn how to get consistent, high-quality AI responses using the CREATE framework, a core concept in prompt engineering for complex tasks."
---

# Structuring Complex Prompts: The CREATE Framework

As AI models evolve, we task them with increasingly complex jobs. While simple prompts suffice for simple questions, instructing AI on complex business logic or creative tasks requires a systematic approach.

This post introduces the **CREATE Framework**, a method to logically structure prompts to maximize AI performance.

## What is the CREATE Framework?

CREATE stands for six key elements essential for effective prompt construction.

1.  **C**ontext: Assign a role and situation to the AI.
2.  **R**equest: Clearly state the specific task to be performed.
3.  **E**xamples: Provide examples (Few-shot) of the desired output.
4.  **A**djustments: Set the tone, style, and constraints.
5.  **T**ype of Output: Specify the format of the result (table, code, markdown, etc.).
6.  **E**xtras: Include edge case handling or special instructions.

---

## Step-by-Step Guide

### 1. Context

Giving the AI a persona significantly changes the quality of the answer.

> "You are a Senior Software Engineer with 10 years of experience. You specialize in refactoring legacy code into modern clean code."

### 2. Request

Avoid ambiguity and use clear verbs.

> "Analyze the provided Python function below and refactor it to improve readability and optimize execution speed."

### 3. Examples

AI learns patterns through examples. Show input and output pairs.

> **Input:**
> `def calc(x,y): return x+y`
>
> **Output:**
>
> ```python
> def add_numbers(a: int, b: int) -> int:
>     """Returns the sum of two numbers."""
>     return a + b
> ```

### 4. Adjustments

Decide the tone and manner of the response.

> "Keep explanations concise and use professional terminology, but maintain a friendly tone accessible to junior developers."

### 5. Type of Output

Specify how you want to receive the result.

> "Present the result by first showing the full modified code in a code block, followed by a bulleted summary of the changes."

### 6. Extras

Prevent unexpected situations.

> "If a security vulnerability is found in the code, please output a separate warning message in addition to the refactoring."

---

## Conclusion

Using the CREATE framework allows you to reduce prompt writing time while maintaining consistent output quality. When facing complex problems, instead of asking vaguely, organize your thoughts according to the CREATE structure. The AI will answer as intelligently as you design it to.
