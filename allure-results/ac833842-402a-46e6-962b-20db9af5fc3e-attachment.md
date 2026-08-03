# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginUser.spec.ts >> Login User
- Location: tests/loginUser.spec.ts:2:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: 'Email Address' }) resolved to 3 elements:
    1) <input value="" required="" type="email" name="email" data-qa="login-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Login' }).getByPlaceholder('Email Address')
    2) <input value="" required="" type="email" name="email" data-qa="signup-email" placeholder="Email Address"/> aka locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address')
    3) <input required="" type="email" id="susbscribe_email" placeholder="Your email address"/> aka getByRole('textbox', { name: 'Your email address' })

Call log:
  - waiting for getByRole('textbox', { name: 'Email Address' })

```

# Page snapshot

```yaml
- generic [active] [ref=f15e1]:
  - banner [ref=f15e2]:
    - generic [ref=f15e5]:
      - link [ref=f15e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f15e9]
      - list [ref=f15e12]:
        - listitem [ref=f15e13]:
          - link " Home" [ref=f15e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f15e15]: 
            - text: Home
        - listitem [ref=f15e16]:
          - link " Products" [ref=f15e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f15e18]: 
            - text: Products
        - listitem [ref=f15e19]:
          - link " Cart" [ref=f15e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f15e21]: 
            - text: Cart
        - listitem [ref=f15e22]:
          - link " Signup / Login" [ref=f15e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f15e24]: 
            - text: Signup / Login
        - listitem [ref=f15e25]:
          - link " Test Cases" [ref=f15e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f15e27]: 
            - text: Test Cases
        - listitem [ref=f15e28]:
          - link " API Testing" [ref=f15e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f15e30]: 
            - text: API Testing
        - listitem [ref=f15e31]:
          - link " Video Tutorials" [ref=f15e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f15e33]: 
            - text: Video Tutorials
        - listitem [ref=f15e34]:
          - link " Contact us" [ref=f15e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f15e36]: 
            - text: Contact us
  - generic [ref=f15e39]:
    - generic [ref=f15e41]:
      - heading "Login to your account" [level=2] [ref=f15e42]
      - generic [ref=f15e43]:
        - textbox "Email Address" [ref=f15e44]
        - textbox "Password" [ref=f15e45]
        - button "Login" [ref=f15e46] [cursor=pointer]
    - heading "OR" [level=2] [ref=f15e48]
    - generic [ref=f15e50]:
      - heading "New User Signup!" [level=2] [ref=f15e51]
      - generic [ref=f15e52]:
        - textbox "Name" [ref=f15e53]
        - textbox "Email Address" [ref=f15e54]
        - button "Signup" [ref=f15e55] [cursor=pointer]
  - contentinfo [ref=f15e56]:
    - generic [ref=f15e61]:
      - heading "Subscription" [level=2] [ref=f15e62]
      - generic [ref=f15e63]:
        - textbox "Your email address" [ref=f15e64]
        - button "" [ref=f15e65] [cursor=pointer]
        - paragraph [ref=f15e67]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f15e71]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import { expect ,test} from "@playwright/test";
  2  | test("Login User", async ({ page }) => {
  3  | 
  4  |     await page.goto("http://automationexercise.com")
  5  |     const signup = page.locator('a', { hasText: 'Signup / Login' });
  6  | 
  7  |      await signup.click();
  8  |       
  9  |      const loginAccount=page.locator('h2', { hasText: 'Login to your account' });
  10 | 
  11 |      await expect(loginAccount).toBeVisible();
  12 |      
  13 |      const email = page.getByRole('textbox', { name: 'Email Address' });    
> 14 |      await email.fill('mithun@example1919.com');
     |                  ^ Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: 'Email Address' }) resolved to 3 elements:
  15 |      const password = page.getByRole('textbox', { name: 'Password' });
  16 |      await password.fill('MyPassword123');
  17 |      const loginbutton = page.locator('button', { hasText: 'Login' });
  18 |      await loginbutton.click();
  19 |      
  20 | 
  21 | 
  22 | 
  23 | })
  24 | 
  25 | 
```