---
title: "OpenAI Unveils GPT-5.3-Codex-Spark: Real-Time Coding at Warp Speed"
description: "A new ultra-low latency model developed in partnership with Cerebras, delivering over 1000 tokens per second for instant coding iteration."
date: 2026-02-13
image: ""
draft: false
---

OpenAI has announced the release of **GPT-5.3-Codex-Spark**, a new research preview model designed specifically for real-time coding tasks. This launch marks the first significant milestone in OpenAI's partnership with Cerebras, leveraging their specialized hardware to deliver unprecedented speed and responsiveness.

### Built for Speed and Interactivity

Codex-Spark is a smaller, highly optimized version of the flagship GPT-5.3-Codex model. Its primary focus is latency. Running on Cerebras' Wafer Scale Engine 3, the model can generate more than **1000 tokens per second**. This "near-instant" performance is intended to transform how developers interact with AI, moving from a request-wait-response cycle to a fluid, real-time collaboration.

While OpenAI's larger frontier models excel at long-running, autonomous tasks that may take hours or days, Codex-Spark is built for the moment. It allows developers to make targeted edits, reshape logic, and refine interfaces with immediate feedback. This dual approach—long-horizon reasoning combined with rapid iteration—represents OpenAI's vision for the future of AI-assisted development.

### Technical Enhancements

The release isn't just about a new model; it brings infrastructure improvements that benefit the entire ecosystem. OpenAI has overhauled its inference stack, introducing persistent WebSocket connections and optimizing the Responses API. These changes have reduced per-token overhead by 30% and time-to-first-token by 50% across the board.

Key specifications for the research preview include:
- **Context Window:** 128k tokens.
- **Modality:** Text-only (for now).
- **Availability:** Rolling out to ChatGPT Pro users via the Codex app, CLI, and VS Code extension.

### A Hybrid Future

The partnership with Cerebras complements OpenAI's existing GPU infrastructure. While GPUs remain the backbone for cost-effective, broad-scale training and inference, Cerebras' hardware provides the specialized, low-latency tier necessary for this new class of interactive models.

"Interaction speed becomes a clear bottleneck as models become more capable," OpenAI stated. "Ultra-fast inference tightens that loop, making Codex feel more natural to use."

As the research preview progresses, OpenAI plans to expand capabilities, including larger models, longer context lengths, and multimodal inputs, eventually blending the lines between instant collaboration and deep, autonomous reasoning.
