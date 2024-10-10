import { setWorldConstructor, World } from '@cucumber/cucumber';
import { chromium, Page, Browser } from '@playwright/test';

export let page: Page;
let browser: Browser;

class CustomWorld extends World {
  constructor(options: any) {
    super(options);
  }

  async init() {
    browser = await chromium.launch({ headless: true });
    const context = await browser.newContext();
    page = await context.newPage();
  }

  async cleanup() {
    await browser.close();
  }
}

setWorldConstructor(CustomWorld);

export default CustomWorld;