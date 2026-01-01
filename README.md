# Portfolio Website

A modern, responsive portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. This project showcases a dynamic and interactive user interface featuring advanced animations and a clean design aesthetic.

## 🚀 Features

- **Modern Architecture**: Built with Next.js 16 (App Router) and React 19.
- **Responsive Design**: Fully responsive layout optimized for all device sizes using Tailwind CSS.
- **Advanced Animations**: Smooth transitions and interactive elements powered by Framer Motion and GSAP.
- **Interactive UI**: Custom components including Rolling Text, Loading Screens, and Hover Effects.
- **Type Safety**: Full TypeScript support for robust and maintainable code.
- **SEO Optimized**: Includes `next-sitemap` for search engine optimization.
- **Dark Mode Support**: Theming capabilities enabled by `next-themes`.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**:
  - [Framer Motion](https://www.framer.com/motion/)
  - [GSAP](https://greensock.com/gsap/)
- **UI Components**:
  - [Radix UI](https://www.radix-ui.com/)
  - [React Icons](https://react-icons.github.io/react-icons/)
  - [Sonner](https://sonner.emilkowal.ski/) (Toast notifications)
- **Utilities**: `clsx`, `tailwind-merge`, `zod`

## 📜 Scripts

- `dev`: Runs the development server.
- `build`: Builds the application for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint to check for code quality issues.
- `postbuild`: Generates key SEO files like `sitemap.xml`.
- `scan`: Runs the development server with `react-scan` for performance monitoring.

## 📂 Project Structure

- `/app`: Main application routes and pages (App Router).
- `/components`: Reusable UI components.
- `/data`: Static data files.
- `/hooks`: Custom React hooks.
- `/lib`: Utility libraries and configurations.
- `/public`: Static assets (images, fonts, etc.).
- `/utils`: Helper functions.