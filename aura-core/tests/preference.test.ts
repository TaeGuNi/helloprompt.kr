import { describe, test, expect } from 'vitest';
import { SkinnEngine } from '../engine/CoreLogic.js';
import { JsonDataProvider } from '../engine/infrastructure/JsonDataProvider.js';
import type { ClientProfile } from '../engine/types/index.js';

describe('User Preferences & Psychology', () => {
  const dataProvider = new JsonDataProvider();
  const engine = new SkinnEngine(dataProvider);

  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    wannabe: 'Flawless',
    skinTone: 'II',
    baumannScores: { oil: 50, sensitivity: 20, pigment: 80, wrinkle: 50 }, // ORPW
    concerns: ['Pores', 'Melasma'],
    painTolerance: 'Medium',
    downtimePreference: 'LongOK',
  };

  test('[P-1] Downtime Preference (No Downtime)', async () => {
    const client: ClientProfile = {
      ...baseClient,
      downtimePreference: 'NoDowntime',
    };
    const res = await engine.analyze(client);

    // Fraxel (Level 3), Potenza (Level 2), Rejuran (Level 2) should be excluded
    const hasDowntime = res.finalRecommendations.some(
      (t) => t.downtimeLevel > 0,
    );
    expect(hasDowntime).toBe(false);

    // Should recommend Toning, LDM, etc.
    expect(
      res.finalRecommendations.some((t) => t.name.includes('Toning')),
    ).toBe(true);
  });

  test('[P-2] Downtime Preference (Short OK)', async () => {
    const client: ClientProfile = {
      ...baseClient,
      downtimePreference: 'Short',
    };
    const res = await engine.analyze(client);

    // Allow Level 1 (InMode, Pico), Exclude Level 2, 3 (Fraxel, Potenza)
    const hasHighDowntime = res.finalRecommendations.some(
      (t) => t.downtimeLevel > 1,
    );
    expect(hasHighDowntime).toBe(false);
  });

  test('[P-3] Avoid Treatments (Keywords)', async () => {
    const client: ClientProfile = {
      ...baseClient,
      avoidTreatments: ['Laser'], // Avoid all lasers
    };
    const res = await engine.analyze(client);

    const hasLaser = res.finalRecommendations.some(
      (t) => t.category.includes('Laser') || t.name.includes('Laser'),
    );
    expect(hasLaser).toBe(false);
  });

  test('[P-4] Pain Tolerance (Low)', async () => {
    const client: ClientProfile = {
      ...baseClient,
      painTolerance: 'Low', // Was High Sensitivity -> Low Tolerance
    };
    const res = await engine.analyze(client);

    // Fraxel (Pain 3), Ulthera (Pain 2), Potenza (Pain 2), Rejuran (Pain 2) should be excluded
    // Allowed: LDM, Toning, Pico(1), InMode(1)

    const hasHighPain = res.finalRecommendations.some(
      (t) => (t.painLevel ?? 0) > 1,
    );
    expect(hasHighPain).toBe(false);
  });

  test('[P-5] Pain Tolerance (Medium)', async () => {
    const client: ClientProfile = {
      ...baseClient,
      painTolerance: 'Medium', // Was Medium Sensitivity -> Medium Tolerance
    };
    const res = await engine.analyze(client);

    // Fraxel (Pain 3) excluded. Potenza (2), Rejuran (2) Allowed.
    const hasExtremePain = res.finalRecommendations.some(
      (t) => (t.painLevel ?? 0) > 2,
    );
    expect(hasExtremePain).toBe(false);

    // Should allow Potenza if score is high
    // (Assuming Potenza matches ORPW user)
  });
});
