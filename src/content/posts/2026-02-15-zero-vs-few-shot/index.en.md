---
title: "Zero-Shot vs Few-Shot Learning: When to provide examples"
date: "2026-02-15"
description: "A guide to understanding when to use zero-shot prompting versus few-shot prompting for optimal LLM performance."
---

In the world of Large Language Models (LLMs), how you ask is just as important as what you ask. Two of the most fundamental techniques in prompt engineering are **Zero-Shot** and **Few-Shot** learning. Understanding the difference—and knowing when to apply each—can significantly elevate the quality of your AI interactions.

## What is Zero-Shot Learning?

**Zero-Shot** prompting involves asking the model to perform a task without providing any specific examples of the desired output. You are relying entirely on the model's pre-trained knowledge and its ability to understand natural language instructions.

**Example:**

> "Translate the following sentence into Spanish: 'The weather is nice today.'"

Here, you haven't shown the model _how_ to translate; you've simply told it _to_ translate.

### When to use Zero-Shot:

- **General Knowledge Tasks:** Standard translations, summarizations, or answering factual questions.
- **Simple Instructions:** When the task is straightforward and doesn't require a specific, complex format.
- **Creative Writing:** When you want the model to be open-ended and less constrained by a rigid pattern.
- **Initial Testing:** It's often best to start with zero-shot to see how well the model performs out-of-the-box before adding complexity.

## What is Few-Shot Learning?

**Few-Shot** prompting (often called "In-Context Learning") involves providing the model with a few examples (shots) of the input and the desired output before the actual query. These examples serve as a pattern for the model to follow.

**Example:**

> Translate English to specific pirate slang.
>
> English: "Hello, how are you?"
> Pirate: "Ahoy matey, how be ye fairin'?"
>
> English: "Where is the bathroom?"
> Pirate: "Where be the head?"
>
> English: "I would like some water."
> Pirate:

By seeing the previous pairs, the model understands not just that it needs to translate, but the specific _tone_ and _style_ required.

### When to use Few-Shot:

- **Complex Formatting:** When you need the output in a specific structure (e.g., JSON, CSV, or a specific document style) that the model fails to produce with instructions alone.
- **Nuanced Style/Tone:** When mimicking a specific voice, brand identity, or linguistic style.
- **Difficult Logic:** For reasoning tasks, providing examples of the "chain of thought" can help guide the model to the correct conclusion.
- **New or Custom Concepts:** If you are using invented words or specific domain terminology, examples define them in context.

## The Trade-off

While Few-Shot often yields higher accuracy for complex tasks, it comes with a cost: **Context Window**.

Every example you provide consumes tokens. In very long conversations or documents, stuffing the prompt with too many examples might limit the space available for the actual content you want to process.

## Conclusion

Start with **Zero-Shot**. Modern models like GPT-4 and Claude 3 are remarkably capable without examples. If the model fails to follow your format or style, upgrade to **Few-Shot** by adding 1-3 clear, high-quality examples. This iterative approach ensures you balance efficiency with performance.
