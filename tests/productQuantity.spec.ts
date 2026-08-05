
import { test } from '@playwright/test';

import { ProductQuantityPage } from '../pages/productQuantityPage';
import { ProductPage } from '../pages/productPage';

import commonMethods from '../utils/helper';



test('Product Quantity', async ({ page }) => {

    // Page Objects
    const productQuantityPage = new ProductQuantityPage(page);
    const productPage = new ProductPage(page);



    // Open application
    await page.goto('/');

    // Click Products
    await commonMethods.click(
        productPage.products
    );


    // Click View Product
    await commonMethods.click(
        productQuantityPage.viewProduct
    );


    // Enter Quantity
    await commonMethods.fill(
        productQuantityPage.productQuantity,
        '4'
    );


    // Add Product to Cart
    await commonMethods.click(
        productQuantityPage.addToCart
    );


    // View Cart
    await commonMethods.click(
        productQuantityPage.viewCart
    );
});