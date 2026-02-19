export type PricingTier = "STANDARD" | "SKINNY" | "BUNDLE";

export interface PriceComponent {
  name: string;
  key:
    | "base_compute"
    | "reasoning_cost"
    | "verification_cost"
    | "formatting_cost"
    | "bundle_discount";
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
  // Standard Tier Reference Total: 250 Credits (1.0x)
  // Skinny Tier Target: 100 Credits (0.4x)
  // Bundle Tier Target: ~1060 Credits (5x Standard - 15%)

  static calculate(tier: PricingTier): PricingResult {
    const components: PriceComponent[] = [];

    if (tier === "STANDARD") {
      components.push({
        name: "High-Fidelity Compute",
        key: "base_compute",
        cost: 100,
        description: "Premium LLM inference (Full Context)",
      });
      components.push({
        name: "Reasoning Engine",
        key: "reasoning_cost",
        cost: 80,
        description: "Chain-of-thought processing & planning",
      });
      components.push({
        name: "Auto-QA Guardrails",
        key: "verification_cost",
        cost: 50,
        description: "Self-correction and safety verification",
      });
      components.push({
        name: "Anti-Factory Metadata",
        key: "formatting_cost",
        cost: 20,
        description: "Traceability and transparency logging",
      });
    } else if (tier === "BUNDLE") {
      // 5x Standard Capacity
      const standardCost = 250;
      const count = 5;
      const grossTotal = standardCost * count;
      const discount = grossTotal * 0.15; // 15% off

      components.push({
        name: "Bulk Compute Allocation (5x)",
        key: "base_compute",
        cost: 100 * count,
        description: "Reserved high-fidelity compute block",
      });
      components.push({
        name: "Batch Reasoning",
        key: "reasoning_cost",
        cost: 80 * count,
        description: "Parallel chain-of-thought processing",
      });
      components.push({
        name: "QA Suite",
        key: "verification_cost",
        cost: 50 * count,
        description: "Automated quality assurance suite",
      });
      components.push({
        name: "Metadata & Reporting",
        key: "formatting_cost",
        cost: 20 * count,
        description: "Consolidated audit logs",
      });
      components.push({
        name: "Volume Discount (15%)",
        key: "bundle_discount",
        cost: -discount,
        description: "Bundle efficiency savings",
      });
    } else {
      // Skinny Tier: Lightweight, fast, no reasoning overhead
      components.push({
        name: "Low-Latency Compute",
        key: "base_compute",
        cost: 80,
        description: "Standard LLM inference (Optimized)",
      });
      components.push({
        name: "Basic Formatting",
        key: "formatting_cost",
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
