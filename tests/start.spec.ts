import { StartPage } from '../pages/start.page';
import { expect, test } from '@playwright/test';

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
  await startPage.playButton.click();
});
