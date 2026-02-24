import { expect } from "@playwright/test";

import { test } from "./test-fixture";

test("/", async ({ page }) => {
  await page.goto("/");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole("img")],
  });
});

test("/publications", async ({ page }) => {
  await page.goto("/publications");
  await page.waitForReady();
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
  await page.goto("/vyuka");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching");
});

test("/teaching", async ({ page }) => {
  await page.goto("/teaching");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/MAT3", async ({ page }) => {
  await page.goto("/teaching/MAT3");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/MAT3/2020-winter");
});

test("/teaching/MAT3/2020-winter", async ({ page }) => {
  await page.goto("/teaching/MAT3/2020-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/LAL2", async ({ page }) => {
  await page.goto("/teaching/LAL2");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/LAL2/2021-summer");
});

test("/teaching/LAL2/2021-summer", async ({ page }) => {
  await page.goto("/teaching/LAL2/2021-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/LAL1", async ({ page }) => {
  await page.goto("/teaching/LAL1");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/LAL1/2024-winter");
});

test("/teaching/LAL1/2021-winter", async ({ page }) => {
  await page.goto("/teaching/LAL1/2021-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/LAL1/2022-winter", async ({ page }) => {
  await page.goto("/teaching/LAL1/2022-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/LAL1/2023-winter", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/teaching/LAL1/2023-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("iframe")],
  });
});

test("/teaching/LAL1/2024-winter", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/teaching/LAL1/2024-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("iframe")],
  });
});

test("/teaching/TNN", async ({ page }) => {
  await page.goto("/teaching/TNN");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/TNN/2026-summer");
});

test("/teaching/TNN/2022-summer", async ({ page }) => {
  await page.goto("/teaching/TNN/2022-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/TNN/2023-summer", async ({ page }) => {
  await page.goto("/teaching/TNN/2023-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/TNN/2024-summer", async ({ page }) => {
  await page.goto("/teaching/TNN/2024-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/TNN/2025-summer", async ({ page }) => {
  await page.goto("/teaching/TNN/2025-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/TNN/2026-summer", async ({ page }) => {
  await page.goto("/teaching/TNN/2026-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/NMS", async ({ page }) => {
  await page.goto("/teaching/NMS");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/NMS/2025-winter");
});

test("/teaching/NMS/2025-winter", async ({ page }) => {
  await page.goto("/teaching/NMS/2025-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/TZN", async ({ page }) => {
  await page.goto("/teaching/TZN");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/TZN/2025-winter");
});

test("/teaching/TZN/2025-winter", async ({ page }) => {
  await page.goto("/teaching/TZN/2025-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("table")],
  });
});

test("/teaching/NSN", async ({ page }) => {
  await page.goto("/teaching/NSN");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/NSN/2026-winter");
});

test("/teaching/NSN/2026-winter", async ({ page }) => {
  await page.goto("/teaching/NSN/2026-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("table")],
  });
});
