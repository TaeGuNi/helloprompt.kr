import type {
  ClientProfile,
  Treatment,
  SafetyFlag,
  BaumannType,
  HospitalListing,
} from '../types/index.js';
import type { IDataProvider } from '../interfaces/IDataProvider.js';
import { BaumannAnalyzer } from './BaumannAnalyzer.js';
import { SafetyFilter } from './SafetyFilter.js';

export class RecommendationEngine {
  public static readonly SCORING = {
    BASE: 50,
    BAUMANN_MATCH: 20,
    GOAL_MATCH: 15,
    HABIT_BONUS: 5,
    DOWNTIME_BONUS: 5,
    DOWNTIME_TOLERANCE_BONUS: 10,
    PAIN_TOLERANCE_BONUS: 5,
    PRICE_MATCH_BONUS: 5,
    SINGLE_HOSPITAL_BONUS: 50,
    PAIN_PENALTY_MODERATE: 20,
  };

  constructor(private dataProvider: IDataProvider) {}

  public async recommend(
    client: ClientProfile,
    flags: SafetyFlag[],
    baumannType: string,
  ): Promise<{
    treatments: Treatment[];
    scores: Record<string, number>;
    scoreDetails?: Record<string, string[]>;
    bestHospital?: HospitalListing;
  }> {
    // Determine Target Areas based on Concerns (Fallback to empty array)
    const targetAreas = this.determineTargetAreas(client.concerns || []);

    // Fetch Data (Async)
    const allTreatments = await this.dataProvider.getTreatments();

    // A. Filter
    const candidates = allTreatments.filter(
      (t) =>
        SafetyFilter.isSafe(t, client, flags) &&
        t.targetArea &&
        targetAreas.has(t.targetArea),
    );

    // Parse Baumann Type once (Optimization)
    const baumannTraits = BaumannAnalyzer.parseType(baumannType || '');

    // B. Score
    const scores: Record<string, number> = {};
    const scoreDetails: Record<string, string[]> = {};

    candidates.forEach((t) => {
      const result = this.calculateScore(t, client, baumannTraits, flags);
      scores[t.id] = result.score;
      if (client.trustFactor === 'High') {
        scoreDetails[t.id] = result.details;
      }
    });

    // C. Sort
    const sorted = candidates
      .sort((a, b) => scores[b.id]! - scores[a.id]!)
      .slice(0, 3);

    // D. Select Best Hospital (One Diagnosis = One Hospital)
    // Constraint: Must select the *Best Match Hospital* for the entire bundle.
    const bestHospital = this.selectBestHospital(sorted);

    // E. Filter availability to only the best hospital
    if (bestHospital) {
      const hospitalKey = bestHospital.hospitalId || bestHospital.name;
      sorted.forEach((t) => {
        if (t.availableHospitals) {
          t.availableHospitals = t.availableHospitals.filter(
            (h) => (h.hospitalId || h.name) === hospitalKey,
          );
        }
      });
    }

    return {
      treatments: sorted,
      scores,
      ...(client.trustFactor === 'High' ? { scoreDetails } : {}),
      bestHospital: bestHospital || undefined,
    };
  }

  private selectBestHospital(treatments: Treatment[]): HospitalListing | null {
    // 1. Identify all candidate hospitals from the recommended bundle
    const hospitalMap = new Map<
      string,
      { listing: HospitalListing; hitCount: number; totalPrice: number }
    >();

    treatments.forEach((t) => {
      if (!t.availableHospitals) return;
      t.availableHospitals.forEach((h) => {
        // Use hospitalId or name as key
        const key = h.hospitalId || h.name;

        if (!hospitalMap.has(key)) {
          hospitalMap.set(key, { listing: h, hitCount: 0, totalPrice: 0 });
        }

        const entry = hospitalMap.get(key)!;
        entry.hitCount++;
        entry.totalPrice += h.price;
      });
    });

    if (hospitalMap.size === 0) return null;

    // 2. Score and Sort
    const sortedHospitals = Array.from(hospitalMap.values()).sort((a, b) => {
      // Priority 1: Inventory Match (Hit Count) - Descending
      // (Does it have all recommended devices?)
      if (b.hitCount !== a.hitCount) {
        return b.hitCount - a.hitCount;
      }

      // Priority 2: Price (Lower is better) - Ascending
      // (Fits user budget? / Price Match)
      return a.totalPrice - b.totalPrice;

      // Priority 3: Location (Implicit in data order or add geo-dist later)
      return 0;
    });

    // Return the winner
    return sortedHospitals[0].listing;
  }

  private determineTargetAreas(concerns: string[]): Set<string> {
    const areas = new Set<string>();
    concerns.forEach((c) => {
      if (['BodyFat', 'Cellulite'].includes(c)) areas.add('Body');
      else if (['HairLoss', 'Dandruff'].includes(c)) areas.add('Scalp');
      else areas.add('Face');
    });
    if (areas.size === 0) areas.add('Face');
    return areas;
  }

