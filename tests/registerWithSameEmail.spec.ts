
import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signupPage';
import { ValidationPage } from '../pages/validationPage';

import { Helper } from '../utils/helper';

import { existingUserData } from '../testData/existingUserData';


test('Register user with existing email', async ({ page }) => {

    // Page Objects
    const signupPage = new SignupPage(page);
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
        signupPage.signup
    );


    // Verify New User Signup
    await expect(
        validationPage.newUserSignup
    ).toBeVisible();


    // Enter Name
    await helper.fill(
        signupPage.name,
        existingUserData.name
    );


    // Enter Existing Email
    await helper.fill(
        signupPage.email,
        existingUserData.email
    );


    // Click Signup
    await helper.click(
        signupPage.signupbutton
    );


    // Verify Email Already Exists
    await expect(
        validationPage.emailAlreadyExist
    ).toBeVisible();

});
