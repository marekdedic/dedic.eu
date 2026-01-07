import { test as base, type Page } from "@playwright/test";

export const test = base.extend<{
  page: Page & {
    waitForReady(): Promise<void>;
  };
}>({
  page: async ({ page }, use) => {
    async function waitForReady(): Promise<void> {
      // eslint-disable-next-line playwright/no-wait-for-selector -- Used to wait for SvelteKit initialization
      await page.waitForSelector("body.svelteKitReady");
    }
    page.waitForReady = waitForReady;
    await use(page);
  },
});
