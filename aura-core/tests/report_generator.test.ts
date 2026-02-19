import { describe, test, expect } from 'vitest';
import { ReportGenerator } from '../engine/services/ReportGenerator.js';
import { DiagnosisResult } from '../engine/types/diagnosis.js';
import { ClientProfile } from '../engine/types/identity.js';
import { Treatment } from '../engine/types/master.js';

describe('ReportGenerator Logic', () => {
  const generator = new ReportGenerator();

  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 50, sensitivity: 50, pigment: 50, wrinkle: 50 },
    concerns: [],
    painTolerance: 'Medium',
    downtimePreference: 'LongOK',
    trustFactor: 'High',
  };

  const baseTreatment: Treatment = {
    id: 'T1',
    name: 'Treatment 1',
    category: 'Laser',
    methodType: 'Laser',
    targetArea: 'Face',
    painLevel: 1,
    downtimeLevel: 0,
    safetyLevel: 'Safe',
    durationMinutes: 30,
    baumannTarget: [],
    goals: [],
    priceRange: { min: 100, max: 200, currency: 'KRW' },
    standardPrice: 150,
    contraindications: [],
  };

  const diagnosis: DiagnosisResult = {
    baumannType: 'OSPW',
    isTrapDetected: false,
    safetyFlags: [],
    scoreBreakdown: {},
    finalRecommendations: [baseTreatment],
  };

  test('Trust score should start at 100 for safe treatments', () => {
    const report = generator.generate(baseClient, diagnosis);
    expect(report.trustScore).toBe(100);
  });

  test('Trust score should NOT decrease cumulatively with multiple risky treatments', () => {
    // New behavior: Score reflects the risk of the options, not the sum of risks
    const riskyTreatment: Treatment = {
      ...baseTreatment,
      safetyLevel: 'Caution',
    };
    const manyRiskyTreatments = Array(10).fill(riskyTreatment);

    const riskyDiagnosis: DiagnosisResult = {
      ...diagnosis,
      finalRecommendations: manyRiskyTreatments,
    };
    const report = generator.generate(baseClient, riskyDiagnosis);

    // Each 'Caution' is -5. Max penalty is 5. Score = 95.
    expect(report.trustScore).toBe(95);
  });

  test('Trust score should default to Low Tolerance (safety) if pain tolerance is missing', () => {
    const painfulTreatment: Treatment = { ...baseTreatment, painLevel: 3 };
    const missingTolClient: ClientProfile = {
      ...baseClient,
      painTolerance: undefined,
    };

    const painfulDiagnosis: DiagnosisResult = {
      ...diagnosis,
      finalRecommendations: [painfulTreatment],
    };
    const report = generator.generate(missingTolClient, painfulDiagnosis);

    // Default Low + Pain 3 = -20 penalty. Score = 80.
    expect(report.trustScore).toBe(80);
  });
});
