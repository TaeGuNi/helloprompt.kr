# Aura Core Algorithm - Phase 7: The Core Philosophy Integration

## Overview
Phase 7 aligns the Aura Core engine with the **8 Core Principles**, establishing a robust foundation for "No Dead Ends", "Text-Only" interactions, and specialized support for Foreign Travelers. This phase focuses on safety, accessibility, and user-centric design tailored for the global audience visiting Seoul.

## The 8 Core Principles (Philosophy to Objective Evaluation)

1. **No Dead Ends (Safe Care detours/fallback):**
   - **Definition:** Every user journey ends in a helpful action. never say "I don't know".
   - **Action:** Fallback to "Safe Care" (Self-care guide) or "Emergency Contact".
   - **Check:** Flight Risk Check (No invasive procedures <24h before flight).

2. **Text-Only (Counseling tone, no interrogation):**
   - **Definition:** Zero-friction interface. No complex UI elements. Warm, empathetic tone.
   - **Action:** Use "How does that feel?" instead of "Rate pain 1-10". Avoid interrogation style.
   - **Check:** Sentiment analysis on response templates.

3. **Scenario Logic (Trap Questions for diagnosis):**
   - **Definition:** Use specific scenarios ("Trap Questions") to reveal actual state.
   - **Action:** Detect inconsistencies (e.g., "Oily but dry") using "Trap Logic".
   - **Check:** Trap Logic for inconsistent answers.

4. **1 Diagnosis = 1 Hospital (Foreigner focus):**
   - **Definition:** Reduce decision paralysis. One diagnosis = one best hospital recommendation.
   - **Action:** Prioritize hospitals with foreigner support (`language_support`, `international_clinic`).
   - **Check:** Filter logic prioritizing "Best Match" score.

5. **Storage Strategy (Fun vs Medical):**
   - **Definition:** Separate "Fun Record" (User-owned, engaging) from "Medical Record" (Hospital-owned, secure).
   - **Action:** "Skin Diary" as JSON-LD for portability and fun tracking.
   - **Check:** JSON-LD schema validation.

6. **Practical Design (Document = Code):**
   - **Definition:** Documentation is the executable specification.
   - **Action:** Zero drift between `ALGORITHM_PHASE_7.md` and code.
   - **Check:** BDD tests align 1:1 with this document.

7. **User/Client Separation (Foreigner Scenarios):**
   - **Definition:** Distinguish between the "User" (App operator/Agent) and "Client" (Patient).
   - **Action:** Support scenarios where a guide books for a tourist.
   - **Check:** Data model supports `user` vs `client` separation.

8. **Objective Evaluation (Audit):**
   - **Definition:** All outputs must be auditable quantitatively/qualitatively.
   - **Action:** 100-Point Audit Report.
   - **Check:** External audit verification (not just self-check).

## Algorithm Logic Specs

### 1. Safety Layer (Principle 1)
- **Input:** User describes symptoms.
- **Process:** Check urgency & flight schedule.
- **Output:** If no specific diagnosis -> Fallback to "Safe Care Routine" + "Monitor for 24h".

### 2. Foreigner Scenario Logic (Principle 4 & 7)
- **Context:** User is in Seoul, speaks English/Chinese/Japanese.
- **Action:**
    - Filter: `language_support` includes user language AND `international_clinic: true`.
    - Recommendation: Single best match (Principle 4).
    - User/Client: Handle cases where `User` is a guide (Principle 7).

### 3. User/Client Separation (Principle 7)
- **Structure:** Distinct entities for "User" (Agent/Operator) and "Client" (Patient).
- **Benefit:** Allows agencies/guides to book for travelers without mixing records.
- **Data Model:**
  ```json
  {
    "user": { "id": "guide_01", "role": "agent" },
    "client": { "id": "tourist_02", "role": "patient", "proxiedBy": "guide_01" }
  }
  ```

### 4. Storage Strategy (Principle 5)
- **Format:** JSON-LD (Linked Data) for portability.
- **Content:** "Skin Diary" - fun, engaging record of skin condition over time.
- **Schema:**
  ```json
  {
    "@context": "https://schema.org",
    "@type": "MedicalRecord",
    "name": "Julie's Skin Diary",
    "patient": { "@type": "Person", "name": "Julie" },
    "status": "Improving",
    "notes": "Feels hydrated today!"
  }
  ```

## Implementation Status
- [x] Defined 8 Core Principles.
- [x] Updated Logic Specs for Safety & Foreigner Support.
- [x] BDD Tests: `tests/scenarios_principles_v7.test.ts` (Full 8 Principles Coverage).
- [x] BDD Tests: `tests/scenarios_foreigner_v3.test.ts` (Foreigner Flags & Proxy Mode).
- [x] BDD Tests: `tests/user_client_separation.test.ts` (Agent vs Client Logic).
- [x] Audit Report: `research/PHASE_7_AUDIT_REPORT_FINAL.md`.
- [x] Verification: "No Dead Ends" strategy confirmed via fallback analysis.
- [x] Verification: "Text-Only" output compliance verified.
- [x] Final Audit: 2026-02-15 06:30 KST (All Systems Go).
