---
layout: /src/layouts/Layout.astro
title: "DeepSeek R1 로컬 설치: 내 PC에 심는 무료 코딩 노예"
author: "ZZabbis"
date: "2026-02-08"
updatedDate: "2026-02-08"
category: "개발/코딩"
description: "Ollama로 DeepSeek R1을 로컬에 설치하고 무제한 무료 코딩 비서를 활용하는 법. 데이터 유출 걱정 끝."
tags: ["DeepSeek", "Ollama", "Local LLM", "코딩", "생산성"]
---

# 💻 내 PC에 심는 무료 코딩 노예: DeepSeek R1 로컬 설치 가이드

- **🎯 추천 대상:** 회사 코드를 외부에 올리기 찜찜한 개발자, API 비용이 아까운 학생, 오프라인 환경에서 작업하는 분
- **⏱️ 소요 시간:** 10분 컷
- **🤖 추천 모델:** DeepSeek-R1-Distill-Llama-8B (또는 70B)

- **📊 난이도:** ⭐⭐☆☆☆
- **⚡️ 효과성:** ⭐⭐⭐⭐⭐
- **🛠️ 활용도:** ⭐⭐⭐⭐⭐

_"회사 보안 정책 때문에 ChatGPT에 코드를 못 붙여넣으신다고요? 그렇다고 멍청한 구형 모델을 쓰긴 싫죠? 이제 **DeepSeek R1**을 당신의 컴퓨터에 가두고 마음껏 부려먹으세요. 100% 무료, 100% 보안."_

2026년 현재, 개발자들 사이에서 가장 핫한 키워드는 단연 **"Local LLM"**입니다. 그중에서도 **DeepSeek R1**은 "오픈소스계의 실수"라고 불릴 만큼 미친 성능(특히 코딩 능력)을 보여주고 있죠. 이 글에서는 가장 쉽고 빠르게 내 맥북(또는 윈도우 PC)에 DeepSeek를 설치하는 방법을 알려드립니다.

---

## ⚡️ 3줄 요약 (TL;DR) {#tl-dr}

1.  **Ollama** 설치 (LLM 실행기)
2.  터미널에 명령어 한 줄 입력 (`ollama run deepseek-r1`)
3.  VS Code나 웹 브라우저에서 무제한 무료 코딩

---

## 🚀 Step 1: Ollama 설치하기

가장 먼저 LLM을 돌려줄 엔진, **Ollama**를 설치해야 합니다. 도커(Docker)보다 훨씬 쉽습니다.

### Mac / Linux

터미널을 열고 아래 명령어를 복사/붙여넣기 하세요.

```bash
curl -fsSL https://ollama.com/install.sh | sh
```

### Windows

[Ollama 공식 홈페이지](https://ollama.com)에서 `Download for Windows`를 클릭해 설치 파일을 실행하세요.

---

## 🚀 Step 2: DeepSeek R1 소환하기

이제 모델을 다운로드받아 실행할 차례입니다. 사양에 맞춰 선택하세요.

### 🥉 Basic: 8B 모델 (일반 노트북용)

M1/M2 맥북 에어, 일반 게이밍 노트북 등에서 쌩쌩 돌아갑니다.

```bash
ollama run deepseek-r1:8b
```

### 🥇 Pro: 70B 모델 (고사양 데스크탑/M3 Max용) {#m3-max}

램 32GB 이상 권장. GPT-4급의 추론 능력을 보여줍니다.

```bash
ollama run deepseek-r1:70b
```

명령어를 치면 자동으로 다운로드가 시작되고, 완료되면 바로 채팅 프롬프트가 뜹니다.

---

## 🚀 Step 3: 실전 활용 (VS Code 연동) {#vs-code}

터미널에서 채팅하는 건 간지가 안 나죠. **VS Code**에 붙여서 진정한 코파일럿(Copilot)으로 만들어봅시다.

1.  VS Code 확장 프로그램 탭에서 **"Continue"** 검색 후 설치.
2.  설치 후 좌측 사이드바 아이콘 클릭 → `Add Model` 선택.
3.  Provider에서 `Ollama` 선택.
4.  Model에서 `DeepSeek R1` 선택. (Autodetect 누르면 알아서 잡습니다)

이제 코드 드래그하고 `Cmd + L` (윈도우는 `Ctrl + L`) 누르면 바로 질문할 수 있습니다.

**Q:** "이 함수 리팩토링 해줘."
**A:** (DeepSeek가 순식간에 코드를 뱉어냅니다)

---

## 🧬 프롬프트 해부 (Why it works?) {#why-it-works}

이건 설치 가이드라 프롬프트가 없지 않냐고요? 천만에요. **DeepSeek에게 일을 시킬 때 가장 효과적인 프롬프트**를 드립니다. DeepSeek는 "생각하는 과정(Chain of Thought)"을 중시하므로, **"생각해봐"**라고 시키는 게 핵심입니다.

### DeepSeek 전용 코딩 프롬프트

**역할 (Role):** 너는 구글 시니어 엔지니어이자 클린 코드 전도사야.

**상황 (Context):** 내가 짠 이 코드는 기능은 하는데 가독성이 엉망이고 비효율적이야.

**요청 (Task):**

1. 코드의 문제점(시간 복잡도, 네이밍 등)을 먼저 분석해. (**생각 과정(Thinking Process)을 먼저 출력할 것**)
2. 최적화된 코드를 작성해.
3. 왜 이렇게 고쳤는지 주석으로 설명을 달아.

---

## 📊 증명: Before & After

단순한 명령어와 최적화된 프롬프트의 차이는 명확합니다. 제공된 프롬프트를 사용했을 때 더 구체적이고 구조화된 답변을 얻을 수 있으며, 재수정(Re-prompting)에 드는 시간을 절약할 수 있습니다.

### ❌ Before (ChatGPT 무료 버전) {#chatgpt}

"이 코드는... 음... 잘 모르겠네요. 다시 질문해 주세요." (혹은 뻔한 답변)

### ✅ After (DeepSeek R1 Local)

```text
<think>
사용자가 제공한 이중 for문은 O(n^2)이라 데이터가 많아지면 느려질 거야.
Hash Map을 사용해서 O(n)으로 줄일 수 있어.
변수명 'a', 'b'도 의미가 불분명하니 'userList', 'targetId'로 바꾸자.
</think>

(최적화된 코드 출력...)
```

_속도는 로컬이라 내 PC 성능에 따라 다르지만, 보안 걱정 없이 무한대로 질문 가능!_

---

## 💡 작성자 코멘트 (Insight) {#insight}

이 프롬프트는 실무에서 즉시 활용할 수 있는 실용성에 중점을 두었습니다.
결과가 만족스럽지 않다면 입력 변수나 상황(Context)을 조금 더 구체적으로 설정해보세요.

---

## 🙋 자주 묻는 질문 (FAQ) {#faq}

**Q. 결과가 마음에 들지 않아요.**
A. 구체적인 예시를 추가하거나, 상황(Context)을 더 자세히 묘사해보세요.

**Q. 다른 언어로도 가능한가요?**
A. 네, 프롬프트의 지시사항을 해당 언어로 번역하면 가능합니다.

---

## 🎯 결론 {#conclusion}

이제 당신의 PC 안에 **공짜 시니어 개발자**가 살고 있습니다.
인터넷이 끊겨도, 회사가 망해도, 당신의 DeepSeek는 영원히 당신 곁에 있습니다.

지금 당장 터미널을 여세요.
`ollama run deepseek-r1`

퇴근 시간이 빨라집니다. 🍷
