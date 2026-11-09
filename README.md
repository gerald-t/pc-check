# PC Check

A browser-based PC diagnostic website built with plain HTML, CSS, and JavaScript. It is a static site and does not require a server-side application or build process.

## Project structure

```text
pc-check/
├── index.html              # Page structure and content
├── assets/
│   ├── css/
│   │   └── styles.css      # All page styling
│   └── js/
│       └── app.js          # Test interactions and application logic
└── README.md
```

Keep presentation rules in `assets/css/styles.css` and application behavior in `assets/js/app.js`. The `index.html` file should contain the page markup and references to those external assets.

## Run locally

No installation, Node.js, npm, React, Vite, TypeScript, or build step is needed.

1. Clone or download this repository.
2. Open `index.html` in a modern browser.

For camera and microphone tests, use a secure context. When testing locally, `http://localhost` is generally treated as secure by modern browsers.

## Publish with GitHub Pages

GitHub Pages can host this static HTML/CSS/JavaScript site directly; a custom GitHub Actions workflow is not required.

1. Open the repository's **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the branch you want to publish (for example, `main`) and choose the repository root (`/`) as the folder.
4. Save the settings and wait for GitHub Pages to publish the site.
5. Open the Pages URL shown in the Settings page. The usual URL for this repository is `https://gerald-t.github.io/pc-check/`.

When you merge changes into the published branch, GitHub Pages will publish the updated static files. If you publish from a different branch, push the changes to that branch instead.

## Included tests

- Keyboard key-event test, including a full-size keyboard layout with numeric keypad
- Speaker tone playback
- Microphone input level meter
- Camera preview
- Full-screen display color inspection
- Browser online/offline status

## Test limitations

A website cannot directly read low-level hardware health, temperatures, battery condition, driver state, or operating-system errors. Microphone and camera tests require browser permission and a secure context (HTTPS or localhost). The speaker test requires the user to listen and confirm that sound is audible. The connectivity test reports `navigator.onLine`, which is only the browser's connection hint.

## Privacy

All checks run in the browser. This page does not upload camera or microphone streams or diagnostic results.

## Copyright

Copyright © 2026 gerald-t. All rights reserved.

Unless otherwise stated, the contents of this repository may not be copied, redistributed, modified, or used for commercial purposes without prior permission from the copyright holder. This notice is not a substitute for a formal software licence.
