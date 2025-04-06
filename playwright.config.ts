import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',             // Directory containing test files
  timeout: 30000,                 // Global timeout for tests (30 seconds)
  retries: 2,                     // Retry tests 2 times if they fail
  reporter: [['html', { outputFolder: 'test-results', open: 'never' }], ['line']],  // Test result reporters

  // Browsers to run tests in (you can also add Firefox, WebKit, etc.)
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'], headless: true },  // Run tests in headless Chromium
    },
    {
      name: 'WebKit',
      use: { ...devices['Desktop Safari'], headless: true },  // Run tests in headless WebKit
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'], headless: true },  // Run tests in headless Firefox
    },
  ],

  // Optional: Configure global setup/teardown steps, such as test hooks
  globalSetup: './global-setup.ts',  // Path to a global setup file (if needed)
  globalTeardown: './global-teardown.ts',  // Path to a global teardown file (if needed)
});
