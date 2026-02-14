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
  // Constants for Rational Pricing
  private static readonly STANDARD_BASE = 100;
  private static readonly STANDARD_REASONING = 80;
  private static readonly STANDARD_QA = 50;
  private static readonly STANDARD_METADATA = 20;

  private static readonly SKINNY_BASE = 80;
  private static readonly SKINNY_METADATA = 20;

  private static readonly BUNDLE_SIZE = 5;
  private static readonly BUNDLE_DISCOUNT_RATE = 0.15; // 15%

  // Standard Tier Reference Total: 250 Credits (1.0x)
  // Skinny Tier Target: 100 Credits (0.4x)
  // Bundle Tier Target: ~1060 Credits (5x Standard - 15%)

  static calculate(tier: PricingTier): PricingResult {
    const components: PriceComponent[] = [];

    if (tier === "STANDARD") {
      components.push({
        name: "High-Fidelity Compute",
        key: "base_compute",
        cost: this.STANDARD_BASE,
        description: "Premium LLM inference (Full Context)",
      });
      components.push({
        name: "Reasoning Engine",
        key: "reasoning_cost",
        cost: this.STANDARD_REASONING,
        description: "Chain-of-thought processing & planning",
      });
      components.push({
        name: "Auto-QA Guardrails",
        key: "verification_cost",
        cost: this.STANDARD_QA,
        description: "Self-correction and safety verification",
      });
      components.push({
        name: "Anti-Factory Metadata",
        key: "formatting_cost",
        cost: this.STANDARD_METADATA,
        description: "Traceability and transparency logging",
      });
    } else if (tier === "BUNDLE") {
      // 5x Standard Capacity
      const standardCost =
        this.STANDARD_BASE +
        this.STANDARD_REASONING +
        this.STANDARD_QA +
        this.STANDARD_METADATA;
      const count = this.BUNDLE_SIZE;
      const grossTotal = standardCost * count;
      const discount = Math.round(grossTotal * this.BUNDLE_DISCOUNT_RATE);

      components.push({
        name: `Bulk Compute Allocation (${count}x)`,
        key: "base_compute",
        cost: this.STANDARD_BASE * count,
        description: "Reserved high-fidelity compute block",
      });
      components.push({
        name: "Batch Reasoning",
        key: "reasoning_cost",
        cost: this.STANDARD_REASONING * count,
        description: "Parallel chain-of-thought processing",
      });
      components.push({
        name: "QA Suite",
        key: "verification_cost",
        cost: this.STANDARD_QA * count,
        description: "Automated quality assurance suite",
      });
      components.push({
        name: "Metadata & Reporting",
        key: "formatting_cost",
        cost: this.STANDARD_METADATA * count,
        description: "Consolidated audit logs",
      });
      components.push({
        name: `Volume Discount (${this.BUNDLE_DISCOUNT_RATE * 100}%)`,
        key: "bundle_discount",
        cost: -discount,
        description: "Bundle efficiency savings",
      });
    } else {
      // Skinny Tier: Lightweight, fast, no reasoning overhead
      components.push({
        name: "Low-Latency Compute",
        key: "base_compute",
        cost: this.SKINNY_BASE,
        description: "Standard LLM inference (Optimized)",
      });
      components.push({
        name: "Basic Formatting",
        key: "formatting_cost",
        cost: this.SKINNY_METADATA,
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
