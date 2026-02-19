import { describe, test, expect } from 'vitest';
import { BaumannAnalyzer } from '../engine/services/BaumannAnalyzer.js';
import { LifestyleAnalyzer } from '../engine/services/LifestyleAnalyzer.js';
import { FutureSimulator } from '../engine/services/FutureSimulator.js';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import { SafetyFilter } from '../engine/services/SafetyFilter.js';
import { JsonDataProvider } from '../engine/infrastructure/JsonDataProvider.js';
import type { ClientProfile, Treatment } from '../engine/types/index.js';

describe('Coverage & Edge Cases', () => {
  test('[BaumannAnalyzer] Event schedule with dDay >= 7 should not add downtime flags', () => {
    const analyzer = new BaumannAnalyzer();
    const user: ClientProfile = {
      age: 25,
      gender: 'Female',
      eventSchedule: { dDay: 10, type: 'Wedding' },
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
    };
    const { flags } = analyzer.analyze(user);
    expect(flags).not.toContain('NO_DOWNTIME_STRICT');
    expect(flags).not.toContain('LOW_DOWNTIME');
  });

  test('[LifestyleAnalyzer] Good lifestyle should return positive message', () => {
    const analyzer = new LifestyleAnalyzer();
    const user: ClientProfile = {
      age: 25,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
      lifestyle: { sleepHours: 8, waterIntake: 2.0, sunExposure: 'Low' },
    };
    const result = analyzer.analyze(user);
    expect(result).toBe('생활 습관이 아주 훌륭하세요! 이대로만 유지해 주세요.');
  });

  test('[FutureSimulator] No treatments should warn user', () => {
    const simulator = new FutureSimulator();
    const user: ClientProfile = {
      age: 30,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
    };
    const result = simulator.simulate(user, []);
    expect(result).toContain('아직 딱 맞는 방법을 찾지 못했지만');
  });

  test('[RecommendationEngine] Invalid Baumann type should return base score', async () => {
    const dataProvider = new JsonDataProvider();
    const recEngine = new RecommendationEngine(dataProvider);

    const user: ClientProfile = {
      age: 25,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
    };

    const { scores } = await recEngine.recommend(user, [], 'INVALID');

    // If baumann type is invalid, it returns base score (50) immediately, skipping other adjustments.
    expect(scores['LDM']).toBe(50);
  });

  test('[SafetyFilter] V6 Minimum Interval (Weeks) should block treatment', async () => {
    const user: ClientProfile = {
      age: 25,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
      recentTreatments: [
        {
          treatmentId: 'LDM',
          date:
            new Date(Date.now() - 3 * 24 * 60 * 60 * 1000)
              .toISOString()
              .split('T')[0] ?? '2023-01-01', // 3 days ago (fallback to safe string)
          methodType: 'Ultrasound',
        },
      ],
    };

    const dataProvider = new JsonDataProvider();
    const treatments = await dataProvider.getTreatments();
    const ldm = treatments.find((t) => t.id === 'LDM')!;
    // LDM has minIntervalMonths: 0, minimumInterval: 1 (week).
    // 3 days < 1 week -> Should block.

    const isSafe = SafetyFilter.isSafe(ldm, user, []);
    expect(isSafe).toBe(false);
  });

  test('[SafetyFilter] V6 Interval Check with "Recent" date should block', async () => {
    // LDM has minIntervalMonths: 0 (skips legacy check), minimumInterval: 1 (enters V6 check).
    const dataProvider = new JsonDataProvider();
    const treatments = await dataProvider.getTreatments();
    const ldm = treatments.find((t) => t.id === 'LDM')!;

    const user: ClientProfile = {
      age: 25,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
      recentTreatments: [
        {
          treatmentId: 'LDM',
          date: 'Recent',
          methodType: 'Ultrasound',
        },
      ],
    };

    const isSafe = SafetyFilter.isSafe(ldm, user, []);
    expect(isSafe).toBe(false);
  });

  test('[SafetyFilter] Zero minimumInterval should skip V6 check', () => {
    // Custom treatment with 0 interval
    const safeTx: Treatment = {
      id: 'SAFE_TX',
      name: 'Safe Tx',
      category: 'General',
      methodType: 'Other',
      targetArea: 'Face',
      painLevel: 1,
      safetyLevel: 'Safe',
      downtimeLevel: 0,
      minIntervalMonths: 0,
      minimumInterval: 0, // Should skip V6 check
      baumannTarget: [],
      goals: [],
      contraindications: [],
      priceRange: { min: 0, max: 0, currency: 'KRW' },
      durationMinutes: 1,
      availableHospitals: [
        {
          id: 'test-hosp-1',
          name: 'Test Hospital',
          price: 100000,
          currency: 'KRW',
          location: { address: 'Seoul' },
        },
      ],
    };

    const user: ClientProfile = {
      age: 25,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 20, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: [],
      recentTreatments: [
        {
          treatmentId: 'SAFE_TX',
          date: 'Recent',
          methodType: 'Other',
        },
      ],
    };

    const isSafe = SafetyFilter.isSafe(safeTx, user, []);
    expect(isSafe).toBe(true);
  });
});
