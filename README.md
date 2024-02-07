This is a NextJs and Tailwind project bootstrapped using nextjs-tailwind-starter created by [Theodorus Clarence](https://github.com/theodorusclarence/nextjs-tailwind-starter).


![](public/img/app_preview.png)
![](public/img/app_preview2.png)
![](public/img/app_preview3.png)
![](public/img/app_preview4.png)


## Getting Started

To use this starter, you can use create-next-app to do it by:

```bash
npx create-next-app -e https://github.com/theodorusclarence/nextjs-tailwind-starter project-name
```

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## What's Inside

This starter file has a opinionated styling for heading with responsive size and Montserrat font imported from the google fonts.

There is also Seo Component to customize page title and opengraph meta tags.
SEO is using next-seo packages, make sure you configure next-seo.config.js to your preferred

https://accounts.spotify.com/authorize?client_id=CLIENT_ID_HERE&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing+user-read-recently-played+user-top-read

d5c0ee1c81394c3d982dc643a23f848e

```js
https://accounts.spotify.com/authorize?client_id=d5c0ee1c81394c3d982dc643a23f848e&response_type=code&redirect_uri=http
%3A%2F%2Flocalhost:3000&scope=user-read-currently-playing+user-read-recently-played+user-top-read
```

> http://localhost:3000/?code=AQBn3tC1lAnRYO2mB0X5Hdi6mJAVNemXSpWu6DD5f3XhiRucADpCNPp08T6IvVC5NWl2Omaq0J8WBBIpPZVBxW-4Ihp4pec0IB4LQyoLs0*xMgyJ86Fhg_n1lbyHcSja-w7GXAaljVAtwvvSNJ_RrzdyRPNluMhnXDoPEQ3WnylLcg7jB0uIRSO*-X32HsGBVQCQJ_fd

> http://localhost:3000/?code=AQC68prAHXu6BNxz3VgOKAHy7CWNQyBTu4Rm2SKS4yngJzzWZTI2n-U8o4YgcTpAppfjaAb6LSclv7mt-C5VpkovpJDLkhfJXz9-Rd2dndBY-w-Cxzbecon030y8uzjWb1qCAASG_5xKULFZA1cNnUnwR8XB2azRFJlBxeX1pg1yHak2FZQuxTZDuQteOiiMyVsVzUijEDTUe_yK-OUaDuzh9MBGWM7j5CFqExONIsfNHAHhlzBr1EW0wHqpF96H

**Code:**

`AQBn3tC1lAnRYO2mB0X5Hdi6mJAVNemXSpWu6DD5f3XhiRucADpCNPp08T6IvVC5NWl2Omaq0J8WBBIpPZVBxW-4Ihp4pec0IB4LQyoLs0*xMgyJ86Fhg_n1lbyHcSja-w7GXAaljVAtwvvSNJ_RrzdyRPNluMhnXDoPEQ3WnylLcg7jB0uIRSO*-X32HsGBVQCQJ_fd`

`AQC68prAHXu6BNxz3VgOKAHy7CWNQyBTu4Rm2SKS4yngJzzWZTI2n-U8o4YgcTpAppfjaAb6LSclv7mt-C5VpkovpJDLkhfJXz9-Rd2dndBY-w-Cxzbecon030y8uzjWb1qCAASG_5xKULFZA1cNnUnwR8XB2azRFJlBxeX1pg1yHak2FZQuxTZDuQteOiiMyVsVzUijEDTUe_yK-OUaDuzh9MBGWM7j5CFqExONIsfNHAHhlzBr1EW0wHqpF96H`

**client_id:client_secret:**

- [base64 format:](https://www.base64encode.org/)

d5c0ee1c81394c3d982dc643a23f848e:e97932bd378e4249a9a29e9552d11887

> ZDVjMGVlMWM4MTM5NGMzZDk4MmRjNjQzYTIzZjg0OGU6ZTk3OTMyYmQzNzhlNDI0OWE5YTI5ZTk1NTJkMTE4ODc=

```js
curl -H "Authorization: Basic CHANGE_BASE64_HERE"
-d grant_type=authorization_code -d code=CHANGE_CODE_HERE -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

```js
curl -H "Authorization: Basic ZDVjMGVlMWM4MTM5NGMzZDk4MmRjNjQzYTIzZjg0OGU6ZTk3OTMyYmQzNzhlNDI0OWE5YTI5ZTk1NTJkMTE4ODc=" -d grant_type=authorization_code -d code=AQBn3tC1lAnRYO2mB0X5Hdi6mJAVNemXSpWu6DD5f3XhiRucADpCNPp08T6IvVC5NWl2Omaq0J8WBBIpPZVBxW-4Ihp4pec0IB4LQyoLs0_xMgyJ86Fhg_n1lbyHcSja-w7GXAaljVAtwvvSNJ_RrzdyRPNluMhnXDoPEQ3WnylLcg7jB0uIRSO_-X32HsGBVQCQJ_fd -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

```js
curl -H "Authorization: Basic ZDVjMGVlMWM4MTM5NGMzZDk4MmRjNjQzYTIzZjg0OGU6ZTk3OTMyYmQzNzhlNDI0OWE5YTI5ZTk1NTJkMTE4ODc=" -d grant_type=authorization_code -d code=AQC68prAHXu6BNxz3VgOKAHy7CWNQyBTu4Rm2SKS4yngJzzWZTI2n-U8o4YgcTpAppfjaAb6LSclv7mt-C5VpkovpJDLkhfJXz9-Rd2dndBY-w-Cxzbecon030y8uzjWb1qCAASG_5xKULFZA1cNnUnwR8XB2azRFJlBxeX1pg1yHak2FZQuxTZDuQteOiiMyVsVzUijEDTUe_yK-OUaDuzh9MBGWM7j5CFqExONIsfNHAHhlzBr1EW0wHqpF96H -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

```json
{
  "access_token": "BQDR9BurFAk35f6nNfKXOK_s4p4c2Whspdkr8pT5gqchmCuZcyqSs3LjmdOIkMT36vsnYrtCa9MmSYHasywMBGRzovHOF6DbK4BCWaCxswDpJDGK1Cili-IYBcIVA-QRfz9GzBPj7wasL7VSdZmn-VeMQxgEoOFW-3l2CtXX1JwyYT_Lk-zjWvKh7jXb2aQ",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQDOTVj2PkKcs-UCvA_VjrrWlIXggTEv8ThoPnrF02yT0H4DvJnnab97xwWs20cbMWVulXOcYxhA8fA6pTdXKWkBXmXKLX9tWwuiEK94lZ2nXiiKRvTTmAgoGOSu8OJyrj8",
  "scope": "user-read-currently-playing"
}
```

```json
{
  "access_token": "BQCDzWZu6baEJR7Z0CAO-MZzrVSNC8LZl0Mvle2Fl4UuruoRWY1a4QU2ys47Y-e6PBvy9ppxQ-fIQqbJppAz3m_43dGYw7-L-2iJQTUSGTjVhAS-oAWj91ICqJcUVYJnmLos5jHn-FGy5PYpj00OAUocqBYKizGh7JXR59Ut_dBjqoFlHWX9bWK1QUlQSBmwT-TjqPI",
  "token_type": "Bearer",
  "expires_in": 3600,
  "refresh_token": "AQAR57PzA-N0qchgpPPvOnSRBAwWXz5QCDkofGASvfb76JuDTdocWG1ausDbfsgKvWipkvDr6ttkcdsWpUdoVlC6oG5bljq3DfmOZC6EhzKj2_ja29O_TAEYMU3wDJiYY28",
  "scope": "user-read-currently-playing user-read-recently-played user-top-read"
}
```

AQDOTVj2PkKcs-UCvA_VjrrWlIXggTEv8ThoPnrF02yT0H4DvJnnab97xwWs20cbMWVulXOcYxhA8fA6pTdXKWkBXmXKLX9tWwuiEK94lZ2nXiiKRvTTmAgoGOSu8OJyrj8

$env:NODE_OPTIONS = "--openssl-legacy-provider"

album-art 'Metro Boomin' --album 'Heroes and Villains' --size 'large'

var maximage = require('./userscript.user.js');

"value": "public, max-age=31536000, immutable"
