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

> https://accounts.spotify.com/authorize?client_id=CLIENT_ID_HERE&response_type=code&redirect_uri=http
> %3A%2F%2Flocalhost:3000&scope=user-read-currently-playing+user-read-recently-played+user-top-read

> http://localhost:3000/?code=**\_**

**Code:**

`AQBn3tC1lAnRYO2mB0X5Hdi6mJAVNemXSpWu6DD5f3XhiRucADpCNPp08T6IvVC5NWl2Omaq0J8WBBIpPZVBxW-4Ihp4pec0IB4LQyoLs0*xMgyJ86Fhg_n1lbyHcSja-w7GXAaljVAtwvvSNJ_RrzdyRPNluMhnXDoPEQ3WnylLcg7jB0uIRSO*-X32HsGBVQCQJ_fd`

`AQB8nlgyWFVXMVfxvy9zTi9YhFujpa0mkwFiCsHzOQvAZruJQYCFzbwDN-l42ThJS9cI1pz9iwkj2hPWfStL5ljl3Hc_eRaz6bHJFp5aLCbS4f617uuAj5MTjEz68qur_Ta3Vb7sMtOm4wEU8QT7kP5Rt-blm0BFmFKLw6mnzSmRID0tH4WbET5mE3d3yFAv0kspBwZrWbvu8oChXSEShd_3zm-uFUQ43Rz45lcmd255zf5jnxqHJSTGkQr6HyDm`

**client_id:client_secret:**

- [base64 format:](https://www.base64encode.org/)

39284c269b304f4eb54c2983758c34a8:b2761ae03e0149df808c2298dfeddbc6

> MzkyODRjMjY5YjMwNGY0ZWI1NGMyOTgzNzU4YzM0YTg6YjI3NjFhZTAzZTAxNDlkZjgwOGMyMjk4ZGZlZGRiYzY=

```js
curl -H "Authorization: Basic CHANGE_BASE64_HERE"
-d grant_type=authorization_code -d code=CHANGE_CODE_HERE -d redirect_uri=http%3A
%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
```

```js
curl -H "Authorization: Basic MzkyODRjMjY5YjMwNGY0ZWI1NGMyOTgzNzU4YzM0YTg6YjI3NjFhZTAzZTAxNDlkZjgwOGMyMjk4ZGZlZGRiYzY=" -d grant_type=authorization_code -d code=AQB8nlgyWFVXMVfxvy9zTi9YhFujpa0mkwFiCsHzOQvAZruJQYCFzbwDN-l42ThJS9cI1pz9iwkj2hPWfStL5ljl3Hc_eRaz6bHJFp5aLCbS4f617uuAj5MTjEz68qur_Ta3Vb7sMtOm4wEU8QT7kP5Rt-blm0BFmFKLw6mnzSmRID0tH4WbET5mE3d3yFAv0kspBwZrWbvu8oChXSEShd_3zm-uFUQ43Rz45lcmd255zf5jnxqHJSTGkQr6HyDm -d redirect_uri=http%3A%2F%2Flocalhost:3000 https://accounts.spotify.com/api/token
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

AQDOTVj2PkKcs-UCvA_VjrrWlIXggTEv8ThoPnrF02yT0H4DvJnnab97xwWs20cbMWVulXOcYxhA8fA6pTdXKWkBXmXKLX9tWwuiEK94lZ2nXiiKRvTTmAgoGOSu8OJyrj8

$env:NODE_OPTIONS = "--openssl-legacy-provider"
set NODE_OPTIONS=--openssl-legacy-provider

album-art 'Metro Boomin' --album 'Heroes and Villains' --size 'large'

var maximage = require('./userscript.user.js');

"value": "public, max-age=31536000, immutable"
"value": "public, max-age=31536000, immutable"

export NODE_OPTIONS=--openssl-legacy-provider
npm run dev

npm install
npm run dev
