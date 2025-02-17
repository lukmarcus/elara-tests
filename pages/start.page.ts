import { BasePage } from './base.page';
import { Page } from '@playwright/test';

export class StartPage extends BasePage {
  playButton = this.page.locator('.chakra-container button');
  readyText = this.page.locator('.chakra-container p');

  constructor(page: Page) {
    super(page);
  }
}
