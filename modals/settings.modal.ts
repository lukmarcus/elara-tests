import { BaseModal } from './base.modal';
import { Page } from '@playwright/test';

export class SettingsModal extends BaseModal {
  modal = this.page.locator('.chakra-modal__content');
  header = this.modal.locator('.chakra-modal__header');

  body = this.modal.locator('.chakra-modal__body');
  overallVolumeText = this.body.locator('.chakra-text', {
    hasText: 'Overall volume',
  });
  SoundEffectsVolumeText = this.body.locator('.chakra-text', {
    hasText: 'Sound effects volume',
  });
  dialogVolumeText = this.body.locator('.chakra-text', {
    hasText: 'Dialog volume',
  });
  musicVolumeText = this.body.locator('.chakra-text', {
    hasText: 'Music volume',
  });

  constructor(page: Page) {
    super(page);
  }
}
