import { expect } from "@playwright/test";

import { test } from "./test-fixture";

test("dark mode toggling", async ({ page }) => {
  await page.goto("/");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate publications
    mask: [page.locator(".publication")],
  });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page.getByRole("document")).toHaveAttribute(
    "data-theme",
    "dark",
  );
  await expect(page).toHaveScreenshot({
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate publications
    mask: [page.locator(".publication")],
  });
  await page.reload();
  await expect(page.getByRole("document")).toHaveAttribute(
    "data-theme",
    "dark",
  );
  await expect(page).toHaveScreenshot({
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate publications
    mask: [page.locator(".publication")],
  });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page.getByRole("document")).toHaveAttribute(
    "data-theme",
    "light",
  );
  await expect(page).toHaveScreenshot({
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate publications
    mask: [page.locator(".publication")],
  });
});
