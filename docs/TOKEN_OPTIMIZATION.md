# 📉 토큰 사용량 최적화 가이드 (Token Optimization Strategy)

AI 시스템 운영 비용과 성능을 최적화하기 위한 엔지니어링 레벨의 전략입니다.

## 1. 아키텍처 전략: RAG (Retrieval-Augmented Generation)

가장 확실한 토큰 절약법은 **"필요한 것만 입력하는 것"**입니다.

- **Bad:** 100페이지짜리 매뉴얼 전체를 프롬프트에 넣고 "여기서 찾아줘"라고 하기. (비효율)
- **Good:** 벡터 DB(Vector DB)를 사용하여 질문과 관련된 '3개 문단'만 검색(Retrieve)한 뒤, 그것만 프롬프트에 넣기.
  - **효과:** 토큰 사용량 90% 감소, 답변 정확도 상승.

## 2. 모델 티어링 (Model Tiering)

모든 일에 천재(GPT-4/Claude 3.5 Opus)를 쓸 필요는 없습니다.

- **L1 (가벼운 모델):** 요약, 번역, 분류 → `Gemini Flash`, `GPT-4o-mini` 사용 (비용 1/30)
- **L2 (무거운 모델):** 복잡한 추론, 코딩, 창의적 글쓰기 → `Gemini Pro`, `Claude 3.5 Sonnet` 사용
- **전략:** 사용자 요청을 먼저 L1이 분석하고, 어려운 문제일 때만 L2에게 넘기는 라우팅(Routing) 구현.

## 3. 프롬프트 압축 (Prompt Compression)

반복되는 Context를 줄이는 기법입니다.

- **Auto-Summarization:** 대화가 길어지면 백그라운드에서 "현재까지의 대화 요약"을 생성하여 이전 로그를 대체함.
- **Syntax Removal:** JSON 데이터에서 불필요한 공백이나 키값(`"description":`)을 줄임.

## 4. 운영 전략 (Operational)

- **File-based Context:** 코드를 채팅창에 붙여넣지 말고, 파일 경로(`read file`)를 통해 에이전트가 직접 읽게 하세요.
- **Session Reset:** 하나의 세션에서 너무 많은 주제를 다루지 말고, 태스크(Task) 단위로 세션을 분리하세요.
