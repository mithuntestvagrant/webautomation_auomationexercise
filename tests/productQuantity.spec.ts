
import { test } from '@playwright/test';

import { ProductQuantityPage } from '../pages/productQuantityPage';
import { ProductPage } from '../pages/productPage';

import { Helper } from '../utils/helper';


test('Product Quantity', async ({ page }) => {

    // Page Objects
    const productQuantityPage = new ProductQuantityPage(page);
    const productPage = new ProductPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Click Products
    await helper.click(
        productPage.products
    );


    // Click View Product
    await helper.click(
        productQuantityPage.viewProduct
    );


    // Enter Quantity
    await helper.fill(
        productQuantityPage.productQuantity,
        '4'
    );


    // Add Product to Cart
    await helper.click(
        productQuantityPage.addToCart
    );


    // View Cart
    await helper.click(
        productQuantityPage.viewCart
    );
});