---
layout: /src/layouts/Layout.astro
title: " \"AutoGen 입문: AI 에이전트끼리 대화하게 만들기\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: " \"A comprehensive guide to building an automated collaboration system using AutoGen, Microsoft's multi-agent framework where developer and manager bots interact to write code.\""
tags: ["AutoGen", "멀티에이전트", "MS", "AI협업", "자동화"]
---

# 🤖 Introduction to AutoGen: Making AI Agents Talk to Each Other

- **🎯 Recommended for:** Solo developers feeling overwhelmed, tech geeks wanting to build automated workflow systems.
- **⏱️ Time Required:** 20 minutes (Setup and demo execution)
- **🤖 Recommended Models:** GPT-4o, Claude 3.5 Sonnet (High logical reasoning is crucial for inter-agent communication)

- ⭐ **Difficulty:** ⭐⭐⭐⭐☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> *"Are you hitting a wall trying to do everything with just one AI? Build your ultimate virtual dev team with an AI that plans, an AI that codes, and an AI that reviews."*

Microsoft's **AutoGen** is a powerful multi-agent framework that turns this imagination into reality. By creating multiple AI personas and placing them in a single workspace, they can converse, exchange feedback, and finalize deliverables entirely on their own. The era of genuine **'Autonomous Collaboration'** has arrived.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **The Magic of Delegation:** Maximize output quality by splitting complex, monolithic prompts into specialized agents like planners, developers, and reviewers.
2. **Autonomous Code Execution:** The AI can directly execute the code it writes within a containerized environment and autonomously debug any resulting errors.
3. **Infinite Loop Control:** Prevent token waste and maintain directional control by configuring human-in-the-loop intervention points.

---

## 🚀 Solution: "Multi-Agent Team Building Prompts"

### 🥉 Basic Version (The Coding Duo: Developer & Executor)

Use this prompt to generate the foundational code for a 1:1 agent interaction.

> **Role:** You are a `[Senior Python Developer]`.
>
> **Task:** Write a Python script using AutoGen where two agents collaborate.
>
> 1. **AssistantAgent (Coder):** Responsible for writing Python code.
> 2. **UserProxyAgent (Executor):** Responsible for running the Coder's code in a local environment and feeding the results back to the Coder.
>
> **Goal:** Configure the two agents to successfully complete the task: 'Find all prime numbers from 1 to 100 and save them to a txt file.'


### 🥇 Pro Version (Virtual IT Company: PM, Dev, QA)

Build a 3-agent Group Chat system that mimics a real-world corporate environment.

> **Role (Role):** You are an `[AutoGen Framework Architect with experience at Microsoft]`.
>
> **Context (Context):**
>
> - Background: I don't have enough time to build a toy project by myself, so I want to construct a virtual development team comprised of AI agents.
> - Goal: Automate the entire process—from planning to testing—of a simple Python-based 'Snake Game'.
>
> **Task (Task):**
>
> Utilizing AutoGen's `GroupChat` and `GroupChatManager`, write complete Python code where the following 3 agents collaborate:
>
> 1. **PM (Product Manager):** Defines the core rules and UI/UX of the game and issues task directives.
> 2. **Coder (Developer):** Writes the HTML/CSS/JS code based on the PM's specifications.
> 3. **Reviewer (QA/Critic):** Reviews the Coder's code, identifies bugs or logical flaws, and provides critical feedback for improvement.
>
> **Constraints (Constraints):**
>
> - Workflow Sequence: The loop must clearly follow this order: PM Proposes Plan ➔ Coder Writes Code ➔ Reviewer Provides Feedback ➔ Coder Revises Code.
> - Limit the maximum number of conversation turns (`max_round`) to 10.
> - Provide the final code in a complete, error-free, and immediately executable state. Ensure the `system_message` for each agent is highly specific and tailored to their role.
>
> **Warning (Warning):**
>
> - Do not hallucinate AutoGen API methods; use only the official, up-to-date syntax to prevent execution errors.

