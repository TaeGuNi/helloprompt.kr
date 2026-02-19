import { describe, test, expect } from 'vitest';
import { ReportGenerator } from '../engine/services/ReportGenerator.js';
import { DiagnosisResult } from '../engine/types/diagnosis.js';
import { ClientProfile } from '../engine/types/identity.js';
import { Treatment } from '../engine/types/master.js';

// [BDD] Phase 5: Storage Strategy (Principle 5: Fun vs Medical) & Foreigner Focus

describe('Phase 5: Storage Strategy & Record Types', () => {
  // Use real service or mock if not available.
  // Ideally, we test the logic.
  const generator = new ReportGenerator();

  const baseClient: ClientProfile = {
    id: 'user_123',
    age: 25,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 80, sensitivity: 20, pigment: 20, wrinkle: 10 }, // ORNT
    concerns: ['Pores'],
    painTolerance: 'High',
    downtimePreference: 'NoDowntime',
    trustFactor: 'High',
  };

  const treatment: Treatment = {
    id: 'Tx_AquaPeel',
    name: 'Aqua Peel',
    category: 'Care',
    methodType: 'Peel',
    targetArea: 'Face',
    painLevel: 0,
    downtimeLevel: 0,
    safetyLevel: 'Safe',
    durationMinutes: 30,
    baumannTarget: ['O', 'R'],
    goals: ['Glass'],
    priceRange: { min: 50, max: 80, currency: 'USD' },
    standardPrice: 70,
    contraindications: [],
  };

  const diagnosis: DiagnosisResult = {
    baumannType: 'ORNT',
    isTrapDetected: false,
    safetyFlags: [],
    scoreBreakdown: { 'Tx_AquaPeel': 90 },
    finalRecommendations: [treatment],
  };

  test('Principle 5: Generate "Fun Record" (Viral, Shareable, No Jargon)', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const funRecord = (generator as any).generateFunRecord(baseClient, diagnosis);

    expect(funRecord.type).toBe('FunRecord');
    expect(funRecord.title).toContain('Skin MBTI'); 
    expect(funRecord.medicalDetails).toBeUndefined(); // No sensitive data
    expect(funRecord.shareableImageText).toBeDefined(); 
    expect(funRecord.baumannType).toBe('ORNT');
  });

  test('Principle 5: Generate "Medical Record" (Detailed, Encrypted, for Hospital)', () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const medicalRecord = (generator as any).generateMedicalRecord(baseClient, diagnosis);

    expect(medicalRecord.type).toBe('MedicalRecord');
    expect(medicalRecord.patientId).toBe('user_123');
    expect(medicalRecord.clinicalNotes).toBeDefined();
    expect(medicalRecord.contraindications).toBeDefined();
    expect(medicalRecord.treatmentPlan[0].id).toBe('Tx_AquaPeel');
  });

  test('Principle 4: Foreigner Scenario - 1 Diagnosis = 1 Hospital', () => {
    // Focus on "Foreign Travelers" - should map to single reliable hospital if possible
    // and include travel-friendly advice.
    
    const travelerClient: ClientProfile = {
      ...baseClient,
      isTraveler: true, 
      stayDurationDays: 3,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const report = (generator as any).generate(travelerClient, diagnosis);

    // Should mention travel/recovery
    expect(report.summary).toMatch(/travel|trip|stay/i);
    // Should prioritize downtime info
    expect(report.recommendations[0].downtimeText).toBeDefined();
    
    // Check if it suggests "1 Hospital" logic (mock check)
    if (report.hospitalMapping) {
        expect(report.hospitalMapping.strategy).toBe('OneStop');
    }
  });
});
