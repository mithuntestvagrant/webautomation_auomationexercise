# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.ts >> Register user
- Location: tests/registerUser.spec.ts:2:5

# Error details

```
Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: /Company/i }) resolved to 2 elements:
    1) <input value="" type="text" id="company" name="company" data-qa="company" class="form-control"/> aka getByRole('textbox', { name: 'Company', exact: true })
    2) <input value="" type="text" required="" id="address1" name="address1" data-qa="address" class="form-control"/> aka getByRole('textbox', { name: 'Address * (Street address, P.' })

Call log:
  - waiting for getByRole('textbox', { name: /Company/i })

```

# Page snapshot

```yaml
- generic [ref=f23e1]:
  - banner [ref=f23e2]:
    - generic [ref=f23e5]:
      - link [ref=f23e8] [cursor=pointer]:
        - /url: /
        - img "Website for practice automation" [ref=f23e9]
      - list [ref=f23e12]:
        - listitem [ref=f23e13]:
          - link " Home" [ref=f23e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f23e15]: 
            - text: Home
        - listitem [ref=f23e16]:
          - link " Products" [ref=f23e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f23e18]: 
            - text: Products
        - listitem [ref=f23e19]:
          - link " Cart" [ref=f23e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f23e21]: 
            - text: Cart
        - listitem [ref=f23e22]:
          - link " Signup / Login" [ref=f23e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=f23e24]: 
            - text: Signup / Login
        - listitem [ref=f23e25]:
          - link " Test Cases" [ref=f23e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f23e27]: 
            - text: Test Cases
        - listitem [ref=f23e28]:
          - link " API Testing" [ref=f23e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f23e30]: 
            - text: API Testing
        - listitem [ref=f23e31]:
          - link " Video Tutorials" [ref=f23e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f23e33]: 
            - text: Video Tutorials
        - listitem [ref=f23e34]:
          - link " Contact us" [ref=f23e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f23e36]: 
            - text: Contact us
  - generic [ref=f23e41]:
    - heading "Enter Account Information" [level=2] [ref=f23e42]
    - generic [ref=f23e43]:
      - generic [ref=f23e44]:
        - generic [ref=f23e45]: Title
        - generic [ref=f23e47]:
          - radio "Mr." [checked] [ref=f23e49]
          - text: Mr.
        - generic [ref=f23e51]:
          - radio "Mrs." [ref=f23e53]
          - text: Mrs.
      - generic [ref=f23e54]:
        - generic [ref=f23e55]:
          - text: Name
          - superscript [ref=f23e56]: "*"
        - textbox "Name *" [ref=f23e57]: Mithun
      - generic [ref=f23e58]:
        - generic [ref=f23e59]:
          - text: Email
          - superscript [ref=f23e60]: "*"
        - textbox "Email *" [disabled] [ref=f23e61]: mithun@example111112.com
      - generic [ref=f23e62]:
        - generic [ref=f23e63]:
          - text: Password
          - superscript [ref=f23e64]: "*"
        - textbox "Password *" [ref=f23e65]: MyPassword123
      - generic [ref=f23e66]:
        - generic [ref=f23e67]: Date of Birth
        - generic [ref=f23e68]:
          - combobox [ref=f23e71]:
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
          - combobox [ref=f23e74]:
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
          - combobox [ref=f23e77]:
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
      - generic [ref=f23e78]:
        - checkbox "Sign up for our newsletter!" [checked] [ref=f23e79]
        - text: Sign up for our newsletter!
      - generic [ref=f23e80]:
        - checkbox "Receive special offers from our partners!" [checked] [ref=f23e81]
        - text: Receive special offers from our partners!
      - heading "Address Information" [level=2] [ref=f23e82]
      - paragraph [ref=f23e83]:
        - generic [ref=f23e84]:
          - text: First name
          - superscript [ref=f23e85]: "*"
        - textbox "First name *" [ref=f23e86]: Mithun
      - paragraph [ref=f23e87]:
        - generic [ref=f23e88]:
          - text: Last name
          - superscript [ref=f23e89]: "*"
        - textbox "Last name *" [active] [ref=f23e90]: Mishra
      - paragraph [ref=f23e91]:
        - generic [ref=f23e92]: Company
        - textbox "Company" [ref=f23e93]
      - paragraph [ref=f23e94]:
        - generic [ref=f23e95]:
          - text: Address
          - superscript [ref=f23e96]: "*"
          - text: (Street address, P.O. Box, Company name, etc.)
        - textbox "Address * (Street address, P.O. Box, Company name, etc.)" [ref=f23e97]
      - paragraph [ref=f23e98]:
        - generic [ref=f23e99]: Address 2
        - textbox "Address 2" [ref=f23e100]
      - paragraph [ref=f23e101]:
        - generic [ref=f23e102]:
          - text: Country
          - superscript [ref=f23e103]: "*"
        - combobox "Country *" [ref=f23e104]:
          - option "India" [selected]
          - option "United States"
          - option "Canada"
          - option "Australia"
          - option "Israel"
          - option "New Zealand"
          - option "Singapore"
      - paragraph [ref=f23e105]:
        - generic [ref=f23e106]:
          - text: State
          - superscript [ref=f23e107]: "*"
        - textbox "State *" [ref=f23e108]
      - paragraph [ref=f23e109]:
        - generic [ref=f23e110]:
          - text: City
          - superscript [ref=f23e111]: "*"
        - textbox "City * Zipcode *" [ref=f23e112]
      - paragraph [ref=f23e113]:
        - generic [ref=f23e114]:
          - text: Zipcode
          - superscript [ref=f23e115]: "*"
        - textbox [ref=f23e116]
      - paragraph [ref=f23e117]:
        - generic [ref=f23e118]:
          - text: Mobile Number
          - superscript [ref=f23e119]: "*"
        - textbox "Mobile Number *" [ref=f23e120]
      - button "Create Account" [ref=f23e121] [cursor=pointer]
  - contentinfo [ref=f23e122]:
    - generic [ref=f23e127]:
      - heading "Subscription" [level=2] [ref=f23e128]
      - generic [ref=f23e129]:
        - textbox "Your email address" [ref=f23e130]
        - button "" [ref=f23e131] [cursor=pointer]
        - paragraph [ref=f23e133]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f23e137]: Copyright © 2021 All rights reserved
  - text: 
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test('Register user', async({page})=>{
  3  | 
  4  | await page.goto('http://automationexercise.com')
  5  | await page.waitForLoadState('networkidle')
  6  | const home = page.getByRole('link', { name: 'Home' });
  7  | 
  8  | await expect(home).toBeVisible();
  9  | 
  10 | const signup = page.getByRole('link', { name: 'Signup / Login' });
  11 | 
  12 | await signup.click();
  13 | const newuser = page.getByRole('heading', { name: 'New User Signup!' });
  14 | await newuser.waitFor({ state: 'visible', timeout: 10000 });
  15 | await expect(newuser).toBeVisible();
  16 | const name = page.getByRole('textbox', { name: 'Name' });
  17 | await name.fill('Mithun');
  18 | const email = page.getByPlaceholder('Email Address').nth(1);
  19 | await email.fill('mithun@example111112.com');
  20 | 
  21 | const signupbutton = page.getByRole('button', { name: 'Signup' });
  22 | await signupbutton.click();
  23 | 
  24 | const accountinfo = page.getByText('Enter Account Information');
  25 | await expect(accountinfo).toBeVisible();
  26 | const title = page.getByLabel(/Mr\./i);
  27 | await title.check();
  28 | 
  29 | const password = page.getByRole('textbox', { name: 'Password' });
  30 | await password.fill('MyPassword123');
  31 | const day = page.locator('#days');
  32 | await day.selectOption('10');
  33 | const month = page.locator('#months');
  34 | await month.selectOption('5');
  35 | 
  36 | const year = page.locator('#years');
  37 | await year.selectOption('1994');
  38 | const newsletter = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
  39 | await newsletter.check();
  40 | const offers = page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
  41 | await offers.check();
  42 | const firstName = page.getByRole('textbox', { name: /First Name/i });
  43 | await firstName.fill('Mithun');
  44 | const lastName = page.getByRole('textbox', { name: /Last Name/i });
  45 | await lastName.fill('Mishra');
  46 | const company = page.getByRole('textbox', { name: /Company/i });
> 47 | await company.fill('ABC Company');
     |               ^ Error: locator.fill: Error: strict mode violation: getByRole('textbox', { name: /Company/i }) resolved to 2 elements:
  48 | const address1 = page.getByRole('textbox', { name: /Address 1/i });
  49 | await address1.fill('123 Main Street');
  50 | const address2 = page.getByRole('textbox', { name: /Address 2/i });
  51 | await address2.fill('Apt 4B');
  52 | const country = page.getByRole('combobox', { name: 'Country' });
  53 | await country.selectOption('Canada');
  54 | const state = page.getByRole('textbox', { name: /State/i });
  55 | await state.fill('Ontario');
  56 | const city = page.getByRole('textbox', { name: /City/i });
  57 | await city.fill('Toronto');
  58 | const zipcode = page.getByRole('textbox', { name: /Zipcode/i });
  59 | await zipcode.fill('M5V 2H1');
  60 | const mobileNumber = page.getByRole('textbox', { name: /Mobile Number/i });
  61 | await mobileNumber.fill('+1 416-123-4567');
  62 | const createAccountButton = page.getByRole('button', { name: 'Create Account' });
  63 | await createAccountButton.click();
  64 |     const accountCreatedMessage= page.locator("//b[text()='Account Created!']")
  65 |     await accountCreatedMessage.waitFor({ state: 'visible', timeout: 10000 })
  66 |     await expect(accountCreatedMessage).toBeVisible();
  67 |     const continueButton = page.getByRole('link', { name: 'Continue' });
  68 |     await continueButton.first().waitFor({ state: 'visible', timeout: 10000 });
  69 |     await continueButton.first().click();
  70 |     await page.waitForLoadState('networkidle');
  71 | 
  72 |     const loggedInAs = page.getByRole('link', { name: /Logged in as/i });
  73 |     await loggedInAs.waitFor({ state: 'visible', timeout: 10000 });
  74 |     await expect(loggedInAs).toBeVisible();
  75 |     const deleteAccount = page.getByRole('link', { name: 'Delete Account' });
  76 | 
  77 |     await deleteAccount.click();
  78 |     const accountDeleted = page.getByText('Account Deleted!');
  79 |     await accountDeleted.waitFor({ state: 'visible', timeout: 10000 });
  80 |     await expect(accountDeleted).toBeVisible();
  81 |     const continueButton3 = page.getByRole('link', { name: 'Continue' });
  82 |     await continueButton3.first().waitFor({ state: 'visible', timeout: 10000 });
  83 |     await continueButton3.first().click();
  84 |     
  85 | 
  86 | 
  87 | 
  88 | 
  89 | })
```