---
title: "Stop Pasting Context: Build Your First MCP Server in 5 Minutes"
description: "MCP (Model Context Protocol) is the new USB standard for LLMs. Instead of copy-pasting JSON schemas every time, use this prompt to build a custom server that connects your local data directly to Claude or Ollama."
author: "Unifactory Editor"
date: "2026-02-16"
tags:
  [
    "MCP",
    "Model Context Protocol",
    "Local LLM",
    "TypeScript",
    "Ollama",
    "Claude",
  ]
image: "/images/2026/02/16/mcp-server-tutorial.jpg"
---

# 📝 Stop Copy-Pasting Context: Build Your First MCP Server in 5 Minutes

- **🎯 Target Audience:** Developers tired of copy-pasting DB schemas or API docs into prompts, and local data power users
- **⏱️ Time Required:** 5 minutes → Saves hours permanently
- **🤖 Recommended AI:** MCP-supported models like Claude Desktop and Ollama

- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"You open Claude and paste the DB schema. 10 minutes later, you open a new chat and paste it again. It's time to end this exhausting cycle."_

Fast forward to 2026, the **Model Context Protocol (MCP)** has established itself as the de facto standard for connecting LLMs to your data. Think of it as a universal 'USB port' for AI models. Instead of manually spoon-feeding context into every new chat, you spin up a server once, allowing the model to automatically read your files, databases, and internal APIs in real time.

While excellent general-purpose MCP servers for GitHub or local filesystems already exist, the true power of MCP is unlocked when you wire up your company's proprietary business logic directly to an LLM.

Today, rather than writing tedious boilerplate code from scratch, we're sharing a prompt that instructs the AI to scaffold a flawless, custom TypeScript-based MCP server in just 5 minutes.

---

## ⚡️ TL;DR (3-Line Summary)

1. **The End of Copy-Pasting:** Use MCP to grant LLMs direct access to your local data (DBs, logs, APIs).
2. **Prompt-Driven Server Setup:** Auto-generate flawless MCP server code with a single prompt—no complex initial configuration required.
3. **Absolute Privacy:** Keep your data secure by streaming it directly into the model's context window within your local environment, completely eliminating external data leaks.

---

## 🚀 The Solution: "MCP Server Scaffolder"

### 🥉 Basic Version

Use this when you need to rapidly generate the skeletal structure of an MCP server.

> **Role:** You are a Senior TypeScript Developer.
> **Task:** Write a simple MCP server using the `@modelcontextprotocol/sdk` that serves the purpose of `[your specific goal, e.g., fetching weather updates for a given city]`.

### 🥇 Pro Version

Use this when you need robust, scalable, and production-ready server code.

> **Role:** You are a Senior TypeScript Engineer with deep expertise in the Model Context Protocol (MCP) ecosystem.
>
> **Context:**
>
> - Background: I need a custom MCP server to connect my local data or internal APIs to an LLM.
> - Goal: You must generate complete, executable MCP server code in a single file (`index.ts`) tailored to my specific requirements.
>
> **Task:**
>
> 1. Write the MCP server code that fulfills the following requirement:
>    - **Purpose:** `[Describe the exact purpose of the server here, e.g., Read the last 50 lines of a designated log file]`
> 2. Format the generated code to be copy-paste friendly, complete with comments so it can be executed immediately in the terminal.
>
> **Constraints:**
>
> - You MUST use the official `@modelcontextprotocol/sdk`.
> - If the tool's input parameters are complex, use the `zod` package for schema validation (Highly Recommended).
> - You must flawlessly implement the `ListToolsRequestSchema` and `CallToolRequestSchema` interfaces.
> - You MUST wrap the tool handler logic in a `try/catch` block to prevent the server from crashing due to unhandled exceptions.
> - **Output ONLY the TypeScript code block without any explanatory text.**
>
> **Warning:**
>
> - Do NOT hallucinate SDK methods that do not exist. If unsure, leverage standard Node.js APIs as a workaround.

---

## 💡 Writer's Insight

The core brilliance of this prompt lies not in vaguely asking the AI to "write code," but in strictly enforcing the fundamental protocol specifications—handling `ListTools` and `CallTool` requests—that every functional MCP server must implement.

The greatest advantage of building and running your own MCP server is **absolute privacy**. While general web search tools route your queries through external servers, a custom MCP server connected to your local PostgreSQL database or internal APIs ensures your data remains completely under your control. You will never have to copy and paste sensitive internal documents into a third-party chat window again.

I recommend starting with a simple, read-only tool—like reading local log files—using this prompt. Once you grasp how it works under the hood, you can expand its capabilities to include database modifications, ultimately engineering your own highly personalized AI assistant.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can I use this prompt even if I have zero coding knowledge?**
  - A: Absolutely! If you describe your `[Purpose]` in plain English—like "a tool that fetches the current weather in Seoul"—Claude will generate the correct implementation for you. You just need to copy the generated code and paste it into your execution environment.

- **Q: How do I run and connect the generated server code?**
  - A: Save the code as `index.ts`, and then add the absolute path of this script to the `mcpServers` section in your Claude Desktop configuration file (`claude_desktop_config.json`). It will connect automatically upon restart.

- **Q: Is the server created by this prompt only compatible with Claude?**
  - A: Not at all. The Model Context Protocol is an open standard, meaning it works identically across all MCP-supported platforms and clients, including Ollama and Cursor.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Strict Constraint Enforcement:** By mandating the use of `@modelcontextprotocol/sdk` and `zod`, and explicitly requiring essential schemas (`ListToolsRequestSchema`, `CallToolRequestSchema`), we completely block the AI from hallucinating non-compliant specifications.
2. **Single-File & Code-Only Output:** By insisting on a single-file structure (`index.ts`) instead of a complex multi-file setup and stripping away unnecessary explanations, we maximize the user's Time-to-Value for testing.
3. **Mandatory Exception Handling:** Pre-defining the `try/catch` logic prevents the entire MCP server from crashing due to runtime errors during tool execution.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
User:
(Pasting the entire thousands-of-lines my_database_schema.sql file)
(Pasting the entire hundreds-of-lines internal_api_docs.md file)

Based on this schema, write a query to find the number of users who signed up today, and tell me how to call this API based on the documentation.
```

### ✅ After (Output)

```text
User:
How many users signed up today? (Claude automatically calls the MCP tool in the background)

Claude:
Based on the internal database query, a total of 150 new users signed up today.
```

---

## 🎯 Conclusion

The era of mechanically shoveling context into AI chat windows is over. It's time to treat AI as true infrastructure by directly "plugging in" your data streams.

Spend just 5 minutes scaffolding the perfect MCP server, and free yourself from the copy-paste nightmare forever. Time to clock out! 🍷
