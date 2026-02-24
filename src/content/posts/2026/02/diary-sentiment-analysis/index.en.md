---
layout: /src/layouts/Layout.astro
title: " \"일기 분석: 한 달치 일기 넣으면 내 심리 변화 그래프 그리기\""
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "자기계발/회고"
description: " \"Discover the hidden patterns of your mind. Learn how to turn your diary into data, visualize emotional flows, extract key topics, and pinpoint stress triggers using AI.\""
tags: ["일기", "회고", "감정분석", "데이터시각화", "ChatGPT"]
---

# 📔 Diary Analysis: Plotting Your Psychological Shifts with a Month of Entries

- **🎯 Recommended for:** Those who write diaries daily but rarely re-read them, or professionals wondering "Why am I so burned out lately?" and seeking the root cause.
- **⏱️ Time Required:** 5 minutes (Text extraction & AI analysis)
- **🤖 Recommended AI:** ChatGPT Plus (Utilizing GPT-4o Advanced Data Analysis)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"You pour your heart into your diary every night to shake off the day, but have you ever objectively examined the patterns of how your mind breaks down and recovers?"_

Records become assets as they accumulate, but if left untouched in a drawer, they are nothing more than a heavy burden. Now, it's time to entrust **a month's worth of diary data** to AI. Through powerful text mining technology, AI will draw the true emotional graph hidden within your text and visualize your most unconsciously repeated words into a word cloud. It is time to hack the algorithm of your mind that even you were unaware of.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Export a month's worth of entries from your diary app or Notion as a `.txt` or `.csv` file.
2. Upload the file to ChatGPT and input the **Data Visualization & Sentiment Analysis** prompt.
3. Conduct a productive retrospective by reviewing the AI-generated emotional flow chart and stress-trigger keyword report.

---

## 🚀 The Solution: "Mind Tracker Analysis Prompt"

### 🥉 Basic Version

Use this when you want to quickly grasp your primary subconscious interests and current emotional state.

> **Role:** You are a data analyst and a psychological counselor.
> **Task:** Extract the top 5 most frequently used nouns and adjectives from the week of diary text I uploaded. Based on these words, summarize my current psychological state in a single sentence.

<br>

### 🥇 Pro Version

Beyond a simple summary, this expert prompt scientifically visualizes the daily fluctuations of your emotions and their root causes.

> **Role:** You are a data scientist and clinical psychologist with 10 years of experience. You excel at analyzing user text data to identify and visualize psychological patterns.
>
> **Context:**
>
> - Background: I write a diary every day, but I experience severe emotional swings and want to identify the objective, data-driven causes behind them.
> - Goal: To draw a psychological change graph for the past month based on my diary data, and to derive the root causes of my stress along with my recovery patterns.
>
> **Task:**
>
> 1. **Sentiment Scoring:** Analyze the provided diary data and quantify my daily emotional state on a scale from -10 (extreme depression/stress) to +10 (peak happiness/fulfillment).
> 2. **Visualization (Run Python):** Visualize the daily emotional shifts using a **Line Chart**.
>    - Set the x-axis to 'Date' and the y-axis to 'Emotional Score'.
>    - Render a clean, easy-to-read image using Python's `matplotlib` or `seaborn` libraries.
> 3. **In-Depth Cause Analysis:** Analyze the diary entries on the days when the emotional score hit its lowest (Valley) and highest (Peak). Explain which events or keywords had the most significant impact on my emotions.
> 4. **Behavioral Prescription:** Propose 3 data-driven "actions to increase" and 3 "actions to avoid" for my mental management next month.
>
> **Constraints:**
>
> - All analysis must be strictly based on the text data I provide.
> - Ensure that the font used in the visualization graph displays properly and does not break.
> - Organize the final output neatly in Markdown format as a professional analysis report.
>
> **Warning:**
>
> - Never make moral or value judgments about the contents of the diary. Maintain a strictly analytical and supportive attitude. (Prevent hallucination)

---

## 💡 Writer's Insight

The true value of this prompt lies in implementing **"Meta-cognition"** through data. I, too, had a period where I was so overwhelmed by work that I just poured out complaints of "I'm exhausted" into my diary every day. However, when I analyzed a month's worth of entries using this prompt, I discovered that the common denominator on my absolute worst days was a combination of "lack of sleep" and "meetings with a specific client."

If you don't keep a diary, try exporting and analyzing your **"Chat with Me" history** on messaging apps like WhatsApp or KakaoTalk. Alternatively, analyze the messages you've sent on work messengers like Slack. It blatantly reveals what time of day you become most aggressive and during which tasks you use the most positive vocabulary. Data does not lie.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: How do I analyze a handwritten diary from an analog notebook?**
  - A: Take photos of your diary pages with your smartphone and upload the images directly to ChatGPT. GPT-4o's powerful OCR (Optical Character Recognition) capability will accurately read even messy handwriting and analyze it just the same.

- **Q: I'm concerned about the security of handing over my private diary to AI.**
  - A: I completely understand. Before proceeding with the analysis, be sure to go to ChatGPT Settings > Data Controls and turn off the **"Improve the model for everyone"** option. For even greater security, we recommend masking real names or sensitive proper nouns with 'A', 'B', etc., before uploading.

- **Q: The text on the generated graph appears as broken squares (□).**
  - A: This is a common issue when drawing graphs via Python in the ChatGPT environment. You can fix this by explicitly instructing it in your prompt: *"When drawing the graph, set the font family to a universally supported sans-serif font to ensure the text doesn't break."*

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Python Visualization Command (`Visualization (Run Python)`):** Instead of just having the AI write text, it forces the execution of the built-in Python environment (Advanced Data Analysis) to generate an image. A single intuitive graph delivers a much stronger impact for a retrospective than reading paragraphs of text.
2. **Quantitative Scaling (`Quantify from -10 to +10`):** This is the core mechanism that converts subjective text data into quantitative data that the AI can analyze. A clear standard here ensures a reliable graph.
3. **Deriving Action Items (`Behavioral Prescription`):** It maximizes the pragmatic utility of the prompt by moving beyond simple past analysis and demanding concrete To-Do/Not-To-Do lists for the upcoming month.

---

## 📊 Proof: Before & After

### ❌ Before (Vague Emotional Drain)

> "This month was absolutely terrible. I felt tired and annoyed every single day. Why am I so depressed?"
> (Falling into a vague sense of helplessness without knowing the exact cause)

### ✅ After (Data-Driven Objective Retrospective)

> **[📈 AI Emotional Analysis Report]**
>
> - **Lowest Emotional Score (Feb 15, 22):** Emotional Score -8.
>   - Core Root Keywords: `overtime`, `delivery food`, `self-loathing`
>   - Analysis: A pattern is identified where, on days you fail to manage stress and binge-eat late after working overtime, strong negative emotions carry over into the following day.
> - **💡 Data-Driven Advice:** On days when overtime is unavoidable, blocking food delivery apps and taking even a 10-minute light walk is highly effective for emotional defense.

---

## 🎯 Conclusion

Knowing yourself accurately is the first step toward any positive change.
Human memory is easily biased, but the text data you leave behind and AI can observe you more objectively than anyone else.

What trajectory does your mental state data trace this month?
Start your very own data-driven **Retrospective** right now. 🍷
