import { Page } from "@playwright/test";

export class SearchPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get searchInput() {
    return this.page.locator('input[name="search"]');
  }

  get searchButton() {
    return this.page.locator('#submit_search');
  }

 

}