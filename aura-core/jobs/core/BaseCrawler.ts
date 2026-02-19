import puppeteerExtra from 'puppeteer-extra';
import type { Browser, Page } from 'puppeteer';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

const puppeteer = puppeteerExtra as any;
puppeteer.use(StealthPlugin());

export abstract class BaseCrawler<T> {
    protected browser: Browser | null = null;
    protected page: Page | null = null;

    async init() {
        // console.log(`[Crawler] Initializing...`);
        this.browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1920,1080']
        });
        if (!this.browser) throw new Error('Browser failed to launch');
        this.page = await this.browser.newPage();
        await this.page.setViewport({ width: 1920, height: 1080 });
    }

    async close() {
        if (this.browser) await this.browser.close();
        // console.log(`[Crawler] Closed.`);
    }

    abstract crawl(): Promise<T[]>;
}
