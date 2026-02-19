import {
  FinalReport,
  PricingBlock,
  PricingComparison,
  RecommendationBlock,
} from '../types/report.js';
import { DiagnosisResult } from '../types/diagnosis.js';
import { ClientProfile } from '../types/identity.js';
import { Treatment } from '../types/master.js';

export class ReportGenerator {
  public generate(
    client: ClientProfile,
    diagnosis: DiagnosisResult,
  ): FinalReport {
    const recommendations = this.generateRecommendations(
      diagnosis.finalRecommendations,
      client,
      diagnosis.scoreBreakdown,
    );
    const pricing = this.generatePricing(diagnosis.finalRecommendations);
    const trustScore = this.calculateTrustScore(
      diagnosis.finalRecommendations,
      client,
    );

    // Dynamic Summary based on Flags
    let summary = `Based on your ${diagnosis.baumannType} skin type and goal of ${client.wannabe}, we found ${recommendations.length} optimized treatments.`;

    if (diagnosis.safetyFlags?.includes('SHIELD_PREGNANCY')) {
      summary =
        'We have curated a safe, gentle routine specifically for expectant mothers.';
    } else if (diagnosis.safetyFlags?.includes('SHIELD_MEDICATION')) {
      summary =
        'Focusing on skin barrier recovery and soothing while on medication.';
    } else if (diagnosis.safetyFlags?.includes('SHIELD_INFECTION')) {
      summary =
        'Due to active infection signs, we recommend a medical consultation before proceeding with aesthetic treatments.';
    } else if (client.isTraveler) {
      const duration = client.stayDurationDays || 'short';
      summary = `Welcome to Korea! For your ${duration}-day trip, we've prioritized treatments with minimal downtime and immediate results.`;
    }

    return {
      id: crypto.randomUUID ? crypto.randomUUID() : 'report_' + Date.now(),
      generatedAt: new Date(),
      clientName: client.name || 'Valued Client',
      baumannType: diagnosis.baumannType,
      headline: this.generateHeadline(diagnosis, client),
      summary,
      recommendations,
      pricing,
      trustScore,
      disclaimer:
        'This analysis is AI-generated for informational purposes only and does not constitute a medical diagnosis. Please consult a doctor before proceeding.',
    };
  }

  public generateFunRecord(client: ClientProfile, diagnosis: DiagnosisResult) {
    return {
      type: 'FunRecord',
      title: `Your Skin MBTI is ${diagnosis.baumannType}!`,
      baumannType: diagnosis.baumannType,
      shareableImageText: `My skin type is ${diagnosis.baumannType}. Find out yours at Aura Core! #KBeauty #SkinAnalysis`,
    };
  }

  public generateMedicalRecord(client: ClientProfile, diagnosis: DiagnosisResult) {
    return {
      type: 'MedicalRecord',
      patientId: client.id,
      clinicalNotes: `Patient presents with Baumann Type ${diagnosis.baumannType}. Primary concern: ${client.concerns.join(', ')}.`,
      contraindications: diagnosis.safetyFlags || [],
      consentFormDraft: `I, ${client.name || 'Patient'}, understand the risks associated with the proposed treatments...`,
      treatmentPlan: diagnosis.finalRecommendations,
    };
  }

  private generateRecommendations(
    treatments: Treatment[],
    client: ClientProfile,
    scores: Record<string, number> = {},
  ): RecommendationBlock[] {
    return treatments.map((t) => {
      const actualScore = scores[t.id] ?? 95; // Fallback if missing
      return {
        treatment: t,
        matchReason: `Matches your goal '${client.wannabe}' and addresses ${t.targetArea} concerns.`,
        matchScore: actualScore,
        safetyBadge:
          t.safetyLevel === 'Safe'
            ? 'High Safety'
            : t.safetyLevel === 'Caution'
              ? 'Moderate'
              : 'Clinical Attention Required',
        painIndex: t.painLevel,
        downtimeText: this.formatDowntime(t.downtimeLevel),
        mechanism: `${t.methodType} technology targeting the ${t.targetArea}.`,
        expectedOutcome: 'Visible improvement within standard recovery time.',
      };
    });
  }

  private generatePricing(treatments: Treatment[]): PricingBlock {
    const comparisons: PricingComparison[] = treatments.map((t) => {
      const marketAvg = t.priceRange.max; // Anchor high
      const ourBestPrice = t.priceRange.min; // Anchor low (assuming we find best deal)
      const savings = marketAvg - ourBestPrice;
      const savingsPercent = Math.round((savings / marketAvg) * 100);

      return {
        treatmentName: t.name,
        marketAvg,
        ourBestPrice,
        savings,
        savingsPercent,
        currency: t.priceRange.currency,
      };
    });

    const totalSavings = comparisons.reduce((sum, c) => sum + c.savings, 0);
    const currency = comparisons[0]?.currency || 'KRW';

    return {
      comparisons,
      totalEstimatedSavings: totalSavings,
      currency,
      guaranteeText:
        '110% Price Match Guarantee: If you find a verified lower price for the same treatment, we refund 110% of the difference.',
      trustBadge: 'Best Price Guaranteed',
    };
  }

  private calculateTrustScore(
    treatments: Treatment[],
    client: ClientProfile,
  ): number {
    if (treatments.length === 0) return 100;

    let maxPenalty = 0;

    treatments.forEach((t) => {
      let currentPenalty = 0;

      // Safety Penalty
      if (t.safetyLevel === 'Caution') currentPenalty += 5;
      if (t.safetyLevel === 'Danger') currentPenalty += 20;

      // Pain Penalty relative to tolerance
      const tolerance = client.painTolerance || 'Low'; // Default to Low for safety

      if (tolerance === 'Low') {
        if (t.painLevel >= 3) currentPenalty += 20;
        else if (t.painLevel >= 2) currentPenalty += 10;
      }
      if (tolerance === 'Medium' && t.painLevel >= 3) currentPenalty += 10;

      // Downtime Penalty (if client has schedule)
      if (client.eventSchedule && t.downtimeLevel >= 2) currentPenalty += 10;

      maxPenalty = Math.max(maxPenalty, currentPenalty);
    });

    return Math.max(0, 100 - maxPenalty);
  }

  private formatDowntime(level: number): string {
    switch (level) {
      case 0:
        return 'Immediate Return';
      case 1:
        return '24h Mild Redness';
      case 2:
        return '2-3 Days Recovery';
      case 3:
        return '1 Week Recovery';
      default:
        return 'Consult Doctor';
    }
  }

  private generateHeadline(
    diagnosis: DiagnosisResult,
    client: ClientProfile,
  ): string {
    // 1. Logic Shield Redirection (Phase 1)
    if (diagnosis.safetyFlags?.includes('SHIELD_PREGNANCY')) {
      return "Mom's Care: Safe & Gentle";
    }
    if (diagnosis.safetyFlags?.includes('SHIELD_MEDICATION')) {
      return 'Recovery Care: Soothing & Repair';
    }
    if (diagnosis.safetyFlags?.includes('SHIELD_INFECTION')) {
      return 'Medical Consult Priority';
    }

    // 2. Standard Goal Mapping
    const goalMap: Record<string, string> = {
      Glass: 'Achieve Glass Skin',
      Baby: 'Restore Baby Softness',
      Contour: 'Define Your Contours',
      Flawless: 'Clear & Flawless',
    };
    return (
      goalMap[client.wannabe] ||
      `Optimized Plan for ${diagnosis.baumannType} Skin`
    );
  }
}
