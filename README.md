# Calculator App Deployment Guide

## Development
To start the development server:
```bash
npm start
```
This will run the app in development mode at [http://localhost:3000](http://localhost:3000)

## Production Deployment
To deploy to GitHub Pages:

1. First build and deploy:
```bash
npm run deploy
```

This command will:
- Build the production-ready app (`npm run build`)
- Deploy to GitHub Pages (`gh-pages -d build`)

2. Alternatively, you can run these commands separately:
```bash
npm run build
npm run deploy

## Running Cypress Tests
To run Cypress tests in this project:

1. Install Cypress if not already installed:
    ```bash
    npm install cypress --save-dev
    ```

2. Open the Cypress Test Runner:
    ```bash
    npx cypress open
    ```

    This will launch the Cypress Test Runner where you can select and run tests.

3. Alternatively, to run tests in headless mode:
    ```bash
    npx cypress run
    ```

    This will execute all tests in the terminal without opening the Test Runner.

4. Add test scripts to your `package.json` for convenience:
    ```json
    "scripts": {
      "cypress:open": "cypress open",
      "cypress:run": "cypress run"
    }
    ```

    Then, you can run:
    ```bash
    npm run cypress:open
    npm run cypress:run
    ```

