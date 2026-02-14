# ALGORITHM_PHASE_1.md - Safety & Contraindication Screening

**Owner:** @zzabs_bot (The Safety Sentinel)
**Status:** V1 (Empathic Screening & Care Protocol)

## 1. Objective

Ensure client safety and treatment efficacy by screening for contraindications without creating anxiety or feeling intrusive. Shift from "Interrogation" to "Care Optimization".

## 2. Key Reframing

### A. The Approach (Care, Not Police)

_Current Problem:_ "Are you pregnant? Taking Accutane? Recent surgery?" feels like a medical interrogation or liability waiver.
_New Concept:_ **"Treatment Optimization Context"**

- Frame questions as necessary for _maximizing results_ and _ensuring comfort_, rather than just avoiding lawsuits.

**Script / Flow:**

> "고객님에게 가장 안전하고 효과적인 시술을 설계하기 위해, 몇 가지 컨디션 체크가 필요합니다. 편안하게 답변해 주세요."

### B. The "Pregnant" Question (Empathy First)

_Current Problem:_ "임신 중이신가요?" (Too blunt, binary).
_New Concept:_ **"Sensitivity & Hormonal Check"**

- Acknowledge that hormonal changes affect skin sensitivity and treatment safety.

**Script:**

> 1. **"현재 호르몬 변화나 특별한 컨디션(임신, 수유 등)이 있으신가요?"**
>    - A: "네, 임신 중이거나 수유 중입니다." (Safety Priority)
>    - B: "아니요, 해당 사항 없습니다." (Proceed)
>    - C: "잘 모르겠어요 / 준비 중입니다." (Caution)
>
>    _Logic:_ If A or C -> **Exclude Energy Devices** (Ulthera, Thermage, Laser).
>    _Redirect:_ Suggest **"LDM Water Drop Lifting"** (Safe, hydrating, relaxing) or **"Oxygen Ceuticals"**.
>    _Script:_ "소중한 시기인 만큼, 에너지가 강한 시술보다는 산모님도 안심하고 받으실 수 있는 **LDM 물방울 리프팅**으로 피부 컨디션을 높여드리는 것을 추천합니다."

### C. Medication & History (Roaccutane / Surgery)

_Current Problem:_ "Do you take Roaccutane?"
_New Concept:_ **"Skin Recovery Ability"**

- Frame it around the skin's ability to heal after treatment.

**Script:**

> 2. **"최근 6개월 내에 피부과 시술이나 수술, 또는 피지 조절제(로아큐탄 등) 복용 경험이 있으신가요?"**
>    - A: "네, 수술/시술 받은 지 얼마 안 됐어요." (Recovery Mode)
>    - B: "약 복용 중입니다." (Dryness/Sensitivity Alert)
>    - C: "없습니다." (Standard Protocol)
>
>    _Logic:_ If B (Medication) -> Skin is likely thin/dry. Avoid Ablative Lasers (Fraxel). Suggest **Potenza (Non-invasive mode)** or **Rejuran**.
>    _Logic:_ If A (Recent Surgery) -> Avoid treatment area. Focus on **Regenerative Care** (Cryo, LDM).

## 3. Output Vector

Phase 1 passes a safety flag to Phase 2:
`{ Safety_Status: [Clear/Caution/Contraindicated], Allowed_Categories: [All/Non-Energy/Regenerative_Only], User_Note: "Pregnant - LDM Only" }`

## 4. BDD Logic Analysis (Test Cases)

**Scenario: User is Pregnant**

- **Given** user selects "Pregnancy/Breastfeeding"
- **When** the algorithm filters treatments
- **Then** exclude "Ulthera", "Thermage", "InMode"
- **And** recommend "LDM", "Oxygen Therapy"
- **And** display message: "Safe & Relaxing Care for Mom-to-be" (Not "REJECTED")

**Scenario: User taking Isotretinoin (Accutane)**

- **Given** user selects "Taking Sebum Control Meds"
- **When** the algorithm filters treatments
- **Then** exclude "Fraxel", "Strong Peels"
- **And** flag "High Dryness Risk" for Phase 2
- **And** recommend "Rejuran", "Skin Booster" (Injectables/Hydration focus)
