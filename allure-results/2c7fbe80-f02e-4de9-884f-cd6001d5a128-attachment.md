# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchProduct.spec.ts >> Search Product
- Location: tests/searchProduct.spec.ts:8:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2').filter({ hasText: 'Searched Products' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h2').filter({ hasText: 'Searched Products' })

```

```yaml
- heading "This website is under heavy load (queue full)" [level=2]
- paragraph: We're sorry, too many people are accessing this website at the same time. We're working on this problem. Please try again later.
```

# Test source

```ts
  1  | import{test,expect} from '@playwright/test';
  2  | import { SearchPage } from '../pages/searchPage';       
  3  | 
  4  | import { ValidationPage } from '../pages/validationPage';
  5  | import { ProductPage } from '../pages/productPage';
  6  | 
  7  | 
  8  | test('Search Product', async ({ page }) => {
  9  | 
  10 |     const searchPage = new SearchPage(page);
  11 |     const validationPage = new ValidationPage(page);
  12 |     const productpage = new ProductPage(page);
  13 | 
  14 |     await page.goto('http://automationexercise.com');
  15 | 
  16 |     await expect(validationPage.home).toBeVisible();
  17 | 
  18 |     await productpage.products.click();
  19 | 
  20 |     await searchPage.searchInput.fill('Tshirt');
  21 | 
  22 | 
  23 |     await searchPage.searchButton.click();
  24 | 
> 25 |     await expect(validationPage.searchProduct).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible() failed
  26 | 
  27 | })
```