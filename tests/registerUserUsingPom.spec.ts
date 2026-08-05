// import { test, expect } from '@playwright/test';
// import { SignupPage } from '../pages/signupPage';
// import { ValidationPage } from '../pages/validationPage';
// import { HomePage } from '../pages/homePage';
// import { AccountPage } from '../pages/accountPage';

// test('Register user', async ({ page }) => {

//     // Test Data
//     const userData = {
//         name: 'Mithun',
//         email: 'mithun@example4694.com',
//         password: 'MyPassword123',
//         day: '10',
//         month: '5',
//         year: '1994',
//         firstName: 'Mithun',
//         lastName: 'Mishra',
//         company: 'ABC Company',
//         address1: '123 Main Street',
//         address2: 'Apt 4B',
//         country: 'Canada',
//         state: 'Ontario',
//         city: 'Toronto',
//         zipcode: 'M5V 2H1',
//         mobileNumber: '+1 416-123-4567'
//     };

//     // Page Objects
//     const signupPage = new SignupPage(page);
//     const validationPage = new ValidationPage(page);
//     const homePage = new HomePage(page);
//     const accountPage = new AccountPage(page);

//     // Open application
//     await page.goto('http://automationexercise.com');

//     await expect(validationPage.home).toBeVisible();

//     // Signup
//     await signupPage.signup.click();

//     await expect(validationPage.newUserSignup).toBeVisible();

//     await signupPage.name.fill(userData.name);
//     await signupPage.email.fill(userData.email);

//     await signupPage.signupbutton.click();

//     await expect(validationPage.enterAccountInformation).toBeVisible();

//     // Account information
//     await homePage.title.check();
//     await homePage.password.fill(userData.password);

//     await homePage.days.selectOption(userData.day);
//     await homePage.months.selectOption(userData.month);
//     await homePage.years.selectOption(userData.year);

//     await homePage.newsletter.check();
//     await homePage.offers.check();

//     // Address information
//     await homePage.firstName.fill(userData.firstName);
//     await homePage.lastName.fill(userData.lastName);
//     await homePage.company.fill(userData.company);
//     await homePage.address1.fill(userData.address1);
//     await homePage.address2.fill(userData.address2);

//     await homePage.country.selectOption(userData.country);
//     await homePage.state.fill(userData.state);
//     await homePage.city.fill(userData.city);
//     await homePage.zipcode.fill(userData.zipcode);
//     await homePage.mobileNumber.fill(userData.mobileNumber);

//     // Create account
//     await homePage.createAccountButton.click();

//     await expect(validationPage.accountCreated).toBeVisible();

//     await homePage.continueButton.first().click();

//     // Verify login
//     await expect(validationPage.loggedInAs).toBeVisible();

//     // Delete account
//     await accountPage.deleteAccount.click();

//     await expect(validationPage.accountDeleted).toBeVisible();

//     await accountPage.continueButton.first().click();
// });



//====using base url from helpers functions=====



import { test, expect } from '@playwright/test';

import { SignupPage } from '../pages/signupPage';
import { ValidationPage } from '../pages/validationPage';
import { HomePage } from '../pages/homePage';
import { AccountPage } from '../pages/accountPage';

import commonMethods from '../utils/helper';

