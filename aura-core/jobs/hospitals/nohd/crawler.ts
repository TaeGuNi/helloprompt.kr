import { BaseCrawler } from '../../core/BaseCrawler.js';
import type { NohdProduct } from './types.js';

export class NohdCrawler extends BaseCrawler<NohdProduct> {
  async crawl(): Promise<NohdProduct[]> {
    if (!this.page) throw new Error('Crawler not initialized');

    const url = 'https://nohdclinic.com/ko/products';
    console.log(`[Nohd] Crawling ${url}...`);

    const collectedProducts: NohdProduct[] = [];
    const today = new Date().toISOString();

    this.page.on('response', async (response) => {
      const requestUrl = response.url();
      if (requestUrl.includes('api/product-detail-pages')) {
        try {
          const json = await response.json();
          // console.log(`[Nohd] API Response Keys: ${Object.keys(json)}`);

          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let items: any[] = [];
          if (json.data) items = json.data;
          else if (Array.isArray(json)) items = json;
          else if (json.items) items = json.items;

          if (items.length > 0) {
            console.log(`[Nohd] Intercepted ${items.length} items`);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            items.forEach((item: any) => {
              // Inspect item structure if needed
              // console.log(item);

              const product = item.product || item;
              const price = product.price || product.amount || 0;

              collectedProducts.push({
                id: `nohd_${product.id}`,
                hospitalName: 'Nohd Clinic',
                name: product.name || product.title || 'Unknown',
                category: 'General',
                url: url,
                price:
                  typeof price === 'string'
                    ? parseInt(price.replace(/[^0-9]/g, ''))
                    : price,
                currency: 'KRW',
                options: [],
                crawledAt: today,
              });
            });
          }
        } catch (e) {
          console.error('[Nohd] Error:', e);
        }
      }
    });

    await this.page.goto(url, { waitUntil: 'networkidle2', timeout: 60000 });

    await this.page.evaluate(async () => {
      await new Promise<void>((resolve) => {
        let totalHeight = 0;
        const distance = 200;
        const timer = setInterval(() => {
          const scrollHeight = document.body.scrollHeight;
          window.scrollBy(0, distance);
          totalHeight += distance;

          if (totalHeight >= scrollHeight || totalHeight > 10000) {
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
