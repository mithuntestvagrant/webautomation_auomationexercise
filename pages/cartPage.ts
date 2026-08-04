import { Page } from "@playwright/test";    

export class CartPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get cart() {
        return this.page.locator('a[href="/view_cart"]', { hasText: 'Cart' }).first();
    }
}