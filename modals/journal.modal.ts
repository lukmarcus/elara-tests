import { HubPage } from '../pages/hub.page';
import { BaseModal } from './base.modal';
import { HelpModal } from './help.modal';
import { Page } from '@playwright/test';

export class JournalModal extends BaseModal {
  helpModal = new HelpModal(this.page);

  functionsButton = this.page.locator('button', { hasText: 'Functions' });
  commentsButton = this.page.locator('button', { hasText: 'Comments' });

  backToHubButton = this.page.locator('button', { hasText: 'Back to Hub' });
  nextPageButton = this.page.locator('button', { hasText: 'Next Page' });

  constructor(page: Page) {
    super(page);
  }

  async clickBackToHubButton(): Promise<HubPage> {
    await this.backToHubButton.click();
    return new HubPage(this.page);
  }
}
