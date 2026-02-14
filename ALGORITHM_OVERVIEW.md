# K-Beauty Diagnosis Algorithm Overview

## 1. Context & Strategy

**Target Audience:** Global users interested in K-Beauty (Web Service).
**User Persona:** High interest in "Korean Trends" (Glass Skin), prefers "Fast/Visible Results" suitable for short travel itineraries, and requires strict "Safety" checks.

### Weighting Logic (Total 100pts)

The scoring algorithm prioritizes **Concerns** and **Medical Basis** to ensure efficacy, but heavily weighs **Trends** to align with the unique "K-Beauty" value proposition.

1.  **Safety (Gatekeeper - 0pts):** Mandatory exclusion criteria. No score contribution; failure = hard stop or referral.
2.  **Concerns (40pts):** The primary driver for treatment selection. Global users often have specific "pain points" (e.g., acne, sagging) they traveled to fix.
3.  **Skin Type (30pts):** The medical baseline (Baumann variation). Ensures the selected treatments (e.g., lasers vs. peels) are safe for the user's specific physiology.
4.  **Trend/Wannabe (20pts):** The "Hook." Distinct from standard dermatology, K-Beauty users seek specific _aesthetics_ (e.g., "Glass Skin"). This weight influences the _style_ of the recommendation.
5.  **Context (10pts):** Practical constraints (Downtime/Budget). Low weight because high-intent travelers often adjust budget/time for the right result, but essential for filtering.

## 2. Question Scoring Table (Reference)

| Question ID   | Name                             | Type          | Weight | Category  | Logic / Purpose                                                                         |
| :------------ | :------------------------------- | :------------ | :----- | :-------- | :-------------------------------------------------------------------------------------- |
| **Q_SAFE_01** | Pregnancy / Breastfeeding        | Boolean       | **0**  | Safety    | **Gatekeeper:** Hard stop for energy devices/injectables.                               |
| **Q_SAFE_02** | Active Medication (Isotretinoin) | Boolean       | **0**  | Safety    | **Gatekeeper:** Excludes ablative lasers/peels.                                         |
| **Q_SAFE_03** | Active Infection / Flare-up      | Boolean       | **0**  | Safety    | **Gatekeeper:** Delays treatment availability.                                          |
| **Q_CONC_01** | Primary Skin Concern             | Single Select | **25** | Concerns  | **Core Driver:** Determines the main treatment category (e.g., Lifting vs. Toning).     |
| **Q_CONC_02** | Secondary Skin Concern           | Multi Select  | **15** | Concerns  | **Modifier:** Suggests add-on treatments or combination therapies.                      |
| **Q_SKIN_01** | Oiliness Level (Dry/Oily)        | Scale         | **10** | Skin Type | **Safety/Efficacy:** Modifies laser intensity and post-care selection.                  |
| **Q_SKIN_02** | Sensitivity Level                | Scale         | **10** | Skin Type | **Safety:** Filters out aggressive peels or high-heat devices.                          |
| **Q_SKIN_03** | Pigmentation Tendency            | Scale         | **10** | Skin Type | **Efficacy:** Determines wavelength suitability (e.g., Alexandrite vs. Nd:YAG).         |
| **Q_TRND_01** | Desired K-Beauty Look            | Single Select | **20** | Trend     | **The Hook:** E.g., "Glass Skin" boosts Skin Boosters; "V-Shape" boosts HIFU/Inmode.    |
| **Q_CTX_01**  | Max Acceptable Downtime          | Single Select | **5**  | Context   | **Filter:** Removes treatments incompatible with travel schedule.                       |
| **Q_CTX_02**  | Target Budget                    | Range         | **5**  | Context   | **Filter:** Prioritizes premium vs. cost-effective options within the concern category. |

## 3. Implementation Notes

- **Sorting:** Questions are listed in _Flow Order_ (Safety First -> Diagnosis -> Preferences -> Logistics), but the algorithm prioritizes _Weight_ when calculating the recommendation match score.
- **Why this weighting?**
  - Local patients might prioritize _Cost_ or _Maintenance_.
  - **Global K-Beauty Users** care disproportionately about the **"Trend/Wannabe"** factor (20pts) compared to typical medical patients. They want the _Korean Look_, not just "healthy skin."
  - **Concerns (40pts)** remain the highest because "curing the problem" is the fundamental product, even if the "packaging" is the Trend.

## 4. Expanded Question Pool

### 1. 문항별 스코어링 정의

| Question ID   | Name                             | Type          | Weight | Category  | Logic / Purpose                                                                         |
| :------------ | :------------------------------- | :------------ | :----- | :-------- | :-------------------------------------------------------------------------------------- |
| **Q_SAFE_01** | Pregnancy / Breastfeeding        | Boolean       | **0**  | Safety    | **Gatekeeper:** Hard stop for energy devices/injectables.                               |
| **Q_SAFE_02** | Active Medication (Isotretinoin) | Boolean       | **0**  | Safety    | **Gatekeeper:** Excludes ablative lasers/peels.                                         |
| **Q_SAFE_03** | Active Infection / Flare-up      | Boolean       | **0**  | Safety    | **Gatekeeper:** Delays treatment availability.                                          |
| **Q_CONC_01** | Primary Skin Concern             | Single Select | **25** | Concerns  | **Core Driver:** Determines the main treatment category (e.g., Lifting vs. Toning).     |
| **Q_CONC_02** | Secondary Skin Concern           | Multi Select  | **15** | Concerns  | **Modifier:** Suggests add-on treatments or combination therapies.                      |
| **Q_SKIN_01** | Oiliness Level (Dry/Oily)        | Scale         | **10** | Skin Type | **Safety/Efficacy:** Modifies laser intensity and post-care selection.                  |
| **Q_SKIN_02** | Sensitivity Level                | Scale         | **10** | Skin Type | **Safety:** Filters out aggressive peels or high-heat devices.                          |
| **Q_SKIN_03** | Pigmentation Tendency            | Scale         | **10** | Skin Type | **Efficacy:** Determines wavelength suitability (e.g., Alexandrite vs. Nd:YAG).         |
| **Q_TRND_01** | Desired K-Beauty Look            | Single Select | **20** | Trend     | **The Hook:** E.g., "Glass Skin" boosts Skin Boosters; "V-Shape" boosts HIFU/Inmode.    |
| **Q_CTX_01**  | Max Acceptable Downtime          | Single Select | **5**  | Context   | **Filter:** Removes treatments incompatible with travel schedule.                       |
| **Q_CTX_02**  | Target Budget                    | Range         | **5**  | Context   | **Filter:** Prioritizes premium vs. cost-effective options within the concern category. |

### 2. Jay's Question Set (Q0~Q30)

_(Constructed from Question Refinement & Baumann Logic)_

**Q01. Concern Area -> The Mirror Gaze**

- **Question:** "거울을 볼 때, 자꾸만 시선이 머무는 곳은 어디인가요?" [Score: 25 (Primary Concern)]
- **Purpose:** Psychological Hook (Mirror Gaze)
- **Options:** Eye wrinkles, Dull skin tone, Sagging jawline, Enlarged pores.

**Q02. Medical Check -> The Safety Foundation**

