# ALGORITHM_PHASE_1.md - Safety & Contraindication Screening

**Owner:** @zzabs_bot (The Safety Sentinel)
**Status:** V4 (Unified Linear Flow - No Shortcuts)

## 1. Objective

Identify medical contraindications (Pregnancy, Meds, Infection) and lifestyle constraints (Flights, Events) **without blocking the user flow**.
**Crucial Rule:** We **NEVER skip** to the end. Even if a safety flag is triggered (e.g., Pregnancy), the user still has skin concerns (Phase 2), a skin type (Phase 3), and specific goals (Phase 4).
We simply activate **"Safety Mode"** (applying strict filters) and proceed linearly to Phase 2.

---

## 2. Step 1: Medical Safety Screen (Explicit Q&A)

We must ask these three specific questions to set the safety baseline.

### Q1. Pregnancy & Nursing (임신/수유)

> **Question:** "현재 임신 중이거나 모유 수유 중이신가요?"
> _("Are you currently pregnant or breastfeeding?")_

- **Options:**
  - [Yes] -> **Activate Flag: `SAFE_MOM`**
  - [No] -> Proceed
- **Logic (If Yes):**
  - **Safety Mode:** ON
  - **EXCLUDE:** High-Energy Devices (Ulthera, Thermage, Laser), Injectables (Botox, Filler), Anesthetics.
  - **ALLOW:** LDM (Ultrasound), Oxygen Therapy, Gentle Facials.
  - **Action:** Tag user as `SAFE_MOM`, **continue to Phase 2 (Concerns).** DO NOT SKIP.

### Q2. Skin Medication (피부과 약 복용)

> **Question:** "최근 6개월 내에 로아큐탄 등 피지 조절제나 피부과 처방약을 복용하셨나요?"
> _("Have you taken skin medications like Roaccutane in the last 6 months?")_

- **Options:**
  - [Yes] -> **Activate Flag: `SENSITIVE_MEDS`**
  - [No] -> Proceed
- **Logic (If Yes):**
  - **Safety Mode:** ON
  - **EXCLUDE:** Ablative Lasers (Fraxel, CO2), Strong Chemical Peels.
  - **ALLOW:** Non-ablative RF (Potenza - verify mode), Rejuran (Healer), LDM.
  - **Action:** Tag user as `SENSITIVE_MEDS`, **continue to Phase 2 (Concerns).**

### Q3. Active Infection (염증/감염)

> **Question:** "시술 희망 부위에 현재 염증, 헤르페스, 또는 열린 상처가 있나요?"
> _("Do you have active inflammation, herpes, or open wounds in the treatment area?")_

- **Options:**
  - [Yes] -> **Activate Flag: `ACTIVE_INFECTION`**
  - [No] -> Proceed
- **Logic (If Yes):**
  - **Safety Mode:** ON
  - **EXCLUDE:** Direct procedures on infection site.
  - **ALLOW:** Cryo (Cooling), LED Therapy, Medication.
  - **Action:** Tag user as `ACTIVE_INFECTION`, **continue to Phase 2 (Concerns).**

---

## 3. Step 2: Lifestyle & Schedule (Flight/Event)

### Q4. Flight Plans (비행 일정)

> **Question:** "2주 이내에 비행기를 탑승하실 계획이 있나요?"
> _("Do you have flight plans within 2 weeks?")_

- **Options:**
  - [Yes] -> **Activate Flag: `FLIGHT_RISK`** (Pressure/Dryness)
  - [No] -> Proceed

### Q5. Important Event (D-Day)

> **Question:** "중요한 촬영이나 모임이 예정되어 있나요?"
> _("Do you have a big event coming up?")_

- **Options:**
  - [Yes, within 1 week] -> **Activate Flag: `NO_DOWNTIME`** (No marks allowed)
  - [Yes, in 2-4 weeks] -> **Activate Flag: `READY_TO_GLOW`** (Recovery time OK)
  - [No] -> Normal Protocol

---

## 4. The "Safety Mode" Logic (Single Linear Flow)

**The Problem:** Skipping to a "Safe List" ignores the user's specific skin type and current condition.
**The Fix:** We run the full algorithm (P1->P5). Safety flags acts as a **Global Filter** on the menu, but the **Selection Logic** (Phase 2, 3, 4) remains active to pick the _best_ item from the filtered list.

### Workflow Example:

1.  **Phase 1 Input:** User says "Yes, I am Pregnant."
2.  **System Action:**
    - Set Context: `Safety_Mode = ON`
    - Set Global Filter: `Exclude = [Energy_Devices, Injectables, Peels]`
    - **Proceed to Phase 2.**
3.  **Phase 2 (Concerns):**
    - System asks: _"안전을 최우선으로, 현재 가장 고민되는 부분은 무엇인가요? (건조함/트러블/붓기)"_
4.  **Phase 3 (Diagnosis):**
    - Diagnosis: "Hormonal Dryness" (Pregnant + Dry Skin).
5.  **Phase 4 (Mapping):**
    - Input: `All_Treatments`
    - Filter: `Remove Excluded Items`
    - Score: `Match "Dryness" with remaining items (LDM, Oxygen)`
    - Result: **LDM Water Drop** (Selected because it matches the concern _and_ survives the filter).

---

## 5. Output Vector to Phase 2

Pass this state object to the next agent:

```json
{
  "safety_status": "SAFETY_MODE_ON | CLEAR",
  "active_flags": ["SAFE_MOM", "FLIGHT_RISK"],
  "global_filter": {
    "exclude_categories": ["High-Energy", "Injectables", "Ablative"],
    "boost_categories": ["Hydration", "Soothing"]
  },
  "next_step": "PHASE_2_CONCERNS",
  "user_message": "Safety constraints applied. Proceeding to Phase 2 to identify specific skin concerns."
}
```
