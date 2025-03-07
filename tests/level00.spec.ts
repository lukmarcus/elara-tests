import { HubPage } from '../pages/hub.page';
import { StartPage } from '../pages/start.page';
import { useStorageState } from '../utils/storage-state.util';
import { expect } from '@playwright/test';

const test = useStorageState('level-00-ready');

test.describe('Level 00', async () => {
  let hubPage: HubPage;

  test.beforeEach(async ({ page }) => {
    const startPage = new StartPage(page);
    await startPage.goto();
    const mainMenuPage = await startPage.clickPlayButton();
    hubPage = await mainMenuPage.clickContinueButton();
  });

  test('Level 00', async () => {
    expect(await hubPage.journalBox.innerHTML()).toBe('');
    await expect(hubPage.monitorBox.locator('.chakra-text')).toHaveText(
      'New Levels!',
    );
    expect(await hubPage.journalBox.innerHTML()).toBe('');
  });
});
