import { HelpModal } from '../modals/help.modal';
import { BasePage } from './base.page';
import { HubPage } from './hub.page';
import { Page } from '@playwright/test';

export class MainMenuPage extends BasePage {
  continueButton = this.page.locator('button', { hasText: 'Continue' });
  newGameButton = this.page.locator('button', { hasText: 'New Game' });
  settingsButton = this.page.locator('button', { hasText: 'Settings' });
  aboutButton = this.page.locator('button', { hasText: 'About' });
  whatsNewButton = this.page.locator('button', { hasText: "What's New" });
  versionText = this.page.locator('#root > div > p');

  constructor(page: Page) {
    super(page);
  }

  async clickNewGameButton(): Promise<HelpModal> {
    await this.newGameButton.click();
    return new HelpModal(this.page);
  }

  async clickContinueButton(): Promise<HubPage> {
    await this.continueButton.click();
    return new HubPage(this.page);
  }
}