---

## 💡 Writer's Insight

The true disruptive power of AutoGen reveals itself when LLM text generation is combined with **'Code Execution'**. Traditionally, when a chatbot generated code, a human had to manually copy it, paste it into an IDE, run it, and then feed any error logs back to the chatbot. This was a tedious, manual cycle.

However, by connecting the `UserProxyAgent` to a Docker container, the AI can autonomously run its own code, analyze the error logs, and rewrite the code to fix the issues. Essentially, you get to sit back and watch your AI team furiously code and debug, only stepping in to harvest the final, polished result. It fundamentally shifts your role from a "coder" to a "manager."

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can I use open-source local models (like Llama 3) instead of the OpenAI API?**
  - A: Absolutely. You can spin up a local server using tools like LM Studio or Ollama, and then change the `base_url` in AutoGen's `llm_config` to your local API address. This allows you to run an army of agents infinitely without worrying about token costs.

- **Q: What happens if the agents get stuck in an infinite loop without reaching a conclusion?**
  - A: This is the most common issue in multi-agent systems. You must enforce strict limits using the `max_consecutive_auto_reply` attribute, or design the system to immediately halt and hand control over to a human manager when a specific keyword (e.g., "TASK COMPLETED") appears, using the `human_input_mode="TERMINATE"` setting.

- **Q: How does this differ from the CrewAI framework?**
  - A: AutoGen excels at **'free-flowing conversation'** between agents and autonomous code execution. CrewAI, on the other hand, is optimized for executing defined pipelines and sequential **'processes'**. AutoGen is generally better for creative problem-solving and coding, while CrewAI shines in structured tasks like research or marketing workflows.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Cognitive Load Distribution:** If you cram all planning, coding, and review constraints into a single prompt, the AI easily suffers from the "Lost in the middle" phenomenon, forgetting earlier instructions. By segregating roles and assigning clear `system_message` directives to each, the AI focuses entirely on its specific role, exponentially increasing output quality.
2. **Critic-in-the-loop Mechanism:** Separating the Coder and the Reviewer mirrors the code review culture of elite development teams. LLMs generally struggle to objectively critique their own outputs. By forcing a dedicated QA agent into the loop, you artificially boost the integrity and robustness of the generated code.

---

## 📊 Proof: Before & After

### ❌ Before (Relying on a Single Prompt)

```text
[User] "Write perfect code for a Snake game."
[AI] (Spits out 150 lines of code)
[User] (Runs it in the browser) -> Doesn't work. Copies console logs.
[User] "Uncaught TypeError: Cannot read properties of null... fix this."
[AI] (Spits out revised code) -> Now the keyboard arrow keys don't work. Asks again.
(Eventually, the user gets exhausted and either debugs it manually or gives up 🤯)
```

### ✅ After (AutoGen Multi-Agent Team)

```text
[PM] "The basic canvas size for the Snake game will be 400x400. When the snake eats an apple, its length should increase."
[Coder] "I have written the HTML and JS code according to the PM's plan. (Code attached)"
[UserProxy] (Auto-executes in local environment) "A collision detection error occurred on line 15 during execution."
[Reviewer] "Coder, you missed the exception handling for when the snake touches its own body. Please fix the array logic."
[Coder] "Thank you for the feedback. I have rewritten the code with the added exception handling. (Revised code attached)"
[UserProxy] "Executed successfully. The result has been saved as 'snake_game.html'."
(The user just sips coffee and watches the completed file being generated ☕️)
```

---

## 🎯 Conclusion

You no longer have to endure the loneliness of solo development or the pain of infinite debugging alone. With a basic understanding of Python and an API key, you can establish your very own elite IT task force that works 24/7 without ever complaining.

It's time to step up and issue directives elegantly, just like a true Tech Lead.
**Leave the headache of coding and debugging to your AutoGen agents.** 🍷
