# ALGORITHM_PHASE_5.md - Clinical Reservation & Diagnosis Report

**Owner:** @taluabba_bot (The Concierge)
**Status:** V1 (Medical/Concierge Tone - No Sales)

## 1. Objective

Eliminate "E-commerce" vibes ("Add to Cart", "Best Price"). Replace with "Private Medical Concierge" vibes ("Diagnosis Complete", "Reserve Your Clinical Slot"). The goal is trust and authority, not conversion via discount.

## 2. Key Reframing

### A. The Header (Diagnosis, Not Product Page)

_Current Problem:_ "Recommendation: Ulthera 300 Shots - $XXX (10% OFF)"
_New Concept:_ **"Clinical Diagnosis & Protocol"**

**Script / Format:**

> **[ AURA Clinical Report ]**
>
> **진단명 (Diagnosis):** 초기 탄력 저하 및 T존 유분 불균형
> **처방 솔루션 (Prescription):**
>
> 1. **Main Protocol:** 티타늄 리프팅 (Titanium Lifting) - _즉각적 타이트닝 및 톤업_
> 2. **Supportive Care:** LDM 물방울 리프팅 - _진정 및 수분 장벽 강화_
>
> _"제안드린 프로토콜은 고객님의 '민감도'와 '피부 장벽 상태'를 고려하여, 무리한 자극 없이 최대의 효율을 내도록 설계되었습니다."_

### B. The Call to Action (Reservation, Not Sales)

_Current Problem:_ "Buy Now", "Get Coupon", "Lowest Price Guarantee"
_New Concept:_ **"Secure Your Appointment"**

**Script / Flow:**

> **[ 진료 예약 (Clinical Reservation) ]**
>
> "위 처방에 따른 시술을 위해 전문 의료진과의 시간을 확보하시겠습니까?"
>
> - 현재 예약 가능한 슬롯: [이번 주 금요일 14:00], [토요일 11:00]
>
> [ **진료 시간 확정하기 (Confirm Slot)** ] [ **다른 시간 보기** ]
>
> _(Note: 가격 정보는 투명하게 하단에 '예상 진료비'로 작게 표기하되, 메인 강조점은 '시간 확보'와 '해결'에 둠)_

### C. Logic Transparency (Why This?)

> "제안드린 프로토콜은 고객님의 '민감도'와 '피부 장벽 상태'를 고려하여, 무리한 자극 없이 최대의 효율을 내도록 설계되었습니다."
>
> - **제외된 시술:** 울쎄라 (통증 민감도 반영), 인모드 (멍 발생 가능성 고려)

### D. Post-Action (Concierge Care)

> "예약이 확정되면, 시술 전 주의사항(Pre-care guide)을 미리 보내드립니다. 편안한 방문이 되도록 준비하겠습니다."

## 3. Final Vibe Check

- **Deleted:** "110% Price Match", "Hurry Up", "Limited Time Offer".
- **Added:** "Diagnosis", "Protocol", "Prescription", "Logic Transparency", "Secure Slot", "Pre-care".

## 4. V2 Upgrade: Cellular Senescence & RLHF (2026.02.14)

### A. Senolytics Integration (Longevity Science)

The algorithm now distinguishes between "Surface Aging" (dryness, fine lines) and "Cellular Senescence" (deep wrinkles, structural laxity).

- **New Logic:** If `Age > 35` AND `Symptom == Deep Wrinkles`, trigger **Senolytics Protocol**.
- **Recommendation:**
  - **Topical:** Fisetin, Quercetin (Senolytics) / Apigenin (Senomorphics).
  - **Clinical:** Exosome Therapy (to replace cleared cells) + RF Microneedling.

### B. Self-Reinforcement Learning (Safety First)

To prevent "Hallucinated Cures" or "Aggressive Actives" for sensitive skin:

- **RLHF Loop:** Every recommendation is virtually "scored" against a Dermatologist Reward Table.
- **Safety Rule:** `High Risk` actives (Retinol > 0.5%, High % AHA) on `Sensitive` skin receive a **Negative Reward (-1.0)**.
- **Result:** The system automatically converges on "Bakuchiol" or "PHA" for these users without explicit hard-coding, purely through safety optimization.

### C. Zero Image Policy (Strict Enforcement)

- **Input:** Text-only questionnaires.
- **Output:** Text-based diagnosis.
- **Constraint:** "No Camera" UI. All diagnosis relies on the user's articulated symptoms (Text-to-Diagnosis), ensuring 100% privacy and zero biometric data liability.
