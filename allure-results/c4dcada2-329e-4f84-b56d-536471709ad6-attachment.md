# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contactUs.spec.ts >> Contact Us
- Location: tests/contactUs.spec.ts:5:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator:  locator('div[class="status alert alert-success"]')
Expected: visible
Received: hidden
Timeout:  5000ms

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('div[class="status alert alert-success"]')
    13 × locator resolved to <div class="status alert alert-success"></div>
       - unexpected value "hidden"

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
- heading "Contact Us" [level=2]:
  - text: Contact
  - strong: Us
- text: "Note: Below contact form is for testing purpose."
- link "Website testing services":
  - img
  - text: Website testing services
- heading "Get In Touch" [level=2]
- textbox "Name"
- textbox "Email"
- textbox "Subject"
- textbox "Your Message Here"
- button "Choose File"
- button "Submit"
- heading "Feedback For Us" [level=2]
- paragraph: We really appreciate your response to our website.
- paragraph:
  - text: Kindly share your feedback with us at
  - link "feedback@automationexercise.com":
    - /url: mailto:feedback@automationexercise.com
  - text: .
- paragraph: If you have any suggestion areas or improvements, do let us know. We will definitely work on it.
- paragraph: Thank you
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
  15 |     await page.goto('http://automationexercise.com');
  16 | 
  17 |     await contactUsPage.contactUs.click();
  18 | 
  19 |     await expect(validationPage.getinTouch).toBeVisible();
  20 |     await contactUsPage.name.fill(contactUsData.name);
  21 |     await contactUsPage.email.fill(contactUsData.email);
  22 |     await contactUsPage.subject.fill(contactUsData.subject);
  23 |     await contactUsPage.message.fill(contactUsData.message);
  24 |     await contactUsPage.submitButton.click();
  25 | 
> 26 |     await expect(validationPage.successMessage).toBeVisible();
     |                                                 ^ Error: expect(locator).toBeVisible() failed
  27 | 
  28 |     await expect(validationPage.home).toBeVisible();
  29 | });
  30 | 
  31 | 
```