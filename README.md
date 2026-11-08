# PC Check

A browser-only PC and peripheral diagnostic page built as a single static `index.html` file.

## Run on GitHub Pages

This repository does not require Node.js, npm, React, Vite, TypeScript, or a build step. GitHub Pages serves the root `index.html` directly through the GitHub Actions workflow in `.github/workflows/deploy.yml`.

1. In the repository, open **Settings → Pages**.
2. Set **Build and deployment → Source** to **GitHub Actions**.
3. Push changes to `implement/chatgpt` or `main`, or run **Deploy static site to GitHub Pages** from the Actions tab.
4. When the workflow succeeds, open the Pages URL shown in the deployment job. For this project it is normally `https://gerald-t.github.io/pc-check/`.

## Included tests

- Keyboard key-event test
- Mouse/touchpad pointer and click test
- Speaker tone playback
- Microphone input level meter
- Camera preview
- Full-screen display color inspection
- Browser online/offline status
- JSON diagnostic report export

## Browser limitations

A website cannot directly read low-level hardware health, temperatures, battery condition, driver state, or operating-system errors. Microphone and camera tests require browser permission and HTTPS. The speaker test requires the user to confirm that sound is audible. The connectivity test reports `navigator.onLine`, which is only the browser's connection hint.

## Privacy

All checks run in the browser. This page does not upload camera or microphone streams or diagnostic results.
