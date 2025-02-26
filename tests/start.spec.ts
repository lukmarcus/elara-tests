import { level00Solution } from '../data/level00.data';
import { level01Solution } from '../data/level01.data';
import { level02Solution } from '../data/level02.data';
import { level03Solution } from '../data/level03.data';
import { level04Solution } from '../data/level04.data';
import { level05Solution } from '../data/level05.data';
import { level06Solution } from '../data/level06.data';
import { level07Solution } from '../data/level07.data';
import { level08Solution } from '../data/level08.data';
import { level09Solution } from '../data/level09.data';
import { level10Solution } from '../data/level10.data';
import { level11Solution } from '../data/level11.data';
import { JournalModal } from '../modals/journal.modal';
import { LevelSelectModal } from '../modals/level-select.modal';
import { HubPage } from '../pages/hub.page';
import { LevelPage } from '../pages/level.page';
import { StartPage } from '../pages/start.page';
import { expect, test } from '@playwright/test';
import * as path from 'path';

test('Going through Elara levels', async ({ page }) => {
  test.setTimeout(60_000);

  let hubPage: HubPage;
  let journalModal: JournalModal;
  let levelSelectModal: LevelSelectModal;
  let levelPage: LevelPage;

  await test.step('Intro and main menu', async () => {
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

  await test.step('Save level 00 storage state', async () => {
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

  await test.step('Save level 01 storage state', async () => {
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
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level01.json') });
  });

  await test.step('Save level 02 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level01Solution);
    await levelPage.deployLevelSolution(11);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.clickDoneButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level02.json') });
  });

  await test.step('Save level 03 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level02Solution);
    await levelPage.deployLevelSolution(13);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    await journalModal.nextPageButton.click();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.clickDoneButton();
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level03.json') });
  });

  await test.step('Save level 04 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level03Solution);
    await levelPage.deployLevelSolution(29);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton('What is it?');
    await levelPage.chatModal.clickChatButton("I'll keep an eye out.");
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level04.json') });
  });

  await test.step('Save level 05 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level04Solution);
    await levelPage.deployLevelSolution(24);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton('Oh no! What do I do now?');
    await levelPage.chatModal.clickChatButton('Sounds easy enough!');
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.doneButton.nth(1).click();
    await levelPage.helpModal.clickDoneButton();
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level05.json') });
  });

  await test.step('Save level 06 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level05Solution);
    await levelPage.deployLevelSolution(13);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level06.json') });
  });

  await test.step('Save level 07 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level06Solution);
    await levelPage.deployLevelSolution(16);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton("Let's go!");
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.clickDoneButton();
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level07.json') });
  });

  await test.step('Save level 08 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level07Solution);
    await levelPage.deployLevelSolution(8);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level08.json') });
  });

  await test.step('Save level 09 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level08Solution);
    await levelPage.deployLevelSolution(23);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    await journalModal.helpModal.nextButton.click();
    await journalModal.helpModal.clickDoneButton();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.chatModal.clickChatButton('What is it?');
    await levelPage.chatModal.clickChatButton("What's a data point?");
    await levelPage.chatModal.clickChatButton('Understood.');
    await levelPage.chatModal.clickChatButton('No problem!');
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level09.json') });
  });

  await test.step('Save level 10 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level09Solution);
    await levelPage.deployLevelSolution(7);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton(
      'How do I figure out the password?',
    );
    await levelPage.chatModal.clickChatButton('Got it, thanks!');
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level10.json') });
  });

  await test.step('Save level 11 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level10Solution);
    await levelPage.deployLevelSolution(8);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level11.json') });
  });

  await test.step('Save level 11 storage state', async () => {
    await levelPage.textbox.clear();
    await levelPage.textbox.fill(level11Solution);
    await levelPage.deployLevelSolution(30);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton('Oh no! How can I get through?');
    await levelPage.chatModal.clickChatButton('I see...');
    await levelPage.chatModal.clickChatButton("What's left for me to do?");
    await levelPage.chatModal.clickChatButton('Got it. I can do that!');
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level12.json') });
  });
});
