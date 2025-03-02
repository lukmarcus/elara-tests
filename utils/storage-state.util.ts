import { Page, test as base } from '@playwright/test';
import path from 'path';

export async function saveStorageState(page: Page, fileName: string) {
  await page
    .context()
    .storageState({ path: path.join(process.cwd(), `saves/${fileName}.json`) });
}

export function useStorageState(fileName: string) {
  return base.extend({
    storageState: path.resolve(process.cwd(), `saves/${fileName}.json`),
  });
}
