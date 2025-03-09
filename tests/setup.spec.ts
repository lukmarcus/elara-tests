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
import { level22Solution } from '../data/level22.data';
import { level23Solution } from '../data/level23.data';
import { level24Solution } from '../data/level24.data';
import { level25Solution } from '../data/level25.data';
import { level26Solution } from '../data/level26.data';
import { level27Solution } from '../data/level27.data';
import { JournalModal } from '../modals/journal.modal';
import { LevelSelectModal } from '../modals/level-select.modal';
import { ChatPage } from '../pages/chat.page';
import { HubPage } from '../pages/hub.page';
import { IntroPage } from '../pages/intro.page';
import { LevelPage } from '../pages/level.page';
import { StartPage } from '../pages/start.page';
import { saveStorageState } from '../utils/storage-state.util';
import { test } from '@playwright/test';

test(
  'Save storage states for all Elara levels',
  { tag: '@setup' },
  async ({ page }) => {
    test.setTimeout(120_000);

    let hubPage: HubPage;
    let journalModal: JournalModal;
    let levelSelectModal: LevelSelectModal;
    let levelPage: LevelPage;
    let introPage: IntroPage;
    let chatPage: ChatPage;

    await test.step('Save level 00 storage state', async () => {
      const startPage = new StartPage(page);
      await startPage.goto();
      const mainMenuPage = await startPage.clickPlayButton();
      const introPage = await mainMenuPage.clickNewGameButton();
      await mainMenuPage.helpModal.nextButton.click();
      await mainMenuPage.helpModal.nextButton.click();
      await mainMenuPage.helpModal.clickLaunchButton();
      hubPage = await introPage.clickSkipButton();
      chatPage = await hubPage.clickVideoTabletBox();
      await chatPage.clickChatButton('Nice to meet you!');
      await chatPage.clickChatButton('No complaints.');
      await chatPage.clickChatButton('Where are you calling from?');
      await chatPage.clickChatButton("Let's go!");
      await saveStorageState(page, 'level00');
    });

    await test.step('Save level 01 storage state', async () => {
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.clickDoneButton();
      await levelPage.deployLevelSolution(level00Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level01');
    });

    await test.step('Save level 02 storage state', async () => {
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
      await levelPage.deployLevelSolution(level01Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level02');
    });

    await test.step('Save level 03 storage state', async () => {
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.clickDoneButton();
      await levelPage.deployLevelSolution(level02Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level03');
    });

    await test.step('Save level 04 storage state', async () => {
      journalModal = await hubPage.clickJournalBox();
      await journalModal.nextPageButton.click();
      hubPage = await journalModal.clickBackToHubButton();
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.clickDoneButton();
      await levelPage.deployLevelSolution(level03Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level04');
    });

    await test.step('Save level 05 storage state', async () => {
      await levelPage.chatModal.clickChatButton('What is it?');
      await levelPage.chatModal.clickChatButton("I'll keep an eye out.");
      await levelPage.deployLevelSolution(level04Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level05');
    });

    await test.step('Save level 06 storage state', async () => {
      await levelPage.chatModal.clickChatButton('Oh no! What do I do now?');
      await levelPage.chatModal.clickChatButton('Sounds easy enough!');
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.doneButton.nth(1).click();
      await levelPage.helpModal.clickDoneButton();
      await levelPage.deployLevelSolution(level05Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level06');
    });

    await test.step('Save level 07 storage state', async () => {
      await levelPage.deployLevelSolution(level06Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level07');
    });

    await test.step('Save level 08 storage state', async () => {
      await levelPage.chatModal.clickChatButton("Let's go!");
      await levelPage.helpModal.nextButton.click();
      await levelPage.helpModal.clickDoneButton();
      await levelPage.deployLevelSolution(level07Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level08');
    });

    await test.step('Save level 09 storage state', async () => {
      await levelPage.deployLevelSolution(level08Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level09');
    });

    await test.step('Save level 10 storage state', async () => {
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
      await levelPage.deployLevelSolution(level09Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level10');
    });

    await test.step('Save level 11 storage state', async () => {
      await levelPage.chatModal.clickChatButton(
        'How do I figure out the password?',
      );
      await levelPage.chatModal.clickChatButton('Got it, thanks!');
      await levelPage.deployLevelSolution(level10Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level11');
    });

    await test.step('Save level 12 storage state', async () => {
      journalModal = await hubPage.clickJournalBox();
      hubPage = await journalModal.clickBackToHubButton();
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.deployLevelSolution(level11Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level12');
    });

    await test.step('Save level 13 storage state', async () => {
      await levelPage.chatModal.clickChatButton(
        'Oh no! How can I get through?',
      );
      await levelPage.chatModal.clickChatButton('I see...');
      await levelPage.chatModal.clickChatButton("What's left for me to do?");
      await levelPage.chatModal.clickChatButton('Got it. I can do that!');
      await levelPage.deployLevelSolution(level12Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level13');
    });

    await test.step('Save level 14 storage state', async () => {
      await levelPage.chatModal.clickChatButton('Yeah, I see it too.');
      await levelPage.chatModal.clickChatButton(
        'Is G.R.O.V.E.R. going to start malfunctioning too?',
      );
      await levelPage.chatModal.clickChatButton('Thanks! Will do.');
      await levelPage.deployLevelSolution(level13Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level14');
    });

    await test.step('Save level 15 storage state', async () => {
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
      await levelPage.deployLevelSolution(level14Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level15');
    });

    await test.step('Save level 16 storage state', async () => {
      await levelPage.deployLevelSolution(level15Solution);
      introPage = await levelPage.levelEndModal.clickPlayCutsceneButton();
      hubPage = await introPage.clickSkipButton();
      await saveStorageState(page, 'level16');
    });

    await test.step('Save level 17 storage state', async () => {
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.chatModal.clickChatButton('What kind of damage?');
      await levelPage.chatModal.clickChatButton('What does that mean exactly?');
      await levelPage.chatModal.clickChatButton("Okay, let's do this!");
      await levelPage.deployLevelSolution(level16Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level17');
    });

    await test.step('Save level 18 storage state', async () => {
      journalModal = await hubPage.clickJournalBox();
      hubPage = await journalModal.clickBackToHubButton();
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.chatModal.clickChatButton('Any ideas?');
      await levelPage.chatModal.clickChatButton('Three lefts?');
      await levelPage.chatModal.clickChatButton("I'll give it a try!");
      await levelPage.deployLevelSolution(level17Solution);
      introPage = await levelPage.levelEndModal.clickPlayCutsceneButton();
      hubPage = await introPage.clickSkipButton();
      await saveStorageState(page, 'level18');
    });

    await test.step('Save level 19 storage state', async () => {
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.chatModal.clickChatButton("Great! What's next?");
      await levelPage.chatModal.clickChatButton("What's the catch?");
      await levelPage.chatModal.clickChatButton("Whoa... that's weird.");
      await levelPage.chatModal.clickChatButton('Only one way to find out!');
      await levelPage.deployLevelSolution(level18Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level19');
    });

    await test.step('Save level 20 storage state', async () => {
      await levelPage.deployLevelSolution(level19Solution);
      hubPage = await levelPage.levelEndModal.clickBackToHubButton();
      await saveStorageState(page, 'level20');
    });

    await test.step('Save level 21 storage state', async () => {
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
      await levelPage.deployLevelSolution(level20Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level21');
    });

    await test.step('Save level 22 storage state', async () => {
      await levelPage.deployLevelSolution(level21Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level22');
    });

    await test.step('Save level 23 storage state', async () => {
      await levelPage.chatModal.clickChatButton(
        'Why are these rovers malfunctioning?',
      );
      await levelPage.chatModal.clickChatButton(
        'I see. Hopefully you can figure it out soon.',
      );
      await levelPage.chatModal.clickChatButton(
        "No, that's all I need to know for now.",
      );
      await levelPage.chatModal.clickChatButton("Okay, I'll do my best!");
      await levelPage.deployLevelSolution(level22Solution);
      introPage = await levelPage.levelEndModal.clickPlayCutsceneButton();
      hubPage = await introPage.clickSkipButton();
      await saveStorageState(page, 'level23');
    });

    await test.step('Save level 24 storage state', async () => {
      chatPage = await hubPage.clickVideoTabletBox();
      await chatPage.clickChatButton('What happened?');
      await chatPage.clickChatButton('Are you safe?');
      await chatPage.clickChatButton('Is there anything I can do to help?');
      await chatPage.clickChatButton('Right. So what can we do?');
      await chatPage.clickChatButton('Wait... do you mean ALL the rovers?');
      await chatPage.clickChatButton("Okay, I'll do it.");
      await chatPage.clickChatButton('Tell me about it...');
      await chatPage.clickChatButton('No time to waste!');
      levelSelectModal = await hubPage.clickMonitorBox();
      levelPage = await levelSelectModal.clickGoButton();
      await levelPage.deployLevelSolution(level23Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level24');
    });

    await test.step('Save level 25 storage state', async () => {
      await levelPage.deployLevelSolution(level24Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level25');
    });

    await test.step('Save level 26 storage state', async () => {
      await levelPage.deployLevelSolution(level25Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level26');
    });

    await test.step('Save level 27 storage state', async () => {
      await levelPage.chatModal.clickChatButton(
        'I can see that. What should I do?',
      );
      await levelPage.chatModal.clickChatButton(
        "It might be too late. She's looking right at G.R.O.V.E.R.!",
      );
      await levelPage.chatModal.clickChatButton(
        "Thanks! That's a big help. What's the rest of the plan?",
      );
      await levelPage.chatModal.clickChatButton(
        'Okay, here it goes. I can do this!',
      );
      await levelPage.deployLevelSolution(level26Solution);
      await levelPage.levelEndModal.clickNextLevelButton();
      await saveStorageState(page, 'level27');
    });

    await test.step('Save end storage state', async () => {
      await levelPage.chatModal.clickChatButton("I'm ready.");
      await levelPage.chatModal.clickChatButton(
        "Good idea. I'll check it out!",
      );
      await levelPage.chatModal.clickChatButton('Okay... here goes nothing.');
      await levelPage.deployLevelSolution(level27Solution);
      introPage = await levelPage.levelEndModal.clickPlayCutsceneButton();
      await introPage.clickSkipButton();
      await saveStorageState(page, 'end');
    });
  },
);
