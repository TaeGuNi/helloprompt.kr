import type { SafetyFlag, BaumannScores } from './common.js';
import type { Treatment } from './master.js';

export interface DiagnosisResult {
  baumannType: string;
  isTrapDetected: boolean;
  safetyFlags: SafetyFlag[];

  scoreBreakdown: Record<string, number>;
  scoreDetails?: Record<string, string[]>;

  finalRecommendations: Treatment[]; // This might need to be lighter (just IDs) for DB, but full object for API response

  lifestylePrescription?: string;
  futureSimulation?: string;
}

export interface AnalysisContext {
  flags: SafetyFlag[];
  isTrapDetected: boolean;
  adjustedBaumannScores: BaumannScores;
  baumannType?: string;
}
