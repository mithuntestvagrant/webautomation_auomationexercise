import{test,expect} from '@playwright/test';
import{ProductPage} from '../pages/productPage';    
import { ValidationPage } from '../pages/validationPage';

test('Product', async ({ page }) => {


    const productPage = new ProductPage(page);
    const validationPage = new ValidationPage(page);

    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    await productPage.products.click();

    await expect(validationPage.allProducts).toBeVisible();

    await productPage.viewProduct.click();

    await expect(page).toHaveURL(/product_details/);
    await expect(page).toHaveTitle(/Product Details/);
});
