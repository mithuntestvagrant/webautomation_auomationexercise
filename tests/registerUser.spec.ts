import {test,expect} from '@playwright/test';
test('Register user', async({page})=>{

await page.goto('http://automationexercise.com')

const home = page.locator('a', { hasText: 'Home' });

await expect(home).toBeVisible();

const signup = page.locator('a', { hasText: 'Signup / Login' });

await signup.click();

const newuser = page.locator('h2', { hasText: 'New User Signup!' });
await newuser.waitFor({ state: 'visible', timeout: 10000 });
await expect(newuser).toBeVisible();
const name = page.locator('input[name="name"]');
await name.fill('Mithun');
const email = page.locator('input[data-qa="signup-email"]');
await email.fill('mithun@example1111121622.com');

const signupbutton = page.locator('button', { hasText: 'Signup' });
await signupbutton.click();

const accountinfo = page.locator('text=Enter Account Information');
await accountinfo.waitFor({ state: 'visible', timeout: 10000 });
await expect(accountinfo).toBeVisible();
const title = page.locator('input[value="Mr"]');
await title.check();

const password = page.locator('input[name="password"]');
await password.fill('MyPassword123');
const day = page.locator('#days');
await day.selectOption('10');
const month = page.locator('#months');
await month.selectOption('5');

const year = page.locator('#years');
await year.selectOption('1994');
const newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
await newsletter.check();
const offers = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
await offers.check();
const firstName = page.locator('#first_name');
await firstName.fill('Mithun');
const lastName = page.locator('#last_name');
await lastName.fill('Mishra');
const company = page.locator('#company');
await company.fill('ABC Company');
const address1 = page.locator('#address1');
await address1.fill('123 Main Street');
const address2 = page.locator('#address2');
await address2.fill('Apt 4B');
const country = page.locator('#country');
await country.selectOption('Canada');
const state = page.locator('#state');
await state.fill('Ontario');
const city = page.locator('#city');
await city.fill('Toronto');
const zipcode = page.locator('#zipcode');
await zipcode.fill('M5V 2H1');
const mobileNumber = page.locator('#mobile_number');
await mobileNumber.fill('+1 416-123-4567');
const createAccountButton = page.locator('button', { hasText: 'Create Account' });
await createAccountButton.click();
    const accountCreatedMessage = page.locator('text=Account Created!');
    await accountCreatedMessage.waitFor({ state: 'visible', timeout: 10000 });
    await expect(accountCreatedMessage).toBeVisible();

    const continueButton = page.locator('a', { hasText: 'Continue' });
    await continueButton.first().waitFor({ state: 'visible', timeout: 10000 });
    await continueButton.first().click();

    const loggedInAs = page.locator('a', { hasText: 'Logged in as' });
    await loggedInAs.waitFor({ state: 'visible', timeout: 10000 });
    await expect(loggedInAs).toBeVisible();
    const deleteAccount = page.locator('a', { hasText: 'Delete Account' });

    await deleteAccount.click();
    const accountDeleted = page.locator('text=Account Deleted!');
    await accountDeleted.waitFor({ state: 'visible', timeout: 10000 });
    await expect(accountDeleted).toBeVisible();
    const continueButton3 = page.locator('a', { hasText: 'Continue' });
    await continueButton3.first().waitFor({ state: 'visible', timeout: 10000 });
    await continueButton3.first().click();
    




})

