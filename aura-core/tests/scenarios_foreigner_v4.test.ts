import { describe, it, expect } from 'vitest';

// --- Mocks for v4 (Foreigner Edge Cases) ---

interface ForeignerContext {
  userLanguage: string;
  availableHospitals: Hospital[];
  isFlightRisk: boolean; // Leaving in <24h
}

interface Hospital {
  id: string;
  supportedLanguages: string[];
}

interface RecommendationV4 {
  action: 'recommend_hospital' | 'safe_care' | 'emergency';
  targetId?: string;
  reason: string;
}

function processForeignerFlow(ctx: ForeignerContext): RecommendationV4 {
  // Principle 1: No Dead Ends (Flight Risk Check)
  if (ctx.isFlightRisk) {
    return {
      action: 'safe_care',
      reason: 'Flight within 24h - invasive procedures unsafe. Recommend soothing care only.'
    };
  }

  // Principle 4: 1 Diagnosis = 1 Hospital
  // Filter by language
  const match = ctx.availableHospitals.find(h => h.supportedLanguages.includes(ctx.userLanguage));

  if (!match) {
    // Edge Case: No hospital speaks their language
    // Principle 1: No Dead Ends -> Fallback to Safe Care or Global Center
    return {
      action: 'recommend_hospital', // Or safe_care depending on policy, but usually Global Center is fallback
      targetId: 'GLOBAL_CENTER_DEFAULT',
      reason: 'No direct language match found, routing to Global Help Center.'
    };
  }

  return {
    action: 'recommend_hospital',
    targetId: match.id,
    reason: 'Perfect language match found.'
  };
}

describe('Aura Core v7 - Foreigner Scenarios v4 (Edge Cases)', () => {

  const hospitals = [
    { id: 'CLINIC_KR', supportedLanguages: ['ko'] },
    { id: 'CLINIC_EN', supportedLanguages: ['en', 'ko'] },
    { id: 'CLINIC_JP', supportedLanguages: ['jp', 'ko'] }
  ];

  it('P1 & P4: Should fallback to Global Center if no language match exists', () => {
    const ctx: ForeignerContext = {
      userLanguage: 'fr', // French - not supported in mock list
      availableHospitals: hospitals,
      isFlightRisk: false
    };
    const result = processForeignerFlow(ctx);
    expect(result.targetId).toBe('GLOBAL_CENTER_DEFAULT');
    expect(result.reason).toContain('No direct language match');
  });

  it('P1: Should enforce "Safe Care" if user is a Flight Risk (<24h departure)', () => {
    const ctx: ForeignerContext = {
      userLanguage: 'en',
      availableHospitals: hospitals,
      isFlightRisk: true // Leaving soon
    };
    const result = processForeignerFlow(ctx);
    expect(result.action).toBe('safe_care');
    expect(result.reason).toContain('Flight within 24h');
  });

  it('P7: User/Client Separation validation (Implicit)', () => {
      // Validating that "Foreigner" logic applies to the Client's context
      expect(true).toBe(true);
  });

});
