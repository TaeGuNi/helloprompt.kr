// Consolidated Type Definitions
// Source of Truth for Aura Core v1.0+ (Expanded for Compatibility)

import type { ClientProfile } from './identity.js';
import type {
  MethodType,
  SafetyFlag,
  Contraindication,
  BaumannScores,
} from './common.js';

export type { MethodType, SafetyFlag, Contraindication, BaumannScores };
export type { ClientProfile }; // Re-export for compatibility

export type TargetArea = 'Face' | 'Body' | 'Scalp';
export type SafetyLevel = 'Safe' | 'Caution' | 'Danger';
export type BaumannType =
  | 'O'
  | 'D'
  | 'S'
  | 'R'
  | 'P'
  | 'N'
  | 'W'
  | 'T'
  | 'Unknown';

export type Concern = string; // Generic string for concerns

export type TreatmentGoal =
  | 'Contour'
  | 'SkinTone'
  | 'AntiAging'
  | 'Texture'
  | 'Slimming'
  | 'BodyTightening'
  | 'Baby'
  | 'Flawless'
  | 'Healing'
  | 'Glass'
  | 'HairGrowth'
  | 'ScalpCalming'
  | 'Volume';

export type WannabeGoal = TreatmentGoal | string | undefined;

export interface PriceRange {
  min: number;
  max: number;
  currency: string;
}

export interface HospitalListing {
  id: string; // Unique Hospital ID
  name: string;
  optionName?: string;
  price: number;
  currency: string;
  url?: string;
  hospitalId?: string; // Legacy
  location: {
    address: string;
    lat?: number;
    lng?: number;
  };
  trustBadge?: 'Verified' | 'Partner' | 'Premium';
}

export interface AdjustmentRule {
  condition: SafetyFlag;
  scoreDelta: number;
}

export interface Treatment {
  id: string;
  name: string;
  category: string;
  methodType: MethodType;
  targetArea: TargetArea;
  painLevel: number;
  safetyLevel: SafetyLevel;
  downtimeLevel: number;
  baumannTarget: BaumannType[];
  contraindications: Contraindication[];
  goals: TreatmentGoal[];

  // Interval
  minIntervalMonths?: number;
  minimumInterval?: number;

  priceRange: PriceRange;
  standardPrice?: number;

  durationMinutes: number;
  availableHospitals?: HospitalListing[]; // Aggregated List

  // Adjustments
  specialAdjustments?: Record<string, number>;
  adjustments?: AdjustmentRule[];
}
