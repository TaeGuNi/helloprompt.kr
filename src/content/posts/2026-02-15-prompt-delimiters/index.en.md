---
title: "Using Delimiters in Prompts: Why XML Tags Matter"
date: "2026-02-15"
description: "Learn how to clearly separate data from instructions in LLM prompts and why XML tags are the most effective delimiter."
---

One of the most common mistakes when working with Large Language Models (LLMs) is failing to clearly distinguish instructions (System Prompt) from data (User Input). This can lead to the model confusing data for instructions or generating unintended hallucinations.

The most reliable solution to this problem is using **delimiters**. Let's explore why **XML tags** have become the industry standard for this purpose.

## What Are Delimiters?

Delimiters act as signposts that isolate specific parts of text, telling the model, "From here to here is data, not a command."

Commonly used delimiters include:

- Triple quotes: `"""text"""`
- Dashes: `---text---`
- Brackets: `[text]`
- **XML Tags**: `<tag>text</tag>`

## Why XML Tags Specifically?

Modern models like Anthropic's Claude and OpenAI's GPT series have been trained on vast amounts of HTML and XML data. As a result, they have an innate understanding of the structure defined by opening `<tag>` and closing `</tag>` elements.

### 1. Clear Start and End

Triple quotes (`"""`) can cause confusion if the data itself contains quotes. XML tags, on the other hand, have a distinct closing tag (`</tag>`), making the structure unambiguous.

### 2. Semantic Context

Tag names provide hints to the model about the nature of the data.

- `<article>`: Article body
- `<rules>`: Rules to follow
- `<examples>`: Few-shot examples

### 3. Preventing Prompt Injection

Even if a malicious user inputs text like "Ignore previous instructions...", wrapping it in `<user_input>` tags significantly increases the likelihood that the model will treat it as data to process rather than a command to execute.

## Examples

**Bad Example:**

```text
Summarize the text below.
[User input text...]
```

**Good Example (Using XML):**

```text
Please summarize the text enclosed in <document> tags.

<document>
[User input text...]
</document>
```

## Conclusion

The core of prompt engineering is eliminating ambiguity. As your tasks become more complex, make it a habit to use XML tags to structure your prompts. You will see a significant improvement in model performance and reliability.
