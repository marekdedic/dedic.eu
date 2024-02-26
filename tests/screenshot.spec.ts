import { expect, test } from "playwright-test-coverage";

test("main page screenshot", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.reload();
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page
    .getByRole("list")
    .getByRole("link", { name: "publications" })
    .click();
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("publications page screenshot", async ({ page }) => {
  await page.goto("/publications");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Show bibtex citation").first().click();
  await expect(page).toHaveScreenshot({ fullPage: true, animations: "allow" });
});

test("teaching page screenshot", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/vyuka-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/vyuka");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page).toHaveScreenshot({ fullPage: true });
});
