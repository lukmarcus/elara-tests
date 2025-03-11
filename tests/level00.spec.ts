import { HubElement, HubPage } from '../pages/hub.page';
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
    const expectedMonitorMessage = 'New Levels!';
    await hubPage.checkIfHubElementIsInactive(HubElement.VideoTablet);
    await hubPage.checkIfHubElementIsActive(
      HubElement.Monitor,
      expectedMonitorMessage,
    );
    await hubPage.checkIfHubElementIsInactive(HubElement.Journal);
  });

  test('should check elements in level select', async () => {
    const levelSelectModal = await hubPage.clickMonitorBox();
    await levelSelectModal.checkNewBadgeInLevelList(0);
    await levelSelectModal.checkEnabledLevelsInLevelList(0);
  });
});
