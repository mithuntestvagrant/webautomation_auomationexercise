
import { Page } from '@playwright/test';

export class ProductQuantityPage {

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    get viewProduct() {
        return this.page
            .locator('a', { hasText: 'View Product' })
            .first();
    }

    get productQuantity() {
        return this.page.locator('input#quantity');
    }

    get addToCart() {
        return this.page.locator(
            'button.btn.cart:has-text("Add to cart")'
        );
    }

    get viewCart() {
        return this.page.locator(
            'a',
            { hasText: 'View Cart' }
        );
    }
}
