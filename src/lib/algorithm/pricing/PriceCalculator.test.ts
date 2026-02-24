import { describe, expect, it } from "vitest";
import { calculatePrice } from "./PriceCalculator";

describe("PriceCalculator", () => {
  it("should calculate Standard tier correctly", () => {
    const result = calculatePrice("STANDARD");

    expect(result.tier).toBe("STANDARD");
    expect(result.total).toBe(250); // 100 + 80 + 50 + 20
    expect(result.components).toHaveLength(4);
    expect(result.components[0].name).toBe("High-Fidelity Compute");
  });

  it("should calculate Skinny tier correctly", () => {
    const result = calculatePrice("SKINNY");

    expect(result.tier).toBe("SKINNY");
    expect(result.total).toBe(100); // 80 + 20
    expect(result.components).toHaveLength(2);
    expect(result.components[0].name).toBe("Low-Latency Compute");
  });

  it("should maintain the 0.4x ratio roughly", () => {
    const standard = calculatePrice("STANDARD").total;
    const skinny = calculatePrice("SKINNY").total;

    expect(skinny / standard).toBe(0.4);
  });

  it("should calculate Bundle tier correctly", () => {
    const result = calculatePrice("BUNDLE");

    expect(result.tier).toBe("BUNDLE");
    // Standard 250 * 5 = 1250.
    // Discount 15% = 187.5.
    // Total = 1250 - 187.5 = 1062.5.
    expect(result.total).toBe(1062.5);
    expect(result.components).toHaveLength(5); // 4 + Discount
    const discount = result.components.find((c) => c.key === "bundle_discount");
    expect(discount).toBeDefined();
    expect(discount?.cost).toBe(-187.5);
  });
});
