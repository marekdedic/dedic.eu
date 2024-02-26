import { expect, test } from "playwright-test-coverage";

test("main page screenshot", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page).toHaveScreenshot({ fullPage: true });
});
