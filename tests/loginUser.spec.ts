// import { expect ,test} from "@playwright/test";
// test("Login User", async ({ page }) => {

//     await page.goto("http://automationexercise.com")
//     const login = page.locator('a', { hasText: 'Signup / Login' });

//      await login.click();
      
//      const loginAccount = page.locator('h2', { hasText: 'Login to your account' });

//      await expect(loginAccount).toBeVisible();
     
//      const email = page.locator('input[data-qa="login-email"]');
//      await email.fill('mithun@example1919.com');
//      const password = page.locator('input[data-qa="login-password"]');
//      await password.fill('MyPassword123');
//      const loginbutton = page.locator('button', { hasText: 'Login' });
//      await loginbutton.click();
     



// })

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
});

