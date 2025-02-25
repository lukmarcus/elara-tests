import { TopMenuComponent } from '../components/top-menu.component';
import { ChatModal } from '../modals/chat.modal';
import { HelpModal } from '../modals/help.modal';
import { LevelEndModal } from '../modals/level-end.modal';
import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class LevelPage extends BasePage {
  topMenu = new TopMenuComponent(this.page);
  helpModal = new HelpModal(this.page);
  levelEndModal = new LevelEndModal(this.page);
  chatModal = new ChatModal(this.page);

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

  async resetLevelPage(): Promise<LevelPage> {
    const hubPage = await this.topMenu.clickHubButton();
    const levelSelectModal = await hubPage.clickMonitorBox();
    await levelSelectModal.goButton.click();
    return new LevelPage(this.page);
  }
}
