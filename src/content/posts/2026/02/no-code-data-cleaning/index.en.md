---
layout: /src/layouts/Layout.astro
title: " \"엑셀 함수 몰라도 OK: 개떡 같은 데이터 찰떡같이 정제하기\""
author: "Jay"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "데이터 분석"
description: "Skip VLOOKUP and Python! Discover how to use AI to flawlessly standardize messy addresses, phone numbers, and emails in just 1 minute."
tags: ["엑셀", "데이터전처리", "노코드", "자동화"]
---

## 📝 No Excel Formulas Needed: Magically Clean Messy Data with AI

- **🎯 Target Audience:** Performance marketers dealing with CRM data, sales managers handling customer lists, and back-office staff processing receipts.
- **⏱️ Time Saved:** 2 hours → 5 minutes
- **🤖 Recommended Model:** ChatGPT (Advanced Data Analysis mode recommended), Claude 3.5 Sonnet

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐☆

> *"Seoul Gangnam, Gangnam-gu Samseong-dong, Seoul Gangnam... Are you still missing your train home because you're stuck manually fixing inconsistent address formats?"*

Data analysts often joke that 80% of their job is just grunt work—specifically, wrestling with data pre-processing. But you no longer need to be a data scientist writing complex Python Pandas scripts to get the job done. By simply providing an AI with a few examples of your desired output, it can autonomously recognize patterns and perfectly organize thousands of rows of chaotic data in seconds.

---

## ⚡️ TL;DR (3-Line Summary)

1. **Pattern Recognition:** AI is a regex powerhouse. Stop stressing over complex Excel formulas; simply show the AI your desired end result.
2. **Few-Shot Learning:** Provide 2-3 correct examples ("Format it exactly like this"), and the AI will automatically apply that precise pattern across tens of thousands of rows.
3. **Format Standardization:** Maximize your efficiency by instructing the AI to output the data in instantly usable formats, such as CSV or Markdown tables.

---

## 🚀 The Solution: "Data Cleaner Prompt"

### 🥉 Basic Version

Use this prompt for quick text extraction or simple, straightforward data conversions.

> **Role:** You are a `[Data Analyst]`.
> **Task:** Extract only the mobile phone numbers from the list below and standardize them into the `010-xxxx-xxxx` format.
>
> `[Paste your data list here]`

### 🥇 Pro Version

Deploy this prompt when dealing with heavily corrupted, highly inconsistent raw data that must be flawlessly structured into a pristine table.

> **Role:** You are a Senior Data Engineer with 10 years of experience.
>
> **Context:**
> - Background: I have raw `[address and contact]` data manually entered by customers. It is full of typos and highly inconsistent in formatting.
> - Objective: Clean and normalize this data into a flawless, standard format so it can be immediately uploaded to our CRM system.
>
> **Task:**
> 1. Carefully analyze the `[Input Data]` below.
> 2. Process the data according to the specified `[Rules]` and output it in the exact same format as the `[Few-Shot Examples]`.
>
> **Rules:**
> - **Address:** Standardize all addresses to official South Korean administrative districts down to the City/Province and District/County levels (e.g., 'Seoul' -> 'Seoul Special City', 'Gangnam' -> 'Gangnam-gu').
> - **Phone Number:** Remove all special characters and spaces, and strictly format them as `010-0000-0000`. If a number is missing, label it as 'NULL'.
> - **Name:** Remove all spaces within the name (e.g., 'Hong Gil Dong' -> 'Honggildong').
>
> **Few-Shot Examples:**
> - Input: "Hong Gil Dong / 010 1234 5678 / Seoul Gangnam Samseong-dong"
> - Output: | Honggildong | 010-1234-5678 | Seoul Special City Gangnam-gu Samseong-dong |
> - Input: "Kim Chul Soo / 010-9876-4321 / Gyeonggi Seongnam Bundang"
> - Output: | Kimchulsoo | 010-9876-4321 | Gyeonggi-do Seongnam-si Bundang-gu |
>
> **Constraints:**
> - The output MUST be strictly in a CSV format (comma-separated) within a single text code block. Do not include any greetings or extra explanations.
> - If any garbage data is completely uninterpretable even with the rules, append an 'Error' tag to the end of that specific row. (Prevent hallucination)
>
> **[Input Data]:**
> `[Paste your messy raw data here]`

---

## 💡 Writer's Insight

The secret behind the overwhelming performance of this prompt lies in **'Few-Shot Prompting'**. Rather than writing a tedious, code-like paragraph explaining the transformation rules, giving the AI 2-3 clear examples ("Change A to B") is infinitely more intuitive and drastically reduces formatting errors.

If you are a ChatGPT Plus user, make full use of the **Advanced Data Analysis** feature. Simply upload your entire `.xlsx` or `.csv` file and paste this prompt. ChatGPT will write and execute Python code in the background, flawlessly cleaning tens of thousands of rows in mere seconds. The dark ages of manually filtering Excel sheets all night are finally over.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Is it safe to upload actual company customer data?**
  - A: **Absolutely not.** Sensitive personal information like real names or phone numbers MUST be masked in Excel (e.g., Hong*dong, 010-1234-****) and converted into pseudonymized data before uploading. For highly secure data processing, discuss deploying a local LLM on your internal network with your security team, ensuring data never leaves your internal servers.
- **Q: I have tens of thousands of rows, and they won't fit in the prompt window. What should I do?**
  - A: Standard chatbot interfaces have a strict limit on the number of tokens you can input at once. We recommend splitting your data into chunks of 50-100 rows, or better yet, utilizing the file attachment features (available in ChatGPT Plus or Claude Pro) to process the entire document seamlessly.

---

## 🧬 Anatomy of the Prompt (Why it works?)

1. **Persona Assignment (Role):** By assigning the persona of a 'Senior Data Engineer' instead of relying on the basic chatbot persona, we exponentially increase the AI's focus on data integrity and edge-case handling.
2. **Clear Few-Shot Examples:** Eliminating abstract instructions and mapping input values to expected outputs 1:1 reduces the probability of the AI deviating from your intended format to near zero.
3. **Error Handling Safety Net:** We prevent hallucinations—where the AI forces rules onto uninterpretable data to generate false information—by implementing an 'Error' tag. This ensures human operators can quickly perform Human-in-the-Loop (HITL) reviews on problematic rows.
4. **Forced Output Format (Constraints):** By strictly enforcing a CSV format, we minimize friction in your workflow. You can simply copy the results and immediately apply them in Excel using the 'Text to Columns' feature.

---

## 📊 Proof: Before & After

### ❌ Before (Input)

```text
Park Ji Sung 010.5555.6666 Seoul Mapo-gu
Son Heung Min 010 7777 8888 Gangwon Chuncheon
Kim Yuna 010-9999-1111 Busan Haeundae U-dong
```

### ✅ After (Result)

```csv
Name,Phone,Address,Status
Parkjisung,010-5555-6666,Seoul Special City Mapo-gu,OK
Sonheungmin,010-7777-8888,Gangwon-do Chuncheon-si,OK
Kimyuna,010-9999-1111,Busan Metropolitan City Haeundae-gu U-dong,OK
```

---

## 🎯 Conclusion

Manually untangling messy data row by row is a tragic waste of your potential. Outsource these repetitive preprocessing tasks to AI, and focus your energy on what truly matters: extracting actionable business insights from perfectly refined data.

Now, go clock out on time! 🍷
