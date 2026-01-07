import { expect } from "@playwright/test";

import { test } from "./test-fixture";

test.use({ javaScriptEnabled: false });

test("no-js", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({
    mask: [page.getByRole("img")],
  });
  await page
    .getByRole("list")
    .getByRole("link", { name: "publications" })
    .click();
  await expect(page).toHaveScreenshot({
    mask: [page.getByRole("img")],
    maxDiffPixelRatio: 0.05,
  });
  await page.getByRole("list").getByRole("link", { name: "teaching" }).click();
  await expect(page).toHaveScreenshot();
});
