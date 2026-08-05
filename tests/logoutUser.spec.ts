
import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/loginPage';
import { ValidationPage } from '../pages/validationPage';

import commonMethods from '../utils/helper';


import { loginData } from '../testData/loginData';


test('Logout User', async ({ page }) => {

    // Page Objects
    const loginPage = new LoginPage(page);
    const validationPage = new ValidationPage(page);

    


    // Open application
    await page.goto('/');


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Signup / Login
    await commonMethods.click(
        loginPage.login
    );


    // Enter Email
    await commonMethods.fill(
        loginPage.email,
        loginData.email
    );


    // Enter Password
    await commonMethods.fill(
        loginPage.password,
        loginData.password
    );


    // Click Login
    await commonMethods.click(
        loginPage.loginButton
    );


    // Verify User Logged In
    await expect(
        validationPage.loggedInAs
    ).toBeVisible();


    // Click Logout
    await commonMethods.click(
        loginPage.logout
    );


   

});
