# Daily Flow - React Version

Your gentle companion through every phase of your cycle, now as a React application!

## Setup Instructions

1. **Install Dependencies**
   ```bash
   cd /Users/aditivenkat/Desktop/schedulets
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm start
   ```
   The app will open at http://localhost:3000

3. **Build for Production**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `build/` folder.

## Project Structure

```
schedulets/
├── public/
│   ├── index.html          # HTML template
│   ├── manifest.json       # PWA manifest
│   └── sw.js              # Service worker for offline support
├── src/
│   ├── App.jsx            # Main React component
│   ├── App.css            # All styles
│   └── index.js           # React entry point
├── package.json           # Dependencies and scripts
└── index.html            # Original vanilla JS version (keep as backup)
```

## Features

- ✅ React hooks for state management
- ✅ LocalStorage persistence
- ✅ PWA support with service worker
- ✅ 4 pathway options (young flexible/working, perimenopause flexible/working)
- ✅ Adaptive schedules based on pathway
- ✅ Phase-specific daily routines
- ✅ Age-appropriate workout plans
- ✅ Workout checkbox tracking
- ✅ Progress tracking
- ✅ Responsive design

## Technologies

- React 18
- React Hooks (useState, useEffect)
- LocalStorage API
- CSS Variables for theming
- Service Worker for PWA

## Deploying to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to package.json:
   ```json
   "homepage": "https://yourusername.github.io/schedulets",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

## Converting Back to Vanilla JS

The original vanilla JS version is preserved as `index.html`. You can use either version!
