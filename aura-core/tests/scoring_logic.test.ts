/* eslint-disable @typescript-eslint/no-explicit-any */
import { describe, test, expect, vi, beforeEach } from 'vitest';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import { IDataProvider } from '../engine/interfaces/IDataProvider.js';
import type { Treatment } from '../engine/types/index.js';

// Mock Data Provider
const mockDataProvider: IDataProvider = {
  connect: vi.fn(),
  getTreatments: vi.fn().mockResolvedValue([]),
};

// Helper to create dummy treatment
function createMockTreatment(overrides?: Partial<Treatment>): Treatment {
  return {
    id: 'test-treatment',
    name: 'Test Treatment',
    category: 'Laser',
    methodType: 'Laser',
    targetArea: 'Face',
    painLevel: 1,
    safetyLevel: 'Safe',
    downtimeLevel: 0,
    baumannTarget: [],
    contraindications: [],
    goals: ['AntiAging'],
    priceRange: { min: 100, max: 200, currency: 'KRW' },
    standardPrice: 150,
    durationMinutes: 30,
    ...overrides,
  };
}

describe('RecommendationEngine Scoring Logic (Whitebox)', () => {
  let engine: RecommendationEngine;

  beforeEach(() => {
    engine = new RecommendationEngine(mockDataProvider);
  });

  test('should apply Goal Match bonus correctly', () => {
    const treatment = createMockTreatment({ goals: ['AntiAging'] });

    // Use 'as any' to access private method for whitebox testing
    // Also ensuring client profile has minimal required fields to avoid TS errors
    const result1 = (engine as any).calculateScore(
      treatment,
      { wannabe: 'AntiAging' },
      [],
      [],
    );
    const result2 = (engine as any).calculateScore(
      treatment,
      { wannabe: 'Glass' },
      [],
      [],
    );

    // 15 points difference expected
    expect(result1.score).toBeGreaterThan(result2.score);
    expect(result1.details).toContainEqual(
      expect.stringContaining('Goal Match'),
    );
  });

  test('should apply Pain Tolerance penalty/bonus correctly', () => {
    const treatment = createMockTreatment({ painLevel: 3 });

    const lowTol = (engine as any).calculateScore(
      treatment,
      { painTolerance: 'Low' },
      [],
      [],
    );
    const highTol = (engine as any).calculateScore(
      treatment,
      { painTolerance: 'High' },
      [],
      [],
    );

    // Low tolerance gets -20 penalty, High gets +5 bonus -> 25 points diff
    expect(highTol.score - lowTol.score).toBe(25);
  });
});
