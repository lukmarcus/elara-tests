import { LevelPage } from '../pages/level.page';
import { BaseModal } from './base.modal';
import { Page, expect } from '@playwright/test';

export class LevelSelectModal extends BaseModal {
  modal = this.page.locator('[role="dialog"]');
  closeButton = this.modal.locator('[aria-label="Close"]');
  body = this.modal.locator('#level-select-modal-body');
  leftColumn = this.body.locator('.chakra-stack').first();
  rightColumn = this.body.locator('.chakra-stack').last();

  // Left column locators
  chooseLevelHeader = this.leftColumn.locator('>div').nth(0);
  levelList = this.leftColumn.locator('>div').nth(1);
  levelButton = this.levelList.locator('button');
  numberOfLevels = this.levelButton.count();

  // Right column locators
  goButton = this.rightColumn.locator('button');

  constructor(page: Page) {
    super(page);
  }

  async checkNewBadgeInLevelList(level: number): Promise<void> {
    const expectedNewBadgeText = 'New';
    for (let i = 0; i < (await this.numberOfLevels); i++) {
      const levelBadge = this.levelButton.nth(i).locator('.chakra-badge');
      if (i === level) {
        await expect(levelBadge).toHaveCount(1);
        await expect(levelBadge).toHaveText(expectedNewBadgeText);
      } else {
        await expect(levelBadge).toHaveCount(0);
      }
    }
  }

  async checkEnabledLevelsInLevelList(level: number): Promise<void> {
    for (let i = 0; i < (await this.numberOfLevels); i++) {
      if (i <= level) {
        await expect(this.levelButton.nth(i)).toBeEnabled();
      } else {
        await expect(this.levelButton.nth(i)).toBeDisabled();
      }
    }
  }

  async clickGoButton(): Promise<LevelPage> {
    await this.goButton.click();
    return new LevelPage(this.page);
  }
}
