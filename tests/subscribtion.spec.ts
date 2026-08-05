
import { test, expect } from '@playwright/test';

import { SubscriptionPage } from '../pages/subscriptionPage';
import { ValidationPage } from '../pages/validationPage';

import commonMethods from '../utils/helper';

import { subscriptionData } from '../testData/subscriptionData';


test('Subscription', async ({ page }) => {

    // Page Objects
    const subscriptionPage = new SubscriptionPage(page);
    const validationPage = new ValidationPage(page);

    


    // Open application
    await page.goto('/');


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Scroll to Subscription Email
    await commonMethods.scrollIntoView(
        subscriptionPage.subscriptionEmail
    );


    // Enter Email
    await commonMethods.fill(
        subscriptionPage.subscriptionEmail,
        subscriptionData.email
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
