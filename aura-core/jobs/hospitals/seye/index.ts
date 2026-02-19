import { BaseJob } from '../../core/BaseJob.js';
import type { TreatmentJobResult } from '../../core/types.js';
import { SeyeCrawler } from './crawler.js';
import { mapSeyeProductToTreatment } from './mapper.js';

export class SeyeJob extends BaseJob {
    readonly id = 'seye';

    async run(): Promise<TreatmentJobResult> {
        console.log(`[${this.id}] Job Started.`);
        
        const crawler = new SeyeCrawler();
        await crawler.init();

        try {
            // 1. Crawl Raw Data
            const rawProducts = await crawler.crawl();
            console.log(`[${this.id}] Crawled ${rawProducts.length} raw items.`);

            // 2. Save Raw Data (for debugging)
            this.saveRawData(`raw_products_${Date.now()}.json`, rawProducts);

            // 3. Map to Standard Treatment Format
            const treatments = rawProducts.map(mapSeyeProductToTreatment);
            
            // 4. Save Final Result
            this.saveResult(`${this.id}_treatments.json`, treatments);

            return {
                treatments,
                timestamp: new Date().toISOString(),
                source: 'Seye Clinic',
                count: treatments.length
            };

        } catch (error) {
            console.error(`[${this.id}] Job Failed:`, error);
            throw error;
        } finally {
            await crawler.close();
        }
    }
}
