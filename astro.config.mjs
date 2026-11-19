import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";
import posthog from "@posthog/rollup-plugin";
import { loadEnv } from "vite";

const env = loadEnv(process.env.NODE_ENV || "production", process.cwd(), "");
const uploadSourceMaps =
  env.POSTHOG_PERSONAL_API_KEY && env.POSTHOG_PROJECT_ID && env.POSTHOG_HOST;

export default defineConfig({
  site: "https://rudhrabharathy.github.io",
  output: "static",
  build: { inlineStylesheets: "always" },
  trailingSlash: "always",
  integrations: [mdx(), icon()],
  vite: {
    plugins: [
      tailwindcss(),
      ...(uploadSourceMaps
        ? [
            {
              ...posthog({
                personalApiKey: env.POSTHOG_PERSONAL_API_KEY,
                projectId: env.POSTHOG_PROJECT_ID,
                host: env.POSTHOG_HOST,
                sourcemaps: { deleteAfterUpload: true },
              }),
              apply: "build",
            },
          ]
        : []),
    ],
  },
});
