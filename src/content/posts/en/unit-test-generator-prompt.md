---
title: "Writing Test Code, A Prompt That Finishes in 5 Minutes"
author: "Zzabbis"
date: "2026-02-04"
updatedDate: "2026-02-04"
category: "Coding/Development"
description: "Leave boring and troublesome Unit Test writing to AI. Challenge 100% coverage!"
tags: ["Test Code", "TDD", "Jest", "PyTest", "QA"]
---

# 📝 Writing Test Code, A Prompt That Finishes in 5 Minutes

- **🎯 Recommended For:** Everyone

- **⏱️ Time Required:** 5 minutes
- **🤖 Recommended Model:** All AI Models

| Difficulty | Effectiveness |  Utility  |
| :--------: | :-----------: | :-------: |
|  ⭐⭐☆☆☆   |  ⭐⭐⭐⭐⭐   | ⭐⭐⭐⭐☆ |

_"I'm busy just writing code, when will I make all the test codes?"_

Everyone knows the importance of test code, but when you actually try to write it, it often takes longer than the main logic.
Thinking about Edge Cases, Mocking... did it give you a headache?
Now just paste the business logic. AI will write meticulous test codes for you.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Covers not only Happy Paths but also exception cases
2. Perfect support for widely used test framework syntax
3. Automatic generation of Mock data

---

## 🚀 The Solution: "Unit Test Generator"

### 🥉 Basic Version

Use this when you just need a quick result.

> **Role:** You are a meticulous and perfectionist QA Engineer and test automation expert.
> **Request:** Leave boring and troublesome Unit Test writing to AI. Challenge 100% coverage!

<br>

### 🥇 Pro Version (Expert)

Use this when you need detailed quality.

Copy the **PROMPT** content below and paste it into ChatGPT or Claude.

> **Role:** You are a meticulous and perfectionist QA Engineer and test automation expert.
>
> **Context:** I have code written in `[Language/Framework Used]`. I need Unit Tests to increase the reliability of this code.
>
> **Task:**
>
> 1. Analyze the provided code and first write a list of test cases. (Including success cases, failure cases, boundary value analysis)
> 2. Write executable test code using `[Test Library Name (e.g., Jest, PyTest, JUnit)]`.
> 3. If there are external dependencies, handle Mocking.
> 4. Add comments for each test case explaining what it verifies.
>
> **Code:**

> [Paste the code to test here]

> **Constraints:**
>
> - Include various scenarios so that test coverage is as high as possible.
> - Provide the code in a form that can be copied and executed immediately.
> - Write the test Description in English.

---

## 🧬 Prompt Anatomy (Why it works?)

---

## 📊 Proof: Before & After

### ❌ Before (Input Code)

```javascript
function divide(a, b) {
  if (b === 0) throw new Error("Cannot divide by 0.");
  return a / b;
}
```

### ✅ After (Result)

```javascript
describe("divide function test", () => {
  // 1. Normal operation test
  test("Dividing 10 by 2 should be 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  // 2. Exception handling test
  test("Dividing by 0 should throw an error", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by 0.");
  });

  // 3. Boundary value/special value test
  test("Dividing negative numbers should result in a negative number", () => {
    expect(divide(-10, 2)).toBe(-5);
  });
});
```

---

## 🎯 Conclusion

If bugs are found after deployment, the cost of fixing them jumps 100 times.
Exterminate bugs at the development stage with this prompt, and press the 'Merge' button with confidence! 🍷
