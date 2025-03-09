import { Browser, BrowserContext, Page, test as base } from '@playwright/test';
import path from 'path';

export async function saveStorageState(
  page: Page,
  fileName: string,
): Promise<void> {
  await page
    .context()
    .storageState({ path: path.join(process.cwd(), `saves/${fileName}.json`) });
}

export async function loadStorageState(
  browser: Browser,
  file: string,
): Promise<BrowserContext> {
  return await browser.newContext({
    storageState: path.join(process.cwd(), `saves/${file}.json`),
  });
}

export function useStorageState(fileName: string): typeof base {
  return base.extend({
    storageState: path.resolve(process.cwd(), `saves/${fileName}.json`),
  });
}
