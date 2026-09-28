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
  });
  // eslint-disable-next-line playwright/no-nth-methods -- General testing, what's first is irrelevant
  await page.getByLabel("Show citation").first().click();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole("img")],
  });
});

test("/blog", async ({ page }) => {
  await page.goto("/blog");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    mask: [page.getByRole("img")],
  });
});

test("/blog/hyperparameter-optimization-for-gnns-with-transfer-learning", async ({
  page,
}) => {
  await page.goto(
    "/blog/hyperparameter-optimization-for-gnns-with-transfer-learning",
  );
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching", async ({ page }) => {
  await page.goto("/teaching");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/matematika-3", async ({ page }) => {
  await page.goto("/teaching/matematika-3");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/matematika-3/2020-winter");
});

test("/teaching/MAT3", async ({ page }) => {
  await page.goto("/teaching/MAT3");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/matematika-3/2020-winter");
});

test("/teaching/matematika-3/2020-winter", async ({ page }) => {
  await page.goto("/teaching/matematika-3/2020-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/linearni-algebra-2", async ({ page }) => {
  await page.goto("/teaching/linearni-algebra-2");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/linearni-algebra-2/2021-summer");
});

test("/teaching/LAL2", async ({ page }) => {
  await page.goto("/teaching/LAL2");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/linearni-algebra-2/2021-summer");
});

test("/teaching/linearni-algebra-2/2021-summer", async ({ page }) => {
  await page.goto("/teaching/linearni-algebra-2/2021-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/linearni-algebra-1", async ({ page }) => {
  await page.goto("/teaching/linearni-algebra-1");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/linearni-algebra-1/2024-winter");
});

test("/teaching/LAL1", async ({ page }) => {
  await page.goto("/teaching/LAL1");
  await page.waitForReady();
  await expect(page).toHaveURL("/teaching/linearni-algebra-1/2024-winter");
});

test("/teaching/linearni-algebra-1/2021-winter", async ({ page }) => {
  await page.goto("/teaching/linearni-algebra-1/2021-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/linearni-algebra-1/2022-winter", async ({ page }) => {
  await page.goto("/teaching/linearni-algebra-1/2022-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/linearni-algebra-1/2023-winter", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/teaching/linearni-algebra-1/2023-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("iframe")],
  });
});

test("/teaching/linearni-algebra-1/2024-winter", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/LAL1-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/teaching/linearni-algebra-1/2024-winter");
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
  await expect(page).toHaveURL(
    "/teaching/theory-of-neural-networks/2026-winter",
  );
});

test("/teaching/TNN/2026-winter", async ({ page }) => {
  // TNN is a code of this course, but the 2026-winter version is not offered under it
  const response = await page.goto("/teaching/TNN/2026-winter");
  expect(response?.status()).toBe(404);
});

test("/teaching/theory-of-neural-networks/2022-summer", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2022-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/theory-of-neural-networks/2023-summer", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2023-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/theory-of-neural-networks/2024-summer", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2024-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/theory-of-neural-networks/2025-summer", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2025-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/theory-of-neural-networks/2026-summer", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2026-summer");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/NMS", async ({ page }) => {
  await page.goto("/teaching/NMS");
  await page.waitForReady();
  await expect(page).toHaveURL(
    "/teaching/neural-networks-machine-learning-and-randomness/2026-winter",
  );
});

test("/teaching/neural-networks-machine-learning-and-randomness/2025-winter", async ({
  page,
}) => {
  await page.goto(
    "/teaching/neural-networks-machine-learning-and-randomness/2025-winter",
  );
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/neural-networks-machine-learning-and-randomness/2026-winter", async ({
  page,
}) => {
  await page.goto(
    "/teaching/neural-networks-machine-learning-and-randomness/2026-winter",
  );
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
  });
});

test("/teaching/theory-of-neural-networks", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks");
  await page.waitForReady();
  await expect(page).toHaveURL(
    "/teaching/theory-of-neural-networks/2026-winter",
  );
});

test("/teaching/TZN", async ({ page }) => {
  await page.goto("/teaching/TZN");
  await page.waitForReady();
  await expect(page).toHaveURL(
    "/teaching/theory-of-neural-networks/2026-winter",
  );
});

test("/teaching/theory-of-neural-networks/2025-winter", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2025-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("table")],
  });
});

test("/teaching/theory-of-neural-networks/2026-winter", async ({ page }) => {
  await page.goto("/teaching/theory-of-neural-networks/2026-winter");
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("table")],
  });
});

test("/teaching/neural-networks-machine-learning-and-randomness", async ({
  page,
}) => {
  await page.goto("/teaching/neural-networks-machine-learning-and-randomness");
  await page.waitForReady();
  await expect(page).toHaveURL(
    "/teaching/neural-networks-machine-learning-and-randomness/2026-winter",
  );
});

test("/teaching/NSN", async ({ page }) => {
  await page.goto("/teaching/NSN");
  await page.waitForReady();
  await expect(page).toHaveURL(
    "/teaching/neural-networks-machine-learning-and-randomness/2026-winter",
  );
});

test("/teaching/neural-networks-machine-learning-and-randomness/2026-summer", async ({
  page,
}) => {
  await page.goto(
    "/teaching/neural-networks-machine-learning-and-randomness/2026-summer",
  );
  await page.waitForReady();
  await expect(page).toHaveScreenshot({
    fullPage: true,
    // eslint-disable-next-line playwright/no-raw-locators -- No other way to locate iframe
    mask: [page.locator("table")],
  });
});

test("/teaching/NAIL138", async ({ page }) => {
  await page.goto("/teaching/NAIL138");
  await page.waitForReady();
  await expect(page).toHaveURL(
    "/teaching/neural-networks-machine-learning-and-randomness/2026-winter",
  );
});
