import { BaseCrawler } from '../../core/BaseCrawler.js';
import type { SeyeProduct, SeyeOption } from './types.js';

export class SeyeCrawler extends BaseCrawler<SeyeProduct> {
  async crawl(): Promise<SeyeProduct[]> {
    if (!this.page) throw new Error('Crawler not initialized');

    // 1. Define Targets
    const targets = [
      { url: 'https://seyeclinic.com/ko/events', type: 'event' },
    ];
    for (let i = 1; i <= 21; i++) {
      targets.push({
        url: `https://seyeclinic.com/ko/categories/${i}`,
        type: 'category',
      });
    }

    console.log(`[Seye] Starting Crawl (${targets.length} pages)...`);
    const productMap = new Map<string, SeyeProduct>();

    for (const target of targets) {
      try {
        // Navigate
        await this.page.goto(target.url, {
          waitUntil: 'networkidle2',
          timeout: 30000,
        });

        // Extract Data from Next.js Hydration Scripts
        const scriptContent = await this.page.evaluate(() => {
          const scripts = Array.from(document.querySelectorAll('script'));
          return scripts
            .map((s) => s.textContent || '')
            .filter((t) => t.includes('self.__next_f.push'));
        });

        // Parse in Node.js context
        const categoryIdMatch = target.url.match(/categories\/(\d+)/);
        const categoryId = categoryIdMatch ? categoryIdMatch[1] : 'event';

        const foundItems = this.parseNextJsData(
          scriptContent,
          target.type,
          categoryId,
        );

        if (foundItems.length > 0) {
          process.stdout.write('+');
          foundItems.forEach((p) => productMap.set(p.id, p));
        } else {
          process.stdout.write('.');
        }
      } catch (err) {
        console.error(`\n[Seye] Failed ${target.url}:`, err);
      }
    }

    console.log(`\n[Seye] Crawl Complete. Found ${productMap.size} items.`);
    return Array.from(productMap.values());
  }

  private parseNextJsData(
    scripts: string[],
    type: string,
    categoryId: string,
  ): SeyeProduct[] {
    const results: SeyeProduct[] = [];
    const today = new Date().toISOString();

    for (const script of scripts) {
      try {
        // Regex to capture the string content: push([1,"..."])
        // Make it more flexible for whitespace
        const regex = /self\.__next_f\.push\(\[\d+,\s*"(.*)"\]\)/g;
        let match;

        while ((match = regex.exec(script)) !== null) {
          let jsonString = match[1];

          // Unescape standard JSON escapes
          jsonString = jsonString.replace(/\\"/g, '"').replace(/\\\\/g, '\\');

          // Now look for specific arrays
          const keys = ['"events":', '"initialSubCategories":'];

          for (const key of keys) {
            const startIndex = jsonString.indexOf(key);
            if (startIndex !== -1) {
              // Move to the start of the array '['
              const arrayStartIndex = jsonString.indexOf('[', startIndex);
              if (arrayStartIndex !== -1) {
                // Bracket counting to find the end
                let bracketCount = 0;
                let endIndex = -1;
                let inString = false;
                let escaped = false;

                for (let i = arrayStartIndex; i < jsonString.length; i++) {
                  const char = jsonString[i];

                  if (inString) {
                    if (char === '\\' && !escaped) {
                      escaped = true;
                    } else if (char === '"' && !escaped) {
                      inString = false;
                    } else {
                      escaped = false;
                    }
                    continue;
                  }

                  if (char === '"') {
                    inString = true;
                  } else if (char === '[') {
                    bracketCount++;
                  } else if (char === ']') {
                    bracketCount--;
                    if (bracketCount === 0) {
                      endIndex = i + 1;
                      break;
                    }
                  }
                }

                if (endIndex !== -1) {
                  const jsonSubstring = jsonString.substring(
                    arrayStartIndex,
                    endIndex,
                  );
                  try {
                    const rawItems = JSON.parse(jsonSubstring);

                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    rawItems.forEach((item: any) => {
                      if (!item.id || !item.translations) return;

                      const nameObj = item.translations.find(
                        (t: { languageType: string; name: string }) =>
                          t.languageType === 'ko',
                      );
                      const name = nameObj ? nameObj.name : 'Unknown';

                      // Price extraction
                      const products =
                        item.products || item.eventProducts || [];
                      // eslint-disable-next-line @typescript-eslint/no-explicit-any
                      const options: SeyeOption[] = products.map((p: any) => ({
                        name: 'Standard',
                        price: p.eventAmount || p.amount,
                        originalPrice: p.amount,
                      }));

                      results.push({
                        id: `${item.code || item.id}`, // Removed seye_ prefix
                        hospitalName: 'Seye Clinic',
                        name: name,
                        category: type,
                        url: `https://seyeclinic.com/ko/categories/${categoryId}/products`, // Fixed URL
                        options: options,
                        crawledAt: today,
                      });
                    });
                  } catch {
                    // Ignore parse errors for partial chunks
                  }
                }
              }
            }
          }
        }
      } catch {
        // Ignore script errors
      }
    }
    return results;
  }
}
