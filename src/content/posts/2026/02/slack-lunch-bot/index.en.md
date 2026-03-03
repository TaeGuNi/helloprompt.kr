---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: "Learn how to build a custom Slack lunch recommendation bot using Workflow Builder and AI—without writing a single line of code."
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Building a Slack Bot: The "What's for Lunch?" Corporate Assistant

- **🎯 Recommended for:** Junior employees dreading the daily menu-picking ordeal, or HR teams looking to breathe new life into a stale corporate messenger.
- **⏱️ Time Required:** 10 minutes (via Slack Workflow Builder)
- **🤖 Recommended Model:** ChatGPT-4o (Excels at creative recommendations and grasping situational context)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"What should we eat today? Anything's fine. Pasta? Not really in the mood for carbs... End the exhausting daily guessing game. Hand the reins over to an AI assistant and save your mental energy for what really matters: clocking out on time."_

Deciding what to eat for lunch is the ultimate daily dilemma for the modern office worker. Instead of trying to awkwardly read the room and desperately throwing out random options, why not just ask your internal messenger bot? Imagine typing, "It's pouring outside, what are we eating?" and receiving a spot-on response like: "On a dreary, rainy day, how about a steaming bowl of Pho instead of the usual sandwich?" In this guide, we will walk you through building a highly intuitive lunch recommendation bot using Slack's Workflow Builder—without writing a single line of code.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Leverage Slack's no-code **Workflow Builder** to deploy a fully automated lunch bot in minutes.
2. Configure specific trigger phrases (e.g., "Lunch recommendations") or emoji reactions to instantly summon your assistant.
3. Integrate an AI connector (like ChatGPT) to run a custom prompt that curates menus based on the weather, team morale, and specific dining scenarios.

---

## 🚀 The Solution: "Lunch Buddy" Prompt

### 🥉 Basic Version

Deploy this prompt when you need an immediate cure for decision paralysis.

> **Role:** You are a friendly, witty corporate assistant in charge of selecting lunch menus.
>
> **Task:** Randomly pick one dining category from options like Korean, Chinese, Japanese, Western, or Street Food. Next, recommend 3 popular, universally appealing dishes from that category tailored for office workers.

### 🥇 Pro Version

Use this advanced prompt when you want highly tailored, context-aware lunch recommendations that factor in the weather, the team's current mood, and your exact headcount.

> **Role:** You are an esteemed gourmet food critic and a local restaurant expert navigating the dining scene near our workplace (`[Office Location, e.g., Downtown / Financial District]`).
>
> **Context:**
>
> - Weather: `[Current Weather, e.g., Pouring rain, Sunny and warm, Freezing cold]`
> - Mood/Vibe: `[Team Vibe, e.g., Stressed out, Payday celebration, Dieting]`
> - Headcount: `[Group Size, e.g., Solo lunch, Entire team, Small group of peers]`
>
> **Task:**
>
> 1. Recommend exactly 1 flawless lunch menu perfectly suited to the parameters above.
> 2. Include a witty, relatable explanation (1-2 sentences) detailing why this dish is the ultimate choice for the team today.
> 3. Format the final output as a highly readable Markdown list, complete with relevant emojis.
>
> **Constraints:**
>
> - Strictly exclude highly polarizing foods (e.g., blue cheese, heavy cilantro, intensely spicy dishes) or meals that require more than a standard lunch hour to consume.
>
> **Warning:**
>
> - Do not hallucinate or fabricate fake restaurant names. Focus entirely on recommending the menu item itself.

---

## 💡 Writer's Insight

A Slack bot is far more than a mere technical novelty—it is a potent catalyst for shaping corporate **culture**. It acts as a social lubricant, injecting lighthearted moments and effortless conversation starters into a workspace that might otherwise be bogged down by stiff, formal directives. If you launch a lunch bot and see positive engagement from your team, you can easily scale the concept into a "Kudos Bot," a "Birthday Bot," or even a "Weekly Retrospective Bot," cultivating a much more vibrant and flexible organizational atmosphere. Furthermore, by connecting this prompt with automation platforms like Zapier or Make, you can transcend the limitations of native Slack workflows and evolve your simple tool into a remarkably sophisticated AI assistant.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: My company is on the free tier of Slack. Can we still use Workflow Builder?**
  - A: Unfortunately, Slack restricts its native Workflow Builder to paid plans (Pro and above). However, if you're on the free tier, you can easily create a workaround using Zapier or Make.com to "listen" for specific channel messages and fire back responses via the ChatGPT API.

- **Q: How does this differ from hard-coding a bot from scratch (e.g., using Python)?**
  - A: Developing a bot with Python's `slack-bolt` library unlocks advanced, interactive UI elements like clickable buttons, modal pop-ups, and direct database queries. However, custom code brings the burden of ongoing maintenance and server hosting costs. For simple menu recommendations and lightweight text generation, a no-code workflow is vastly more efficient and cost-effective.

---

## 🧬 Prompt Anatomy (Why it works)

1. **Contextual Variables:** Moving beyond a generic "recommend food" prompt, we inject specific variables (`[ ]`) for weather, mood, and headcount. This forces the AI to bypass clichés and generate highly empathetic, laser-focused suggestions.
2. **Constraint Setting:** The `Warning` section directly addresses the practical limitations of a corporate lunch break (time constraints, polarizing tastes) and preemptively stops the AI from hallucinating non-existent local restaurants.
3. **Role-playing:** By assigning a distinct persona ("gourmet food critic and local restaurant expert"), the bot's tone shifts from a robotic data dump to the warm, witty voice of an enthusiastic coworker.

---

## 📊 Proof: Before & After

### ❌ Before (The Silent Lunch Hour)

```text
Junior: "What are we thinking for lunch today?"
Team Member A: "Hmm... I'm good with whatever."
Team Leader: "Let's just grab something nearby."
(Cue an endless guessing game and 10 minutes of agonizing silence 🕰️)
```

### ✅ After (The AI Assistant's Mediation)

```text
Me: /lunch
Bot (Lunch Buddy): "☔ It's pouring, tensions are high, and it's a team lunch right before payday!
For a day like today, I highly recommend a **'Spicy Seafood Noodle Soup & Sweet and Sour Pork Combo'**!
Sweat out the morning's stress with that fiery broth, and recharge for the afternoon with some hearty, crispy pork! 🍜"
Team Leader: "Wow, spicy noodles sound perfect today. Let's head out!"
```

---

## 🎯 Conclusion

The office is a battleground for hard work, but the single hour you get for lunch should be a sacred time for good food and relaxation. A simple, well-crafted bot can instantly lighten the team's mood and drastically cut down the daily fatigue of decision-making.

Starting today, put an end to the lunch-menu guessing game and entrust your meal choices to the **impeccable taste of an AI assistant**. Have a fantastic lunch, and here's to clocking out exactly on time! 🍷
