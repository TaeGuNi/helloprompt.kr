# ALGORITHM_PHASE_4: Priority Scoring System

## 1. Overview

This phase defines how we rank valid products to surface the "best" options for the user. It moves beyond simple filtering (Phase 2 & 3) into a weighted scoring model that balances efficacy, skin compatibility, aesthetic goals, and budget.

## 2. The Gatekeeper: Safety First

Before any scoring happens, a product **must** pass the Safety Filter.

- **Metric:** Safety Score (Binary)
- **Rule:** If `Safe == False` (contains prohibited ingredients for user's condition/preference), **Score = 0**. The product is disqualified immediately.
- **Status:** Pass/Fail.

## 3. Weighted Scoring Formula

For all products that pass the Safety Gatekeeper, calculate the **Total Priority Score (TPS)** (Max 100 points).

### Formula

$$ TPS = (C \times 0.40) + (B \times 0.30) + (G \times 0.20) + (R \times 0.10) $$

Where:

- **C = Concern Match (0-100):** Efficacy for specific problems (e.g., Acne, Wrinkles).
- **B = Baumann Match (0-100):** Compatibility with skin type (e.g., Oily, Dry, Sensitive).
- **G = Goal Match (0-100):** Alignment with aesthetic desires (e.g., "Baby Face", "Glass Skin").
- **R = Reality/Budget Match (0-100):** alignment with price constraints.

### Weight Distribution Rationale

| Factor          | Weight  | Rationale                                                                                                                                                                  |
| :-------------- | :------ | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concern (C)** | **40%** | **Problem Solving is Priority #1.** If a user has acne, clearing it is more important than "looking like a baby" or saving $5. Efficacy drives trust.                      |
| **Baumann (B)** | **30%** | **Do No Harm.** Even if it fixes acne, if it's too heavy for Oily skin, it causes new problems. High compatibility ensures usability.                                      |
| **Goal (G)**    | **20%** | **The "Wannabe" Factor.** This differentiates us from a pharmacy. We aren't just treating diseases; we are curating a vibe/outcome.                                        |
| **Budget (R)**  | **10%** | **The Tie-Breaker.** Important for conversion, but shouldn't override a perfect medical match. A slightly pricier but perfect cure is better than a cheap ineffective one. |

## 4. Scoring Criteria Breakdown

### A. Concern Match (40%) - "Does it fix the problem?"

- **100 pts:** Explicitly targets user's _primary_ concern (e.g., contains Benzoyl Peroxide for Acne).
- **70 pts:** Targets a _secondary_ concern.
- **30 pts:** General maintenance/prevention only.
- **0 pts:** Irrelevant to concerns.

### B. Baumann Match (30%) - "Is it right for my skin type?"

- **100 pts:** Perfect match for all 4 parameters (e.g., ORNT for Oily/Resistant...).
- **75 pts:** Match for key parameters (Oiliness/Sensitivity), neutral on others.
- **50 pts:** Neutral/Acceptable (won't hurt, won't maximize help).
- **25 pts:** Slight mismatch (e.g., slightly too rich for oily skin, use sparingly).
- **0 pts:** Direct conflict (Filter should have caught this, but if not, score hits 0).

### C. Goal Match (20%) - "Does it fit the vibe?"

- **100 pts:** Key driver for the goal (e.g., Collagen for "Baby Face", HA for "Glass Skin").
- **50 pts:** Supporting role (cleanser that preps for the goal).
- **0 pts:** Neutral.

### D. Budget Match (10%) - "Can I afford it?"

- **100 pts:** Under budget.
- **70 pts:** At budget limit.
- **40 pts:** Slightly over budget (<15%).
- **0 pts:** Significantly over budget (>15%).

## 5. Consensus & Usage

- **Sorting:** Display recommendations sorted by **TPS Descending**.
- **Badges:**
  - Score > 90: "Perfect Match" 🌟
  - Score > 80: "Great Choice" ✅
  - Score > 60: "Good Alternative" 🆗
- **Feedback Loop:** If a user consistently picks lower-scored items (e.g., buys cheap items despite low efficacy score), the **Budget Weight** adjusts dynamically for that user in Phase 5 (Learning).
