import { describe, it, expect } from 'vitest';
import { BaumannAnalyzer } from '../engine/services/BaumannAnalyzer.js';
import type { ClientProfile } from '../engine/types/index.js';

describe('Scenario: Foreign Traveler (Principles 7 & 8) - Integrated', () => {
  const analyzer = new BaumannAnalyzer();

  const baseClient: ClientProfile = {
    age: 30,
    gender: 'Female',
    skinTone: 'III',
    baumannScores: { oil: 30, sensitivity: 30, pigment: 30, wrinkle: 30 },
    wannabe: 'Glass',
    concerns: [],
  };

  it('should detect Proxy Mode (Guide booking for Tourist)', () => {
    const client: ClientProfile = {
      ...baseClient,
      isProxy: true,
      language: 'en',
    };

    const { flags } = analyzer.analyze(client);
    expect(flags).toContain('PROXY_MODE');
    expect(flags).toContain('FOREIGNER_MODE');
  });

  it('should flag FLIGHT_RISK for travelers with flight schedules', () => {
    const client: ClientProfile = {
      ...baseClient,
      flightSchedule: true,
      language: 'zh',
    };

    const { flags } = analyzer.analyze(client);
    expect(flags).toContain('FLIGHT_RISK');
    expect(flags).toContain('NO_DOWNTIME');
    expect(flags).toContain('FOREIGNER_MODE');
  });

  it('should combine Proxy + Flight Risk for Guide bringing a Tourist group', () => {
    const client: ClientProfile = {
      ...baseClient,
      gender: 'Male',
      isProxy: true,
      flightSchedule: true,
      language: 'ja',
    };

    const { flags } = analyzer.analyze(client);
    expect(flags).toContain('PROXY_MODE');
    expect(flags).toContain('FLIGHT_RISK');
    expect(flags).toContain('FOREIGNER_MODE');
  });

  it('should NOT flag local users without special conditions', () => {
    const client: ClientProfile = {
      ...baseClient,
      language: 'ko',
    };

    const { flags } = analyzer.analyze(client);
    expect(flags).not.toContain('PROXY_MODE');
    expect(flags).not.toContain('FLIGHT_RISK');
    expect(flags).not.toContain('FOREIGNER_MODE');
  });
});