  private calculateScore(
    t: Treatment,
    client: ClientProfile,
    baumannTraits: BaumannType[],
    flags: SafetyFlag[],
  ): { score: number; details: string[] } {
    let score = RecommendationEngine.SCORING.BASE;
    const details: string[] = [
      `Base Score: ${RecommendationEngine.SCORING.BASE}`,
    ];

    if (baumannTraits.length > 0) {
      // Baumann Matching (Data-Driven)
      baumannTraits.forEach((type) => {
        if (t.baumannTarget.includes(type)) {
          score += RecommendationEngine.SCORING.BAUMANN_MATCH;
          details.push(
            `Baumann Match (${type}): +${RecommendationEngine.SCORING.BAUMANN_MATCH}`,
          );
        }
      });
    }

    // Goal Matching (Data-Driven)
    if (client.wannabe && t.goals?.includes(client.wannabe)) {
      score += RecommendationEngine.SCORING.GOAL_MATCH;
      details.push(
        `Goal Match (${client.wannabe}): +${RecommendationEngine.SCORING.GOAL_MATCH}`,
      );
    }

    // Special Adjustments (Data-Driven)
    if (t.specialAdjustments) {
      // Legacy Support for Map-based adjustments (e.g. SOOBUJI_DETECTED: 30)
      for (const [condition, delta] of Object.entries(t.specialAdjustments)) {
        if (flags.includes(condition as SafetyFlag)) {
          const scoreDelta = delta as number;
          score += scoreDelta;
          details.push(
            `Legacy Adjustment (${condition}): ${scoreDelta > 0 ? '+' : ''}${scoreDelta}`,
          );
        }
      }
    }

    if (t.adjustments) {
      t.adjustments.forEach((rule) => {
        if (flags.includes(rule.condition)) {
          score += rule.scoreDelta;
          details.push(
            `Special Adjustment (${rule.condition}): ${rule.scoreDelta > 0 ? '+' : ''}${rule.scoreDelta}`,
          );
        }
      });
    }

    // Single Hospital Match (New Requirement)
    // If the treatment is exclusive to a single hospital and matches user concerns
    if ((t as any).hospitalType === 'Single' && (t as any).specialties && client.concerns) {
      const match = (t as any).specialties.some((s: string) => (client.concerns as string[]).includes(s));
      if (match) {
        score += RecommendationEngine.SCORING.SINGLE_HOSPITAL_BONUS;
        details.push(
          `Single Hospital Match (Exclusive): +${RecommendationEngine.SCORING.SINGLE_HOSPITAL_BONUS}`,
        );
      }
    }

    // Pain Penalty (User Preference)
    if (client.painTolerance === 'Low' && t.painLevel >= 3) {
      score -= RecommendationEngine.SCORING.PAIN_PENALTY_MODERATE; // Heavily penalize moderate pain
      details.push(`Pain Penalty (Low Tolerance vs Level ${t.painLevel}): -${RecommendationEngine.SCORING.PAIN_PENALTY_MODERATE}`);
    } else if (client.painTolerance === 'High' && t.painLevel >= 3) {
      score += RecommendationEngine.SCORING.PAIN_TOLERANCE_BONUS; // User can handle strong treatments
      details.push(
        `Pain Bonus (High Tolerance vs Level ${t.painLevel}): +${RecommendationEngine.SCORING.PAIN_TOLERANCE_BONUS}`,
      );
    }

    // Habit Profiling (Marketing)
    // If user has done this type before, they might be open to it (familiarity)
    // ADAPTED: Use recentTreatments instead of lastTreatment
    if (client.recentTreatments) {
      const hasHistory = client.recentTreatments.some(
        (r) => r.methodType === t.methodType,
      );
      if (hasHistory) {
        score += RecommendationEngine.SCORING.HABIT_BONUS;
        details.push(
          `Habit Bonus (Familiar with ${t.methodType}): +${RecommendationEngine.SCORING.HABIT_BONUS}`,
        );
      }
    }

    // Recovery Time Bonus (If they tolerate it)
    if (client.downtimePreference === 'LongOK' && t.downtimeLevel >= 2) {
      score += RecommendationEngine.SCORING.DOWNTIME_TOLERANCE_BONUS; // Boost for high tolerance
      details.push(
        `Downtime Tolerance Bonus (Long Pref vs Level ${t.downtimeLevel}): +${RecommendationEngine.SCORING.DOWNTIME_TOLERANCE_BONUS}`,
      );
    } else if (client.downtimePreference !== 'Short' && t.downtimeLevel >= 2) {
      score += RecommendationEngine.SCORING.DOWNTIME_BONUS;
      details.push(
        `Downtime Acceptance Bonus (Not Short vs Level ${t.downtimeLevel}): +${RecommendationEngine.SCORING.DOWNTIME_BONUS}`,
      );
    }

    // Rational Trust: Price Match Logic (Current)
    // "110% Price Match Placeholder" - favoring treatments with good value
    if (t.standardPrice && t.priceRange) {
      const savings = t.standardPrice - t.priceRange.min;
      const savingsPercent = (savings / t.standardPrice) * 100;

      // If savings > 10%, we give a bonus (Logic: User gets a 'deal')
      if (savingsPercent >= 10) {
        score += RecommendationEngine.SCORING.PRICE_MATCH_BONUS;
        details.push(
          `Rational Trust (Save ${Math.round(savingsPercent)}% vs Std): +${RecommendationEngine.SCORING.PRICE_MATCH_BONUS}`,
        );
      }
    }

    return { score, details };
  }
}
