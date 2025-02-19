import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class ChatPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async clickChatButton(text: string): Promise<void> {
    await this.page.locator('button', { hasText: text }).click();
  }
}
