---
title: "What is the Time Complexity (Big O) of My Code?"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "A prompt that analyzes the time complexity and space complexity of the written algorithm and finds performance improvement points."
tags:
  [
    "Algorithm",
    "Time Complexity",
    "Big-O",
    "Performance Optimization",
    "CS Knowledge",
  ]
---

# 📝 What is the Time Complexity (Big O) of My Code?

**🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"Two for loops overlapping... Is this O(N) or O(N^2)?"_

Time Complexity analysis is essential when taking coding tests or writing logic to handle large traffic.
But does it give you a headache to calculate if there are recursive calls inside the loop or if conditions become complex?
If you show the code to AI, it analyzes it accurately with Big-O notation and even proposes more efficient algorithms.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Accurately calculate Time Complexity and Space Complexity (Big-O)
2. Identify performance bottlenecks
3. Suggest improved algorithms with lower complexity

---

## 🚀 The Solution: "Complexity Analyzer"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a Computer Science (CS) Professor and algorithm optimization expert.
> **Request:** Analyze the time complexity and space complexity of the written algorithm and find performance improvement points.

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a Computer Science (CS) Professor and algorithm optimization expert.
>
> **Context:** I'm curious about the performance of the algorithm I wrote. I want to know if it's efficient or if improvements are needed.
>
> **Task:**

- 1. Analyze the **Time Complexity** and **Space Complexity** of the provided code in Big-O notation.

     > 2. Explain the basis line by code line why such complexity comes out.
     > 3. If there is a more efficient method (e.g., O(N^2) -> O(N log N)), explain it with the improved code.
     >
     > **Code:**

     > [Paste the code to analyze here]

     > **Constraints:**
     >
     > - Analyze based on the Worst Case.
     > - Mention problems that may occur when the input data size (N) is very large.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Code)

```python
def find_duplicate(nums):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] == nums[j]:
                return nums[i]
    return None
```

### ✅ After (Result)

**Analysis:**

- **Time Complexity:** O(N^2). Using double `for` loops. It becomes very slow even if N exceeds 10,000.
- **Space Complexity:** O(1). Almost no additional memory is used.

**Improved Code (Using Hash Set):**

```python
def find_duplicate_optimized(nums):
    seen = set()
    for num in nums:
        if num in seen:
            return num
        seen.add(num)
    return None
```

**Improvement Result:**

- **Time Complexity:** O(N). Loops only once.
- **Space Complexity:** O(N). Need to store data in `seen` set. (Time-Space Tradeoff)

---

## 🎯 Conclusion

Stop thinking "It works so it's fine".
Developers who take care of invisible performance are the real pros. Grow your algorithm muscles with feedback from AI Professor! 🍷
