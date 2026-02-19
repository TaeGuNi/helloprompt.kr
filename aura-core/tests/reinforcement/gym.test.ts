import { describe, it, expect } from 'vitest';
import { EngineFactory } from '../../engine/EngineFactory.js';
import type { ClientProfile } from '../../engine/types/index.js';

describe('BDD Gym (Reinforcement Learning) - Precision Strike', () => {
  const engine = EngineFactory.create();
  const ITERATIONS = 100; // Increased for Precision Strike

  // Simple Random Client Generator
  const generateRandomClient = (i: number): ClientProfile => ({
    name: `SimUser_${i}`,
    age: 20 + Math.floor(Math.random() * 40),
    gender: Math.random() > 0.5 ? 'Female' : 'Male',
    skinTone: 'II', // Default for test
    isPregnantOrNursing: Math.random() < 0.1, // 10% chance
    medication: Math.random() < 0.1 ? ['Roaccutane'] : [],
    activeInfection: Math.random() < 0.05,
    baumannScores: {
      oil: Math.random() * 40,
      sensitivity: Math.random() * 40,
      pigment: Math.random() * 40,
      wrinkle: Math.random() * 40,
    },
    lifestyle: {
      sleepHours: Math.random() * 8,
      waterIntake: Math.random() * 2000,
      sunExposure: Math.random() > 0.5 ? 'High' : 'Low',
    },
    concerns: ['Pores', 'Acne'], // Simplified
    budgetLevel: Math.random() > 0.7 ? 'Economy' : 'Standard', // 30% Economy
    recentTreatments: [],
    downtimePreference: Math.random() > 0.5 ? 'NoDowntime' : 'Short',
    painTolerance: Math.random() > 0.5 ? 'Low' : 'Medium',
    wannabe: 'Glass', // Required
  });

  it(`should survive ${ITERATIONS} random simulations with Precision Checks`, async () => {
    let safetyTriggered = 0;
    let successfulRecs = 0;
    let painCompliance = 0;
    let budgetCompliance = 0;

    console.log(`\n🏋️‍♂️ Starting BDD Gym Session (${ITERATIONS} reps)...`);

    for (let i = 0; i < ITERATIONS; i++) {
      const client = generateRandomClient(i);
      const result = await engine.analyze(client);

      // Validation
      expect(result).toBeDefined();
      expect(result.safetyFlags).toBeDefined();

      // Check Logic Shield consistency
      if (client.isPregnantOrNursing) {
        expect(result.safetyFlags.includes('SHIELD_PREGNANCY')).toBe(true);
        safetyTriggered++;
      } else if (client.medication && client.medication.includes('Roaccutane')) {
        expect(result.safetyFlags.includes('SHIELD_MEDICATION')).toBe(true);
        safetyTriggered++;
      } else if (client.activeInfection) {
        expect(result.safetyFlags.includes('SHIELD_INFECTION')).toBe(true);
        safetyTriggered++;
      } else {
        // Normal path checks
        successfulRecs++;

        // Precision Check 1: Pain Tolerance
        if (client.painTolerance === 'Low') {
            const highPainTreatments = result.finalRecommendations.filter(r => r.painLevel > 1);
            expect(highPainTreatments.length).toBe(0);
            if (highPainTreatments.length === 0) painCompliance++;
        } else {
            painCompliance++; // Not applicable, count as compliant
        }

        // Precision Check 2: Budget (Economy)
        if (client.budgetLevel === 'Economy') {
             // Assuming Economy limit is 300,000 KRW (approx check based on SafetyFilter)
             const expensive = result.finalRecommendations.filter(r => (r.priceRange?.min || 0) > 300000);
             expect(expensive.length).toBe(0);
             if (expensive.length === 0) budgetCompliance++;
        } else {
            budgetCompliance++;
        }
      }
    }

    console.log(`✅ Gym Session Complete.`);
    console.log(`   - Safety Triggers: ${safetyTriggered}`);
    console.log(`   - Successful Recs: ${successfulRecs}`);
    console.log(`   - Pain Compliance: ${painCompliance}`);
    console.log(`   - Budget Compliance: ${budgetCompliance}`);
    
    // We expect the logic to hold up (no crashes, correct flags)
    expect(true).toBe(true);
  });
});
