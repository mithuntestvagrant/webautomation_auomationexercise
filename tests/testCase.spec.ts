
import { test, expect } from '@playwright/test';

import { TestCasesPage } from '../pages/testcasesPage';
import { ValidationPage } from '../pages/validationPage';

import commonMethods from '../utils/helper';

test('Test Cases', async ({ page }) => {

    // Page Objects
    const testCasesPage = new TestCasesPage(page);
    const validationPage = new ValidationPage(page);

   

    // Open application
    await page.goto('/');


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Test Cases
    await commonMethods.click(
        testCasesPage.testCasesLink
    );


    // Verify Test Cases Page
    await expect(
        validationPage.testCases
    ).toBeVisible();

});
