import{Page} from "@playwright/test";
export class ProductPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    get products() {
        return this.page.locator('a', { hasText: 'Products' });
    }
     get viewProduct() {
        return this.page.locator('a', { hasText: 'View Product' }).first();
    }
    get removeProduct(){
        return this.page.locator("//a[@class='cart_quantity_delete']")
    }
}
