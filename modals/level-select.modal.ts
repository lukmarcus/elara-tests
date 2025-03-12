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
  levelName = this.rightColumn.locator('p.chakra-text');
  levelObjective = this.rightColumn.locator('div > .chakra-text');
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

  async checkLevelsIconsinLevelList(level: number): Promise<void> {
    const levelChecked =
      'M16.59 7.58L10 14.17l-3.59-3.58L5 12l5 5 8-8zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z';
    const levelBlocked =
      'M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z';
    for (let i = 0; i < (await this.numberOfLevels); i++) {
      if (i <= level) {
        await expect(
          this.levelButton.nth(i).locator('path').nth(1),
        ).toHaveAttribute('d', levelChecked);
      } else {
        await expect(
          this.levelButton.nth(i).locator('path').nth(1),
        ).toHaveAttribute('d', levelBlocked);
      }
    }
  }

  async clickGoButton(): Promise<LevelPage> {
    await this.goButton.click();
    return new LevelPage(this.page);
  }
}