- **Question:** "고객님에게 가장 안전하고 효과적인 시술을 설계하기 위해, 현재 컨디션을 체크해 주세요." [Score: 0 (Safety)]
- **Purpose:** Safety Baseline
- **Options:** Pregnancy/Nursing, Skin Medication, Active Inflammation, None.

**Q03. Flight Schedule -> Pressure & Recovery Check**

- **Question:** "시술 후 2주 이내에 비행기 탑승 계획이 있으신가요?" [Score: 0 (Safety/Context)]
- **Purpose:** Lifestyle/Safety
- **Options:** Yes, No.

**Q04. Important Event -> The "D-Day" Strategy**

- **Question:** "곧 사진 촬영이나 중요한 모임처럼, 가장 예뻐 보이고 싶은 'D-Day'가 있으신가요?" [Score: 5 (Context)]
- **Purpose:** Timeline/Urgency
- **Options:** Urgent (1 week), Upcoming (2-4 weeks), No plans.

**Q05. Secondary Concern -> The Detail Add-on**

- **Question:** "가장 큰 고민 외에, 추가적으로 해결하고 싶은 문제는 무엇인가요?" [Score: 15 (Secondary Concern)]
- **Purpose:** Addressing multi-faceted needs
- **Options:** Pigmentation, Redness, Acne scars, Dryness, None.

**Q06. Desired Look -> The K-Beauty Goal**

- **Question:** "시술 후 어떤 피부 느낌을 가장 원하시나요?" [Score: 20 (Trend)]
- **Purpose:** Identifying aesthetic preference (Wannabe)
- **Options:** Glass Skin (Moist/Shiny), Porcelain (Matte/Smooth), V-Shape (Lifted/Contoured), Natural (Healthy).

**Q07. Sensitivity Check -> The Redness Test**

- **Question:** "평소 얼굴이 쉽게 붉어지거나 자극을 느끼시나요?" [Score: 10 (Skin Type: Sensitivity)]
- **Purpose:** Baumann Sensitivity check
- **Options:** Yes (Frequent flushing), Sometimes, No (Strong skin).

**Q08. Wash Tightness (Baumann)**

- **Question:** "세안 직후 피부가 바로 당기나요?" [Score: 10 (Skin Type: Oil/Dry)]
- **Purpose:** Skin Type (Dry vs Oily)
- **Options:** Yes (Very tight), No (Comfortable).

**Q09. T-Zone Shine (Baumann)**

- **Question:** "오후 3시쯤 거울을 봤을 때, T존(이마, 코)이 번들거리나요?" [Score: 10 (Skin Type: Oil/Dry)]
- **Purpose:** Skin Type (Oil Production)
- **Options:** No, A little, Yes (Very shiny).

**Q10. Pore Size (Baumann)**

- **Question:** "모공 크기는 어떤가요?" [Score: 10 (Skin Type: Oil/Pore)]
- **Purpose:** Skin Type / Concern
- **Options:** Small (Invisible), Medium (T-zone), Large (Visible everywhere).

**Q11. Pigmentation Detail -> The Melanin Check**

- **Question:** "색소 침착이 있다면, 어떤 형태인가요?" [Score: 0 (Refinement)]
- **Purpose:** Diagnosis Refinement
- **Options:** Freckles (Light spots), Melasma (Deep/Patchy), Acne Marks (Red/Brown), None.

**Q12. Acne Type -> The Breakout Profile**

- **Question:** "여드름이 난다면 주로 어떤 형태인가요?" [Score: 0 (Refinement)]
- **Purpose:** Diagnosis Refinement
- **Options:** Whiteheads/Blackheads, Red Bumps, Painful/Deep Cysts, None.

**Q13. Wrinkle Specifics -> The Line Map**

- **Question:** "주름이 가장 신경 쓰이는 부위는 어디인가요?" [Score: 0 (Refinement)]
- **Purpose:** Diagnosis Refinement
- **Options:** Forehead/Eyes, Smile Lines (Nasolabial), Neck Lines, None.

**Q14. Elasticity/Sagging -> The Lift Need**

- **Question:** "탄력 저하가 느껴지는 부위는 어디인가요?" [Score: 0 (Refinement)]
- **Purpose:** Diagnosis Refinement
- **Options:** Jawline (Jowls), Cheeks (Volume loss), Double Chin, Eye Area.

**Q15. Downtime Tolerance -> The Recovery Planner**

- **Question:** "시술 후 며칠 정도의 회복 기간(붉은기, 딱지 등)을 감수하실 수 있나요?" [Score: 5 (Context)]
- **Purpose:** Filtering aggressive treatments
- **Options:** None (Immediate daily life), 2-3 Days, 1 Week (Better results).

**Q16. Budget Range -> The Investment Plan**

- **Question:** "이번 시술에 생각하시는 대략적인 예산은 얼마인가요?" [Score: 5 (Context)]
- **Purpose:** Recommendation filtering
- **Options:** Budget-friendly ($100-$300), Standard ($300-$700), Premium ($700+).

**Q17. Pain Tolerance -> The Comfort Level**

- **Question:** "통증에 대해 얼마나 민감하신가요?" [Score: 0 (Modifier)]
- **Purpose:** Anesthesia planning / Device selection
- **Options:** Very Sensitive (No pain prefer), Moderate, High Tolerance (Results > Pain).

**Q18. Procedure History -> The Experience**

- **Question:** "최근 6개월 이내에 받으신 피부 시술이 있으신가요?" [Score: 0 (Safety)]
- **Purpose:** Contraindication check
- **Options:** Laser, Injectables (Botox/Filler), Peels, None.

**Q19. Adverse Reactions -> The Safety History**

- **Question:** "과거 시술 후 부작용(화상, 색소침착 등)을 경험하신 적이 있나요?" [Score: 0 (Safety)]
- **Purpose:** Safety flagging
- **Options:** Yes, No.

**Q20. Sleep Quality -> The Regeneration Check**

- **Question:** "하루 평균 수면 시간은 어떻게 되시나요?" [Score: 0 (Lifestyle)]
- **Purpose:** Skin barrier recovery potential
- **Options:** Less than 5h, 6-7h, 8h+.

**Q21. Water Intake -> The Hydration Habit**

- **Question:** "하루에 물을 얼마나 마시나요?" [Score: 0 (Lifestyle)]
- **Purpose:** Hydration status
- **Options:** <1L, 1-2L, >2L.

**Q22. Sunscreen Usage -> The Protection Factor**

- **Question:** "자외선 차단제(선크림)를 매일 바르시나요?" [Score: 0 (Lifestyle)]
- **Purpose:** Post-care compliance prediction
- **Options:** Rarely, Daily (Morning), Reapply frequently.

**Q23. Makeup Habits -> The Daily Routine**

- **Question:** "평소 메이크업을 얼마나 두껍게 하시나요?" [Score: 0 (Lifestyle)]
- **Purpose:** Cleansing needs / Post-care advice
- **Options:** None/Sunscreen only, Light (BB/Cushion), Full Coverage.

**Q24. Stress Level -> The Cortisol Factor**

- **Question:** "최근 스트레스 수준은 어떠신가요?" [Score: 0 (Psych)]
- **Purpose:** Breakout trigger analysis
- **Options:** Low, Moderate, High (Affects sleep/skin).

**Q25. Smoking/Alcohol -> The Toxin Check**

