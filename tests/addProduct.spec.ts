import{test,expect} from '@playwright/test';

import { ValidationPage } from '../pages/validationPage';
import { CartPage } from '../pages/cartPage';
import { ProductPage } from '../pages/productPage';
import { AddProductPage } from '../pages/addProductPage';   



test('Add Product', async ({ page }) => {

    const addProductPage = new AddProductPage(page);
    const validationPage = new ValidationPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);

    await page.goto('http://automationexercise.com');   

    await expect(validationPage.home).toBeVisible();

    await productPage.products.click();

    await addProductPage.firstProduct.hover();
    await addProductPage.firstProduct.click();

    await addProductPage.continueShopping.click();
    
    await addProductPage.secondProduct.hover();
    await addProductPage.secondProduct.click();
     await addProductPage.viewCart.click();

    
  expect(await validationPage.verifyfirstProduct.count()).toBe(1);
expect(await validationPage.verifysecondProduct.count()).toBe(1);
})