---
layout: /src/layouts/Layout.astro
title: " \"Slack 봇 만들기: '점심 뭐 먹지?' 추천해주는 사내 봇\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "업무 자동화"
description: " \"Learn how to build a custom Slack lunch recommendation bot using Workflow Builder and AI—without writing a single line of code.\""
tags: ["Slack", "슬랙", "챗봇", "자동화", "사내문화"]
---

# 🤖 Building a Slack Bot: The "What's for Lunch?" Corporate Assistant

- **🎯 Recommended for:** Junior employees suffering from daily menu-picking anxiety, HR teams wanting to revitalize a dull corporate messenger.
- **⏱️ Time Required:** 10 minutes (using Slack Workflow Builder)
- **🤖 Recommended Model:** ChatGPT-4o (Excellent at creative recommendations and contextual awareness)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"What should we eat today? Anything is fine. Pasta? Not really feeling noodles... Stop the exhausting daily lunch guessing game. Delegate it to an AI assistant and save your energy for clocking out on time."_

The ultimate dilemma for office workers: choosing the lunch menu. Stop trying to read the room and just ask your internal messenger bot. Imagine typing, "It's raining today, what should we eat?" and getting a witty response like, "On a rainy day, how about some warm, comforting Pho instead of the usual?" In this guide, we'll show you how to build a sensible lunch recommendation bot using Slack's Workflow Builder—without writing a single line of code.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Use Slack's no-code **Workflow Builder** to easily set up an automated bot.
2. Set specific trigger words (e.g., "Lunch recommendation") or emoji reactions to summon the bot.
3. Integrate an AI connector (like ChatGPT) to run a custom prompt that suggests lunch menus tailored to the weather and specific situations.

---

## 🚀 The Solution: "Lunch Buddy" Prompt

### 🥉 Basic Version

Use this when you need a quick cure for decision paralysis.

> **Role:** You are a friendly corporate assistant who picks lunch menus.
>
> **Task:** Randomly select one category from Korean, Chinese, Japanese, Western, or Street Food. Then, recommend 3 popular, universally liked dishes within that category for office workers.

<br>

### 🥇 Pro Version

Use this when you want a highly customized, sensible lunch recommendation that factors in the weather, mood, and team size.

> **Role:** You are a gourmet food critic and an expert local restaurant navigator near our office (`[Office Location, e.g., Gangnam Station]`).
>
> **Context:**
>
> - Weather: `[Current Weather, e.g., Raining, Sunny, Freezing]`
> - Mood/Vibe: `[Team Vibe, e.g., Stressed, Payday, On a diet]`
> - Headcount: `[Group Size, e.g., Eating alone, Whole team lunch, Peers]`
>
> **Task:**
>
> 1. Recommend exactly 1 perfect lunch menu that fits the situation above.
> 2. Add a witty, relatable explanation (1-2 sentences) on why this menu is the best choice for office workers today.
> 3. Format the output as a highly readable Markdown list, including relevant emojis.
>
> **Constraints:**
>
> - Exclude highly polarizing foods (e.g., fermented skate, heavy cilantro) or meals that take too long to eat within a standard lunch hour.
>
> **Warning:**
>
> - Do not hallucinate or make up fake restaurant names. Focus entirely on recommending the menu item itself.

---

## 💡 Writer's Insight

A Slack bot is more than just a technical "feature"—it is a powerful tool for shaping corporate **culture**. It acts as a lubricant, injecting small laughs and conversation starters into a messenger channel that might otherwise be filled only with stiff work directives. If you start with a lunch recommendation bot and gain positive traction from your team, you can easily expand this to a "Kudos Bot," a "Birthday Bot," or a "Weekly Retrospective Bot," significantly contributing to a flexible and positive organizational culture. Furthermore, if you link this prompt with automation tools like Zapier or Make, you can bypass the limitations of native Slack workflows and evolve it into a much smarter AI assistant.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: My company uses the free version of Slack. Can we still use Workflow Builder?**
  - A: Unfortunately, Slack's native Workflow Builder is fully supported only on paid plans (Pro and above). If you are on the free tier, you can build a workaround using Zapier or Make.com to "listen" for messages in a specific channel and send responses via the ChatGPT API.

- **Q: How is this different from coding a bot directly (e.g., using Python)?**
  - A: Developing with Python's `slack-bolt` library allows for highly advanced interactions, such as clickable buttons, modal pop-ups, and internal database integrations. However, since custom coding incurs maintenance overhead and server hosting costs, a no-code workflow is overwhelmingly more efficient for simple menu recommendations and lightweight text-based responses.

---

## 🧬 Prompt Anatomy (Why it works)

1. **Contextual Variables:** Instead of a generic "Recommend a menu," providing specific variables (`[ ]`) for weather, mood, and headcount forces the AI to avoid cliché answers and generate highly empathetic, customized suggestions.
2. **Constraint Setting:** The `Warning` section acknowledges the unique constraints of a lunch break (time limits, polarizing tastes) and fundamentally blocks the AI from hallucinating non-existent restaurants.
3. **Role-playing:** By assigning a specific persona ("gourmet food critic and local restaurant navigator"), the tone and manner of the response shift from rigid information delivery to a friendly, witty coworker.

---

## 📊 Proof: Before & After

### ❌ Before (The Silent Lunch Hour)

```text
Junior: "What should we have for lunch today?"
Team Member A: "Hmm... I'm fine with anything."
Team Leader: "Let's just grab whatever."
(An endless guessing game and 10 minutes of awkward silence 🕰️)
```

### ✅ After (AI Assistant's Mediation)

```text
Me: /lunch
Bot (Lunch Buddy): "☔ It's raining, you're stressed, and it's a team lunch right before payday!
For a day like today, I highly recommend a **'Spicy Seafood Noodle Soup (Jjamppong) & Sweet and Sour Pork Combo'**!
Blow away your work stress with the spicy broth and recharge your afternoon energy with some hearty meat! 🍜"
Team Leader: "Oh, Jjamppong sounds perfect today. Let's go!"
```

---

## 🎯 Conclusion

The office is a place for fierce hard work, but the one hour you get for lunch should be enjoyable and delicious. A single, simple bot can soften the team's atmosphere and drastically reduce the fatigue of decision-making.

Today, stop the lunch-menu guessing game and entrust your team's meal to the **sensible choice of an AI assistant**. Have a delicious lunch and enjoy clocking out on time! 🍷
