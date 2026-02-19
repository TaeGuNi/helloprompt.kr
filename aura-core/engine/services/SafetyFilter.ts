import type { ClientProfile, Treatment, SafetyFlag } from '../types/index.js';

export class SafetyFilter {
  static isSafe(
    t: Treatment,
    client: ClientProfile,
    flags: SafetyFlag[],
  ): boolean {
    // 0. Active Infection (Absolute Contraindication)
    if (client.activeInfection) return false;

    // 1. Pregnancy (Direct Check + Flag)
    if (client.isPregnantOrNursing || flags.includes('SAFE_MODE')) {
      // Logic Shield: Strict Safe Mode
      // Only allow treatments explicitly marked as 'Safe'
      if (t.safetyLevel !== 'Safe') return false;
      
      // Double check contraindications just in case
      if (t.contraindications.includes('Pregnancy')) return false;
    }

    // 1.5 Medication (Roaccutane)
    if (client.medication?.includes('Roaccutane')) {
      if (['Laser', 'Peel'].includes(t.methodType)) return false;
    }

    // 2. Downtime
    if (flags.includes('NO_DOWNTIME') || flags.includes('NO_DOWNTIME_STRICT')) {
      if (t.downtimeLevel > 0) return false;
    } else if (flags.includes('LOW_DOWNTIME')) {
      if (t.downtimeLevel > 1) return false;
    }

    // 3. Dark Skin (Contraindications)
    if (['IV', 'V', 'VI'].includes(client.skinTone)) {
      if (t.contraindications.includes('DarkSkin')) return false;
    }

    // 4. Downtime Preference (User Input)
    if (client.downtimePreference === 'NoDowntime') {
      if (t.downtimeLevel > 0) return false;
    } else if (client.downtimePreference === 'Short') {
      if (t.downtimeLevel >= 2) return false; // Exclude medium/high downtime (Fraxel, Rejuran)
    }

    // 5. Avoidance List (User Input)
    if (
      client.avoidTreatments &&
      client.avoidTreatments.includes(t.methodType)
    ) {
      return false;
    }

    // 6. Pain Tolerance (User Input)
    if (client.painTolerance === 'Low') {
      if (t.painLevel > 1) return false; // Strict for Low Tolerance (Exclude Level 2+)
    } else if (client.painTolerance === 'Medium') {
      if (t.painLevel > 2) return false; // Exclude moderate/severe pain (Level 3+)
    }

    // 7. Recent History Check (Combined)
    if (client.recentTreatments) {
      const recent = client.recentTreatments.find(
        (r) => r.treatmentId === t.id,
      );

      if (recent) {
        // A. Safety Interval (Legacy Months Check)
        if (t.minIntervalMonths && t.minIntervalMonths > 0) {
          // If date is vague ("Recent"), assume it was yesterday -> Block
          if (recent.date === 'Recent') return false;

          const lastDate = new Date(recent.date);
          if (isNaN(lastDate.getTime())) return false; // Fail safe

          const now = new Date();
          const monthsDiff =
            (now.getFullYear() - lastDate.getFullYear()) * 12 +
            (now.getMonth() - lastDate.getMonth());

          if (monthsDiff < t.minIntervalMonths) return false;
        }

        // B. Minimum Interval (Weeks Check)
        if (t.minimumInterval && t.minimumInterval > 0) {
          if (recent.date === 'Recent') return false; // Treat "Recent" as unsafe for intervals

          const weeksSince = this.getWeeksSince(recent.date);
          if (weeksSince < t.minimumInterval) return false;
        }
      }
    }

    // 8. Budget Filter (Economy/Standard/Premium)
    if (client.budgetLevel) {
      const minPrice = t.priceRange?.min || 0;
      const currency = t.priceRange?.currency || 'KRW';
      
      // Normalize to KRW (Simple approximation: 1 USD = 1000 KRW)
      const priceKRW = currency === 'USD' ? minPrice * 1000 : minPrice;

      if (client.budgetLevel === 'Economy') {
        if (priceKRW > 300000) return false;
      } else if (client.budgetLevel === 'Standard') {
        if (priceKRW > 1000000) return false;
      }
    }

    return true;
  }

  private static getWeeksSince(date: Date | string): number {
    const d = new Date(date);
    if (isNaN(d.getTime())) return 0; // Fail safe
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - d.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays / 7;
  }
}
