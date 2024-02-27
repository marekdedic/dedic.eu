import { expect, test } from "playwright-test-coverage";

test("main page snapshot", async ({ page }) => {
  await page.goto("/");
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page.reload();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
});

test("navigation", async ({ page }) => {
  await page.goto("/");
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page
    .getByRole("list")
    .getByRole("link", { name: "publications" })
    .click();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
});

test("publications page snapshot", async ({ page }) => {
  await page.goto("/publications");
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page.getByLabel("Show bibtex citation").first().click();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
});

test("teaching page snapshot", async ({ page }) => {
  // Replay the Google table to make the test reproducible
  await page.routeFromHAR("./tests/hars/vyuka-google-sheet.har", {
    url: "https://docs.google.com/spreadsheets/**/*",
  });

  await page.goto("/vyuka");
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
  await page.getByLabel("Dark mode toggle").click();
  expect(await page.locator("body").innerHTML()).toMatchSnapshot();
});
