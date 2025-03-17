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

  test.describe('Hub Page', () => {
    test('should display correct elements', async () => {
      const expectedMonitorMessage = 'New Levels!';
      await hubPage.checkIfHubElementIsInactive(HubElement.VideoTablet);
      await hubPage.checkIfHubElementIsActive(
        HubElement.Monitor,
        expectedMonitorMessage,
      );
      await hubPage.checkIfHubElementIsInactive(HubElement.Journal);
    });
  });

  test.describe('Level Select', () => {
    test.beforeEach(async () => {
      await hubPage.clickMonitorBox();
    });

    test('should display correct level info', async () => {
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
  });

  test.describe('Level Page', () => {
    let levelPage: any;

    test.beforeEach(async () => {
      await hubPage.clickMonitorBox();
      levelPage = await hubPage.levelSelectModal.clickGoButton();
    });

    test('should have correct title', async () => {
      const pageTitle = await levelPage.getTitle();
      expect(pageTitle).toBe('Elara | ' + level00Name);
    });

    test('should display correct help modal content', async () => {
      const helpSteps = [
        { title: level00Help01Title, description: level00Help01Description },
        { title: level00Help02Title, description: level00Help02Description },
        { title: level00Help03Title, description: level00Help03Description },
      ];

      for (let i = 0; i < helpSteps.length; i++) {
        await expect(levelPage.helpModal.title).toHaveText(helpSteps[i].title);
        await expect(levelPage.helpModal.description).toHaveText(
          helpSteps[i].description,
        );

        if (i < helpSteps.length - 1) {
          await levelPage.helpModal.nextButton.click();
        }
      }
    });

    test('should skip help modal', async () => {
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.nextButton.click();
    });
  });
});
