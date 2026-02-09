---
layout: /src/layouts/Layout.astro
title: "Docker Environment Setup, 3 Minutes with One Config File"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that automatically generates Dockerfile and docker-compose.yml to make application execution environment into a container."
tags: ["Docker", "Container", "Deployment", "DevOps"]
---

# 📝 Docker Environment Setup, 3 Minutes with One Config File

> **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Error occurs because Node.js version is different on the deployment server..."_

Mismatch between development environment and operation environment is the enemy of all developers.
You know using Docker solves it, but writing `Dockerfile` and optimizing image build is another barrier.
Just tell the project stack. AI will write optimized Docker configuration files.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Generate `Dockerfile` optimized for language/framework
2. Write `docker-compose.yml` including DB, Cache, etc.
3. Apply image size optimization (Multi-stage Build)

---

## 🚀 The Solution: "Dockerizing Expert"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Container Orchestration Expert and DevOps Engineer.
> **Request:** Create a prompt that automatically generates Dockerfile and docker-compose.yml to make application execution environment into a container.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Container Orchestration Expert and DevOps Engineer.
>
> **Context:** I want to deploy my application as a Docker container. I want to unify local development environment and deployment environment.
>
> **Task:**
>
> 1. Write an optimized **Dockerfile** suitable for the tech stack below. (Recommend using Multi-stage build)
> 2. Write a **docker-compose.yml** file including databases etc. linked with the app.
> 3. Tell me what content should be included in `.dockerignore` file.
>
> **Tech Stack:**
> `[Write language and version used, framework, needed DB etc. e.g.: Node.js 18, NestJS, PostgreSQL, Redis]`
>
> **Constraints:**
>
> - Minimize image size considering production environment (e.g. use Alpine Linux).
> - Configure to run as a general user instead of root privileges for security.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Stack)

"Using Python 3.9, Django, PostgreSQL."

### ✅ After (Result - Part of Dockerfile)

```dockerfile
# 1. Build Stage
FROM python:3.9-slim as builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --user -r requirements.txt

# 2. Production Stage
FROM python:3.9-slim
WORKDIR /app
# Copy only installed packages from build stage
COPY --from=builder /root/.local /root/.local
COPY . .

# Environment variable setting
ENV PATH=/root/.local/bin:$PATH
# Create and switch to non-root user for security
RUN useradd -m myuser
USER myuser

CMD ["gunicorn", "config.wsgi:application", "--bind", "0.0.0.0:8000"]
```

_Features: Use slim image, multi-stage build, run as non-root user._

---

## 🎯 Conclusion

"It works on my computer..." is a thing of the past.
Put it in a container called Docker and make it run the same anywhere. AI will teach you that packaging skill! 🍷
