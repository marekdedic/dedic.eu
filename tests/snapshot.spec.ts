import { expect, test } from "@playwright/test";

test("main page", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("dark mode toggling", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page.getByRole("document")).toHaveAttribute(
    "data-theme",
    "dark",
  );
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.reload();
  await expect(page.getByRole("document")).toHaveAttribute(
    "data-theme",
    "dark",
  );
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page.getByLabel("Dark mode toggle").click();
  await expect(page.getByRole("document")).toHaveAttribute(
    "data-theme",
    "light",
  );
  await expect(page).toHaveScreenshot({ fullPage: true });
});

test("navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveScreenshot({ fullPage: true });
  await page
    .getByRole("list")
    .getByRole("link", { name: "publications" })
    .click();
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
  await expect(page).toHaveScreenshot({ fullPage: true });
});
