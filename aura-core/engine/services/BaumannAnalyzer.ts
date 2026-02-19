import type {
  ClientProfile,
  AnalysisContext,
  SafetyFlag,
  BaumannScores,
  BaumannType,
} from '../types/index.js';

export class BaumannAnalyzer {
  private readonly THRESHOLD = 50;
  private static readonly BAUMANN_REGEX = /^([OD])([SR])([PN])([WT])$/;

  public analyze(client: ClientProfile): AnalysisContext {
    // 1. Context Analysis (Safety, Lifestyle, History)
    const flags = this.analyzeContext(client);

    // 2. Clone scores
    const adjustedScores = { ...client.baumannScores };

    // 3. Trap Logic
    const { isTrapDetected, scoreAdjustments, trapFlags } = this.checkTraps(
      client,
      adjustedScores,
    );

    // Apply Trap Results
    if (trapFlags.length > 0) flags.push(...trapFlags);
    if (scoreAdjustments.sensitivity)
      adjustedScores.sensitivity += scoreAdjustments.sensitivity;
    if (scoreAdjustments.oil) adjustedScores.oil += scoreAdjustments.oil;

    return { flags, isTrapDetected, adjustedBaumannScores: adjustedScores };
  }

  private analyzeContext(client: ClientProfile): SafetyFlag[] {
    const flags: SafetyFlag[] = [];

    // Safety
    if (client.isPregnantOrNursing) {
      flags.push('SAFE_MODE');
      flags.push('SHIELD_PREGNANCY');
    }

    if (client.medication && client.medication.includes('Roaccutane')) {
      flags.push('SHIELD_MEDICATION');
    }

    if (client.activeInfection) {
      flags.push('SHIELD_INFECTION');
    }

    // Downtime / Schedule
    if (client.flightSchedule) {
      flags.push('NO_DOWNTIME');
      flags.push('FLIGHT_RISK'); // Principle: Foreigner Scenarios
    }
    if (client.eventSchedule) {
      if (client.eventSchedule.dDay < 3) flags.push('NO_DOWNTIME_STRICT');
      else if (client.eventSchedule.dDay < 7) flags.push('LOW_DOWNTIME');
    }

    // Principle: User/Client Separation
    if (client.isProxy) {
      flags.push('PROXY_MODE');
    }

    // Principle: Foreigner Scenarios (Language)
    if (client.language && client.language !== 'ko') {
      flags.push('FOREIGNER_MODE');
    }

    // Marketing / History
    if (client.recentTreatments && client.recentTreatments.length > 0) {
      flags.push('HEAVY_USER');
    } else {
      flags.push('NEWBIE');
    }

    // Logic Shield Pass Check
    const hasShield = flags.some((f) => f.startsWith('SHIELD_'));

    // Pain Tolerance
    if (client.painTolerance === 'Low') {
      flags.push('LOW_PAIN_TOLERANCE');
    }

    // Budget
    if (client.budgetLevel === 'Economy') {
      flags.push('BUDGET_CONSTRAINED');
    }

    // Seasonal Logic (Summer: June-August)
    const currentMonth = new Date().getMonth(); // 0-11
    if (currentMonth >= 5 && currentMonth <= 7) {
      flags.push('UV_SENSITIVE');
    }

    if (!hasShield) {
      flags.push('SAFE_PASS');
    }

    return flags;
  }

  private checkTraps(
    client: ClientProfile,
    currentScores: BaumannScores,
  ): {
    isTrapDetected: boolean;
    scoreAdjustments: Partial<BaumannScores>;
    trapFlags: SafetyFlag[];
  } {
    let isTrapDetected = false;
    const scoreAdjustments: Partial<BaumannScores> = {};
    const trapFlags: SafetyFlag[] = [];

    // Trap Check 1: Soobuji (Oily but feels dry/tight)
    if (
      currentScores.oil > this.THRESHOLD &&
      client.trapAnswers?.oil_check === true
    ) {
      trapFlags.push('SOOBUJI_DETECTED');
      scoreAdjustments.sensitivity = 20; // Adjust sensitivity
    }

    // Trap Check 2: Logical Inconsistency (The Real Trap)
    // Q08 (Tight after wash) vs Q09 (Oily at 3PM) mismatch
    if (
      currentScores.oil > this.THRESHOLD && // Q09 says Oily
      client.trapAnswers?.wash_tightness === true // Q08 says Tight (Dry)
    ) {
      // TIE BREAKER needed: Q10 (Pore Size)
      if (client.trapAnswers?.pore_size === 'Large') {
        // It's Oily (OS type likely)
        isTrapDetected = true; // Flag for review
        // No score adjustment needed, stays Oily
      } else {
        // It might be Dry (moisture barrier damaged)
        scoreAdjustments.oil = (scoreAdjustments.oil || 0) - 10; // Penalize O score
      }
    }

    return { isTrapDetected, scoreAdjustments, trapFlags };
  }

  public determineType(scores: BaumannScores): string {
    const typeO = scores.oil >= this.THRESHOLD ? 'O' : 'D';
    const typeS = scores.sensitivity >= this.THRESHOLD ? 'S' : 'R';
    const typeP = scores.pigment >= this.THRESHOLD ? 'P' : 'N';
    const typeW = scores.wrinkle >= this.THRESHOLD ? 'W' : 'T';
    return `${typeO}${typeS}${typeP}${typeW}`;
  }

  public static parseType(typeStr: string): BaumannType[] {
    const match = typeStr.match(BaumannAnalyzer.BAUMANN_REGEX);
    return match ? (match.slice(1) as BaumannType[]) : [];
  }
}
