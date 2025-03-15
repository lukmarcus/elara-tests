import { check, flag, roverFront } from '../data/images.data';
import { level00Name, level00Objective } from '../data/level00.data';
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

  test('check elements in hub page', async () => {
    const expectedMonitorMessage = 'New Levels!';
    await hubPage.checkIfHubElementIsInactive(HubElement.VideoTablet);
    await hubPage.checkIfHubElementIsActive(
      HubElement.Monitor,
      expectedMonitorMessage,
    );
    await hubPage.checkIfHubElementIsInactive(HubElement.Journal);
  });

  test('check elements in level select', async () => {
    const levelSelectModal = await hubPage.clickMonitorBox();
    const levelNumber = 0;

    await levelSelectModal.checkNewBadgeInLevelList(levelNumber);
    await levelSelectModal.checkEnabledLevelsInLevelList(levelNumber);
    await levelSelectModal.checkLevelsIconsinLevelList(levelNumber);
    await expect(levelSelectModal.levelName).toHaveText(level00Name);
    await expect(levelSelectModal.levelObjective).toHaveText(level00Objective);
    await expect(levelSelectModal.levelObjectiveIcon).toHaveAttribute(
      'd',
      check,
    );
    await expect(
      levelSelectModal.levelObjective.locator('img').nth(0),
    ).toHaveAttribute('src', roverFront);
    await expect(
      levelSelectModal.levelObjective.locator('img').nth(1),
    ).toHaveAttribute('src', flag);
  });

  test('check help modal elements at the start of the level', async () => {
    const levelSelectModal = await hubPage.clickMonitorBox();
    const level = await levelSelectModal.clickGoButton();
  });
});
