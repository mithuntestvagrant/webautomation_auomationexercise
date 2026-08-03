import{Page} from '@playwright/test';

export class AccountPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  get deleteAccount() {
    return this.page.locator('a', { hasText: 'Delete Account' });
  }
  get continueButton() {
    return this.page.locator('a', { hasText: 'Continue' });
  } 
get loggedInAs() {
    return this.page.locator('a', { hasText: 'Logged in as' });
  }
  get accountDeleted() {
    return this.page.locator('text=Account Deleted!');
  } 
  

}