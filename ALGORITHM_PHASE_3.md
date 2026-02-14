# ALGORITHM_PHASE_3.md - Preliminary Clinical Diagnosis

**Owner:** @ssaraah_bot (The Diagnostician)
**Status:** V1 (Data Synthesis & Clinical Insight)

## 1. Objective

Synthesize the fragmented data points from Phase 1 (Safety) and Phase 2 (Psych/Physio) into a coherent clinical diagnosis. This phase is the "Brain" that decides the treatment strategy before Phase 4 maps it visually.

## 2. Key Reframing

### A. Data Synthesis (Connecting the Dots)

_Current Problem:_ Users answer Q1, Q2, Q3, and get a result. They don't see _why_.
_New Concept:_ **"Clinical Insight Statement"**

- Explicitly formulate a diagnosis sentence based on inputs.

**Logic Table:**

| Input Combination            | Clinical Diagnosis                               | Strategy                                            |
| :--------------------------- | :----------------------------------------------- | :-------------------------------------------------- |
| **Safety Flag (Pregnant)**   | "Hormonal Sensitivity & Need for Safe Hydration" | **Zero-Risk / Relaxation Focus** (LDM, Oxygen)      |
| **High Fear + Dry Skin**     | "Fragile Barrier with Low Pain Tolerance"        | **Painless Lifting + Repair** (Titanium + Rejuran)  |
| **High Tolerance + Sagging** | "Loss of Structural Support (Deep Dermis)"       | **Deep Coagulation Lifting** (Ulthera, Thermage)    |
| **Oily T-Zone + Acne Scars** | "Active Sebum & Textural Irregularity"           | **Sebum Control + Resurfacing** (Potenza + Exosome) |

### B. The Diagnostic Voice

_Current Problem:_ "You need Ulthera."
_New Concept:_ **"Based on your profile..."**

**Script / Flow:**

> "분석 결과, 고객님의 피부는 현재 **[진단명]** 상태로 판단됩니다.
> 통증에 대한 부담은 줄이되(Phase 2), 근본적인 탄력 개선(Objective)이 필요한 시점입니다."

## 3. Output Vector

Phase 3 passes a structured diagnosis to Phase 4 (Mapping):
`{ Diagnosis_Code: "S1-Oily-Sensitive", Primary_Goal: "Lifting_without_Pain", Recommended_Category: "Titanium_Lifting" }`

## 4. BDD Logic Analysis (Test Cases)

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
