
import { test, expect } from '@playwright/test';

import { CartPage } from '../pages/cartPage';
import { ValidationPage } from '../pages/validationPage';
import { SubscriptionPage } from '../pages/subscriptionPage';

import { Helper } from '../utils/helper';


test('Cart', async ({ page }) => {

    // Page Objects
    const cartPage = new CartPage(page);
    const validationPage = new ValidationPage(page);
    const subscriptionPage = new SubscriptionPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Cart
    await helper.click(
        cartPage.cart
    );


    // Verify Subscription
    await expect(
        validationPage.subscription
    ).toBeVisible();


    // Enter Email
    await helper.fill(
        subscriptionPage.subscriptionEmail,
        'mithun@example1919.com'
    );


    // Click Subscribe
    await helper.click(
        subscriptionPage.subscribeButton
    );


    // Verify Success Message
    await expect(
        validationPage.successMessageSubscription
    ).toBeVisible();

});
