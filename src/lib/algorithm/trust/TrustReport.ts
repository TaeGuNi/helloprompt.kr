import type { PricingResult } from "../pricing/PriceCalculator";

export interface AntiFactorySpec {
  model_name: string;
  temperature: number;
  top_p: number;
  reasoning_steps?: number;
  timestamp: string;
  version: string;
}

export interface VirtualReceipt {
  base_compute: number;
  reasoning_cost: number;
  verification_cost: number;
  formatting_cost: number;
  total_value: number;
  currency: string;
}

export interface TrustReport {
  id: string;
  receipt: VirtualReceipt; // Transformed from PricingResult
  spec: AntiFactorySpec;
  generated_at: string;
}

export class TrustReportGenerator {
  static generate(
    pricingResult: PricingResult,
    overrides?: Partial<AntiFactorySpec>,
  ): TrustReport {
    const isStandard = pricingResult.tier === "STANDARD";

    // Transform PricingResult to VirtualReceipt
    const receipt: VirtualReceipt = {
      base_compute:
        pricingResult.components.find((c) => c.key === "base_compute")?.cost ||
        0,
      reasoning_cost:
        pricingResult.components.find((c) => c.key === "reasoning_cost")
          ?.cost || 0,
      verification_cost:
        pricingResult.components.find((c) => c.key === "verification_cost")
          ?.cost || 0,
      formatting_cost:
        pricingResult.components.find((c) => c.key === "formatting_cost")
          ?.cost || 0,
      total_value: pricingResult.total,
      currency: pricingResult.currency,
    };

    const spec: AntiFactorySpec = {
      model_name: isStandard ? "DeepSeek-R1-Distill" : "Llama-3-8b-Instant",
      temperature: isStandard ? 0.6 : 0.8, // Lower temp for precision in Standard
      top_p: 0.95,
      reasoning_steps: isStandard ? Math.floor(Math.random() * 10) + 5 : 0,
      timestamp: new Date().toISOString(),
      version: "v7.5.0-phase5",
      ...overrides,
    };

    return {
      id: crypto.randomUUID(),
      receipt,
      spec,
      generated_at: new Date().toISOString(),
    };
  }
}
