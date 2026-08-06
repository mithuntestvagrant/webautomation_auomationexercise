# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:20:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a[href="/login"]') resolved to 2 elements:
    1) <a href="/login">…</a> aka getByRole('link', { name: ' Signup / Login' })
    2) <a href="/login">…</a> aka getByRole('link', { name: 'Register / Login' })

Call log:
  - waiting for locator('a[href="/login"]')

```

# Page snapshot

```yaml
- generic [active] [ref=f19e1]:
  - banner [ref=f19e2]:
    - generic [ref=f19e5]:
      - link [ref=f19e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f19e9]
      - list [ref=f19e12]:
        - listitem [ref=f19e13]:
          - link " Home" [ref=f19e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f19e15]: 
            - text: Home
        - listitem [ref=f19e16]:
          - link " Products" [ref=f19e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f19e18]: 
            - text: Products
        - listitem [ref=f19e19]:
          - link " Cart" [ref=f19e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f19e21]: 
            - text: Cart
        - listitem [ref=f19e22]:
          - link " Signup / Login" [ref=f19e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f19e24]: 
            - text: Signup / Login
        - listitem [ref=f19e25]:
          - link " Test Cases" [ref=f19e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f19e27]: 
            - text: Test Cases
        - listitem [ref=f19e28]:
          - link " API Testing" [ref=f19e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f19e30]: 
            - text: API Testing
        - listitem [ref=f19e31]:
          - link " Video Tutorials" [ref=f19e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f19e33]: 
            - text: Video Tutorials
        - listitem [ref=f19e34]:
          - link " Contact us" [ref=f19e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f19e36]: 
            - text: Contact us
  - generic [ref=f19e38]:
    - list [ref=f19e40]:
      - listitem [ref=f19e41]:
        - link "Home" [ref=f19e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=f19e43]: Shopping Cart
    - generic [ref=f19e44]:
      - generic [ref=f19e45]: Proceed To Checkout
      - generic [ref=f19e51]:
        - generic [ref=f19e52]:
          - generic [ref=f19e53]: 
          - heading "Checkout" [level=4] [ref=f19e55]
        - generic [ref=f19e56]:
          - paragraph [ref=f19e57]: Register / Login account to proceed on checkout.
          - paragraph [ref=f19e58]:
            - link "Register / Login" [ref=f19e59] [cursor=pointer]:
              - /url: /login
        - button "Continue On Cart" [ref=f19e61] [cursor=pointer]
    - table [ref=f19e63]:
      - rowgroup [ref=f19e64]:
        - row [ref=f19e65]:
          - cell "Item" [ref=f19e66]
          - cell "Description" [ref=f19e67]
          - cell "Price" [ref=f19e68]
          - cell "Quantity" [ref=f19e69]
          - cell "Total" [ref=f19e70]
          - cell [ref=f19e71]
      - rowgroup [ref=f19e72]:
        - row [ref=f19e73]:
          - cell [ref=f19e74]:
            - link [ref=f19e75] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f19e76]
          - cell [ref=f19e77]:
            - heading [level=4] [ref=f19e78]:
              - link "Blue Top" [ref=f19e79] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=f19e80]: Women > Tops
          - cell [ref=f19e81]:
            - paragraph [ref=f19e82]: Rs. 500
          - cell [ref=f19e83]:
            - button "1" [ref=f19e84] [cursor=pointer]
          - cell [ref=f19e85]:
            - paragraph [ref=f19e86]: Rs. 500
          - cell "" [ref=f19e87]
        - row [ref=f19e90]:
          - cell [ref=f19e91]:
            - link [ref=f19e92] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f19e93]
          - cell [ref=f19e94]:
            - heading [level=4] [ref=f19e95]:
              - link "Men Tshirt" [ref=f19e96] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=f19e97]: Men > Tshirts
          - cell [ref=f19e98]:
            - paragraph [ref=f19e99]: Rs. 400
          - cell [ref=f19e100]:
            - button "1" [ref=f19e101] [cursor=pointer]
          - cell [ref=f19e102]:
            - paragraph [ref=f19e103]: Rs. 400
          - cell "" [ref=f19e104]
  - contentinfo [ref=f19e107]:
    - generic [ref=f19e112]:
      - heading "Subscription" [level=2] [ref=f19e113]
      - generic [ref=f19e114]:
        - textbox "Your email address" [ref=f19e115]
        - button "" [ref=f19e116] [cursor=pointer]
        - paragraph [ref=f19e118]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f19e122]: Copyright © 2021 All rights reserved
  - text: 
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
> 13 |         await element.click();
     |                       ^ Error: locator.click: Error: strict mode violation: locator('a[href="/login"]') resolved to 2 elements:
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
  47 |     async waitForElement(element: Locator) {
  48 |         await element.waitFor({
  49 |             state: 'visible'
  50 |         });
  51 |     }
  52 | }
  53 | 
  54 | export default new Helper();
  55 | 
```