import { describe, test, expect } from 'vitest';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import { JsonDataProvider } from '../engine/infrastructure/JsonDataProvider.js';
import type {
  ClientProfile,
  Treatment,
  MethodType,
} from '../engine/types/index.js';

describe('Recommendation Engine Logic', () => {
  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 50, sensitivity: 50, pigment: 50, wrinkle: 50 },
    concerns: ['Melasma'],
    painTolerance: 'Medium',
    downtimePreference: 'LongOK',
    trustFactor: 'High',
  };

  const createEngine = (treatments: Treatment[]) => {
    return new RecommendationEngine({
      getTreatments: async () => treatments,
      getRawData: async () => ({}),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
  };

  test('Should apply SOOBUJI_DETECTED bonus (Legacy Check)', async () => {
    const realProvider = new JsonDataProvider();
    const realEngine = new RecommendationEngine(realProvider);
    const result = await realEngine.recommend(
      baseClient,
      ['SOOBUJI_DETECTED'],
      'OSPW',
    );
    const rejuranScore = result.scores['REJURAN'] || 0;
    expect(rejuranScore).toBeGreaterThanOrEqual(120);
  });

  test('Should filter out High Pain treatments for Low Tolerance users', async () => {
    const highPainTreatment: Treatment = {
      id: 'HIGH_PAIN',
      name: 'Ouch',
      category: 'Laser',
      methodType: 'Laser' as MethodType,
      targetArea: 'Face',
      painLevel: 3,
      downtimeLevel: 2,
      safetyLevel: 'Safe',
      durationMinutes: 30,
      baumannTarget: ['D', 'P'],
      goals: [],
      priceRange: { min: 100, max: 200, currency: 'KRW' },
      standardPrice: 150,
      contraindications: [],
    };

    const engine = createEngine([highPainTreatment]);
    const sensitiveClient = { ...baseClient, painTolerance: 'Low' as const };

    const result = await engine.recommend(sensitiveClient, [], 'DSPW');
    expect(result.treatments.find((t) => t.id === 'HIGH_PAIN')).toBeUndefined();
  });

  test('Should boost High Pain for High Tolerance users', async () => {
    const highPainTreatment: Treatment = {
      id: 'HIGH_PAIN',
      name: 'Ouch',
      category: 'Laser',
      methodType: 'Laser' as MethodType,
      targetArea: 'Face',
      painLevel: 3,
      downtimeLevel: 2,
      safetyLevel: 'Safe',
      durationMinutes: 30,
      baumannTarget: ['D', 'P'],
      goals: [],
      priceRange: { min: 100, max: 200, currency: 'KRW' },
      standardPrice: 150,
      contraindications: [],
    };

    const engine = createEngine([highPainTreatment]);
    const toughClient = { ...baseClient, painTolerance: 'High' as const };

    const result = await engine.recommend(toughClient, [], 'DSPW');

    // Check if it exists first
    const treatment = result.treatments.find((t) => t.id === 'HIGH_PAIN');
    expect(treatment).toBeDefined();

    const details = result.scoreDetails?.['HIGH_PAIN'] || [];
    expect(details.some((d) => d.includes('Pain Bonus'))).toBe(true);
  });

  test('Should apply Habit Bonus if method matches recent treatments', async () => {
    const safeTreatment: Treatment = {
      id: 'SAFE_LASER',
      name: 'Safe',
      category: 'Laser',
      methodType: 'Laser' as MethodType,
      targetArea: 'Face',
      painLevel: 1,
      downtimeLevel: 0,
      safetyLevel: 'Safe',
      durationMinutes: 30,
      baumannTarget: ['D', 'P'],
      goals: [],
      priceRange: { min: 100, max: 200, currency: 'KRW' },
      standardPrice: 150,
      contraindications: [],
    };

    const engine = createEngine([safeTreatment]);
    const loyalClient: ClientProfile = {
      ...baseClient,
      recentTreatments: [
        {
          methodType: 'Laser' as MethodType,
          date: '2023-01-01',
          treatmentId: 'OLD',
        },
      ],
    };

    const result = await engine.recommend(loyalClient, [], 'DSPW');
    const details = result.scoreDetails?.['SAFE_LASER'] || [];
    expect(details.some((d) => d.includes('Habit Bonus'))).toBe(true);
  });

  test('Should apply Rational Trust (Price Match) Bonus', async () => {
    const dealTreatment: Treatment = {
      id: 'DEAL',
      name: 'Deal',
      category: 'Laser',
      methodType: 'Laser' as MethodType,
      targetArea: 'Face',
      painLevel: 1,
      downtimeLevel: 0,
      safetyLevel: 'Safe',
      durationMinutes: 30,
      baumannTarget: ['D', 'P'],
      goals: [],
      priceRange: { min: 90000, max: 120000, currency: 'KRW' },
      standardPrice: 100000, // 10% saving
      contraindications: [],
    };

    const engine = createEngine([dealTreatment]);
    const result = await engine.recommend(baseClient, [], 'DSPW');

    const details = result.scoreDetails?.['DEAL'] || [];
    expect(details.some((d) => d.includes('Rational Trust'))).toBe(true);
  });
});
