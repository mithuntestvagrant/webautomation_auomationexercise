
import { Page } from '@playwright/test';

export class CheckoutPage {

    constructor(private page: Page) {}

    // Register / Login
    get registerLogin() {
        return this.page.getByRole('link', {
            name: 'Register / Login'
        });
    }

    // Order comment
    get orderComment() {
        return this.page.locator('textarea[name="message"]');
    }

    // Place Order
    get placeOrder() {
        return this.page.locator('a[href="/payment"]');
    }
}
