import { SeyeJob } from './hospitals/seye/index.js';
import { GuJob } from './hospitals/gu/index.js';
import { NohdJob } from './hospitals/nohd/index.js';
import type { ITreatmentJob } from './core/types.js';

export const jobs: Record<string, ITreatmentJob> = {
    'seye': new SeyeJob(),
    'gu': new GuJob(),
    'nohd': new NohdJob(),
};
