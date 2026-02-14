import { describe, it, expect } from "vitest";
import { TrustReportGenerator } from "./TrustReport";
import { PriceCalculator } from "../pricing/PriceCalculator";

describe("TrustReportGenerator", () => {
  it("should generate a report with receipt and spec", () => {
    const receipt = PriceCalculator.calculate("STANDARD");
    const report = TrustReportGenerator.generate(receipt);

    expect(report.id).toBeDefined();
    expect(report.receipt).toEqual(receipt);
    expect(report.spec.version).toContain("phase5");
    expect(report.spec.reasoning_steps).toBeGreaterThan(0);
  });

  it("should respect overrides", () => {
    const receipt = PriceCalculator.calculate("SKINNY");
    const report = TrustReportGenerator.generate(receipt, {
      model_name: "Custom-Model",
    });

    expect(report.spec.model_name).toBe("Custom-Model");
  });
});
