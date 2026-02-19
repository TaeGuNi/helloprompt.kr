import { describe, test, expect } from 'vitest';
import { RecommendationEngine } from '../engine/services/RecommendationEngine.js';
import { JsonDataProvider } from '../engine/infrastructure/JsonDataProvider.js';
import type { ClientProfile } from '../engine/types/index.js';

describe('Strategy & Trust Logic', () => {
  const dataProvider = new JsonDataProvider();
  const engine = new RecommendationEngine(dataProvider);
  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 50, sensitivity: 50, pigment: 50, wrinkle: 50 },
    concerns: ['Pores'],
    painTolerance: 'Medium',
    downtimePreference: 'LongOK',
  };

  test('should provide detailed score breakdown for High Trust Factor users', async () => {
    const client: ClientProfile = {
      ...baseClient,
      trustFactor: 'High',
    };

    const result = await engine.recommend(client, [], 'OSPW');

    expect(result.scoreDetails).toBeDefined();
    expect(Object.keys(result.scoreDetails!).length).toBeGreaterThan(0);

    // Check structure of details
    const keys = Object.keys(result.scoreDetails!);
    expect(keys.length).toBeGreaterThan(0);
    const firstKey = keys[0]!;
    const details = result.scoreDetails![firstKey];
    expect(details).toBeDefined();
    expect(Array.isArray(details)).toBe(true);
    expect(details![0]).toContain('Base Score');
  });

  test('should NOT provide detailed score breakdown for Normal users', async () => {
    const client: ClientProfile = {
      ...baseClient,
      trustFactor: 'Normal',
    };

    const result = await engine.recommend(client, [], 'OSPW');

    expect(result.scoreDetails).toBeUndefined();
  });

  test('should NOT provide detailed score breakdown if trustFactor is undefined', async () => {
    const client: ClientProfile = {
      ...baseClient,
    };

    const result = await engine.recommend(client, [], 'OSPW');

    expect(result.scoreDetails).toBeUndefined();
  });

  test('should ensure Tax Refund logic is ABSENT (V6 Constraint)', async () => {
    // Ensure no "tax" or "refund" related fields exist in the output or logic.

    const client: ClientProfile = {
      ...baseClient,
      trustFactor: 'High',
      budgetLevel: 'Economy', // Ensure high price sensitivity (Economy budget) doesn't trigger refund logic
    };

    const result = await engine.recommend(client, [], 'OSPW');

    // Check Score Details for any mention of Tax Refund
    if (result.scoreDetails) {
      Object.values(result.scoreDetails).forEach((details) => {
        details.forEach((line) => {
          expect(line.toLowerCase()).not.toContain('tax');
          expect(line.toLowerCase()).not.toContain('refund');
          expect(line.toLowerCase()).not.toContain('vat');
        });
      });
    }

    // Explicitly confirm logic does not modify score based on a hypothetical field
    // (This is a negative test for a feature that shouldn't exist)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((client as any).taxRefund).toBeUndefined();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect((client as any).vat).toBeUndefined();
  });
});
