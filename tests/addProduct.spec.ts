
import { test, expect } from '@playwright/test';

import { ValidationPage } from '../pages/validationPage';
import { CartPage } from '../pages/cartPage';
import { ProductPage } from '../pages/productPage';
import { AddProductPage } from '../pages/addProductPage';

import { Helper } from '../utils/helper';


test('Add Product', async ({ page }) => {

    // Page Objects
    const addProductPage = new AddProductPage(page);
    const validationPage = new ValidationPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Products
    await helper.click(
        productPage.products
    );


    // First Product
    await helper.hover(
        addProductPage.firstProduct
    );

    await helper.click(
        addProductPage.firstProduct
    );


    // Continue Shopping
    await helper.click(
        addProductPage.continueShopping
    );


    // Second Product
    await helper.hover(
        addProductPage.secondProduct
    );

    await helper.click(
        addProductPage.secondProduct
    );


    // View Cart
    await helper.click(
        addProductPage.viewCart
    );


    // Verify First Product
    await expect(
        validationPage.verifyfirstProduct
    ).toHaveCount(1);


    // Verify Second Product
    await expect(
        validationPage.verifysecondProduct
    ).toHaveCount(1);
});
