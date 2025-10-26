import { expect } from "@playwright/test";

import { test } from "./test-fixture";

test("/", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole("img")],
  });
});

test("/publications", async ({ page }) => {
  await page.goto("/publications");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole("img")],
    maxDiffPixelRatio: 0.05,
  });
  // eslint-disable-next-line playwright/no-nth-methods -- General testing, what's first is irrelevant
  await page.getByLabel("Show bibtex citation").first().click();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole("img")],
    maxDiffPixelRatio: 0.05,
  });
});

test("/vyuka", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
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
    mask: [page.locator("table"), page.locator("iframe")],
  });
});

test("/vyuka/LAL1/2023-winter", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/vyuka/LAL1/2023-winter");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("iframe")],
  });
});

test("/vyuka/LAL1/2024-winter", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/vyuka/LAL1/2024-winter");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("iframe")],
  });
});

test("/vyuka/TNN/2023-summer", async ({ page }) => {
  await page.goto("/vyuka/TNN/2023-summer");
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/vyuka/TNN/2024-summer", async ({ page }) => {
  await page.goto("/vyuka/TNN/2024-summer");
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/vyuka/TNN/2025-summer", async ({ page }) => {
  await page.goto("/vyuka/TNN/2025-summer");
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/vyuka/NMS/2025-winter", async ({ page }) => {
  await page.goto("/vyuka/NMS/2025-winter");
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/vyuka/TZN/2025-winter", async ({ page }) => {
  await page.goto("/vyuka/TZN/2025-winter");
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("table")],
  });
});
