# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# 🔒 SSL Certificate with 'mkcert' for React App (Windows 10) 

## Step 1: Install Chocolatey

Chocolatey can be used to easily install mkcert - a tool for creating locally trusted development certificates.

Run the following command in PowerShell:
```powershell
Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))
```
> Note: You should restart PowerShell before using chocolatey in Step 2.

## Step 2: Install mkcert using Chocolatey

To install mkcert run the following command in Powershell:
```powershell
choco install mkcert
```

## Step 3: Generate ssl certificate and key for localhost

Run the following command in Powershell:
```powershell
mkcert localhost
```

## Step 4: Install local CA in the system trust store

In step 3, a local CA was created, in order for the generated certificate to be trusted the CA needs to be installed in your system's trust store.

This can be achieved by running the following command in PowerShell:
```powershell
mkcert -install
```

## Step 5: Add trusted certificate and key to React app

In step 3 you generated the certificate and key, they should be called `localhost.pem` and `localhost-key.pem`

If you ran these in PowerShell without changing the directory, they should be stored in `C:\Windows\system32`.

You can move them anywhere you want to, but when adding them to your React app make sure that you use the correct path.

To add them to your React app change the following code in your app's `package.json` file:
```json
"scripts": {
    "start": "set HTTPS=true&&set SSL_CRT_FILE={YOUR_CERTIFICATE_PATH}&&set SSL_KEY_FILE={YOUR_KEY_PATH}&&react-scripts start",
}
```
> Note: Replace `{YOUR_CERTIFICATE_PATH}` and `{YOUR_KEY_PATH}` with the your actual filepaths eg. `C:\Windows\system32\localhost-key.pem`.

## Step 6: Test

Everything should be ready to go, save and restart your app. You should have a secure connection with a lock icon in the browser. 

