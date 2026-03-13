---
layout: /src/layouts/Layout.astro
title: "How to Build a Slack Bot: The 'What's for Lunch?' Office Recommender"
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "Business Automation"
description: "A guide to building a custom AI lunch bot using Slack Workflow Builder to solve daily menu indecision for your team without any coding knowledge."
tags: ["Slack", "Chatbot", "Automation", "Company Culture"]
image: "/images/hooks/slack-lunch-bot.jpg"
---

## 📝 How to Build a Slack Bot: The 'What's for Lunch?' Office Recommender

- **🎯 Targeted at:** The junior employee burdened with picking the menu, or anyone wanting to liven up the company messenger.
- **⏱️ Time required:** 10 minutes (Based on setting up Slack Workflow)
- **🤖 Best Performance:** Latest reasoning models recommended (specialized in situational awareness and creative custom recommendations like ChatGPT-4o)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"What do you want to eat for lunch today? Anything. How about pasta? Hmm... not really in the mood for noodles..." Are you going to keep wasting emotional energy on this never-ending Moebius strip of lunch indecision?_

Every day at 11:30 AM, a strange tension fills the office. "What do you want for lunch?" "Oh, anything is fine." It's the eternal dilemma of the office worker—a swamp of emotional labor that eats away at precious break time.

The answer "anything" is never truly anything. It's a high-level puzzle where you must avoid yesterday's menu, steer clear of the spices the director hates, and consider the diet of the senior manager. While you hesitate behind your monitor, typing and deleting messages, your valuable lunch hour ticks away second by second. This small but persistent daily stress demands more **emotional labor** than you think, even draining your focus for afternoon tasks. How much longer will you repeat this farce of exhausting your energy just to pick a meal?

The invisible hierarchy and mind games involved in choosing a lunch menu often reveal a cross-section of organizational culture. Someone lives with the heavy burden of always having to make the decision, while others swallow their complaints because they can't voice their honest opinions. If left unaddressed, these seemingly trivial seeds of conflict eventually chill the team's vitality. However, the moment an AI lunch recommendation bot is introduced to the office messenger, the heavy responsibility of decision-making shifts smoothly from a 'specific team member' to an objective 'system.' A light suggestion like, "The bot recommended this, so let's try it today!" becomes an excellent escape hatch that softens a rigid organizational atmosphere.

You no longer need to waste your emotions on this unproductive game. You don't need any complex development knowledge or even a single line of Python code. By combining **Slack's Workflow Builder**, which we keep open for work every day, with a smart AI model, you can hire a <span style="color:var(--color-cyber-cyan)">'Hyper-personalized Lunch Buddy'</span> for free in just 10 minutes—one that hits the bullseye of everyone's picky tastes.

A simple text question like, "It's raining and I'm stressed, what should I eat?" is enough. The AI assistant responds more wittily than a human: "Pajeon and Makgeolli might be tough during work hours, but how about some spicy Brisket Jjamppong to clear your head?" A perfect curation that considers the weather, team vibe, and even wallet thickness will bring a smile to a once-desolate company messenger.

Lunchtime shouldn't be an extension of work; it should be the only sanctuary where you can catch your breath in the middle of a fierce day. Stressing over a meal is a major culprit in lowering the quality of work life. Use technology to break down walls between people and add a small twist of joy to the repetitive cogs of daily life. We now reveal the magical prompt and setup guide that will permanently break the cycle of indecision and transform your team's lunch into a true time of rest and refreshment.

---

## 📊 Proof: The Satisfying Result (Before & After)

### ❌ Before (The Pain We Endured)

At 11:30 AM every day, a suffocating silence hits the messenger window. Precious lunch time was flying away in an endless relay of unproductive texts.

```text
Junior: "What do you want to eat for lunch today?"
Member A: "Hmm... anything's fine with me."
Team Lead: "Let's just eat whatever."
(Endless mind games and 10 minutes of silence 🕰️)
```

### ✅ After (The Perfect Transformation)

