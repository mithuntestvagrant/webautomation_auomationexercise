
import { test, expect } from '@playwright/test';

import { TestCasesPage } from '../pages/testcasesPage';
import { ValidationPage } from '../pages/validationPage';

import { Helper } from '../utils/helper';


test('Test Cases', async ({ page }) => {

    // Page Objects
    const testCasesPage = new TestCasesPage(page);
    const validationPage = new ValidationPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Test Cases
    await helper.click(
        testCasesPage.testCasesLink
    );


    // Verify Test Cases Page
    await expect(
        validationPage.testCases
    ).toBeVisible();

});
