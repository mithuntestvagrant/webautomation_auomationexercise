
import { test, expect } from '@playwright/test';

import { ValidationPage } from '../pages/validationPage';
import { CartPage } from '../pages/cartPage';
import { ProductPage } from '../pages/productPage';
import { AddProductPage } from '../pages/addProductPage';

import commonMethods from '../utils/helper';


test('Add Product', async ({ page }) => {

    // Page Objects
    const addProductPage = new AddProductPage(page);
    const validationPage = new ValidationPage(page);
    const productPage = new ProductPage(page);


    // Open application
    
  await page.goto('/');

    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Products
    await commonMethods.click(
        productPage.products
    );


    // First Product
    await commonMethods.hover(
        addProductPage.firstProduct
    );

    await commonMethods.click(
        addProductPage.firstProduct
    );


    // Continue Shopping
    await commonMethods.click(
        addProductPage.continueShopping
    );


    // Second Product
    await commonMethods.hover(
        addProductPage.secondProduct
    );

    await commonMethods.click(
        addProductPage.secondProduct
    );


    // View Cart
    await commonMethods.click(
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
