# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:20:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('a[href="/login"]').first()
    - locator resolved to <a href="/login">…</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="checkoutModal" class="modal show">…</div> from <section id="cart_items">…</section> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div id="checkoutModal" class="modal show">…</div> from <section id="cart_items">…</section> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    39 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div id="checkoutModal" class="modal show">…</div> from <section id="cart_items">…</section> subtree intercepts pointer events
     - retrying click action
       - waiting 500ms

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
    - generic [ref=f22e44]:
      - generic [ref=f22e45]: Proceed To Checkout
      - generic [ref=f22e51]:
        - generic [ref=f22e52]:
          - generic [ref=f22e53]: 
          - heading "Checkout" [level=4] [ref=f22e55]
        - generic [ref=f22e56]:
          - paragraph [ref=f22e57]: Register / Login account to proceed on checkout.
          - paragraph [ref=f22e58]:
            - link "Register / Login" [ref=f22e59] [cursor=pointer]:
              - /url: /login
        - button "Continue On Cart" [ref=f22e61] [cursor=pointer]
    - table [ref=f22e63]:
      - rowgroup [ref=f22e64]:
        - row [ref=f22e65]:
          - cell "Item" [ref=f22e66]
          - cell "Description" [ref=f22e67]
          - cell "Price" [ref=f22e68]
          - cell "Quantity" [ref=f22e69]
          - cell "Total" [ref=f22e70]
          - cell [ref=f22e71]
      - rowgroup [ref=f22e72]:
        - row [ref=f22e73]:
          - cell [ref=f22e74]:
            - link [ref=f22e75] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f22e76]
          - cell [ref=f22e77]:
            - heading [level=4] [ref=f22e78]:
              - link "Blue Top" [ref=f22e79] [cursor=pointer]:
                - /url: /product_details/1
            - paragraph [ref=f22e80]: Women > Tops
          - cell [ref=f22e81]:
            - paragraph [ref=f22e82]: Rs. 500
          - cell [ref=f22e83]:
            - button "1" [ref=f22e84] [cursor=pointer]
          - cell [ref=f22e85]:
            - paragraph [ref=f22e86]: Rs. 500
          - cell "" [ref=f22e87]
        - row [ref=f22e90]:
          - cell [ref=f22e91]:
            - link [ref=f22e92] [cursor=pointer]:
              - /url: ""
              - img "Product Image" [ref=f22e93]
          - cell [ref=f22e94]:
            - heading [level=4] [ref=f22e95]:
              - link "Men Tshirt" [ref=f22e96] [cursor=pointer]:
                - /url: /product_details/2
            - paragraph [ref=f22e97]: Men > Tshirts
          - cell [ref=f22e98]:
            - paragraph [ref=f22e99]: Rs. 400
          - cell [ref=f22e100]:
            - button "1" [ref=f22e101] [cursor=pointer]
          - cell [ref=f22e102]:
            - paragraph [ref=f22e103]: Rs. 400
          - cell "" [ref=f22e104]
  - contentinfo [ref=f22e107]:
    - generic [ref=f22e112]:
      - heading "Subscription" [level=2] [ref=f22e113]
      - generic [ref=f22e114]:
        - textbox "Your email address" [ref=f22e115]
        - button "" [ref=f22e116] [cursor=pointer]
        - paragraph [ref=f22e118]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f22e122]: Copyright © 2021 All rights reserved
  - text: 
  - insertion [ref=f22e124]:
    - generic [ref=f22e127]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f22e129]: Discover more
      - link "Programming" [ref=f22e130] [cursor=pointer]
      - link "Autos & Vehicles" [ref=f22e135] [cursor=pointer]
      - link "Development Tools" [ref=f22e140] [cursor=pointer]
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
     |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
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