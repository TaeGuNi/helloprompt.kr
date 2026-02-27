---
layout: /src/layouts/Layout.astro
title: " \"RAG(검색 증강 생성) 구축: 내 데이터로 똑똑한 챗봇 만들기\""
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: " \"How to teach ChatGPT your company's internal rules and manuals. Build a robust RAG pipeline using LangChain and Vector DBs.\""
tags: ["RAG", "LangChain", "벡터DB", "챗봇", "AI개발"]
---

# 🧠 Building a RAG Pipeline: Create a Smart Chatbot with Your Own Data

- **🎯 Target Audience:** Managers tired of chatbots giving nonsense answers about company policies, and developers looking to integrate AI search into internal wikis.
- **⏱️ Time Required:** 30 minutes (Pipeline setup)
- **🤖 Recommended Model:** GPT-4o-mini (Cost-effective) + OpenAI Embeddings

- ⭐ **Difficulty:** ⭐⭐⭐⭐☆
- ⚡️ **Effectiveness:** ⭐⭐⭐⭐⭐
- 🚀 **Utility:** ⭐⭐⭐⭐⭐

> _"GPT is brilliant, but why doesn't it know our company's PTO policy?"_

The answer is simple: it hasn't learned your company's internal rules. However, fine-tuning a model every time a policy changes is completely unscalable in terms of both time and cost.

The ultimate solution to this problem is **RAG (Retrieval-Augmented Generation)**. The core concept is highly intuitive: "Retrieve relevant documents, augment the prompt with them, and then have the AI generate an answer." Once you grasp this, you can build a perfectly customized, hallucination-free AI chatbot tailored to your company in just 30 minutes.

---

## ⚡️ 3-Line Summary (TL;DR)

1. **Embedding:** Break text documents down into semantic chunks and convert them into arrays of numbers (vectors) to store in a Vector DB like Pinecone or ChromaDB.
2. **Retrieval:** When a user asks a question, query the Vector DB to fetch the documents that are most semantically similar to the question.
3. **Generation:** Inject the retrieved documents into the LLM's prompt as context, instructing it to "answer strictly based on this provided information."

---

## 🚀 The Solution: "RAG Architect Prompt"

### 🥉 Basic Version

Use this when you need a high-level conceptual understanding of the RAG architecture before diving into code.

> **Task:**
> I want to build an internal chatbot that accurately answers employee questions based on 100 internal PDF documents. Assuming we use LangChain as the framework, explain the entire data flow step-by-step so that even a beginner can understand it. Also, recommend a good free vector database suitable for a toy project.


### 🥇 Pro Version

Use this when you need production-ready, highly optimized Python code to instantly spin up a RAG pipeline.

> **Role:** You are a Senior AI Engineer with 10 years of experience in enterprise systems.
>
> **Context:**
> - Background: We need to build an internal helpdesk chatbot that answers questions based on hundreds of internal PDF documents containing company policies.
> - Goal: To create a robust Retrieval-Augmented Generation (RAG) pipeline that answers *only* based on the provided documents without hallucination.
>
> **Tech Stack:** Python, LangChain, OpenAI API, ChromaDB
>
> **Task:**
> Write the Python code for a RAG pipeline that perfectly meets the following requirements:
> 1. **Document Loader:** Use `PyPDFLoader` to recursively load all PDF files in the `./docs` directory.
> 2. **Text Splitter:** Use `RecursiveCharacterTextSplitter` to split the documents into chunks of 1000 characters. (Set `chunk_overlap` to 200 characters to prevent context loss).
> 3. **Vectorstore:** Use `OpenAIEmbeddings` (`text-embedding-3-small` model) to vectorize and store the chunks in a local `ChromaDB`.
> 4. **Retrieval Chain:** When a question is asked, perform a similarity search in the Vectorstore and generate the final answer using the `RetrievalQA` chain.
>
> **Constraints:**
> - Provide the output as a single, ready-to-run `.py` script enclosed in a Markdown code block.
> - Include detailed comments for each step so junior developers can understand the underlying mechanics of the pipeline.
>
> **Warning:**
> - You MUST include a system prompt instruction stating: "Do not hallucinate. If the answer is not found in the provided [Context], clearly state that you do not know." This is our highest priority.

