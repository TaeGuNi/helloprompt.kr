---
title: "Just Throw JSON and TypeScript Type Definition Pops Out! (feat. Zod)"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that automatically converts complex JSON data into TypeScript interfaces or Zod schemas."
tags: ["TypeScript", "Zod", "JSON", "Type Definition", "Productivity"]
---

# 📝 Just Throw JSON and TypeScript Type Definition Pops Out! (feat. Zod)

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Backend API response is so complex, when will I make all these interfaces?"_

Are you typing `interface User { ... }` one by one?
Nested objects, arrays, optional values... it's perfect for making mistakes.
Just copy and paste the API response JSON. It creates perfect TypeScript type definitions as well as Zod schemas for runtime validation.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Convert JSON data to TypeScript Interface/Type
2. Generate Zod/Yup schema for runtime validation
3. Perfect handling of nested structures (Nested Object)

---

## 🚀 The Solution: "Type Master"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Senior Developer who has mastered the TypeScript ecosystem.
> **Request:** Create a prompt that automatically converts complex JSON data into TypeScript interfaces or Zod schemas.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Senior Developer who has mastered the TypeScript ecosystem.
>
> **Context:** I received JSON data from an external API, and I need type definitions to use it safely in my project.
>
> **Task:**
>
> 1. Write a **TypeScript Interface** based on the JSON data below. (Name in PascalCase)
> 2. Write a **Zod Schema** together for runtime validation.
> 3. Include code to infer types (`z.infer`) from the Zod schema.
>
> **JSON Data:**

> [Paste JSON data here]

> **Constraints:**
>
> - Assume all fields are required by default, but treat them as optional (`?`) only if `null` is included.
> - Separate objects inside arrays into separate interfaces and define them.
> - Add JSDoc comments to explain what each field is (by inferring).

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input JSON)

```text
{
  "id": 1,
  "name": "Jay",
  "contact": {
    "email": "jay@test.com",
    "phone": null
  },
  "tags": ["developer", "admin"]
}
```

### ✅ After (Result)

```typescript
import { z } from "zod";

// 1. Zod Schema Definition
export const ContactSchema = z.object({
  email: z.string().email(),
  phone: z.string().nullable().optional(), // Null handling
});

export const UserSchema = z.object({
  id: z.number(),
  name: z.string(),
  contact: ContactSchema,
  tags: z.array(z.string()),
});

// 2. TypeScript Type Inference
/** User Information Interface */
export type User = z.infer<typeof UserSchema>;
export type Contact = z.infer<typeof ContactSchema>;
```

---

## 🎯 Conclusion

Type definition is a safety device, but the process of making it shouldn't be painful.
Build a safe and robust type system with one copy-paste! 🍷
