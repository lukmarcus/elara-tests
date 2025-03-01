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
import { level12Solution } from '../data/level12.data';
import { level13Solution } from '../data/level13.data';
import { level14Solution } from '../data/level14.data';
import { level15Solution } from '../data/level15.data';
import { level16Solution } from '../data/level16.data';
import { level17Solution } from '../data/level17.data';
import { level18Solution } from '../data/level18.data';
import { level19Solution } from '../data/level19.data';
import { level20Solution } from '../data/level20.data';
import { level21Solution } from '../data/level21.data';
import { JournalModal } from '../modals/journal.modal';
import { LevelSelectModal } from '../modals/level-select.modal';
import { ChatPage } from '../pages/chat.page';
import { HubPage } from '../pages/hub.page';
import { IntroPage } from '../pages/intro.page';
import { LevelPage } from '../pages/level.page';
import { StartPage } from '../pages/start.page';
import { expect, test } from '@playwright/test';
import * as path from 'path';

test('Going through Elara levels', async ({ page }) => {
  test.setTimeout(120_000);

  let hubPage: HubPage;
  let journalModal: JournalModal;
  let levelSelectModal: LevelSelectModal;
  let levelPage: LevelPage;
  let introPage: IntroPage;

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
    await levelPage.deployLevelSolution(level00Solution);
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
    await levelPage.deployLevelSolution(level01Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.helpModal.nextButton.click();
    await levelPage.helpModal.clickDoneButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level02.json') });
  });

  await test.step('Save level 03 storage state', async () => {
    await levelPage.deployLevelSolution(level02Solution);
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
    await levelPage.deployLevelSolution(level03Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton('What is it?');
    await levelPage.chatModal.clickChatButton("I'll keep an eye out.");
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level04.json') });
  });

  await test.step('Save level 05 storage state', async () => {
    await levelPage.deployLevelSolution(level04Solution);
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
    await levelPage.deployLevelSolution(level05Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level06.json') });
  });

  await test.step('Save level 07 storage state', async () => {
    await levelPage.deployLevelSolution(level06Solution);
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
    await levelPage.deployLevelSolution(level07Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level08.json') });
  });

  await test.step('Save level 09 storage state', async () => {
    await levelPage.deployLevelSolution(level08Solution);
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
    await levelPage.deployLevelSolution(level09Solution);
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
    await levelPage.deployLevelSolution(level10Solution);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level11.json') });
  });

  await test.step('Save level 12 storage state', async () => {
    await levelPage.deployLevelSolution(level11Solution);
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

  await test.step('Save level 13 storage state', async () => {
    await levelPage.deployLevelSolution(level12Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await levelPage.chatModal.clickChatButton('Yeah, I see it too.');
    await levelPage.chatModal.clickChatButton(
      'Is G.R.O.V.E.R. going to start malfunctioning too?',
    );
    await levelPage.chatModal.clickChatButton('Thanks! Will do.');
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level13.json') });
  });

  await test.step('Save level 14 storage state', async () => {
    await levelPage.deployLevelSolution(level13Solution);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    await journalModal.nextPageButton.click();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.chatModal.clickChatButton(
      'How do I avoid the falling asteroids?',
    );
    await levelPage.chatModal.clickChatButton(
      "Okay. That doesn't sound too hard.",
    );
    await levelPage.chatModal.clickChatButton("Got it. Let's do this!");
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level14.json') });
  });

  await test.step('Save level 15 storage state', async () => {
    await levelPage.deployLevelSolution(level14Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level15.json') });
  });

  await test.step('Save level 16 storage state', async () => {
    await levelPage.deployLevelSolution(level15Solution);
    introPage = await levelPage.levelEndModal.clickPlayCutsceneButton();
    hubPage = await introPage.clickSkipButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.chatModal.clickChatButton('What kind of damage?');
    await levelPage.chatModal.clickChatButton('What does that mean exactly?');
    await levelPage.chatModal.clickChatButton("Okay, let's do this!");
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level16.json') });
  });

  await test.step('Save level 17 storage state', async () => {
    await levelPage.deployLevelSolution(level16Solution);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.chatModal.clickChatButton('Any ideas?');
    await levelPage.chatModal.clickChatButton('Three lefts?');
    await levelPage.chatModal.clickChatButton("I'll give it a try!");
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level17.json') });
  });

  await test.step('Save level 18 storage state', async () => {
    await levelPage.deployLevelSolution(level17Solution);
    introPage = await levelPage.levelEndModal.clickPlayCutsceneButton();
    hubPage = await introPage.clickSkipButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.chatModal.clickChatButton("Great! What's next?");
    await levelPage.chatModal.clickChatButton("What's the catch?");
    await levelPage.chatModal.clickChatButton("Whoa... that's weird.");
    await levelPage.chatModal.clickChatButton('Only one way to find out!');
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level18.json') });
  });

  await test.step('Save level 19 storage state', async () => {
    await levelPage.deployLevelSolution(level18Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level19.json') });
  });

  await test.step('Save level 20 storage state', async () => {
    await levelPage.deployLevelSolution(level19Solution);
    hubPage = await levelPage.levelEndModal.clickBackToHubButton();
    journalModal = await hubPage.clickJournalBox();
    hubPage = await journalModal.clickBackToHubButton();
    levelSelectModal = await hubPage.clickMonitorBox();
    levelPage = await levelSelectModal.clickGoButton();
    await levelPage.chatModal.clickChatButton('Tell me about it...');
    await levelPage.chatModal.clickChatButton(
      "I don't get it. What do you mean?",
    );
    await levelPage.chatModal.clickChatButton("I see! That's pretty clever.");
    await levelPage.chatModal.clickChatButton('Awesome, thanks!');
    await levelPage.resetLevelPage();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level20.json') });
  });

  await test.step('Save level 21 storage state', async () => {
    await levelPage.deployLevelSolution(level20Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level21.json') });
  });

  await test.step('Save level 22 storage state', async () => {
    await levelPage.deployLevelSolution(level21Solution);
    await levelPage.levelEndModal.clickNextLevelButton();
    await page
      .context()
      .storageState({ path: path.join(process.cwd(), 'saves/level22.json') });
  });
});
