import { Page } from "@playwright/test";

export class HomePage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  get title(){
    return this.page.locator('input[value="Mr"]')
  }
  get password(){
    return this.page.locator('input[name="password"]')
  }
  get days(){
    return this.page.locator('#days')   
  }
    get months(){   
        return this.page.locator('#months')
    }
    get years(){
        return this.page.locator('#years')
    }
    get newsletter(){
        return this.page.getByRole('checkbox', { name: 'Sign up for our newsletter!' })
    }
    get offers(){
        return this.page.getByRole('checkbox', { name: 'Receive special offers from our partners!' })
    }
    get firstName(){
        return this.page.locator('#first_name')
    }
    get lastName(){
        return this.page.locator('#last_name')
    }
    get company(){
        return this.page.locator('#company')
    }
    get address1(){
        return this.page.locator('#address1')
    }
    get address2(){
        return this.page.locator('#address2')
    }
    get country(){
        return this.page.locator('#country')
    }
    get state(){
        return this.page.locator('#state')
    }
    get city(){
        return this.page.locator('#city')
    }
    get zipcode(){
        return this.page.locator('#zipcode')
    }
    get mobileNumber(){
        return this.page.locator('#mobile_number')
    }
    get createAccountButton(){
        return this.page.locator('button', { hasText: 'Create Account' })
    }
     get continueButton(){
        return this.page.locator('a', { hasText: 'Continue' })
    }
    

}