- **Question:** "흡연이나 음주를 즐겨 하시나요?" [Score: 0 (Lifestyle)]
- **Purpose:** Healing inhibition factor
- **Options:** Neither, Alcohol only, Smoking only, Both.

**Q26. Active Ingredients -> The Routine Check**

- **Question:** "레티놀, 비타민A, 각질 제거제(AHA/BHA)를 사용 중이신가요?" [Score: 0 (Safety)]
- **Purpose:** Pre-procedure caution
- **Options:** Yes (Stop 3 days prior), No.

**Q27. Allergies -> The Ingredient Watch**

- **Question:** "특정 성분(알로에, 금속, 마취크림 등)에 알레르기가 있으신가요?" [Score: 0 (Safety)]
- **Purpose:** Safety critical
- **Options:** Yes (Specify), No.

**Q28. Keloid History -> The Scar Risk**

- **Question:** "상처가 나면 켈로이드(붉게 튀어나오는 흉터)가 생기는 편인가요?" [Score: 0 (Safety)]
- **Purpose:** High-risk exclusion
- **Options:** Yes, No.

**Q29. Cold Sores -> The Viral Check**

- **Question:** "입술 포진(헤르페스)이 자주 재발하시나요?" [Score: 0 (Safety)]
- **Purpose:** Prophylactic medication need
- **Options:** Yes, No.

**Q30. Final Goal -> The Satisfaction Key**

- **Question:** "이번 시술을 통해 가장 얻고 싶은 결과는 무엇인가요?" [Score: 0 (Psych)]
- **Purpose:** Expectation management
- **Options:** Natural improvement, Dramatic change, Maintenance.

### 3. Legacy/Reference Pool

**Source: `QUESTION_REFINEMENT.md` (Precision Diagnosis)**

