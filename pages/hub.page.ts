import { TopMenuComponent } from '../components/top-menu.component';
import { ChatModal } from '../modals/chat.modal';
import { JournalModal } from '../modals/journal.modal';
import { LevelSelectModal } from '../modals/level-select.modal';
import { BasePage } from './base.page';
import { ChatPage } from './chat.page';
import { Page } from '@playwright/test';

export class HubPage extends BasePage {
  topMenu = new TopMenuComponent(this.page);
  chatModal = new ChatModal(this.page);

  videoTabletBox = this.page.locator('#video-tablet-box');
  videoTabletBoxImage = this.page.locator("[src*='/assets/hub_video_tablet']");
  monitorBox = this.page.locator('#monitor-box');
  monitorBoxImage = this.page.locator("[src*='/assets/hub_monitor']");
  journalBox = this.page.locator('#journal-box');
  journalBoxImage = this.page.locator("[src*='/assets/hub_journal']");

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

  async clickJournalBox(): Promise<JournalModal> {
    await this.journalBox.click();
    return new JournalModal(this.page);
  }
}
