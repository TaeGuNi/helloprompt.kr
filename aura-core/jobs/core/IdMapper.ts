import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface Rule {
  targetId: string;
  keywords: string[];
}

export class IdMapper {
  private static instance: IdMapper;
  private rules: Rule[] = [];

  private constructor() {
    const mappingPath = path.resolve(
      __dirname,
      '../../data/mapping/synonyms.json',
    );
    if (fs.existsSync(mappingPath)) {
      try {
        const data = JSON.parse(fs.readFileSync(mappingPath, 'utf-8'));
        this.rules = data.rules || [];
      } catch (e) {
        console.error('[IdMapper] Failed to load synonyms.json:', e);
      }
    } else {
      console.warn('[IdMapper] synonyms.json not found.');
    }
  }

  public static getInstance(): IdMapper {
    if (!IdMapper.instance) {
      IdMapper.instance = new IdMapper();
    }
    return IdMapper.instance;
  }

  /**
   * Resolves a Standard ID from a raw product name.
   * Returns null if no match found.
   */
  public resolve(rawName: string): string | null {
    if (!rawName) return null;

    const searchTarget = rawName.toLowerCase();

    for (const rule of this.rules) {
      for (const keyword of rule.keywords) {
        if (searchTarget.includes(keyword.toLowerCase())) {
          return rule.targetId;
        }
      }
    }
    return null;
  }
}
