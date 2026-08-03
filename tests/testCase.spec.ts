import { test, expect } from '@playwright/test';
import { TestCasesPage } from '../pages/testcasesPage';
import { ValidationPage } from '../pages/validationPage';

test('testcases', async ({ page }) => {

    const testcase = new TestCasesPage(page);
    const validationPage = new ValidationPage(page);

    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    await testcase.testCasesLink.click();

    await expect(validationPage.testCases).toBeVisible();


   
});
