Feature: Skin Expert AI Diagnosis & Recommendation
  As a Clinical Concierge AI
  I want to analyze user skin conditions using the latest longevity science (2026)
  So that I can provide precise, reliable, and "Senolytics-aware" recommendations

  Scenario: Recommend Senolytics for detected cellular senescence
    Given the user has reported "deep wrinkles" and "loss of elasticity"
    And the user age is above 35
    When the AI performs the "Cellular Aging Analysis"
    Then it should identify "cellular senescence" as a primary aging factor
    And it should recommend active ingredients from the "Senolytics" class:
      | Ingredient | Mechanism |
      | Fisetin    | Apoptosis of senescent cells |
      | Quercetin  | Apoptosis/SASP inhibition |
    And it should recommend "Senomorphics" to suppress SASP:
      | Ingredient | Mechanism |
      | Apigenin   | SASP suppression |
    And the tone should be "Clinical Diagnosis", not "Product Sales"

  Scenario: Reinforcement Learning Feedback Loop for Safety
    Given the AI recommends "High-Concentration Retinol"
    When the Dermatologist Expert Panel flags this as "High Risk" for "Sensitive Skin Type"
    Then the AI should receive a negative reward signal (-1.0)
    And the AI should downgrade the confidence score for "Retinol" on "Sensitive Skin"
    And the AI should propose a safer alternative:
      | Alternative | Reason |
      | Bakuchiol   | Similar efficacy, lower irritation |
      | Granactive Retinoid | Lower irritation potential |

  Scenario: Zero Image Policy Compliance
    Given the user attempts to upload a selfie for analysis
    When the system receives the request
    Then it should reject the image upload immediately
    And it should respond with "Zero Image Policy: We analyze text-based symptoms only."
    And no image data should be stored or processed
