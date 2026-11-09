import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://rudhrabharathy.github.io",
  output: "static",
  trailingSlash: "always",
  integrations: [mdx(), icon()],
  vite: { plugins: [tailwindcss()] },
});
