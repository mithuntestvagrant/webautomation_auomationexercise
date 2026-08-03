import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { ValidationPage } from '../pages/validationPage';

test('Login User', async ({ page }) => {

    const loginData={
        email: 'mithun@example1919.com',
        password: 'MyPassword123'
    };
    const loginPage = new LoginPage(page);
    const validationPage = new ValidationPage(page);

    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    // Login
    await loginPage.login.click();

   

    await loginPage.email.fill(loginData.email);
    await loginPage.password.fill(loginData.password);

    await loginPage.loginButton.click();

    await expect(validationPage.loggedInAs).toBeVisible();

    await loginPage.logout.click();
    
});

