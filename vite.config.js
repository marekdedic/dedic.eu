import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import htaccess from "rollup-plugin-htaccess";
import { svelteSitemap } from "svelte-sitemap/vite";
import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";

import options from "./rollup-plugin-htaccess.config";

export default defineConfig({
  plugins: [
    enhancedImages(),
    prismjs({ languages: [] }),
    sveltekit(),
    htaccess(options),
    svelteSitemap({
      domain: "https://dedic.eu",
      ignore: ["fallback.html"],
      outDir: "dist",
    }),
  ],
});
