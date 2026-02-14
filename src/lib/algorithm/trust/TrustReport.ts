import type { PricingResult } from "../pricing/PriceCalculator";

export interface AntiFactorySpec {
  model_name: string;
  model_provider: string; // e.g., "Local", "Groq", "OpenRouter"
  temperature: number;
  top_p: number;
  reasoning_steps?: number;
  timestamp: string;
  version: string;
  // Detailed Output
  latency_ms?: number;
  token_usage?: {
    input: number;
    output: number;
    reasoning?: number;
  };
  compute_region?: string; // e.g., "us-east-1", "local-m2"
  carbon_offset_g?: number; // Simulated carbon footprint offset
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
    const isBundle = pricingResult.tier === "BUNDLE";

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

    // Calculate simulated usage based on tier
    const baseLatency = isStandard ? 2400 : 800;
    const latency = isBundle ? baseLatency * 5 * 0.8 : baseLatency; // Parallel gains?
    const tokens = isStandard ? 1200 : 400;

    const spec: AntiFactorySpec = {
      model_name:
        isStandard || isBundle ? "DeepSeek-R1-Distill" : "Llama-3-8b-Instant",
      model_provider: isStandard || isBundle ? "Private Cloud" : "Groq/Edge",
      temperature: isStandard || isBundle ? 0.6 : 0.8, // Lower temp for precision in Standard/Bundle
      top_p: 0.95,
      reasoning_steps:
        isStandard || isBundle ? Math.floor(Math.random() * 10) + 5 : 0,
      timestamp: new Date().toISOString(),
      version: "v7.5.0-phase5",
      latency_ms: Math.floor(latency + Math.random() * 200),
      token_usage: {
        input: Math.floor(tokens * 0.3),
        output: Math.floor(tokens * 0.7),
        reasoning: isStandard || isBundle ? Math.floor(tokens * 0.2) : 0,
      },
      compute_region: "asia-northeast3", // Seoul region simulation
      carbon_offset_g: isStandard ? 0.5 : 0.1,
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
