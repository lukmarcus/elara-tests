import { StartPage } from '../pages/start.page';
import { useStorageState } from '../utils/storage-state.util';

const test = useStorageState('level01');

test.beforeEach(async ({ page }) => {
  const startPage = new StartPage(page);
  await startPage.goto();
  const mainMenuPage = await startPage.clickPlayButton();
  await mainMenuPage.clickContinueButton();
});

test('Level 01', async () => {
  //
});
