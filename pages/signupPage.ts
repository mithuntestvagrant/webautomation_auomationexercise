import {  Page, Locator } from '@playwright/test';

export class SignupPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get signup() {
    return this.page.locator('a', { hasText: 'Signup / Login' });
  }
   
  get name() {
    return this.page.locator('input[name="name"]');
  }
  get email() {
    return this.page.locator('input[data-qa="signup-email"]');
  }
  get signupbutton() {
    return this.page.locator('button', { hasText: 'Signup' });
  }

  
}
