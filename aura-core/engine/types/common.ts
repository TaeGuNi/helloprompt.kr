export type SafetyFlag =
  | 'SAFE_MODE'
  | 'NO_DOWNTIME'
  | 'NO_DOWNTIME_STRICT'
  | 'LOW_DOWNTIME'
  | 'SOOBUJI_DETECTED'
  | 'HEAVY_USER'
  | 'NEWBIE'
  | 'SHIELD_PREGNANCY'
  | 'SHIELD_MEDICATION'
  | 'SHIELD_INFECTION'
  | 'LOW_PAIN_TOLERANCE'
  | 'UV_SENSITIVE'
  | 'BUDGET_CONSTRAINED'
  | 'SAFE_PASS'
  | 'FLIGHT_RISK'
  | 'PROXY_MODE'
  | 'FOREIGNER_MODE';

export interface BaumannScores {
  oil: number;
  sensitivity: number;
  pigment: number;
  wrinkle: number;
}

export type UUID = string; // e.g., "550e8400-e29b-41d4-a716-446655440000"

export type Gender = 'Female' | 'Male';
export type SkinTone = 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI';

export type MethodType =
  | 'Laser'
  | 'Needle'
  | 'RF'
  | 'Ultrasound'
  | 'Peel'
  | 'Injective'
  | 'Other';

export type DowntimePreference = 'NoDowntime' | 'Short' | 'LongOK';
export type PainTolerance = 'Low' | 'Medium' | 'High';

// TODO: Refine contraindication types with medical advisory board
export type Contraindication =
  | 'Pregnancy'
  | 'DarkSkin'
  | 'Keloid'
  | 'Autoimmune'
  | 'Isotretinoin'
  | 'MetalImplant'
  | 'ActiveInfection'
  | string; // Allow string for flexibility during research phase
