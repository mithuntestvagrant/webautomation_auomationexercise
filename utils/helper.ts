
import { Locator } from '@playwright/test';

class Helper {

    // Open application
    // async openApplication() {
    //     await this.page.goto('http://automationexercise.com');
    // }

    // Click
    async click(element: Locator) {
        await element.click();
    }

    // Click first matching element
    async clickFirst(element: Locator) {
        await element.first().click();
    }

    // Hover
    async hover(element: Locator) {
        await element.hover();
    }

    // Fill input field
    async fill(element: Locator, value: string) {
        await element.fill(value);
    }

    // Check checkbox
    async check(element: Locator) {
        await element.check();
    }

    // Select dropdown option
    async selectOption(element: Locator, value: string) {
        await element.selectOption(value);
    }

    // Scroll element into view
    async scrollIntoView(element: Locator) {
        await element.scrollIntoViewIfNeeded();
    }

    // Wait for element to be visible
    async waitForElement(
        element: Locator,
        timeout: number = 10000
    ) {
        await element.waitFor({
            state: 'visible',
            timeout: timeout
        });
    }
}

export default new Helper();