import { level00Solution } from '../data/level00.data';
import { level01Solution } from '../data/level01.data';
import { JournalModal } from '../modals/journal.modal';
import { LevelSelectModal } from '../modals/level-select.modal';
import { HubPage } from '../pages/hub.page';
import { LevelPage } from '../pages/level.page';
import { StartPage } from '../pages/start.page';
import { expect, test } from '@playwright/test';
import * as path from 'path';

test('Going through Elara levels', async ({ page }) => {
  let hubPage: HubPage;
  let journalModal: JournalModal;
  let levelSelectModal: LevelSelectModal;
  let levelPage: LevelPage;

  test.step('Intro and main menu', async () => {
    // Arrange
    const expectedLoginTitle = 'Elara';
    const expectedPlayButtonText = 'Play';
    const expectedReadyText = 'Ready!';
    const startPage = new StartPage(page);

    // Act
    await startPage.goto();
    const title = await startPage.getTitle();

    // Assert
    expect(title).toContain(expectedLoginTitle);
    await expect(startPage.playButton).toHaveText(expectedPlayButtonText);
    await expect(startPage.readyText).toHaveText(expectedReadyText);

    // Act
    const mainMenuPage = await startPage.clickPlayButton();
    const introPage = await mainMenuPage.clickNewGameButton();
    await mainMenuPage.helpModal.nextButton.click();
    await mainMenuPage.helpModal.nextButton.click();
    await mainMenuPage.helpModal.clickLaunchButton();
    hubPage = await introPage.clickSkipButton();
  });

  test.step('Save level 00 storage state', async () => {
    const chatPage = await hubPage.clickVideoTabletBox();
    await chatPage.clickChatButton('Nice to meet you!');
    await chatPage.clickChatButton('No complaints.');
    await chatPage.clickChatButton('Where are you calling from?');
    await chatPage.clickChatButton("Let's go!");
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level00.json') });
  });

  test.step('Save level 01 storage state', async () => {
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.clickDoneButton();
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level00Solution);
    await levelPage.deployLevelSolution(7);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    await hubPage.chatModal.clickChatButton('Thanks!');
    await hubPage.chatModal.clickChatButton('Where can I find the journal?');
    await hubPage.chatModal.clickChatButton('Got it!');
    journalModal = await hubPage.clickJournalBox();
    await journalModal.helpModal.clickDoneButton();
    await journalModal.nextPageButton.click();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.doneButton.click();
    await levelPage.topMenu.clickHubButton();
    await hubPage.clickMonitorBox();
    await levelSelectModal.goButton.click();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level01.json') });
  });

  test.step('Save level 02 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level01Solution);
    await levelPage.deployLevelSolution(11);
    await levelPage.levelEndModal.clickNextLevelButton();
  });
});
