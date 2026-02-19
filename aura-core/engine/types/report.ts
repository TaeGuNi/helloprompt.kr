import type { Treatment, HospitalListing } from './master.js';

export interface PricingComparison {
  treatmentName: string;
  marketAvg: number;
  ourBestPrice: number;
  savings: number;
  savingsPercent: number;
  currency: string;
}

export interface RecommendationBlock {
  treatment: Treatment;
  matchReason: string; // Why we picked this
  matchScore: number; // Internal score exposed for trust

  // Trust Signals
  safetyBadge: 'High Safety' | 'Moderate' | 'Clinical Attention Required';
  painIndex: number; // 1-5
  downtimeText: string; // Human readable "No downtime" or "3-5 days"

  // Clinical Context
  mechanism: string; // "Uses Ultrasound to heat deep tissue..."
  expectedOutcome: string; // "Tighter jawline..."
  
  // Hospital Recommendation (Single Best Option)
  recommendedHospital?: HospitalListing; 
}

export interface PricingBlock {
  comparisons: PricingComparison[];
  totalEstimatedSavings: number;
  currency: string;
  guaranteeText: string;
  trustBadge: 'Best Price Guaranteed' | 'Verified Partner';
}

export interface FinalReport {
  id: string;
  generatedAt: Date;

  // Client Context
  clientName: string;
  baumannType: string;

  // Content
  headline: string; // "Focus on Barrier Repair"
  summary: string;

  // Core Sections
  recommendations: RecommendationBlock[];
  pricing: PricingBlock;

  // Trust Metadata
  trustScore: number; // 0-100 Global Trust Score of this analysis
  disclaimer: string;
}

export interface FunRecord {
  title: string;
  baumannType: string;
  shareableImageText: string;
  medicalDetails?: never; // Explicitly exclude
}

export interface MedicalRecord {
  clinicalNotes: string;
  contraindications: string[];
  consentFormDraft: string;
  treatmentPlan: any[]; // Using any for brevity or Treatment[]
}
