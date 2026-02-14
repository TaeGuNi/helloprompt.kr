# ALGORITHM_PHASE_3.md - Preliminary Clinical Diagnosis

**Owner:** @ssaraah_bot (The Diagnostician)
**Status:** V2 (Universal Diagnosis Logic)

## 1. Objective

Synthesize the fragmented data points from Phase 1 (Safety) and Phase 2 (Psych/Physio) into a coherent clinical diagnosis.
**Crucial Rule:** We diagnose the **Skin Condition**, not just the Safety Status. A pregnant woman with acne has "Hormonal Acne", not just "Pregnant". The diagnosis must reflect the _problem_ so Phase 4 can find the _safe solution_.

## 2. Key Reframing

### A. Data Synthesis (Connecting the Dots)

_Current Problem:_ Users answer Q1, Q2, Q3, and get a result. They don't see _why_.
_New Concept:_ **"Clinical Insight Statement"**

- Explicitly formulate a diagnosis sentence based on inputs.

**Logic Table:**

| Input Combination (P1 + P2)      | Clinical Diagnosis                           | Strategy                                            |
| :------------------------------- | :------------------------------------------- | :-------------------------------------------------- |
| **Pregnant (Safety) + Dry Skin** | "Hormonal Dehydration & Barrier Sensitivity" | **Safe Hydration** (LDM Moisture Mode)              |
| **Pregnant (Safety) + Acne**     | "Hormonal Sebum Activity (Safe Mode)"        | **Safe Control** (LDM Acne Mode / Aqua Peel)        |
| **High Fear + Dry Skin**         | "Fragile Barrier with Low Pain Tolerance"    | **Painless Lifting + Repair** (Titanium + Rejuran)  |
| **High Tolerance + Sagging**     | "Loss of Structural Support (Deep Dermis)"   | **Deep Coagulation Lifting** (Ulthera, Thermage)    |
| **Oily T-Zone + Acne Scars**     | "Active Sebum & Textural Irregularity"       | **Sebum Control + Resurfacing** (Potenza + Exosome) |

### B. The Diagnostic Voice

_Current Problem:_ "You need Ulthera."
_New Concept:_ **"Based on your profile..."**

**Script / Flow:**

> "분석 결과, 고객님의 피부는 현재 **[진단명]** 상태로 판단됩니다.
> (Safety Mode시: 현재 안정이 필요한 시기이므로,) 자극은 최소화하되, **[목표: 수분/진정]** 관리에 집중하는 솔루션을 설계했습니다."

## 3. Output Vector

Phase 3 passes a structured diagnosis to Phase 4 (Mapping):
`{ Diagnosis_Code: "S1-Oily-SafeMode", Primary_Goal: "Sebum_Control_Safe", Recommended_Category: "LDM_Acne", Constraints: ["No_Laser", "No_Peel"] }`

## 4. BDD Logic Analysis (Test Cases)

**Scenario: Pregnant with Dry Skin (Safe Mode Diagnosis)**

- **Given** Phase 1 returns `Safety_Status: ON`
- **And** Phase 2 returns `Skin_Type: Dry/Fragile`
- **When** Phase 3 processes the data
- **Then** Diagnosis is **"Hormonal Sensitivity & Barrier Dehydration"**
  - (Not just "Pregnant", but specific to her skin condition)
- **And** Strategy is "Safe Hydration & Repair"
- **And** Recommended Category is "LDM Water Drop (Moisture Mode)"

**Scenario: Sensitive Skin with Fear of Pain**

- **Given** Phase 2 returns `{ Fear: High, Barrier: Fragile }`
- **When** Phase 3 processes the data
- **Then** Diagnosis is "Fragile Barrier with Low Pain Tolerance"
- **And** Strategy is "Painless Lifting + Repair"
- **And** Recommended Category is "Titanium + Rejuran"

**Scenario: Active Acne with High Tolerance**

- **Given** Phase 2 returns `{ Fear: Low, T-Zone: Oily/Active }`
- **When** Phase 3 processes the data
- **Then** Diagnosis is "Active Sebum & Textural Irregularity"
- **And** Strategy is "Sebum Control + Resurfacing"
- **And** Recommended Category is "Potenza + Exosome"
