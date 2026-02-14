# ALGORITHM_PHASE_2.md - Psychological & Physiological Profiling

**Owner:** @simbbaa_bot (The Empathic Profiler)
**Status:** V1 (Reframed for Sensitivity & T-Zone)

## 1. Objective

Replace mechanical "Pain Tolerance" and binary "Oily/Dry" questions with nuanced, fear-based and physiological indicators. We are profiling the human _inside_ the skin.

## 2. Key Reframing

### A. Sensitivity Profiling (formerly "Pain Tolerance")

_Current Problem:_ "Pain Tolerance: High/Low" feels like a challenge or a robot checking specs.
_New Concept:_ **"Comfort Zone & Anxiety Threshold"**

- Focus on the _psychological_ reaction to treatment (fear of needles, anxiety about downtime) rather than just physical pain thresholds.

**Script / Flow:**

> "시술 효과도 중요하지만, 받는 과정에서의 마음 편안함도 중요합니다. 솔직한 느낌을 알려주세요."
>
> 1. **"주사 바늘이나 통증에 대해 평소 어느 정도 긴장하시나요?"**
>    - A: "전혀 문제없어요. 효과만 확실하다면 참을 수 있습니다." (High Tolerance / Result-Driven)
>    - B: "약간 긴장되지만, 마취 크림 정도면 괜찮아요." (Moderate)
>    - C: "통증이 무서워요. 편안하고 자극 없는 시술을 선호합니다." (Sensitive / Fear-Avoidant)
>      _Logic:_ If C -> Filter out Ulthera/Deep Needling immediately. Suggest LDM/Titanium.

### B. Physiological Typing (formerly "Oily vs Dry")

_Current Problem:_ "Oily or Dry?" is too simple. Everyone is "Combination".
_New Concept:_ **"T-Zone Dynamics"**

- Use the T-Zone (Forehead/Nose) vs U-Zone (Cheeks/Jaw) contrast to identify the true skin capability for energy devices.

**Script / Flow:**

> "피부 타입을 정확히 알기 위해 '오후 3시의 피부'를 상상해볼까요?"
>
> 1. **"오후가 되면 T존(이마, 코)의 상태는 어떤가요?"**
>    - A: "번들거림이 올라와서 수정 화장이 필요해요." (Active Sebum)
>    - B: "특별히 번들거리지 않지만, 당기지도 않아요." (Normal)
>    - C: "오히려 건조해서 각질이 뜨거나 붉어져요." (Compromised Barrier)
> 2. **(If C selected) "그렇다면 평소 세안 후, 아무것도 바르지 않으면 얼마나 당기나요?"**
>    _Logic:_ If T-Zone is fragile (C), avoid aggressive peels/laser toning. Prioritize Barrier Repair (Rejuran/Skin Booster).

## 4. Logic Connection (Phase 1 -> Phase 2)

**Condition:** Input from Phase 1 (Safety)

- **If Phase 1 returns `{ Allowed_Categories: "Regenerative_Only" }` (e.g., Pregnancy/Recent Surgery):**
  - **SKIP** Question 1 (Sensitivity/Pain).
  - _Reasoning:_ High-energy devices (Ulthera, Thermage) are already excluded. We default to "Zero Pain / Relaxing" mode.
  - **EXECUTE** Question 2 (T-Zone/Physiological).
  - _Reasoning:_ Even for LDM/Oxygen therapy, we need to know if the skin is Oily (Acne mode) or Dry (Regeneration mode).

## 5. Output Vector

Phase 2 passes this vector to Phase 3/4:
`{ User_Fear_Level: [Low/Med/High], Skin_Barrier_Status: [Intact/Fragile], T_Zone_Activity: [High/Normal/Low] }`
