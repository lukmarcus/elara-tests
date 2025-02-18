import { Page } from '@playwright/test';

export class BasePage {
  constructor(protected page: Page) {}

  async goto(): Promise<void> {
    await this.page.goto('');
    await this.page.waitForLoadState();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
