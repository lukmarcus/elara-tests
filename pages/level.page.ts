import { LevelEndModal } from '../modals/level-end.modal';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LevelPage extends BasePage {
  deployButton = this.page.locator('button', { hasText: 'Deploy' });
  resetButton = this.page.locator('button', { hasText: 'Reset' });
  stopButton = this.page.locator('.control-bar button').nth(0);
  backwardButton = this.page.locator('.control-bar button').nth(1);
  playPauseButton = this.page.locator('.control-bar button').nth(2);
  forwardButton = this.page.locator('.control-bar button').nth(3);
  textbox = this.page.getByRole('textbox');

  constructor(page: Page) {
    super(page);
  }

  async deployLevelSolution(steps: number): Promise<LevelEndModal> {
    await this.deployButton.click();

    for (let i = 0; i <= steps; i++) {
      await this.forwardButton.click();
    }

    return new LevelEndModal(this.page);
  }
}
