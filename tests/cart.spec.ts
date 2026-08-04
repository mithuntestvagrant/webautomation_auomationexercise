import{test,expect} from '@playwright/test';
import{CartPage} from '../pages/cartPage';  
import { ValidationPage } from '../pages/validationPage';
import { SubscriptionPage } from '../pages/subscriptionPage';



test('Cart', async ({ page }) => {

    const cartPage = new CartPage(page);
    const validationPage = new ValidationPage(page);
    const subscriptionPage = new SubscriptionPage(page);

    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    await cartPage.cart.click();

    await expect(validationPage.subscription).toBeVisible();

     await subscriptionPage.subscriptionEmail.fill('mithun@example1919.com');

    await subscriptionPage.subscribeButton.click();

    await expect(validationPage.successMessageSubscription).toBeVisible();
    

});
