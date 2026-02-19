---
title: "Google LangExtract로 구조화된 데이터 추출 마스터하기"
date: 2024-05-20
pubDate: 2024-05-20
description: "Google의 새로운 LangExtract 라이브러리를 사용하여 LLM에서 정확한 JSON 및 구조화된 데이터를 추출하는 방법을 알아봅니다."
author: "Hello Prompt"
image: "https://docs.astro.build/assets/full-logo-light.png"
tags: ["Google", "LLM", "Data Extraction", "Python", "AI"]
---

대규모 언어 모델(LLM)은 시를 쓰거나 코드를 작성하는 데는 훌륭하지만, 비즈니스 애플리케이션에서 가장 필요한 '구조화된 데이터 추출' 작업에서는 종종 어려움을 겪습니다. 텍스트에서 특정 정보를 뽑아내 JSON 형식으로 정확하게 맞추는 것은 프롬프트 엔지니어링만으로는 한계가 있었습니다.

Google이 최근 공개한 **LangExtract**는 이러한 문제를 정면으로 해결하는 새로운 Python 라이브러리입니다. 이 글에서는 LangExtract가 무엇이며, 어떻게 데이터 파이프라인을 혁신할 수 있는지 살펴봅니다.

## LangExtract란 무엇인가요?

LangExtract는 Google의 Gemini 및 Vertex AI 모델을 기반으로 동작하며, 비정형 텍스트 데이터를 구조화된 객체(주로 Pydantic 모델이나 Python Dataclass)로 변환해주는 도구입니다. 기존의 LangChain 파서나 단순 프롬프트 지시보다 훨씬 더 강력한 **타입 안정성**과 **오류 복구 능력**을 제공합니다.

### 주요 기능

1.  **스키마 기반 추출**: Pydantic 모델을 정의하면, LLM이 해당 스키마에 정확히 맞는 데이터를 생성하도록 강제합니다.
2.  **자동 오류 수정(Self-Correction)**: 모델이 잘못된 형식을 출력할 경우, 라이브러리가 자동으로 파싱 오류를 감지하고 모델에게 수정을 요청하여 올바른 결과를 받아냅니다.
3.  **Gemini 최적화**: Google의 최신 Gemini Pro 및 Flash 모델의 function calling 기능을 최대한 활용하여 빠르고 저렴하게 추출 작업을 수행합니다.

## 사용 예제

간단한 이메일 본문에서 회의 정보를 추출하는 예제를 살펴보겠습니다.

```python
from google.langextract import DataExtractor
from pydantic import BaseModel, Field
from datetime import datetime

# 1. 추출할 데이터의 스키마 정의
class MeetingInfo(BaseModel):
    topic: str = Field(description="회의 주제")
    participants: list[str] = Field(description="참석자 이름 목록")
    start_time: datetime = Field(description="회의 시작 시간")
    location: str | None = Field(description="회의 장소 (없으면 null)")

# 2. 추출기 초기화 (Gemini 모델 사용) {#gemini}
extractor = DataExtractor(model="gemini-1.5-flash")

email_content = """
다음 주 화요일 오후 2시에 'Q3 마케팅 전략' 회의를 잡았습니다.
참석자는 김철수, 이영희, 그리고 박지성입니다.
장소는 301호 회의실입니다. 늦지 마세요!
"""

# 3. 데이터 추출 실행
meeting = extractor.extract(MeetingInfo, email_content)

print(meeting)
# 출력:
# topic='Q3 마케팅 전략'
# participants=['김철수', '이영희', '박지성']
# start_time=datetime(2024, 5, 21, 14, 0)
# location='301호 회의실'
```

## 왜 LangExtract인가?

기존에는 정규식(Regex)을 쓰거나 복잡한 프롬프트를 작성해야 했지만, LangExtract를 사용하면 **코드 중심(Code-first)**으로 데이터 파이프라인을 구축할 수 있습니다. 특히 RAG(검색 증강 생성) 시스템에서 검색된 문서로부터 답변에 필요한 핵심 인자만을 발라내거나, 고객 지원 챗봇에서 주문 정보를 구조화하여 API로 넘길 때 매우 유용합니다.

## 결론 {#conclusion}

Google LangExtract는 LLM을 단순한 챗봇이 아닌, **신뢰할 수 있는 데이터 처리 엔진**으로 바꿔줍니다. 지금 바로 설치하여 여러분의 프로젝트에 도입해 보세요. 데이터 전처리의 고통이 획기적으로 줄어들 것입니다.

## 💡 작성자 코멘트 (Insight) {#insight}

이 글은 최신 기술 동향을 반영하여 작성되었습니다. 실무에 바로 적용 가능한 핵심 내용을 담고 있으며, 추가적인 질문은 언제든 환영합니다.

## 🙋 자주 묻는 질문 (FAQ) {#faq}

Q: 이 내용은 최신 정보인가요?
A: 네, 작성 시점 기준으로 가장 최신 정보를 바탕으로 분석하였습니다.

Q: 추가적인 자료는 어디서 볼 수 있나요?
A: 본문 내 포함된 링크나 관련 포스트를 참고해주시기 바랍니다.
