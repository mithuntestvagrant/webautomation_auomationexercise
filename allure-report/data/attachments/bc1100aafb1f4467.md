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
- generic [active] [ref=f33e1]:
  - banner [ref=f33e2]:
    - generic [ref=f33e5]:
      - link [ref=f33e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f33e9]
      - list [ref=f33e12]:
        - listitem [ref=f33e13]:
          - link " Home" [ref=f33e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f33e15]: 
            - text: Home
        - listitem [ref=f33e16]:
          - link " Products" [ref=f33e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f33e18]: 
            - text: Products
        - listitem [ref=f33e19]:
          - link " Cart" [ref=f33e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f33e21]: 
            - text: Cart
        - listitem [ref=f33e22]:
          - link " Logout" [ref=f33e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f33e24]: 
            - text: Logout
        - listitem [ref=f33e25]:
          - link " Delete Account" [ref=f33e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f33e27]: 
            - text: Delete Account
        - listitem [ref=f33e28]:
          - link " Test Cases" [ref=f33e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f33e30]: 
            - text: Test Cases
        - listitem [ref=f33e31]:
          - link " API Testing" [ref=f33e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f33e33]: 
            - text: API Testing
        - listitem [ref=f33e34]:
          - link " Video Tutorials" [ref=f33e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f33e36]: 
            - text: Video Tutorials
        - listitem [ref=f33e37]:
          - link " Contact us" [ref=f33e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f33e39]: 
            - text: Contact us
        - listitem [ref=f33e40]:
          - generic [ref=f33e41]:
            - generic [ref=f33e42]: 
            - text: Logged in as Mithun
  - generic [ref=f33e47]:
    - list [ref=f33e48]:
      - listitem [ref=f33e49] [cursor=pointer]
      - listitem [ref=f33e50] [cursor=pointer]
      - listitem [ref=f33e51] [cursor=pointer]
    - generic [ref=f33e52]:
      - generic:
        - generic [ref=f33e53]:
          - heading "AutomationExercise" [level=1] [ref=f33e54]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=f33e55]
          - paragraph [ref=f33e56]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=f33e57] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=f33e58]
          - link [ref=f33e59] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=f33e60]
        - img "demo website for practice" [ref=f33e62]
    - link "" [ref=f33e63] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=f33e65] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=f33e69]:
    - generic [ref=f33e71]:
      - heading "Category" [level=2] [ref=f33e72]
      - generic [ref=f33e73]:
        - heading [level=4] [ref=f33e76]:
          - link " Women" [ref=f33e77] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f33e78]: 
            - text: Women
        - heading [level=4] [ref=f33e82]:
          - link " Men" [ref=f33e83] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f33e84]: 
            - text: Men
        - heading [level=4] [ref=f33e88]:
          - link " Kids" [ref=f33e89] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f33e90]: 
            - text: Kids
      - insertion [ref=f33e93]:
        - generic [ref=f33e96]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f33e98]: Discover more
          - link "Internet & Telecom" [ref=f33e99] [cursor=pointer]
          - link "Automation testing eBooks" [ref=f33e104] [cursor=pointer]
          - link "Sarees" [ref=f33e109] [cursor=pointer]
          - link "API documentation tools" [ref=f33e114] [cursor=pointer]
          - link "Test automation tools" [ref=f33e119] [cursor=pointer]
          - link "API testing platforms" [ref=f33e124] [cursor=pointer]
          - link "Software testing webinars" [ref=f33e129] [cursor=pointer]
          - link "Quality assurance training" [ref=f33e134] [cursor=pointer]
      - generic [ref=f33e139]:
        - heading "Brands" [level=2] [ref=f33e140]
        - list [ref=f33e142]:
          - listitem [ref=f33e143]:
            - link "(6) Polo" [ref=f33e144] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f33e145]: (6)
              - text: Polo
          - listitem [ref=f33e146]:
            - link "(5) H&M" [ref=f33e147] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f33e148]: (5)
              - text: H&M
          - listitem [ref=f33e149]:
            - link "(5) Madame" [ref=f33e150] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f33e151]: (5)
              - text: Madame
          - listitem [ref=f33e152]:
            - link "(3) Mast & Harbour" [ref=f33e153] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f33e154]: (3)
              - text: Mast & Harbour
          - listitem [ref=f33e155]:
            - link "(4) Babyhug" [ref=f33e156] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f33e157]: (4)
              - text: Babyhug
          - listitem [ref=f33e158]:
            - link "(3) Allen Solly Junior" [ref=f33e159] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f33e160]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f33e161]:
            - link "(3) Kookie Kids" [ref=f33e162] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f33e163]: (3)
              - text: Kookie Kids
          - listitem [ref=f33e164]:
            - link "(5) Biba" [ref=f33e165] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f33e166]: (5)
              - text: Biba
    - generic [ref=f33e167]:
      - generic [ref=f33e168]:
        - heading "Features Items" [level=2] [ref=f33e169]
        - generic [ref=f33e171]:
          - generic [ref=f33e172]:
            - generic [ref=f33e173]:
              - img "ecommerce website products" [ref=f33e174]
              - heading "Rs. 500" [level=2] [ref=f33e175]
              - paragraph [ref=f33e176]: Blue Top
              - generic [ref=f33e177] [cursor=pointer]:
                - generic [ref=f33e178]: 
                - text: Add to cart
            - generic [ref=f33e179]:
              - heading "Rs. 500" [level=2] [ref=f33e180]
              - paragraph [ref=f33e181]: Blue Top
              - generic [ref=f33e182] [cursor=pointer]:
                - generic [ref=f33e183]: 
                - text: Add to cart
          - list [ref=f33e185]:
            - listitem [ref=f33e186]:
              - link " View Product" [ref=f33e187] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=f33e188]: 
                - text: View Product
        - generic [ref=f33e190]:
          - generic [ref=f33e191]:
            - generic [ref=f33e192]:
              - img "ecommerce website products" [ref=f33e193]
              - heading "Rs. 400" [level=2] [ref=f33e194]
              - paragraph [ref=f33e195]:
                - text: Men
                - link "Tshirt" [ref=f33e196] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f33e199] [cursor=pointer]:
                - generic [ref=f33e200]: 
                - text: Add to cart
            - generic [ref=f33e201]:
              - heading "Rs. 400" [level=2] [ref=f33e202]
              - paragraph [ref=f33e203]: Men Tshirt
              - generic [ref=f33e204] [cursor=pointer]:
                - generic [ref=f33e205]: 
                - text: Add to cart
          - list [ref=f33e207]:
            - listitem [ref=f33e208]:
              - link " View Product" [ref=f33e209] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=f33e210]: 
                - text: View Product
        - generic [ref=f33e212]:
          - generic [ref=f33e213]:
            - generic [ref=f33e214]:
              - img "ecommerce website products" [ref=f33e215]
              - heading "Rs. 1000" [level=2] [ref=f33e216]
              - paragraph [ref=f33e217]:
                - text: Sleeveless
                - link "Dress" [ref=f33e218] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f33e221] [cursor=pointer]:
                - generic [ref=f33e222]: 
                - text: Add to cart
            - generic [ref=f33e223]:
              - heading "Rs. 1000" [level=2] [ref=f33e224]
              - paragraph [ref=f33e225]: Sleeveless Dress
              - generic [ref=f33e226] [cursor=pointer]:
                - generic [ref=f33e227]: 
                - text: Add to cart
          - list [ref=f33e229]:
            - listitem [ref=f33e230]:
              - link " View Product" [ref=f33e231] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=f33e232]: 
                - text: View Product
        - generic [ref=f33e234]:
          - generic [ref=f33e235]:
            - generic [ref=f33e236]:
              - img "ecommerce website products" [ref=f33e237]
              - heading "Rs. 1500" [level=2] [ref=f33e238]
              - paragraph [ref=f33e239]: Stylish Dress
              - generic [ref=f33e240] [cursor=pointer]:
                - generic [ref=f33e241]: 
                - text: Add to cart
            - generic [ref=f33e242]:
              - heading "Rs. 1500" [level=2] [ref=f33e243]
              - paragraph [ref=f33e244]: Stylish Dress
              - generic [ref=f33e245] [cursor=pointer]:
                - generic [ref=f33e246]: 
                - text: Add to cart
          - list [ref=f33e248]:
            - listitem [ref=f33e249]:
              - link " View Product" [ref=f33e250] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=f33e251]: 
                - text: View Product
        - generic [ref=f33e253]:
          - generic [ref=f33e254]:
            - generic [ref=f33e255]:
              - img "ecommerce website products" [ref=f33e256]
              - heading "Rs. 600" [level=2] [ref=f33e257]
              - paragraph [ref=f33e258]: Winter Top
              - generic [ref=f33e259] [cursor=pointer]:
                - generic [ref=f33e260]: 
                - text: Add to cart
            - generic [ref=f33e261]:
              - heading "Rs. 600" [level=2] [ref=f33e262]
              - paragraph [ref=f33e263]: Winter Top
              - generic [ref=f33e264] [cursor=pointer]:
                - generic [ref=f33e265]: 
                - text: Add to cart
          - list [ref=f33e267]:
            - listitem [ref=f33e268]:
              - link " View Product" [ref=f33e269] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=f33e270]: 
                - text: View Product
        - generic [ref=f33e272]:
          - generic [ref=f33e273]:
            - generic [ref=f33e274]:
              - img "ecommerce website products" [ref=f33e275]
              - heading "Rs. 400" [level=2] [ref=f33e276]
              - paragraph [ref=f33e277]: Summer White Top
              - generic [ref=f33e278] [cursor=pointer]:
                - generic [ref=f33e279]: 
                - text: Add to cart
            - generic [ref=f33e280]:
              - heading "Rs. 400" [level=2] [ref=f33e281]
              - paragraph [ref=f33e282]: Summer White Top
              - generic [ref=f33e283] [cursor=pointer]:
                - generic [ref=f33e284]: 
                - text: Add to cart
          - list [ref=f33e286]:
            - listitem [ref=f33e287]:
              - link " View Product" [ref=f33e288] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=f33e289]: 
                - text: View Product
        - generic [ref=f33e291]:
          - generic [ref=f33e292]:
            - generic [ref=f33e293]:
              - img "ecommerce website products" [ref=f33e294]
              - heading "Rs. 1000" [level=2] [ref=f33e295]
              - paragraph [ref=f33e296]: Madame Top For Women
              - generic [ref=f33e297] [cursor=pointer]:
                - generic [ref=f33e298]: 
                - text: Add to cart
            - generic [ref=f33e299]:
              - heading "Rs. 1000" [level=2] [ref=f33e300]
              - paragraph [ref=f33e301]: Madame Top For Women
              - generic [ref=f33e302] [cursor=pointer]:
                - generic [ref=f33e303]: 
                - text: Add to cart
          - list [ref=f33e305]:
            - listitem [ref=f33e306]:
              - link " View Product" [ref=f33e307] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=f33e308]: 
                - text: View Product
        - generic [ref=f33e310]:
          - generic [ref=f33e311]:
            - generic [ref=f33e312]:
              - img "ecommerce website products" [ref=f33e313]
              - heading "Rs. 700" [level=2] [ref=f33e314]
              - paragraph [ref=f33e315]: Fancy Green Top
              - generic [ref=f33e316] [cursor=pointer]:
                - generic [ref=f33e317]: 
                - text: Add to cart
            - generic [ref=f33e318]:
              - heading "Rs. 700" [level=2] [ref=f33e319]
              - paragraph [ref=f33e320]: Fancy Green Top
              - generic [ref=f33e321] [cursor=pointer]:
                - generic [ref=f33e322]: 
                - text: Add to cart
          - list [ref=f33e324]:
            - listitem [ref=f33e325]:
              - link " View Product" [ref=f33e326] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=f33e327]: 
                - text: View Product
        - generic [ref=f33e329]:
          - generic [ref=f33e330]:
            - generic [ref=f33e331]:
              - img "ecommerce website products" [ref=f33e332]
              - heading "Rs. 499" [level=2] [ref=f33e333]
              - paragraph [ref=f33e334]:
                - text: Sleeves Printed Top - White
                - link "Website hosting services" [ref=f33e335] [cursor=pointer]
              - generic [ref=f33e339] [cursor=pointer]:
                - generic [ref=f33e340]: 
                - text: Add to cart
            - generic [ref=f33e341]:
              - heading "Rs. 499" [level=2] [ref=f33e342]
              - paragraph [ref=f33e343]: Sleeves Printed Top - White
              - generic [ref=f33e344] [cursor=pointer]:
                - generic [ref=f33e345]: 
                - text: Add to cart
          - list [ref=f33e347]:
            - listitem [ref=f33e348]:
              - link " View Product" [ref=f33e349] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=f33e350]: 
                - text: View Product
        - generic [ref=f33e352]:
          - generic [ref=f33e353]:
            - generic [ref=f33e354]:
              - img "ecommerce website products" [ref=f33e355]
              - heading "Rs. 359" [level=2] [ref=f33e356]
              - paragraph [ref=f33e357]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "Quality assurance software" [ref=f33e358] [cursor=pointer]
              - generic [ref=f33e362] [cursor=pointer]:
                - generic [ref=f33e363]: 
                - text: Add to cart
            - generic [ref=f33e364]:
              - heading "Rs. 359" [level=2] [ref=f33e365]
              - paragraph [ref=f33e366]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f33e367] [cursor=pointer]:
                - generic [ref=f33e368]: 
                - text: Add to cart
          - list [ref=f33e370]:
            - listitem [ref=f33e371]:
              - link " View Product" [ref=f33e372] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=f33e373]: 
                - text: View Product
        - generic [ref=f33e375]:
          - generic [ref=f33e376]:
            - generic [ref=f33e377]:
              - img "ecommerce website products" [ref=f33e378]
              - heading "Rs. 278" [level=2] [ref=f33e379]
              - paragraph [ref=f33e380]: Frozen Tops For Kids
              - generic [ref=f33e381] [cursor=pointer]:
                - generic [ref=f33e382]: 
                - text: Add to cart
            - generic [ref=f33e383]:
              - heading "Rs. 278" [level=2] [ref=f33e384]
              - paragraph [ref=f33e385]: Frozen Tops For Kids
              - generic [ref=f33e386] [cursor=pointer]:
                - generic [ref=f33e387]: 
                - text: Add to cart
          - list [ref=f33e389]:
            - listitem [ref=f33e390]:
              - link " View Product" [ref=f33e391] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=f33e392]: 
                - text: View Product
        - generic [ref=f33e394]:
          - generic [ref=f33e395]:
            - generic [ref=f33e396]:
              - img "ecommerce website products" [ref=f33e397]
              - heading "Rs. 679" [level=2] [ref=f33e398]
              - paragraph [ref=f33e399]: Full Sleeves Top Cherry - Pink
              - generic [ref=f33e400] [cursor=pointer]:
                - generic [ref=f33e401]: 
                - text: Add to cart
            - generic [ref=f33e402]:
              - heading "Rs. 679" [level=2] [ref=f33e403]
              - paragraph [ref=f33e404]: Full Sleeves Top Cherry - Pink
              - generic [ref=f33e405] [cursor=pointer]:
                - generic [ref=f33e406]: 
                - text: Add to cart
          - list [ref=f33e408]:
            - listitem [ref=f33e409]:
              - link " View Product" [ref=f33e410] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=f33e411]: 
                - text: View Product
        - generic [ref=f33e413]:
          - generic [ref=f33e414]:
            - generic [ref=f33e415]:
              - img "ecommerce website products" [ref=f33e416]
              - heading "Rs. 315" [level=2] [ref=f33e417]
              - paragraph [ref=f33e418]: Printed Off Shoulder Top - White
              - generic [ref=f33e419] [cursor=pointer]:
                - generic [ref=f33e420]: 
                - text: Add to cart
            - generic [ref=f33e421]:
              - heading "Rs. 315" [level=2] [ref=f33e422]
              - paragraph [ref=f33e423]: Printed Off Shoulder Top - White
              - generic [ref=f33e424] [cursor=pointer]:
                - generic [ref=f33e425]: 
                - text: Add to cart
          - list [ref=f33e427]:
            - listitem [ref=f33e428]:
              - link " View Product" [ref=f33e429] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=f33e430]: 
                - text: View Product
        - generic [ref=f33e432]:
          - generic [ref=f33e433]:
            - generic [ref=f33e434]:
              - img "ecommerce website products" [ref=f33e435]
              - heading "Rs. 478" [level=2] [ref=f33e436]
              - paragraph [ref=f33e437]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f33e438] [cursor=pointer]:
                - generic [ref=f33e439]: 
                - text: Add to cart
            - generic [ref=f33e440]:
              - heading "Rs. 478" [level=2] [ref=f33e441]
              - paragraph [ref=f33e442]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f33e443] [cursor=pointer]:
                - generic [ref=f33e444]: 
                - text: Add to cart
          - list [ref=f33e446]:
            - listitem [ref=f33e447]:
              - link " View Product" [ref=f33e448] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=f33e449]: 
                - text: View Product
        - generic [ref=f33e451]:
          - generic [ref=f33e452]:
            - generic [ref=f33e453]:
              - img "ecommerce website products" [ref=f33e454]
              - heading "Rs. 1200" [level=2] [ref=f33e455]
              - paragraph [ref=f33e456]: Little Girls Mr. Panda Shirt
              - generic [ref=f33e457] [cursor=pointer]:
                - generic [ref=f33e458]: 
                - text: Add to cart
            - generic [ref=f33e459]:
              - heading "Rs. 1200" [level=2] [ref=f33e460]
              - paragraph [ref=f33e461]: Little Girls Mr. Panda Shirt
              - generic [ref=f33e462] [cursor=pointer]:
                - generic [ref=f33e463]: 
                - text: Add to cart
          - list [ref=f33e465]:
            - listitem [ref=f33e466]:
              - link " View Product" [ref=f33e467] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=f33e468]: 
                - text: View Product
        - generic [ref=f33e470]:
          - generic [ref=f33e471]:
            - generic [ref=f33e472]:
              - img "ecommerce website products" [ref=f33e473]
              - heading "Rs. 1050" [level=2] [ref=f33e474]
              - paragraph [ref=f33e475]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f33e476] [cursor=pointer]:
                - generic [ref=f33e477]: 
                - text: Add to cart
            - generic [ref=f33e478]:
              - heading "Rs. 1050" [level=2] [ref=f33e479]
              - paragraph [ref=f33e480]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f33e481] [cursor=pointer]:
                - generic [ref=f33e482]: 
                - text: Add to cart
          - list [ref=f33e484]:
            - listitem [ref=f33e485]:
              - link " View Product" [ref=f33e486] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=f33e487]: 
                - text: View Product
        - generic [ref=f33e489]:
          - generic [ref=f33e490]:
            - generic [ref=f33e491]:
              - img "ecommerce website products" [ref=f33e492]
              - heading "Rs. 1190" [level=2] [ref=f33e493]
              - paragraph [ref=f33e494]: Cotton Mull Embroidered Dress
              - generic [ref=f33e495] [cursor=pointer]:
                - generic [ref=f33e496]: 
                - text: Add to cart
            - generic [ref=f33e497]:
              - heading "Rs. 1190" [level=2] [ref=f33e498]
              - paragraph [ref=f33e499]: Cotton Mull Embroidered Dress
              - generic [ref=f33e500] [cursor=pointer]:
                - generic [ref=f33e501]: 
                - text: Add to cart
          - list [ref=f33e503]:
            - listitem [ref=f33e504]:
              - link " View Product" [ref=f33e505] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=f33e506]: 
                - text: View Product
        - generic [ref=f33e508]:
          - generic [ref=f33e509]:
            - generic [ref=f33e510]:
              - img "ecommerce website products" [ref=f33e511]
              - heading "Rs. 1530" [level=2] [ref=f33e512]
              - paragraph [ref=f33e513]: Blue Cotton Indie Mickey Dress
              - generic [ref=f33e514] [cursor=pointer]:
                - generic [ref=f33e515]: 
                - text: Add to cart
            - generic [ref=f33e516]:
              - heading "Rs. 1530" [level=2] [ref=f33e517]
              - paragraph [ref=f33e518]: Blue Cotton Indie Mickey Dress
              - generic [ref=f33e519] [cursor=pointer]:
                - generic [ref=f33e520]: 
                - text: Add to cart
          - list [ref=f33e522]:
            - listitem [ref=f33e523]:
              - link " View Product" [ref=f33e524] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=f33e525]: 
                - text: View Product
        - generic [ref=f33e527]:
          - generic [ref=f33e528]:
            - generic [ref=f33e529]:
              - img "ecommerce website products" [ref=f33e530]
              - heading "Rs. 1600" [level=2] [ref=f33e531]
              - paragraph [ref=f33e532]:
                - text: Long Maxi Tulle Fancy Dress Up Outfits -Pink
                - link "API testing tutorials" [ref=f33e533] [cursor=pointer]
              - generic [ref=f33e537] [cursor=pointer]:
                - generic [ref=f33e538]: 
                - text: Add to cart
            - generic [ref=f33e539]:
              - heading "Rs. 1600" [level=2] [ref=f33e540]
              - paragraph [ref=f33e541]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f33e542] [cursor=pointer]:
                - generic [ref=f33e543]: 
                - text: Add to cart
          - list [ref=f33e545]:
            - listitem [ref=f33e546]:
              - link " View Product" [ref=f33e547] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=f33e548]: 
                - text: View Product
        - generic [ref=f33e550]:
          - generic [ref=f33e551]:
            - generic [ref=f33e552]:
              - img "ecommerce website products" [ref=f33e553]
              - heading "Rs. 1100" [level=2] [ref=f33e554]
              - paragraph [ref=f33e555]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f33e556] [cursor=pointer]:
                - generic [ref=f33e557]: 
                - text: Add to cart
            - generic [ref=f33e558]:
              - heading "Rs. 1100" [level=2] [ref=f33e559]
              - paragraph [ref=f33e560]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f33e561] [cursor=pointer]:
                - generic [ref=f33e562]: 
                - text: Add to cart
          - list [ref=f33e564]:
            - listitem [ref=f33e565]:
              - link " View Product" [ref=f33e566] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=f33e567]: 
                - text: View Product
        - generic [ref=f33e569]:
          - generic [ref=f33e570]:
            - generic [ref=f33e571]:
              - img "ecommerce website products" [ref=f33e572]
              - heading "Rs. 849" [level=2] [ref=f33e573]
              - paragraph [ref=f33e574]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f33e575] [cursor=pointer]:
                - generic [ref=f33e576]: 
                - text: Add to cart
            - generic [ref=f33e577]:
              - heading "Rs. 849" [level=2] [ref=f33e578]
              - paragraph [ref=f33e579]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f33e580] [cursor=pointer]:
                - generic [ref=f33e581]: 
                - text: Add to cart
          - list [ref=f33e583]:
            - listitem [ref=f33e584]:
              - link " View Product" [ref=f33e585] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=f33e586]: 
                - text: View Product
        - generic [ref=f33e588]:
          - generic [ref=f33e589]:
            - generic [ref=f33e590]:
              - img "ecommerce website products" [ref=f33e591]
              - heading "Rs. 1299" [level=2] [ref=f33e592]
              - paragraph [ref=f33e593]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=f33e594] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f33e597] [cursor=pointer]:
                - generic [ref=f33e598]: 
                - text: Add to cart
            - generic [ref=f33e599]:
              - heading "Rs. 1299" [level=2] [ref=f33e600]
              - paragraph [ref=f33e601]: Pure Cotton V-Neck T-Shirt
              - generic [ref=f33e602] [cursor=pointer]:
                - generic [ref=f33e603]: 
                - text: Add to cart
          - list [ref=f33e605]:
            - listitem [ref=f33e606]:
              - link " View Product" [ref=f33e607] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=f33e608]: 
                - text: View Product
        - generic [ref=f33e610]:
          - generic [ref=f33e611]:
            - generic [ref=f33e612]:
              - img "ecommerce website products" [ref=f33e613]
              - heading "Rs. 1000" [level=2] [ref=f33e614]
              - paragraph [ref=f33e615]: Green Side Placket Detail T-Shirt
              - generic [ref=f33e616] [cursor=pointer]:
                - generic [ref=f33e617]: 
                - text: Add to cart
            - generic [ref=f33e618]:
              - heading "Rs. 1000" [level=2] [ref=f33e619]
              - paragraph [ref=f33e620]: Green Side Placket Detail T-Shirt
              - generic [ref=f33e621] [cursor=pointer]:
                - generic [ref=f33e622]: 
                - text: Add to cart
          - list [ref=f33e624]:
            - listitem [ref=f33e625]:
              - link " View Product" [ref=f33e626] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=f33e627]: 
                - text: View Product
        - generic [ref=f33e629]:
          - generic [ref=f33e630]:
            - generic [ref=f33e631]:
              - img "ecommerce website products" [ref=f33e632]
              - heading "Rs. 1500" [level=2] [ref=f33e633]
              - paragraph [ref=f33e634]: Premium Polo T-Shirts
              - generic [ref=f33e635] [cursor=pointer]:
                - generic [ref=f33e636]: 
                - text: Add to cart
            - generic [ref=f33e637]:
              - heading "Rs. 1500" [level=2] [ref=f33e638]
              - paragraph [ref=f33e639]: Premium Polo T-Shirts
              - generic [ref=f33e640] [cursor=pointer]:
                - generic [ref=f33e641]: 
                - text: Add to cart
          - list [ref=f33e643]:
            - listitem [ref=f33e644]:
              - link " View Product" [ref=f33e645] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=f33e646]: 
                - text: View Product
        - generic [ref=f33e648]:
          - generic [ref=f33e649]:
            - generic [ref=f33e650]:
              - img "ecommerce website products" [ref=f33e651]
              - heading "Rs. 850" [level=2] [ref=f33e652]
              - paragraph [ref=f33e653]: Pure Cotton Neon Green Tshirt
              - generic [ref=f33e654] [cursor=pointer]:
                - generic [ref=f33e655]: 
                - text: Add to cart
            - generic [ref=f33e656]:
              - heading "Rs. 850" [level=2] [ref=f33e657]
              - paragraph [ref=f33e658]: Pure Cotton Neon Green Tshirt
              - generic [ref=f33e659] [cursor=pointer]:
                - generic [ref=f33e660]: 
                - text: Add to cart
          - list [ref=f33e662]:
            - listitem [ref=f33e663]:
              - link " View Product" [ref=f33e664] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=f33e665]: 
                - text: View Product
        - generic [ref=f33e667]:
          - generic [ref=f33e668]:
            - generic [ref=f33e669]:
              - img "ecommerce website products" [ref=f33e670]
              - heading "Rs. 799" [level=2] [ref=f33e671]
              - paragraph [ref=f33e672]: Soft Stretch Jeans
              - generic [ref=f33e673] [cursor=pointer]:
                - generic [ref=f33e674]: 
                - text: Add to cart
            - generic [ref=f33e675]:
              - heading "Rs. 799" [level=2] [ref=f33e676]
              - paragraph [ref=f33e677]: Soft Stretch Jeans
              - generic [ref=f33e678] [cursor=pointer]:
                - generic [ref=f33e679]: 
                - text: Add to cart
          - list [ref=f33e681]:
            - listitem [ref=f33e682]:
              - link " View Product" [ref=f33e683] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=f33e684]: 
                - text: View Product
        - generic [ref=f33e686]:
          - generic [ref=f33e687]:
            - generic [ref=f33e688]:
              - img "ecommerce website products" [ref=f33e689]
              - heading "Rs. 1200" [level=2] [ref=f33e690]
              - paragraph [ref=f33e691]: Regular Fit Straight Jeans
              - generic [ref=f33e692] [cursor=pointer]:
                - generic [ref=f33e693]: 
                - text: Add to cart
            - generic [ref=f33e694]:
              - heading "Rs. 1200" [level=2] [ref=f33e695]
              - paragraph [ref=f33e696]: Regular Fit Straight Jeans
              - generic [ref=f33e697] [cursor=pointer]:
                - generic [ref=f33e698]: 
                - text: Add to cart
          - list [ref=f33e700]:
            - listitem [ref=f33e701]:
              - link " View Product" [ref=f33e702] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=f33e703]: 
                - text: View Product
        - generic [ref=f33e705]:
          - generic [ref=f33e706]:
            - generic [ref=f33e707]:
              - img "ecommerce website products" [ref=f33e708]
              - heading "Rs. 1400" [level=2] [ref=f33e709]
              - paragraph [ref=f33e710]: Grunt Blue Slim Fit Jeans
              - generic [ref=f33e711] [cursor=pointer]:
                - generic [ref=f33e712]: 
                - text: Add to cart
            - generic [ref=f33e713]:
              - heading "Rs. 1400" [level=2] [ref=f33e714]
              - paragraph [ref=f33e715]: Grunt Blue Slim Fit Jeans
              - generic [ref=f33e716] [cursor=pointer]:
                - generic [ref=f33e717]: 
                - text: Add to cart
          - list [ref=f33e719]:
            - listitem [ref=f33e720]:
              - link " View Product" [ref=f33e721] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=f33e722]: 
                - text: View Product
        - generic [ref=f33e724]:
          - generic [ref=f33e725]:
            - generic [ref=f33e726]:
              - img "ecommerce website products" [ref=f33e727]
              - heading "Rs. 2300" [level=2] [ref=f33e728]
              - paragraph [ref=f33e729]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f33e730] [cursor=pointer]:
                - generic [ref=f33e731]: 
                - text: Add to cart
            - generic [ref=f33e732]:
              - heading "Rs. 2300" [level=2] [ref=f33e733]
              - paragraph [ref=f33e734]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f33e735] [cursor=pointer]:
                - generic [ref=f33e736]: 
                - text: Add to cart
          - list [ref=f33e738]:
            - listitem [ref=f33e739]:
              - link " View Product" [ref=f33e740] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=f33e741]: 
                - text: View Product
        - generic [ref=f33e743]:
          - generic [ref=f33e744]:
            - generic [ref=f33e745]:
              - img "ecommerce website products" [ref=f33e746]
              - heading "Rs. 3000" [level=2] [ref=f33e747]
              - paragraph [ref=f33e748]: Cotton Silk Hand Block Print Saree
              - generic [ref=f33e749] [cursor=pointer]:
                - generic [ref=f33e750]: 
                - text: Add to cart
            - generic [ref=f33e751]:
              - heading "Rs. 3000" [level=2] [ref=f33e752]
              - paragraph [ref=f33e753]: Cotton Silk Hand Block Print Saree
              - generic [ref=f33e754] [cursor=pointer]:
                - generic [ref=f33e755]: 
                - text: Add to cart
          - list [ref=f33e757]:
            - listitem [ref=f33e758]:
              - link " View Product" [ref=f33e759] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=f33e760]: 
                - text: View Product
        - generic [ref=f33e762]:
          - generic [ref=f33e763]:
            - generic [ref=f33e764]:
              - img "ecommerce website products" [ref=f33e765]
              - heading "Rs. 3500" [level=2] [ref=f33e766]
              - paragraph [ref=f33e767]: Rust Red Linen Saree
              - generic [ref=f33e768] [cursor=pointer]:
                - generic [ref=f33e769]: 
                - text: Add to cart
            - generic [ref=f33e770]:
              - heading "Rs. 3500" [level=2] [ref=f33e771]
              - paragraph [ref=f33e772]: Rust Red Linen Saree
              - generic [ref=f33e773] [cursor=pointer]:
                - generic [ref=f33e774]: 
                - text: Add to cart
          - list [ref=f33e776]:
            - listitem [ref=f33e777]:
              - link " View Product" [ref=f33e778] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=f33e779]: 
                - text: View Product
        - generic [ref=f33e781]:
          - generic [ref=f33e782]:
            - generic [ref=f33e783]:
              - img "ecommerce website products" [ref=f33e784]
              - heading "Rs. 5000" [level=2] [ref=f33e785]
              - paragraph [ref=f33e786]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f33e787] [cursor=pointer]:
                - generic [ref=f33e788]: 
                - text: Add to cart
            - generic [ref=f33e789]:
              - heading "Rs. 5000" [level=2] [ref=f33e790]
              - paragraph [ref=f33e791]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f33e792] [cursor=pointer]:
                - generic [ref=f33e793]: 
                - text: Add to cart
          - list [ref=f33e795]:
            - listitem [ref=f33e796]:
              - link " View Product" [ref=f33e797] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=f33e798]: 
                - text: View Product
        - generic [ref=f33e800]:
          - generic [ref=f33e801]:
            - generic [ref=f33e802]:
              - img "ecommerce website products" [ref=f33e803]
              - heading "Rs. 1400" [level=2] [ref=f33e804]
              - paragraph [ref=f33e805]: Lace Top For Women
              - generic [ref=f33e806] [cursor=pointer]:
                - generic [ref=f33e807]: 
                - text: Add to cart
            - generic [ref=f33e808]:
              - heading "Rs. 1400" [level=2] [ref=f33e809]
              - paragraph [ref=f33e810]: Lace Top For Women
              - generic [ref=f33e811] [cursor=pointer]:
                - generic [ref=f33e812]: 
                - text: Add to cart
          - list [ref=f33e814]:
            - listitem [ref=f33e815]:
              - link " View Product" [ref=f33e816] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=f33e817]: 
                - text: View Product
        - generic [ref=f33e819]:
          - generic [ref=f33e820]:
            - generic [ref=f33e821]:
              - img "ecommerce website products" [ref=f33e822]
              - heading "Rs. 1389" [level=2] [ref=f33e823]
              - paragraph [ref=f33e824]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "Software testing courses" [ref=f33e825] [cursor=pointer]
              - generic [ref=f33e829] [cursor=pointer]:
                - generic [ref=f33e830]: 
                - text: Add to cart
            - generic [ref=f33e831]:
              - heading "Rs. 1389" [level=2] [ref=f33e832]
              - paragraph [ref=f33e833]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f33e834] [cursor=pointer]:
                - generic [ref=f33e835]: 
                - text: Add to cart
          - list [ref=f33e837]:
            - listitem [ref=f33e838]:
              - link " View Product" [ref=f33e839] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=f33e840]: 
                - text: View Product
      - generic [ref=f33e841]:
        - heading "recommended items" [level=2] [ref=f33e842]
        - generic [ref=f33e843]:
          - generic [ref=f33e844]:
            - generic:
              - generic [ref=f33e848]:
                - img "ecommerce website products" [ref=f33e849]
                - heading "Rs. 500" [level=2] [ref=f33e850]
                - paragraph [ref=f33e851]: Blue Top
                - generic [ref=f33e852] [cursor=pointer]:
                  - generic [ref=f33e853]: 
                  - text: Add to cart
              - generic [ref=f33e857]:
                - img "ecommerce website products" [ref=f33e858]
                - heading "Rs. 400" [level=2] [ref=f33e859]
                - paragraph [ref=f33e860]: Men Tshirt
                - generic [ref=f33e861] [cursor=pointer]:
                  - generic [ref=f33e862]: 
                  - text: Add to cart
              - generic [ref=f33e866]:
                - img "ecommerce website products" [ref=f33e867]
                - heading "Rs. 1000" [level=2] [ref=f33e868]
                - paragraph [ref=f33e869]: Rs. 1000
                - generic [ref=f33e870] [cursor=pointer]:
                  - generic [ref=f33e871]: 
                  - text: Add to cart
            - generic [ref=f33e872]:
              - generic [ref=f33e876]:
                - img "ecommerce website products" [ref=f33e877]
                - heading "Rs. 1500" [level=2] [ref=f33e878]
                - paragraph [ref=f33e879]: Stylish Dress
                - generic [ref=f33e880] [cursor=pointer]:
                  - generic [ref=f33e881]: 
                  - text: Add to cart
              - generic [ref=f33e885]:
                - img "ecommerce website products" [ref=f33e886]
                - heading "Rs. 600" [level=2] [ref=f33e887]
                - paragraph [ref=f33e888]: Winter Top
                - generic [ref=f33e889] [cursor=pointer]:
                  - generic [ref=f33e890]: 
                  - text: Add to cart
              - generic [ref=f33e894]:
                - img "ecommerce website products" [ref=f33e895]
                - heading "Rs. 400" [level=2] [ref=f33e896]
                - paragraph [ref=f33e897]: Summer White Top
                - generic [ref=f33e898] [cursor=pointer]:
                  - generic [ref=f33e899]: 
                  - text: Add to cart
          - link "" [ref=f33e900] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=f33e902] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=f33e905]
  - contentinfo [ref=f33e907]:
    - generic [ref=f33e912]:
      - heading "Subscription" [level=2] [ref=f33e913]
      - generic [ref=f33e914]:
        - textbox "Your email address" [ref=f33e915]
        - button "" [ref=f33e916] [cursor=pointer]
        - paragraph [ref=f33e918]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f33e922]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=f33e923]:
    - link "Go to shopping options for E-commerce website templates" [ref=f33e928] [cursor=pointer]: E-commerce website templates
    - button "Close shopping anchor" [ref=f33e929]
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test';
  2  | test('Register user', async({page})=>{
  3  | 
  4  | await page.goto('http://automationexercise.com')
  5  | const home=  page.locator("//a[text()=' Home']")
  6  | 
  7  | await expect(home).toBeVisible()
  8  |  
  9  | const signup=  page.locator("//a[text()=' Signup / Login']")
  10 | 
  11 | await signup.click()
  12 | 
  13 | const newuser= page.locator("//h2[text()='New User Signup!']")
  14 | await expect(newuser).toBeVisible()
  15 |  const name= page.locator("//input[@name='name']")
  16 | await name.fill("Mithun")
  17 | const email= page.locator("//input[@data-qa='signup-email']")
  18 | await email.fill("mithun@example1.com")
  19 | 
  20 | const signupbutton=page.locator("//button[text()='Signup']")
  21 | await signupbutton.click()
  22 | 
  23 | //const accountinfo=page.locator("//b[text()='Enter Account Information']")
  24 | //await expect(accountinfo).toBeVisible()
  25 |  const title= page .locator("//input[@value='Mr']")
  26 |  await title.click()
  27 | 
  28 |  const password = page.getByRole('textbox', { name: 'Password' });
  29 | await password.fill('MyPassword123');
  30 |  const day= page.locator("//select[@id='days']")
  31 |  await day.selectOption('10')
  32 |   const month= page .locator("//select[@id='months']")
  33 |    await month.selectOption('5')
  34 | 
  35 |    const year = page.locator("//select[@id='years']")
  36 | 
  37 |    await year.selectOption('1994')
  38 |     const newsletter=page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
  39 |     await newsletter.check();
  40 |     const offers= page.getByRole('checkbox', { name: 'Receive special offers from our partners!' });
  41 |     await offers.check();
  42 |     const firstName= page.locator("//input[@id='first_name']")
  43 |     await firstName.fill("Mithun")
  44 |     const lastName= page.locator("//input[@id='last_name']")
  45 |     await lastName.fill("Mishra")
  46 |     const company= page.locator("//input[@id='company']")
  47 |     await company.fill("ABC Company")
  48 |     const address1= page.locator("//input[@id='address1']")
  49 |     await address1.fill("123 Main Street")
  50 |     const address2= page.locator("//input[@id='address2']")
  51 |     await address2.fill("Apt 4B")
  52 |     const country= page.locator("//select[@id='country']")
  53 |     await country.selectOption('Canada')
  54 |     const state= page.locator("//input[@id='state']")
  55 |     await state.fill("Ontario")
  56 |     const city= page.locator("//input[@id='city']")
  57 |     await city.fill("Toronto")
  58 |     const zipcode= page.locator("//input[@id='zipcode']")
  59 |     await zipcode.fill("M5V 2H1")
  60 |     const mobileNumber= page.locator("//input[@id='mobile_number']")
  61 |     await mobileNumber.fill("+1 416-123-4567")
  62 |     const createAccountButton= page.locator("//button[text()='Create Account']")
  63 |     await createAccountButton.click()
  64 |     const accountCreatedMessage= page.locator("//b[text()='Account Created!']")
  65 |     await expect(accountCreatedMessage).toBeVisible()
  66 |     const continueButton= page.locator("//a[text()='Continue']")
  67 |     await continueButton.click()
  68 |     //const accountCreated= page .locator("//b[text()='Account Created!']")
  69 |      //await expect(accountCreated).toBeVisible()
  70 |       const continueButton2=page.locator("//a[text()='Continue']")
> 71 |        await continueButton2.click()
     |                              ^ Error: locator.click: Test timeout of 30000ms exceeded.
  72 | 
  73 |        const loggedInAs= page.locator("//a[text()=' Logged in as '] ")
  74 |         await expect(loggedInAs).toBeVisible()
  75 |          const deleteAccount= page.locator("//a[text()=' Delete Account'] ")
  76 | 
  77 |          await deleteAccount.click()
  78 |           const accountDeleted = page.locator("//b[text()='Account Deleted!']")
  79 |           await expect(accountDeleted).toBeVisible()
  80 |               const continueButton3= page.locator("//a[text()='Continue']") 
  81 |                await continueButton3.click()
  82 |     
  83 | 
  84 | 
  85 | 
  86 | 
  87 | })
```