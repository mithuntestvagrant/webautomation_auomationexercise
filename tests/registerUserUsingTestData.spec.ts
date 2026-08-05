
import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signupPage';
import { ValidationPage } from '../pages/validationPage';
import { HomePage } from '../pages/homePage';
import { AccountPage } from '../pages/accountPage';

import { Helper } from '../utils/helper';
import { userData } from '../testData/userData';


test('Register user', async ({ page }) => {

    // Page Objects
    const signupPage = new SignupPage(page);
    const validationPage = new ValidationPage(page);
    const homePage = new HomePage(page);
    const accountPage = new AccountPage(page);

    // Helper
    const helper = new Helper(page);


    // =========================
    // Open Application
    // =========================

    await helper.openApplication();


    // =========================
    // Verify Home Page
    // =========================

    await expect(
        validationPage.home
    ).toBeVisible();


    // =========================
    // Signup
    // =========================

    await helper.click(
        signupPage.signup
    );

    await expect(
        validationPage.newUserSignup
    ).toBeVisible();


    // Enter Name
    await helper.fill(
        signupPage.name,
        userData.name
    );


    // Enter Email
    await helper.fill(
        signupPage.email,
        userData.email
    );


    // Click Signup
    await helper.click(
        signupPage.signupbutton
    );


    // Verify Account Information
    await expect(
        validationPage.enterAccountInformation
    ).toBeVisible();


    // =========================
    // Account Information
    // =========================

    // Title
    await helper.check(
        homePage.title
    );


    // Password
    await helper.fill(
        homePage.password,
        userData.password
    );


    // Date of Birth
    await helper.selectOption(
        homePage.days,
        userData.day
    );

    await helper.selectOption(
        homePage.months,
        userData.month
    );

    await helper.selectOption(
        homePage.years,
        userData.year
    );


    // Newsletter
    await helper.check(
        homePage.newsletter
    );


    // Special Offers
    await helper.check(
        homePage.offers
    );


    // =========================
    // Address Information
    // =========================

    await helper.fill(
        homePage.firstName,
        userData.firstName
    );

    await helper.fill(
        homePage.lastName,
        userData.lastName
    );

    await helper.fill(
        homePage.company,
        userData.company
    );

    await helper.fill(
        homePage.address1,
        userData.address1
    );

    await helper.fill(
        homePage.address2,
        userData.address2
    );


    // Country
    await helper.selectOption(
        homePage.country,
        userData.country
    );


    // State
    await helper.fill(
        homePage.state,
        userData.state
    );


    // City
    await helper.fill(
        homePage.city,
        userData.city
    );


    // Zipcode
    await helper.fill(
        homePage.zipcode,
        userData.zipcode
    );


    // Mobile Number
    await helper.fill(
        homePage.mobileNumber,
        userData.mobileNumber
    );


    // =========================
    // Create Account
    // =========================

    await helper.click(
        homePage.createAccountButton
    );


    // Verify Account Created
    await expect(
        validationPage.accountCreated
    ).toBeVisible();


    // Continue
    await helper.clickFirst(
        homePage.continueButton
    );


    // =========================
    // Verify Login
    // =========================

    await expect(
        validationPage.loggedInAs
    ).toBeVisible();


    // =========================
    // Delete Account
    // =========================

    await helper.click(
        accountPage.deleteAccount
    );


    // Verify Account Deleted
    await expect(
        validationPage.accountDeleted
    ).toBeVisible();


    // Continue
    await helper.clickFirst(
        accountPage.continueButton
    );

});
