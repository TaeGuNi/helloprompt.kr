import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Treatment } from '../../engine/types/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_DIR = path.resolve(__dirname, '../../data/treatments');
const MASTER_PATH = path.join(DATA_DIR, 'master.json');

export async function syncTreatments(
  newTreatments: Treatment[],
): Promise<number> {
  let master: Treatment[] = [];
  if (fs.existsSync(MASTER_PATH)) {
    try {
      master = JSON.parse(fs.readFileSync(MASTER_PATH, 'utf-8'));
    } catch {
      console.error('⚠️ Failed to load master.json, creating new.');
    }
  }

  for (const t of newTreatments) {
    const existingIndex = master.findIndex((m) => m.id === t.id);

    if (existingIndex !== -1) {
      // Update Existing: Merge Inventory, Preserve Logic
      const existing = master[existingIndex];

      // 1. Merge Hospitals
      const currentHospitals = existing.availableHospitals || [];
      const newHospitals = t.availableHospitals || [];

      // Filter out old entries for the same hospital/option to update them
      // Or just append?
      // Strategy: Remove entries from same hospitalId provided by crawler, then add new ones.
      // This ensures we update prices if they changed.

      // Assuming t comes from ONE crawler run (but here newTreatments is aggregated).
      // Actually, syncer receives aggregated list from runner.
      // But runner aggregates from multiple jobs.

      // Ideally, we treat 't.availableHospitals' as the "New Truth" for those hospitals.
      // But 't' is one object. If Seye and Gu both mapped to ULTHERA,
      // newTreatments will contain TWO objects for ULTHERA?
      // Runner: allTreatments.push(...res.value.treatments);
      // Yes! 'newTreatments' can have duplicates of the same ID!

      // We need to handle this.
      // Actually, the loop below iterates 'newTreatments'.
      // If we encounter ULTHERA twice, we merge twice.

      const mergedHospitals = [...currentHospitals];

      newHospitals.forEach((newH) => {
        // Remove existing entry for same hospital and optionName (or strictly same hospital if optionName is loose)
        // Let's match by hospitalId and optionName
        const idx = mergedHospitals.findIndex(
          (h) =>
            h.hospitalId === newH.hospitalId &&
            h.optionName === newH.optionName,
        );

        if (idx !== -1) {
          mergedHospitals[idx] = newH; // Update
        } else {
          mergedHospitals.push(newH); // Add
        }
      });

      existing.availableHospitals = mergedHospitals;

      // 2. Recalculate Price Range
      if (mergedHospitals.length > 0) {
        const prices = mergedHospitals.map((h) => h.price);
        existing.priceRange = {
          min: Math.min(...prices),
          max: Math.max(...prices),
          currency: 'KRW',
        };
      }

      // 3. Update Standard Price (Optional, maybe average?)
      // existing.standardPrice = ...

      master[existingIndex] = existing;
    } else {
      // Add New
      master.push(t);
    }
  }

  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  fs.writeFileSync(MASTER_PATH, JSON.stringify(master, null, 2));

  return master.length;
}
