import { TopMenuComponent } from '../components/top-menu.component';
import { ChatModal } from '../modals/chat.modal';
import { JournalModal } from '../modals/journal.modal';
import { LevelSelectModal } from '../modals/level-select.modal';
import { BasePage } from './base.page';
import { ChatPage } from './chat.page';
import { Page, expect } from '@playwright/test';

export enum HubElement {
  VideoTablet = 'videoTabletBox',
  Journal = 'journalBox',
  Monitor = 'monitorBox',
}

export class HubPage extends BasePage {
  topMenu = new TopMenuComponent(this.page);
  chatModal = new ChatModal(this.page);

  videoTabletBox = this.page.locator('#video-tablet-box');
  videoTabletBoxImage = this.page.locator("[src*='/assets/hub_video_tablet']");
  monitorBox = this.page.locator('#monitor-box');
  monitorBoxImage = this.page.locator("[src*='/assets/hub_monitor']");
  journalBox = this.page.locator('#journal-box');
  journalBoxImage = this.page.locator("[src*='/assets/hub_journal']");

  activeStyle =
    'filter: drop-shadow(0px 0px 15px var(--chakra-colors-yellow-400)) brightness(0.9);';
  activeStyleHovered = 'filter: drop-shadow(white 0px 0px 20px);';
  inactiveStyle = 'filter: brightness(0.4);';

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

  async checkIfHubElementIsActive(type: HubElement, expectedText?: string) {
    const box = this[type];
    const image = this[`${type}Image`];
    if (expectedText) {
      await expect(box.locator('.chakra-text')).toHaveText(expectedText);
    }
    await expect(image).not.toHaveAttribute('style', this.inactiveStyle);
    await expect(image).toHaveAttribute('style', this.activeStyle);
    await box.hover();
    await expect(image).toHaveAttribute('style', this.activeStyleHovered);
  }

  async checkIfHubElementIsInactive(type: HubElement) {
    const box = this[type];
    const image = this[`${type}Image`];
    await expect(image).not.toHaveAttribute('style', this.activeStyle);
    await expect(image).toHaveAttribute('style', this.inactiveStyle);
    expect(await box.innerHTML()).toBe('');
  }
}
