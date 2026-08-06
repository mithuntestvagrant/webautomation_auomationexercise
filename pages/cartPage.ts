
import { Page } from "@playwright/test";

export class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    // Cart
    get cart() {
        return this.page.locator(
            'a[href="/view_cart"]',
            { hasText: 'Cart' }
        ).first();
    }

    // Proceed To Checkout
    get proceedToCheckout() {
        return this.page.locator(
            'a',
            { hasText: 'Proceed To Checkout' }
        ).first();
    }
}
