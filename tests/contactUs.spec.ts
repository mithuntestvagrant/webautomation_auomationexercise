import{test,expect} from '@playwright/test';
import { ContactUsPage } from '../pages/contactUs';
import { ValidationPage } from '../pages/validationPage';

test('Contact Us', async ({ page }) => {
    const contactUsData={
        name: 'Mithun',
        email: 'mithun@example.com',
        subject: 'Test Subject',
        message: 'Test Message'
    };

    const contactUsPage = new ContactUsPage(page);
    const validationPage = new ValidationPage(page);
    await page.goto('http://automationexercise.com');

    await contactUsPage.contactUs.click();

    await expect(validationPage.getinTouch).toBeVisible();
    await contactUsPage.name.fill(contactUsData.name);
    await contactUsPage.email.fill(contactUsData.email);
    await contactUsPage.subject.fill(contactUsData.subject);
    await contactUsPage.message.fill(contactUsData.message);
    await contactUsPage.submitButton.click();

    //await expect(validationPage.successMessage).toBeVisible();

    await expect(validationPage.home).toBeVisible();
});

