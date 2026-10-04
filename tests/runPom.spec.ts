import { test } from '@playwright/test';
import e2eActions from './pom/actions/e2eActions';

test('Page object models', async ({ page }) => {
    const loginObj = new e2eActions(page);
    await loginObj.goto();
    await loginObj.inputLogin();
    await loginObj.checkout();
    await loginObj.inputData();
});