
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { ValidationPage } from '../pages/validationPage';

import { Helper } from '../utils/helper';

import { loginData } from '../testData/loginData';


test('Logout User', async ({ page }) => {

    // Page Objects
    const loginPage = new LoginPage(page);
    const validationPage = new ValidationPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Signup / Login
    await helper.click(
        loginPage.login
    );


    // Enter Email
    await helper.fill(
        loginPage.email,
        loginData.email
    );


    // Enter Password
    await helper.fill(
        loginPage.password,
        loginData.password
    );


    // Click Login
    await helper.click(
        loginPage.loginButton
    );


    // Verify User Logged In
    await expect(
        validationPage.loggedInAs
    ).toBeVisible();


    // Click Logout
    await helper.click(
        loginPage.logout
    );


   

});
