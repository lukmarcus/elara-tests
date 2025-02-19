import { IntroPage } from '../pages/intro.page';
import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class LevelSelectModal extends BaseModal {
  goButton = this.page.locator('button', { hasText: 'Go!' });
  level0Button = this.page.locator('p', { hasText: '0: First Steps' });

  constructor(page: Page) {
    super(page);
  }
}
