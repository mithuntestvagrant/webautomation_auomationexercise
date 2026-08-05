
import { test, expect } from '@playwright/test';

import { SubscriptionPage } from '../pages/subscriptionPage';
import { ValidationPage } from '../pages/validationPage';

import { Helper } from '../utils/helper';

import { subscriptionData } from '../testData/subscriptionData';


test('Subscription', async ({ page }) => {

    // Page Objects
    const subscriptionPage = new SubscriptionPage(page);
    const validationPage = new ValidationPage(page);

    // Helper
    const helper = new Helper(page);


    // Open application
    await helper.openApplication();


    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();


    // Scroll to Subscription Email
    await helper.scrollIntoView(
        subscriptionPage.subscriptionEmail
    );


    // Enter Email
    await helper.fill(
        subscriptionPage.subscriptionEmail,
        subscriptionData.email
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
