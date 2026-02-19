import * as fs from 'fs';
import * as path from 'path';
import type { IDataProvider } from '../interfaces/IDataProvider.js';
import type { Treatment } from '../types/index.js';

export class JsonDataProvider implements IDataProvider {
  private treatments: Treatment[] = [];
  private isLoaded = false;
  private readonly dataPath: string;

  constructor(basePath?: string) {
    this.dataPath = basePath
      ? path.resolve(basePath, 'data/treatments/master.json')
      : path.resolve(process.cwd(), 'data/treatments/master.json');
  }

  async connect(): Promise<void> {
    if (this.isLoaded) return;

    if (!fs.existsSync(this.dataPath)) {
      throw new Error(
        `[JsonDataProvider] Critical Error: File not found at ${this.dataPath}`,
      );
    }

    try {
      const rawData = fs.readFileSync(this.dataPath, 'utf-8');
      const parsed: unknown[] = JSON.parse(rawData);

      if (!Array.isArray(parsed)) {
        throw new Error('[JsonDataProvider] Root JSON must be an array.');
      }

      this.treatments = parsed.map((item, index) => this.validate(item, index));
      this.isLoaded = true;
    } catch (error) {
      console.error(`[JsonDataProvider] Load failed:`, error);
      throw error;
    }
  }

  async getTreatments(): Promise<Treatment[]> {
    if (!this.isLoaded) await this.connect();
    return this.treatments;
  }

  private validate(input: unknown, index: number): Treatment {
    if (typeof input !== 'object' || input === null) {
      throw new Error(
        `[JsonDataProvider] Validation Error (Index ${index}): Item must be an object.`,
      );
    }
    const item = input as Partial<Treatment>;
    const context = item.id ? `ID ${item.id}` : `Index ${index}`;

    if (!item.id || typeof item.id !== 'string') {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): Missing or invalid 'id'.`,
      );
    }
    if (!item.name || typeof item.name !== 'string') {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): Missing 'name'.`,
      );
    }
    if (!item.category) {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): Missing 'category'.`,
      );
    }

    if (
      typeof item.painLevel !== 'number' ||
      item.painLevel < 1 ||
      item.painLevel > 5
    ) {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): Invalid 'painLevel'.`,
      );
    }
    if (typeof item.downtimeLevel !== 'number') {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): Invalid 'downtimeLevel'.`,
      );
    }

    if (!item.priceRange || typeof item.priceRange.min !== 'number') {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): Invalid 'priceRange'.`,
      );
    }
    if (!Array.isArray(item.contraindications)) {
      throw new Error(
        `[JsonDataProvider] Validation Error (${context}): 'contraindications' must be an array.`,
      );
    }

    return item as Treatment;
  }
}
