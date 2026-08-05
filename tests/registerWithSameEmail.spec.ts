
import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signupPage';
import { ValidationPage } from '../pages/validationPage';

import commonMethods from '../utils/helper';

import { existingUserData } from '../testData/existingUserData';


test('Register user with existing email', async ({ page }) => {

    // Page Objects
    const signupPage = new SignupPage(page);
    const validationPage = new ValidationPage(page);

   

    // Open application
    await page.goto('/');


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Signup / Login
    await commonMethods.click(
        signupPage.signup
    );


    // Verify New User Signup
    await expect(
        validationPage.newUserSignup
    ).toBeVisible();


    // Enter Name
    await commonMethods.fill(
        signupPage.name,
        existingUserData.name
    );


    // Enter Existing Email
    await commonMethods.fill(
        signupPage.email,
        existingUserData.email
    );


    // Click Signup
    await commonMethods.click(
        signupPage.signupbutton
    );


    // Verify Email Already Exists
    await expect(
        validationPage.emailAlreadyExist
    ).toBeVisible();

});
