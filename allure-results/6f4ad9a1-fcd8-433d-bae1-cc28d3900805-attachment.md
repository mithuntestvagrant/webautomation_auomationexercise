# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 14_placeOrder.spec.ts >> Place Order
- Location: tests/14_placeOrder.spec.ts:19:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('h2').filter({ hasText: 'Account Created!' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('h2').filter({ hasText: 'Account Created!' })

```

```yaml
- banner:
  - link "Website for practice automation":
    - /url: /
    - img "Website for practice automation"
  - list:
    - listitem:
      - link " Home":
        - /url: /
    - listitem:
      - link " Products":
        - /url: /products
    - listitem:
      - link " Cart":
        - /url: /view_cart
    - listitem:
      - link " Signup / Login":
        - /url: /login
    - listitem:
      - link " Test Cases":
        - /url: /test_cases
    - listitem:
      - link " API Testing":
        - /url: /api_list
    - listitem:
      - link " Video Tutorials":
        - /url: https://www.youtube.com/c/AutomationExercise
    - listitem:
      - link " Contact us":
        - /url: /contact_us
- heading "Enter Account Information" [level=2]
- text: Title
- radio "Mr." [checked]
- text: Mr.
- radio "Mrs."
- text: Mrs. Name
- superscript: "*"
- textbox "Name *": Mithun
- text: Email
- superscript: "*"
- textbox "Email *" [disabled]: mithun1785932405962@example.com
- text: Password
- superscript: "*"
- textbox "Password *": MyPassword123
- text: Date of Birth
- combobox:
  - option "Day"
  - option "1"
  - option "2"
  - option "3"
  - option "4"
  - option "5"
  - option "6"
  - option "7"
  - option "8"
  - option "9"
  - option "10" [selected]
  - option "11"
  - option "12"
  - option "13"
  - option "14"
  - option "15"
  - option "16"
  - option "17"
  - option "18"
  - option "19"
  - option "20"
  - option "21"
  - option "22"
  - option "23"
  - option "24"
  - option "25"
  - option "26"
  - option "27"
  - option "28"
  - option "29"
  - option "30"
  - option "31"
- combobox:
  - option "Month"
  - option "January"
  - option "February"
  - option "March"
  - option "April"
  - option "May" [selected]
  - option "June"
  - option "July"
  - option "August"
  - option "September"
  - option "October"
  - option "November"
  - option "December"
- combobox:
  - option "Year"
  - option "2021"
  - option "2020"
  - option "2019"
  - option "2018"
  - option "2017"
  - option "2016"
  - option "2015"
  - option "2014"
  - option "2013"
  - option "2012"
  - option "2011"
  - option "2010"
  - option "2009"
  - option "2008"
  - option "2007"
  - option "2006"
  - option "2005"
  - option "2004"
  - option "2003"
  - option "2002"
  - option "2001"
  - option "2000"
  - option "1999"
  - option "1998"
  - option "1997"
  - option "1996"
  - option "1995"
  - option "1994" [selected]
  - option "1993"
  - option "1992"
  - option "1991"
  - option "1990"
  - option "1989"
  - option "1988"
  - option "1987"
  - option "1986"
  - option "1985"
  - option "1984"
  - option "1983"
  - option "1982"
  - option "1981"
  - option "1980"
  - option "1979"
  - option "1978"
  - option "1977"
  - option "1976"
  - option "1975"
  - option "1974"
  - option "1973"
  - option "1972"
  - option "1971"
  - option "1970"
  - option "1969"
  - option "1968"
  - option "1967"
  - option "1966"
  - option "1965"
  - option "1964"
  - option "1963"
  - option "1962"
  - option "1961"
  - option "1960"
  - option "1959"
  - option "1958"
  - option "1957"
  - option "1956"
  - option "1955"
  - option "1954"
  - option "1953"
  - option "1952"
  - option "1951"
  - option "1950"
  - option "1949"
  - option "1948"
  - option "1947"
  - option "1946"
  - option "1945"
  - option "1944"
  - option "1943"
  - option "1942"
  - option "1941"
  - option "1940"
  - option "1939"
  - option "1938"
  - option "1937"
  - option "1936"
  - option "1935"
  - option "1934"
  - option "1933"
  - option "1932"
  - option "1931"
  - option "1930"
  - option "1929"
  - option "1928"
  - option "1927"
  - option "1926"
  - option "1925"
  - option "1924"
  - option "1923"
  - option "1922"
  - option "1921"
  - option "1920"
  - option "1919"
  - option "1918"
  - option "1917"
  - option "1916"
  - option "1915"
  - option "1914"
  - option "1913"
  - option "1912"
  - option "1911"
  - option "1910"
  - option "1909"
  - option "1908"
  - option "1907"
  - option "1906"
  - option "1905"
  - option "1904"
  - option "1903"
  - option "1902"
  - option "1901"
  - option "1900"
- checkbox "Sign up for our newsletter!" [checked]
- text: Sign up for our newsletter!
- checkbox "Receive special offers from our partners!" [checked]
- text: Receive special offers from our partners!
- heading "Address Information" [level=2]
- paragraph:
  - text: First name
  - superscript: "*"
  - textbox "First name *": Mithun
- paragraph:
  - text: Last name
  - superscript: "*"
  - textbox "Last name *": Mishra
- paragraph:
  - text: Company
  - textbox "Company": ABC Company
- paragraph:
  - text: Address
  - superscript: "*"
  - text: (Street address, P.O. Box, Company name, etc.)
  - textbox "Address * (Street address, P.O. Box, Company name, etc.)": 123 Main Street
- paragraph:
  - text: Address 2
  - textbox "Address 2": Apt 4B
- paragraph:
  - text: Country
  - superscript: "*"
  - combobox "Country *":
    - option "India"
    - option "United States"
    - option "Canada" [selected]
    - option "Australia"
    - option "Israel"
    - option "New Zealand"
    - option "Singapore"
- paragraph:
  - text: State
  - superscript: "*"
  - textbox "State *": Ontario
- paragraph:
  - text: City
  - superscript: "*"
  - textbox "City * Zipcode *": Toronto
- paragraph:
  - text: Zipcode
  - superscript: "*"
  - textbox: M5V 2H1
- paragraph:
  - text: Mobile Number
  - superscript: "*"
  - textbox "Mobile Number *": +1 416-123-4567
- button "Create Account"
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Automation software solutions"
  - link "TV & Video"
  - link "Automation subscription service"
- contentinfo:
  - heading "Subscription" [level=2]
  - textbox "Your email address"
  - button ""
  - paragraph: Get the most recent updates from our site and be updated your self...
  - paragraph: Copyright © 2021 All rights reserved
- link "":
  - /url: "#top"
- insertion:
  - heading "These are topics related to the article that might interest you" [level=2]: Discover more
  - link "Software testing services"
  - link "Intellectual Property"
  - link "Secure login systems"
```

# Test source

```ts
  109 |         signupPage.email,
  110 |         userData.email
  111 |     );
  112 | 
  113 |     await commonMethods.click(
  114 |         signupPage.signupbutton
  115 |     );
  116 | 
  117 |     // Account Information
  118 |     await commonMethods.waitForElement(
  119 |         validationPage.enterAccountInformation,
  120 |         10000
  121 |     );
  122 | 
  123 |     await commonMethods.check(
  124 |         homePage.title
  125 |     );
  126 | 
  127 |     await commonMethods.fill(
  128 |         homePage.password,
  129 |         userData.password
  130 |     );
  131 | 
  132 |     await commonMethods.selectOption(
  133 |         homePage.days,
  134 |         userData.day
  135 |     );
  136 | 
  137 |     await commonMethods.selectOption(
  138 |         homePage.months,
  139 |         userData.month
  140 |     );
  141 | 
  142 |     await commonMethods.selectOption(
  143 |         homePage.years,
  144 |         userData.year
  145 |     );
  146 | 
  147 |     await commonMethods.check(
  148 |         homePage.newsletter
  149 |     );
  150 | 
  151 |     await commonMethods.check(
  152 |         homePage.offers
  153 |     );
  154 | 
  155 |     // Address Information
  156 |     await commonMethods.fill(
  157 |         homePage.firstName,
  158 |         userData.firstName
  159 |     );
  160 | 
  161 |     await commonMethods.fill(
  162 |         homePage.lastName,
  163 |         userData.lastName
  164 |     );
  165 | 
  166 |     await commonMethods.fill(
  167 |         homePage.company,
  168 |         userData.company
  169 |     );
  170 | 
  171 |     await commonMethods.fill(
  172 |         homePage.address1,
  173 |         userData.address1
  174 |     );
  175 | 
  176 |     await commonMethods.fill(
  177 |         homePage.address2,
  178 |         userData.address2
  179 |     );
  180 | 
  181 |     await commonMethods.selectOption(
  182 |         homePage.country,
  183 |         userData.country
  184 |     );
  185 | 
  186 |     await commonMethods.fill(
  187 |         homePage.state,
  188 |         userData.state
  189 |     );
  190 | 
  191 |     await commonMethods.fill(
  192 |         homePage.city,
  193 |         userData.city
  194 |     );
  195 | 
  196 |     await commonMethods.fill(
  197 |         homePage.zipcode,
  198 |         userData.zipcode
  199 |     );
  200 | 
  201 |     await commonMethods.fill(
  202 |         homePage.mobileNumber,
  203 |         userData.mobileNumber
  204 |     );
  205 | 
  206 |     // 10. Verify ACCOUNT CREATED and Continue
  207 |     await expect(
  208 |         validationPage.accountCreated
> 209 |     ).toBeVisible();
      |       ^ Error: expect(locator).toBeVisible() failed
  210 | 
  211 |     await commonMethods.clickFirst(
  212 |         homePage.continueButton
  213 |     );
  214 | 
  215 |     // 11. Verify Logged in as username
  216 |     await expect(
  217 |         validationPage.loggedInAs
  218 |     ).toBeVisible();
  219 | 
  220 |     // 12. Click Cart
  221 |     await commonMethods.waitForElement(
  222 |         cartPage.cart
  223 |     );
  224 | 
  225 |     await commonMethods.click(
  226 |         cartPage.cart
  227 |     );
  228 | 
  229 |     // 13. Click Proceed To Checkout
  230 |     await commonMethods.waitForElement(
  231 |         cartPage.proceedToCheckout
  232 |     );
  233 | 
  234 |     await commonMethods.click(
  235 |         cartPage.proceedToCheckout
  236 |     );
  237 | 
  238 |     // 14. Verify Address Details and Review Your Order
  239 |     await expect(
  240 |         validationPage.addressDetails
  241 |     ).toBeVisible();
  242 | 
  243 |     await expect(
  244 |         validationPage.reviewYourOrder
  245 |     ).toBeVisible();
  246 | 
  247 |     // 15. Enter description and Place Order
  248 |     await commonMethods.fill(
  249 |         checkoutPage.orderComment,
  250 |         'Please deliver the order as soon as possible.'
  251 |     );
  252 | 
  253 |     await commonMethods.waitForElement(
  254 |         checkoutPage.placeOrder
  255 |     );
  256 | 
  257 |     await commonMethods.click(
  258 |         checkoutPage.placeOrder
  259 |     );
  260 | 
  261 |     // 16. Enter Payment Details
  262 |     await commonMethods.fill(
  263 |         paymentPage.nameOnCard,
  264 |         paymentData.nameOnCard
  265 |     );
  266 | 
  267 |     await commonMethods.fill(
  268 |         paymentPage.cardNumber,
  269 |         paymentData.cardNumber
  270 |     );
  271 | 
  272 |     await commonMethods.fill(
  273 |         paymentPage.cvc,
  274 |         paymentData.cvc
  275 |     );
  276 | 
  277 |     await commonMethods.fill(
  278 |         paymentPage.expirationMonth,
  279 |         paymentData.expirationMonth
  280 |     );
  281 | 
  282 |     await commonMethods.fill(
  283 |         paymentPage.expirationYear,
  284 |         paymentData.expirationYear
  285 |     );
  286 | 
  287 |     // 17. Click Pay and Confirm Order
  288 |     await commonMethods.waitForElement(
  289 |         paymentPage.payAndConfirmOrder
  290 |     );
  291 | 
  292 |     await commonMethods.click(
  293 |         paymentPage.payAndConfirmOrder
  294 |     );
  295 | 
  296 |     // 18. Verify success message
  297 |     await expect(
  298 |         validationPage.orderPlacedSuccessfully
  299 |     ).toBeVisible({
  300 |         timeout: 15000
  301 |     });
  302 | 
  303 |     // 19. Delete Account
  304 |     await commonMethods.click(
  305 |         accountPage.deleteAccount
  306 |     );
  307 | 
  308 |     // 20. Verify ACCOUNT DELETED
  309 |     await expect(
```