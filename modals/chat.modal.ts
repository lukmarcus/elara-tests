import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class ChatModal extends BaseModal {
  constructor(page: Page) {
    super(page);
  }

  async clickChatButton(text: string): Promise<void> {
    await this.page.locator('button', { hasText: text }).click();
  }
}
