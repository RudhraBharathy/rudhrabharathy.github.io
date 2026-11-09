# Rudhra Bharathy’s portfolio

Astro, TypeScript, Tailwind CSS v4, MDX, and Lucide. Static output for GitHub Pages.

## Development

Use Node.js 24 and pnpm 11.

```sh
pnpm install
pnpm dev
```

## Build

```sh
pnpm build
pnpm preview
```

The profile is at `/`, with individual pages under `/projects/` and a browser-readable résumé at `/resume/`.

Project content lives in `src/content/projects/`. Experience and profile links live in `src/data.ts`. The résumé uses that same content. Styles live in `src/styles/global.css`.

## GitHub Pages

In repository Settings → Pages, select GitHub Actions. Run the **Deploy portfolio to GitHub Pages** workflow manually after pushing the source. The configured site is `https://rudhrabharathy.github.io`.
