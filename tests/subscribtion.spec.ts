import{test,expect} from '@playwright/test';
import{SubscriptionPage} from '../pages/subscriptionPage';    
import { ValidationPage } from '../pages/validationPage';

test('Subscription', async ({ page }) => {

    const subscriptionPage = new SubscriptionPage(page);
    const validationPage = new ValidationPage(page);

    await page.goto('http://automationexercise.com');

    await expect(validationPage.home).toBeVisible();

    await subscriptionPage.subscriptionEmail.scrollIntoViewIfNeeded();

    await subscriptionPage.subscriptionEmail.fill('mithun@example1919.com');

    await subscriptionPage.subscribeButton.click();

    await expect(validationPage.successMessageSubscription).toBeVisible();
}); 
