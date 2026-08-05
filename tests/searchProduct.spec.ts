
import { test, expect } from '@playwright/test';

import { SearchPage } from '../pages/searchPage';
import { ValidationPage } from '../pages/validationPage';
import { ProductPage } from '../pages/productPage';

import commonMethods from '../utils/helper';

import { searchData } from '../testData/searchData';


test('Search Product', async ({ page }) => {

    // Page Objects
    const searchPage = new SearchPage(page);
    const validationPage = new ValidationPage(page);
    const productPage = new ProductPage(page);

    


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


    // Enter Product Name
    await commonMethods.fill(
        searchPage.searchInput,
        searchData.productName
    );


    // Click Search
    await commonMethods.click(
        searchPage.searchButton
    );


    // Verify Search Result
    await expect(
        validationPage.searchProduct
    ).toBeVisible();

});
