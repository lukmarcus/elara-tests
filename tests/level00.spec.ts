import { level00HelpData } from '../data/help.data';
import { level00HintsData } from '../data/hints.data';
import { imagesData } from '../data/images.data';
import { level00Data } from '../data/level00.data';
import { HubElement, HubPage } from '../pages/hub.page';
import { LevelPage } from '../pages/level.page';
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

    test('should display correct level list info', async () => {
      await hubPage.levelSelectModal.checkNewBadgeInLevelList(
        level00Data.number,
      );
      await hubPage.levelSelectModal.checkEnabledLevelsInLevelList(
        level00Data.number,
      );
      await hubPage.levelSelectModal.checkLevelsIconsinLevelList(
        level00Data.number,
      );
      await expect(hubPage.levelSelectModal.levelName).toHaveText(
        level00Data.name,
      );
      await expect(hubPage.levelSelectModal.levelObjective).toHaveText(
        level00Data.objective,
      );
      await expect(hubPage.levelSelectModal.levelObjectiveIcon).toHaveAttribute(
        'd',
        imagesData.checkCircle,
      );
      await expect(
        hubPage.levelSelectModal.levelObjective.locator('img').nth(0),
      ).toHaveAttribute('src', imagesData.roverFront);
      await expect(
        hubPage.levelSelectModal.levelObjective.locator('img').nth(1),
      ).toHaveAttribute('src', imagesData.flag);
    });
  });

  test.describe('Level Page with Help Modal', () => {
    let levelPage: LevelPage;

    test.beforeEach(async () => {
      await hubPage.clickMonitorBox();
      levelPage = await hubPage.levelSelectModal.clickGoButton();
    });

    test('should have correct title', async () => {
      const pageTitle = await levelPage.getTitle();
      expect(pageTitle).toBe('Elara | ' + level00Data.name);
    });

    test('should display correct help modal content', async () => {
      const helpSteps = level00HelpData;

      await levelPage.helpModal.verifyHelpSteps(helpSteps);

      await expect(levelPage.helpModal.rightButton).toHaveText('Done');
      await expect(
        levelPage.helpModal.rightButton.locator('path').nth(0),
      ).toHaveAttribute('d', imagesData.checkSquare);
      await expect(
        levelPage.helpModal.rightButton.locator('path').nth(1),
      ).toHaveAttribute('d', imagesData.check);
    });
  });

  test.describe('Level Page', () => {
    let levelPage: LevelPage;

    test.beforeEach(async () => {
      await hubPage.clickMonitorBox();
      levelPage = await hubPage.levelSelectModal.clickGoButton();
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.doneButton.click();
    });

    test('should display correct hints modal content', async () => {
      await levelPage.clickShowHintsButton();

      await expect(levelPage.hintsModal.header).toHaveText('Hint(s)');
      await expect(levelPage.hintsModal.acapit.nth(0)).toHaveText(
        level00HintsData.hint01,
      );
      await expect(levelPage.hintsModal.acapit.nth(1)).toHaveText(
        level00HintsData.hint02,
      );

      await levelPage.hintsModal.closeButton.click();
      await expect(levelPage.hintsModal.modal).toBeHidden();
    });

    test('should display correct level info', async () => {
      await expect(levelPage.levelName).toHaveText(level00Data.name);
      await expect(levelPage.chooseLevelButton).toHaveText('Choose level');
      await expect(levelPage.showHintsButton).toHaveText('Show hints');
      await expect(levelPage.objectiveSection).toHaveText(
        level00Data.objective,
      );
      await expect(levelPage.objectiveIcon).toHaveAttribute(
        'd',
        imagesData.checkCircle,
      );
      await expect(
        levelPage.objectiveSection.locator('img').nth(0),
      ).toHaveAttribute('src', imagesData.roverFront);
      await expect(
        levelPage.objectiveSection.locator('img').nth(1),
      ).toHaveAttribute('src', imagesData.flag);
    });
  });
});
