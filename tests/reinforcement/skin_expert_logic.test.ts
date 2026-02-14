import { describe, it, expect } from "vitest";

// Domain Logic Simulation (based on Research)
type TreatmentType = "Exosome" | "PN" | "Senolytic" | "Senomorphic";

interface TreatmentProfile {
  name: TreatmentType;
  mechanism: "regeneration" | "apoptosis" | "suppression" | "scaffold";
  onset: "rapid" | "gradual";
  stability: "low" | "high";
  primaryEffect: string[];
}

const Exosome: TreatmentProfile = {
  name: "Exosome",
  mechanism: "regeneration",
  onset: "rapid",
  stability: "low",
  primaryEffect: ["anti-inflammation", "rejuvenation", "hair growth"],
};

const Polynucleotide: TreatmentProfile = {
  name: "PN",
  mechanism: "scaffold",
  onset: "gradual",
  stability: "high",
  primaryEffect: ["density", "hydration", "wound healing"],
};

const Fisetin: TreatmentProfile = {
  name: "Senolytic",
  mechanism: "apoptosis",
  onset: "gradual",
  stability: "high",
  primaryEffect: ["clearance", "anti-aging", "longevity"],
};

const Apigenin: TreatmentProfile = {
  name: "Senomorphic",
  mechanism: "suppression",
  onset: "rapid",
  stability: "high",
  primaryEffect: ["calming", "anti-redness", "SASP-inhibition"],
};

function recommendTreatment(
  need:
    | "inflammation"
    | "hydration"
    | "density"
    | "rapid_fix"
    | "zombie_cells"
    | "chronic_irritation",
): TreatmentType {
  if (need === "zombie_cells") return "Senolytic";
  if (need === "chronic_irritation") return "Senomorphic";
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

  it("should characterize Senolytics (Fisetin) as apoptotic agents", () => {
    expect(Fisetin.mechanism).toBe("apoptosis");
  });

  it("should characterize Senomorphics (Apigenin) as suppression agents", () => {
    expect(Apigenin.mechanism).toBe("suppression");
  });

  it("should recommend Exosomes for inflammation", () => {
    expect(recommendTreatment("inflammation")).toBe("Exosome");
  });

  it("should recommend PN for hydration and density", () => {
    expect(recommendTreatment("hydration")).toBe("PN");
    expect(recommendTreatment("density")).toBe("PN");
  });

  it("should recommend Senolytics for clearing zombie cells", () => {
    expect(recommendTreatment("zombie_cells")).toBe("Senolytic");
  });

  it("should recommend Senomorphics for chronic irritation (SASP control)", () => {
    expect(recommendTreatment("chronic_irritation")).toBe("Senomorphic");
  });

  it("should recommend Exosomes for rapid results", () => {
    expect(recommendTreatment("rapid_fix")).toBe("Exosome");
  });
});
