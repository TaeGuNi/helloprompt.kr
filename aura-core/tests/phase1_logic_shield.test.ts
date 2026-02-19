import { describe, test, expect, vi } from 'vitest';
import { BaumannAnalyzer } from '../engine/services/BaumannAnalyzer.js';
import type { ClientProfile } from '../engine/types/index.js';

describe('Phase 1: Logic Shield (UX Redirection)', () => {
  const analyzer = new BaumannAnalyzer();

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

  test('Should detect Pregnancy and set SHIELD_PREGNANCY flag', () => {
    const client: ClientProfile = { ...baseClient, isPregnantOrNursing: true };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('SHIELD_PREGNANCY');
    expect(result.flags).toContain('SAFE_MODE');
    expect(result.flags).not.toContain('SAFE_PASS');
  });

  test('Should detect Roaccutane medication and set SHIELD_MEDICATION flag', () => {
    const client: ClientProfile = { ...baseClient, medication: ['Roaccutane'] };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('SHIELD_MEDICATION');
    expect(result.flags).not.toContain('SAFE_PASS');
  });

  test('Should detect Active Infection and set SHIELD_INFECTION flag', () => {
    const client: ClientProfile = { ...baseClient, activeInfection: true };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('SHIELD_INFECTION');
    expect(result.flags).not.toContain('SAFE_PASS');
  });

  test('Should allow normal flow (SAFE_PASS) for healthy client', () => {
    const client: ClientProfile = { ...baseClient };
    const result = analyzer.analyze(client);
    expect(result.flags).not.toContain('SHIELD_PREGNANCY');
    expect(result.flags).not.toContain('SHIELD_MEDICATION');
    expect(result.flags).not.toContain('SHIELD_INFECTION');
    expect(result.flags).toContain('SAFE_PASS');
  });

  test('Should handle MULTIPLE shields (Pregnancy + Infection)', () => {
    const client: ClientProfile = {
      ...baseClient,
      isPregnantOrNursing: true,
      activeInfection: true,
    };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('SHIELD_PREGNANCY');
    expect(result.flags).toContain('SHIELD_INFECTION');
    // Both flags present means double caution.
    expect(result.flags).not.toContain('SAFE_PASS');
  });

  test('Should detect NO_DOWNTIME if flight schedule exists', () => {
    const client: ClientProfile = {
      ...baseClient,
      flightSchedule: true,
    };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('NO_DOWNTIME');
  });

  test('Should detect LOW_PAIN_TOLERANCE', () => {
    const client: ClientProfile = {
      ...baseClient,
      painTolerance: 'Low',
    };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('LOW_PAIN_TOLERANCE');
  });

  test('Should detect BUDGET_CONSTRAINED', () => {
    const client: ClientProfile = {
      ...baseClient,
      budgetLevel: 'Economy',
    };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('BUDGET_CONSTRAINED');
  });

  test('Should detect UV_SENSITIVE in Summer (July)', () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date('2026-07-15')); // Summer

    const client: ClientProfile = { ...baseClient };
    const result = analyzer.analyze(client);
    expect(result.flags).toContain('UV_SENSITIVE');

    vi.useRealTimers();
  });
});
