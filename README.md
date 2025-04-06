# Playwright E2E Web

This repository contains end-to-end tests using Playwright with TypeScript.

## Setup

### 1. Install Dependencies

Make sure you have [Node.js](https://nodejs.org/) installed. Then, run the following command to install the necessary dependencies:


nvm install --lts
nvm use --lts

### 2. Verify Node.js and npm Installation
Once installed, verify the installation of Node.js and npm:

node -v  # Should show version >= 16.x.x
npm -v   # Should show npm version
Steps to Set Up and Configure the Project

### 3. Clone the Repository
Clone the repository to your local machine:

git clone https://github.com/sebbysilaghi/playwright-e2e-web.git
cd playwright-e2e-web
### 4. Initialize the Project
Initialize a package.json file:

npm init -y
### 5. Install Required Dependencies
Install the following dependencies:

Playwright for browser automation.
TypeScript for TypeScript support (if you plan to use TypeScript).
Playwright Test (optional but recommended) for running the tests.
npm install playwright @playwright/test typescript --save-dev
### 6. Set Up TypeScript (if needed)
If you're using TypeScript, initialize your TypeScript configuration:

npx tsc --init
This will create a tsconfig.json file for configuring TypeScript.

```sh