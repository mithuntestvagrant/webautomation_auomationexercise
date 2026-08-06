# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:20:5

# Error details

```
TypeError: Cannot read properties of undefined (reading 'click')
```

# Page snapshot

```yaml
- generic [active] [ref=f22e1]:
  - banner [ref=f22e2]:
    - generic [ref=f22e5]:
      - link [ref=f22e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f22e9]
      - list [ref=f22e12]:
        - listitem [ref=f22e13]:
          - link " Home" [ref=f22e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f22e15]: 
            - text: Home
        - listitem [ref=f22e16]:
          - link " Products" [ref=f22e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f22e18]: 
            - text: Products
        - listitem [ref=f22e19]:
          - link " Cart" [ref=f22e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f22e21]: 
            - text: Cart
        - listitem [ref=f22e22]:
          - link " Signup / Login" [ref=f22e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f22e24]: 
            - text: Signup / Login
        - listitem [ref=f22e25]:
          - link " Test Cases" [ref=f22e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f22e27]: 
            - text: Test Cases
        - listitem [ref=f22e28]:
          - link " API Testing" [ref=f22e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f22e30]: 
            - text: API Testing
        - listitem [ref=f22e31]:
          - link " Video Tutorials" [ref=f22e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f22e33]: 
            - text: Video Tutorials
        - listitem [ref=f22e34]:
          - link " Contact us" [ref=f22e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f22e36]: 
            - text: Contact us
  - generic [ref=f22e38]:
    - list [ref=f22e40]:
      - listitem [ref=f22e41]:
        - link "Home" [ref=f22e42] [cursor=pointer]:
          - /url: /
      - listitem [ref=f22e43]: Shopping Cart
    - generic [ref=f22e44]: Proceed To Checkout
    - table [ref=f22e50]:
      - rowgroup [ref=f22e51]:
        - row [ref=f22e52]:
          - cell "Item" [ref=f22e53]
          - cell "Description" [ref=f22e54]
          - cell "Price" [ref=f22e55]
          - cell "Quantity" [ref=f22e56]
          - cell "Total" [ref=f22e57]
          - cell [ref=f22e58]
      - rowgroup [ref=f22e59]:
        - row [ref=f22e60]:
          - cell [ref=f22e61]:
            - link [ref=f22e62] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f22e63]
          - cell [ref=f22e64]:
            - heading [level=4] [ref=f22e65]:
              - link "Blue Top" [ref=f22e66] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=f22e67]: Women > Tops
          - cell [ref=f22e68]:
            - paragraph [ref=f22e69]: Rs. 500
          - cell [ref=f22e70]:
            - button "1" [ref=f22e71] [cursor=pointer]
          - cell [ref=f22e72]:
            - paragraph [ref=f22e73]: Rs. 500
          - cell "" [ref=f22e74]
        - row [ref=f22e77]:
          - cell [ref=f22e78]:
            - link [ref=f22e79] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f22e80]
          - cell [ref=f22e81]:
            - heading [level=4] [ref=f22e82]:
              - link "Men Tshirt" [ref=f22e83] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=f22e84]: Men > Tshirts
          - cell [ref=f22e85]:
            - paragraph [ref=f22e86]: Rs. 400
          - cell [ref=f22e87]:
            - button "1" [ref=f22e88] [cursor=pointer]
          - cell [ref=f22e89]:
            - paragraph [ref=f22e90]: Rs. 400
          - cell "" [ref=f22e91]
  - contentinfo [ref=f22e94]:
    - generic [ref=f22e99]:
      - heading "Subscription" [level=2] [ref=f22e100]
      - generic [ref=f22e101]:
        - textbox "Your email address" [ref=f22e102]
        - button "" [ref=f22e103] [cursor=pointer]
        - paragraph [ref=f22e105]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f22e109]: Copyright © 2021 All rights reserved
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
     |                       ^ TypeError: Cannot read properties of undefined (reading 'click')
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