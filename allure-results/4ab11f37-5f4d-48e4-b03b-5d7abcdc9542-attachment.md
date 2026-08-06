# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:19:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.waitFor: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('h2').filter({ hasText: 'Account Deleted!' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f86e1]:
  - banner [ref=f86e2]:
    - generic [ref=f86e5]:
      - link [ref=f86e8] [cursor=pointer]:
        - /url: /
        - img "Automation Exercise website" [ref=f86e9]
      - list [ref=f86e12]:
        - listitem [ref=f86e13]:
          - link " Home" [ref=f86e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f86e15]: 
            - text: Home
        - listitem [ref=f86e16]:
          - link " Products" [ref=f86e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f86e18]: 
            - text: Products
        - listitem [ref=f86e19]:
          - link " Cart" [ref=f86e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f86e21]: 
            - text: Cart
        - listitem [ref=f86e22]:
          - link " Logout" [ref=f86e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f86e24]: 
            - text: Logout
        - listitem [ref=f86e25]:
          - link " Delete Account" [ref=f86e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f86e27]: 
            - text: Delete Account
        - listitem [ref=f86e28]:
          - link " Test Cases" [ref=f86e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f86e30]: 
            - text: Test Cases
        - listitem [ref=f86e31]:
          - link " API Testing" [ref=f86e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f86e33]: 
            - text: API Testing
        - listitem [ref=f86e34]:
          - link " Video Tutorials" [ref=f86e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f86e36]: 
            - text: Video Tutorials
        - listitem [ref=f86e37]:
          - link " Contact us" [ref=f86e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f86e39]: 
            - text: Contact us
        - listitem [ref=f86e40]:
          - generic [ref=f86e41]:
            - generic [ref=f86e42]: 
            - text: Logged in as Mithun
  - generic [ref=f86e46]:
    - heading "Order Placed!" [level=2] [ref=f86e47]
    - paragraph [ref=f86e48]: Congratulations! Your order has been confirmed!
    - link "Download Invoice" [ref=f86e49] [cursor=pointer]:
      - /url: /download_invoice/900
    - link "Continue" [ref=f86e51] [cursor=pointer]:
      - /url: /
  - contentinfo [ref=f86e52]:
    - generic [ref=f86e57]:
      - heading "Subscription" [level=2] [ref=f86e58]
      - generic [ref=f86e59]:
        - textbox "Your email address" [ref=f86e60]
        - button "" [ref=f86e61] [cursor=pointer]
        - paragraph [ref=f86e63]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f86e67]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f86e69]:
    - generic [ref=f86e72]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f86e74]: Discover more
      - link "Programming" [ref=f86e75] [cursor=pointer]
      - link "Development Tools" [ref=f86e80] [cursor=pointer]
      - link "Intellectual Property" [ref=f86e85] [cursor=pointer]
```

# Test source

```ts
  1  | 
  2  | import { Locator } from '@playwright/test';
  3  | 
  4  | class Helper {
  5  | 
  6  |     // Open application
  7  |     // async openApplication() {
  8  |     //     await this.page.goto('http://automationexercise.com');
  9  |     // }
  10 | 
  11 |     // Click
  12 |     async click(element: Locator) {
  13 |         await element.click();
  14 |     }
  15 | 
  16 |     // Click first matching element
  17 |     async clickFirst(element: Locator) {
  18 |         await element.first().click();
  19 |     }
  20 | 
  21 |     // Hover
  22 |     async hover(element: Locator) {
  23 |         await element.hover();
  24 |     }
  25 | 
  26 |     // Fill input field
  27 |     async fill(element: Locator, value: string) {
  28 |         await element.fill(value);
  29 |     }
  30 | 
  31 |     // Check checkbox
  32 |     async check(element: Locator) {
  33 |         await element.check();
  34 |     }
  35 | 
  36 |     // Select dropdown option
  37 |     async selectOption(element: Locator, value: string) {
  38 |         await element.selectOption(value);
  39 |     }
  40 | 
  41 |     // Scroll element into view
  42 |     async scrollIntoView(element: Locator) {
  43 |         await element.scrollIntoViewIfNeeded();
  44 |     }
  45 | 
  46 |     // Wait for element to be visible
  47 |     async waitForElement(
  48 |         element: Locator,
  49 |         timeout: number = 10000
  50 |     ) {
> 51 |         await element.waitFor({
     |                       ^ Error: locator.waitFor: Test timeout of 30000ms exceeded.
  52 |             state: 'visible',
  53 |             timeout: timeout
  54 |         });
  55 |     }
  56 | }
  57 | 
  58 | export default new Helper();
```