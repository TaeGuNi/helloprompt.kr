export type PricingTier = "STANDARD" | "SKINNY";

export interface PriceComponent {
  name: string;
  cost: number;
  description: string;
}

export interface PricingResult {
  tier: PricingTier;
  total: number;
  components: PriceComponent[];
  currency: string;
}

export class PriceCalculator {
  // Standard Tier Reference Total: 250 Credits
  // Skinny Tier Target: ~100 Credits (0.4x)

  static calculate(tier: PricingTier): PricingResult {
    const components: PriceComponent[] = [];

    if (tier === "STANDARD") {
      components.push({
        name: "High-Fidelity Compute",
        cost: 100,
        description: "Premium LLM inference (Full Context)",
      });
      components.push({
        name: "Reasoning Engine",
        cost: 80,
        description: "Chain-of-thought processing & planning",
      });
      components.push({
        name: "Auto-QA Guardrails",
        cost: 50,
        description: "Self-correction and safety verification",
      });
      components.push({
        name: "Anti-Factory Metadata",
        cost: 20,
        description: "Traceability and transparency logging",
      });
    } else {
      // Skinny Tier: Lightweight, fast, no reasoning overhead
      components.push({
        name: "Low-Latency Compute",
        cost: 80,
        description: "Standard LLM inference (Optimized)",
      });
      components.push({
        name: "Basic Formatting",
        cost: 20,
        description: "Markdown structure output",
      });
    }

    const total = components.reduce((sum, item) => sum + item.cost, 0);

    return {
      tier,
      total,
      components,
      currency: "CREDITS",
    };
  }
}
