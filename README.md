# Test-Automation-ESB

This project is a Playwright + TypeScript automation suite for the SauceDemo website. It contains end-to-end browser tests, a page object model implementation, and browser configuration for multiple browsers.

## What is included

- Login flow test
- End-to-end checkout flow from login to order completion
- Page Object Model (POM) structure
- Cross-browser configuration for Chromium, Firefox, and WebKit
- Stored authentication state via auth.json

## Project structure

- tests/
  - e2e.spec.ts
  - runPom.spec.ts
  - pom/actions/e2eActions.ts
  - pom/locator/e2eLocator.ts
- playwright.config.ts
- auth.json
- package.json
- tsconfig.json

## Tech stack

- TypeScript
- Playwright
- Node.js
- Visual Studio Code
- GitHub

## Setup

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

## Run tests

Run all tests:

```bash
npm test
```

Run a specific file:

```bash
npx playwright test tests/e2e.spec.ts
```

Run with the Playwright UI:

```bash
npx playwright test --ui
```

Open the HTML report:

```bash
npx playwright show-report
```

## Target website

The tests are written against the SauceDemo demo app:

https://www.saucedemo.com/

## Notes

The default Playwright configuration uses the HTML reporter and runs against Chromium, Firefox, and WebKit. The project also uses a shared storage state from auth.json for browser session reuse.
