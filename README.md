# PC Check

A browser-based PC and peripheral diagnostic dashboard built with React, TypeScript and Vite.

## Features
- **Keyboard:** records unique key presses while the test is open.
- **Mouse / touchpad:** checks pointer movement and click input.
- **Speakers:** plays separate left/right test tones (user confirms audible output).
- **Microphone:** requests browser permission and displays a live input meter.
- **Camera:** requests browser permission and shows a local video preview.
- **Display:** provides solid-color patterns for visual inspection.
- **Connectivity:** checks the browser's online/offline status.
- **Report:** exports a JSON summary of test results.

## Run locally
```bash
npm install
npm run dev
```

## Production build
```bash
npm run build
npm run preview
```

Microphone and camera access require a secure context (HTTPS or localhost) and user permission.

## Browser limitations
This is a browser-level screening tool, not a full hardware diagnostic. Browsers cannot reliably read low-level hardware health, test firmware/system shortcuts, verify physical speaker channels automatically, or detect dead pixels automatically. Connectivity uses the browser's online indicator and does not measure internet speed or latency. The display and audio checks require user confirmation.

All microphone and camera streams are local to the browser session and are stopped when the diagnostic dialog is closed.
