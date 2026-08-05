
import { test, expect } from '@playwright/test';

import { SearchPage } from '../pages/searchPage';
import { ValidationPage } from '../pages/validationPage';
import { ProductPage } from '../pages/productPage';

import { Helper } from '../utils/helper';

import { searchData } from '../testData/searchData';


test('Search Product', async ({ page }) => {

    // Page Objects
    const searchPage = new SearchPage(page);
    const validationPage = new ValidationPage(page);
    const productPage = new ProductPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Products
    await helper.click(
        productPage.products
    );


    // Enter Product Name
    await helper.fill(
        searchPage.searchInput,
        searchData.productName
    );


    // Click Search
    await helper.click(
        searchPage.searchButton
    );


    // Verify Search Result
    await expect(
        validationPage.searchProduct
    ).toBeVisible();

});
