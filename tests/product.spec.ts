
import { test, expect } from '@playwright/test';

import { ProductPage } from '../pages/productPage';
import { ValidationPage } from '../pages/validationPage';

import commonMethods from '../utils/helper';



test('Product', async ({ page }) => {

    // Page Objects
    const productPage = new ProductPage(page);
    const validationPage = new ValidationPage(page);

    

    // Open application
    await page.goto('/');


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Products
    await commonMethods.click(
        productPage.products
    );


    // Verify All Products
    await expect(
        validationPage.allProducts
    ).toBeVisible();


    // Click View Product
    await commonMethods.click(
        productPage.viewProduct
    );


    // Verify Product Details URL
    await expect(
        page
    ).toHaveURL(/product_details/);


    // Verify Product Details Title
    await expect(
        page
    ).toHaveTitle(/Product Details/);

});
