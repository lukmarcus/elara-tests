import { IntroPage } from '../pages/intro.page';
import { LevelPage } from '../pages/level.page';
import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class HelpModal extends BaseModal {
  nextButton = this.page.locator('button', { hasText: 'Next' });
  launchButton = this.page.locator('button', { hasText: 'Launch' });
  doneButton = this.page.locator('button', { hasText: 'Done' });

  constructor(page: Page) {
    super(page);
  }

  async clickLaunchButton(): Promise<IntroPage> {
    await this.launchButton.click();
    return new IntroPage(this.page);
  }

  async clickDoneButton(): Promise<LevelPage> {
    await this.doneButton.click();
    return new LevelPage(this.page);
  }
}
