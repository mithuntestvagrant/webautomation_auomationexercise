import { test, expect } from '@playwright/test';

import { ValidationPage } from '../pages/validationPage';
import { CartPage } from '../pages/cartPage';
import { ProductPage } from '../pages/productPage';
import { AddProductPage } from '../pages/addProductPage';

import commonMethods from '../utils/helper';

test('Remove Product From Cart', async ({ page }) => {

    // Page Objects
    const validationPage = new ValidationPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);
    const addProductPage = new AddProductPage(page);

    // 1. Launch browser
    // 2. Navigate to URL
    await page.goto('/');

    // 3. Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();

    // 4. Click Products
    await commonMethods.click(
        productPage.products
    );

    // Hover on first product
    await commonMethods.hover(
        addProductPage.firstProduct
    );

    // Click Add to Cart
    await commonMethods.click(
        addProductPage.firstProduct
    );

    // Continue Shopping
    await commonMethods.click(
        addProductPage.continueShopping
    );

    // 5. Click Cart
    await commonMethods.click(
        cartPage.cart
    );

    // 7. Remove Product
    await commonMethods.click(
        productPage.removeProduct
    );

});