test('Register user', async ({ page }) => {

    // Test Data
    const userData = {
        name: 'Mithun',
        email: 'mithun@example24644.com',
        password: 'MyPassword123',
        day: '10',
        month: '5',
        year: '1994',
        firstName: 'Mithun',
        lastName: 'Mishra',
        company: 'ABC Company',
        address1: '123 Main Street',
        address2: 'Apt 4B',
        country: 'Canada',
        state: 'Ontario',
        city: 'Toronto',
        zipcode: 'M5V 2H1',
        mobileNumber: '+1 416-123-4567'
    };

    // Page Objects
    const signupPage = new SignupPage(page);
    const validationPage = new ValidationPage(page);
    const homePage = new HomePage(page);
    const accountPage = new AccountPage(page);



    // Open application
    await page.goto('/');

    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();

    // Signup
    await commonMethods.click(
        signupPage.signup
    );

    await expect(
        validationPage.newUserSignup
    ).toBeVisible();

    await commonMethods.fill(
        signupPage.name,
        userData.name
    );

    await commonMethods.fill(
        signupPage.email,
        userData.email
    );

    await commonMethods.click(
        signupPage.signupbutton
    );

    await expect(
        validationPage.enterAccountInformation
    ).toBeVisible();

    // Account information
    await commonMethods.check(
        homePage.title
    );

    await commonMethods.fill(
        homePage.password,
        userData.password
    );

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

    await commonMethods.check(
        homePage.newsletter
    );

    await commonMethods.check(
        homePage.offers
    );

    // Address information
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

    await commonMethods.selectOption(
        homePage.country,
        userData.country
    );

    await commonMethods.fill(
        homePage.state,
        userData.state
    );

    await commonMethods.fill(
        homePage.city,
        userData.city
    );

    await commonMethods.fill(
        homePage.zipcode,
        userData.zipcode
    );

    await commonMethods.fill(
        homePage.mobileNumber,
        userData.mobileNumber
    );

    // Create account
    await commonMethods.click(
        homePage.createAccountButton
    );

    await expect(
        validationPage.accountCreated
    ).toBeVisible();

    await commonMethods.clickFirst(
        homePage.continueButton
    );

    // Verify login
    await expect(
        validationPage.loggedInAs
    ).toBeVisible();

    // Delete account
    await commonMethods.click(
        accountPage.deleteAccount
    );

    await expect(
        validationPage.accountDeleted
    ).toBeVisible();

    await commonMethods.clickFirst(
        accountPage.continueButton
    );
});



//====using url from config file======


// import { test, expect } from '@playwright/test';

// import { SignupPage } from '../pages/signupPage';
// import { ValidationPage } from '../pages/validationPage';
// import { HomePage } from '../pages/homePage';
// import { AccountPage } from '../pages/accountPage';

// test('Register user', async ({ page }) => {

//     // Test Data
//     const userData = {
//         name: 'Mithun',
//         email: 'mithun@example464.com',
//         password: 'MyPassword123',
//         day: '10',
//         month: '5',
//         year: '1994',
//         firstName: 'Mithun',
//         lastName: 'Mishra',
//         company: 'ABC Company',
//         address1: '123 Main Street',
//         address2: 'Apt 4B',
//         country: 'Canada',
//         state: 'Ontario',
//         city: 'Toronto',
//         zipcode: 'M5V 2H1',
//         mobileNumber: '+1 416-123-4567'
//     };

//     // Page Objects
//     const signupPage = new SignupPage(page);
//     const validationPage = new ValidationPage(page);
//     const homePage = new HomePage(page);
//     const accountPage = new AccountPage(page);

//     // Open application
//     await page.goto('/');

//     // Verify Home Page
//     await expect(validationPage.home).toBeVisible();

//     // Signup
//     await signupPage.signup.click();

//     await expect(
//         validationPage.newUserSignup
//     ).toBeVisible();

//     await signupPage.name.fill(userData.name);

//     await signupPage.email.fill(userData.email);

//     await signupPage.signupbutton.click();

//     await expect(
//         validationPage.enterAccountInformation
//     ).toBeVisible();

//     // Account information
//     await homePage.title.check();

//     await homePage.password.fill(
//         userData.password
//     );

//     await homePage.days.selectOption(
//         userData.day
//     );

//     await homePage.months.selectOption(
//         userData.month
//     );

//     await homePage.years.selectOption(
//         userData.year
//     );

//     await homePage.newsletter.check();

//     await homePage.offers.check();

//     // Address information
//     await homePage.firstName.fill(
//         userData.firstName
//     );

//     await homePage.lastName.fill(
//         userData.lastName
//     );

//     await homePage.company.fill(
//         userData.company
//     );

//     await homePage.address1.fill(
//         userData.address1
//     );

//     await homePage.address2.fill(
//         userData.address2
//     );

//     await homePage.country.selectOption(
//         userData.country
//     );

//     await homePage.state.fill(
//         userData.state
//     );

//     await homePage.city.fill(
//         userData.city
//     );

//     await homePage.zipcode.fill(
//         userData.zipcode
//     );

//     await homePage.mobileNumber.fill(
//         userData.mobileNumber
//     );

//     // Create account
//     await homePage.createAccountButton.click();

//     await expect(
//         validationPage.accountCreated
//     ).toBeVisible();

//     await homePage.continueButton
//         .first()
//         .click();

//     // Verify login
//     await expect(
//         validationPage.loggedInAs
//     ).toBeVisible();

//     // Delete account
//     await accountPage.deleteAccount.click();

//     await expect(
//         validationPage.accountDeleted
//     ).toBeVisible();

//     await accountPage.continueButton
//         .first()
//         .click();
// });

