import { test, expect } from '@playwright/test';
import { SignupPage } from '../pages/signupPage';
import { ValidationPage } from '../pages/validationPage';
import { HomePage } from '../pages/homePage';
import { AccountPage } from '../pages/accountPage';

test('Register user', async ({ page }) => {

    // Test Data
    const userData = {
        name: 'Mithun',
        email: 'mithun@example44.com',
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
    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    // Signup
    await signupPage.signup.click();

    await expect(validationPage.newUserSignup).toBeVisible();

    await signupPage.name.fill(userData.name);
    await signupPage.email.fill(userData.email);

    await signupPage.signupbutton.click();

    await expect(validationPage.enterAccountInformation).toBeVisible();

    // Account information
    await homePage.title.check();
    await homePage.password.fill(userData.password);

    await homePage.days.selectOption(userData.day);
    await homePage.months.selectOption(userData.month);
    await homePage.years.selectOption(userData.year);

    await homePage.newsletter.check();
    await homePage.offers.check();

    // Address information
    await homePage.firstName.fill(userData.firstName);
    await homePage.lastName.fill(userData.lastName);
    await homePage.company.fill(userData.company);
    await homePage.address1.fill(userData.address1);
    await homePage.address2.fill(userData.address2);

    await homePage.country.selectOption(userData.country);
    await homePage.state.fill(userData.state);
    await homePage.city.fill(userData.city);
    await homePage.zipcode.fill(userData.zipcode);
    await homePage.mobileNumber.fill(userData.mobileNumber);

    // Create account
    await homePage.createAccountButton.click();

    await expect(validationPage.accountCreated).toBeVisible();

    await homePage.continueButton.first().click();

    // Verify login
    await expect(validationPage.loggedInAs).toBeVisible();

    // Delete account
    await accountPage.deleteAccount.click();

    await expect(validationPage.accountDeleted).toBeVisible();

    await accountPage.continueButton.first().click();
});