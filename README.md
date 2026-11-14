# playwright-typescript-framework

Playwright + TypeScript tests for the ShopEasy login page.

## Run the tests

```bash
npm ci
npx playwright install
npm test
```

## Project structure

- `site/` – the ShopEasy login page used by the tests
- `tests/` – Playwright test files (`*.spec.ts`)
- `playwright.config.ts` – Playwright settings
- `.github/workflows/` – GitHub Actions workflow that runs the tests on every push and pull request
