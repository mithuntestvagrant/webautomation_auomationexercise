import{Page} from '@playwright/test';

export class AddProductPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    get firstProduct() {
        return this.page.locator("(//a[text()='Add to cart'])[1]");    

    }
    get continueShopping() {
        return this.page.locator('button', { hasText: 'Continue Shopping' });
    }

    get secondProduct() {
        return this.page.locator("(//a[text()='Add to cart'])[3]");    
    }
    get viewCart() {
        return this.page.locator('a', { hasText: 'View Cart' });
    }
}