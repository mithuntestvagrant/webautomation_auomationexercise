
import { test, expect } from '@playwright/test';

import { CartPage } from '../pages/cartPage';
import { ValidationPage } from '../pages/validationPage';
import { SubscriptionPage } from '../pages/subscriptionPage';

import commonMethods from '../utils/helper';



test('Cart', async ({ page }) => {

    // Page Objects
    const cartPage = new CartPage(page);
    const validationPage = new ValidationPage(page);
    const subscriptionPage = new SubscriptionPage(page);

   

    // Open application
    await page.goto('/');

    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Click Cart
    await commonMethods.click(
        cartPage.cart
    );


    // Verify Subscription
    await expect(
        validationPage.subscription
    ).toBeVisible();


    // Enter Email
    await commonMethods.fill(
        subscriptionPage.subscriptionEmail,
        'mithun@example1919.com'
    );


    // Click Subscribe
    await commonMethods.click(
        subscriptionPage.subscribeButton
    );


    // Verify Success Message
    await expect(
        validationPage.successMessageSubscription
    ).toBeVisible();

});
