# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUserUsingTestData.spec.ts >> Register user
- Location: tests/registerUserUsingTestData.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('b').filter({ hasText: 'Enter Account Information' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('b').filter({ hasText: 'Enter Account Information' })

```

```yaml
- banner:
  - link "Website for automation practice":
    - /url: /
    - img "Website for automation practice"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Login to your account" [level=2]
- textbox "Email Address"
- textbox "Password"
- button "Login"
- heading "OR" [level=2]
- heading "New User Signup!" [level=2]
- textbox "Name": Mithun
- textbox "Email Address": mithun@example44.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "API testing guide"
  - link "API testing tools"
  - link "Business automation consulting"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { SignupPage } from '../pages/signupPage';
  3  | import { ValidationPage } from '../pages/validationPage';
  4  | import { HomePage } from '../pages/homePage';
  5  | import { AccountPage } from '../pages/accountPage';
  6  | import { userData } from '../testData/userData';
  7  | 
  8  | test('Register user', async ({ page }) => {
  9  | 
  10 |     const signupPage = new SignupPage(page);
  11 |     const validationPage = new ValidationPage(page);
  12 |     const homePage = new HomePage(page);
  13 |     const accountPage = new AccountPage(page);
  14 | 
  15 |     await page.goto('http://automationexercise.com');
  16 | 
  17 |     await expect(validationPage.home).toBeVisible();
  18 | 
  19 |     // Signup
  20 |     await signupPage.signup.click();
  21 | 
  22 |     await expect(validationPage.newUserSignup).toBeVisible();
  23 | 
  24 |     await signupPage.name.fill(userData.name);
  25 |     await signupPage.email.fill(userData.email);
  26 | 
  27 |     await signupPage.signupbutton.click();
  28 | 
> 29 |     await expect(validationPage.enterAccountInformation).toBeVisible();
     |                                                          ^ Error: expect(locator).toBeVisible() failed
  30 | 
  31 |     // Account information
  32 |     await homePage.title.check();
  33 |     await homePage.password.fill(userData.password);
  34 | 
  35 |     await homePage.days.selectOption(userData.day);
  36 |     await homePage.months.selectOption(userData.month);
  37 |     await homePage.years.selectOption(userData.year);
  38 | 
  39 |     await homePage.newsletter.check();
  40 |     await homePage.offers.check();
  41 | 
  42 |     // Address information
  43 |     await homePage.firstName.fill(userData.firstName);
  44 |     await homePage.lastName.fill(userData.lastName);
  45 |     await homePage.company.fill(userData.company);
  46 |     await homePage.address1.fill(userData.address1);
  47 |     await homePage.address2.fill(userData.address2);
  48 | 
  49 |     await homePage.country.selectOption(userData.country);
  50 |     await homePage.state.fill(userData.state);
  51 |     await homePage.city.fill(userData.city);
  52 |     await homePage.zipcode.fill(userData.zipcode);
  53 |     await homePage.mobileNumber.fill(userData.mobileNumber);
  54 | 
  55 |     // Create account
  56 |     await homePage.createAccountButton.click();
  57 | 
  58 |     await expect(validationPage.accountCreated).toBeVisible();
  59 | 
  60 |     await homePage.continueButton.first().click();
  61 | 
  62 |     // Verify login
  63 |     await expect(validationPage.loggedInAs).toBeVisible();
  64 | 
  65 |     // Delete account
  66 |     await accountPage.deleteAccount.click();
  67 | 
  68 |     await expect(validationPage.accountDeleted).toBeVisible();
  69 | 
  70 |     await accountPage.continueButton.first().click();
  71 | });
```