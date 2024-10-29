# Next.js Tailwind Spotify Now Playing

This is a Next.js and Tailwind CSS project bootstrapped using [nextjs-tailwind-starter](https://github.com/theodorusclarence/nextjs-tailwind-starter) created by [Theodorus Clarence](https://github.com/theodorusclarence).

![App Preview](public/img/app_preview.png)
![App Preview 2](public/img/app_preview2.png)
![App Preview 3](public/img/app_preview3.png)
![App Preview 4](public/img/app_preview4.png)

## Getting Started

To use this starter, you can initialize your project using `create-next-app`:

```bash
npx create-next-app -e https://github.com/theodorusclarence/nextjs-tailwind-starter project-name
```

Install the dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Setting Up Spotify Integration

To display your current Spotify playback status, you'll need to set up authentication with the Spotify API.

### 1. Obtain Spotify API Credentials

- **Create a Spotify Developer Account**: If you don't have one, sign up at [Spotify for Developers](https://developer.spotify.com/).
- **Create a New App**: In your Spotify Dashboard, create a new app to get your `Client ID` and `Client Secret`.
- **Set Redirect URI**: In your app settings, add `http://localhost:3000` as a Redirect URI.

### 2. Get Authorization Code

Visit the following URL in your browser, replacing `YOUR_CLIENT_ID` with your actual client ID:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=user-read-currently-playing%20user-read-recently-played%20user-top-read
```

After authorizing, you'll be redirected to `http://localhost:3000/?code=YOUR_AUTHORIZATION_CODE`. Note the `code` parameter in the URL.

### 3. Exchange Authorization Code for Tokens

You need to exchange the authorization code for access and refresh tokens.

- **Encode Your Client Credentials**: Base64 encode your `Client ID` and `Client Secret` in the format `CLIENT_ID:CLIENT_SECRET`.

  ```bash
  echo -n 'YOUR_CLIENT_ID:YOUR_CLIENT_SECRET' | base64
  ```

- **Make the Token Request**:

  ```bash
  curl -H "Authorization: Basic BASE64_ENCODED_CLIENT_CREDENTIALS" \
  -d grant_type=authorization_code \
  -d code=YOUR_AUTHORIZATION_CODE \
  -d redirect_uri=http%3A%2F%2Flocalhost%3A3000 \
  https://accounts.spotify.com/api/token
  ```

- **Response**: You'll receive a JSON response containing `access_token` and `refresh_token`.

### 4. Set Environment Variables

Create a `.env.local` file in the root directory of your project:

```env
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret
SPOTIFY_REFRESH_TOKEN=your_refresh_token
```

**Important**: Do **not** commit `.env.local` to your repository. Add it to your `.gitignore` file to keep your credentials secure.

### 5. Configure Node Options (If Necessary)

If you encounter OpenSSL-related issues, set the `NODE_OPTIONS` environment variable:

- **For Unix/Linux/macOS**:

  ```bash
  export NODE_OPTIONS=--openssl-legacy-provider
  ```

- **For Windows Command Prompt**:

  ```cmd
  set NODE_OPTIONS=--openssl-legacy-provider
  ```

- **For Windows PowerShell**:

  ```powershell
  $env:NODE_OPTIONS = "--openssl-legacy-provider"
  ```

### 6. Run the Application

Start the development server:

```bash
npm run dev
# or
yarn dev
```

---

## Dependencies

- **Next.js**
- **React**
- **Tailwind CSS**
- **React Icons**
- **Next SEO**
- **Spotify Web API**

---

**Disclaimer**: Ensure that you keep your Spotify API credentials and tokens secure. Do not expose them in your repository or commit history.
