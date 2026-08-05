
import { Page, Locator } from '@playwright/test';

class Helper {

    // // Open application
    // async openApplication() {
    //     await this.page.goto('http://automationexercise.com');
    // }

    // Click
    async click(element: Locator) {
        await element.click();
    }

    // Click first element
    async clickFirst(element: Locator) {
        await element.first().click();
    }

    // Hover
    async hover(element: Locator) {
        await element.hover();
    }

    // Fill
    async fill(element: Locator, value: string) {
        await element.fill(value);
    }

    // Check checkbox
    async check(element: Locator) {
        await element.check();
    }

    // Select dropdown
    async selectOption(element: Locator, value: string) {
        await element.selectOption(value);
    }

    // Scroll element into view
    async scrollIntoView(element: Locator) {
        await element.scrollIntoViewIfNeeded();
    }

    // Wait for element
    async waitForElement(element: Locator) {
        await element.waitFor({
            state: 'visible'
        });
    }
}

export default new Helper();