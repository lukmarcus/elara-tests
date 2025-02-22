import { StartPage } from '../pages/start.page';
import { test } from '@playwright/test';
import * as path from 'path';

test.use({ storageState: path.resolve(process.cwd(), 'saves/level01.json') });

test.beforeEach(async ({ page }) => {
  const startPage = new StartPage(page);
  await startPage.goto();
  const mainMenuPage = await startPage.clickPlayButton();
  await mainMenuPage.clickContinueButton();
});

test('Level 01', async () => {
  //
});
