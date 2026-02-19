import { describe, it, expect } from 'vitest';

// Mock types
interface Profile {
  name: string;
  role: 'agency' | 'patient';
  language: string;
}

interface BookingRequest {
  user: Profile;   // Who is operating the system
  client: Profile; // Who is getting the treatment
  consentAgreed: boolean;
}

function processBooking(request: BookingRequest) {
  // Principle 7: User/Client Separation
  if (request.user.role === 'agency' && request.client.role === 'patient') {
    if (request.user.name === request.client.name) {
       throw new Error("Agency user cannot be the client in this mode.");
    }
  }

  return {
    status: 'confirmed',
    communicationLanguage: request.user.language, // Talk to agent in their language
    medicalLanguage: request.client.language      // Medical docs in patient's language
  };
}

describe('User/Client Separation (Principle 7)', () => {
  it('should distinguish between Agency User and Patient Client', () => {
    const request: BookingRequest = {
      user: { name: 'Agent Smith', role: 'agency', language: 'en' },
      client: { name: 'Jane Doe', role: 'patient', language: 'ko' },
      consentAgreed: true
    };

    const result = processBooking(request);

    // Communicate with the Agent in English
    expect(result.communicationLanguage).toBe('en');
    // Medical records prepared for Patient in Korean (or their preferred lang)
    expect(result.medicalLanguage).toBe('ko');
  });

  it('should allow self-booking where User == Client', () => {
     const request: BookingRequest = {
      user: { name: 'John Doe', role: 'patient', language: 'en' },
      client: { name: 'John Doe', role: 'patient', language: 'en' }, // Same person
      consentAgreed: true
    };
    
    // In a real implementation, we'd check if this is allowed logic or if it normalizes.
    // For this mock, we assume the separation logic handles it or treats them as one context.
    // Here we just ensure it doesn't crash or throw the "Agency" error.
    
    const result = processBooking(request);
    expect(result.status).toBe('confirmed');
    expect(result.communicationLanguage).toBe('en');
  });
});
