import { BasePage } from './base.page';
import { HubPage } from './hub.page';
import { Page } from '@playwright/test';

export class IntroPage extends BasePage {
  skipButton = this.page.locator('button', { hasText: 'Skip' });
  yesButton = this.page.locator('button', { hasText: 'Yes' });

  constructor(page: Page) {
    super(page);
  }

  async clickSkipButton(): Promise<HubPage> {
    await this.skipButton.click();
    await this.yesButton.click();
    return new HubPage(this.page);
  }
}