- [Refinement] **Age & Gender** (To tailor our recommendations to your skin's life stage, may I ask your age and gender?) [Score: 0 (Demographics)]
- [Refinement] **Occupation / Daily Environment** (Do you work primarily indoors or outdoors? Helps us assess UV and pollution exposure) [Score: 0 (Lifestyle)]
- [Refinement] **Skin Type** (How would you describe your skin type? e.g., Oily, Dry, Combination, Sensitive) [Score: 10 (Skin Type)]
- [Refinement] **Current Skin Troubles** (What are your top 3 skin concerns right now? e.g., Acne, Pigmentation, Wrinkles, Sagging, Pores) [Score: 25 (Concerns)]
- [Refinement] **Flush/Sensitivity Check** (Does your face flush red easily with temperature changes or emotion?) [Score: 10 (Skin Type: Sensitivity)]
- [Refinement] **Procedure History** (Have you had any dermatological procedures in the last 6 months?) [Score: 0 (Safety)]
- [Refinement] **Reaction History** (Have you ever had a negative reaction to a treatment or product?) [Score: 0 (Safety)]
- [Refinement] **Sleep Habits** (On average, how many hours of sleep do you get per night?) [Score: 0 (Lifestyle)]
- [Refinement] **Hydration** (How much water do you drink daily? Less than 1L, 1-2L, 2L+) [Score: 0 (Lifestyle)]
- [Refinement] **Smoking & Alcohol** (Do you smoke or consume alcohol regularly?) [Score: 0 (Lifestyle)]
- [Refinement] **Sun Protection** (Do you apply sunscreen (SPF) daily, even when indoors?) [Score: 0 (Lifestyle)]
- [Refinement] **Ideal Outcome** (Do you prefer a 'Natural/Subtle' improvement or a 'Dramatic/Visible' change?) [Score: 20 (Trend)]
- [Refinement] **Priority Area** (If you could fix just _one_ thing today, what would it be?) [Score: 25 (Concerns)]
- [Refinement] **Pain Tolerance & Fear** (Which scares you more: Needles or Heat/Sensation?) [Score: 0 (Psych)]
- [Refinement] **Downtime Tolerance** (Are you able to accept some downtime for better results, or do you need zero downtime?) [Score: 5 (Context)]
- [Refinement] **Current Medications** (Are you currently taking any medication? Especially blood thinners or acne medication like Roaccutane) [Score: 0 (Safety)]
- [Refinement] **Allergies** (Do you have any known allergies? e.g., Lidocaine, Antibiotics, Metals) [Score: 0 (Safety)]
- [Refinement] **Pregnancy/Nursing** (Are you currently pregnant, breastfeeding, or planning to conceive soon?) [Score: 0 (Safety)]
- [Refinement] **Upcoming Events** (Do you have any major events in the next 2 weeks?) [Score: 5 (Context)]

**Source: `ALGORITHM_PHASE_1.md` (Safety & Logic)**

- [Phase 1] **Pregnancy & Nursing** (Are you currently pregnant or breastfeeding? [Yes -> Activate Flag: SAFE_MOM]) [Score: 0 (Safety)]
- [Phase 1] **Skin Medication** (Have you taken skin medications like Roaccutane in the last 6 months? [Yes -> Activate Flag: SENSITIVE_MEDS]) [Score: 0 (Safety)]
- [Phase 1] **Active Infection** (Do you have active inflammation, herpes, or open wounds in the treatment area? [Yes -> Activate Flag: ACTIVE_INFECTION]) [Score: 0 (Safety)]
- [Phase 1] **Flight Plans** (Do you have flight plans within 2 weeks? [Yes -> Activate Flag: FLIGHT_RISK]) [Score: 0 (Safety/Context)]
- [Phase 1] **Important Event** (Do you have a big event coming up? [Yes -> Activate Flag: NO_DOWNTIME]) [Score: 5 (Context)]

**Source: `ALGORITHM_PHASE_2.md` (Psychological & Physiological)**

- [Phase 2] **Comfort Zone & Anxiety Threshold** (How nervous are you about needles or pain? Options: No problem / Moderate / Scared) [Score: 0 (Psych)]
- [Phase 2] **T-Zone Dynamics** (How is your T-zone in the afternoon? Options: Active Sebum / Normal / Dry & Tight) [Score: 10 (Skin Type)]

**Source: `docs/psych/QUESTION_REFINEMENT.md` (Psych Matrix)**

- [Psych Matrix] **Wannabe Image** (Select ideal skin finish. Options: Glassy vs. Matte. _Hook_) [Score: 20 (Trend)]
- [Psych Matrix] **Skin Type** (Oily / Dry / Combo / Sensitive. _Diagnostic_) [Score: 10 (Skin Type)]
- [Psych Matrix] **Primary Concern** (Acne, Wrinkles, Pigmentation. _Diagnostic_) [Score: 25 (Concerns)]
- [Psych Matrix] **Pregnancy Status** (Constraint: If Yes → Exclude Retinoids. _Safety_) [Score: 0 (Safety)]
- [Psych Matrix] **Upcoming Travel** (Trigger: Show only if D-Day < 14 days. _Dependent_) [Score: 5 (Context)]
- [Psych Matrix] **Current Allergies** (Specific ingredient exclusions. _Safety_) [Score: 0 (Safety)]
- [Psych Matrix] **Budget Range** (Filter: Affects product recommendations. _Diagnostic_) [Score: 5 (Context)]
- [Psych Matrix] **Daily Water Intake** (Lifestyle check. _Hook_) [Score: 0 (Lifestyle)]
- [Psych Matrix] **Recent Procedures** (Constraint: If Yes → Adjust active ingredients. _Safety_) [Score: 0 (Safety)]
- [Psych Matrix] **Sleep Quality** (Correlates with skin barrier recovery. _Diagnostic_) [Score: 0 (Lifestyle)]

**Phase 3: Diagnosis - Trap Logic**

- [Trap] **Oil Check** (Did you wash your face 2 hours ago? Is it shiny now? vs "Is your skin dry?") - _Cross-check Oily_ [Score: 10 (Skin Type)]
- [Trap] **Sensitive Check** (Does your face turn red after spicy food?) - _Rosacea/Sensitive check_ [Score: 10 (Skin Type)]
- [Trap] **Consistency Check** (You said 'No Downtime', but you want 'Deep Peeling'?) - _Logic Trap_ [Score: 0 (Validation)]

**Source: `Agent Brainstorm` (Deep Dive Diagnosis)**

- [Added] **Detailed Symptoms: Flush** (Do you experience facial flushing? Options: None, Heat-induced, Emotion-induced, Alcohol-induced, Persistent redness) [Score: 0 (Refinement)]
- [Added] **Detailed Symptoms: Pore Shape** (How would you describe your enlarged pores? Options: None/Small, Round (O-shape), Teardrop/Sagging (U-shape), Connected lines (Y-shape)) [Score: 0 (Refinement)]
- [Added] **Detailed Symptoms: Acne Type** (What type of acne do you currently have? Options: None, Whiteheads/Blackheads (Comedonal), Red bumps (Papules), Pus-filled (Pustules), Deep/Painful lumps (Cystic/Nodular)) [Score: 0 (Refinement)]
- [Added] **Detailed Symptoms: Pigmentation** (What best describes your pigmentation? Options: None, Freckles (Light/Surface), Melasma (Patchy/Deep), Post-Inflammatory Hyperpigmentation (Dark spots from past acne)) [Score: 0 (Refinement)]
- [Added] **Environment: Humidity** (Describe your typical indoor environment. Options: Standard, Dry (Heavy AC/Heating), Humid) [Score: 0 (Lifestyle)]
- [Added] **Environment: Sun Exposure** (How much time do you spend outdoors daily? Options: Mostly indoors, Commute only, Outdoor job/Activities (>2 hrs)) [Score: 0 (Lifestyle)]
- [Added] **Routine: Actives** (Do you use active ingredients like Retinol, Vitamin A, or Acids (AHA/BHA)? Options: No, Yes (Daily), Yes (Occasionally), Stopped recently) [Score: 0 (Safety)]
- [Added] **Routine: Sunscreen** (How do you use sunscreen? Options: Never, Daily (Morning only), Daily (Reapply every 2-3 hrs), Only on sunny days) [Score: 0 (Lifestyle)]
- [Added] **Makeup: Intensity** (How heavy is your daily makeup? Options: None/Skincare only, Light (BB/CC/Tint), Medium (Foundation/Cushion), Heavy (Full coverage/Stage makeup)) [Score: 0 (Lifestyle)]
- [Added] **Diet: Triggers** (Do you consume sugar or dairy frequently? Options: Low intake, Moderate, High Sugar, High Dairy, High Both) [Score: 0 (Lifestyle)]
- [Added] **History: Laser Side Effects** (Have you experienced side effects from past laser treatments? Options: Never had lasers, No side effects, Yes (Burns/Blisters), Yes (Pigmentation/Darkening - PIH), Yes (Long-lasting redness)) [Score: 0 (Safety)]

**Expanded Safety Questions (Source: Medical History & Contraindications)**

**Drug Details**

- [Safety] **Aspirin Usage** (Do you take Aspirin or blood thinners daily? [Risk: Bruising]) [Score: 0 (Safety)]
- [Safety] **NSAID Frequency** (How often do you take painkillers like Ibuprofen? [Risk: Bruising]) [Score: 0 (Safety)]
- [Safety] **Steroid History** (Have you used oral or topical steroids in the last 3 months? [Risk: Thin skin/Healing]) [Score: 0 (Safety)]
- [Safety] **Antibiotic - Tetracycline** (Are you currently on Tetracycline antibiotics? [Risk: Photosensitivity]) [Score: 0 (Safety)]
- [Safety] **Accutane Dose** (What was your daily dose of Isotretinoin? [Risk: Healing/Scarring]) [Score: 0 (Safety)]
- [Safety] **Accutane Duration** (How long ago did you stop taking Isotretinoin? [Risk: Healing]) [Score: 0 (Safety)]
- [Safety] **Hormonal Birth Control** (Are you on oral contraceptives? [Risk: Melasma]) [Score: 0 (Safety)]
- [Safety] **Hormone Replacement Therapy** (Are you undergoing HRT? [Risk: Melasma]) [Score: 0 (Safety)]
- [Safety] **Immunosuppressants** (Do you take medication to suppress your immune system? [Risk: Infection]) [Score: 0 (Safety)]
- [Safety] **Herbal Supplements** (Do you take Ginkgo Biloba, Garlic, or Vitamin E supplements? [Risk: Bleeding]) [Score: 0 (Safety)]
- [Safety] **Anticoagulants** (Are you on Warfarin or Heparin? [Risk: Severe Bleeding]) [Score: 0 (Safety)]
- [Safety] **Photosensitizing Meds** (Do you take any medication that warns against sun exposure? [Risk: Burns]) [Score: 0 (Safety)]
- [Safety] **Topical Retinoids** (Do you use Tretinoin or Adapalene prescribed by a doctor? [Risk: Irritation]) [Score: 0 (Safety)]
- [Safety] **Recent Vaccination** (Have you had a vaccine in the last 2 weeks? [Risk: Immuno-reaction]) [Score: 0 (Safety)]
- [Safety] **Chemotherapy History** (Have you undergone chemotherapy in the last year? [Risk: Healing]) [Score: 0 (Safety)]

**Allergies**

- [Safety] **Lidocaine Allergy** (Have you ever reacted to numbing cream or dental anesthesia? [Risk: Anaphylaxis]) [Score: 0 (Safety)]
- [Safety] **Latex Allergy** (Do you have a reaction to rubber gloves? [Risk: Contact Dermatitis]) [Score: 0 (Safety)]
- [Safety] **Adhesive Allergy** (Do you get a rash from Band-Aids or medical tape? [Risk: Post-care irritation]) [Score: 0 (Safety)]
- [Safety] **Metal Allergy - Nickel** (Do you react to cheap jewelry? [Risk: Needle reaction]) [Score: 0 (Safety)]
- [Safety] **Metal Allergy - Gold** (Do you react to gold? [Risk: Gold PTT]) [Score: 0 (Safety)]
- [Safety] **Topical Antibiotic Allergy** (Do you react to Neosporin or Bacitracin? [Risk: Contact Dermatitis]) [Score: 0 (Safety)]
- [Safety] **Shellfish/Iodine** (Are you allergic to shellfish? [Risk: Cleaning solution reaction]) [Score: 0 (Safety)]
- [Safety] **Egg Allergy** (Are you allergic to eggs? [Risk: Propofol contraindication if sedation used]) [Score: 0 (Safety)]
- [Safety] **Bee Sting Allergy** (Are you allergic to bees? [Risk: Hyaluronidase cross-reactivity]) [Score: 0 (Safety)]
- [Safety] **Atopic Dermatitis History** (Do you have a history of atopy/eczema? [Risk: Barrier sensitivity]) [Score: 0 (Safety)]
- [Safety] **Fruit Acid Allergy** (Have you reacted to peels or fruit acids? [Risk: Chemical Peel]) [Score: 0 (Safety)]
- [Safety] **Preservative Allergy** (Do you react to parabens or specific preservatives? [Risk: Product reaction]) [Score: 0 (Safety)]
- [Safety] **Sunscreen Allergy** (Do chemical sunscreens irritate your skin? [Risk: Post-care]) [Score: 0 (Safety)]
- [Safety] **Alcohol Allergy** (Does alcohol on the skin cause redness/rash? [Risk: Alcohol swab]) [Score: 0 (Safety)]
- [Safety] **Cold Allergy** (Do you get hives from cold exposure? [Risk: Cryotherapy/Cooling]) [Score: 0 (Safety)]

**Diseases & Conditions**

- [Safety] **Diabetes - HbA1c** (Is your diabetes well-controlled? [Risk: Healing/Infection]) [Score: 0 (Safety)]
- [Safety] **Thyroid - Hypo** (Do you have Hypothyroidism? [Risk: Dryness/Healing]) [Score: 0 (Safety)]
- [Safety] **Thyroid - Hyper** (Do you have Hyperthyroidism? [Risk: Sensitivity]) [Score: 0 (Safety)]
- [Safety] **Autoimmune - Lupus** (Do you have SLE/Lupus? [Risk: Photosensitivity/Flare]) [Score: 0 (Safety)]
- [Safety] **Autoimmune - RA** (Do you have Rheumatoid Arthritis? [Risk: Inflammation]) [Score: 0 (Safety)]
- [Safety] **HSV History** (Do you get cold sores frequently? [Risk: Outbreak trigger]) [Score: 0 (Safety)]
- [Safety] **Keloid Scars** (Do you form raised scars after injury? [Risk: Scarring]) [Score: 0 (Safety)]
- [Safety] **Hypertrophic Scars** (Do your scars stay red and raised for a long time? [Risk: Scarring]) [Score: 0 (Safety)]
- [Safety] **Psoriasis Active** (Do you have active psoriasis plaques on the face/neck? [Risk: Koebner phenomenon]) [Score: 0 (Safety)]
- [Safety] **Vitiligo** (Do you have vitiligo? [Risk: Laser depigmentation]) [Score: 0 (Safety)]
- [Safety] **Hepatitis** (Do you have active Hepatitis B or C? [Risk: Infection control]) [Score: 0 (Safety)]
- [Safety] **HIV Status** (Are you immunocompromised due to HIV? [Risk: Healing/Infection]) [Score: 0 (Safety)]
- [Safety] **Pacemaker** (Do you have a pacemaker? [Risk: RF/Bio-electric contraindication]) [Score: 0 (Safety)]
- [Safety] **Metal Implants - Face** (Do you have metal plates/screws in your face? [Risk: RF/Heat]) [Score: 0 (Safety)]
- [Safety] **Dental Implants** (Do you have dental implants? [Risk: RF discomfort]) [Score: 0 (Safety)]
- [Safety] **Epilepsy** (Do you have a history of seizures? [Risk: Light flashing]) [Score: 0 (Safety)]
- [Safety] **Migraine History** (Do you get migraines from bright lights? [Risk: IPL/Flash]) [Score: 0 (Safety)]
- [Safety] **Claustrophobia** (Do you fear enclosed spaces or masks? [Risk: LED masks/Oxygen dome]) [Score: 0 (Safety)]
- [Safety] **Bleeding Disorder** (Do you bruise or bleed easily? [Risk: Injectables]) [Score: 0 (Safety)]
- [Safety] **Polycystic Ovary Syndrome (PCOS)** (Do you have PCOS? [Risk: Hormonal Acne/Hair]) [Score: 0 (Safety)]

**Expanded Psych Questions (Source: Personality & Stress)**

**MBTI-Style Skin Personality**

- [Psych] **One Pimple Panic** (When you see a single pimple, do you panic immediately? [Options: Yes / No / Ignore]) [Score: 0 (Psych)]
- [Psych] **Ingredient Research** (Do you research every ingredient before buying skincare? [Options: Always / Sometimes / Never]) [Score: 0 (Psych)]
- [Psych] **Doctor Trust** (Do you trust the doctor's recommendation blindly or ask "Why?"? [Options: Trust / Ask / Skeptical]) [Score: 0 (Psych)]
- [Psych] **Routine Adherence** (Do you stick to a routine strictly or skip steps often? [Options: Strict / Flexible / Lazy]) [Score: 0 (Psych)]
- [Psych] **Product Loyalty** (Do you use the same products for years or try new trends constantly? [Options: Loyal / Trendy / Mixer]) [Score: 0 (Psych)]
- [Psych] **Patience Level** (Can you wait 3 months for results, or do you need to see changes in 1 week? [Options: Patient / Urgent]) [Score: 0 (Psych)]
- [Psych] **Risk Tolerance** (Would you risk downtime/side effects for better results? [Options: High Risk / Low Risk]) [Score: 0 (Psych)]
- [Psych] **Perfectionism** (Do you notice flaws others don't see? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Comparison** (Do you compare your skin to social media filters? [Options: Often / Sometimes / Never]) [Score: 0 (Psych)]
- [Psych] **Regret Tendency** (Do you often regret purchases or decisions later? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Pain Fear** (Does the thought of pain make you want to cancel? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Needle Phobia** (Can you watch a needle injection video? [Options: Yes / No / Faint]) [Score: 0 (Psych)]
- [Psych] **Sensation Sensitivity** (Are you ticklish or sensitive to touch on the face? [Options: Very / Normal / Numb]) [Score: 0 (Psych)]
- [Psych] **Social Anxiety** (Does bad skin make you cancel social plans? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Mirror Checking** (How often do you check your skin in the mirror daily? [Options: 1-2 / 5+ / Constant]) [Score: 0 (Psych)]

**Stress Triggers**

- [Psych] **Current Stress Level** (Rate your current stress level 1-10. [Scale 1-10]) [Score: 0 (Psych)]
- [Psych] **Stress Breakouts** (Does stress cause immediate breakouts for you? [Options: Yes / No / Maybe]) [Score: 0 (Psych)]
- [Psych] **Stress Picking** (Do you pick at your skin when stressed or anxious? [Options: Always / Sometimes / Never]) [Score: 0 (Psych)]
- [Psych] **Teeth Grinding** (Do you grind your teeth or clench your jaw when stressed? [Options: Yes / No / Don't Know]) [Score: 0 (Psych)]
- [Psych] **Frowning Habit** (Do you frown when concentrating or stressed? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Stress Eating** (Do you eat sugar/junk food when stressed? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Stress Alcohol** (Do you drink alcohol to cope with stress? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Work Pressure** (Is your work environment high-stress? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Recent Trauma** (Have you experienced a major emotional event recently? [Options: Yes / No]) [Score: 0 (Psych)]
- [Psych] **Anxiety Diagnosis** (Do you have a diagnosis of anxiety or depression? [Options: Yes / No]) [Score: 0 (Psych)]

**Sleep Quality**

- [Psych] **Average Sleep** (How many hours do you sleep on average? [Options: <5 / 5-7 / 7-9 / >9]) [Score: 0 (Lifestyle)]
- [Psych] **Fall Asleep Time** (How long does it take you to fall asleep? [Options: <15m / 30m / >1h]) [Score: 0 (Lifestyle)]
- [Psych] **Wake Up Tired** (Do you wake up feeling tired even after sleeping? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Sleep Position** (Do you sleep on your side or stomach? [Options: Side / Stomach / Back]) [Score: 0 (Lifestyle)]
- [Psych] **Pillow Contact** (Does your face press into the pillow heavily? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Night Shift** (Do you work night shifts or have irregular sleep? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Blue Light** (Do you use your phone in bed before sleep? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Insomnia History** (Do you have chronic insomnia? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Sleep Environment** (Is your bedroom completely dark? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Sleep Temperature** (Do you sleep in a hot or cool room? [Options: Hot / Cool]) [Score: 0 (Lifestyle)]
- [Psych] **Snoring** (Do you snore or have sleep apnea? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Morning Puffiness** (Is your face puffy when you wake up? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Dark Circles - Morning** (Are dark circles worse in the morning? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Weekend Catch-up** (Do you sleep in on weekends to catch up? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Psych] **Nap Habit** (Do you take naps during the day? [Options: Yes / No]) [Score: 0 (Lifestyle)]

**Emotional Connection**

- [Psych] **Skin Confidence** (Does your skin affect your overall confidence? [Options: Majorly / Slightly / No]) [Score: 0 (Psych)]
- [Psych] **Compliment Reaction** (How do you react when someone compliments your skin? [Options: Happy / Disbelief / Shy]) [Score: 0 (Psych)]
- [Psych] **Self-Image** (Do you see yourself as "aging well"? [Options: Yes / No / Concerned]) [Score: 0 (Psych)]
- [Psych] **Youth Desire** (How important is looking younger to you? [Options: Critical / Nice / Don't Care]) [Score: 0 (Psych)]
- [Psych] **Natural Look** (Is "looking natural" more important than "looking perfect"? [Options: Yes / No]) [Score: 20 (Trend)]

**Expanded Diagnosis Questions (Source: Visual Mapping & Symptoms)**

**Detailed Mapping**

- [Diagnosis] **Forehead Lines** (Are your forehead lines horizontal or vertical? [Options: Horizontal / Vertical / Both]) [Score: 0 (Refinement)]
- [Diagnosis] **Glabellar Lines** (Do you have deep '11' lines between your eyebrows? [Options: Yes / No / Only when frowning]) [Score: 0 (Refinement)]
- [Diagnosis] **Crow's Feet** (Do you have smile lines around your eyes? [Options: Yes / No / Only when smiling]) [Score: 0 (Refinement)]
- [Diagnosis] **Bunny Lines** (Do you have lines on the bridge of your nose when laughing? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Nasolabial Folds** (Are the lines from nose to mouth deep? [Options: Deep / Moderate / Shallow]) [Score: 0 (Refinement)]
- [Diagnosis] **Marionette Lines** (Do you have lines running down from the corners of your mouth? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Chin Dimpling** (Does your chin dimple or wrinkle when talking? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Neck Lines - Horizontal** (Do you have horizontal 'Tech Neck' lines? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Neck Bands - Vertical** (Do you see vertical bands on your neck when straining? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Jowl Sagging** (Do you have sagging skin along the jawline? [Options: Yes / No / Slight]) [Score: 0 (Refinement)]
- [Diagnosis] **Under-eye Hollows** (Do you have sunken areas under your eyes? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Cheek Volume** (Have your cheeks lost volume or flattened? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Temple Hollows** (Are your temples sunken or hollow? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Lip Lines** (Do you have vertical smoker's lines above your lip? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Eyelid Hooding** (Do your upper eyelids droop over your eyes? [Options: Yes / No]) [Score: 0 (Refinement)]

**Acne Location & Type**

- [Diagnosis] **Acne - Forehead** (Is acne concentrated on your forehead (hairline)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Cheeks** (Is acne mainly on your cheeks (phone side)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Jawline** (Is acne along the jawline (hormonal pattern)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Chin** (Is acne mainly on the chin (cycle related)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Nose** (Is acne on the nose (oil production)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Back** (Do you have acne on your back ("Bacne")? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Chest** (Do you have acne on your chest? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Cystic** (Are the pimples deep, painful, and without a head? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Whiteheads** (Are the pimples small white bumps? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Blackheads** (Are the pores clogged with dark plugs? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Acne - Fungal** (Is the acne itchy and clustered (Malassezia)? [Options: Possible / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Scarring - Icepick** (Do you have deep, narrow scars like pinpricks? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Scarring - Boxcar** (Do you have broad depressions with sharp edges? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Scarring - Rolling** (Do you have wave-like depressions? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Scarring - Keloid** (Do you have raised, thick scars from acne? [Options: Yes / No]) [Score: 0 (Refinement)]

**Pigmentation & Vascular**

- [Diagnosis] **Freckles** (Do you have small brown spots from sun exposure? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Sun Spots** (Do you have larger, defined brown spots (Lentigines)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Melasma Pattern** (Do you have symmetrical, patchy brown pigment on cheeks/forehead? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **PIH - Red** (Do you have red marks left after acne heals? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **PIH - Brown** (Do you have brown marks left after acne heals? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Rosacea - Flushing** (Do you have transient flushing that comes and goes? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Rosacea - Persistent** (Do you have permanent redness or visible veins? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Broken Capillaries** (Do you see tiny red spider veins on your nose/cheeks? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Dark Circles - Blue** (Are your dark circles blue/purple (vascular)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Dark Circles - Brown** (Are your dark circles brown (pigment)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Skin Texture** (Is your skin rough or bumpy to the touch? [Options: Rough / Smooth]) [Score: 0 (Refinement)]
- [Diagnosis] **Pore Size** (Are pores visible from a conversation distance? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Sebum Output** (Does your face get shiny within 2 hours of washing? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Dry Patches** (Do you have flaky or rough patches? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Mole Check** (Do you have any changing or irregular moles? [Options: Yes / No]) [Score: 0 (Safety)]
- [Diagnosis] **Keratosis Pilaris** (Do you have "chicken skin" bumps on your face/arms? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Skin Tags** (Do you have small skin tags on your neck/eyelids? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Milia** (Do you have small, hard white bumps under the skin? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Sebaceous Hyperplasia** (Do you have donut-shaped bumps on your forehead/nose? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Xanthelasma** (Do you have yellow cholesterol deposits on your eyelids? [Options: Yes / No]) [Score: 0 (Refinement)]

**Expanded Lifestyle Questions (Source: Hygiene & Habits)**

**Hygiene & Environment**

- [Lifestyle] **Pillowcase Frequency** (How often do you change your pillowcase? [Options: Daily / Weekly / Monthly]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Phone Cleaning** (How often do you sanitize your phone screen? [Options: Daily / Weekly / Never]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Face Touching** (Do you touch your face unconsciously? [Options: Yes / No / Only when stressed]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Makeup Brush Hygiene** (How often do you wash your makeup brushes/sponges? [Options: Weekly / Monthly / Never]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Towel Usage** (Do you reuse the same face towel multiple times? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Hand Washing** (Do you wash your hands _before_ touching your face/skincare? [Options: Always / Sometimes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Hair Products** (Do you use hair oil/wax that touches your forehead/cheeks? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Mask Wearing** (Do you wear a face mask daily for long hours? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Glasses/Sunglasses** (Do you clean the bridge of your glasses daily? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Hat Wearing** (Do you wear hats/caps frequently (sweat trap)? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Shower Temp** (Do you wash your face in the hot shower? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Water Hardness** (Do you live in an area with hard water? [Options: Yes / No / Don't Know]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Pollution Exposure** (Do you commute through heavy traffic/pollution daily? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Indoor Plants** (Do you have many plants (mold spores)? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Pet Contact** (Does your pet sleep in your bed/lick your face? [Options: Yes / No]) [Score: 0 (Lifestyle)]

**Habits & Routine**

- [Lifestyle] **Water Temp - Cleansing** (What temperature water do you use for cleansing? [Options: Hot / Lukewarm / Cold]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Cleansing Method** (Do you use oil, foam, or wipes primarily? [Options: Oil / Foam / Wipes / Micellar]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Double Cleansing** (Do you double cleanse (oil + foam) at night? [Options: Always / Sometimes / Never]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Exfoliation Freq** (How often do you exfoliate (scrub/acid)? [Options: Daily / Weekly / Monthly / Never]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Face Mask Usage** (How often do you use sheet masks? [Options: Daily / Weekly / Monthly]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Sauna/Steam** (Do you visit saunas or steam rooms regularly? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Exercise Sweat** (Do you sweat heavily during exercise? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Post-Workout Cleanse** (Do you wash your face immediately after sweating? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Diet - Dairy** (Do you consume dairy products daily? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Diet - Sugar** (Do you have a high sugar intake? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Diet - Gluten** (Do you suspect gluten sensitivity affects your skin? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Water Intake** (Do you drink at least 2L of water daily? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Alcohol Frequency** (How often do you drink alcohol? [Options: Daily / Weekly / Monthly]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Smoking - Cigarettes** (Do you smoke cigarettes? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Smoking - Vaping** (Do you vape? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Vitamin Intake** (Do you take skin supplements (Collagen/Biotin)? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Probiotics** (Do you take probiotics for gut health? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Caffeine Intake** (How many cups of coffee/tea do you drink daily? [Options: 0-1 / 2-3 / 4+]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Fast Food** (How often do you eat processed/fast food? [Options: Rare / Weekly / Daily]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Spicy Food** (Do you eat very spicy food (flushing trigger)? [Options: Yes / No]) [Score: 0 (Lifestyle)]

**Environment Control**

- [Lifestyle] **Humidifier Use** (Do you use a humidifier in dry seasons? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **AC Exposure** (Do you sit directly under AC/Heating vents? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Sun Exposure - Commute** (Is your commute sunny (driving/walking)? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Sun Exposure - Window** (Do you sit near a window all day? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Clothing Fabric** (Does wool or synthetic fabric touch your neck/chin? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Laundry Detergent** (Do you use scented detergent/softener? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Sleepwear** (Do you sleep in silk/cotton or synthetics? [Options: Natural / Synthetic]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Room Temperature** (Do you keep your room very warm or cool? [Options: Warm / Cool]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Dust Exposure** (Is your home/office dusty? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Mold Exposure** (Is there any mold in your living space? [Options: Yes / No]) [Score: 0 (Lifestyle)]

**Expanded History Questions (Source: Treatments & Side Effects)**

**Laser & Device History**

- [History] **Fraxel History** (Have you ever had Fraxel or CO2 resurfacing? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **IPL History** (Have you had IPL for pigmentation or redness? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Toning - Nd:YAG** (Have you had Laser Toning (Q-Switch/Pico)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Picosecond Laser** (Have you specifically had PicoSure or PicoWay? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Ulthera Experience** (Have you tried Ultherapy (Ultrasound)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Thermage Experience** (Have you tried Thermage (RF)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Shurink Experience** (Have you tried Shurink (Korean HIFU)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Inmode Experience** (Have you tried Inmode/Forma (RF)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Potenza/Microneedling** (Have you tried RF Microneedling (Potenza/Sylfirm)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **MTS / Dermapen** (Have you had standard microneedling? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Excel V / V-Beam** (Have you had vascular laser for redness? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Titanium Lifting** (Have you tried Titanium Lifting (3-wavelength)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Tune Face** (Have you tried Tune Face (Accent Prime)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Laser Hair Removal** (Have you had laser hair removal on the face? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Home Devices** (Do you use LED masks or Galvanic devices at home? [Options: Yes / No]) [Score: 0 (Lifestyle)]

**Injectables History**

- [History] **Botox - Forehead** (Have you had Botox in your forehead? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Botox - Masseter** (Have you had Botox for jaw slimming? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Botox - Trapezius** (Have you had Botox in your shoulders/traps? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Filler - Lips** (Have you had lip filler? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Filler - Nasolabial** (Have you had filler in your smile lines? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Filler - Chin** (Have you had chin filler? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Filler - Nose** (Have you had a non-surgical nose job? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Skin Booster - Rejuran** (Have you had Rejuran Healer (Salmon DNA)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Skin Booster - Exosome** (Have you had Exosome therapy? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Skin Booster - HA** (Have you had Hyaluronic Acid (Water Shine) injections? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Fat Dissolving** (Have you had Kybella or similar fat melting shots? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Thread Lift** (Have you had a PDO thread lift? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Sculptra** (Have you had Sculptra (Collagen Stimulator)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Ellanse** (Have you had Ellanse filler? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Profhilo** (Have you tried Profhilo? [Options: Yes / No]) [Score: 0 (Safety)]

**Side Effects & Reactions**

- [History] **Bruising Tendency** (Did you bruise heavily after previous injections? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Swelling Duration** (Did swelling last longer than expected (e.g., >1 week)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Blistering** (Did you get blisters after laser treatment? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Burn History** (Have you ever been burned by a laser/IPL device? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **PIH - Darkening** (Did your skin get darker after laser treatment? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Tyndall Effect** (Did filler leave a blue tint under your skin? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Asymmetry** (Did Botox result in uneven eyebrows or smile? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **No Effect** (Did you feel a treatment had absolutely zero effect? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Pain Level - High** (Was any treatment unbearably painful? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Nodule Formation** (Did you get lumps/bumps after filler/Sculptra? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Infection History** (Did you get an infection after a procedure? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Cold Sore Trigger** (Did a procedure trigger a cold sore outbreak? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Fainting** (Have you ever fainted during a procedure? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Anesthesia Reaction** (Did you feel sick after local anesthesia? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Regret** (Is there any procedure you regret doing? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Migration** (Did your filler move to another area (e.g., lips)? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Drooping** (Did you experience eyelid drooping (ptosis) after Botox? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Heavy Brow** (Did your forehead feel heavy after Botox? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Scarring - Keloid** (Did a removal procedure leave a keloid scar? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Hypopigmentation** (Did you get white spots after laser? [Options: Yes / No]) [Score: 0 (Safety)]

**Bonus Questions (Rounding to 300+)**

**Extra Lifestyle**

- [Lifestyle] **Exercise Type** (Do you prioritize Cardio or Weights? [Options: Cardio / Weights / Both]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Air Travel Freq** (Do you fly frequently (Cabin pressure/Dryness)? [Options: Monthly / Rarely]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Pet Dander** (Are you allergic to your pet's dander? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Chlorine Pool** (Do you swim in chlorinated pools regularly? [Options: Yes / No]) [Score: 0 (Lifestyle)]
- [Lifestyle] **Saltwater Swim** (Do you swim in the ocean often? [Options: Yes / No]) [Score: 0 (Lifestyle)]

**Extra History**

- [History] **Aqua Peel** (Have you tried Aqua Peel/HydraFacial? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **LDM Ultrasound** (Have you tried LDM (Water Drop) Ultrasound? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Cryotherapy** (Have you tried Cryotherapy facials? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Chemical Peel - TCA** (Have you had a deep TCA Peel? [Options: Yes / No]) [Score: 0 (Safety)]
- [History] **Chemical Peel - Jessner** (Have you had a Jessner Peel? [Options: Yes / No]) [Score: 0 (Safety)]

**Extra Diagnosis**

- [Diagnosis] **Eyelid Crease** (Do you have a defined double eyelid crease? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Epicanthal Fold** (Do you have an epicanthal fold (inner eye corner)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Diagnosis] **Lip Volume** (Are your lips naturally thin or full? [Options: Thin / Full / Average]) [Score: 0 (Refinement)]
- [Diagnosis] **Philtrum Length** (Is your philtrum (nose to lip distance) long or short? [Options: Long / Short]) [Score: 0 (Refinement)]
- [Diagnosis] **Nose Bridge** (Is your nose bridge flat or high? [Options: Flat / High]) [Score: 0 (Refinement)]

**Medical Deep Dive (Expansion)**

**Scalp Health**

- [Scalp] **Hair Loss - Pattern** (Do you have a receding hairline (M-shape) or crown thinning (O-shape)? [Options: M-shape / O-shape / Diffuse / None]) [Score: 0 (Refinement)]
- [Scalp] **Hair Loss - Family History** (Does your father or mother have hair loss? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Scalp] **Scalp Itchiness** (How often does your scalp itch? [Options: Daily / Occasionally / Never]) [Score: 0 (Refinement)]
- [Scalp] **Dandruff Type** (Is your dandruff dry/powdery or oily/sticky? [Options: Dry / Oily / None]) [Score: 0 (Refinement)]
- [Scalp] **Scalp Odor** (Does your scalp develop an odor by the afternoon? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Scalp] **Scalp Pimples** (Do you get painful bumps or pimples on your scalp? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Scalp] **Hair Texture Changes** (Has your hair become thinner or finer recently? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Scalp] **Scalp Heat** (Does your scalp feel hot or flushed? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Scalp] **Hair Treatment Frequency** (How often do you dye or perm your hair? [Options: Monthly / Every 3 Months / Rarely]) [Score: 0 (Refinement)]
- [Scalp] **Scalp Pain** (Do you experience pain or tenderness when moving your hair? [Options: Yes / No]) [Score: 0 (Refinement)]

**Body Concerns**

- [Body] **Stretch Marks - Color** (Are your stretch marks red/purple or white/silver? [Options: Red/Purple / White/Silver / None]) [Score: 0 (Refinement)]
- [Body] **Stretch Marks - Location** (Where are your stretch marks located? [Options: Abdomen / Thighs / Hips / Breasts]) [Score: 0 (Refinement)]
- [Body] **Cellulite - Visibility** (Is cellulite visible when standing relaxed or only when pinched? [Options: Relaxed / Pinched / None]) [Score: 0 (Refinement)]
- [Body] **Cellulite - Texture** (Does the area feel cold or hard to the touch? [Options: Cold/Hard / Normal]) [Score: 0 (Refinement)]
- [Body] **Back Acne - Type** (Is your back acne mostly cystic/painful or small bumps? [Options: Cystic / Small Bumps / None]) [Score: 0 (Refinement)]
- [Body] **Chest Acne** (Do you have breakouts on your chest area? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Body] **Body Pigmentation** (Do you have dark spots on your back or shoulders from old acne? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Body] **Arm Bumps (KP)** (Do you have rough, red bumps on the back of your arms (Keratosis Pilaris)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Body] **Leg Veins** (Do you have visible spider veins or varicose veins on your legs? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Body] **Hand Dryness** (Is the skin on your hands chronically dry or cracking? [Options: Yes / No]) [Score: 0 (Refinement)]

**Men's Care**

- [Men] **Shaving Frequency** (How often do you shave your face? [Options: Daily / Every other day / Weekly]) [Score: 0 (Refinement)]
- [Men] **Razor Burn** (Do you get red bumps or irritation after shaving? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Ingrown Hairs** (Do you suffer from painful ingrown hairs in the beard area? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Beard Density** (Is your beard growth patchy or dense? [Options: Patchy / Dense / Normal]) [Score: 0 (Refinement)]
- [Men] **Cheek Hair** (Do you have unwanted hair growth high on the cheeks? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Aftershave Usage** (Do you use alcohol-based aftershave? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Skincare Steps** (Do you use any product other than all-in-one or lotion? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Sunscreen Habit** (Do you apply sunscreen when playing sports or working outdoors? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Forehead Shine** (Is your forehead shiny/oily by midday? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Men] **Nose Blackheads** (Are blackheads on your nose a major concern? [Options: Yes / No]) [Score: 0 (Refinement)]

**Aging & Anti-Aging**

- [Aging] **Neck Wrinkles - Horizontal** (Do you have deep horizontal lines on your neck? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Neck Sagging** (Do you have loose skin under your chin (Turkey Neck)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Hand Veins** (Are the veins on the back of your hands very visible/bulging? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Hand Spots** (Do you have "age spots" or liver spots on your hands? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Earlobe Sagging** (Are your earlobes elongated or sagging (from earrings/age)? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Lip Thinning** (Have your lips lost volume or curled inward with age? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Eye Hollowness** (Do your eyes look more sunken than they used to? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Jawline Definition** (Has your jawline become less defined or blurry? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Skin Thinning** (Does your skin feel thinner or more crepey like paper? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Aging] **Chest Wrinkles** (Do you have vertical wrinkles on your chest (Décolletage)? [Options: Yes / No]) [Score: 0 (Refinement)]

**Vascular & Redness**

- [Vascular] **Spider Veins - Nose** (Do you have tiny red veins around your nose nostrils? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Spider Veins - Cheeks** (Do you have visible thread veins on your cheeks? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Hemangioma** (Do you have small, bright red dots (Cherry Angiomas) on your face/body? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Flushing Triggers - Heat** (Does your face get red immediately in hot rooms/showers? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Flushing Triggers - Alcohol** (Do you get "Asian Flush" (red face) when drinking? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Flushing Triggers - Emotion** (Do you blush easily when embarrassed or stressed? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Diffuse Redness** (Is your face constantly pink or red, even without triggers? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Vein Visibility - Temples** (Are blue veins visible in your temple area? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Under-eye Veins** (Do you have visible blue/green veins under your eyes? [Options: Yes / No]) [Score: 0 (Refinement)]
- [Vascular] **Bruising History** (Do you bruise very easily from minor bumps? [Options: Yes / No]) [Score: 0 (Refinement)]

## 5. Phase 7: Deep Profiling

**(To Be Developed)**

- Integration of genomic data (future scope).
- Microbiome analysis inputs.
- Advanced lifestyle tracking (wearable integration).
