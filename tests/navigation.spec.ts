import { expect } from "@playwright/test";

import { test } from "./test-fixture";

test("navigation", async ({ page }) => {
  await page.goto("/");
  await page.waitForReady();
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
