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

    await expect(validationPage.emailAlreadyExist).toBeVisible();
    
})