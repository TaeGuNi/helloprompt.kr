# Aura Core V1.0.0 API Reference

## 1. Core Engine API

### `SkinnEngine` (Main Entry Point)
The primary class for executing the skin analysis pipeline.

#### `analyze(user: ClientProfile): DiagnosisResult`
Takes a user profile and returns a complete diagnosis including safety checks, Baumann type, and recommendations.

**Input:** `ClientProfile`
**Output:** `DiagnosisResult`

---

## 2. Data Types

### `ClientProfile` (Input)
```typescript
interface ClientProfile {
  // Step 0: Basic Info
  name?: string;
  age: number;
  gender: 'Female' | 'Male';
  isPregnantOrNursing?: boolean; // Safety Flag

  // Step 1: Goal
  wannabe: WannabeGoal; // 'Glass', 'Baby', 'Contour', 'Flawless', etc.
  domains?: ('Face' | 'Body' | 'Scalp')[]; // Hybrid Flow Target

  // Step 2: Concerns
  concerns: Concern[];

  // Step 4: Context & Psych
  flightSchedule?: boolean; // <24h
  eventSchedule?: {
    dDay: number;
    type: 'Wedding' | 'Photo' | 'Meeting' | 'Travel' | 'Interview';
  };
  downtimePreference?: 'NoDowntime' | 'Short' | 'LongOK';
  avoidTreatments?: MethodType[]; // e.g., ['Needle', 'Laser']
  painTolerance?: 'Low' | 'Medium' | 'High';
  recentTreatments?: {
    treatmentId: string;
    date: string; // ISO or "Recent"
    methodType?: MethodType;
  }[];
  
  // Step 5: Skin Tone
  skinTone: 'I' | 'II' | 'III' | 'IV' | 'V' | 'VI';

  // Step 6: Baumann
  baumannScores: {
    oil: number;
    sensitivity: number;
    pigment: number;
    wrinkle: number;
  };
}
```

### `DiagnosisResult` (Output)
```typescript
interface DiagnosisResult {
  baumannType: string; // e.g., "DSPW"
  isTrapDetected: boolean;
  safetyFlags: SafetyFlag[];
  
  // Scoring
  scoreBreakdown: Record<string, number>;
  scoreDetails?: Record<string, string[]>; // Trust Factor details
  
  // Recommendations
  finalRecommendations: Treatment[];
  
  // Insights
  lifestylePrescription?: string;
  futureSimulation?: string;
}
```

### `Treatment` (Data)
```typescript
interface Treatment {
  id: string;
  name: string;
  category: string;
  methodType: MethodType;
  targetArea?: 'Face' | 'Body' | 'Scalp';
  
  // Specs
  painLevel: 1 | 2 | 3 | 4 | 5;
  safetyLevel: 'Safe' | 'Caution' | 'Danger';
  downtimeLevel: 0 | 1 | 2 | 3; // 0=None
  
  // Constraints
  minimumInterval?: number; // Weeks
  minIntervalMonths?: number; // Legacy
  contraindications: Contraindication[];
  
  // Pricing & Availability
  priceRange: { min: number; max: number; currency: string };
  standardPrice?: number;
  durationMinutes: number;
  
  /** List of hospitals offering this treatment */
  availableHospitals?: {
    name: string;
    price: number;
    currency: string;
    url?: string;
  }[];
}
```

## 3. Enumerations

### `SafetyFlag`
- `SAFE_MODE`: Pregnancy/Nursing detected.
- `NO_DOWNTIME`: Flight schedule detected.
- `NO_DOWNTIME_STRICT`: User preference for zero downtime.
- `LOW_DOWNTIME`: User preference for minimal downtime.
- `SOOBUJI_DETECTED`: Inner dryness trap detected.

### `WannabeGoal`
- Face: `Glass`, `Baby`, `Contour`, `Flawless`
- Body: `Slimming`, `BodyTightening`
- Scalp: `HairGrowth`, `ScalpCalming`
