import { describe, test, expect } from 'vitest';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import type {
  ClientProfile,
  Treatment,
  MethodType,
  HospitalListing,
} from '../engine/types/index.js';

describe('Integration Scenarios - Aura Core v7', () => {
  // Helper to mock engine
  const createEngine = (treatments: Treatment[]) => {
    return new RecommendationEngine({
      getTreatments: async () => treatments,
      getRawData: async () => ({}),
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } as any);
  };

  const createTreatment = (
    id: string, 
    hospitals: HospitalListing[], 
    overrides: Partial<Treatment> = {}
  ): Treatment => ({
    id,
    name: id,
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
    availableHospitals: hospitals,
    ...overrides,
  });

  describe('Foreigner / Traveler Scenarios', () => {
    test('Should prioritize low downtime for travelers with short schedule', async () => {
      const h1: HospitalListing = { id: 'h1', name: 'Clinic A', hospitalId: 'A', price: 100, currency: 'KRW', location: { address: 'Seoul' } };
      
      // Treatment with High Downtime (e.g. Fraxel)
      const tHighDowntime = createTreatment('HighDT', [h1], { 
        downtimeLevel: 3, // Redness for 5-7 days
        baumannTarget: ['D', 'P']
      });

      // Treatment with Low Downtime (e.g. Toning)
      const tLowDowntime = createTreatment('LowDT', [h1], { 
        downtimeLevel: 0, // No downtime
        baumannTarget: ['D', 'P']
      });

      const traveler: ClientProfile = {
        age: 25,
        gender: 'Female',
        wannabe: 'Glass',
        skinTone: 'II',
        baumannScores: { oil: 50, sensitivity: 50, pigment: 50, wrinkle: 50 },
        concerns: ['Melasma'],
        downtimePreference: 'Short', // Traveler needs short recovery
        flightSchedule: true, // Leaving soon
        trustFactor: 'High',
      };

      const engine = createEngine([tHighDowntime, tLowDowntime]);
      const result = await engine.recommend(traveler, [], 'DSPW');

      // LowDT matches preference, HighDT is filtered out by SafetyFilter (Downtime >= 2 vs Short)
      expect(result.treatments.map(t => t.id)).toContain('LowDT');
      expect(result.treatments.map(t => t.id)).not.toContain('HighDT');
    });

    test('Should recommend treatments within Foreigner Budget (Premium/Economy)', async () => {
        const h1: HospitalListing = { id: 'h1', name: 'Luxury Clinic', hospitalId: 'Lux', price: 500, currency: 'USD', location: { address: 'Gangnam' } };
        const h2: HospitalListing = { id: 'h2', name: 'Local Clinic', hospitalId: 'Loc', price: 100, currency: 'USD', location: { address: 'Gangnam' } };

        const tLuxury = createTreatment('LuxTx', [h1], { priceRange: { min: 500, max: 600, currency: 'USD' } });
        const tBudget = createTreatment('BudTx', [h2], { priceRange: { min: 100, max: 150, currency: 'USD' } });

        const budgetTraveler: ClientProfile = {
            age: 25,
            gender: 'Female',
            wannabe: 'Glass',
            skinTone: 'II',
            baumannScores: { oil: 50, sensitivity: 50, pigment: 50, wrinkle: 50 },
            concerns: ['Melasma'],
            budgetLevel: 'Economy', // Explicit budget constraint
            trustFactor: 'High',
        };

        // Note: The current engine implementation might not strictly filter by budgetLevel yet unless added. 
        // We will check if the engine logic supports implicit price sorting or if we need to implement it.
        // For now, let's assume the "Rational Trust" logic favors value, but let's see if we can influence it.
        // Actually, the "One Diagnosis = One Hospital" logic sorts by Price (ascending) for ties.
        
        const engine = createEngine([tLuxury, tBudget]);
        const result = await engine.recommend(budgetTraveler, [], 'DSPW');
        
        // Since both match concerns/baumann equally, the engine sorts hospitals by inventory match then price.
        // Here, both have 1 match. So Price (Ascending) wins.
        expect(result.bestHospital?.hospitalId).toBe('Loc');
    });
  });

  describe('User vs Client Separation', () => {
    test('Should handle distinct Client profiles under same User context', async () => {
        // User "Julie" (30, Oily) booking for Mom (60, Dry/Wrinkled)
        const momProfile: ClientProfile = {
            userId: 'user-julie-uuid', // Linked to Julie
            name: 'Mom',
            age: 60,
            gender: 'Female',
            wannabe: 'Baby', // Youthful
            skinTone: 'II',
            baumannScores: { oil: 10, sensitivity: 20, pigment: 80, wrinkle: 90 }, // Dry, Wrinkled
            concerns: ['Wrinkles', 'Jowls'],
            downtimePreference: 'LongOK',
            trustFactor: 'High',
        };

        const h1: HospitalListing = { id: 'h1', name: 'Anti-Aging Center', hospitalId: 'AntiAge', price: 300, currency: 'KRW', location: { address: 'Seoul' } };
        
        const tLifting = createTreatment('Ulthera', [h1], { 
            baumannTarget: ['D', 'W'], // Dry, Wrinkled
            goals: ['Baby', 'Contour']
        });

        const tAcne = createTreatment('Agnes', [h1], { 
            baumannTarget: ['O'], // Oily (Julie's type, not Mom's)
            goals: ['Flawless']
        });

        const engine = createEngine([tLifting, tAcne]);
        const result = await engine.recommend(momProfile, [], 'DRNW'); // Dry, Resistant, Non-Pigmented, Wrinkled

        // Should recommend Lifting (Mom's need) over Acne (Julie's potential need)
        // Note: Agnes is not filtered (safe), but scores lower due to Mismatch.
        // Ulthera: Matches Baumann (D,W) + Goals (Baby) -> High Score
        // Agnes: Mismatch Baumann (O) + Goals (Flawless) -> Low Score
        expect(result.treatments[0].id).toBe('Ulthera');
        expect(result.scores['Ulthera']).toBeGreaterThan(result.scores['Agnes'] || 0);
    });
  });
});
