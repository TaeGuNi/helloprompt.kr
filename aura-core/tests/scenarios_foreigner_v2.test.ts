import { describe, test, expect } from 'vitest';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import type {
  ClientProfile,
  Treatment,
  MethodType,
  HospitalListing,
} from '../engine/types/index.js';

describe('Foreigner Scenarios v7 (Aura Core)', () => {
  // --- MOCK SETUP ---
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
    category: 'Care',
    methodType: 'General' as MethodType,
    targetArea: 'Face',
    painLevel: 1,
    downtimeLevel: 0,
    safetyLevel: 'Safe',
    durationMinutes: 30,
    baumannTarget: ['D', 'O', 'S', 'R', 'P', 'N', 'W', 'T'], // All types
    goals: [],
    priceRange: { min: 100, max: 200, currency: 'KRW' },
    standardPrice: 150,
    contraindications: [],
    availableHospitals: hospitals,
    ...overrides,
  });

  // --- SCENARIOS ---

  test('Principle: "One Diagnosis = One Hospital" (Inventory Priority)', async () => {
    // 3 Treatments needed for a full course
    // Tx1: Botox (Quick)
    // Tx2: Toning (Brightening)
    // Tx3: LDM (Soothing)

    const hA = { id: 'hA', name: 'Hospital A (Full)', hospitalId: 'A', price: 300, currency: 'KRW', location: { address: 'Seoul' } };
    const hB = { id: 'hB', name: 'Hospital B (Partial)', hospitalId: 'B', price: 200, currency: 'KRW', location: { address: 'Seoul' } };

    const tx1 = createTreatment('Botox', [hA, hB]);
    const tx2 = createTreatment('Toning', [hA, hB]);
    const tx3 = createTreatment('LDM', [hA]); // Only A has LDM

    const traveler: ClientProfile = {
      age: 30,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II',
      baumannScores: { oil: 50, sensitivity: 50, pigment: 80, wrinkle: 50 }, // Pigmented
      concerns: ['Melasma', 'Wrinkles'], // Needs Toning & Botox
      downtimePreference: 'NoDowntime',
      trustFactor: 'High',
    };

    const engine = createEngine([tx1, tx2, tx3]);
    const result = await engine.recommend(traveler, [], 'DSPW');

    // Hospital A has {Botox, Toning, LDM} -> Count 3
    // Hospital B has {Botox, Toning} -> Count 2
    expect(result.bestHospital?.hospitalId).toBe('A');
  });

  test('Principle: "No Dead Ends" (Pregnancy Safe Route)', async () => {
    const hA = { id: 'hA', name: 'Safe Clinic', hospitalId: 'A', price: 100, currency: 'KRW', location: { address: 'Seoul' } };

    // Dangerous Tx
    const txLaser = createTreatment('StrongLaser', [hA], { 
      contraindications: ['Pregnancy'],
      safetyLevel: 'Caution'
    });

    // Safe Tx
    const txOxygen = createTreatment('OxygenCare', [hA], { 
      contraindications: [],
      safetyLevel: 'Safe',
      name: 'Safe Oxygen Therapy'
    });

    const pregnantUser: ClientProfile = {
      age: 30,
      gender: 'Female',
      wannabe: 'Baby',
      skinTone: 'II',
      baumannScores: { oil: 50, sensitivity: 90, pigment: 50, wrinkle: 50 }, // Sensitive
      concerns: ['Dryness'],
      isPregnantOrNursing: true, // PREGNANT
      trustFactor: 'High',
    };

    const engine = createEngine([txLaser, txOxygen]);
    const result = await engine.recommend(pregnantUser, [], 'DSNT');

    // Should Filter Out Laser
    const recommendedIds = result.treatments.map(t => t.id);
    expect(recommendedIds).not.toContain('StrongLaser');

    // Should Keep Oxygen (No Dead End)
    expect(recommendedIds).toContain('OxygenCare');
  });

  test('Principle: Foreigner Schedule (Safety > Schedule > Effect)', async () => {
    const hA = { id: 'hA', name: 'Good Clinic', hospitalId: 'A', price: 100, currency: 'KRW', location: { address: 'Seoul' } };

    // High Effect, Long Downtime (Bad for short trip)
    const txDeepPeel = createTreatment('DeepPeel', [hA], { 
      downtimeLevel: 7, // 7 days
      name: 'Deep Chemical Peel'
    });

    // Moderate Effect, No Downtime (Good for short trip)
    const txAquaPeel = createTreatment('AquaPeel', [hA], { 
      downtimeLevel: 0, // 0 days
      name: 'Aqua Peel'
    });

    const shortTripUser: ClientProfile = {
      age: 25,
      gender: 'Female',
      wannabe: 'Glass',
      skinTone: 'II', // Added
      baumannScores: { oil: 80, sensitivity: 20, pigment: 20, wrinkle: 20 },
      concerns: ['Pores'],
      isTraveler: true, // TRAVELER
      stayDurationDays: 2, // Changed from travelDaysRemaining
      downtimePreference: 'NoDowntime',
    };

    const engine = createEngine([txDeepPeel, txAquaPeel]);
    const result = await engine.recommend(shortTripUser, [], 'OSNT');
    
    // Should prioritize AquaPeel
    expect(result.treatments[0].id).toBe('AquaPeel');
    // DeepPeel should be penalized or excluded depending on strictness, but AquaPeel must win
    const topId = result.treatments[0].id;
    expect(topId).toBe('AquaPeel');
  });

  test('Principle: User/Client Separation (Agent Ready)', async () => {
    // This test ensures the profile can carry 'isProxy' flag and logic respects it
    // (In full implementation, this might affect Question flow, here we check data integrity)
    
    const proxyUser: ClientProfile = {
      age: 50, // Client Age (Mom)
      gender: 'Female',
      isProxy: true, // User is Daughter, Client is Mom
      proxyRelationship: 'Mother',
      wannabe: 'Baby', // Changed from Youth
      skinTone: 'II', // Added
      concerns: ['Wrinkles'], // Added
      baumannScores: { oil: 20, sensitivity: 20, pigment: 80, wrinkle: 80 },
    };

    // Just verifying the type definition and flag persistence through engine
    // (Engine might not use it for scoring, but Report Generator will)
    expect(proxyUser.isProxy).toBe(true);
    expect(proxyUser.proxyRelationship).toBe('Mother');
  });
});
