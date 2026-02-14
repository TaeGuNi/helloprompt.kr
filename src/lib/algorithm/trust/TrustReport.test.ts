import { describe, it, expect } from "vitest";
import { TrustReportGenerator } from "./TrustReport";
import { PriceCalculator } from "../pricing/PriceCalculator";

describe("TrustReportGenerator", () => {
  it("should generate a report with receipt and spec", () => {
    const pricing = PriceCalculator.calculate("STANDARD");
    const report = TrustReportGenerator.generate(pricing);

    expect(report.id).toBeDefined();

    // Check Virtual Receipt mapping
    expect(report.receipt.base_compute).toBe(100);
    expect(report.receipt.reasoning_cost).toBe(80);
    expect(report.receipt.verification_cost).toBe(50);
    expect(report.receipt.formatting_cost).toBe(20);
    expect(report.receipt.total_value).toBe(250);

    // Check Anti-Factory Spec
    expect(report.spec.version).toContain("phase5");
    expect(report.spec.reasoning_steps).toBeGreaterThan(0);
    expect(report.spec.latency_ms).toBeGreaterThan(0);
    expect(report.spec.token_usage).toBeDefined();
    expect(report.spec.token_usage?.input).toBeGreaterThan(0);
    expect(report.spec.model_provider).toBeDefined();
    expect(report.spec.compute_region).toBe("asia-northeast3");
    expect(report.spec.carbon_offset_g).toBeGreaterThan(0);
  });

  it("should respect overrides", () => {
    const pricing = PriceCalculator.calculate("SKINNY");
    const report = TrustReportGenerator.generate(pricing, {
      model_name: "Custom-Model",
    });

    expect(report.spec.model_name).toBe("Custom-Model");
    expect(report.receipt.base_compute).toBe(80);
    expect(report.receipt.reasoning_cost).toBe(0); // Skinny has no reasoning cost
  });
});
