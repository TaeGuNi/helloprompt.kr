# Research Protocol: TEDS-2026-v1 Validation

**Target Model:** `research/data/targeted_exosome_model_v1.json`
**Date:** 2026-02-14
**Status:** Ready for Execution (Pending Connectivity)

## 1. Objective

To empirically validate the theoretical model TEDS-2026-v1, specifically the hypothesis that anti-CD90 scFv conjugation increases collagen synthesis by >40% compared to non-targeted exosomes in human dermal fibroblasts.

## 2. Search Strategy (Optimized Keywords)

When connectivity is restored, execute the following queries iteratively:

1.  `"anti-CD90 exosome fibroblast targeting efficacy"`
2.  `"scFv engineered exosomes skin regeneration 2025 2026"`
3.  `"miR-21 exosome collagen synthesis in vivo"`
4.  `"targeted exosome delivery dermatology clinical trials"`

## 3. Inclusion/Exclusion Criteria

- **Include:**
  - Peer-reviewed studies (2024-2026).
  - In vitro (human fibroblast) or In vivo (animal/human) trials.
  - Explicit comparison between Targeted vs. Non-Targeted exosomes.
- **Exclude:**
  - Plant-derived exosomes (unless engineered for specific targeting).
  - Review articles without new data (use only for referencing primary sources).

## 4. Validation Metrics (Key Performance Indicators)

Extract the following data points to validate the JSON model:
| Metric | Hypothesis (v1) | Threshold for Validation |
| :--- | :--- | :--- |
| **Collagen Synthesis** | +40% increase | >25% increase (statistically significant) |
| **MMP-1 Reduction** | -25% reduction | >15% reduction |
| **Targeting Efficiency** | N/A (implied high) | Quantifiable uptake ratio (Targeted/Non-targeted > 2.0) |

## 5. Contingency Plan

- **If Hypothesis Confirmed:** Update model status to "Validated", proceed to "Clinical Application" simulation.
- **If Hypothesis Refuted:** Revise `mechanism.surface_engineering` (consider alternative targets like CD44 or Integrins) and adjust `predicted_outcomes`.
