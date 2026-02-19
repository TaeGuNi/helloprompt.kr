import { describe, test, expect } from 'vitest';
import { BaumannAnalyzer } from '../engine/services/BaumannAnalyzer.js';
import type { ClientProfile } from '../engine/types/index.js';

describe('BaumannAnalyzer Logic', () => {
  const baseClient: ClientProfile = {
    age: 25,
    gender: 'Female',
    wannabe: 'Glass',
    skinTone: 'II',
    baumannScores: { oil: 60, sensitivity: 20, pigment: 20, wrinkle: 20 },
    concerns: [],
    trapAnswers: {
      oil_check: false,
      sensitive_check: false,
      wash_tightness: false,
      pore_size: 'Small',
    },
  };

  const analyzer = new BaumannAnalyzer();

  describe('Context Analysis', () => {
    test('Should flag SAFE_MODE for pregnant clients', () => {
      const client = { ...baseClient, isPregnantOrNursing: true };
      const { flags } = analyzer.analyze(client);
      expect(flags).toContain('SAFE_MODE');
    });

    test('Should flag NO_DOWNTIME for flight schedule', () => {
      const client = { ...baseClient, flightSchedule: true };
      const { flags } = analyzer.analyze(client);
      expect(flags).toContain('NO_DOWNTIME');
    });
  });

  describe('Trap Logic', () => {
    test('Trap Check 1: Soobuji (Oily + Oil Check True) -> SOOBUJI_DETECTED & Sensitivity Boost', () => {
      const client = {
        ...baseClient,
        baumannScores: { ...baseClient.baumannScores, oil: 60 },
        trapAnswers: { ...baseClient.trapAnswers!, oil_check: true },
      };

      const { flags, adjustedBaumannScores } = analyzer.analyze(client);

      expect(flags).toContain('SOOBUJI_DETECTED');
      // Base sensitivity 20 + 20 boost = 40
      expect(adjustedBaumannScores.sensitivity).toBe(40);
    });

    test('Trap Check 2: Inconsistency (Oily Score + Tight Wash) -> Tie Breaker Large Pore', () => {
      // Case: Oily Score (>50), Tight after wash (Dry sign), but Large Pores (Oily sign)
      // Result: Trap Detected (complex case), Score stays Oily
      const client: ClientProfile = {
        ...baseClient,
        baumannScores: { ...baseClient.baumannScores, oil: 60 },
        trapAnswers: {
          oil_check: false,
          sensitive_check: false,
          wash_tightness: true, // Dry sign
          pore_size: 'Large', // Oily sign (Tie Breaker)
        },
      };

      const { isTrapDetected, adjustedBaumannScores } =
        analyzer.analyze(client);

      expect(isTrapDetected).toBe(true);
      expect(adjustedBaumannScores.oil).toBe(60); // Unchanged
    });

    test('Trap Check 2: Inconsistency (Oily Score + Tight Wash) -> Tie Breaker Small Pore', () => {
      // Case: Oily Score (>50), Tight after wash (Dry sign), and Small Pores (Dry sign)
      // Result: Not a trap (just Dry disguised), Score reduced
      const client: ClientProfile = {
        ...baseClient,
        baumannScores: { ...baseClient.baumannScores, oil: 55 },
        trapAnswers: {
          oil_check: false,
          sensitive_check: false,
          wash_tightness: true, // Dry sign
          pore_size: 'Small', // Dry sign (Tie Breaker)
        },
      };

      const { isTrapDetected, adjustedBaumannScores } =
        analyzer.analyze(client);

      expect(isTrapDetected).toBe(false);
      expect(adjustedBaumannScores.oil).toBe(45); // 55 - 10 = 45
    });
  });
});
