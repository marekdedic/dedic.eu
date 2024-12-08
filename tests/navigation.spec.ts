import { expect, test } from "@playwright/test";

test("navigation", async ({ page }) => {
  await page.goto("/");
  await page.waitForTimeout(1000);
  await expect(page).toHaveScreenshot({
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate publications
    mask: [page.locator(".publication")],
  });
  await page
    .getByRole("list")
    .getByRole("link", { name: "publications" })
    .click();
  await expect(page).toHaveScreenshot({
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate publications
    mask: [page.locator(".publication")],
  });
});
