import type {
  ClientProfile,
  DiagnosisResult,
  FinalReport,
} from './types/index.js';
import type { IDataProvider } from './interfaces/IDataProvider.js';
import { BaumannAnalyzer } from './services/BaumannAnalyzer.js';
import { LifestyleAnalyzer } from './services/LifestyleAnalyzer.js';
import { RecommendationEngine } from './services/RecommendationEngine.js';
import { FutureSimulator } from './services/FutureSimulator.js';
import { ReportGenerator } from './services/ReportGenerator.js';

/**
 * Core Logic for Aura Skin Analysis.
 * Implements V1.0.0 Master Logic:
 * - Hybrid Flow (Face/Body/Scalp)
 * - Rational Trust (Price Match Bonus)
 * - Legacy Logic (Recovery, Pain, Avoidance, Habit) retained
 *
 * Validated by Simba (Logic) & Zzabs (QA).
 * Updated: 2026-02-14
 */
export class SkinnEngine {
  private baumannAnalyzer = new BaumannAnalyzer();
  private lifestyleAnalyzer = new LifestyleAnalyzer();
  private recommendationEngine: RecommendationEngine;
  private futureSimulator = new FutureSimulator();
  private reportGenerator = new ReportGenerator();

  constructor(dataProvider: IDataProvider) {
    this.recommendationEngine = new RecommendationEngine(dataProvider);
  }

  /**
   * Main entry point for skin analysis.
   * Orchestrates safety checks, Baumann typing, lifestyle analysis, and treatment recommendations.
   */
  public async analyze(client: ClientProfile): Promise<DiagnosisResult> {
    // 1. Safety & Baumann Analysis
    const { flags, isTrapDetected, adjustedBaumannScores } =
      this.baumannAnalyzer.analyze(client);

    // 2. Baumann Type String
    const baumannType = this.baumannAnalyzer.determineType(
      adjustedBaumannScores,
    );

    // 3. Lifestyle
    const lifestylePrescription = this.lifestyleAnalyzer.analyze(client);

    // 4. Recommendation Engine
    const { treatments, scores, scoreDetails } =
      await this.recommendationEngine.recommend(client, flags, baumannType);

    // 5. Future Simulation
    const futureSimulation = this.futureSimulator.simulate(client, treatments);

    return {
      baumannType,
      isTrapDetected,
      safetyFlags: flags,
      scoreBreakdown: scores,
      ...(scoreDetails ? { scoreDetails } : {}),
      finalRecommendations: treatments,
      lifestylePrescription,
      futureSimulation,
    };
  }

  /**
   * Generates the Phase 5 Final Report with Trust & Pricing Analysis.
   */
  public generateFinalReport(
    client: ClientProfile,
    diagnosis: DiagnosisResult,
  ): FinalReport {
    return this.reportGenerator.generate(client, diagnosis);
  }
}
