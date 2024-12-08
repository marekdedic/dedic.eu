import { expect, test } from "@playwright/test";

test("dark mode toggling", async ({ page }) => {
  await page.goto("/");
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