---

## 💡 Writer's Insight

In a RAG pipeline, 80% of the final answer's quality is determined by two factors: **Chunk Size** and **Embedding Model Performance**.

If you slice the documents too thinly, the semantic context is broken, causing the AI to lose the plot. If the chunks are too large, you burn through tokens rapidly, and the pinpoint accuracy of the retrieval drops significantly. In enterprise environments, setting `chunk_size` to 500–1000 and `chunk_overlap` to 100–200 using the `RecursiveCharacterTextSplitter` is the standard baseline for optimization.

Furthermore, if your internal documents are heavily formatted with tables or images, relying solely on text splitting is a recipe for disaster. In such cases, integrating advanced document structuring tools like Markdown parsers or LlamaParse is absolutely essential for a production-grade system.

---

## 🙋 Frequently Asked Questions (FAQ)

- **Q: Does this work well with non-English documents, like Korean or Japanese?**
  - A: Yes, exceptionally well. OpenAI's latest `text-embedding-3-small` and `text-embedding-3-large` models have overwhelming multilingual capabilities. If you need extreme accuracy localized to specific regional contexts, you might also consider specialized embedding APIs like Upstage's Solar.

- **Q: Is it safe to send confidential company documents to the OpenAI API?**
  - A: When using the paid API, OpenAI's policy explicitly states that customer data is not used to train their models. However, if your company's security compliance is extremely strict (e.g., banking or defense), you must build an On-Premise RAG by combining local open-source LLMs (like Llama 3 or Qwen) with local embedding models (like BGE-m3).

- **Q: My AI keeps making up facts (hallucinating) that aren't in the documents. How do I fix this?**
  - A: You need to clamp it down with aggressive prompt engineering. By injecting a strict rule into the prompt template used in your `RetrievalQA` chain—such as, *"You must answer based ONLY on the provided [Context]. If the information is missing, reply precisely with 'I cannot find this in the documents.'"*—you can suppress hallucinations by over 99%.

---

## 🧬 Anatomy of the Prompt (Why it works?)

1. **Specifying the Exact Libraries:** Instead of a vague "write the code," the prompt explicitly demands `PyPDFLoader`, `RecursiveCharacterTextSplitter`, and `ChromaDB`. This prevents the LLM from hallucinating deprecated libraries or inventing inefficient workarounds.
2. **Forcing Chunk and Overlap Parameters:** By dictating exact numbers (1000-character chunks, 200-character overlap), the AI bypasses the guesswork and immediately generates an optimized data preprocessing pipeline.
3. **Internalizing Hallucination Safeguards:** By adding strict constraints directly into the prompt's instructions, we force the AI to write the system prompt safeguards into the generated code, yielding a script that is safe to test in a production environment immediately.

---

## 📊 Proof: Before & After

### ❌ Before (Standard ChatGPT)

```text
Q: "What is Hello Inc.'s policy regarding family event allowances for 2026?"

A: "I apologize, but I do not have access to the internal company regulations or
real-time HR policies for specific companies like Hello Inc. Please check with
your HR department or internal intranet for this information."
```

### ✅ After (Internal Chatbot with RAG)

```text
Q: "What is Hello Inc.'s policy regarding family event allowances for 2026?"

A: "[Answer based on 2026_HR_Policies.pdf]
According to Hello Inc.'s 2026 regulations, employees are entitled to a congratulatory
allowance of $1,000 and a floral wreath for their own wedding. Applications must be
submitted to the HR team via the internal ERP system at least one week prior to the
wedding date."
```

---

## 🎯 Conclusion

AI is not an omniscient god. Despite its vast general knowledge, it is essentially a brilliant new hire who knows absolutely nothing about *your* company.

But you don't need to force this new hire to memorize hundreds of pages of company policy. You just need to give them an **"Open Book"** environment so they can look up the answers whenever needed. That is the true essence of a RAG pipeline.

Gather those PDF manuals gathering dust on your desktop right now. **The data you already own is your most irreplaceable AI asset.** It's time to build it yourself! 🍷
