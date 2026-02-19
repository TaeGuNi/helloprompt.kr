import { describe, it, expect } from 'vitest';

// Mock types for the scenario
interface DiagnosisResult {
  hospitalId: string;
  treatmentId: string;
  confidence: number;
}

interface UserInput {
  skinType: string | 'unknown';
  concern: string;
  isForeigner: boolean;
}

// Mock function to simulate the logic (Concept only)
function recommendHospital(input: UserInput): DiagnosisResult[] {
  if (input.skinType === 'unknown') {
    // Principle 1: No Dead Ends -> Safe Care fallback
    return [{ hospitalId: 'SAFE_CARE_CLINIC', treatmentId: 'BASIC_HYDRATION', confidence: 1.0 }];
  }
  
  // Principle 4: 1 Diagnosis = 1 Hospital (Foreigner focus)
  if (input.isForeigner) {
     return [{ hospitalId: 'GLOBAL_SKIN_CENTER', treatmentId: 'PREMIUM_LASER', confidence: 0.95 }];
  }

  // Domestic might get options, but foreigner gets ONE.
  return [
      { hospitalId: 'CLINIC_A', treatmentId: 'LASER_A', confidence: 0.9 },
      { hospitalId: 'CLINIC_B', treatmentId: 'LASER_B', confidence: 0.8 }
  ];
}

describe('Foreigner Scenarios (Principle 4 & 1)', () => {
  it('should return exactly ONE hospital recommendation for foreigner users (Principle 4)', () => {
    const input: UserInput = {
      skinType: 'oily',
      concern: 'acne',
      isForeigner: true
    };

    const results = recommendHospital(input);
    
    expect(results).toHaveLength(1);
    expect(results[0].hospitalId).toBe('GLOBAL_SKIN_CENTER');
  });

  it('should provide a Safe Care detour when input is unknown (Principle 1)', () => {
    const input: UserInput = {
      skinType: 'unknown', // User doesn't know
      concern: 'general',
      isForeigner: true
    };

    const results = recommendHospital(input);

    expect(results).toHaveLength(1);
    expect(results[0].hospitalId).toBe('SAFE_CARE_CLINIC'); // Fallback
    expect(results[0].treatmentId).toBe('BASIC_HYDRATION');
  });
});