![How to Build a Slack Bot: The 'What's for Lunch?' Office Recommender](/images/hooks/slack-lunch-bot.jpg)

The lunch menu is confirmed in just 5 seconds with the appearance of a savvy AI assistant that smashes indecision!

```text
Me: /lunch-recommend Team dinner before payday on a rainy, stressful day
Bot (Lunch Buddy): "☔ It's a rainy day, stress is high, and payday hasn't arrived yet! 
I highly recommend the **'Brisket Jjamppong and Tangsuyuk Set'**—it'll warm your soul while being easy on the wallet. 
Kick that work stress away with spicy broth and recharge for the afternoon with some hearty pork! 🍜"

Team Lead: "Oh, I'm actually craving Jjamppong today. This bot has great taste. Let's go!"
```

---

## ⚡️ TL;DR

1. No complex development knowledge is required. You can set up an intuitive bot using only Slack's **'Workflow Builder'**.
2. Set a keyword like "Lunch Recommend" or a frequently used emoji as a **Trigger** to call the bot the moment indecision strikes.
3. Seamlessly integrate an AI connector like ChatGPT to provide hyper-personalized lunch recommendations that perfectly reflect the weather and team mood.

---

## 🚀 How the Real Pros Write It

This is the core prompt to input into the AI connector (or external integration tool) inside the Slack workflow. It is designed to recognize situation and context rather than just performing a random draw. Copy the prompt below and adjust only the `[Variables]` to fit your company's situation.

### 🥉 Basic Version

A random recommendation prompt used to quickly resolve indecision and escape the swamp of endless contemplation.

> **Role:** You are a kind AI assistant who quickly and tactfully picks a menu for the company lunch.
>
> **Task:**
> Randomly select one category from Korean, Chinese, Japanese, Western, or Snack food first. Then, quickly recommend 3 popular lunch menus within that category that any office worker would generally enjoy.

### 🥇 Pro Version

Use this when you want a savvy recommendation that perfectly reflects specific contexts such as weather, team vibe, and the number of people.

> **Role:** You are a gourmet with a demanding palate and a human navigation system who knows every restaurant near the company (`[Company Location (e.g., Gangnam Station)]`).
>
> **Context:**
>
> - Weather: `[Current Weather (e.g., Raining, Sunny, High Fine Dust)]`
> - Vibe: `[Team Vibe (e.g., Stressed, Payday, On a Diet)]`
> - People: `[Number of People (e.g., Solo, Full Team, Peer Gathering)]`
>
> **Task:**
>
> 1. Strongly recommend the 1 best lunch menu that perfectly fits the provided situation.
> 2. You MUST add a witty and humorous explanation (1-2 sentences) of why you chose this menu to build rapport with office workers.
> 3. Write the output in a clean Markdown list format with matching emojis for excellent readability on mobile messengers.
>
> **Constraints:**
>
> - Strictly exclude heavy menus that are highly polarizing or too time-consuming to finish within the limited 1-hour lunch break.
>
> **Warning:**
>
> - Never make up fictional restaurant names or brands that do not exist in reality. Focus solely on suggesting the 'Menu Name' itself. (Prevention of Hallucination)

---

## 💡 Insight & How to Use

A lunch recommendation bot combining Slack Workflow and AI goes beyond providing technical convenience; it is a powerful, subtle tool that reshapes a rigid company **'Culture.'** It might look like a toy you can whip up in 10 minutes without coding, but the organizational impact of this small bot is beyond imagination. It serves as an excellent lubricant, inducing unexpected laughter and natural small talk in desolate messenger channels that previously only exchanged dry work orders and pressure.

The core of why this prompt is so powerful in practice lies in **'Constraint Control'** and **'Persona Design.'** If you simply ask "What should we eat today?", the AI will parrot soulless answers like 'Pizza, Burger, Kimchi Stew.' However, by enforcing clear **Contextual Variables** like `[Company Location]`, `[Current Weather]`, and `[Team Vibe]`, the AI's response range is dramatically narrowed and the quality spikes. It suggests soup dishes on rainy days, cost-effective menus before payday, and spicy food on days when work stress is at its peak. When this detailed situational awareness is added, team members begin to perceive this bot not as a 'simple program' but as a 'savvy colleague.'

In particular, the **Constraints** and **Warning** placed at the bottom of the prompt are the most important safety devices for operating a Slack bot. Lunchtime is only about an hour long. If grand, heavy course meals or highly polarizing menus like Malatang are recommended blindly, trust in the bot will plummet. Furthermore, to prevent the "large-scale accident" of the AI's characteristic hallucination creating a plausible-sounding but fictional restaurant name near the office, I have firmly restricted it to focus only on the **'Menu Name'** itself.

Furthermore, if you've drawn a positive response from the team with a light lunch bot, use it as a bridgehead to expand the system into a more evolved form. For example, if the default AI features within Slack Workflow are insufficient, try connecting the core prompts provided above with **external automation platforms like Zapier or Make.com**. You can complete a perfect automation loop where someone leaves a specific emoji (🍱) in a Slack channel, Zapier detects it as a trigger, sends the prompt to the ChatGPT API, and sends the result back to the Slack channel as a clean message.

An automation pipeline built this way can be flexibly transformed into various custom internal AI assistants, such as a "Team Member Praise Bot," a "Weekly Retrospective Bot," or an "Idea Brainstorming Partner." I strongly encourage you to take the first step in designing a sophisticated work automation environment that goes beyond the inherent limitations of Slack's internal workflows by starting with this lunch recommendation bot. Delegating repetitive small decisions to a system so your brain can focus on more creative and productive work—that is the true core value of automation that this prompt pursues.

---

## 🙋 FAQ

- **Q: My team is currently on the Slack Free plan. Can we use the Workflow Builder?**
  - A: Unfortunately, Slack's own Workflow Builder is only fully supported on paid plans (Pro and above). If you are on a free plan, consider using external API integration tools like Zapier or Make.com. We recommend an alternative automation method where a text message or Webhook in a specific channel is detected as a trigger to generate a response via the ChatGPT API and send it back to Slack.

- **Q: How does this compare to coding a bot directly with Python?**
  - A: Coding directly with a dedicated library like `slack-bolt` allows for much more sophisticated and complex features, such as interactive buttons or integration with internal databases. However, this requires separate server hosting costs (AWS, Heroku, etc.) and continuous maintenance resources. For a simple text-based lunch recommendation bot, using a **No-code Workflow** is overwhelmingly superior in terms of Return on Investment (ROI) compared to the resources required.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Context-based Variable Allocation:** Beyond a simple "recommend a menu," I injected clear variable brackets for `[Current Weather]`, `[Team Vibe]`, and `[Number of People]` into the prompt structure. This prevents the AI from listing mechanical, obvious text and instead produces hyper-personalized results thoroughly immersed in the user's current situation.
2. **Hallucination and Preference Control:** By placing a strict `Warning` block at the bottom of the prompt, I strongly engraved the constraints of a worker's precious lunch hour into the AI's logic circuit. This pre-filters polarizing menus and fundamentally blocks the critical hallucination risk of making up fictional restaurant names.
3. **Three-dimensional Persona Assignment:** I gave the AI a sharp and specific persona: 'A gourmet with a demanding palate and a human navigation system for restaurants.' As a result, the tone and manner of the bot's generated responses dramatically improve from simple information delivery to the level of witty, savvy advice from a close colleague.

---

## 🎯 Epilogue

Companies are always running restlessly with fierce work and invisible performance pressure. But for that one hour a day when you share a meal with colleagues and take a breath, it should be entirely pleasant and enjoyable. Even if it's not a massive internal system, this small **'Lunch Buddy'** tucked away in a corner of Slack will instantly refresh the heavy team atmosphere and remarkably lower the decision-making fatigue for picking a menu.

Starting from lunch today, why not stop the silent text game of staring at the messenger window and second-guessing each other? Trust your today's menu to the **savvy choice suggested by your reliable AI assistant**. After recharging 100% of your energy with a delicious meal decided at high speed, we sincerely cheer you on to demonstrate overwhelming work efficiency in the afternoon and head home with a lighter step than anyone else! 🍷
