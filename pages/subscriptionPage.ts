import { Page } from "@playwright/test";

export class SubscriptionPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

   get subscriptionEmail() {
        return this.page.locator('input#susbscribe_email');
    }

    get subscribeButton() {
        return this.page.locator('button#subscribe');
    }   

}