import { LevelSelectModal } from '../modals/level-select.modal';
import { BasePage } from './base.page';
import { ChatPage } from './chat.page';
import { Page } from '@playwright/test';

export class HubPage extends BasePage {
  videoTabletBox = this.page.locator('#video-tablet-box');
  monitorBox = this.page.locator('#monitor-box');
  journalBox = this.page.locator('#journal-box');

  constructor(page: Page) {
    super(page);
  }

  async clickVideoTabletBox(): Promise<ChatPage> {
    await this.videoTabletBox.click();
    return new ChatPage(this.page);
  }

  async clickMonitorBox(): Promise<LevelSelectModal> {
    await this.monitorBox.click();
    return new LevelSelectModal(this.page);
  }
}
