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
```
