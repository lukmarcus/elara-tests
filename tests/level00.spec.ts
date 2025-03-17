import {
  level00Help01Description,
  level00Help01Title,
  level00Help02Description,
  level00Help02Title,
  level00Help03Description,
  level00Help03Title,
} from '../data/help.data';
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
    await hubPage.clickMonitorBox();
    const levelNumber = 0;

    await hubPage.levelSelectModal.checkNewBadgeInLevelList(levelNumber);
    await hubPage.levelSelectModal.checkEnabledLevelsInLevelList(levelNumber);
    await hubPage.levelSelectModal.checkLevelsIconsinLevelList(levelNumber);
    await expect(hubPage.levelSelectModal.levelName).toHaveText(level00Name);
    await expect(hubPage.levelSelectModal.levelObjective).toHaveText(
      level00Objective,
    );
    await expect(hubPage.levelSelectModal.levelObjectiveIcon).toHaveAttribute(
      'd',
      check,
    );
    await expect(
      hubPage.levelSelectModal.levelObjective.locator('img').nth(0),
    ).toHaveAttribute('src', roverFront);
    await expect(
      hubPage.levelSelectModal.levelObjective.locator('img').nth(1),
    ).toHaveAttribute('src', flag);
  });

  test('check help modal elements at the start of the level', async () => {
    await hubPage.clickMonitorBox();
    const levelPage = await hubPage.levelSelectModal.clickGoButton();

    await expect(levelPage.helpModal.title).toHaveText(level00Help01Title);
    await expect(levelPage.helpModal.description).toHaveText(
      level00Help01Description,
    );
    await levelPage.helpModal.nextButton.click();
    await expect(levelPage.helpModal.title).toHaveText(level00Help02Title);
    await expect(levelPage.helpModal.description).toHaveText(
      level00Help02Description,
    );
    await levelPage.helpModal.nextButton.click();
    await expect(levelPage.helpModal.title).toHaveText(level00Help03Title);
    await expect(levelPage.helpModal.description).toHaveText(
      level00Help03Description,
    );
  });

  test('check', async () => {
    await hubPage.clickMonitorBox();
    const levelPage = await hubPage.levelSelectModal.clickGoButton();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.nextButton.click();
  });
});
