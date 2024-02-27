/* eslint-env node */

import { expect, type Page, test } from "@playwright/test";

async function snapshot(page: Page): Promise<string> {
  // eslint-disable-next-line playwright/no-raw-locators -- No other way to get the body element
  return (await page.locator("body").innerHTML()).replace(
    process.cwd(),
    "/stubbed/base",
  );
}

test("main page snapshot", async ({ page }) => {
  await page.goto("/");
  expect(await snapshot(page)).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await snapshot(page)).toMatchSnapshot();
  await page.reload();
  expect(await snapshot(page)).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await snapshot(page)).toMatchSnapshot();
});

test("navigation", async ({ page }) => {
  await page.goto("/");
  expect(await snapshot(page)).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await snapshot(page)).toMatchSnapshot();
  await page
    .getByRole("list")
    .getByRole("link", { name: "publications" })
    .click();
  expect(await snapshot(page)).toMatchSnapshot();
});

test("publications page snapshot", async ({ page }) => {
  await page.goto("/publications");
  expect(await snapshot(page)).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await snapshot(page)).toMatchSnapshot();
  await page.getByLabel("Show bibtex citation").first().click();
  expect(await snapshot(page)).toMatchSnapshot();
});

test("teaching page snapshot", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/vyuka-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/vyuka");
  expect(await snapshot(page)).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await snapshot(page)).toMatchSnapshot();
});
