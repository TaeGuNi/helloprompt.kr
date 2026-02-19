# Phase 7: Core Philosophy Integration (Aura Core Cycle v7)

> **Objective:** Aura Core 시스템 전체에 **The 8 Core Principles**를 내재화하고 검증합니다.
> **Philosophy:** **"Rational Trust built on Principled Logic."** 원칙이 곧 코드이며, 코드가 곧 신뢰입니다.
> **Principle:** **The 8 Core Principles (Cycle v7)**
> **Owner:** Agent 7 (Audit & Integration)
> **Version:** V7.0

## 1. The 8 Core Principles (Definition)

이 원칙들은 Aura Core의 모든 의사결정, 코드, 문서의 기준이 됩니다.

1.  **No Dead Ends (Safe Care detours/fallback):**
    *   사용자가 "모름" 혹은 "해당 없음"을 선택해도 흐름이 끊기지 않아야 합니다.
    *   항상 "Safe Care" (기본적인 관리법)나 "상담사 연결" 같은 대안 경로(Detour)를 제공합니다.

2.  **Text-Only (Counseling tone, no interrogation):**
    *   화려한 UI보다 **따뜻한 텍스트**가 우선입니다.
    *   취조하듯 묻지 않고, 상담하듯 대화합니다. (e.g., "증상이 언제부터였나요?" vs "혹시 최근에 불편함을 느끼셨나요?")

3.  **Scenario Logic (Trap Questions for diagnosis):**
    *   단순 문진을 넘어, **특정 상황(Scenario)**을 제시하여 반응을 봅니다.
    *   "함정 질문(Trap Questions)"을 통해 사용자의 실제 상태(과장/축소 방지)를 파악합니다.

4.  **1 Diagnosis = 1 Hospital (Foreigner focus):**
    *   **외국인 환자(Foreigner)**에게 혼란을 주지 않기 위해, 하나의 진단 결과는 **가장 적합한 단 하나의 병원/시술**로 귀결되어야 합니다.
    *   선택의 역설(Paradox of Choice)을 방지합니다.

5.  **Storage Strategy (Fun vs Medical):**
    *   **Fun Record:** 휘발성, 공유 목적, 트렌드 센싱 (TTL 적용).
    *   **Medical Record:** 영구 보존, 정밀 진단, 병원 제출용 (암호화).

6.  **Practical Design (Document = Code):**
    *   문서는 예쁜 보고서가 아니라, **실행 가능한 코드의 명세**여야 합니다.
    *   문서와 코드의 괴리(Drift)를 0으로 유지합니다.

7.  **User/Client Separation (Foreigner Scenarios):**
    *   **Client (의뢰인):** 서비스를 이용하는 주체 (예: 한국 여행을 계획 중인 외국인).
    *   **User (실사용자):** 시스템을 조작하는 주체 (본인일 수도, 에이전시일 수도 있음).
    *   외국인 시나리오에서는 언어, 문화적 맥락, 대리 예약 상황을 명확히 분리합니다.

8.  **Objective Evaluation (Audit):**
    *   모든 결과물은 정량적/정성적으로 **감사(Audit)** 가능해야 합니다.
    *   자가 검증(Self-Check)이 아닌 외부 시각의 객관적 검증을 지향합니다.

## 2. Integration Strategy (적용 전략)

### A. Document Update (Docs)
*   모든 ALGORITHM_PHASE 문서에 해당 원칙이 반영되었는지 재검토합니다.
*   특히 `Foreigner Scenarios`와 `User/Client Separation`은 데이터 모델링(Data Modeling) 레벨에서 검토가 필요합니다.

### B. Logic Update (Code)
*   **Fallback Logic:** 모든 분기점(Switch/If)에 `default` 혹은 `else` 처리를 통해 "Dead End"를 방지합니다.
*   **Tone Adjust:** 하드코딩된 문자열이나 프롬프트 템플릿을 "Counseling Tone"으로 수정합니다.

### C. Testing Strategy (Tests)
*   `tests/foreigner_scenarios.test.ts`: 외국인 사용자 경로(언어 장벽, 대리 예약 등) 테스트.
*   `tests/user_client_separation.test.ts`: 의뢰인과 실제 방문자가 다른 경우 데이터 처리 테스트.

## 3. Audit Plan (검증 계획)

이 사이클의 종료 시점에는 **100-Point Audit Report**가 발행되어야 합니다.
각 원칙당 배점을 할당하여, 현재 프로젝트의 준수 여부를 평가합니다.
