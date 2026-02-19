import type { Treatment } from '../types/index.js';

export interface IDataProvider {
  /**
   * Initialize connection or load data into memory
   */
  connect(): Promise<void>;

  /**
   * Retrieve all treatments
   */
  getTreatments(): Promise<Treatment[]>;

  // Future methods:
  // getTreatmentById(id: string): Promise<Treatment | null>;
  // saveAnalysisResult(result: any): Promise<void>;
}
