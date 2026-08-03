import{Page,expect} from '@playwright/test';
export class LoginPage{
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    get login() {
        return this.page.locator('a', { hasText: 'Signup / Login' });
    }
    get email() {
        return this.page.locator('input[data-qa="login-email"]');
    }
    get password() {
        return this.page.locator('input[data-qa="login-password"]');
    }
    get loginButton() {
        return this.page.locator('button', { hasText: 'Login' });
    }   
    get logout() {
        return this.page.locator('a', { hasText: 'Logout' });
    }
    
   


}