
import { Page } from '@playwright/test';

export class PaymentPage {

    constructor(private page: Page) {}

    // Name on Card
    get nameOnCard() {
        return this.page.locator('input[name="name_on_card"]');
    }

    // Card Number
    get cardNumber() {
        return this.page.locator('input[name="card_number"]');
    }

    // CVC
    get cvc() {
        return this.page.locator('input[name="cvc"]');
    }

    // Expiration Month
    get expirationMonth() {
        return this.page.locator('input[name="expiry_month"]');
    }

    // Expiration Year
    get expirationYear() {
        return this.page.locator('input[name="expiry_year"]');
    }

    // Pay and Confirm Order
    get payAndConfirmOrder() {
        return this.page.locator('#submit');
    }
}
