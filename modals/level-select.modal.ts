import { LevelPage } from '../pages/level.page';
import { BaseModal } from './base.modal';
import { Page, expect } from '@playwright/test';

export class LevelSelectModal extends BaseModal {
  numberOfLevels = 28;
  modal = this.page.locator('#level-select-modal-body');
  leftColumn = this.modal.locator('.chakra-stack').first();
  rightColumn = this.modal.locator('.chakra-stack').last();

  // Left column locators
  chooseLevelHeader = this.leftColumn.locator('>div').nth(0);
  levelList = this.leftColumn.locator('>div').nth(1);
  levelButton = this.levelList.locator('button');

  // Right column locators
  goButton = this.rightColumn.locator('button');

  constructor(page: Page) {
    super(page);
  }

  async checkNewBadgeInLevelList(level: number): Promise<void> {
    const expectedNewBadgeText = 'New';
    for (let i = 0; i < 28; i++) {
      if (i === level) {
        await expect(
          this.levelButton.nth(i).locator('.chakra-badge'),
        ).toHaveText(expectedNewBadgeText);
      } else {
        await expect(
          this.levelButton.nth(i).locator('.chakra-badge'),
        ).toHaveCount(0);
      }
    }
  }

  async clickGoButton(): Promise<LevelPage> {
    await this.goButton.click();
    return new LevelPage(this.page);
  }
}
