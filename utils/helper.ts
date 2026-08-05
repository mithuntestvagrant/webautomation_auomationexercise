
import { Page } from '@playwright/test';

export class Helper {

    constructor(private page: Page) {}

    async openApplication() {
        await this.page.goto('http://automationexercise.com');
    }
}
