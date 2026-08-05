
import { test, expect } from '@playwright/test';

import { ContactUsPage } from '../pages/contactUs';
import { ValidationPage } from '../pages/validationPage';
import { Helper } from '../utils/helper';

import { contactUsData } from '../testData/contactData';


test('Contact Us', async ({ page }) => {

    // Page Objects
    const contactUsPage = new ContactUsPage(page);
    const validationPage = new ValidationPage(page);

    // Helper
    const helper = new Helper(page);

    // Open application
    await helper.openApplication();

    // Click Contact Us
    await helper.click(
        contactUsPage.contactUs
    );

    // Verify Contact Us page
    await expect(
        validationPage.getinTouch
    ).toBeVisible();

    // Enter Name
    await helper.fill(
        contactUsPage.name,
        contactUsData.name
    );

    // Enter Email
    await helper.fill(
        contactUsPage.email,
        contactUsData.email
    );

    // Enter Subject
    await helper.fill(
        contactUsPage.subject,
        contactUsData.subject
    );

    // Enter Message
    await helper.fill(
        contactUsPage.message,
        contactUsData.message
    );

    // Submit
    await helper.click(
        contactUsPage.submitButton
    );

    // Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();
});
