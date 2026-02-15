# Algorithm Phase 5: Rational Trust & Value

## 1. Objective

To implement a "Rational Trust" model where value is transparently calculated and presented to the user. This moves beyond opaque pricing to a "Virtual Receipt" model that justifies cost based on compute, complexity, and quality assurance.

## 2. Pricing Logic (`src/lib/algorithm/pricing/PriceCalculator.ts`)

We distinguish between two tiers of service/content generation:

### A. Standard Tier (Premium)

- **Description**: Full-service prompt engineering with reasoning, few-shot examples, and anti-hallucination guardrails.
- **Components**:
  - Base Cost (Compute)
  - Reasoning Overhead (Thinking)
  - QA Check (Self-Correction)
  - Formatting & Metadata
- **Multiplier**: 1.0x (Baseline)

### B. Skinny Tier (Lite)

- **Description**: Raw prompt output or high-speed generation without extensive reasoning chains.
- **Components**:
  - Base Cost (Compute)
- **Multiplier**: 0.4x (Discounted)

### C. Bundle Tier (Bulk)

- **Description**: Bulk generation of 5+ Standard artifacts.
- **Components**:
  - Aggregated Standard Components
  - Volume Discount (15% off)
- **Multiplier**: ~0.85x (Effective)

## 3. Trust Report Structure

The "Trust Report" is a data structure returned with every generated artifact. Defined in `src/lib/algorithm/trust/TrustReport.ts`.

### Virtual Receipt

A breakdown of the value provided:

- `base_compute`: Cost of the raw LLM tokens.
- `reasoning_cost`: Cost of the "thinking" process.
- `verification_cost`: Cost of the automated QA step.
- `total_value`: Sum of the above.
- `currency`: Credits.

### Anti-Factory Spec

Metadata that proves the content is bespoke and not mass-produced "slop":

- `model_name`: e.g., "DeepSeek-R1", "Gemini-Pro-1.5"
- `temperature`: Precision setting (e.g., 0.7)
- `top_p`: Nucleus sampling parameter.
- `reasoning_steps`: Number of logical steps taken (if applicable).
- `timestamp`: Exact generation time.
- `version`: Algorithm version (e.g., "v7.5.0")
- `latency_ms`: Execution time in milliseconds.
- `token_usage`: Input/Output/Reasoning token breakdown.

## 4. Conversion Funnel Integration

The Trust Report is displayed _before_ or _alongside_ the final call-to-action, showing the user exactly what they are paying for (in terms of credits or subscription value), increasing conversion through transparency.
