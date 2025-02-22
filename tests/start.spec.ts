import { StartPage } from '../pages/start.page';
import { solution01 } from '../solutions/01.solution';
import { expect, test } from '@playwright/test';
import * as path from 'path';

test('Start Page', async ({ page }) => {
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
  const helpModal = await mainMenuPage.clickNewGameButton();
  await helpModal.nextButton.click();
  await helpModal.nextButton.click();
  const introPage = await helpModal.clickLaunchButton();
  let hubPage = await introPage.clickSkipButton();
  const chatPage = await hubPage.clickVideoTabletBox();
  await chatPage.clickChatButton('Nice to meet you!');
  await chatPage.clickChatButton('No complaints.');
  await chatPage.clickChatButton('Where are you calling from?');
  await chatPage.clickChatButton("Let's go!");
  let levelsModal = await hubPage.clickMonitorBox();
  await levelsModal.goButton.click();
  await page
    .context()
    .storageState({ path: path.join(process.cwd(), 'saves/level00.json') });
  await helpModal.nextButton.click();
  await helpModal.nextButton.click();
  const levelPage = await helpModal.clickDoneButton();
  await levelPage.textbox.clear();
  await levelPage.textbox.fill(solution01);
  const levelEndModal = await levelPage.deployLevelSolution(7);
  const chatModal = await levelEndModal.goToChatModalInHub();
  await chatModal.clickChatButton('Thanks!');
  await chatModal.clickChatButton('Where can I find the journal?');
  await chatModal.clickChatButton('Got it!');
  const journalModal = await hubPage.clickJournalBox();
  await helpModal.clickDoneButton();
  await journalModal.nextPageButton.click();
  await journalModal.backToHubButton.click();
  levelsModal = await hubPage.clickMonitorBox();
  await levelsModal.goButton.click();
  await helpModal.nextButton.click();
  await helpModal.nextButton.click();
  await helpModal.doneButton.click();
  await levelPage.topMenu.clickHubButton();
  await hubPage.clickMonitorBox();
  await levelsModal.goButton.click();
  await page
    .context()
    .storageState({ path: path.join(process.cwd(), 'saves/level01.json') });
});
