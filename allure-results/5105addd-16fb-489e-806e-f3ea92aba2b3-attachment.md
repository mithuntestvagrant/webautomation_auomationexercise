# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.ts >> Register user
- Location: tests/registerUser.spec.ts:2:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[text()=\'Continue\']')

```

# Page snapshot

```yaml
- generic [active] [ref=f35e1]:
  - banner [ref=f35e2]:
    - generic [ref=f35e5]:
      - link [ref=f35e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f35e9]
      - list [ref=f35e12]:
        - listitem [ref=f35e13]:
          - link " Home" [ref=f35e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f35e15]: 
            - text: Home
        - listitem [ref=f35e16]:
          - link " Products" [ref=f35e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f35e18]: 
            - text: Products
        - listitem [ref=f35e19]:
          - link " Cart" [ref=f35e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f35e21]: 
            - text: Cart
        - listitem [ref=f35e22]:
          - link " Logout" [ref=f35e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f35e24]: 
            - text: Logout
        - listitem [ref=f35e25]:
          - link " Delete Account" [ref=f35e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f35e27]: 
            - text: Delete Account
        - listitem [ref=f35e28]:
          - link " Test Cases" [ref=f35e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f35e30]: 
            - text: Test Cases
        - listitem [ref=f35e31]:
          - link " API Testing" [ref=f35e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f35e33]: 
            - text: API Testing
        - listitem [ref=f35e34]:
          - link " Video Tutorials" [ref=f35e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f35e36]: 
            - text: Video Tutorials
        - listitem [ref=f35e37]:
          - link " Contact us" [ref=f35e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f35e39]: 
            - text: Contact us
        - listitem [ref=f35e40]:
          - generic [ref=f35e41]:
            - generic [ref=f35e42]: 
            - text: Logged in as Mithun
  - generic [ref=f35e47]:
    - list [ref=f35e48]:
      - listitem [ref=f35e49] [cursor=pointer]
      - listitem [ref=f35e50] [cursor=pointer]
      - listitem [ref=f35e51] [cursor=pointer]
    - generic [ref=f35e52]:
      - generic:
        - generic [ref=f35e53]:
          - heading "AutomationExercise" [level=1] [ref=f35e54]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=f35e55]
          - paragraph [ref=f35e56]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=f35e57] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=f35e58]
          - link [ref=f35e59] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=f35e60]
        - img "demo website for practice" [ref=f35e62]
    - link "" [ref=f35e63] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=f35e65] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=f35e69]:
    - generic [ref=f35e71]:
      - heading "Category" [level=2] [ref=f35e72]
      - generic [ref=f35e73]:
        - heading [level=4] [ref=f35e76]:
          - link " Women" [ref=f35e77] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f35e78]: 
            - text: Women
        - heading [level=4] [ref=f35e82]:
          - link " Men" [ref=f35e83] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f35e84]: 
            - text: Men
        - heading [level=4] [ref=f35e88]:
          - link " Kids" [ref=f35e89] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f35e90]: 
            - text: Kids
      - insertion [ref=f35e93]:
        - generic [ref=f35e96]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f35e98]: Discover more
          - link "API testing frameworks" [ref=f35e99] [cursor=pointer]
          - link "Engineers" [ref=f35e104] [cursor=pointer]
          - link "Software" [ref=f35e109] [cursor=pointer]
          - link "Software testing courses" [ref=f35e114] [cursor=pointer]
          - link "engineers" [ref=f35e119] [cursor=pointer]
          - link "API documentation tools" [ref=f35e124] [cursor=pointer]
          - link "Automation practice website" [ref=f35e129] [cursor=pointer]
          - link "T-Shirts" [ref=f35e134] [cursor=pointer]
      - generic [ref=f35e139]:
        - heading "Brands" [level=2] [ref=f35e140]
        - list [ref=f35e142]:
          - listitem [ref=f35e143]:
            - link "(6) Polo" [ref=f35e144] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f35e145]: (6)
              - text: Polo
          - listitem [ref=f35e146]:
            - link "(5) H&M" [ref=f35e147] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f35e148]: (5)
              - text: H&M
          - listitem [ref=f35e149]:
            - link "(5) Madame" [ref=f35e150] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f35e151]: (5)
              - text: Madame
          - listitem [ref=f35e152]:
            - link "(3) Mast & Harbour" [ref=f35e153] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f35e154]: (3)
              - text: Mast & Harbour
          - listitem [ref=f35e155]:
            - link "(4) Babyhug" [ref=f35e156] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f35e157]: (4)
              - text: Babyhug
          - listitem [ref=f35e158]:
            - link "(3) Allen Solly Junior" [ref=f35e159] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f35e160]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f35e161]:
            - link "(3) Kookie Kids" [ref=f35e162] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f35e163]: (3)
              - text: Kookie Kids
          - listitem [ref=f35e164]:
            - link "(5) Biba" [ref=f35e165] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f35e166]: (5)
              - text: Biba
    - generic [ref=f35e167]:
      - generic [ref=f35e168]:
        - heading "Features Items" [level=2] [ref=f35e169]
        - generic [ref=f35e171]:
          - generic [ref=f35e172]:
            - generic [ref=f35e173]:
              - img "ecommerce website products" [ref=f35e174]
              - heading "Rs. 500" [level=2] [ref=f35e175]
              - paragraph [ref=f35e176]: Blue Top
              - generic [ref=f35e177] [cursor=pointer]:
                - generic [ref=f35e178]: 
                - text: Add to cart
            - generic [ref=f35e179]:
              - heading "Rs. 500" [level=2] [ref=f35e180]
              - paragraph [ref=f35e181]: Blue Top
              - generic [ref=f35e182] [cursor=pointer]:
                - generic [ref=f35e183]: 
                - text: Add to cart
          - list [ref=f35e185]:
            - listitem [ref=f35e186]:
              - link " View Product" [ref=f35e187] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=f35e188]: 
                - text: View Product
        - generic [ref=f35e190]:
          - generic [ref=f35e191]:
            - generic [ref=f35e192]:
              - img "ecommerce website products" [ref=f35e193]
              - heading "Rs. 400" [level=2] [ref=f35e194]
              - paragraph [ref=f35e195]:
                - text: Men
                - link "Tshirt" [ref=f35e196] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f35e199] [cursor=pointer]:
                - generic [ref=f35e200]: 
                - text: Add to cart
            - generic [ref=f35e201]:
              - heading "Rs. 400" [level=2] [ref=f35e202]
              - paragraph [ref=f35e203]: Men Tshirt
              - generic [ref=f35e204] [cursor=pointer]:
                - generic [ref=f35e205]: 
                - text: Add to cart
          - list [ref=f35e207]:
            - listitem [ref=f35e208]:
              - link " View Product" [ref=f35e209] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=f35e210]: 
                - text: View Product
        - generic [ref=f35e212]:
          - generic [ref=f35e213]:
            - generic [ref=f35e214]:
              - img "ecommerce website products" [ref=f35e215]
              - heading "Rs. 1000" [level=2] [ref=f35e216]
              - paragraph [ref=f35e217]:
                - text: Sleeveless
                - link "Dress" [ref=f35e218] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f35e221] [cursor=pointer]:
                - generic [ref=f35e222]: 
                - text: Add to cart
            - generic [ref=f35e223]:
              - heading "Rs. 1000" [level=2] [ref=f35e224]
              - paragraph [ref=f35e225]: Sleeveless Dress
              - generic [ref=f35e226] [cursor=pointer]:
                - generic [ref=f35e227]: 
                - text: Add to cart
          - list [ref=f35e229]:
            - listitem [ref=f35e230]:
              - link " View Product" [ref=f35e231] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=f35e232]: 
                - text: View Product
        - generic [ref=f35e234]:
          - generic [ref=f35e235]:
            - generic [ref=f35e236]:
              - img "ecommerce website products" [ref=f35e237]
              - heading "Rs. 1500" [level=2] [ref=f35e238]
              - paragraph [ref=f35e239]: Stylish Dress
              - generic [ref=f35e240] [cursor=pointer]:
                - generic [ref=f35e241]: 
                - text: Add to cart
            - generic [ref=f35e242]:
              - heading "Rs. 1500" [level=2] [ref=f35e243]
              - paragraph [ref=f35e244]: Stylish Dress
              - generic [ref=f35e245] [cursor=pointer]:
                - generic [ref=f35e246]: 
                - text: Add to cart
          - list [ref=f35e248]:
            - listitem [ref=f35e249]:
              - link " View Product" [ref=f35e250] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=f35e251]: 
                - text: View Product
        - generic [ref=f35e253]:
          - generic [ref=f35e254]:
            - generic [ref=f35e255]:
              - img "ecommerce website products" [ref=f35e256]
              - heading "Rs. 600" [level=2] [ref=f35e257]
              - paragraph [ref=f35e258]: Winter Top
              - generic [ref=f35e259] [cursor=pointer]:
                - generic [ref=f35e260]: 
                - text: Add to cart
            - generic [ref=f35e261]:
              - heading "Rs. 600" [level=2] [ref=f35e262]
              - paragraph [ref=f35e263]: Winter Top
              - generic [ref=f35e264] [cursor=pointer]:
                - generic [ref=f35e265]: 
                - text: Add to cart
          - list [ref=f35e267]:
            - listitem [ref=f35e268]:
              - link " View Product" [ref=f35e269] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=f35e270]: 
                - text: View Product
        - generic [ref=f35e272]:
          - generic [ref=f35e273]:
            - generic [ref=f35e274]:
              - img "ecommerce website products" [ref=f35e275]
              - heading "Rs. 400" [level=2] [ref=f35e276]
              - paragraph [ref=f35e277]: Summer White Top
              - generic [ref=f35e278] [cursor=pointer]:
                - generic [ref=f35e279]: 
                - text: Add to cart
            - generic [ref=f35e280]:
              - heading "Rs. 400" [level=2] [ref=f35e281]
              - paragraph [ref=f35e282]: Summer White Top
              - generic [ref=f35e283] [cursor=pointer]:
                - generic [ref=f35e284]: 
                - text: Add to cart
          - list [ref=f35e286]:
            - listitem [ref=f35e287]:
              - link " View Product" [ref=f35e288] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=f35e289]: 
                - text: View Product
        - generic [ref=f35e291]:
          - generic [ref=f35e292]:
            - generic [ref=f35e293]:
              - img "ecommerce website products" [ref=f35e294]
              - heading "Rs. 1000" [level=2] [ref=f35e295]
              - paragraph [ref=f35e296]: Madame Top For Women
              - generic [ref=f35e297] [cursor=pointer]:
                - generic [ref=f35e298]: 
                - text: Add to cart
            - generic [ref=f35e299]:
              - heading "Rs. 1000" [level=2] [ref=f35e300]
              - paragraph [ref=f35e301]: Madame Top For Women
              - generic [ref=f35e302] [cursor=pointer]:
                - generic [ref=f35e303]: 
                - text: Add to cart
          - list [ref=f35e305]:
            - listitem [ref=f35e306]:
              - link " View Product" [ref=f35e307] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=f35e308]: 
                - text: View Product
        - generic [ref=f35e310]:
          - generic [ref=f35e311]:
            - generic [ref=f35e312]:
              - img "ecommerce website products" [ref=f35e313]
              - heading "Rs. 700" [level=2] [ref=f35e314]
              - paragraph [ref=f35e315]: Fancy Green Top
              - generic [ref=f35e316] [cursor=pointer]:
                - generic [ref=f35e317]: 
                - text: Add to cart
            - generic [ref=f35e318]:
              - heading "Rs. 700" [level=2] [ref=f35e319]
              - paragraph [ref=f35e320]: Fancy Green Top
              - generic [ref=f35e321] [cursor=pointer]:
                - generic [ref=f35e322]: 
                - text: Add to cart
          - list [ref=f35e324]:
            - listitem [ref=f35e325]:
              - link " View Product" [ref=f35e326] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=f35e327]: 
                - text: View Product
        - generic [ref=f35e329]:
          - generic [ref=f35e330]:
            - generic [ref=f35e331]:
              - img "ecommerce website products" [ref=f35e332]
              - heading "Rs. 499" [level=2] [ref=f35e333]
              - paragraph [ref=f35e334]:
                - text: Sleeves Printed Top - White
                - link "Website development services" [ref=f35e335] [cursor=pointer]
              - generic [ref=f35e339] [cursor=pointer]:
                - generic [ref=f35e340]: 
                - text: Add to cart
            - generic [ref=f35e341]:
              - heading "Rs. 499" [level=2] [ref=f35e342]
              - paragraph [ref=f35e343]: Sleeves Printed Top - White
              - generic [ref=f35e344] [cursor=pointer]:
                - generic [ref=f35e345]: 
                - text: Add to cart
          - list [ref=f35e347]:
            - listitem [ref=f35e348]:
              - link " View Product" [ref=f35e349] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=f35e350]: 
                - text: View Product
        - generic [ref=f35e352]:
          - generic [ref=f35e353]:
            - generic [ref=f35e354]:
              - img "ecommerce website products" [ref=f35e355]
              - heading "Rs. 359" [level=2] [ref=f35e356]
              - paragraph [ref=f35e357]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f35e358] [cursor=pointer]:
                - generic [ref=f35e359]: 
                - text: Add to cart
            - generic [ref=f35e360]:
              - heading "Rs. 359" [level=2] [ref=f35e361]
              - paragraph [ref=f35e362]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f35e363] [cursor=pointer]:
                - generic [ref=f35e364]: 
                - text: Add to cart
          - list [ref=f35e366]:
            - listitem [ref=f35e367]:
              - link " View Product" [ref=f35e368] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=f35e369]: 
                - text: View Product
        - generic [ref=f35e371]:
          - generic [ref=f35e372]:
            - generic [ref=f35e373]:
              - img "ecommerce website products" [ref=f35e374]
              - heading "Rs. 278" [level=2] [ref=f35e375]
              - paragraph [ref=f35e376]: Frozen Tops For Kids
              - generic [ref=f35e377] [cursor=pointer]:
                - generic [ref=f35e378]: 
                - text: Add to cart
            - generic [ref=f35e379]:
              - heading "Rs. 278" [level=2] [ref=f35e380]
              - paragraph [ref=f35e381]: Frozen Tops For Kids
              - generic [ref=f35e382] [cursor=pointer]:
                - generic [ref=f35e383]: 
                - text: Add to cart
          - list [ref=f35e385]:
            - listitem [ref=f35e386]:
              - link " View Product" [ref=f35e387] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=f35e388]: 
                - text: View Product
        - generic [ref=f35e390]:
          - generic [ref=f35e391]:
            - generic [ref=f35e392]:
              - img "ecommerce website products" [ref=f35e393]
              - heading "Rs. 679" [level=2] [ref=f35e394]
              - paragraph [ref=f35e395]: Full Sleeves Top Cherry - Pink
              - generic [ref=f35e396] [cursor=pointer]:
                - generic [ref=f35e397]: 
                - text: Add to cart
            - generic [ref=f35e398]:
              - heading "Rs. 679" [level=2] [ref=f35e399]
              - paragraph [ref=f35e400]: Full Sleeves Top Cherry - Pink
              - generic [ref=f35e401] [cursor=pointer]:
                - generic [ref=f35e402]: 
                - text: Add to cart
          - list [ref=f35e404]:
            - listitem [ref=f35e405]:
              - link " View Product" [ref=f35e406] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=f35e407]: 
                - text: View Product
        - generic [ref=f35e409]:
          - generic [ref=f35e410]:
            - generic [ref=f35e411]:
              - img "ecommerce website products" [ref=f35e412]
              - heading "Rs. 315" [level=2] [ref=f35e413]
              - paragraph [ref=f35e414]:
                - text: Printed Off Shoulder Top - White
                - link "QA certification programs" [ref=f35e415] [cursor=pointer]
              - generic [ref=f35e419] [cursor=pointer]:
                - generic [ref=f35e420]: 
                - text: Add to cart
            - generic [ref=f35e421]:
              - heading "Rs. 315" [level=2] [ref=f35e422]
              - paragraph [ref=f35e423]: Printed Off Shoulder Top - White
              - generic [ref=f35e424] [cursor=pointer]:
                - generic [ref=f35e425]: 
                - text: Add to cart
          - list [ref=f35e427]:
            - listitem [ref=f35e428]:
              - link " View Product" [ref=f35e429] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=f35e430]: 
                - text: View Product
        - generic [ref=f35e432]:
          - generic [ref=f35e433]:
            - generic [ref=f35e434]:
              - img "ecommerce website products" [ref=f35e435]
              - heading "Rs. 478" [level=2] [ref=f35e436]
              - paragraph [ref=f35e437]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f35e438] [cursor=pointer]:
                - generic [ref=f35e439]: 
                - text: Add to cart
            - generic [ref=f35e440]:
              - heading "Rs. 478" [level=2] [ref=f35e441]
              - paragraph [ref=f35e442]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f35e443] [cursor=pointer]:
                - generic [ref=f35e444]: 
                - text: Add to cart
          - list [ref=f35e446]:
            - listitem [ref=f35e447]:
              - link " View Product" [ref=f35e448] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=f35e449]: 
                - text: View Product
        - generic [ref=f35e451]:
          - generic [ref=f35e452]:
            - generic [ref=f35e453]:
              - img "ecommerce website products" [ref=f35e454]
              - heading "Rs. 1200" [level=2] [ref=f35e455]
              - paragraph [ref=f35e456]: Little Girls Mr. Panda Shirt
              - generic [ref=f35e457] [cursor=pointer]:
                - generic [ref=f35e458]: 
                - text: Add to cart
            - generic [ref=f35e459]:
              - heading "Rs. 1200" [level=2] [ref=f35e460]
              - paragraph [ref=f35e461]: Little Girls Mr. Panda Shirt
              - generic [ref=f35e462] [cursor=pointer]:
                - generic [ref=f35e463]: 
                - text: Add to cart
          - list [ref=f35e465]:
            - listitem [ref=f35e466]:
              - link " View Product" [ref=f35e467] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=f35e468]: 
                - text: View Product
        - generic [ref=f35e470]:
          - generic [ref=f35e471]:
            - generic [ref=f35e472]:
              - img "ecommerce website products" [ref=f35e473]
              - heading "Rs. 1050" [level=2] [ref=f35e474]
              - paragraph [ref=f35e475]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "API testing tutorials" [ref=f35e476] [cursor=pointer]
              - generic [ref=f35e480] [cursor=pointer]:
                - generic [ref=f35e481]: 
                - text: Add to cart
            - generic [ref=f35e482]:
              - heading "Rs. 1050" [level=2] [ref=f35e483]
              - paragraph [ref=f35e484]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f35e485] [cursor=pointer]:
                - generic [ref=f35e486]: 
                - text: Add to cart
          - list [ref=f35e488]:
            - listitem [ref=f35e489]:
              - link " View Product" [ref=f35e490] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=f35e491]: 
                - text: View Product
        - generic [ref=f35e493]:
          - generic [ref=f35e494]:
            - generic [ref=f35e495]:
              - img "ecommerce website products" [ref=f35e496]
              - heading "Rs. 1190" [level=2] [ref=f35e497]
              - paragraph [ref=f35e498]: Cotton Mull Embroidered Dress
              - generic [ref=f35e499] [cursor=pointer]:
                - generic [ref=f35e500]: 
                - text: Add to cart
            - generic [ref=f35e501]:
              - heading "Rs. 1190" [level=2] [ref=f35e502]
              - paragraph [ref=f35e503]: Cotton Mull Embroidered Dress
              - generic [ref=f35e504] [cursor=pointer]:
                - generic [ref=f35e505]: 
                - text: Add to cart
          - list [ref=f35e507]:
            - listitem [ref=f35e508]:
              - link " View Product" [ref=f35e509] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=f35e510]: 
                - text: View Product
        - generic [ref=f35e512]:
          - generic [ref=f35e513]:
            - generic [ref=f35e514]:
              - img "ecommerce website products" [ref=f35e515]
              - heading "Rs. 1530" [level=2] [ref=f35e516]
              - paragraph [ref=f35e517]: Blue Cotton Indie Mickey Dress
              - generic [ref=f35e518] [cursor=pointer]:
                - generic [ref=f35e519]: 
                - text: Add to cart
            - generic [ref=f35e520]:
              - heading "Rs. 1530" [level=2] [ref=f35e521]
              - paragraph [ref=f35e522]: Blue Cotton Indie Mickey Dress
              - generic [ref=f35e523] [cursor=pointer]:
                - generic [ref=f35e524]: 
                - text: Add to cart
          - list [ref=f35e526]:
            - listitem [ref=f35e527]:
              - link " View Product" [ref=f35e528] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=f35e529]: 
                - text: View Product
        - generic [ref=f35e531]:
          - generic [ref=f35e532]:
            - generic [ref=f35e533]:
              - img "ecommerce website products" [ref=f35e534]
              - heading "Rs. 1600" [level=2] [ref=f35e535]
              - paragraph [ref=f35e536]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f35e537] [cursor=pointer]:
                - generic [ref=f35e538]: 
                - text: Add to cart
            - generic [ref=f35e539]:
              - heading "Rs. 1600" [level=2] [ref=f35e540]
              - paragraph [ref=f35e541]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f35e542] [cursor=pointer]:
                - generic [ref=f35e543]: 
                - text: Add to cart
          - list [ref=f35e545]:
            - listitem [ref=f35e546]:
              - link " View Product" [ref=f35e547] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=f35e548]: 
                - text: View Product
        - generic [ref=f35e550]:
          - generic [ref=f35e551]:
            - generic [ref=f35e552]:
              - img "ecommerce website products" [ref=f35e553]
              - heading "Rs. 1100" [level=2] [ref=f35e554]
              - paragraph [ref=f35e555]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f35e556] [cursor=pointer]:
                - generic [ref=f35e557]: 
                - text: Add to cart
            - generic [ref=f35e558]:
              - heading "Rs. 1100" [level=2] [ref=f35e559]
              - paragraph [ref=f35e560]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f35e561] [cursor=pointer]:
                - generic [ref=f35e562]: 
                - text: Add to cart
          - list [ref=f35e564]:
            - listitem [ref=f35e565]:
              - link " View Product" [ref=f35e566] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=f35e567]: 
                - text: View Product
        - generic [ref=f35e569]:
          - generic [ref=f35e570]:
            - generic [ref=f35e571]:
              - img "ecommerce website products" [ref=f35e572]
              - heading "Rs. 849" [level=2] [ref=f35e573]
              - paragraph [ref=f35e574]:
                - text: Colour Blocked Shirt – Sky Blue
                - link "QA testing services" [ref=f35e575] [cursor=pointer]
              - generic [ref=f35e579] [cursor=pointer]:
                - generic [ref=f35e580]: 
                - text: Add to cart
            - generic [ref=f35e581]:
              - heading "Rs. 849" [level=2] [ref=f35e582]
              - paragraph [ref=f35e583]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f35e584] [cursor=pointer]:
                - generic [ref=f35e585]: 
                - text: Add to cart
          - list [ref=f35e587]:
            - listitem [ref=f35e588]:
              - link " View Product" [ref=f35e589] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=f35e590]: 
                - text: View Product
        - generic [ref=f35e592]:
          - generic [ref=f35e593]:
            - generic [ref=f35e594]:
              - img "ecommerce website products" [ref=f35e595]
              - heading "Rs. 1299" [level=2] [ref=f35e596]
              - paragraph [ref=f35e597]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=f35e598] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f35e601] [cursor=pointer]:
                - generic [ref=f35e602]: 
                - text: Add to cart
            - generic [ref=f35e603]:
              - heading "Rs. 1299" [level=2] [ref=f35e604]
              - paragraph [ref=f35e605]: Pure Cotton V-Neck T-Shirt
              - generic [ref=f35e606] [cursor=pointer]:
                - generic [ref=f35e607]: 
                - text: Add to cart
          - list [ref=f35e609]:
            - listitem [ref=f35e610]:
              - link " View Product" [ref=f35e611] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=f35e612]: 
                - text: View Product
        - generic [ref=f35e614]:
          - generic [ref=f35e615]:
            - generic [ref=f35e616]:
              - img "ecommerce website products" [ref=f35e617]
              - heading "Rs. 1000" [level=2] [ref=f35e618]
              - paragraph [ref=f35e619]: Green Side Placket Detail T-Shirt
              - generic [ref=f35e620] [cursor=pointer]:
                - generic [ref=f35e621]: 
                - text: Add to cart
            - generic [ref=f35e622]:
              - heading "Rs. 1000" [level=2] [ref=f35e623]
              - paragraph [ref=f35e624]: Green Side Placket Detail T-Shirt
              - generic [ref=f35e625] [cursor=pointer]:
                - generic [ref=f35e626]: 
                - text: Add to cart
          - list [ref=f35e628]:
            - listitem [ref=f35e629]:
              - link " View Product" [ref=f35e630] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=f35e631]: 
                - text: View Product
        - generic [ref=f35e633]:
          - generic [ref=f35e634]:
            - generic [ref=f35e635]:
              - img "ecommerce website products" [ref=f35e636]
              - heading "Rs. 1500" [level=2] [ref=f35e637]
              - paragraph [ref=f35e638]: Premium Polo T-Shirts
              - generic [ref=f35e639] [cursor=pointer]:
                - generic [ref=f35e640]: 
                - text: Add to cart
            - generic [ref=f35e641]:
              - heading "Rs. 1500" [level=2] [ref=f35e642]
              - paragraph [ref=f35e643]: Premium Polo T-Shirts
              - generic [ref=f35e644] [cursor=pointer]:
                - generic [ref=f35e645]: 
                - text: Add to cart
          - list [ref=f35e647]:
            - listitem [ref=f35e648]:
              - link " View Product" [ref=f35e649] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=f35e650]: 
                - text: View Product
        - generic [ref=f35e652]:
          - generic [ref=f35e653]:
            - generic [ref=f35e654]:
              - img "ecommerce website products" [ref=f35e655]
              - heading "Rs. 850" [level=2] [ref=f35e656]
              - paragraph [ref=f35e657]: Pure Cotton Neon Green Tshirt
              - generic [ref=f35e658] [cursor=pointer]:
                - generic [ref=f35e659]: 
                - text: Add to cart
            - generic [ref=f35e660]:
              - heading "Rs. 850" [level=2] [ref=f35e661]
              - paragraph [ref=f35e662]: Pure Cotton Neon Green Tshirt
              - generic [ref=f35e663] [cursor=pointer]:
                - generic [ref=f35e664]: 
                - text: Add to cart
          - list [ref=f35e666]:
            - listitem [ref=f35e667]:
              - link " View Product" [ref=f35e668] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=f35e669]: 
                - text: View Product
        - generic [ref=f35e671]:
          - generic [ref=f35e672]:
            - generic [ref=f35e673]:
              - img "ecommerce website products" [ref=f35e674]
              - heading "Rs. 799" [level=2] [ref=f35e675]
              - paragraph [ref=f35e676]: Soft Stretch Jeans
              - generic [ref=f35e677] [cursor=pointer]:
                - generic [ref=f35e678]: 
                - text: Add to cart
            - generic [ref=f35e679]:
              - heading "Rs. 799" [level=2] [ref=f35e680]
              - paragraph [ref=f35e681]: Soft Stretch Jeans
              - generic [ref=f35e682] [cursor=pointer]:
                - generic [ref=f35e683]: 
                - text: Add to cart
          - list [ref=f35e685]:
            - listitem [ref=f35e686]:
              - link " View Product" [ref=f35e687] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=f35e688]: 
                - text: View Product
        - generic [ref=f35e690]:
          - generic [ref=f35e691]:
            - generic [ref=f35e692]:
              - img "ecommerce website products" [ref=f35e693]
              - heading "Rs. 1200" [level=2] [ref=f35e694]
              - paragraph [ref=f35e695]: Regular Fit Straight Jeans
              - generic [ref=f35e696] [cursor=pointer]:
                - generic [ref=f35e697]: 
                - text: Add to cart
            - generic [ref=f35e698]:
              - heading "Rs. 1200" [level=2] [ref=f35e699]
              - paragraph [ref=f35e700]: Regular Fit Straight Jeans
              - generic [ref=f35e701] [cursor=pointer]:
                - generic [ref=f35e702]: 
                - text: Add to cart
          - list [ref=f35e704]:
            - listitem [ref=f35e705]:
              - link " View Product" [ref=f35e706] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=f35e707]: 
                - text: View Product
        - generic [ref=f35e709]:
          - generic [ref=f35e710]:
            - generic [ref=f35e711]:
              - img "ecommerce website products" [ref=f35e712]
              - heading "Rs. 1400" [level=2] [ref=f35e713]
              - paragraph [ref=f35e714]: Grunt Blue Slim Fit Jeans
              - generic [ref=f35e715] [cursor=pointer]:
                - generic [ref=f35e716]: 
                - text: Add to cart
            - generic [ref=f35e717]:
              - heading "Rs. 1400" [level=2] [ref=f35e718]
              - paragraph [ref=f35e719]: Grunt Blue Slim Fit Jeans
              - generic [ref=f35e720] [cursor=pointer]:
                - generic [ref=f35e721]: 
                - text: Add to cart
          - list [ref=f35e723]:
            - listitem [ref=f35e724]:
              - link " View Product" [ref=f35e725] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=f35e726]: 
                - text: View Product
        - generic [ref=f35e728]:
          - generic [ref=f35e729]:
            - generic [ref=f35e730]:
              - img "ecommerce website products" [ref=f35e731]
              - heading "Rs. 2300" [level=2] [ref=f35e732]
              - paragraph [ref=f35e733]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f35e734] [cursor=pointer]:
                - generic [ref=f35e735]: 
                - text: Add to cart
            - generic [ref=f35e736]:
              - heading "Rs. 2300" [level=2] [ref=f35e737]
              - paragraph [ref=f35e738]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f35e739] [cursor=pointer]:
                - generic [ref=f35e740]: 
                - text: Add to cart
          - list [ref=f35e742]:
            - listitem [ref=f35e743]:
              - link " View Product" [ref=f35e744] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=f35e745]: 
                - text: View Product
        - generic [ref=f35e747]:
          - generic [ref=f35e748]:
            - generic [ref=f35e749]:
              - img "ecommerce website products" [ref=f35e750]
              - heading "Rs. 3000" [level=2] [ref=f35e751]
              - paragraph [ref=f35e752]: Cotton Silk Hand Block Print Saree
              - generic [ref=f35e753] [cursor=pointer]:
                - generic [ref=f35e754]: 
                - text: Add to cart
            - generic [ref=f35e755]:
              - heading "Rs. 3000" [level=2] [ref=f35e756]
              - paragraph [ref=f35e757]: Cotton Silk Hand Block Print Saree
              - generic [ref=f35e758] [cursor=pointer]:
                - generic [ref=f35e759]: 
                - text: Add to cart
          - list [ref=f35e761]:
            - listitem [ref=f35e762]:
              - link " View Product" [ref=f35e763] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=f35e764]: 
                - text: View Product
        - generic [ref=f35e766]:
          - generic [ref=f35e767]:
            - generic [ref=f35e768]:
              - img "ecommerce website products" [ref=f35e769]
              - heading "Rs. 3500" [level=2] [ref=f35e770]
              - paragraph [ref=f35e771]: Rust Red Linen Saree
              - generic [ref=f35e772] [cursor=pointer]:
                - generic [ref=f35e773]: 
                - text: Add to cart
            - generic [ref=f35e774]:
              - heading "Rs. 3500" [level=2] [ref=f35e775]
              - paragraph [ref=f35e776]: Rust Red Linen Saree
              - generic [ref=f35e777] [cursor=pointer]:
                - generic [ref=f35e778]: 
                - text: Add to cart
          - list [ref=f35e780]:
            - listitem [ref=f35e781]:
              - link " View Product" [ref=f35e782] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=f35e783]: 
                - text: View Product
        - generic [ref=f35e785]:
          - generic [ref=f35e786]:
            - generic [ref=f35e787]:
              - img "ecommerce website products" [ref=f35e788]
              - heading "Rs. 5000" [level=2] [ref=f35e789]
              - paragraph [ref=f35e790]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f35e791] [cursor=pointer]:
                - generic [ref=f35e792]: 
                - text: Add to cart
            - generic [ref=f35e793]:
              - heading "Rs. 5000" [level=2] [ref=f35e794]
              - paragraph [ref=f35e795]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f35e796] [cursor=pointer]:
                - generic [ref=f35e797]: 
                - text: Add to cart
          - list [ref=f35e799]:
            - listitem [ref=f35e800]:
              - link " View Product" [ref=f35e801] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=f35e802]: 
                - text: View Product
        - generic [ref=f35e804]:
          - generic [ref=f35e805]:
            - generic [ref=f35e806]:
              - img "ecommerce website products" [ref=f35e807]
              - heading "Rs. 1400" [level=2] [ref=f35e808]
              - paragraph [ref=f35e809]: Lace Top For Women
              - generic [ref=f35e810] [cursor=pointer]:
                - generic [ref=f35e811]: 
                - text: Add to cart
            - generic [ref=f35e812]:
              - heading "Rs. 1400" [level=2] [ref=f35e813]
              - paragraph [ref=f35e814]: Lace Top For Women
              - generic [ref=f35e815] [cursor=pointer]:
                - generic [ref=f35e816]: 
                - text: Add to cart
          - list [ref=f35e818]:
            - listitem [ref=f35e819]:
              - link " View Product" [ref=f35e820] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=f35e821]: 
                - text: View Product
        - generic [ref=f35e823]:
          - generic [ref=f35e824]:
            - generic [ref=f35e825]:
              - img "ecommerce website products" [ref=f35e826]
              - heading "Rs. 1389" [level=2] [ref=f35e827]
              - paragraph [ref=f35e828]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f35e829] [cursor=pointer]:
                - generic [ref=f35e830]: 
                - text: Add to cart
            - generic [ref=f35e831]:
              - heading "Rs. 1389" [level=2] [ref=f35e832]
              - paragraph [ref=f35e833]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f35e834] [cursor=pointer]:
                - generic [ref=f35e835]: 
                - text: Add to cart
          - list [ref=f35e837]:
            - listitem [ref=f35e838]:
              - link " View Product" [ref=f35e839] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=f35e840]: 
                - text: View Product
      - generic [ref=f35e841]:
        - heading "recommended items" [level=2] [ref=f35e842]
        - generic [ref=f35e843]:
          - generic [ref=f35e844]:
            - text:   
            - generic:
              - generic [ref=f35e848]:
                - img "ecommerce website products" [ref=f35e849]
                - heading "Rs. 1500" [level=2] [ref=f35e850]
                - paragraph [ref=f35e851]: Stylish Dress
                - generic [ref=f35e852] [cursor=pointer]:
                  - generic [ref=f35e853]: 
                  - text: Add to cart
              - generic [ref=f35e857]:
                - img "ecommerce website products" [ref=f35e858]
                - heading "Rs. 600" [level=2] [ref=f35e859]
                - paragraph [ref=f35e860]: Winter Top
                - generic [ref=f35e861] [cursor=pointer]:
                  - generic [ref=f35e862]: 
                  - text: Add to cart
              - generic [ref=f35e866]:
                - img "ecommerce website products" [ref=f35e867]
                - heading "Rs. 400" [level=2] [ref=f35e868]
                - paragraph [ref=f35e869]: Summer White Top
                - generic [ref=f35e870] [cursor=pointer]:
                  - generic [ref=f35e871]: 
                  - text: Add to cart
          - link "" [ref=f35e872] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=f35e874] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=f35e877]
  - contentinfo [ref=f35e879]:
    - generic [ref=f35e884]:
      - heading "Subscription" [level=2] [ref=f35e885]
      - generic [ref=f35e886]:
        - textbox "Your email address" [ref=f35e887]
        - button "" [ref=f35e888] [cursor=pointer]
        - paragraph [ref=f35e890]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f35e894]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=f35e895]:
    - link "Go to shopping options for API testing platforms" [ref=f35e900] [cursor=pointer]: API testing platforms
    - button "Close shopping anchor" [ref=f35e901]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test('Register user', async({page})=>{
  3  | 
  4  | await page.goto('http://automationexercise.com')
  5  | await page.waitForLoadState('networkidle')
  6  | const home=  page.locator("//a[text()=' Home']")
  7  | 
  8  | await expect(home).toBeVisible()
  9  |  
  10 | const signup=  page.locator("//a[text()=' Signup / Login']")
  11 | 
  12 | await signup.click()
  13 | const newuser= page.locator("//h2[text()='New User Signup!']")
  14 | await newuser.waitFor({ state: 'visible', timeout: 10000 })
  15 | await expect(newuser).toBeVisible()
  16 |  const name= page.locator("//input[@name='name']")
  17 | await name.fill("Mithun")
  18 | const email= page.locator("//input[@data-qa='signup-email']")
  19 | await email.fill("mithun@example11.com")
  20 | 
  21 | const signupbutton=page.locator("//button[text()='Signup']")
  22 | await signupbutton.click()
  23 | 
  24 | //const accountinfo=page.locator("//b[text()='Enter Account Information']")
  25 | //await expect(accountinfo).toBeVisible()
  26 |  const title= page .locator("//input[@value='Mr']")
  27 |  await title.click()
  28 | 
  29 |  const password = page.getByRole('textbox', { name: 'Password' });
  30 | await password.fill('MyPassword123');
  31 |  const day= page.locator("//select[@id='days']")
  32 |  await day.selectOption('10')
  33 |   const month= page .locator("//select[@id='months']")
  34 |    await month.selectOption('5')
  35 | 
  36 |    const year = page.locator("//select[@id='years']")
  37 | 
  38 |    await year.selectOption('1994')
  39 |     const newsletter=page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
  40 |     await newsletter.check();
  41 |     const offers= page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
  42 |     await offers.check();
  43 |     const firstName= page.locator("//input[@id='first_name']")
  44 |     await firstName.fill("Mithun")
  45 |     const lastName= page.locator("//input[@id='last_name']")
  46 |     await lastName.fill("Mishra")
  47 |     const company= page.locator("//input[@id='company']")
  48 |     await company.fill("ABC Company")
  49 |     const address1= page.locator("//input[@id='address1']")
  50 |     await address1.fill("123 Main Street")
  51 |     const address2= page.locator("//input[@id='address2']")
  52 |     await address2.fill("Apt 4B")
  53 |     const country= page.locator("//select[@id='country']")
  54 |     await country.selectOption('Canada')
  55 |     const state= page.locator("//input[@id='state']")
  56 |     await state.fill("Ontario")
  57 |     const city= page.locator("//input[@id='city']")
  58 |     await city.fill("Toronto")
  59 |     const zipcode= page.locator("//input[@id='zipcode']")
  60 |     await zipcode.fill("M5V 2H1")
  61 |     const mobileNumber= page.locator("//input[@id='mobile_number']")
  62 |     await mobileNumber.fill("+1 416-123-4567")
  63 |     const createAccountButton= page.locator("//button[text()='Create Account']")
  64 |     await createAccountButton.click()
  65 |     const accountCreatedMessage= page.locator("//b[text()='Account Created!']")
  66 |     await expect(accountCreatedMessage).toBeVisible()
  67 |     const continueButton= page.locator("//a[text()='Continue']")
  68 |     await continueButton.click()
  69 |     //const accountCreated= page .locator("//b[text()='Account Created!']")
  70 |      //await expect(accountCreated).toBeVisible()
  71 |       const continueButton2=page.locator("//a[text()='Continue']")
> 72 |        await continueButton2.click()
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  73 | 
  74 |        //const loggedInAs= page.locator("//a[text()=' Logged in as '] ")
  75 |        // await expect(loggedInAs).toBeVisible()
  76 |          const deleteAccount= page.locator("//a[text()=' Delete Account'] ")
  77 | 
  78 |          await deleteAccount.click()
  79 |           const accountDeleted = page.locator("//b[text()='Account Deleted!']")
  80 |           await accountDeleted.waitFor({ state: 'visible', timeout: 10000 })
  81 |           await expect(accountDeleted).toBeVisible()
  82 |               const continueButton3= page.locator("//a[text()='Continue']") 
  83 |                await continueButton3.click()
  84 |     
  85 | 
  86 | 
  87 | 
  88 | 
  89 | })
```