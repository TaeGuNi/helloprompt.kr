import { BaseJob } from '../../core/BaseJob.js';
import type { TreatmentJobResult } from '../../core/types.js';
import { NohdCrawler } from './crawler.js';
import { mapNohdProductToTreatment } from './mapper.js';

export class NohdJob extends BaseJob {
    readonly id = 'nohd';

    async run(): Promise<TreatmentJobResult> {
        console.log(`[${this.id}] Job Started.`);
        const crawler = new NohdCrawler();
        await crawler.init();

        try {
            const rawProducts = await crawler.crawl();
            this.saveRawData(`nohd_raw_${Date.now()}.json`, rawProducts);

            const treatments = rawProducts.map(mapNohdProductToTreatment);
            this.saveResult(`${this.id}_treatments.json`, treatments);

            return {
                treatments,
                timestamp: new Date().toISOString(),
                source: 'Nohd Clinic',
                count: treatments.length
            };
        } finally {
            await crawler.close();
        }
    }
}
