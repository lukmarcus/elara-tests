import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class HintsModal extends BaseModal {
  modal = this.page.getByRole('dialog');
  header = this.modal.locator('p');
  closeButton = this.modal.locator('button').first();
  acapit = this.modal.locator('li');
  gotItButton = this.modal.locator('button', { hasText: 'Got it!' });

  constructor(page: Page) {
    super(page);
  }
}
