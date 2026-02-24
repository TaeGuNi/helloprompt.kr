---
layout: /src/layouts/Layout.astro
title: " \"AI로 내 코드의 구멍을 찾아라! (버그 사냥꾼)\""
author: "ZZabbis"
date: "2026-02-12"
updatedDate: "2026-02-12"
category: "개발"
description: " \"A perfect AI code reviewer prompt guide for junior developers working without a mentor.\""
tags: ["코딩", "버그", "Refactoring", "ChatGPT", "개발자"]
---

# 📝 Find the Holes in Your Code with AI! (Bug Hunter)

- **🎯 Recommended for:** Junior developers struggling without a mentor, professionals anxious before deployment
- **⏱️ Time Required:** 3 hours of debugging → Reduced to 10 minutes
- **🤖 Recommended AI:** Claude 3.5 Sonnet (Best for code analysis), ChatGPT (GPT-4o)

- ⭐ **Difficulty:** ⭐⭐☆☆☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"It works fine on my local machine... but will it crash in production?"_

When coding alone, it’s easy to fall into the terrifying blind spot of "not knowing what you don't know." The code might work, but it could be sluggish, vulnerable to hacks, or an unreadable spaghetti mess.
Now, you can have your code reviewed by a tireless, Google-level Senior Engineer AI, available 24/7. It sharply identifies everything from potential bugs and inefficient logic to critical security vulnerabilities.

---

## ⚡️ 3-Line Summary (TL;DR)

1. Don't just throw your code at the AI; assign it a clear persona of a **Google Senior Engineer**.
2. Instead of a vague "review this," explicitly state **four review criteria**: bugs, security, readability, and performance.
3. Don't blindly trust the AI's refactored code. Ask for comments explaining *why* the changes were made, so you can verify and learn from them.

---

## 🚀 The Solution: "AI Code Reviewer"

### 🥉 Basic Version

Use this when you need a quick scan for critical issues.

> **Role:** You are a Senior Backend/Frontend Developer with 10 years of experience.
> **Task:** Review the code below and find any critical bugs or anti-patterns that need immediate improvement.
> 
> ```plaintext
> [Paste your code here]
> ```

<br>

### 🥇 Pro Version

Recommended when you want to elevate your code to production-level quality and secure objective reasoning for your refactoring.

> **Role:** You are a Lead Software Engineer with 15 years of experience, formerly at Google. You are an expert in Clean Code and system optimization.
> 
> **Context:**
> 
> - Language: `[Python / JavaScript / Java, etc.]`
> - Framework: `[React / Spring / Django, etc.]`
> - Purpose: This function is responsible for `[User login processing and session management]`.
> 
> **Input Code:**
> 
> ```plaintext
> [Paste the code to be reviewed here]
> ```
> 
> **Task:**
> 
> Strictly review my code from the following 4 perspectives and provide the fully improved code.
> 
> 1. **Bug:** Missing exception handling or potential runtime errors (Edge cases).
> 2. **Security:** Framework vulnerabilities such as SQL Injection, XSS, CSRF, etc.
> 3. **Readability:** Variable/function naming conventions, violations of the Single Responsibility Principle (SRP).
> 4. **Performance:** Inefficient loops, bottlenecks in terms of time complexity (Big-O).
> 
> **Constraints:**
> 
> - When providing the improved code, meticulously explain **why (Why)** you refactored it using inline comments (`//` or `#`) for each change.
> - Absolutely do not compromise the original intent of the business logic.
> - Optimize using only built-in features of the language, without adding external libraries.
> 
> **Warning:**
> 
> - Do not suggest uncertain syntax or deprecated functions. If you don't know, explicitly state that you don't know. (Prevent hallucinations)

---

## 💡 Writer's Insight

This prompt was my secret weapon during my junior days, providing immense mental stability whenever I lacked confidence in my code.
In particular, the 'Security' and 'Edge cases' criteria mechanically catch flaws that human eyes easily miss, saving me from major disasters on several occasions.
Never just copy and paste the code the AI modified. The reason I included the constraint `explain why you refactored using comments` is to help you internalize the perspective of a senior developer through the AI's review.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Can I just copy and paste the entire codebase of my company's project?**
  - A: **Absolutely not!** Leaking company code externally is a severe security violation. You must mask (blind) sensitive information like API Keys, DB passwords, and core business logic with `***`, and only ask about the minimal necessary functions or classes.

- **Q: Does the AI provide the perfect answer? Do I still need to test it?**
  - A: AI experiences hallucinations too. Sometimes it might suggest using a non-existent library or make syntax errors. You must always run test codes in your local environment to verify the functionality of the AI's suggested code.

---

## 🧬 Prompt Anatomy (Why it works?)

1. **Strict Persona Assignment (Perspective):** By enforcing the highest standard of a 'Google Senior Engineer', we prompt feedback from a 'Clean Code' perspective rather than just code that "somehow works."
2. **Multi-dimensional Evaluation Criteria (Specific Goals):** If you simply ask for a review, the AI might only catch superficial typos. By providing four distinct criteria—bugs, security, readability, and performance—it is engineered to deliver a comprehensive diagnosis.
3. **Learning-Driven Design (Explanation):** You won't improve your skills if you only receive the correct code. By demanding the reasons for changes as comments, it creates a tutoring effect that forces you to think about the architecture yourself.

---

## 📊 Proof: Before & After

### ❌ Before (Input: Novice DB query logic)

```python
def get_user_data(user_id):
    # Directly concatenating user input into the query (Dangerous!)
    sql = "SELECT * FROM users WHERE id = '" + user_id + "'"
    cursor.execute(sql)
    return cursor.fetchone()
```

### ✅ After (Result: Logic with enhanced security and readability)

```python
def get_user_data(user_id):
    """
    Retrieves specific user information.
    """
    # [Security] Use Parameterized Query (binding variable) to prevent SQL Injection
    # [Readability] Separate the query string to improve readability
    query = "SELECT * FROM users WHERE id = %s"

    try:
        cursor.execute(query, (user_id,))
        result = cursor.fetchone()

        # [Bug] Add exception handling for cases where there is no result
        if not result:
            return None

        return result

    except Exception as e:
        # [Bug] Runtime error logging (Using a logger is recommended in a real environment)
        print(f"Database error occurred: {e}")
        return None
```

**Review Summary:** Directly concatenating user input into a query exposes you to fatal SQL injection attacks. Security was patched using binding variables (`%s`), and `try-except` error handling was added to prevent the service from crashing if the DB lookup fails.

---

## 🎯 Conclusion

There is no such thing as perfect code in the world, but you can always write better code than yesterday.
Start elevating your code quality today with an AI mentor who will criticize your code most objectively, yet most kindly.

Now, you can clock out with peace of mind! 🍷
