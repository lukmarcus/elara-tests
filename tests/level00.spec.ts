import { HubPage } from '../pages/hub.page';
import { StartPage } from '../pages/start.page';
import { useStorageState } from '../utils/storage-state.util';
import { expect } from '@playwright/test';

const test = useStorageState('level00');

test.describe('Level 00', async () => {
  let hubPage: HubPage;

  test.beforeEach(async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.goto();
    const mainMenuPage = await startPage.clickPlayButton();
    hubPage = await mainMenuPage.clickContinueButton();
  });

  test('should check elements in hub page', async () => {
    await expect(hubPage.videoTabletBoxImage).toHaveAttribute(
      'style',
      'filter: brightness(0.4);',
    );
    expect(await hubPage.videoTabletBox.innerHTML()).toBe('');

    await expect(hubPage.journalBoxImage).toHaveAttribute(
      'style',
      'filter: brightness(0.4);',
    );
    expect(await hubPage.journalBox.innerHTML()).toBe('');

    await expect(hubPage.monitorBox.locator('.chakra-text')).toHaveText(
      'New Levels!',
    );
    await expect(hubPage.monitorBoxImage).not.toHaveAttribute(
      'style',
      'filter: brightness(0.4);',
    );
    await expect(hubPage.monitorBoxImage).not.toHaveAttribute(
      'style',
      'filter: brightness(0.4);',
    );
    await expect(hubPage.monitorBoxImage).toHaveAttribute(
      'style',
      'filter: drop-shadow(0px 0px 15px var(--chakra-colors-yellow-400)) brightness(0.9);',
    );
    await hubPage.monitorBox.hover();
    await expect(hubPage.monitorBoxImage).toHaveAttribute(
      'style',
      'filter: drop-shadow(white 0px 0px 20px);',
    );
  });

  test('should check elements in level select', async () => {
    const levelSelectModal = await hubPage.clickMonitorBox();
    await levelSelectModal.checkNewBadgeInLevelList(0);
    await levelSelectModal.checkEnabledLevelsInLevelList(0);
  });
});
