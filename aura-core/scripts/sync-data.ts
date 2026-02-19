import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import type { Treatment } from '../engine/types/index.js';
import { syncTreatments } from '../jobs/core/syncer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataDir = path.resolve(__dirname, '../data/treatments');

async function main() {
  console.log('🔄 Starting Manual Data Sync (from files)...');

  // Load Hospital Files
  if (!fs.existsSync(dataDir)) {
    console.error(`❌ Data directory not found: ${dataDir}`);
    process.exit(1);
  }

  const files = fs
    .readdirSync(dataDir)
    .filter((f) => f.endsWith('_treatments.json'));

  if (files.length === 0) {
    console.log('⚠️ No hospital data files found to merge.');
    return;
  }

  const allTreatments: Treatment[] = [];

  for (const file of files) {
    const filePath = path.join(dataDir, file);
    try {
      const treatments: Treatment[] = JSON.parse(
        fs.readFileSync(filePath, 'utf-8'),
      );
      console.log(`➕ Loaded ${treatments.length} items from ${file}`);
      allTreatments.push(...treatments);
    } catch (e) {
      console.error(`❌ Failed to parse ${file}:`, e);
    }
  }

  const total = await syncTreatments(allTreatments);
  console.log(`✅ Sync Complete. Master contains ${total} items.`);
}

main();
