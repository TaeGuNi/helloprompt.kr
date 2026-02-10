---
layout: /src/layouts/Layout.astro
title: "Annoying API Documentation, Swagger Pops Out with Just Code"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that automatically converts API code into OpenAPI (Swagger) specs or Markdown documents when you paste it."
tags: ["API", "Documentation", "Swagger", "OpenAPI", "Backend"]
---

# 📝 Annoying API Documentation, Swagger Pops Out with Just Code

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"If you're done developing, you should give us the documentation too, right? (Frontend Developer)"_
_"Ah... One moment. (Haven't written a single line yet)"_

Is it just me who hates writing documentation more than API development?
Parameter types, required status, response examples... writing them one by one brings reality crashing down.
Now just copy and paste the controller code. AI will convert it into a clean Swagger spec.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Extract accurate parameter/response specifications based on code
2. Automatic generation of OpenAPI (Swagger) YAML/JSON format
3. Includes easy-to-understand explanations and example data

---

## 🚀 The Solution: "API Document Generator"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a meticulous technical writer and backend developer.
> **Request:** A prompt that automatically converts API code into OpenAPI (Swagger) specs or Markdown documents when you paste it.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a meticulous technical writer and backend developer.
>
> **Context:** I have API code I developed, and I need to document it to share with frontend developers.
>
> **Task:**
> Analyze the provided API code below and write documentation in **[Select Desired Format: OpenAPI 3.0 YAML / Markdown Table]** format.
> Must include the following contents:
>
> 1. **Endpoint & Method:** URL path and HTTP method
> 2. **Summary:** Brief summary of what the API does
> 3. **Request Parameters:** Body, Query, Path parameters (including type, required status, description)
> 4. **Response:** Response structure and example JSON for success (200) and failure (400, 500, etc.)
>
> **Code:**
>
> ```
> [Paste controller/router code here]
> ```
>
> **Constraints:**
>
> - Clearly specify data types (String, Integer, etc.).
> - Fill response examples (Example Value) with realistic data.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Code - Node.js Express)

```javascript
app.post("/users", (req, res) => {
  const { username, email } = req.body;
  if (!email) return res.status(400).send({ msg: "no email" });
  // DB save logic...
  res.status(201).send({ id: 1, username, email });
});
```

### ✅ After (Result - Markdown Example)

### **POST /users**

User Sign-up API

**Request Body**
| Field Name | Type | Required | Description |
|---|---|---|---|
| `username` | String | O | User Nickname |
| `email` | String | O | User Email (Unique) |

**Response (201 Created)**

```json
{
  "id": 1,
  "username": "jay_dev",
  "email": "jay@example.com"
}
```

---

## 🎯 Conclusion

Documentation is not the end of development but the beginning of collaboration.
But don't spend too much energy for that beginning. Leave it to AI and focus on business logic! 🍷
