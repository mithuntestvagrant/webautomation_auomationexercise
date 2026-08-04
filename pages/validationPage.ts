import{Page,expect} from '@playwright/test';

export class ValidationPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get home(){
    return this.page.locator('a', { hasText: 'Home' });
  }
  
  get newUserSignup() {
    return this.page.locator('h2', { hasText: 'New User Signup!' });
  }
  get enterAccountInformation() {
    return this.page.locator('b', { hasText: 'Enter Account Information' });
  }
    get accountCreated() {
        return this.page.locator('h2', { hasText: 'Account Created!' });
    }

    get loggedInAs() {
        return this.page.locator('a', { hasText: 'Logged in as' });
    }

   

    get accountDeleted() {
        return this.page.locator('h2', { hasText: 'Account Deleted!' });
    }

     get incorrectEmailPassword() {
        return this.page.locator('p', { hasText: 'Your email or password is incorrect!' });
    }   

    get emailAlreadyExist() {
        return this.page.locator('p', { hasText: 'Email Address already exist!' });
    }   

    get getinTouch() {
        return this.page.locator('h2', { hasText: 'Get In Touch' });
    }   
     get successMessage() {
        return this.page.locator('div[class="status alert alert-success"]');
    }
   
    get testCases() {
        return this.page.locator('h2', { hasText: 'Test Cases' });
    }

    get allProducts() {
        return this.page.locator('h2', { hasText: 'All Products' });
    }
    get productDetails() {
        return this.page.locator('h2', { hasText: 'Product Details' });
    }

    get searchProduct() {
        return this.page.locator('h2', { hasText: 'Searched Products' });
    }

    get subscription() {
        return this.page.locator('h2', { hasText: 'Subscription' });
    }   
     get successMessageSubscription() {
        return this.page.locator('div[class="alert-success alert"]');
    }

    get verifyfirstProduct() {

        return this.page.locator("//a[@href='/product_details/1']");
    }

    get verifysecondProduct() {
        return this.page.locator("//a[@href='/product_details/2']");
    }   
    

    






}