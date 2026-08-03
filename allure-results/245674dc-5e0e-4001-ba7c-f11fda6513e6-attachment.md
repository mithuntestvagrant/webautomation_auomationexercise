# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.ts >> Register user
- Location: tests/registerUser.spec.ts:2:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Enter Account Information')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByText('Enter Account Information')

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
- textbox "Email Address": mithun@example1111121.com
- paragraph: Email Address already exist!
- button "Signup"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - iframe
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test('Register user', async({page})=>{
  3  | 
  4  | await page.goto('http://automationexercise.com')
  5  | await page.waitForLoadState('networkidle')
  6  | const home = page.getByRole('link', { name: 'Home' });
  7  | 
  8  | await expect(home).toBeVisible();
  9  | 
  10 | const signup = page.getByRole('link', { name: 'Signup / Login' });
  11 | 
  12 | await signup.click();
  13 | const newuser = page.getByRole('heading', { name: 'New User Signup!' });
  14 | await newuser.waitFor({ state: 'visible', timeout: 10000 });
  15 | await expect(newuser).toBeVisible();
  16 | const name = page.getByRole('textbox', { name: 'Name' });
  17 | await name.fill('Mithun');
  18 | const email = page.getByPlaceholder('Email Address').nth(1);
  19 | await email.fill('mithun@example1111121.com');
  20 | 
  21 | const signupbutton = page.getByRole('button', { name: 'Signup' });
  22 | await signupbutton.click();
  23 | 
  24 | const accountinfo = page.getByText('Enter Account Information');
> 25 | await expect(accountinfo).toBeVisible();
     |                           ^ Error: expect(locator).toBeVisible() failed
  26 | const title = page.getByLabel(/Mr\./i);
  27 | await title.check();
  28 | 
  29 | const password = page.getByRole('textbox', { name: 'Password' });
  30 | await password.fill('MyPassword123');
  31 | const day = page.locator('#days');
  32 | await day.selectOption('10');
  33 | const month = page.locator('#months');
  34 | await month.selectOption('5');
  35 | 
  36 | const year = page.locator('#years');
  37 | await year.selectOption('1994');
  38 | const newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
  39 | await newsletter.check();
  40 | const offers = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
  41 | await offers.check();
  42 | const firstName = page.getByRole('textbox', { name: /First Name/i });
  43 | await firstName.fill('Mithun');
  44 | const lastName = page.getByRole('textbox', { name: /Last Name/i });
  45 | await lastName.fill('Mishra');
  46 | const company = page.locator('#company');
  47 | await company.fill('ABC Company');
  48 | const address1 = page.locator('#address1');
  49 | await address1.fill('123 Main Street');
  50 | const address2 = page.locator('#address2');
  51 | await address2.fill('Apt 4B');
  52 | const country = page.getByRole('combobox', { name: 'Country' });
  53 | await country.selectOption('Canada');
  54 | const state = page.locator('#state');
  55 | await state.fill('Ontario');
  56 | const city = page.locator('#city');
  57 | await city.fill('Toronto');
  58 | const zipcode = page.locator('#zipcode');
  59 | await zipcode.fill('M5V 2H1');
  60 | const mobileNumber = page.locator('#mobile_number');
  61 | await mobileNumber.fill('+1 416-123-4567');
  62 | const createAccountButton = page.getByRole('button', { name: 'Create Account' });
  63 | await createAccountButton.click();
  64 |     const accountCreatedMessage= page.locator("//b[text()='Account Created!']")
  65 |     await accountCreatedMessage.waitFor({ state: 'visible', timeout: 10000 })
  66 |     await expect(accountCreatedMessage).toBeVisible();
  67 |     const continueButton = page.getByRole('link', { name: 'Continue' });
  68 |     await continueButton.first().waitFor({ state: 'visible', timeout: 10000 });
  69 |     await continueButton.first().click();
  70 |     await page.waitForLoadState('networkidle');
  71 | 
  72 |     const loggedInAs = page.getByText(/Logged in as/i);
  73 |     await loggedInAs.waitFor({ state: 'visible', timeout: 10000 });
  74 |     await expect(loggedInAs).toBeVisible();
  75 |     const deleteAccount = page.getByRole('link', { name: 'Delete Account' });
  76 | 
  77 |     await deleteAccount.click();
  78 |     const accountDeleted = page.getByText('Account Deleted!');
  79 |     await accountDeleted.waitFor({ state: 'visible', timeout: 10000 });
  80 |     await expect(accountDeleted).toBeVisible();
  81 |     const continueButton3 = page.getByRole('link', { name: 'Continue' });
  82 |     await continueButton3.first().waitFor({ state: 'visible', timeout: 10000 });
  83 |     await continueButton3.first().click();
  84 |     
  85 | 
  86 | 
  87 | 
  88 | 
  89 | })
```