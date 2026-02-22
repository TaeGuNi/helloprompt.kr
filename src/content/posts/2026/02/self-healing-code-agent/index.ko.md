---
title: "Self-Healing Code: Building an Agent That Fixes Its Own Bugs"
description: "Stop babying your AI code generator. Learn how to build a 'Self-Healing' workflow where agents write, run, and fix their own errors automatically. A guide to Reflection loops."
author: "Unifactory Editor"
date: "2026-02-16"
tags: ["AI Agent", "Coding", "Automation", "Python", "Local LLM", "Workflow"]
image: "/images/2026/02/16/self-healing-code.jpg"
---

# 📝 자가 치유 코드(Self-Healing Code): 스스로 버그를 고치는 AI 에이전트 구축하기

- **🎯 추천 대상:** 개발자, 데이터 엔지니어, AI 에이전트 도입을 고민하는 리더
- **⏱️ 소요 시간:** 무한 디버깅 → 자동화로 0분
- **🤖 추천 모델:** GPT-4o, Claude 3.5 Sonnet, Gemini 1.5 Pro (코딩 특화 모델)

- ⭐ **난이도:** ⭐⭐⭐⭐☆
- ⚡️ **효과성:** ⭐⭐⭐⭐⭐
- 🚀 **활용도:** ⭐⭐⭐⭐⭐

> _"AI가 짠 코드에서 에러가 났을 때, 아직도 에러 메시지를 복사해서 AI에게 다시 물어보고 계신가요?"_

AI로 파이썬 스크립트를 생성하고 실행했더니 `SyntaxError`가 발생합니다. 에러를 복사해서 AI에게 다시 붙여넣고 수정을 요청하면 그제야 코드가 작동하죠.

그런데 여기서 질문 하나. **왜 '인간'이 그 중간에서 단순 복사/붙여넣기를 하고 있어야 할까요?**

2026년, 가장 앞서가는 엔지니어들은 단순히 AI에게 코드를 짜달라고 부탁하지 않습니다. 그들은 **자가 치유 시스템(Self-Healing Systems)**을 구축합니다. 오늘은 "작성 → 실행 → 수정"으로 이어지는 지루한 디버깅 루프를 자동화하여, 수동적인 코드 생성기를 '자율적인 문제 해결사'로 탈바꿈시키는 방법을 알아보겠습니다.

---

## ⚡️ 3줄 요약 (TL;DR)

1. AI가 한 번에 완벽한 코드를 짤 것이라는 'One-Shot'의 환상에서 벗어나세요.
2. 실행 에러(`stderr`)를 캡처하여 AI에게 다시 피드백으로 주는 '반성(Reflection) 루프'가 핵심입니다.
3. 파이썬 `subprocess` 모듈을 활용하면 단 50줄의 코드로 자가 치유 에이전트를 만들 수 있습니다.

---

## 🚀 해결책: "코드 힐러(Code Healer)" 프롬프트

### 🥉 Basic Version (기본형)

단순한 에러를 빠르게 수정할 때 사용하세요.

> **역할:** 너는 `[시니어 파이썬 개발자]`야.
> **요청:** 아래 `[에러 메시지]`를 바탕으로 `[원본 코드]`의 버그를 고쳐줘.

<br>

### 🥇 Pro Version (전문가형)

에이전트 시스템에 연동하여 자동화된 디버깅 파이프라인을 구축할 때 사용하세요.

> **역할 (Role):**
> 너는 시스템의 신뢰성을 책임지는 시니어 파이썬 SRE(Site Reliability Engineer)야. 변명이나 부연 설명은 필요 없어. 오직 완벽하게 작동하는 코드로만 말해.
>
> **상황 (Context):**
>
> - 배경: AI 모델이 생성한 스크립트가 실행 중 실패(Failed)했어.
> - 목표: 제공된 `[원본 코드]`와 `[에러 로그(Traceback)]`를 분석하여 코드를 자가 치유(Self-Heal)하는 것.
>
> **요청 (Task):**
>
> 1. `[에러 로그]`를 분석하여 근본 원인(문법 오류, 로직 오류, 모듈 임포트 누락 등)을 파악해.
> 2. `[원본 코드]`를 검토하여 실패가 발생한 지점을 정확히 찾아내.
> 3. 버그가 수정된 **완성된 형태의 파이썬 코드**를 다시 작성해.
>
> **제약사항 (Constraints):**
>
> - 기존 코드의 핵심 기능이나 로직을 임의로 삭제하지 마. 오직 '에러 수정'에만 집중해.
> - "여기 수정된 코드가 있습니다" 같은 불필요한 대화형 응답(Conversational filler)은 절대 출력하지 마.
> - 출력은 반드시 마크다운 파이썬 코드 블록(`python ... `) 단 하나로만 구성해.
>
> **입력 데이터 (Input Data):**
> **원본 코드:**
>
> ```python
> [여기에 원본 코드를 입력하세요]
> ```
>
> **에러 로그:**
>
> ```text
> [여기에 stderr 에러 메시지를 입력하세요]
> ```

---

## 💻 파이썬으로 루프 자동화하기 (Implementation)

무거운 AI 프레임워크(LangChain 등) 없이도, 파이썬 기본 라이브러리인 `subprocess`만으로 이 루프를 훌륭하게 오케스트레이션할 수 있습니다.

