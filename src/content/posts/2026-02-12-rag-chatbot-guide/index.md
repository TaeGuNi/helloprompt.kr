---
layout: /src/layouts/Layout.astro
title: "RAG(검색 증강 생성) 구축: 내 데이터로 똑똑한 챗봇 만들기"
author: "ZZabbis"
date: "2026-02-11"
updatedDate: "2026-02-11"
category: "AI/개발"
description: "ChatGPT가 모르는 우리 회사 사내 규정, 매뉴얼을 학습시키는 법. 랭체인(LangChain)과 벡터 DB로 RAG 파이프라인 구축하기."
tags: ["RAG", "LangChain", "벡터DB", "챗봇", "AI개발"]
---

# (Updated) 🧠 RAG(검색 증강 생성) 구축: 내 데이터로 똑똑한 챗봇 만들기 {#updated}

- **🎯 추천 대상:** "우리 회사 규정 물어보면 헛소리하는 챗봇"에 지친 담당자, 사내 위키를 AI로 검색하고 싶은 개발자
- **⏱️ 소요 시간:** 30분 (파이프라인 구축)
- **🤖 추천 모델:** GPT-4o-mini (가성비) + OpenAI Embeddings

- ⭐ **난이도:** ⭐⭐⭐⭐☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"GPT는 똑똑한데, 우리 회사 연차 규정은 몰라요."_

당연합니다. 학습하지 않았으니까요. 그렇다고 파인튜닝을 하자니 비싸고 번거롭습니다. 정답은 **RAG(Retrieval-Augmented Generation)**입니다. "검색(Retrieval)해서 보여주고(Augmented) 답하게(Generation) 하라." 이것만 알면 나만의 AI를 만들 수 있습니다.

---

## (Updated) ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **임베딩(Embedding):** 문서를 쪼개서 숫자로 변환해 벡터 DB(Pinecone 등)에 저장한다.
2.  **검색(Retrieval):** 질문이 들어오면 관련된 문서를 DB에서 찾아온다.
3.  **생성(Generation):** 찾아온 문서를 프롬프트에 끼워 넣고 "이거 보고 대답해"라고 시킨다.

---

## (Updated) 🚀 해결책: "RAG Architect Prompt" {#updated}

### (Updated) 🥉 Basic Version (개념 설계) {#updated}

구조를 잡고 싶을 때.

> **요청:** "사내 PDF 문서 100개를 기반으로 질문에 답하는 챗봇을 만들고 싶어. LangChain을 쓴다고 가정하고, 전체 데이터 흐름(Data Flow)을 단계별로 설명해줘. 어떤 벡터 DB가 무료로 쓰기 좋은지도 추천해줘."

<br>

### (Updated) 🥇 Pro Version (구현 코드 생성) {#updated}

실제 파이썬 코드가 필요할 때.

> **역할 (Role):** 너는 AI 엔지니어링 전문가야.
>
> **기술 스택 (Stack):** Python, LangChain, OpenAI API, ChromaDB.
>
> **요청 (Task):**
> 다음 기능을 수행하는 RAG 파이프라인 코드를 작성해줘.
>
> 1.  **Loader:** `PyPDFLoader`로 `./docs` 폴더의 모든 PDF를 읽는다.
> 2.  **Splitter:** `RecursiveCharacterTextSplitter`로 1000자 단위로 자른다. (Overlap 200자)
> 3.  **Vectorstore:** `OpenAIEmbeddings`를 사용해 ChromaDB에 저장한다.
> 4.  **Chain:** 질문이 들어오면 유사도 검색(Similarity Search)을 수행하고, `RetrievalQA` 체인으로 답변을 생성한다.
>
> **출력:** 바로 실행 가능한 `.py` 파일 형태.

---

## (Updated) 💡 작성자 코멘트 (Insight) {#insight}

RAG의 품질은 **'청크(Chunk) 사이즈'**가 결정합니다.
너무 잘게 쪼개면 문맥이 끊기고, 너무 크게 쪼개면 정확도가 떨어집니다.
`RecursiveCharacterTextSplitter`를 쓸 때 `chunk_size=500~1000`, `chunk_overlap=100` 정도로 튜닝하는 게 국룰입니다.

---

## (Updated) 🙋 자주 묻는 질문 (FAQ) {#faq}

- **Q: 한국어도 잘 되나요?**
  - A: 네, OpenAI의 `text-embedding-3-small` 모델은 한국어 성능도 훌륭합니다. 더 정교한 걸 원하면 `Upstage`의 솔라(Solar) 임베딩을 쓰세요.

- **Q: 할루시네이션(거짓말)은 없나요?**
  - A: RAG는 검색된 문서에 근거해서만 답하도록 강제할 수 있어 거짓말이 현저히 줄어듭니다. 프롬프트에 "문서에 없는 내용은 모른다고 해"라고 꼭 넣으세요.

---

## (Updated) 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

1.  **구체적 라이브러리 명시:** `PyPDFLoader`, `ChromaDB` 등 사용할 도구를 콕 집어주면 AI가 뜬구름 잡는 소리 대신 바로 복붙 가능한 코드를 줍니다.
2.  **파라미터 지정:** 청크 사이즈나 오버랩 같은 디테일한 설정값을 언급함으로써, "이 사람 좀 아는구나" 하고 AI가 더 전문적인 코드를 뱉게 유도합니다.

---

## (Updated) 📊 증명: Before & After {#updated}

### (Updated) ❌ Before (일반 GPT) {#gpt}

**Q:** "우리 회사 경조사비 규정 알려줘."
**A:** "죄송합니다. 저는 귀하의 회사 규정을 알 수 없습니다." (당연함)

### (Updated) ✅ After (RAG 봇) {#rag}

**Q:** "우리 회사 경조사비 규정 알려줘."
**A:** "(검색된 '2026\_사내규정.pdf' 참조) 결혼 시 축하금 100만 원과 화환이 지급됩니다. 신청은 인사팀에 1주일 전까지 해야 합니다." (완벽함 ✨)

---

## (Updated) 🎯 결론 {#conclusion}

AI는 만능이 아닙니다. 공부를 시켜야 똑똑해집니다.
하지만 교과서를 통째로 외우게 할 필요는 없습니다.
**"오픈북 시험"**을 보게 하세요. 그게 RAG입니다.

지금 바로 PDF를 모으세요.
**당신의 데이터가 곧 AI의 지능입니다.** 🍷

## (Updated) Conclusion

Wait, there is more...
