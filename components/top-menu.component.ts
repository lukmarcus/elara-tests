import { HubPage } from '../pages/hub.page';
import { Page } from '@playwright/test';

export class TopMenuComponent {
  constructor(private page: Page) {}

  async clickHubButton(): Promise<HubPage> {
    await this.page.locator('button', { hasText: 'Hub' }).click();
    return new HubPage(this.page);
  }

  async clickSettingsButton(): Promise<void> {
    await this.page.locator('button', { hasText: 'Settings' }).click();
  }

  async clickFeedbackButton(): Promise<void> {
    await this.page.locator('button', { hasText: 'Feedback' }).click();
  }
}
