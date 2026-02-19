import type { Treatment } from '../../engine/types/index.js';

export interface TreatmentJobResult {
  treatments: Treatment[];
  timestamp: string;
  source: string;
  count: number;
}

export interface ITreatmentJob {
  readonly id: string; // e.g., 'seye', 'hospital_b'
  run(): Promise<TreatmentJobResult>;
}

// === Crawler Standard Interfaces ===

export interface HospitalProductOption {
  name: string;
  price: number;
  originalPrice?: number;
}

export interface HospitalProduct {
  id: string; // Unique ID within the hospital
  hospitalName: string; // e.g. "Seye Clinic"
  name: string; // Product Name
  category: string; // Category ID or Name
  url: string; // Detail Page URL
  price?: number; // Representative price
  currency?: string;
  options: HospitalProductOption[];
  description?: string;
  thumbnailUrl?: string;
  crawledAt: string; // ISO Date
}
