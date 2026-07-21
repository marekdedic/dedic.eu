import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  expect: {
    timeout: 30000,
  },
  forbidOnly: process.env.CI !== undefined,
  fullyParallel: true,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] },
    },
    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] },
    },
  ],
  reporter: process.env.CI === undefined ? "list" : "html",
  retries: process.env.CI === undefined ? 0 : 2,
  testDir: "./tests",
  timeout: 60000,
  use: {
    baseURL: "https://127.0.0.1:5173",
    ignoreHTTPSErrors: true,
    trace: "on-first-retry",
  },
  webServer: {
    command: "npm run start -- --host",
    ignoreHTTPSErrors: true,
    reuseExistingServer: false, // Breaks snapshots
    url: "https://127.0.0.1:5173",
  },
});
