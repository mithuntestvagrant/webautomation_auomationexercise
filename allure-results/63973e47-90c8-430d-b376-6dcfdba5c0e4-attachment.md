# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactUs.spec.ts >> Contact Us
- Location: tests/contactUs.spec.ts:5:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a').filter({ hasText: 'Contact us' })

```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import { ContactUsPage } from '../pages/contactUs';
  3  | import { ValidationPage } from '../pages/validationPage';
  4  | 
  5  | test('Contact Us', async ({ page }) => {
  6  |     const contactUsData={
  7  |         name: 'Mithun',
  8  |         email: 'mithun@example.com',
  9  |         subject: 'Test Subject',
  10 |         message: 'Test Message'
  11 |     };
  12 | 
  13 |     const contactUsPage = new ContactUsPage(page);
  14 |     const validationPage = new ValidationPage(page);
  15 | 
> 16 |     await contactUsPage.contactUs.click();
     |                                   ^ Error: locator.click: Test timeout of 30000ms exceeded.
  17 | 
  18 |     await expect(validationPage.getinTouch).toBeVisible();
  19 |     await contactUsPage.name.fill(contactUsData.name);
  20 |     await contactUsPage.email.fill(contactUsData.email);
  21 |     await contactUsPage.subject.fill(contactUsData.subject);
  22 |     await contactUsPage.message.fill(contactUsData.message);
  23 |     await contactUsPage.submitButton.click();
  24 | 
  25 |     await expect(validationPage.successMessage).toBeVisible();
  26 | 
  27 |     await expect(validationPage.home).toBeVisible();
  28 | });
  29 | 
  30 | 
```