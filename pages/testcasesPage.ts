import { Page } from '@playwright/test';

export class TestCasesPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get testCasesLink() {
    return this.page.locator('a[href="/test_cases"]').first();
  }

 
}
