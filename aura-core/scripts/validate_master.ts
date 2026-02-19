import fs from 'fs';
import path from 'path';

interface Treatment {
  id: string;
  name: string;
  painLevel?: number;
  downtimeLevel?: number;
  priceRange?: {
    min: number;
    max: number;
    currency: string;
  };
  minIntervalMonths?: number;
  minimumInterval?: number;
}

const masterPath = path.join(
  process.cwd(),
  'projects/aura-core/data/treatments/master.json',
);

try {
  const data = fs.readFileSync(masterPath, 'utf8');
  const treatments: Treatment[] = JSON.parse(data);

  const total = treatments.length;
  let missingPain = 0;
  let missingDowntime = 0;
  let missingPrice = 0;
  let missingInterval = 0;
  let invalidPain = 0; // > 5 or < 0
  let invalidDowntime = 0; // > 5 or < 0

  treatments.forEach((t) => {
    if (t.painLevel === undefined) missingPain++;
    else if (t.painLevel < 0 || t.painLevel > 5) invalidPain++;

    if (t.downtimeLevel === undefined) missingDowntime++;
    else if (t.downtimeLevel < 0 || t.downtimeLevel > 5) invalidDowntime++;

    if (!t.priceRange || t.priceRange.min === undefined) missingPrice++;

    if (t.minIntervalMonths === undefined && t.minimumInterval === undefined)
      missingInterval++;
  });

  const integrityScore = Math.max(
    0,
    100 - ((missingPain + missingDowntime + missingPrice) / total) * 100,
  ).toFixed(1);

  console.log(`--- Data Integrity Report (Phase 2 Focus) ---`);
  console.log(`Total Treatments: ${total}`);
  console.log(`Missing Pain Level: ${missingPain}`);
  console.log(`Missing Downtime Level: ${missingDowntime}`);
  console.log(`Missing Price: ${missingPrice}`);
  console.log(`Missing Interval info: ${missingInterval} (Warning only)`);
  console.log(`Invalid Pain (0-5): ${invalidPain}`);
  console.log(`Invalid Downtime (0-5): ${invalidDowntime}`);
  console.log(`Integrity Score: ${integrityScore}%`);
} catch (err) {
  console.error('Error reading master.json', err);
}
