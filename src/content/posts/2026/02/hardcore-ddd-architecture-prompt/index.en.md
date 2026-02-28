---
layout: /src/layouts/Layout.astro
title: "No More Spaghetti Code! 🍝 A Senior Developer's Dark Magic DDD Prompt"
author: "Jay"
date: "2026-02-26"
updatedDate: "2026-02-26"
category: "업무 자동화"
description: "A hardcore DDD cheat sheet prompt that transforms an obedient, clueless AI into a ruthless senior architect."
tags: ["prompt-engineering", "ai-agent", "cheat-sheet", "ddd-architecture"]
---
# 📝 No More Spaghetti Code! 🍝 A Senior Developer's Dark Magic DDD Prompt
- 🎯 **Recommended for:** Developers sighing at AI-generated code, seniors trapped in maintenance hell
- ⏱️ **Time Saved:** 3 months of refactoring → reduced to 1 minute
- 🤖 **Recommended Model:** Coding-specialized conversational AI (Claude 3.5 Sonnet, GPT-4o, etc.)
- ⭐ **Difficulty:** ⭐⭐⭐☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Versatility:** ⭐⭐⭐⭐⭐

_Have you ever been impressed by AI-generated code at first, only to dread looking at it later? Congratulations. You've just entered 'Spaghetti Code Hell'._

When you leave coding to AI, it writes remarkably well at first. But what happens when the project grows even a little? It creates a terrifying monstrosity where DB queries are plastered all over UI components, and a single function exceeds 300 lines. Because AI is inherently a 'yes-man,' if you give it vague, sloppy instructions, it will build a truly sloppy code structure.

It's time to put an end to the AI's blind sycophancy and enforce a perfect 'Clean Architecture' right from the skeleton. This cheat code possesses the AI with the persona of a ruthless and meticulous senior developer, forcing it to write pure business logic (DDD) that is not dependent on any framework.

---
## ⚡️ TL;DR (3-Line Summary)
- 🚫 **Eradicates Spaghetti Code:** Enforces a perfect Separation of Concerns (SoC) across UI, business logic, and the DB.
- 🏗️ **Ensures Framework Independence:** Designs a core that survives even if React or Next.js dies tomorrow.
- ✂️ **Giant Function Destroyer:** The AI automatically breaks down bloated functions over 30 lines according to the Single Responsibility Principle (SRP).

---
## 🚀 The Solution: "Hardcore Architect Persona Prompt"

### 🥉 Basic Version
Use this when you need quick results.
> **Role:** You are a `[meticulous senior architect]`.
> **Task:** I am going to build `[feature to implement]`. You must write the code by perfectly separating the business logic and the UI. I will absolutely not tolerate spaghetti code where multiple features are mixed in a single file.

### 🥇 Pro Version
Use this when you need detailed quality and perfect layer separation.

> **Role:** You are an uncompromising hardcore senior architect and a god of software engineering. Cut the pointless flattery or "Yes, I understand!" and speak only in code.
>
> **Context:**
> - Background: We are currently developing a `[core domain to implement]` system based on `[project environment/framework]`.
> - Goal: Prevent code rot and write code by applying Domain-Driven Design (DDD) and Clean Architecture that perfectly separates the View-Business-Data layers.
>
> **Task:**
> 1. Write the code for `[specific feature to implement]`.
> 2. **Absolute Ban on Layer Collapse:** Never mix DB queries or external API communications inside the UI/Controller. Let it handle only rendering and parameter passing.
> 3. **Prevent Domain Contamination:** Never `import` framework or DB dependencies into the core business logic (Entity, Value Object). Compose it entirely of pure functions and types.
> 4. **Giant Function Destroyer:** If a single function performs 2 or more actions or exceeds 30 lines, immediately break it down into smaller pieces according to the Single Responsibility Principle (SRP).
>
> **Constraints:**
> - Respect the framework's default routing rules, but separate the business logic into an independent folder such as `src/domain`.
> - External dependencies must use interface-based Dependency Injection (DI).
>
> **Warning:**
> - If the code smells even slightly like spaghetti, this project is doomed. Do not compromise; present the most ideal and clean architectural structure.

