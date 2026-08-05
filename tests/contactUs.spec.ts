
import { test, expect } from '@playwright/test';

import { ContactUsPage } from '../pages/contactUs';
import { ValidationPage } from '../pages/validationPage';
import commonMethods from '../utils/helper';


import { contactUsData } from '../testData/contactData';


test('Contact Us', async ({ page }) => {

    // Page Objects
    const contactUsPage = new ContactUsPage(page);
    const validationPage = new ValidationPage(page);

   
    // Open application
    await page.goto('/');

    // Click Contact Us
    await commonMethods.click(
        contactUsPage.contactUs
    );

    // Verify Contact Us page
    await expect(
        validationPage.getinTouch
    ).toBeVisible();

    // Enter Name
    await commonMethods.fill(
        contactUsPage.name,
        contactUsData.name
    );

    // Enter Email
    await commonMethods.fill(
        contactUsPage.email,
        contactUsData.email
    );

    // Enter Subject
    await commonMethods.fill(
        contactUsPage.subject,
        contactUsData.subject
    );

    // Enter Message
    await commonMethods.fill(
        contactUsPage.message,
        contactUsData.message
    );

    // Submit
    await commonMethods.click(
        contactUsPage.submitButton
    );

    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();
});
