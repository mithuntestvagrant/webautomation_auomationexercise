import{test,expect} from '@playwright/test';
import { SearchPage } from '../pages/searchPage';       

import { ValidationPage } from '../pages/validationPage';
import { ProductPage } from '../pages/productPage';


test('Search Product', async ({ page }) => {

    const searchPage = new SearchPage(page);
    const validationPage = new ValidationPage(page);
    const productpage = new ProductPage(page);

    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    await productpage.products.click();

    await searchPage.searchInput.fill('Tshirt');


    await searchPage.searchButton.click();

    await expect(validationPage.searchProduct).toBeVisible();

})