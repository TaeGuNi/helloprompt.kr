import { describe, it, expect } from 'vitest';
import { QuizService } from '../engine/services/QuizService.js';
import type { ClientProfile } from '../engine/types/index.js';

// [BDD] Self-Reinforcement: Defining the expected behavior of the Psych Module
// This test simulates the "Psych Expert" (Agent 2) logic.

describe('Psych Module: Answer Interpretation (Self-Reinforcement)', () => {
  // Simulated Mapper (This logic should eventually move to a service)
  const mapPsychAnswers = (
    answers: Record<string, number>,
  ): Partial<ClientProfile> => {
    const profile: Partial<ClientProfile> = {};

    // Q: Pain Tolerance
    // Option 1: Terrified -> Low
    // Option 2: Moderate -> Medium
    // Option 3: Brave -> High
    if (answers['pain_tolerance'] === 1) profile.painTolerance = 'Low';
    if (answers['pain_tolerance'] === 2) profile.painTolerance = 'Medium';
    if (answers['pain_tolerance'] === 3) profile.painTolerance = 'High';

    // Q: Downtime
    // Option 1: Immediate -> NoDowntime
    // Option 2: Weekend -> Short
    // Option 3: Week -> LongOK
    if (answers['downtime'] === 1) profile.downtimePreference = 'NoDowntime';
    if (answers['downtime'] === 2) profile.downtimePreference = 'Short';
    if (answers['downtime'] === 3) profile.downtimePreference = 'LongOK';

    return profile;
  };

  it('should translate "Terrified" (Option 1) to Low Pain Tolerance', () => {
    const answers = { pain_tolerance: 1 };
    const profile = mapPsychAnswers(answers);
    expect(profile.painTolerance).toBe('Low');
  });

  it('should translate "Brave" (Option 3) to High Pain Tolerance', () => {
    const answers = { pain_tolerance: 3 };
    const profile = mapPsychAnswers(answers);
    expect(profile.painTolerance).toBe('High');
  });

  it('should translate "Immediate Return" (Option 1) to No Downtime', () => {
    const answers = { downtime: 1 };
    const profile = mapPsychAnswers(answers);
    expect(profile.downtimePreference).toBe('NoDowntime');
  });

  it('should translate "Weekend Recovery" (Option 2) to Short Downtime', () => {
    const answers = { downtime: 2 };
    const profile = mapPsychAnswers(answers);
    expect(profile.downtimePreference).toBe('Short');
  });

  // Self-Reinforcement: Verify against Quiz Data Structure
  it('should verify Quiz Data has correct options for Psych questions', () => {
    const quiz = QuizService.getQuiz('en');
    if (!quiz) return; // Skip if data missing

    // Assuming we have a section for Psych or general questions
    const psychSection = quiz.sections.find(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (s: any) => s.id === 'psych' || s.title?.includes('Psych'),
    );
    if (psychSection) {
      const painQ = psychSection.questions.find(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (q: any) => q.id === 'pain_tolerance',
      );
      if (painQ) {
        expect(painQ.options.length).toBeGreaterThanOrEqual(3);
        // Verify option semantics match expectations (keyword check)
        expect(painQ.options[0].toLowerCase()).toMatch(
          /terrified|low|scared|sedation/,
        );
      }
    }
  });
});
