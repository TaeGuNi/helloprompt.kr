import { describe, test, expect } from 'vitest';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import type {
  ClientProfile,
  Treatment,
  MethodType,
  HospitalListing,
} from '../engine/types/index.js';

describe('Recommendation Engine - Hospital Selection', () => {
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

  const createTreatment = (id: string, hospitals: HospitalListing[]): Treatment => ({
    id,
    name: id,
    category: 'Laser',
    methodType: 'Laser' as MethodType,
    targetArea: 'Face',
    painLevel: 1,
    downtimeLevel: 0,
    safetyLevel: 'Safe',
    durationMinutes: 30,
    baumannTarget: ['D', 'P'], // Matches client
    goals: [],
    priceRange: { min: 100, max: 200, currency: 'KRW' },
    standardPrice: 150,
    contraindications: [],
    availableHospitals: hospitals,
  });

  test('Should select hospital with highest inventory match', async () => {
    const h1: HospitalListing = { id: 'h1', name: 'Hospital A', hospitalId: 'A', price: 100, currency: 'KRW', location: { address: 'Seoul' } };
    const h2: HospitalListing = { id: 'h2', name: 'Hospital B', hospitalId: 'B', price: 100, currency: 'KRW', location: { address: 'Seoul' } };

    // T1: Available at A and B
    // T2: Available at A
    // T3: Available at A
    const t1 = createTreatment('T1', [h1, h2]);
    const t2 = createTreatment('T2', [h1]);
    const t3 = createTreatment('T3', [h1]);

    const engine = createEngine([t1, t2, t3]);
    const result = await engine.recommend(baseClient, [], 'DSPW'); // High scores for all

    // Verify top 3 are T1, T2, T3 (or subset depending on logic, but here all match)
    expect(result.treatments.length).toBeGreaterThan(0);
    
    // Expect Hospital A (3 matches) over B (1 match)
    expect(result.bestHospital).toBeDefined();
    expect(result.bestHospital?.hospitalId).toBe('A');

    // Verify filtering
    const t1InResult = result.treatments.find(t => t.id === 'T1');
    expect(t1InResult?.availableHospitals?.length).toBe(1);
    expect(t1InResult?.availableHospitals?.[0].hospitalId).toBe('A');
  });

  test('Should select cheapest hospital when inventory matches are equal', async () => {
    const h1: HospitalListing = { id: 'exp', name: 'Expensive', hospitalId: 'EXP', price: 200, currency: 'KRW', location: { address: 'Seoul' } };
    const h2: HospitalListing = { id: 'chp', name: 'Cheap', hospitalId: 'CHP', price: 100, currency: 'KRW', location: { address: 'Seoul' } };

    // Both have T1 and T2
    const t1 = createTreatment('T1', [h1, h2]);
    const t2 = createTreatment('T2', [h1, h2]);

    const engine = createEngine([t1, t2]);
    const result = await engine.recommend(baseClient, [], 'DSPW');

    expect(result.bestHospital?.hospitalId).toBe('CHP');
  });
});
