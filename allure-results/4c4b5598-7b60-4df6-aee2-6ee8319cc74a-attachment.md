# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:19:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Order Placed Successfully')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByText('Order Placed Successfully')

```

```yaml
- banner:
  - link "Automation Exercise website":
    - /url: /
    - img "Automation Exercise website"
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
      - link " Logout":
        - /url: /logout
    - listitem:
      - link " Delete Account":
        - /url: /delete_account
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
    - listitem:  Logged in as Mithun
- heading "Order Placed!" [level=2]
- paragraph: Congratulations! Your order has been confirmed!
- link "Download Invoice":
  - /url: /download_invoice/900
- link "Continue":
  - /url: /
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Software"
  - link "Programming"
  - link "Intellectual Property"
```

# Test source

```ts
  258 |     await commonMethods.waitForElement(
  259 |         cartPage.cart
  260 |     );
  261 | 
  262 |     await commonMethods.click(
  263 |         cartPage.cart
  264 |     );
  265 | 
  266 |     // =========================
  267 |     // Proceed To Checkout
  268 |     // =========================
  269 | 
  270 |     await commonMethods.waitForElement(
  271 |         cartPage.proceedToCheckout
  272 |     );
  273 | 
  274 |     await commonMethods.click(
  275 |         cartPage.proceedToCheckout
  276 |     );
  277 | 
  278 |     // =========================
  279 |     // Verify Address and Order
  280 |     // =========================
  281 | 
  282 |     await expect(
  283 |         validationPage.addressDetails
  284 |     ).toBeVisible();
  285 | 
  286 |     await expect(
  287 |         validationPage.reviewYourOrder
  288 |     ).toBeVisible();
  289 | 
  290 |     // =========================
  291 |     // Order Comment
  292 |     // =========================
  293 | 
  294 |     await commonMethods.fill(
  295 |         checkoutPage.orderComment,
  296 |         'Please deliver the order as soon as possible.'
  297 |     );
  298 | 
  299 |     // =========================
  300 |     // Place Order
  301 |     // =========================
  302 | 
  303 |     await commonMethods.waitForElement(
  304 |         checkoutPage.placeOrder
  305 |     );
  306 | 
  307 |     await commonMethods.click(
  308 |         checkoutPage.placeOrder
  309 |     );
  310 | 
  311 |     // =========================
  312 |     // Payment Details
  313 |     // =========================
  314 | 
  315 |     await commonMethods.fill(
  316 |         paymentPage.nameOnCard,
  317 |         paymentData.nameOnCard
  318 |     );
  319 | 
  320 |     await commonMethods.fill(
  321 |         paymentPage.cardNumber,
  322 |         paymentData.cardNumber
  323 |     );
  324 | 
  325 |     await commonMethods.fill(
  326 |         paymentPage.cvc,
  327 |         paymentData.cvc
  328 |     );
  329 | 
  330 |     await commonMethods.fill(
  331 |         paymentPage.expirationMonth,
  332 |         paymentData.expirationMonth
  333 |     );
  334 | 
  335 |     await commonMethods.fill(
  336 |         paymentPage.expirationYear,
  337 |         paymentData.expirationYear
  338 |     );
  339 | 
  340 |     // =========================
  341 |     // Pay and Confirm Order
  342 |     // =========================
  343 | 
  344 |     await commonMethods.waitForElement(
  345 |         paymentPage.payAndConfirmOrder
  346 |     );
  347 | 
  348 |     await commonMethods.click(
  349 |         paymentPage.payAndConfirmOrder
  350 |     );
  351 | 
  352 |     // =========================
  353 |     // Verify Order Success
  354 |     // =========================
  355 | 
  356 |     await expect(
  357 |         validationPage.orderPlacedSuccessfully
> 358 |     ).toBeVisible({ timeout: 10000 });
      |       ^ Error: expect(locator).toBeVisible() failed
  359 | 
  360 |     // =========================
  361 |     // Delete Account
  362 |     // =========================
  363 | 
  364 |     await commonMethods.click(
  365 |         accountPage.deleteAccount
  366 |     );
  367 | 
  368 |     // =========================
  369 |     // Verify Account Deleted
  370 |     // =========================
  371 | 
  372 |     await expect(
  373 |         validationPage.accountDeleted
  374 |     ).toBeVisible();
  375 | 
  376 |     // Continue
  377 |     await commonMethods.clickFirst(
  378 |         accountPage.continueButton
  379 |     );
  380 | });
  381 | 
```