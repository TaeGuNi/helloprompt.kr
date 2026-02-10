---
layout: /src/layouts/Layout.astro
title: "Excel, JSON, CSV... Escape Data Format Conversion Drudgery"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "JSON to CSV, XML to JSON. Leave annoying data format conversion tasks to AI. Complex nested structures are no problem."
tags: ["Data Conversion", "JSON", "CSV", "Excel", "Productivity"]
---

# 📝 Excel, JSON, CSV... Escape Data Format Conversion Drudgery

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Please convert this Excel file content to JSON and shoot it to API."_

Converting data formats is common while developing.
Using online conversion tools feels uncomfortable uploading company data, and writing scripts takes more effort than it's worth.
Just scrape data and paste it. AI understands perfectly and converts it.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Free format conversion like JSON ↔ CSV ↔ XML
2. Remove unnecessary fields and change data structure (Mapping)
3. Highly useful conversion like generating SQL Insert statements

---

## 🚀 The Solution: "Universal Data Converter"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Data Engineering and ETL (Extract, Transform, Load) expert.
> **Request:** JSON to CSV, XML to JSON. Create a prompt that leaves annoying data format conversion tasks to AI. Complex nested structures are no problem.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Data Engineering and ETL (Extract, Transform, Load) expert.
>
> **Context:** I need to convert data I have into a format usable in another system.
>
> **Task:**

- 1. Convert **[Source Format]** data below to **[Target Format]**.
     > 2. Apply `[Field Name Change Rule]` during conversion.
     > 3. Print only the result cleanly so I can verify if data is correct.
     >
     > **Source Data:**
     >
     > ```
     > [Paste original data here]
     > ```
     >
     > **Conversion Rules:**
     >
     > - Source Format: `[e.g.: CSV]`
- - Target Format: `[e.g.: JSON Array]`
    > - Field Change: `[e.g.: Change 'Name' -> 'name', 'Age' -> 'age' and exclude 'Address']`

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input CSV)

```csv
Name,Age,Job
Hong Gildong,30,Developer
Kim Cheolsoo,25,Designer
```

### ✅ After (Result - JSON + Field Name Change)

**Request:** Convert CSV to JSON but change to English field names.

```json
[
  {
    "name": "Hong Gildong",
    "age": 30,
    "job": "Developer"
  },
  {
    "name": "Kim Cheolsoo",
    "age": 25,
    "job": "Designer"
  }
]
```

### ✅ After (Result - SQL Insert Statement)

**Request:** Change to INSERT statement usable in MySQL `users` table.

```sql
INSERT INTO users (name, age, job) VALUES
('Hong Gildong', 30, 'Developer'),
('Kim Cheolsoo', 25, 'Designer');
```

---

## 🎯 Conclusion

Don't waste time wrestling with Excel functions or writing regex for data conversion.
The moment you say "Change this like this" to AI, quitting time gets closer. 🍷
