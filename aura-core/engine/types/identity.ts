import type {
  UUID,
  Gender,
  SkinTone,
  MethodType,
  BaumannScores,
  DowntimePreference,
  PainTolerance,
} from './common.js';

export type Concern =
  | 'Pores'
  | 'Jowls'
  | 'Melasma'
  | 'Acne'
  | 'Wrinkles'
  | 'Redness'
  | 'Dryness'
  | 'HairLoss'
  | 'ScalpTrouble'
  | 'Dandruff'
  | 'BodyFat'
  | 'BodySagging';

export type WannabeGoal =
  | 'Glass'
  | 'Baby'
  | 'Contour'
  | 'Flawless'
  | 'HairGrowth'
  | 'ScalpCalming'
  | 'Slimming'
  | 'BodyTightening';

export interface ClientProfile {
  // --- New Identity Fields ---
  id?: UUID;
  userId?: UUID; // FK -> User.id
  language?: string; // e.g. 'ko', 'en', 'ja'

  // --- Proxy Mode (User vs Client) ---
  isProxy?: boolean;
  proxyRelationship?: string; // Mother, Daughter, Friend, etc.

  // --- Basic Info ---
  name?: string;
  age: number;
  gender: Gender;
  isPregnantOrNursing?: boolean;
  medication?: string[]; // e.g. ['Roaccutane', 'Aspirin']
  activeInfection?: boolean;

  // --- Goal & Context ---
  wannabe: WannabeGoal;
  domains?: ('Face' | 'Body' | 'Scalp' | 'Hair')[];

  flightSchedule?: boolean;
  isTraveler?: boolean; // Foreigner/Traveler Flag
  stayDurationDays?: number; // How long they are staying
  eventSchedule?: {
    dDay: number;
    type: 'Wedding' | 'Photo' | 'Meeting' | 'Travel' | 'Interview';
  };

  // --- Preferences ---
  downtimePreference?: DowntimePreference;
  avoidTreatments?: MethodType[];
  painTolerance?: PainTolerance;
  budgetLevel?: 'Economy' | 'Standard' | 'Premium';
  trustFactor?: 'High' | 'Normal';

  // --- History ---
  recentTreatments?: {
    treatmentId: string;
    date: string;
    methodType?: MethodType;
  }[];

  // --- Skin Analysis Data ---
  skinTone: SkinTone;
  baumannScores: BaumannScores;
  trapAnswers?: {
    oil_check: boolean;
    sensitive_check: boolean;
    wash_tightness?: boolean;
    pore_size?: 'Small' | 'Large' | 'Medium';
  };
  concerns: Concern[];

  // --- Lifestyle ---
  lifestyle?: {
    sleepHours: number;
    waterIntake: number;
    sunExposure: 'Low' | 'Medium' | 'High';
  };
}