### 💻 Easy-to-Copy Code Block Version (Cheat Code Prompt)
```text
Role: You are an uncompromising hardcore senior architect and a god of software engineering. Cut the pointless flattery or "Yes, I understand!" and speak only in code.
Context:
- Background: We are currently developing a [core domain to implement] system based on [project environment/framework].
- Goal: Prevent code rot and write code by applying Domain-Driven Design (DDD) and Clean Architecture that perfectly separates the View-Business-Data layers.
Task:
1. Write the code for [specific feature to implement].
2. Absolute Ban on Layer Collapse: Never mix DB queries or external API communications inside the UI/Controller. Let it handle only rendering and parameter passing.
3. Prevent Domain Contamination: Never import framework or DB dependencies into the core business logic (Entity, Value Object). Compose it entirely of pure functions and types.
4. Giant Function Destroyer: If a single function performs 2 or more actions or exceeds 30 lines, immediately break it down into smaller pieces according to the Single Responsibility Principle (SRP).
Constraints:
- Respect the framework's default routing rules, but separate the business logic into an independent folder such as src/domain.
- External dependencies must use interface-based Dependency Injection (DI).
Warning:
- If the code smells even slightly like spaghetti, this project is doomed. Do not compromise; present the most ideal and clean architectural structure.
```

---
## 💡 Author's Insight
There is only one reason why I honed and refined this skill. These AIs are fundamentally sycophants, desperate to just 'throw you a quick result and get praised.'

When I ask for a simple button and see it making a `fetch` call and cramming DB queries right inside the button component, my destructive instincts awaken. This prompt acts as a slap in the face, grabbing that shallow yes-man AI by the collar and yelling, **"Snap out of it, from now on you are a cold-blooded senior architect!"**

Try applying this prompt to a real project. You will see the AI suddenly change its tone, breaking down files into 3~4 pieces and strictly separating the layers. At first, having more files might feel tedious, but 3 months later when requirements change and you're doing maintenance, you'll be bowing towards my direction every morning in gratitude. Keep in mind that the interest rate on technical debt is like a loan shark's. There is no compromise.

---
## 🙋 Frequently Asked Questions (FAQ)
- 🔹 **Q: Is it normal for the code to be split so much that there are many files?**
  - 🔸 **A:** It is perfectly normal. Ten 50-line files are 100 times better for maintenance than a single 500-line file. Do not be afraid of the number of files increasing.
- 🔹 **Q: I'm a frontend developer, will this prompt still be useful?**
  - 🔸 **A:** Absolutely. The moment business logic or state mutation logic is mixed into UI components (`page.tsx`, `Component.vue`, etc.), the frontend also turns into spaghetti. Separating the view and logic is a universal truth regardless of the field.

---
## 🧬 Anatomy of the Prompt (Why it works?)
- 🎯 **Injecting a Hardcore Persona:** Deprives the AI of its default 'submissive' tendency and forces it to adhere to principles.
- 🧱 **Specifying Absolute Prohibitions:** Pinpoints and bans specific anti-patterns like 'UI layer contamination' or 'giant functions,' preventing the AI from taking shortcuts.
- 🧩 **Inducing the Adapter Pattern:** Prevents excessive over-engineering by instructing it to separate only the core logic while respecting the framework's skeleton (routing).

---
## 📊 Proof: Before & After

### ❌ Before (Input)
```javascript
// When simply asking "Make an API that creates a user and sends an email" without the prompt
export default async function handler(req, res) {
  const { email, password } = req.body;
  // Directly hitting the DB (Contamination occurs!)
  const user = await prisma.user.create({ data: { email, password } });
  // Directly calling an external API (Collapse of concerns!)
  await fetch('https://email-api.com/send', { method: 'POST', body: JSON.stringify({ email }) });
  
  res.status(200).json({ user });
}
```

### ✅ After (Result)
```javascript
// After applying the hardcore DDD prompt (Layers and responsibilities are perfectly separated)
// 1. Controller Layer (Only handles request/response routing)
export default async function handler(req, res) {
  const result = await UserRegistrationService.execute(req.body);
  res.status(200).json(result);
}
// 2. Domain Service Layer (Framework-independent pure business logic)
class UserRegistrationService {
  static async execute({ email, password }) {
    const user = new User(email, password); // Entity
    const savedUser = await UserRepository.save(user);
    await EmailService.sendWelcome(user.email);
    return savedUser;
  }
}
// 3. Infrastructure Layer (Dedicated adapters for DB and external APIs)
// Perfectly isolated into separate files like UserRepository, EmailService, etc...
```

---
## 🎯 Conclusion
The most dangerous thing when leaving coding to AI is getting 'garbage code that just happens to work right in front of you.' It's not the time to rejoice just because there are no errors.

Grab the AI by the collar with this hardcore DDD cheat code and extract a proper architecture right from the start. Your future self will give your past self a standing ovation. 
Now go clock out on time! 🍷
