---
title: "Stop Pasting Context: Build Your First MCP Server in 5 Minutes"
description: "Model Context Protocol (MCP) is the USB standard for LLMs. Stop copy-pasting JSON schemas and build a custom server that feeds your local data directly to Claude or Ollama."
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

You open Claude (or your local Ollama chat). You paste your database schema. You paste your API docs. You ask a question.
Ten minutes later, you open a new chat. You paste the schema _again_. You paste the docs _again_.

**Stop doing this.**

In 2026, the **Model Context Protocol (MCP)** has become the de-facto standard for connecting LLMs to your data. Think of it as a "USB port" for AI models. instead of manually feeding context, you plug in a server, and the model can "see" your files, databases, or internal APIs.

Today, we're building your first custom MCP server in TypeScript. It will take 5 minutes.

## (Updated) (Updated) (Updated) 1. Why Build Your Own?

Pre-built MCP servers (like the Filesystem or GitHub servers) are great. But the real power unlocks when you expose **your specific business logic**.

- **Internal APIs:** Let the LLM query your user database safely.
- **Log Files:** Let the LLM read the last 50 lines of `error.log` in real-time.
- **Custom calculations:** Offload complex math to Python, let the LLM just ask for the result.

## (Updated) (Updated) (Updated) 2. The "Hello World" Server

We'll use the official TypeScript SDK. We're going to build a simple tool that lets the LLM **fetch the current weather** (mocked) for a given city.

### (Updated) (Updated) (Updated) Step 1: Initialize

```bash
mkdir my-first-mcp-server
cd my-first-mcp-server
npm init -y
npm install @modelcontextprotocol/sdk zod
```

### (Updated) (Updated) (Updated) Step 2: The Code (`index.ts`)

Create an `index.ts` file. This 30-line script defines a tool called `get_weather`.

```typescript
#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";

// 1. Create the server
const server = new Server(
  {
    name: "weather-server",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  },
);

// 2. List available tools
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "get_weather",
        description: "Get current weather for a city",
        inputSchema: {
          type: "object",
          properties: {
            city: { type: "string", description: "City name" },
          },
          required: ["city"],
        },
      },
    ],
  };
});

// 3. Handle tool calls
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "get_weather") {
    const city = String(request.params.arguments?.city);
    // Mock data - in real life, call an API here
    const temp = Math.floor(Math.random() * 30);
    return {
      content: [
        {
          type: "text",
          text: `The weather in ${city} is ${temp}°C and sunny.`,
        },
      ],
    };
  }
  throw new Error("Tool not found");
});

// 4. Start the transport (Stdio)
const transport = new StdioServerTransport();
await server.connect(transport);
```

### (Updated) (Updated) (Updated) Step 3: Connect to Claude (or Ollama)

Add this to your Claude Desktop config (or `openclaw config`):

```json
{
  "mcpServers": {
    "weather": {
      "command": "node",
      "args": ["/absolute/path/to/my-first-mcp-server/index.ts"]
    }
  }
}
```

Now, just ask the model: _"What's the weather in Seoul?"_. It will call your tool and answer.

## (Updated) (Updated) (Updated) 3. The "Scaffolder" Prompt

Writing boilerplate is boring. Use this prompt to generate a custom MCP server for _any_ use case.

> ### (Updated) (Updated) (Updated) 🛠️ The MCP Server Scaffolder
>
> **# (Updated) (Updated) (Updated) Role**
> You are a Senior TypeScript Engineer specializing in the Model Context Protocol (MCP).
>
> **# (Updated) (Updated) (Updated) Task**
> Create a complete, single-file `index.ts` for an MCP server based on the user's requirements.
>
> **# (Updated) (Updated) (Updated) Constraints**
>
> - Use `@modelcontextprotocol/sdk`.
> - Use `zod` for schema validation if complex inputs are needed (optional but good practice).
> - Implement `ListToolsRequestSchema` and `CallToolRequestSchema`.
> - Include error handling (try/catch) inside the tool handler.
> - **Output ONLY code.**
>
> **# (Updated) (Updated) (Updated) User Requirement**
> I need an MCP server that [INSERT YOUR GOAL HERE, e.g., "reads the last n lines of a specific log file"].
>
> **# (Updated) (Updated) (Updated) Expected Output Format**
>
> ```typescript
> // imports...
> // server setup...
> // tool definitions...
> // handler implementation...
> // connection...
> ```

## (Updated) (Updated) (Updated) 4. 🧠 Writer's Insight: Privacy First

The biggest advantage of running your own MCP server is **privacy**.

When you use a generic "Web Search" tool, your query leaves your machine. But when you use a local MCP server connected to your local PostgreSQL database, the data stays on your machine (if using a local LLM) or goes directly to the model provider via a secure channel you control.

You aren't uploading your CSV to a random website to analyze it. You are **streaming** it directly to the model's context window.

### (Updated) (Updated) (Updated) Key Takeaway

Don't copy-paste data. **Expose capabilities.**
Start with a simple read-only tool (like reading a log file). Once you trust it, add write capabilities (like appending to a todo list).

## (Updated) (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) (Updated) Conclusion

Wait, there is more...

## (Updated) Conclusion

Wait, there is more...
