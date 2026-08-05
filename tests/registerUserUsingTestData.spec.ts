
import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signupPage';
import { ValidationPage } from '../pages/validationPage';
import { HomePage } from '../pages/homePage';
import { AccountPage } from '../pages/accountPage';

import commonMethods from '../utils/helper';
import { userData } from '../testData/userData';


test('Register user', async ({ page }) => {

    // Page Objects
    const signupPage = new SignupPage(page);
    const validationPage = new ValidationPage(page);
    const homePage = new HomePage(page);
    const accountPage = new AccountPage(page);

   

    // =========================
    // Open Application
    // =========================

    await page.goto('/');


    // =========================
    // Verify Home Page
    // =========================

    await expect(
        validationPage.home
    ).toBeVisible();


    // =========================
    // Signup
    // =========================

    await commonMethods.click(
        signupPage.signup
    );

    await expect(
        validationPage.newUserSignup
    ).toBeVisible();


    // Enter Name
    await commonMethods.fill(
        signupPage.name,
        userData.name
    );


    // Enter Email
    await commonMethods.fill(
        signupPage.email,
        userData.email
    );


    // Click Signup
    await commonMethods.click(
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
    await commonMethods.check(
        homePage.title
    );


    // Password
    await commonMethods.fill(
        homePage.password,
        userData.password
    );


    // Date of Birth
    await commonMethods.selectOption(
        homePage.days,
        userData.day
    );

    await commonMethods.selectOption(
        homePage.months,
        userData.month
    );

    await commonMethods.selectOption(
        homePage.years,
        userData.year
    );


    // Newsletter
    await commonMethods.check(
        homePage.newsletter
    );


    // Special Offers
    await commonMethods.check(
        homePage.offers
    );


    // =========================
    // Address Information
    // =========================

    await commonMethods.fill(
        homePage.firstName,
        userData.firstName
    );

    await commonMethods.fill(
        homePage.lastName,
        userData.lastName
    );

    await commonMethods.fill(
        homePage.company,
        userData.company
    );

    await commonMethods.fill(
        homePage.address1,
        userData.address1
    );

    await commonMethods.fill(
        homePage.address2,
        userData.address2
    );


    // Country
    await commonMethods.selectOption(
        homePage.country,
        userData.country
    );


    // State
    await commonMethods.fill(
        homePage.state,
        userData.state
    );


    // City
    await commonMethods.fill(
        homePage.city,
        userData.city
    );


    // Zipcode
    await commonMethods.fill(
        homePage.zipcode,
        userData.zipcode
    );


    // Mobile Number
    await commonMethods.fill(
        homePage.mobileNumber,
        userData.mobileNumber
    );


    // =========================
    // Create Account
    // =========================

    await commonMethods.click(
        homePage.createAccountButton
    );


    // Verify Account Created
    await expect(
        validationPage.accountCreated
    ).toBeVisible();


    // Continue
    await commonMethods.clickFirst(
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

    await commonMethods.click(
        accountPage.deleteAccount
    );


    // Verify Account Deleted
    await expect(
        validationPage.accountDeleted
    ).toBeVisible();


    // Continue
    await commonMethods.clickFirst(
        accountPage.continueButton
    );

});
