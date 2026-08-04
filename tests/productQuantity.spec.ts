import{test,expect} from '@playwright/test';
import { ProductQuantityPage } from '../pages/productQuantityPage';  
import { ValidationPage } from '../pages/validationPage';
import { CartPage } from '../pages/cartPage';
import { ProductPage } from '../pages/productPage';

test('Product Quantity', async ({ page }) => {

    const productQuantityPage = new ProductQuantityPage(page);
    const validationPage = new ValidationPage(page);
    const cartPage = new CartPage(page);
    const productPage = new ProductPage(page);
     
    await page.goto('http://automationexercise.com');

   await productPage.products.click();

    await productPage.viewProduct.click();

   await productQuantityPage.productQuantity.fill('4');

   // await productQuantityPage.productQuantity.press('keyup');
   //await waitforTimeout(1000);
   // await productQuantityPage.productQuantity.press('keyup');
   //await waitforTimeout(1000);
   // await productQuantityPage.productQuantity.press('keyup');
   //await waitforTimeout(1000);

    await page.locator('button.btn.cart:has-text("Add to cart")').click();
    await productQuantityPage.viewCart.click();
   

})
