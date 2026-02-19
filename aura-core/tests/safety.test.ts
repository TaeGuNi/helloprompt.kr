import { describe, test, expect } from 'vitest';
import { SafetyFilter } from '../engine/services/SafetyFilter.js';
import type { ClientProfile, Treatment } from '../engine/types/index.js';

describe('SafetyFilter Logic', () => {
  // Base fixtures
  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 50, sensitivity: 50, pigment: 50, wrinkle: 50 },
    concerns: [],
    painTolerance: 'High',
    downtimePreference: 'LongOK',
  };

  const safeTreatment: Treatment = {
    id: 'SAFE_TX',
    name: 'Safe Tx',
    category: 'Basic',
    methodType: 'Laser',
    targetArea: 'Face',
    painLevel: 1,
    downtimeLevel: 0,
    safetyLevel: 'Safe',
    baumannTarget: [],
    goals: [],
    contraindications: [],
    priceRange: { min: 100, max: 200, currency: 'KRW' },
    durationMinutes: 30,
  };

  const riskyTreatment: Treatment = {
    ...safeTreatment,
    id: 'RISKY_TX',
    safetyLevel: 'Caution',
    downtimeLevel: 3,
    painLevel: 5,
  };

  describe('1. Pregnancy (SAFE_MODE)', () => {
    test('Should allow Safe treatments in SAFE_MODE', () => {
      const result = SafetyFilter.isSafe(safeTreatment, baseClient, [
        'SAFE_MODE',
      ]);
      expect(result).toBe(true);
    });

    test('Should block Caution/Danger treatments in SAFE_MODE', () => {
      const result = SafetyFilter.isSafe(riskyTreatment, baseClient, [
        'SAFE_MODE',
      ]);
      expect(result).toBe(false);
    });
  });

  describe('2. Downtime Constraints', () => {
    test('NO_DOWNTIME should block downtime > 0', () => {
      const t = { ...safeTreatment, downtimeLevel: 1 } as Treatment;
      expect(SafetyFilter.isSafe(t, baseClient, ['NO_DOWNTIME'])).toBe(false);
    });

    test('LOW_DOWNTIME should allow level 1 but block level 2', () => {
      const t1 = { ...safeTreatment, downtimeLevel: 1 } as Treatment;
      const t2 = { ...safeTreatment, downtimeLevel: 2 } as Treatment;
      expect(SafetyFilter.isSafe(t1, baseClient, ['LOW_DOWNTIME'])).toBe(true);
      expect(SafetyFilter.isSafe(t2, baseClient, ['LOW_DOWNTIME'])).toBe(false);
    });

    test('User Preference: NoDowntime should block > 0', () => {
      const client = {
        ...baseClient,
        downtimePreference: 'NoDowntime',
      } as ClientProfile;
      const t = { ...safeTreatment, downtimeLevel: 1 } as Treatment;
      expect(SafetyFilter.isSafe(t, client, [])).toBe(false);
    });
  });

  describe('3. Contraindications (Dark Skin)', () => {
    const darkSkinClient = { ...baseClient, skinTone: 'IV' } as ClientProfile;
    const lightSkinClient = { ...baseClient, skinTone: 'III' } as ClientProfile;
    const sensitiveTx = {
      ...safeTreatment,
      contraindications: ['DarkSkin'],
    } as Treatment;

    test('Should block DarkSkin contraindication for IV/V/VI', () => {
      expect(SafetyFilter.isSafe(sensitiveTx, darkSkinClient, [])).toBe(false);
    });

    test('Should allow for lighter skin types', () => {
      expect(SafetyFilter.isSafe(sensitiveTx, lightSkinClient, [])).toBe(true);
    });
  });

  describe('4. Pain Tolerance', () => {
    test('Low tolerance should block pain > 1', () => {
      const client = { ...baseClient, painTolerance: 'Low' } as ClientProfile;
      const t = { ...safeTreatment, painLevel: 2 } as Treatment;
      expect(SafetyFilter.isSafe(t, client, [])).toBe(false);
    });

    test('Medium tolerance should block pain > 2', () => {
      const client = {
        ...baseClient,
        painTolerance: 'Medium',
      } as ClientProfile;
      const t = { ...safeTreatment, painLevel: 3 } as Treatment;
      expect(SafetyFilter.isSafe(t, client, [])).toBe(false);
    });
  });

  describe('5. Recent History (Intervals)', () => {
    const today = new Date();
    const threeMonthsAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 3,
      today.getDate(),
    );
    const sevenMonthsAgo = new Date(
      today.getFullYear(),
      today.getMonth() - 7,
      today.getDate(),
    );

    const txWithInterval = {
      ...safeTreatment,
      id: 'INTERVAL_TX',
      minIntervalMonths: 6,
    } as Treatment;

    test('Should block if within minIntervalMonths', () => {
      const client = {
        ...baseClient,
        recentTreatments: [
          { treatmentId: 'INTERVAL_TX', date: threeMonthsAgo.toISOString() },
        ],
      } as ClientProfile;
      expect(SafetyFilter.isSafe(txWithInterval, client, [])).toBe(false);
    });

    test('Should allow if outside minIntervalMonths', () => {
      const client = {
        ...baseClient,
        recentTreatments: [
          { treatmentId: 'INTERVAL_TX', date: sevenMonthsAgo.toISOString() },
        ],
      } as ClientProfile;
      expect(SafetyFilter.isSafe(txWithInterval, client, [])).toBe(true);
    });

    test('Should block if date is "Recent"', () => {
      const client = {
        ...baseClient,
        recentTreatments: [{ treatmentId: 'INTERVAL_TX', date: 'Recent' }],
      } as ClientProfile;
      expect(SafetyFilter.isSafe(txWithInterval, client, [])).toBe(false);
    });
  });

  describe('6. Missing Coverage: Infection & Meds & Avoidance', () => {
    test('Should block ALL treatments if Active Infection exists', () => {
      const infectedClient = { ...baseClient, activeInfection: true } as ClientProfile;
      expect(SafetyFilter.isSafe(safeTreatment, infectedClient, [])).toBe(false);
      expect(SafetyFilter.isSafe(riskyTreatment, infectedClient, [])).toBe(false);
    });

    test('Should block Laser/Peel if on Roaccutane', () => {
      const roaccutaneClient = { ...baseClient, medication: ['Roaccutane'] } as ClientProfile;
      const laserTx = { ...safeTreatment, methodType: 'Laser' } as Treatment;
      const peelTx = { ...safeTreatment, methodType: 'Peel' } as Treatment;
      const injectionTx = { ...safeTreatment, methodType: 'Injective' } as Treatment; // Should pass? Logic says only Laser/Peel blocked

      expect(SafetyFilter.isSafe(laserTx, roaccutaneClient, [])).toBe(false);
      expect(SafetyFilter.isSafe(peelTx, roaccutaneClient, [])).toBe(false);
      expect(SafetyFilter.isSafe(injectionTx, roaccutaneClient, [])).toBe(true);
    });

    test('Should block treatments in Avoidance List', () => {
      const avoidClient = { ...baseClient, avoidTreatments: ['Needle'] } as ClientProfile;
      const needleTx = { ...safeTreatment, methodType: 'Needle' } as Treatment;
      const laserTx = { ...safeTreatment, methodType: 'Laser' } as Treatment;

      expect(SafetyFilter.isSafe(needleTx, avoidClient, [])).toBe(false);
      expect(SafetyFilter.isSafe(laserTx, avoidClient, [])).toBe(true);
    });
  });
});
