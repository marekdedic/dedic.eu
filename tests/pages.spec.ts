import { expect } from "@playwright/test";

import { test } from "./test-fixture";

test("main page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("publications page", async ({ page }) => {
  await page.goto("/publications");
  await expect(page).toHaveScreenshot({ fullPage: true });
  // eslint-disable-next-line playwright/no-nth-methods -- General testing, what's first is irrelevant
  await page.getByLabel("Show bibtex citation").first().click();
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("teaching page", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/vyuka-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/vyuka");
  await expect(
    page
      .getByRole("list")
      .filter({ hasText: "Contents" })
      .getByRole("listitem"),
  ).not.toHaveCount(0);
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("iframe")],
  });
});
