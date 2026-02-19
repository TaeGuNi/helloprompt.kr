# ALGORITHM_PHASE_4.md - The Logic Canvas (Transparent Mapping)

**Owner:** @abba_choi_bot (The Architect)
**Status:** V1 (De-mystified Black Box)

## 1. Objective

Stop being a "Black Box". Users shouldn't feel like a random algorithm spat out a result. Explain _how_ the connection works. Show the "Canvas" where their data points connect to specific clinical protocols.

**Single Source of Truth:** `aura-core/data/treatments/master.json`. All logic MUST map to this file. Legacy `data.ts` is deprecated.

## 2. Key Reframing

### A. Transparency Statement (The "Why")

_Current Problem:_ User inputs data -> Wait -> Result appears. Magic, but untrustworthy.
_New Concept:_ **"Visualizing the Connection"**

- Explicitly state which input drove the decision.

**Script / Flow:**

> "수집된 데이터를 바탕으로 최적의 시술 지점을 연결하고 있습니다... (The Logic Canvas)"
>
> 1. **Mapping Sensitivity:**
>    "고객님은 '통증에 대한 민감도(C타입)'를 보이셨기에, 고통이 수반되는 울쎄라 계열은 배제하고 **무통증 리프팅 라인**으로 범위를 좁혔습니다."
> 2. **Mapping Skin Barrier:**
>    "또한 T존의 건조함(장벽 약화)이 확인되어, 레이저보다는 **즉각적인 수분 공급과 재생(스킨부스터)**이 우선순위로 매핑되었습니다."

### B. The Mapping Visualization (Text-based Logic)

Instead of just showing the result, show the equation.

**The Equation Display:**

> **[ Diagnosis Logic ]**
>
> - **Condition:** Loss of Elasticity + High Sensitivity
> - **Constraint:** Cannot use High-Heat Devices (Pain Fear)
> - **Solution Space:** {Titanium Lifting, Air Jet, LDM}
> - **Selected Protocol:** **Titanium Lifting (Mode: SHR)**
>
> "이 선택은 '효과'와 '편안함'의 교집합에서 도출된 최적의 결론입니다."

## 4. Input Integration (Phase 3 -> Phase 4)

**Condition:** Input from Phase 3 (Diagnosis)

- **Take the `{ Diagnosis_Code }` and visualize it on the Logic Canvas.**
- If Diagnosis is **"Fragile Barrier with Low Pain Tolerance"**:
  - **Highlight:** "Sensitivity" axis.
  - **Connect:** "Low Pain" preference -> "Titanium Lifting".
  - **Exclude:** "Ulthera" (too painful).

## 5. Output Handover

Phase 4 hands over a _justified_ decision to Phase 5.
`{ Selected_Treatment: "Titanium", Justification: "High Fear + Sagging", Excluded_Treatments: ["Ulthera (Pain)", "InMode (Downtime)"] }`

## 6. BDD Logic Analysis (Test Cases)

**Scenario: Safety Exclusion Transparency (Master JSON Check)**

- **Given** Phase 3 Output includes `{ Excluded_For_Safety: "Ulthera" }`
- **When** Phase 4 renders the Logic Canvas
- **Then** Display "Exclusion Zone" distinct from "Recommended Zone"
- **And** Verify `Ulthera` in `master.json` has `contraindications: ["Pregnancy"]`
- **And** Show message: "울쎄라는 현재 고객님의 컨디션(임신 가능성/통증 민감도)을 고려하여 제외되었습니다."
- **And** Highlight: "안전(Safety) > 효과(Effect)" prioritization logic.

**Scenario: Skin Barrier Logic (PN vs Exosome)**

- **Given** User has "Weak Barrier" and needs "Hydration"
- **When** Algorithm scans `master.json` for `Rejuran` (PN)
- **Then** Confirm `Rejuran` is mapped to `goals: ["Hydration", "Repair"]`
- **And** Recommend `Rejuran` over aggressive treatments (like `Fraxel`)
- **And** Explain: "장벽 강화와 수분 공급을 위해 리쥬란(PN)이 최적입니다."

**Scenario: Budget/Downtime Logic Check**

- **Given** User prefers "No Downtime" (Zero Bruising)
- **When** Algorithm considers "InMode FX" (Bruising Risk: High)
- **Then** Auto-Exclude "InMode FX" from Primary Recommendation
- **And** Swap with "Titanium Lifting" or "Tuneface" (Zero Downtime)
- **And** Explain: "일상 생활에 지장이 없는 시술을 최우선으로 선택했습니다."
