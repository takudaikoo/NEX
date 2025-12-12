# Deployment Checklist

## 1. Environment Variables (Vercel)
Ensure the following environment variables are set in your Vercel Project Settings:

- `API_KEY`: Your Google Gemini API Key.
    - Required for: Generating AI content (messages, mission statements).
    - If missing: The app will use static fallback content.

## 2. Node.js Version
- Ensure Vercel is set to use **Node.js 20.x** or later (Next.js 16 requires modern Node).

## 3. Build Command
- Standard Next.js build command: `next build` (or `npm run build`).

## 4. Configuration Changes Made
- **ESM Mode**: `package.json` now includes `"type": "module"`.
- **Config Files**:
    - `next.config.js` -> `next.config.mjs`
    - `postcss.config.js` -> `postcss.config.cjs`
    - `tailwind.config.ts` (Auto-detected as module)

## Troubleshooting
If deployment fails:
1. Check Vercel Build Logs.
2. Verify `API_KEY` is present.
3. specific errors about "CommonJS" or "require" usually mean a config file wasn't updated to ESM syntax.
