import { BaseJob } from '../../core/BaseJob.js';
import type { TreatmentJobResult } from '../../core/types.js';
import { GuCrawler } from './crawler.js';
import { mapGuProductToTreatment } from './mapper.js';

export class GuJob extends BaseJob {
    readonly id = 'gu';

    async run(): Promise<TreatmentJobResult> {
        console.log(`[${this.id}] Job Started.`);
        const crawler = new GuCrawler();
        await crawler.init();

        try {
            const rawProducts = await crawler.crawl();
            this.saveRawData(`gu_raw_${Date.now()}.json`, rawProducts);

            const treatments = rawProducts.map(mapGuProductToTreatment);
            this.saveResult(`${this.id}_treatments.json`, treatments);

            return {
                treatments,
                timestamp: new Date().toISOString(),
                source: 'Gu Clinic',
                count: treatments.length
            };
        } finally {
            await crawler.close();
        }
    }
}
