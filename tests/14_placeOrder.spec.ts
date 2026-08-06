import { test, expect } from '@playwright/test';

import { ValidationPage } from '../pages/validationPage';
import { ProductPage } from '../pages/productPage';
import { AddProductPage } from '../pages/addProductPage';
import { CartPage } from '../pages/cartPage';
import { CheckoutPage } from '../pages/checkoutPage';
import { SignupPage } from '../pages/signupPage';
import { HomePage } from '../pages/homePage';
import { PaymentPage } from '../pages/paymentPage';

import commonMethods from '../utils/helper';

import { userData } from '../testData/userData';
import { paymentData } from '../testData/paymentData';

test('Place Order - Register While Checkout', async ({ page }) => {

    // Page Objects
    const validationPage = new ValidationPage(page);
    const productPage = new ProductPage(page);
    const addProductPage = new AddProductPage(page);
    const cartPage = new CartPage(page);
    const checkoutPage = new CheckoutPage(page);
    const signupPage = new SignupPage(page);
    const homePage = new HomePage(page);
    const paymentPage = new PaymentPage(page);

    // 1. Launch Browser
    // 2. Navigate to URL
    await page.goto('/');

    // 3. Verify Home Page
    await expect(
        validationPage.home
    ).toBeVisible();

    // 4. Add Product To Cart
    await commonMethods.click(
        productPage.products
    );

    await commonMethods.hover(
        addProductPage.firstProduct
    );

    await commonMethods.click(
        addProductPage.firstProduct
    );

    // 5. Click Cart
    await commonMethods.click(
        addProductPage.viewCart
    );

    // 6. Verify Cart Page
    await expect(
        validationPage.verifyfirstProduct
    ).toHaveCount(1);

    // 7. Click Proceed To Checkout
    await commonMethods.click(
        cartPage.proceedToCheckout
    );

    // 8. Click Register / Login
    await commonMethods.click(
        checkoutPage.registerLogin
    );

    // 9. Signup
    await expect(
        validationPage.newUserSignup
    ).toBeVisible();

    await commonMethods.fill(
        signupPage.name,
        userData.name
    );

    await commonMethods.fill(
        signupPage.email,
        userData.email
    );

    await commonMethods.click(
        signupPage.signupbutton
    );

    // Fill Account Information
    await expect(
        validationPage.enterAccountInformation
    ).toBeVisible();

    await commonMethods.check(
        homePage.title
    );

    await commonMethods.fill(
        homePage.password,
        userData.password
    );

    await commonMethods.selectOption(
        homePage.days,
        userData.day
    );

    await commonMethods.selectOption(
        homePage.months,
        userData.month
    );

    await commonMethods.selectOption(
        homePage.years,
        userData.year
    );

    await commonMethods.check(
        homePage.newsletter
    );

    await commonMethods.check(
        homePage.offers
    );

    // Address Information
    await commonMethods.fill(
        homePage.firstName,
        userData.firstName
    );

    await commonMethods.fill(
        homePage.lastName,
        userData.lastName
    );

    await commonMethods.fill(
        homePage.company,
        userData.company
    );

    await commonMethods.fill(
        homePage.address1,
        userData.address1
    );

    await commonMethods.fill(
        homePage.address2,
        userData.address2
    );

    await commonMethods.selectOption(
        homePage.country,
        userData.country
    );

    await commonMethods.fill(
        homePage.state,
        userData.state
    );

    await commonMethods.fill(
        homePage.city,
        userData.city
    );

    await commonMethods.fill(
        homePage.zipcode,
        userData.zipcode
    );

    await commonMethods.fill(
        homePage.mobileNumber,
        userData.mobileNumber
    );

    // 10. Create Account
    await commonMethods.click(
        homePage.createAccountButton
    );

    await expect(
        validationPage.accountCreated
    ).toBeVisible();

    await commonMethods.clickFirst(
        homePage.continueButton
    );

    // 11. Verify Logged In
    await expect(
        validationPage.loggedInAs
    ).toBeVisible();

    // 12. Click Cart
    await commonMethods.click(
        cartPage.cart
    );

    // 13. Proceed To Checkout
    await commonMethods.click(
        cartPage.proceedToCheckout
    );

    // 14. Verify Address Details & Review Your Order
    await expect(
        validationPage.addressDetails
    ).toBeVisible();

    await expect(
        validationPage.reviewYourOrder
    ).toBeVisible();

    // 15. Enter Comment
    await commonMethods.fill(
        checkoutPage.orderComment,
        'Please deliver the order as soon as possible.'
    );

    await commonMethods.click(
        checkoutPage.placeOrder
    );

    // 16. Enter Payment Details
    await commonMethods.fill(
        paymentPage.nameOnCard,
        paymentData.nameOnCard
    );

    await commonMethods.fill(
        paymentPage.cardNumber,
        paymentData.cardNumber
    );

    await commonMethods.fill(
        paymentPage.cvc,
        paymentData.cvc
    );

    await commonMethods.fill(
        paymentPage.expirationMonth,
        paymentData.expirationMonth
    );

    await commonMethods.fill(
        paymentPage.expirationYear,
        paymentData.expirationYear
    );

    // 17. Click Pay and Confirm Order
    await commonMethods.click(
        paymentPage.payAndConfirmOrder
    );

});