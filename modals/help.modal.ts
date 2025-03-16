import { IntroPage } from '../pages/intro.page';
import { LevelPage } from '../pages/level.page';
import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class HelpModal extends BaseModal {
  modal = this.page.locator('[role="dialog"]');
  title = this.modal.locator('.chakra-text').first();
  description = this.modal.locator('.chakra-text').last();
  nextButton = this.modal.locator('button', { hasText: 'Next' });
  launchButton = this.modal.locator('button', { hasText: 'Launch' });
  doneButton = this.modal.locator('button', { hasText: 'Done' });

  constructor(page: Page) {
    super(page);
  }

  async clickLaunchButton(): Promise<IntroPage> {
    await this.launchButton.click();
    return new IntroPage(this.page);
  }

  async clickDoneButton(): Promise<void> {
    await this.doneButton.click();
  }
}
