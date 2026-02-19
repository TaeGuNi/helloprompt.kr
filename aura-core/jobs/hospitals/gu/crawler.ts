import { BaseCrawler } from '../../core/BaseCrawler.js';
import type { GuProduct } from './types.js';

export class GuCrawler extends BaseCrawler<GuProduct> {
  async crawl(): Promise<GuProduct[]> {
    if (!this.page) throw new Error('Crawler not initialized');

    const url = 'https://gu.clinic/kr/treatment-reservation';
    console.log(`[Gu] Crawling ${url}...`);

    const collectedProducts: GuProduct[] = [];
    const today = new Date().toISOString();

    this.page.on('response', async (response) => {
      const request = response.request();
      if (
        request.url().includes('get-products') &&
        request.method() === 'POST'
      ) {
        try {
          const json = await response.json();
          const items = json.products || json.data; // Fallback

          if (items && Array.isArray(items)) {
            console.log(`[Gu] Intercepted ${items.length} items`);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            items.forEach((item: any) => {
              const price = item.eventPrice || item.price || item.amount || 0;
              const name = item.name || item.title || 'Unknown';

              collectedProducts.push({
                id: `gu_${item.id}`,
                hospitalName: 'Gu Clinic',
                name: name,
                category: item.category?.name || 'General',
                url: `https://gu.clinic/kr/treatment-reservation`,
                price: price,
                currency: 'KRW',
                options: [],
                crawledAt: today,
              });
            });
          }
        } catch {
          // console.error('[Gu] Intercept Error:', e);
        }
      }
    });

    await this.page.goto(url, {
      waitUntil: 'domcontentloaded',
      timeout: 60000,
    });

    await this.page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 200;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight) {
            clearInterval(timer);
            resolve();
          }
        }, 100);
      });
    });

    await new Promise((r) => setTimeout(r, 3000));

    return collectedProducts;
  }
}
