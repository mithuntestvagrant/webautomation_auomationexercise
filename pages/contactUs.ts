import{Page} from '@playwright/test';

export class ContactUsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get contactUs() {
        return this.page.locator('a[href="/contact_us"], a:has-text("Contact Us")');
  }
    get name() {   
        return this.page.locator('input[name="name"]'); 

    }

    get email() {
        return this.page.locator('input[name="email"]');
    }
    get subject() {
        return this.page.locator('input[name="subject"]');
    }
    get message() {
        return this.page.locator('textarea[name="message"]');
    }
    get uploadFile() {
        return this.page.locator('input[name="upload_file"]');
    }
    get submitButton() {
        return this.page.locator('input[name="submit"]');
    }
    get homeButton() {
        return this.page.locator('a', { hasText: 'Home' });
    }

    
   
}

