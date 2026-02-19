import { describe, it, expect } from "vitest";
import { PriceCalculator } from "./PriceCalculator";

describe("PriceCalculator", () => {
  it("should calculate Standard tier correctly", () => {
    const result = PriceCalculator.calculate("STANDARD");

    expect(result.tier).toBe("STANDARD");
    expect(result.total).toBe(250); // 100 + 80 + 50 + 20
    expect(result.components).toHaveLength(4);
    expect(result.components[0].name).toBe("High-Fidelity Compute");
  });

  it("should calculate Skinny tier correctly", () => {
    const result = PriceCalculator.calculate("SKINNY");

    expect(result.tier).toBe("SKINNY");
    expect(result.total).toBe(100); // 80 + 20
    expect(result.components).toHaveLength(2);
    expect(result.components[0].name).toBe("Low-Latency Compute");
  });

  it("should maintain the 0.4x ratio roughly", () => {
    const standard = PriceCalculator.calculate("STANDARD").total;
    const skinny = PriceCalculator.calculate("SKINNY").total;

    expect(skinny / standard).toBe(0.4);
  });
});
