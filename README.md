# Lorenzo Brown’s portfolio

Personal website for Lorenzo Brown, a software engineer focused on iOS and web development.

## Local development

```sh
npm ci
npm start
```

## Production checks

```sh
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

The production files are generated in `build/`.

## Render hosting

`render.yaml` defines a Render Static Site linked to `main`, built with Node 22 and `npm ci && npm run build`. Render publishes `build/` and deploys new commits automatically.

Create the site from this repository as a Render Blueprint. Confirm its first deployment works at the Render-provided URL before updating DNS for `lorenzobrown.dev`. Add the custom domain after approving any Render domain charge; use the exact DNS records displayed by Render, then verify the domain and HTTPS certificate in the dashboard.

Firebase Hosting remains configured as a fallback during the migration. Its production deployment workflow is manual, so future pushes can deploy through Render without updating Firebase. Keep the previous hosting release available until the domain cutover is verified.

## Content

The layout is in `src/App.tsx` and `src/styles/Redesign.css`. Existing app, open source, and work history data lives in `src/Model/`. Public app screenshots and icons are stored locally in `public/images/`.
