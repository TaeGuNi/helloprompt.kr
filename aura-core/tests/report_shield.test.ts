import { describe, test, expect } from 'vitest';
import { SkinnEngine } from '../engine/CoreLogic.js';
import { JsonDataProvider } from '../engine/infrastructure/JsonDataProvider.js';
import type { ClientProfile } from '../engine/types/index.js';

// Mock Data Provider
class MockDataProvider extends JsonDataProvider {
  async getTreatments() {
    return [
      {
        id: 't_ldm',
        name: 'LDM Water Drop',
        methodType: 'Ultrasound',
        safetyLevel: 'Safe', // Safe for pregnancy
        downtimeLevel: 0,
        painLevel: 0,
        baumannTarget: ['D', 'S'],
        targetArea: 'Face',
        contraindications: [],
        priceRange: { min: 100000, max: 150000, currency: 'KRW' },
      },
      {
        id: 't_fraxel',
        name: 'Fraxel Laser',
        methodType: 'Laser',
        safetyLevel: 'Caution', // Unsafe for pregnancy
        downtimeLevel: 3,
        painLevel: 3,
        baumannTarget: ['O', 'W'],
        targetArea: 'Face',
        contraindications: [],
        priceRange: { min: 300000, max: 500000, currency: 'KRW' },
      },
    ] as any; // eslint-disable-line @typescript-eslint/no-explicit-any
  }
}

describe('Phase 1: Report Shielding (UX Redirection)', () => {
  const engine = new SkinnEngine(new MockDataProvider());

  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 80, sensitivity: 20, pigment: 20, wrinkle: 20 }, // OSPT
    concerns: ['Pores'],
    painTolerance: 'Medium',
    downtimePreference: 'Short',
  };

  test('Should generate "Mom\'s Care" report for Pregnant clients', async () => {
    const client: ClientProfile = { ...baseClient, isPregnantOrNursing: true };
    const diagnosis = await engine.analyze(client);
    const report = engine.generateFinalReport(client, diagnosis);

    // Expectation: Headline or Summary should explicitly mention Mom's Care / Pregnancy Safety
    expect(report.headline).toContain("Mom's Care");

    // Safety Check: Only Safe treatments included
    expect(report.recommendations.length).toBeGreaterThan(0);
    expect(
      report.recommendations.every((r) => r.treatment.id === 't_ldm'),
    ).toBe(true);
  });

  test('Should generate "Medical Consult" report for Active Infection', async () => {
    const client: ClientProfile = { ...baseClient, activeInfection: true };
    const diagnosis = await engine.analyze(client);
    const report = engine.generateFinalReport(client, diagnosis);

    // Expectation: Report should guide to doctor, not just say 0 treatments
    expect(report.headline).toContain('Medical Consult');
    expect(report.recommendations.length).toBe(0);
    expect(report.summary).toContain('consultation');
  });

  test('Should generate "Recovery Care" report for Roaccutane users', async () => {
    const client: ClientProfile = { ...baseClient, medication: ['Roaccutane'] };
    const diagnosis = await engine.analyze(client);
    const report = engine.generateFinalReport(client, diagnosis);

    expect(report.headline).toContain('Recovery Care');
    // Fraxel (Laser) should be excluded
    expect(
      report.recommendations.every((r) => r.treatment.methodType !== 'Laser'),
    ).toBe(true);
  });
});
