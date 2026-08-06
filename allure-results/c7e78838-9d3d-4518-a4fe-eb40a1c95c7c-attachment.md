# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:20:5

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
- textbox "Email Address": mithun@example464.com
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
  - link "Software testing tutorials"
  - link "Automation testing courses"
  - link "Programming"
```

# Test source

```ts
  37  | 
  38  |     // Verify Home Page
  39  |     await expect(
  40  |         validationPage.home
  41  |     ).toBeVisible();
  42  | 
  43  | 
  44  |     // =========================
  45  |     // Add Products
  46  |     // =========================
  47  | 
  48  |     await commonMethods.click(
  49  |         productPage.products
  50  |     );
  51  | 
  52  |     await commonMethods.hover(
  53  |         addProductPage.firstProduct
  54  |     );
  55  | 
  56  |     await commonMethods.click(
  57  |         addProductPage.firstProduct
  58  |     );
  59  | 
  60  |     await commonMethods.click(
  61  |         addProductPage.continueShopping
  62  |     );
  63  | 
  64  |     await commonMethods.hover(
  65  |         addProductPage.secondProduct
  66  |     );
  67  | 
  68  |     await commonMethods.click(
  69  |         addProductPage.secondProduct
  70  |     );
  71  | 
  72  |     await commonMethods.click(
  73  |         addProductPage.viewCart
  74  |     );
  75  | 
  76  | 
  77  |     // =========================
  78  |     // Verify Cart
  79  |     // =========================
  80  | 
  81  |     await expect(
  82  |         validationPage.verifyfirstProduct
  83  |     ).toHaveCount(1);
  84  | 
  85  |     await expect(
  86  |         validationPage.verifysecondProduct
  87  |     ).toHaveCount(1);
  88  | 
  89  | 
  90  |     // =========================
  91  |     // Proceed To Checkout
  92  |     // =========================
  93  | 
  94  |     await commonMethods.click(
  95  |         cartPage.proceedToCheckout
  96  |     );
  97  | 
  98  | 
  99  |     // =========================
  100 |     // Register / Login
  101 |     // =========================
  102 | 
  103 |     await commonMethods.click(
  104 |         checkoutPage.registerLogin
  105 |     );
  106 | 
  107 | 
  108 |     // =========================
  109 |     // Signup
  110 |     // =========================
  111 | 
  112 |     await expect(
  113 |         validationPage.newUserSignup
  114 |     ).toBeVisible();
  115 | 
  116 |     await commonMethods.fill(
  117 |         signupPage.name,
  118 |         userData.name
  119 |     );
  120 | 
  121 |     await commonMethods.fill(
  122 |         signupPage.email,
  123 |         userData.email
  124 |     );
  125 | 
  126 |     await commonMethods.click(
  127 |         signupPage.signupbutton
  128 |     );
  129 | 
  130 | 
  131 |     // =========================
  132 |     // Account Information
  133 |     // =========================
  134 | 
  135 |     await expect(
  136 |         validationPage.enterAccountInformation
> 137 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  138 | 
  139 |     await commonMethods.check(
  140 |         homePage.title
  141 |     );
  142 | 
  143 |     await commonMethods.fill(
  144 |         homePage.password,
  145 |         userData.password
  146 |     );
  147 | 
  148 |     await commonMethods.selectOption(
  149 |         homePage.days,
  150 |         userData.day
  151 |     );
  152 | 
  153 |     await commonMethods.selectOption(
  154 |         homePage.months,
  155 |         userData.month
  156 |     );
  157 | 
  158 |     await commonMethods.selectOption(
  159 |         homePage.years,
  160 |         userData.year
  161 |     );
  162 | 
  163 |     await commonMethods.check(
  164 |         homePage.newsletter
  165 |     );
  166 | 
  167 |     await commonMethods.check(
  168 |         homePage.offers
  169 |     );
  170 | 
  171 | 
  172 |     // =========================
  173 |     // Address Information
  174 |     // =========================
  175 | 
  176 |     await commonMethods.fill(
  177 |         homePage.firstName,
  178 |         userData.firstName
  179 |     );
  180 | 
  181 |     await commonMethods.fill(
  182 |         homePage.lastName,
  183 |         userData.lastName
  184 |     );
  185 | 
  186 |     await commonMethods.fill(
  187 |         homePage.company,
  188 |         userData.company
  189 |     );
  190 | 
  191 |     await commonMethods.fill(
  192 |         homePage.address1,
  193 |         userData.address1
  194 |     );
  195 | 
  196 |     await commonMethods.fill(
  197 |         homePage.address2,
  198 |         userData.address2
  199 |     );
  200 | 
  201 |     await commonMethods.selectOption(
  202 |         homePage.country,
  203 |         userData.country
  204 |     );
  205 | 
  206 |     await commonMethods.fill(
  207 |         homePage.state,
  208 |         userData.state
  209 |     );
  210 | 
  211 |     await commonMethods.fill(
  212 |         homePage.city,
  213 |         userData.city
  214 |     );
  215 | 
  216 |     await commonMethods.fill(
  217 |         homePage.zipcode,
  218 |         userData.zipcode
  219 |     );
  220 | 
  221 |     await commonMethods.fill(
  222 |         homePage.mobileNumber,
  223 |         userData.mobileNumber
  224 |     );
  225 | 
  226 | 
  227 |     // =========================
  228 |     // Create Account
  229 |     // =========================
  230 | 
  231 |     await commonMethods.click(
  232 |         homePage.createAccountButton
  233 |     );
  234 | 
  235 | 
  236 |     // Verify Account Created
  237 |     await expect(
```