import { describe, it, expect } from 'vitest';
import type { ClientProfile } from '../engine/types/index.js';

// [BDD] Foreigner Scenarios & User/Client Separation
// This test defines the expected behavior for foreign travelers and proxy booking scenarios.

describe('Scenario: Foreign Traveler (Principles 7 & 8)', () => {

  // Mock Logic for Foreigner Analysis (to be implemented in actual Service)
  const analyzeForeigner = (client: ClientProfile) => {
    const flags: string[] = [];
    
    // Principle: Foreigner Scenarios (Flight Risk)
    if (client.flightSchedule) {
       // Assuming flightSchedule could be boolean or object in future, 
       // here we simulate "days until flight" check if it were available
       // For now, based on Phase 1 logic:
       flags.push('NO_DOWNTIME');
       flags.push('FLIGHT_RISK'); 
    }

    // Principle: User/Client Separation
    if (client.isProxy) {
      flags.push('PROXY_MODE'); // User is guiding the Client
    }

    // Language Check
    if (client.language && client.language !== 'ko') {
      flags.push('FOREIGNER_MODE');
    }

    return { flags };
  };

  it('should detect Proxy Mode (Guide booking for Tourist)', () => {
    const client: ClientProfile = {
      age: 30,
      gender: 'Female',
      isProxy: true, // Guide booking for someone else
      language: 'en',
    } as any;

    const result = analyzeForeigner(client);
    expect(result.flags).toContain('PROXY_MODE');
    expect(result.flags).toContain('FOREIGNER_MODE');
  });

  it('should flag FLIGHT_RISK for travelers with flight schedules', () => {
    const client: ClientProfile = {
      age: 25,
      gender: 'Female',
      flightSchedule: true, // Implies imminent flight
      language: 'zh',
    } as any;

    const result = analyzeForeigner(client);
    expect(result.flags).toContain('FLIGHT_RISK');
    expect(result.flags).toContain('NO_DOWNTIME');
  });

  it('should combined Proxy + Flight Risk for Guide bringing a Tourist group', () => {
    const client: ClientProfile = {
      age: 40,
      gender: 'Male', // The patient
      isProxy: true, // The guide is filling this out
      flightSchedule: true,
      language: 'ja',
    } as any;

    const result = analyzeForeigner(client);
    expect(result.flags).toContain('PROXY_MODE');
    expect(result.flags).toContain('FLIGHT_RISK');
  });

});
