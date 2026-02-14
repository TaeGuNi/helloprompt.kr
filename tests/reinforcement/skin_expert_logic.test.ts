import { describe, it, expect } from "vitest";

// Domain Logic Simulation (based on Research)
type TreatmentType = "Exosome" | "PN";

interface TreatmentProfile {
  name: TreatmentType;
  onset: "rapid" | "gradual";
  stability: "low" | "high";
  primaryEffect: string[];
}

const Exosome: TreatmentProfile = {
  name: "Exosome",
  onset: "rapid",
  stability: "low",
  primaryEffect: ["anti-inflammation", "rejuvenation", "hair growth"],
};

const Polynucleotide: TreatmentProfile = {
  name: "PN",
  onset: "gradual",
  stability: "high",
  primaryEffect: ["density", "hydration", "wound healing"],
};

function recommendTreatment(
  need: "inflammation" | "hydration" | "density" | "rapid_fix",
): TreatmentType {
  if (need === "inflammation" || need === "rapid_fix") return "Exosome";
  if (need === "hydration" || need === "density") return "PN";
  return "PN"; // Default safe choice
}

// BDD Tests
describe("Skin Expert Logic (2026 Research)", () => {
  it("should characterize Exosomes as rapid onset and low stability", () => {
    expect(Exosome.onset).toBe("rapid");
    expect(Exosome.stability).toBe("low");
  });

  it("should characterize Polynucleotides (PN) as gradual onset and high stability", () => {
    expect(Polynucleotide.onset).toBe("gradual");
    expect(Polynucleotide.stability).toBe("high");
  });

  it("should recommend Exosomes for inflammation", () => {
    expect(recommendTreatment("inflammation")).toBe("Exosome");
  });

  it("should recommend PN for hydration and density", () => {
    expect(recommendTreatment("hydration")).toBe("PN");
    expect(recommendTreatment("density")).toBe("PN");
  });

  it("should recommend Exosomes for rapid results", () => {
    expect(recommendTreatment("rapid_fix")).toBe("Exosome");
  });
});
