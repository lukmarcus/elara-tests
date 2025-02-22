import { HubPage } from '../pages/hub.page';
import { LevelPage } from '../pages/level.page';
import { BaseModal } from './base.modal';
import { ChatModal } from './chat.modal';
import { Page } from '@playwright/test';

export class LevelEndModal extends BaseModal {
  levelEndModal = this.page.getByRole('dialog');
  header = this.levelEndModal.locator('p');
  timeBadge = this.levelEndModal.locator('.chakra-badge').nth(0);
  energyBadge = this.levelEndModal.locator('.chakra-badge').nth(1);
  lengthBadge = this.levelEndModal.locator('.chakra-badge').nth(2);

  objectiveContent = this.levelEndModal.locator('.objective-text-md-content');
  playAgainButton = this.levelEndModal.locator('button', {
    hasText: 'Play Level Again',
  });
  backToHubButton = this.levelEndModal.locator('button', {
    hasText: 'Back to Hub',
  });
  nextLevelButton = this.levelEndModal.locator('button', {
    hasText: 'Next Level',
  });

  constructor(page: Page) {
    super(page);
  }

  async clickBackToHubButton(): Promise<HubPage> {
    await this.backToHubButton.click();
    return new HubPage(this.page);
  }

  async goToChatModalInHub(): Promise<ChatModal> {
    await this.backToHubButton.click();
    return new ChatModal(this.page);
  }

  async clickNextLevelButton(): Promise<LevelPage> {
    await this.nextLevelButton.click();
    return new LevelPage(this.page);
  }
}
