# Rudhra Bharathy’s portfolio

Astro, TypeScript, Tailwind CSS v4, MDX, and Lucide. Static output for GitHub Pages.

## Development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

The profile is at `/`. The site also has `/experience/`, `/gallery/`, and `/projects/`, with individual project pages under `/projects/`. The Resume link in the header opens Google Drive.

Project content lives in `src/content/projects/`. Experience and profile links live in `src/data.ts`. Styles live in `src/styles/global.css`.

## GitHub Pages

In repository Settings → Pages, select GitHub Actions. The **Deploy portfolio to GitHub Pages** workflow runs on pushes to `main` and can also be run manually. The configured site is `https://rudhrabharathy.github.io`.
