import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class JournalModal extends BaseModal {
  functionsButton = this.page.locator('button', { hasText: 'Functions' });
  commentsButton = this.page.locator('button', { hasText: 'Comments' });

  backToHubButton = this.page.locator('button', { hasText: 'Back to Hub' });
  nextPageButton = this.page.locator('button', { hasText: 'Next Page' });

  constructor(page: Page) {
    super(page);
  }
}
