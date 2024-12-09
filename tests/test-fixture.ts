import { test as base, type Response } from "@playwright/test";

export const test = base.extend({
  page: async ({ page }, use) => {
    // eslint-disable-next-line @typescript-eslint/unbound-method -- No easy way to annotate this
    const goto = page.goto;
    page.goto = async (url, opts): Promise<Response | null> => {
      const res = await goto.call(page, url, opts);
      // eslint-disable-next-line playwright/no-wait-for-selector -- Used to wait for SvelteKit initialization
      await page.waitForSelector("body.svelteKitReady");
      return res;
    };
    await use(page);
  },
});
