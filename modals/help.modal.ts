import { imagesData } from '../data/images.data';
import { IntroPage } from '../pages/intro.page';
import { BaseModal } from './base.modal';
import { Page, expect } from '@playwright/test';

export class HelpModal extends BaseModal {
  modal = this.page.locator('[role="dialog"]');
  title = this.modal.locator('.chakra-text').first();
  description = this.modal.locator('.chakra-text').last();
  image = this.modal.locator('img');
  bottomSection = this.modal.locator('.chakra-stack');
  leftButton = this.bottomSection.locator('button').first();
  rightButton = this.bottomSection.locator('button').last();
  backButton = this.bottomSection.locator('button', { hasText: 'Back' });
  nextButton = this.bottomSection.locator('button', { hasText: 'Next' });
  launchButton = this.bottomSection.locator('button', { hasText: 'Launch' });
  doneButton = this.bottomSection.locator('button', { hasText: 'Done' });

  constructor(page: Page) {
    super(page);
  }

  async clickLaunchButton(): Promise<IntroPage> {
    await this.launchButton.click();
    return new IntroPage(this.page);
  }

  async clickDoneButton(): Promise<void> {
    await this.doneButton.click();
  }

  async verifyHelpSteps(
    steps: { title: string; description: string; image: string }[],
  ): Promise<void> {
    for (let i = 0; i < steps.length; i++) {
      await expect(this.title).toHaveText(steps[i].title);
      await expect(this.description).toHaveText(steps[i].description);
      const imageSrc = await this.image.getAttribute('src');
      expect(imageSrc).toContain(steps[i].image);

      await expect(this.leftButton).toHaveText('Back');
      await expect(this.leftButton.locator('path')).toHaveAttribute(
        'd',
        imagesData.arrow,
      );

      if (i === 0) {
        await expect(this.leftButton).toBeDisabled();
      }

      if (i < steps.length - 1) {
        await expect(this.rightButton).toHaveText('Next');
        await expect(this.rightButton.locator('path')).toHaveAttribute(
          'd',
          imagesData.arrow,
        );
        await this.rightButton.click();
      }
    }
  }
}
