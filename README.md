# Binstagram
Binstagram React WebApp repo

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
