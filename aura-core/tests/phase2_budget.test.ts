import { describe, it, expect } from 'vitest';
import { SafetyFilter } from '../engine/services/SafetyFilter.js';
import type { ClientProfile, Treatment } from '../engine/types/index.js';

describe('Phase 2: 4D Filter (Budget)', () => {
  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    skinTone: 'II',
    baumannScores: { oil: 10, sensitivity: 10, pigment: 10, wrinkle: 10 },
    concerns: ['Pores'],
    wannabe: 'Glass',
  };

  const expensiveTx: Treatment = {
    id: 'tx_exp',
    name: 'Expensive Tx',
    category: 'Lifting',
    methodType: 'Ultrasound',
    targetArea: 'Face',
    painLevel: 2,
    safetyLevel: 'Safe',
    downtimeLevel: 1,
    baumannTarget: ['W'],
    contraindications: [],
    goals: ['Contour'],
    priceRange: { min: 1000000, max: 2000000, currency: 'KRW' },
    durationMinutes: 60,
  };

  const cheapTx: Treatment = {
    ...expensiveTx,
    id: 'tx_cheap',
    priceRange: { min: 50000, max: 150000, currency: 'KRW' },
  };

  it('should filter out expensive treatments for Economy budget', () => {
    const client: ClientProfile = { ...baseClient, budgetLevel: 'Economy' };
    
    // Expensive should be unsafe
    expect(SafetyFilter.isSafe(expensiveTx, client, [])).toBe(false);
    
    // Cheap should be safe
    expect(SafetyFilter.isSafe(cheapTx, client, [])).toBe(true);
  });

  it('should allow expensive treatments for Premium budget', () => {
    const client: ClientProfile = { ...baseClient, budgetLevel: 'Premium' };
    
    expect(SafetyFilter.isSafe(expensiveTx, client, [])).toBe(true);
  });
});
