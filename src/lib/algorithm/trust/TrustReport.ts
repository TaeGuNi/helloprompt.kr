import type { PricingResult } from "../pricing/PriceCalculator";

export interface AntiFactorySpec {
  model_name: string;
  temperature: number;
  top_p: number;
  presence_penalty?: number;
  frequency_penalty?: number;
  reasoning_steps?: number;
  timestamp: string;
  version: string;
  compute_region?: string;
}

export interface TrustReport {
  id: string;
  receipt: PricingResult;
  spec: AntiFactorySpec;
  generated_at: string;
}

export class TrustReportGenerator {
  static generate(
    receipt: PricingResult,
    overrides?: Partial<AntiFactorySpec>,
  ): TrustReport {
    const isStandard = receipt.tier === "STANDARD";

    const spec: AntiFactorySpec = {
      model_name: isStandard ? "DeepSeek-R1-Distill" : "Llama-3-8b-Instant",
      temperature: isStandard ? 0.7 : 0.8,
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
