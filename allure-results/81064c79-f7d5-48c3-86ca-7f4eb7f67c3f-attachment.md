# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: productQuantity.spec.ts >> Product Quantity
- Location: tests/productQuantity.spec.ts:7:5

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a[href="/view_cart"]') resolved to 2 elements:
    1) <a href="/view_cart">…</a> aka getByRole('link', { name: ' Cart' })
    2) <a href="/view_cart">…</a> aka locator('a').filter({ hasText: 'View Cart' })

Call log:
  - waiting for locator('a[href="/view_cart"]')

```

# Page snapshot

```yaml
- generic [ref=f18e1]:
  - banner [ref=f18e2]:
    - generic [ref=f18e5]:
      - link [ref=f18e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f18e9]
      - list [ref=f18e12]:
        - listitem [ref=f18e13]:
          - link " Home" [ref=f18e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f18e15]: 
            - text: Home
        - listitem [ref=f18e16]:
          - link " Products" [ref=f18e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f18e18]: 
            - text: Products
        - listitem [ref=f18e19]:
          - link " Cart" [ref=f18e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f18e21]: 
            - text: Cart
        - listitem [ref=f18e22]:
          - link " Signup / Login" [ref=f18e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f18e24]: 
            - text: Signup / Login
        - listitem [ref=f18e25]:
          - link " Test Cases" [ref=f18e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f18e27]: 
            - text: Test Cases
        - listitem [ref=f18e28]:
          - link " API Testing" [ref=f18e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f18e30]: 
            - text: API Testing
        - listitem [ref=f18e31]:
          - link " Video Tutorials" [ref=f18e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f18e33]: 
            - text: Video Tutorials
        - listitem [ref=f18e34]:
          - link " Contact us" [ref=f18e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f18e36]: 
            - text: Contact us
  - generic [ref=f18e39]:
    - generic [ref=f18e41]:
      - heading "Category" [level=2] [ref=f18e42]
      - generic [ref=f18e43]:
        - heading [level=4] [ref=f18e46]:
          - link " Women" [ref=f18e47] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f18e48]: 
            - text: Women
        - heading [level=4] [ref=f18e52]:
          - link " Men" [ref=f18e53] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f18e54]: 
            - text: Men
        - heading [level=4] [ref=f18e58]:
          - link " Kids" [ref=f18e59] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f18e60]: 
            - text: Kids
      - generic [ref=f18e62]:
        - heading "Brands" [level=2] [ref=f18e63]
        - list [ref=f18e65]:
          - listitem [ref=f18e66]:
            - link "(6) Polo" [ref=f18e67] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f18e68]: (6)
              - text: Polo
          - listitem [ref=f18e69]:
            - link "(5) H&M" [ref=f18e70] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f18e71]: (5)
              - text: H&M
          - listitem [ref=f18e72]:
            - link "(5) Madame" [ref=f18e73] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f18e74]: (5)
              - text: Madame
          - listitem [ref=f18e75]:
            - link "(3) Mast & Harbour" [ref=f18e76] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f18e77]: (3)
              - text: Mast & Harbour
          - listitem [ref=f18e78]:
            - link "(4) Babyhug" [ref=f18e79] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f18e80]: (4)
              - text: Babyhug
          - listitem [ref=f18e81]:
            - link "(3) Allen Solly Junior" [ref=f18e82] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f18e83]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f18e84]:
            - link "(3) Kookie Kids" [ref=f18e85] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f18e86]: (3)
              - text: Kookie Kids
          - listitem [ref=f18e87]:
            - link "(5) Biba" [ref=f18e88] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f18e89]: (5)
              - text: Biba
    - generic [ref=f18e90]:
      - generic [ref=f18e91]:
        - img "ecommerce website products" [ref=f18e94]
        - generic [ref=f18e96]:
          - img "ecommerce website products" [ref=f18e97]
          - heading "Blue Top" [level=2] [ref=f18e98]
          - paragraph [ref=f18e99]: "Category: Women > Tops"
          - img "ecommerce website products" [ref=f18e100]
          - generic [ref=f18e101]:
            - generic [ref=f18e102]: Rs. 500
            - generic [ref=f18e103]: "Quantity:"
            - spinbutton [active] [ref=f18e104]: "4"
            - button " Add to cart" [ref=f18e105] [cursor=pointer]:
              - generic [ref=f18e106]: 
              - text: Add to cart
          - paragraph [ref=f18e107]: "Availability: In Stock"
          - paragraph [ref=f18e108]: "Condition: New"
          - paragraph [ref=f18e109]: "Brand: Polo"
      - generic [ref=f18e110]:
        - list [ref=f18e112]:
          - listitem [ref=f18e113]:
            - link "Write Your Review" [ref=f18e114]:
              - /url: "#reviews"
        - generic [ref=f18e116]:
          - generic [ref=f18e117]:
            - textbox "Your Name" [ref=f18e118]
            - textbox "Email Address" [ref=f18e119]
          - textbox "Add Review Here!" [ref=f18e120]
          - button "Submit" [ref=f18e121] [cursor=pointer]
  - contentinfo [ref=f18e122]:
    - generic [ref=f18e127]:
      - heading "Subscription" [level=2] [ref=f18e128]
      - generic [ref=f18e129]:
        - textbox "Your email address" [ref=f18e130]
        - button "" [ref=f18e131] [cursor=pointer]
        - paragraph [ref=f18e133]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f18e137]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import { ProductQuantityPage } from '../pages/productQuantityPage';  
  3  | import { ValidationPage } from '../pages/validationPage';
  4  | import { CartPage } from '../pages/cartPage';
  5  | import { ProductPage } from '../pages/productPage';
  6  | 
  7  | test('Product Quantity', async ({ page }) => {
  8  | 
  9  |     const productQuantityPage = new ProductQuantityPage(page);
  10 |     const validationPage = new ValidationPage(page);
  11 |     const cartPage = new CartPage(page);
  12 |     const productPage = new ProductPage(page);
  13 |      
  14 |     await page.goto('http://automationexercise.com');
  15 | 
  16 |    await productPage.products.click();
  17 | 
  18 |     await productPage.viewProduct.click();
  19 | 
  20 |    await productQuantityPage.productQuantity.fill('4');
  21 | 
  22 |    // await productQuantityPage.productQuantity.press('keyup');
  23 |    //await waitforTimeout(1000);
  24 |    // await productQuantityPage.productQuantity.press('keyup');
  25 |    //await waitforTimeout(1000);
  26 |    // await productQuantityPage.productQuantity.press('keyup');
  27 |    //await waitforTimeout(1000);
  28 | 
> 29 |    await cartPage.cart.click();
     |                        ^ Error: locator.click: Error: strict mode violation: locator('a[href="/view_cart"]') resolved to 2 elements:
  30 |    await productQuantityPage.viewCart.click();
  31 |    
  32 | 
  33 | })
  34 | 
```