```python
import subprocess
# OpenAI 또는 다른 LLM 클라이언트 설정이 되어 있다고 가정합니다.
# from openai import OpenAI
# client = OpenAI()

def generate_fix(prompt):
    # LLM을 호출하여 수정된 코드를 받아오는 함수 (GPT-4, Claude, Llama 3 등)
    # response = client.chat.completions.create(...)
    # return response.choices[0].message.content
    pass

def run_and_heal(script_path, max_retries=3):
    for attempt in range(max_retries):
        # 1. 코드 실행: 안전하게 에러를 캡처하기 위해 별도의 프로세스로 실행
        process = subprocess.run(
            ['python', script_path],
            capture_output=True, text=True
        )

        # 성공: returncode 0은 에러가 없음을 의미
        if process.returncode == 0:
            print(f"✅ 성공! (시도 횟수: {attempt + 1})")
            return process.stdout

        # 실패: stderr에서 에러 메시지 추출
        error_msg = process.stderr
        print(f"❌ 실패 (시도 횟수: {attempt + 1}): {error_msg.strip().splitlines()[-1]}")

        # 2. 자가 치유 (Agentic Step)
        with open(script_path, 'r') as f:
            broken_code = f.read()

        healing_prompt = f"""
        이 에러를 바탕으로 파이썬 코드를 수정해.

        [원본 코드]
        {broken_code}

        [에러 메시지]
        {error_msg}

        설명이나 마크다운 없이 오직 '수정된 코드'만 반환해.
        """

        fixed_code = generate_fix(healing_prompt)

        # 수정된 코드로 원본 스크립트 덮어쓰기
        with open(script_path, 'w') as f:
            f.write(fixed_code)

        print(f"🩹 코드 치유 완료. 다시 실행합니다...")

    print("💀 최대 재시도 횟수를 초과하여 치유에 실패했습니다.")
    return None
```

---

## 💡 작성자 코멘트 (Insight)

이 '자가 치유(Self-Healing)' 패턴은 AI를 활용하는 방식을 근본적으로 바꿔놓습니다.

과거 웹 크롤링 자동화 툴을 만들 때, AI가 존재하지 않는 CSS 셀렉터를 환각(Hallucinate)하여 코드를 작성하는 문제가 있었습니다. 이때 단순히 문법 오류만 잡는 것이 아니라, "크롤링된 리스트가 비어있으면(Empty) 에러로 간주한다"는 **검증 루프(Validation Loop)**를 추가했습니다.

그러자 놀라운 일이 벌어졌습니다. 에이전트가 데이터가 정상적으로 추출될 때까지 **스스로 다른 CSS 셀렉터를 시도하고 코드를 수정**하기 시작한 것입니다. 이는 단순한 버그 수정을 넘어, AI가 주어진 환경(웹페이지 구조)에 **적응(Adaptation)**하는 과정이었습니다. 코드를 생성하는 것보다 중요한 것은, 생성된 코드를 '검증'하고 '책임'지게 만드는 루프를 설계하는 것입니다.

---

## 🙋 자주 묻는 질문 (FAQ)

- **Q: 코드를 덮어쓰다가 스크립트가 완전히 망가지면 어떡하나요?**
  - A: 실무에서는 `script_path`를 바로 덮어쓰기보다, `script_v1.py`, `script_v2.py`처럼 버전을 관리하며 저장하거나 Git 커밋을 자동화하여 롤백할 수 있는 안전장치를 마련하는 것이 좋습니다.

- **Q: 무한 루프에 빠질 위험은 없나요?**
  - A: 그래서 `max_retries` (최대 재시도 횟수) 설정이 필수적입니다. 보통 3~5회 이내에 해결되지 않는 에러는 프롬프트 자체의 한계이거나 인간의 개입이 필요한 아키텍처 결함일 확률이 높습니다.

- **Q: 어떤 LLM 모델을 사용하는 것이 가장 좋나요?**
  - A: 코드 수정과 로직 추론이 필요하므로 GPT-4o, Claude 3.5 Sonnet, 또는 코딩에 특화된 최신 로컬 모델을 강력히 권장합니다.

---

## 🧬 프롬프트 해부 (Why it works?)

1. **에러 원인 분석 강제 (Chain-of-Thought):** 코드를 다짜고짜 고치기 전에, 에러 로그를 먼저 분석하라는 Task를 부여하여 AI가 문제의 본질을 먼저 파악하도록 유도했습니다.
2. **출력 제어 (Systematic Output):** "설명 없이 코드만 출력하라"는 제약사항을 강하게 걸어두어, 파이썬 코드를 파싱하는 단계에서 불필요한 텍스트로 인해 발생하는 2차 에러를 방지했습니다.

---

## 📊 증명: Before & After

### ❌ Before (기존 방식)

```text
1. 사용자가 AI에게 코드 작성 요청
2. 코드 실행 후 SyntaxError 등 버그 발생
3. 사용자가 직접 에러 메시지(Traceback)를 복사
4. AI에게 디버깅 요청 및 코드 재작성 대기
5. 코드를 복사해서 다시 실행 (무한 반복)
```

### ✅ After (자가 치유 시스템 적용)

```text
1. 사용자가 AI에게 목표를 지시하여 코드 작성
2. 시스템이 자동 실행 및 에러(stderr) 캡처
3. AI 에이전트가 스스로 에러 분석 및 재작성 (Self-Healing)
4. 완벽하게 작동하는 최종 결과물만 사용자에게 전달
```

---

## 🎯 결론

AI에게 단순히 코드를 짜달라고만 부탁하지 마세요. 자신이 짠 코드에 대해 **스스로 책임**지게 만드세요.

2026년 에이전틱 워크플로우(Agentic Workflow)의 진짜 비법은 어떤 거대한 모델을 쓰느냐가 아니라, 얼마나 정교한 '반성(Reflection) 루프'를 설계하느냐에 달려 있습니다. 지금 바로 위 파이썬 코드를 활용해 여러분의 작업 환경에 '힐러 에이전트'를 도입해 보세요!
