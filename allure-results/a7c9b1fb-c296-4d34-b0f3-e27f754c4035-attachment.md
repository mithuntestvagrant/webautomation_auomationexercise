# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registerUser.spec.ts >> Register user
- Location: tests/registerUser.spec.ts:2:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: /Logged in as/i }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=f25e1]:
  - banner [ref=f25e2]:
    - generic [ref=f25e5]:
      - link [ref=f25e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=f25e9]
      - list [ref=f25e12]:
        - listitem [ref=f25e13]:
          - link " Home" [ref=f25e14] [cursor=pointer]:
            - /url: /
            - generic [ref=f25e15]: 
            - text: Home
        - listitem [ref=f25e16]:
          - link " Products" [ref=f25e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=f25e18]: 
            - text: Products
        - listitem [ref=f25e19]:
          - link " Cart" [ref=f25e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=f25e21]: 
            - text: Cart
        - listitem [ref=f25e22]:
          - link " Logout" [ref=f25e23] [cursor=pointer]:
            - /url: /logout
            - generic [ref=f25e24]: 
            - text: Logout
        - listitem [ref=f25e25]:
          - link " Delete Account" [ref=f25e26] [cursor=pointer]:
            - /url: /delete_account
            - generic [ref=f25e27]: 
            - text: Delete Account
        - listitem [ref=f25e28]:
          - link " Test Cases" [ref=f25e29] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=f25e30]: 
            - text: Test Cases
        - listitem [ref=f25e31]:
          - link " API Testing" [ref=f25e32] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=f25e33]: 
            - text: API Testing
        - listitem [ref=f25e34]:
          - link " Video Tutorials" [ref=f25e35] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=f25e36]: 
            - text: Video Tutorials
        - listitem [ref=f25e37]:
          - link " Contact us" [ref=f25e38] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=f25e39]: 
            - text: Contact us
        - listitem [ref=f25e40]:
          - generic [ref=f25e41]:
            - generic [ref=f25e42]: 
            - text: Logged in as Mithun
  - generic [ref=f25e47]:
    - list [ref=f25e48]:
      - listitem [ref=f25e49] [cursor=pointer]
      - listitem [ref=f25e50] [cursor=pointer]
      - listitem [ref=f25e51] [cursor=pointer]
    - generic [ref=f25e52]:
      - generic:
        - generic [ref=f25e53]:
          - heading "AutomationExercise" [level=1] [ref=f25e54]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=f25e55]
          - paragraph [ref=f25e56]: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
          - link [ref=f25e57] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=f25e58]
          - link [ref=f25e59] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=f25e60]
        - img "demo website for practice" [ref=f25e62]
    - link "" [ref=f25e63] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=f25e65] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=f25e69]:
    - generic [ref=f25e71]:
      - heading "Category" [level=2] [ref=f25e72]
      - generic [ref=f25e73]:
        - heading [level=4] [ref=f25e76]:
          - link " Women" [ref=f25e77] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=f25e78]: 
            - text: Women
        - heading [level=4] [ref=f25e82]:
          - link " Men" [ref=f25e83] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=f25e84]: 
            - text: Men
        - heading [level=4] [ref=f25e88]:
          - link " Kids" [ref=f25e89] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=f25e90]: 
            - text: Kids
      - insertion [ref=f25e93]:
        - generic [ref=f25e96]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=f25e98]: Discover more
          - link "Dresses" [ref=f25e99] [cursor=pointer]
          - link "Automation engineer hiring" [ref=f25e104] [cursor=pointer]
          - link "Engineers" [ref=f25e109] [cursor=pointer]
          - link "QA certification programs" [ref=f25e114] [cursor=pointer]
          - link "Automation testing eBooks" [ref=f25e119] [cursor=pointer]
          - link "Engineering & Technology" [ref=f25e124] [cursor=pointer]
          - link "E-commerce website templates" [ref=f25e129] [cursor=pointer]
          - link "Automation practice website" [ref=f25e134] [cursor=pointer]
      - generic [ref=f25e139]:
        - heading "Brands" [level=2] [ref=f25e140]
        - list [ref=f25e142]:
          - listitem [ref=f25e143]:
            - link "(6) Polo" [ref=f25e144] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=f25e145]: (6)
              - text: Polo
          - listitem [ref=f25e146]:
            - link "(5) H&M" [ref=f25e147] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=f25e148]: (5)
              - text: H&M
          - listitem [ref=f25e149]:
            - link "(5) Madame" [ref=f25e150] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=f25e151]: (5)
              - text: Madame
          - listitem [ref=f25e152]:
            - link "(3) Mast & Harbour" [ref=f25e153] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=f25e154]: (3)
              - text: Mast & Harbour
          - listitem [ref=f25e155]:
            - link "(4) Babyhug" [ref=f25e156] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=f25e157]: (4)
              - text: Babyhug
          - listitem [ref=f25e158]:
            - link "(3) Allen Solly Junior" [ref=f25e159] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=f25e160]: (3)
              - text: Allen Solly Junior
          - listitem [ref=f25e161]:
            - link "(3) Kookie Kids" [ref=f25e162] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=f25e163]: (3)
              - text: Kookie Kids
          - listitem [ref=f25e164]:
            - link "(5) Biba" [ref=f25e165] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=f25e166]: (5)
              - text: Biba
    - generic [ref=f25e167]:
      - generic [ref=f25e168]:
        - heading "Features Items" [level=2] [ref=f25e169]
        - generic [ref=f25e171]:
          - generic [ref=f25e172]:
            - generic [ref=f25e173]:
              - img "ecommerce website products" [ref=f25e174]
              - heading "Rs. 500" [level=2] [ref=f25e175]
              - paragraph [ref=f25e176]: Blue Top
              - generic [ref=f25e177] [cursor=pointer]:
                - generic [ref=f25e178]: 
                - text: Add to cart
            - generic [ref=f25e179]:
              - heading "Rs. 500" [level=2] [ref=f25e180]
              - paragraph [ref=f25e181]: Blue Top
              - generic [ref=f25e182] [cursor=pointer]:
                - generic [ref=f25e183]: 
                - text: Add to cart
          - list [ref=f25e185]:
            - listitem [ref=f25e186]:
              - link " View Product" [ref=f25e187] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=f25e188]: 
                - text: View Product
        - generic [ref=f25e190]:
          - generic [ref=f25e191]:
            - generic [ref=f25e192]:
              - img "ecommerce website products" [ref=f25e193]
              - heading "Rs. 400" [level=2] [ref=f25e194]
              - paragraph [ref=f25e195]:
                - text: Men
                - link "Tshirt" [ref=f25e196] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f25e199] [cursor=pointer]:
                - generic [ref=f25e200]: 
                - text: Add to cart
            - generic [ref=f25e201]:
              - heading "Rs. 400" [level=2] [ref=f25e202]
              - paragraph [ref=f25e203]: Men Tshirt
              - generic [ref=f25e204] [cursor=pointer]:
                - generic [ref=f25e205]: 
                - text: Add to cart
          - list [ref=f25e207]:
            - listitem [ref=f25e208]:
              - link " View Product" [ref=f25e209] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=f25e210]: 
                - text: View Product
        - generic [ref=f25e212]:
          - generic [ref=f25e213]:
            - generic [ref=f25e214]:
              - img "ecommerce website products" [ref=f25e215]
              - heading "Rs. 1000" [level=2] [ref=f25e216]
              - paragraph [ref=f25e217]:
                - text: Sleeveless
                - link "Dress" [ref=f25e218] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f25e221] [cursor=pointer]:
                - generic [ref=f25e222]: 
                - text: Add to cart
            - generic [ref=f25e223]:
              - heading "Rs. 1000" [level=2] [ref=f25e224]
              - paragraph [ref=f25e225]: Sleeveless Dress
              - generic [ref=f25e226] [cursor=pointer]:
                - generic [ref=f25e227]: 
                - text: Add to cart
          - list [ref=f25e229]:
            - listitem [ref=f25e230]:
              - link " View Product" [ref=f25e231] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=f25e232]: 
                - text: View Product
        - generic [ref=f25e234]:
          - generic [ref=f25e235]:
            - generic [ref=f25e236]:
              - img "ecommerce website products" [ref=f25e237]
              - heading "Rs. 1500" [level=2] [ref=f25e238]
              - paragraph [ref=f25e239]: Stylish Dress
              - generic [ref=f25e240] [cursor=pointer]:
                - generic [ref=f25e241]: 
                - text: Add to cart
            - generic [ref=f25e242]:
              - heading "Rs. 1500" [level=2] [ref=f25e243]
              - paragraph [ref=f25e244]: Stylish Dress
              - generic [ref=f25e245] [cursor=pointer]:
                - generic [ref=f25e246]: 
                - text: Add to cart
          - list [ref=f25e248]:
            - listitem [ref=f25e249]:
              - link " View Product" [ref=f25e250] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=f25e251]: 
                - text: View Product
        - generic [ref=f25e253]:
          - generic [ref=f25e254]:
            - generic [ref=f25e255]:
              - img "ecommerce website products" [ref=f25e256]
              - heading "Rs. 600" [level=2] [ref=f25e257]
              - paragraph [ref=f25e258]: Winter Top
              - generic [ref=f25e259] [cursor=pointer]:
                - generic [ref=f25e260]: 
                - text: Add to cart
            - generic [ref=f25e261]:
              - heading "Rs. 600" [level=2] [ref=f25e262]
              - paragraph [ref=f25e263]: Winter Top
              - generic [ref=f25e264] [cursor=pointer]:
                - generic [ref=f25e265]: 
                - text: Add to cart
          - list [ref=f25e267]:
            - listitem [ref=f25e268]:
              - link " View Product" [ref=f25e269] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=f25e270]: 
                - text: View Product
        - generic [ref=f25e272]:
          - generic [ref=f25e273]:
            - generic [ref=f25e274]:
              - img "ecommerce website products" [ref=f25e275]
              - heading "Rs. 400" [level=2] [ref=f25e276]
              - paragraph [ref=f25e277]: Summer White Top
              - generic [ref=f25e278] [cursor=pointer]:
                - generic [ref=f25e279]: 
                - text: Add to cart
            - generic [ref=f25e280]:
              - heading "Rs. 400" [level=2] [ref=f25e281]
              - paragraph [ref=f25e282]: Summer White Top
              - generic [ref=f25e283] [cursor=pointer]:
                - generic [ref=f25e284]: 
                - text: Add to cart
          - list [ref=f25e286]:
            - listitem [ref=f25e287]:
              - link " View Product" [ref=f25e288] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=f25e289]: 
                - text: View Product
        - generic [ref=f25e291]:
          - generic [ref=f25e292]:
            - generic [ref=f25e293]:
              - img "ecommerce website products" [ref=f25e294]
              - heading "Rs. 1000" [level=2] [ref=f25e295]
              - paragraph [ref=f25e296]: Madame Top For Women
              - generic [ref=f25e297] [cursor=pointer]:
                - generic [ref=f25e298]: 
                - text: Add to cart
            - generic [ref=f25e299]:
              - heading "Rs. 1000" [level=2] [ref=f25e300]
              - paragraph [ref=f25e301]: Madame Top For Women
              - generic [ref=f25e302] [cursor=pointer]:
                - generic [ref=f25e303]: 
                - text: Add to cart
          - list [ref=f25e305]:
            - listitem [ref=f25e306]:
              - link " View Product" [ref=f25e307] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=f25e308]: 
                - text: View Product
        - generic [ref=f25e310]:
          - generic [ref=f25e311]:
            - generic [ref=f25e312]:
              - img "ecommerce website products" [ref=f25e313]
              - heading "Rs. 700" [level=2] [ref=f25e314]
              - paragraph [ref=f25e315]: Fancy Green Top
              - generic [ref=f25e316] [cursor=pointer]:
                - generic [ref=f25e317]: 
                - text: Add to cart
            - generic [ref=f25e318]:
              - heading "Rs. 700" [level=2] [ref=f25e319]
              - paragraph [ref=f25e320]: Fancy Green Top
              - generic [ref=f25e321] [cursor=pointer]:
                - generic [ref=f25e322]: 
                - text: Add to cart
          - list [ref=f25e324]:
            - listitem [ref=f25e325]:
              - link " View Product" [ref=f25e326] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=f25e327]: 
                - text: View Product
        - generic [ref=f25e329]:
          - generic [ref=f25e330]:
            - generic [ref=f25e331]:
              - img "ecommerce website products" [ref=f25e332]
              - heading "Rs. 499" [level=2] [ref=f25e333]
              - paragraph [ref=f25e334]:
                - text: Sleeves Printed Top - White
                - link "Website hosting services" [ref=f25e335] [cursor=pointer]
              - generic [ref=f25e339] [cursor=pointer]:
                - generic [ref=f25e340]: 
                - text: Add to cart
            - generic [ref=f25e341]:
              - heading "Rs. 499" [level=2] [ref=f25e342]
              - paragraph [ref=f25e343]: Sleeves Printed Top - White
              - generic [ref=f25e344] [cursor=pointer]:
                - generic [ref=f25e345]: 
                - text: Add to cart
          - list [ref=f25e347]:
            - listitem [ref=f25e348]:
              - link " View Product" [ref=f25e349] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=f25e350]: 
                - text: View Product
        - generic [ref=f25e352]:
          - generic [ref=f25e353]:
            - generic [ref=f25e354]:
              - img "ecommerce website products" [ref=f25e355]
              - heading "Rs. 359" [level=2] [ref=f25e356]
              - paragraph [ref=f25e357]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "Quality assurance software" [ref=f25e358] [cursor=pointer]
              - generic [ref=f25e362] [cursor=pointer]:
                - generic [ref=f25e363]: 
                - text: Add to cart
            - generic [ref=f25e364]:
              - heading "Rs. 359" [level=2] [ref=f25e365]
              - paragraph [ref=f25e366]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=f25e367] [cursor=pointer]:
                - generic [ref=f25e368]: 
                - text: Add to cart
          - list [ref=f25e370]:
            - listitem [ref=f25e371]:
              - link " View Product" [ref=f25e372] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=f25e373]: 
                - text: View Product
        - generic [ref=f25e375]:
          - generic [ref=f25e376]:
            - generic [ref=f25e377]:
              - img "ecommerce website products" [ref=f25e378]
              - heading "Rs. 278" [level=2] [ref=f25e379]
              - paragraph [ref=f25e380]: Frozen Tops For Kids
              - generic [ref=f25e381] [cursor=pointer]:
                - generic [ref=f25e382]: 
                - text: Add to cart
            - generic [ref=f25e383]:
              - heading "Rs. 278" [level=2] [ref=f25e384]
              - paragraph [ref=f25e385]: Frozen Tops For Kids
              - generic [ref=f25e386] [cursor=pointer]:
                - generic [ref=f25e387]: 
                - text: Add to cart
          - list [ref=f25e389]:
            - listitem [ref=f25e390]:
              - link " View Product" [ref=f25e391] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=f25e392]: 
                - text: View Product
        - generic [ref=f25e394]:
          - generic [ref=f25e395]:
            - generic [ref=f25e396]:
              - img "ecommerce website products" [ref=f25e397]
              - heading "Rs. 679" [level=2] [ref=f25e398]
              - paragraph [ref=f25e399]:
                - text: Full Sleeves Top Cherry - Pink
                - link "API testing frameworks" [ref=f25e400] [cursor=pointer]
              - generic [ref=f25e404] [cursor=pointer]:
                - generic [ref=f25e405]: 
                - text: Add to cart
            - generic [ref=f25e406]:
              - heading "Rs. 679" [level=2] [ref=f25e407]
              - paragraph [ref=f25e408]: Full Sleeves Top Cherry - Pink
              - generic [ref=f25e409] [cursor=pointer]:
                - generic [ref=f25e410]: 
                - text: Add to cart
          - list [ref=f25e412]:
            - listitem [ref=f25e413]:
              - link " View Product" [ref=f25e414] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=f25e415]: 
                - text: View Product
        - generic [ref=f25e417]:
          - generic [ref=f25e418]:
            - generic [ref=f25e419]:
              - img "ecommerce website products" [ref=f25e420]
              - heading "Rs. 315" [level=2] [ref=f25e421]
              - paragraph [ref=f25e422]: Printed Off Shoulder Top - White
              - generic [ref=f25e423] [cursor=pointer]:
                - generic [ref=f25e424]: 
                - text: Add to cart
            - generic [ref=f25e425]:
              - heading "Rs. 315" [level=2] [ref=f25e426]
              - paragraph [ref=f25e427]: Printed Off Shoulder Top - White
              - generic [ref=f25e428] [cursor=pointer]:
                - generic [ref=f25e429]: 
                - text: Add to cart
          - list [ref=f25e431]:
            - listitem [ref=f25e432]:
              - link " View Product" [ref=f25e433] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=f25e434]: 
                - text: View Product
        - generic [ref=f25e436]:
          - generic [ref=f25e437]:
            - generic [ref=f25e438]:
              - img "ecommerce website products" [ref=f25e439]
              - heading "Rs. 478" [level=2] [ref=f25e440]
              - paragraph [ref=f25e441]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f25e442] [cursor=pointer]:
                - generic [ref=f25e443]: 
                - text: Add to cart
            - generic [ref=f25e444]:
              - heading "Rs. 478" [level=2] [ref=f25e445]
              - paragraph [ref=f25e446]: Sleeves Top and Short - Blue & Pink
              - generic [ref=f25e447] [cursor=pointer]:
                - generic [ref=f25e448]: 
                - text: Add to cart
          - list [ref=f25e450]:
            - listitem [ref=f25e451]:
              - link " View Product" [ref=f25e452] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=f25e453]: 
                - text: View Product
        - generic [ref=f25e455]:
          - generic [ref=f25e456]:
            - generic [ref=f25e457]:
              - img "ecommerce website products" [ref=f25e458]
              - heading "Rs. 1200" [level=2] [ref=f25e459]
              - paragraph [ref=f25e460]: Little Girls Mr. Panda Shirt
              - generic [ref=f25e461] [cursor=pointer]:
                - generic [ref=f25e462]: 
                - text: Add to cart
            - generic [ref=f25e463]:
              - heading "Rs. 1200" [level=2] [ref=f25e464]
              - paragraph [ref=f25e465]: Little Girls Mr. Panda Shirt
              - generic [ref=f25e466] [cursor=pointer]:
                - generic [ref=f25e467]: 
                - text: Add to cart
          - list [ref=f25e469]:
            - listitem [ref=f25e470]:
              - link " View Product" [ref=f25e471] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=f25e472]: 
                - text: View Product
        - generic [ref=f25e474]:
          - generic [ref=f25e475]:
            - generic [ref=f25e476]:
              - img "ecommerce website products" [ref=f25e477]
              - heading "Rs. 1050" [level=2] [ref=f25e478]
              - paragraph [ref=f25e479]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "Software testing courses" [ref=f25e480] [cursor=pointer]
              - generic [ref=f25e484] [cursor=pointer]:
                - generic [ref=f25e485]: 
                - text: Add to cart
            - generic [ref=f25e486]:
              - heading "Rs. 1050" [level=2] [ref=f25e487]
              - paragraph [ref=f25e488]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=f25e489] [cursor=pointer]:
                - generic [ref=f25e490]: 
                - text: Add to cart
          - list [ref=f25e492]:
            - listitem [ref=f25e493]:
              - link " View Product" [ref=f25e494] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=f25e495]: 
                - text: View Product
        - generic [ref=f25e497]:
          - generic [ref=f25e498]:
            - generic [ref=f25e499]:
              - img "ecommerce website products" [ref=f25e500]
              - heading "Rs. 1190" [level=2] [ref=f25e501]
              - paragraph [ref=f25e502]: Cotton Mull Embroidered Dress
              - generic [ref=f25e503] [cursor=pointer]:
                - generic [ref=f25e504]: 
                - text: Add to cart
            - generic [ref=f25e505]:
              - heading "Rs. 1190" [level=2] [ref=f25e506]
              - paragraph [ref=f25e507]: Cotton Mull Embroidered Dress
              - generic [ref=f25e508] [cursor=pointer]:
                - generic [ref=f25e509]: 
                - text: Add to cart
          - list [ref=f25e511]:
            - listitem [ref=f25e512]:
              - link " View Product" [ref=f25e513] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=f25e514]: 
                - text: View Product
        - generic [ref=f25e516]:
          - generic [ref=f25e517]:
            - generic [ref=f25e518]:
              - img "ecommerce website products" [ref=f25e519]
              - heading "Rs. 1530" [level=2] [ref=f25e520]
              - paragraph [ref=f25e521]: Blue Cotton Indie Mickey Dress
              - generic [ref=f25e522] [cursor=pointer]:
                - generic [ref=f25e523]: 
                - text: Add to cart
            - generic [ref=f25e524]:
              - heading "Rs. 1530" [level=2] [ref=f25e525]
              - paragraph [ref=f25e526]: Blue Cotton Indie Mickey Dress
              - generic [ref=f25e527] [cursor=pointer]:
                - generic [ref=f25e528]: 
                - text: Add to cart
          - list [ref=f25e530]:
            - listitem [ref=f25e531]:
              - link " View Product" [ref=f25e532] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=f25e533]: 
                - text: View Product
        - generic [ref=f25e535]:
          - generic [ref=f25e536]:
            - generic [ref=f25e537]:
              - img "ecommerce website products" [ref=f25e538]
              - heading "Rs. 1600" [level=2] [ref=f25e539]
              - paragraph [ref=f25e540]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f25e541] [cursor=pointer]:
                - generic [ref=f25e542]: 
                - text: Add to cart
            - generic [ref=f25e543]:
              - heading "Rs. 1600" [level=2] [ref=f25e544]
              - paragraph [ref=f25e545]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=f25e546] [cursor=pointer]:
                - generic [ref=f25e547]: 
                - text: Add to cart
          - list [ref=f25e549]:
            - listitem [ref=f25e550]:
              - link " View Product" [ref=f25e551] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=f25e552]: 
                - text: View Product
        - generic [ref=f25e554]:
          - generic [ref=f25e555]:
            - generic [ref=f25e556]:
              - img "ecommerce website products" [ref=f25e557]
              - heading "Rs. 1100" [level=2] [ref=f25e558]
              - paragraph [ref=f25e559]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f25e560] [cursor=pointer]:
                - generic [ref=f25e561]: 
                - text: Add to cart
            - generic [ref=f25e562]:
              - heading "Rs. 1100" [level=2] [ref=f25e563]
              - paragraph [ref=f25e564]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=f25e565] [cursor=pointer]:
                - generic [ref=f25e566]: 
                - text: Add to cart
          - list [ref=f25e568]:
            - listitem [ref=f25e569]:
              - link " View Product" [ref=f25e570] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=f25e571]: 
                - text: View Product
        - generic [ref=f25e573]:
          - generic [ref=f25e574]:
            - generic [ref=f25e575]:
              - img "ecommerce website products" [ref=f25e576]
              - heading "Rs. 849" [level=2] [ref=f25e577]
              - paragraph [ref=f25e578]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f25e579] [cursor=pointer]:
                - generic [ref=f25e580]: 
                - text: Add to cart
            - generic [ref=f25e581]:
              - heading "Rs. 849" [level=2] [ref=f25e582]
              - paragraph [ref=f25e583]: Colour Blocked Shirt – Sky Blue
              - generic [ref=f25e584] [cursor=pointer]:
                - generic [ref=f25e585]: 
                - text: Add to cart
          - list [ref=f25e587]:
            - listitem [ref=f25e588]:
              - link " View Product" [ref=f25e589] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=f25e590]: 
                - text: View Product
        - generic [ref=f25e592]:
          - generic [ref=f25e593]:
            - generic [ref=f25e594]:
              - img "ecommerce website products" [ref=f25e595]
              - heading "Rs. 1299" [level=2] [ref=f25e596]
              - paragraph [ref=f25e597]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=f25e598] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=f25e601] [cursor=pointer]:
                - generic [ref=f25e602]: 
                - text: Add to cart
            - generic [ref=f25e603]:
              - heading "Rs. 1299" [level=2] [ref=f25e604]
              - paragraph [ref=f25e605]: Pure Cotton V-Neck T-Shirt
              - generic [ref=f25e606] [cursor=pointer]:
                - generic [ref=f25e607]: 
                - text: Add to cart
          - list [ref=f25e609]:
            - listitem [ref=f25e610]:
              - link " View Product" [ref=f25e611] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=f25e612]: 
                - text: View Product
        - generic [ref=f25e614]:
          - generic [ref=f25e615]:
            - generic [ref=f25e616]:
              - img "ecommerce website products" [ref=f25e617]
              - heading "Rs. 1000" [level=2] [ref=f25e618]
              - paragraph [ref=f25e619]: Green Side Placket Detail T-Shirt
              - generic [ref=f25e620] [cursor=pointer]:
                - generic [ref=f25e621]: 
                - text: Add to cart
            - generic [ref=f25e622]:
              - heading "Rs. 1000" [level=2] [ref=f25e623]
              - paragraph [ref=f25e624]: Green Side Placket Detail T-Shirt
              - generic [ref=f25e625] [cursor=pointer]:
                - generic [ref=f25e626]: 
                - text: Add to cart
          - list [ref=f25e628]:
            - listitem [ref=f25e629]:
              - link " View Product" [ref=f25e630] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=f25e631]: 
                - text: View Product
        - generic [ref=f25e633]:
          - generic [ref=f25e634]:
            - generic [ref=f25e635]:
              - img "ecommerce website products" [ref=f25e636]
              - heading "Rs. 1500" [level=2] [ref=f25e637]
              - paragraph [ref=f25e638]: Premium Polo T-Shirts
              - generic [ref=f25e639] [cursor=pointer]:
                - generic [ref=f25e640]: 
                - text: Add to cart
            - generic [ref=f25e641]:
              - heading "Rs. 1500" [level=2] [ref=f25e642]
              - paragraph [ref=f25e643]: Premium Polo T-Shirts
              - generic [ref=f25e644] [cursor=pointer]:
                - generic [ref=f25e645]: 
                - text: Add to cart
          - list [ref=f25e647]:
            - listitem [ref=f25e648]:
              - link " View Product" [ref=f25e649] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=f25e650]: 
                - text: View Product
        - generic [ref=f25e652]:
          - generic [ref=f25e653]:
            - generic [ref=f25e654]:
              - img "ecommerce website products" [ref=f25e655]
              - heading "Rs. 850" [level=2] [ref=f25e656]
              - paragraph [ref=f25e657]: Pure Cotton Neon Green Tshirt
              - generic [ref=f25e658] [cursor=pointer]:
                - generic [ref=f25e659]: 
                - text: Add to cart
            - generic [ref=f25e660]:
              - heading "Rs. 850" [level=2] [ref=f25e661]
              - paragraph [ref=f25e662]: Pure Cotton Neon Green Tshirt
              - generic [ref=f25e663] [cursor=pointer]:
                - generic [ref=f25e664]: 
                - text: Add to cart
          - list [ref=f25e666]:
            - listitem [ref=f25e667]:
              - link " View Product" [ref=f25e668] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=f25e669]: 
                - text: View Product
        - generic [ref=f25e671]:
          - generic [ref=f25e672]:
            - generic [ref=f25e673]:
              - img "ecommerce website products" [ref=f25e674]
              - heading "Rs. 799" [level=2] [ref=f25e675]
              - paragraph [ref=f25e676]: Soft Stretch Jeans
              - generic [ref=f25e677] [cursor=pointer]:
                - generic [ref=f25e678]: 
                - text: Add to cart
            - generic [ref=f25e679]:
              - heading "Rs. 799" [level=2] [ref=f25e680]
              - paragraph [ref=f25e681]: Soft Stretch Jeans
              - generic [ref=f25e682] [cursor=pointer]:
                - generic [ref=f25e683]: 
                - text: Add to cart
          - list [ref=f25e685]:
            - listitem [ref=f25e686]:
              - link " View Product" [ref=f25e687] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=f25e688]: 
                - text: View Product
        - generic [ref=f25e690]:
          - generic [ref=f25e691]:
            - generic [ref=f25e692]:
              - img "ecommerce website products" [ref=f25e693]
              - heading "Rs. 1200" [level=2] [ref=f25e694]
              - paragraph [ref=f25e695]: Regular Fit Straight Jeans
              - generic [ref=f25e696] [cursor=pointer]:
                - generic [ref=f25e697]: 
                - text: Add to cart
            - generic [ref=f25e698]:
              - heading "Rs. 1200" [level=2] [ref=f25e699]
              - paragraph [ref=f25e700]: Regular Fit Straight Jeans
              - generic [ref=f25e701] [cursor=pointer]:
                - generic [ref=f25e702]: 
                - text: Add to cart
          - list [ref=f25e704]:
            - listitem [ref=f25e705]:
              - link " View Product" [ref=f25e706] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=f25e707]: 
                - text: View Product
        - generic [ref=f25e709]:
          - generic [ref=f25e710]:
            - generic [ref=f25e711]:
              - img "ecommerce website products" [ref=f25e712]
              - heading "Rs. 1400" [level=2] [ref=f25e713]
              - paragraph [ref=f25e714]: Grunt Blue Slim Fit Jeans
              - generic [ref=f25e715] [cursor=pointer]:
                - generic [ref=f25e716]: 
                - text: Add to cart
            - generic [ref=f25e717]:
              - heading "Rs. 1400" [level=2] [ref=f25e718]
              - paragraph [ref=f25e719]: Grunt Blue Slim Fit Jeans
              - generic [ref=f25e720] [cursor=pointer]:
                - generic [ref=f25e721]: 
                - text: Add to cart
          - list [ref=f25e723]:
            - listitem [ref=f25e724]:
              - link " View Product" [ref=f25e725] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=f25e726]: 
                - text: View Product
        - generic [ref=f25e728]:
          - generic [ref=f25e729]:
            - generic [ref=f25e730]:
              - img "ecommerce website products" [ref=f25e731]
              - heading "Rs. 2300" [level=2] [ref=f25e732]
              - paragraph [ref=f25e733]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f25e734] [cursor=pointer]:
                - generic [ref=f25e735]: 
                - text: Add to cart
            - generic [ref=f25e736]:
              - heading "Rs. 2300" [level=2] [ref=f25e737]
              - paragraph [ref=f25e738]: Rose Pink Embroidered Maxi Dress
              - generic [ref=f25e739] [cursor=pointer]:
                - generic [ref=f25e740]: 
                - text: Add to cart
          - list [ref=f25e742]:
            - listitem [ref=f25e743]:
              - link " View Product" [ref=f25e744] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=f25e745]: 
                - text: View Product
        - generic [ref=f25e747]:
          - generic [ref=f25e748]:
            - generic [ref=f25e749]:
              - img "ecommerce website products" [ref=f25e750]
              - heading "Rs. 3000" [level=2] [ref=f25e751]
              - paragraph [ref=f25e752]: Cotton Silk Hand Block Print Saree
              - generic [ref=f25e753] [cursor=pointer]:
                - generic [ref=f25e754]: 
                - text: Add to cart
            - generic [ref=f25e755]:
              - heading "Rs. 3000" [level=2] [ref=f25e756]
              - paragraph [ref=f25e757]: Cotton Silk Hand Block Print Saree
              - generic [ref=f25e758] [cursor=pointer]:
                - generic [ref=f25e759]: 
                - text: Add to cart
          - list [ref=f25e761]:
            - listitem [ref=f25e762]:
              - link " View Product" [ref=f25e763] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=f25e764]: 
                - text: View Product
        - generic [ref=f25e766]:
          - generic [ref=f25e767]:
            - generic [ref=f25e768]:
              - img "ecommerce website products" [ref=f25e769]
              - heading "Rs. 3500" [level=2] [ref=f25e770]
              - paragraph [ref=f25e771]: Rust Red Linen Saree
              - generic [ref=f25e772] [cursor=pointer]:
                - generic [ref=f25e773]: 
                - text: Add to cart
            - generic [ref=f25e774]:
              - heading "Rs. 3500" [level=2] [ref=f25e775]
              - paragraph [ref=f25e776]: Rust Red Linen Saree
              - generic [ref=f25e777] [cursor=pointer]:
                - generic [ref=f25e778]: 
                - text: Add to cart
          - list [ref=f25e780]:
            - listitem [ref=f25e781]:
              - link " View Product" [ref=f25e782] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=f25e783]: 
                - text: View Product
        - generic [ref=f25e785]:
          - generic [ref=f25e786]:
            - generic [ref=f25e787]:
              - img "ecommerce website products" [ref=f25e788]
              - heading "Rs. 5000" [level=2] [ref=f25e789]
              - paragraph [ref=f25e790]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f25e791] [cursor=pointer]:
                - generic [ref=f25e792]: 
                - text: Add to cart
            - generic [ref=f25e793]:
              - heading "Rs. 5000" [level=2] [ref=f25e794]
              - paragraph [ref=f25e795]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=f25e796] [cursor=pointer]:
                - generic [ref=f25e797]: 
                - text: Add to cart
          - list [ref=f25e799]:
            - listitem [ref=f25e800]:
              - link " View Product" [ref=f25e801] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=f25e802]: 
                - text: View Product
        - generic [ref=f25e804]:
          - generic [ref=f25e805]:
            - generic [ref=f25e806]:
              - img "ecommerce website products" [ref=f25e807]
              - heading "Rs. 1400" [level=2] [ref=f25e808]
              - paragraph [ref=f25e809]: Lace Top For Women
              - generic [ref=f25e810] [cursor=pointer]:
                - generic [ref=f25e811]: 
                - text: Add to cart
            - generic [ref=f25e812]:
              - heading "Rs. 1400" [level=2] [ref=f25e813]
              - paragraph [ref=f25e814]: Lace Top For Women
              - generic [ref=f25e815] [cursor=pointer]:
                - generic [ref=f25e816]: 
                - text: Add to cart
          - list [ref=f25e818]:
            - listitem [ref=f25e819]:
              - link " View Product" [ref=f25e820] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=f25e821]: 
                - text: View Product
        - generic [ref=f25e823]:
          - generic [ref=f25e824]:
            - generic [ref=f25e825]:
              - img "ecommerce website products" [ref=f25e826]
              - heading "Rs. 1389" [level=2] [ref=f25e827]
              - paragraph [ref=f25e828]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f25e829] [cursor=pointer]:
                - generic [ref=f25e830]: 
                - text: Add to cart
            - generic [ref=f25e831]:
              - heading "Rs. 1389" [level=2] [ref=f25e832]
              - paragraph [ref=f25e833]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=f25e834] [cursor=pointer]:
                - generic [ref=f25e835]: 
                - text: Add to cart
          - list [ref=f25e837]:
            - listitem [ref=f25e838]:
              - link " View Product" [ref=f25e839] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=f25e840]: 
                - text: View Product
      - generic [ref=f25e841]:
        - heading "recommended items" [level=2] [ref=f25e842]
        - generic [ref=f25e843]:
          - generic [ref=f25e844]:
            - text:   
            - generic:
              - generic [ref=f25e848]:
                - img "ecommerce website products" [ref=f25e849]
                - heading "Rs. 1500" [level=2] [ref=f25e850]
                - paragraph [ref=f25e851]: Stylish Dress
                - generic [ref=f25e852] [cursor=pointer]:
                  - generic [ref=f25e853]: 
                  - text: Add to cart
              - generic [ref=f25e857]:
                - img "ecommerce website products" [ref=f25e858]
                - heading "Rs. 600" [level=2] [ref=f25e859]
                - paragraph [ref=f25e860]: Winter Top
                - generic [ref=f25e861] [cursor=pointer]:
                  - generic [ref=f25e862]: 
                  - text: Add to cart
              - generic [ref=f25e866]:
                - img "ecommerce website products" [ref=f25e867]
                - heading "Rs. 400" [level=2] [ref=f25e868]
                - paragraph [ref=f25e869]: Summer White Top
                - generic [ref=f25e870] [cursor=pointer]:
                  - generic [ref=f25e871]: 
                  - text: Add to cart
          - link "" [ref=f25e872] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=f25e874] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=f25e877]
  - contentinfo [ref=f25e879]:
    - generic [ref=f25e884]:
      - heading "Subscription" [level=2] [ref=f25e885]
      - generic [ref=f25e886]:
        - textbox "Your email address" [ref=f25e887]
        - button "" [ref=f25e888] [cursor=pointer]
        - paragraph [ref=f25e890]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=f25e894]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=f25e895]:
    - link "Go to shopping options for Quality assurance training" [ref=f25e900] [cursor=pointer]: Quality assurance training
    - button "Close shopping anchor" [ref=f25e901]
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
  19 | await email.fill('mithun@example1111121.com');
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
  46 | const company = page.locator('#company');
  47 | await company.fill('ABC Company');
  48 | const address1 = page.locator('#address1');
  49 | await address1.fill('123 Main Street');
  50 | const address2 = page.locator('#address2');
  51 | await address2.fill('Apt 4B');
  52 | const country = page.getByRole('combobox', { name: 'Country' });
  53 | await country.selectOption('Canada');
  54 | const state = page.locator('#state');
  55 | await state.fill('Ontario');
  56 | const city = page.locator('#city');
  57 | await city.fill('Toronto');
  58 | const zipcode = page.locator('#zipcode');
  59 | await zipcode.fill('M5V 2H1');
  60 | const mobileNumber = page.locator('#mobile_number');
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
> 73 |     await loggedInAs.waitFor({ state: 'visible', timeout: 10000 });
     |                      ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
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