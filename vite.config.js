import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import htaccess from "rollup-plugin-htaccess";
import { svelteSitemap } from "svelte-sitemap/vite";
import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";

import options from "./rollup-plugin-htaccess.config";
import { origin } from "./svelte.config.js";

export default defineConfig({
  build: {
    target: "es2022",
  },
  css: {
    // Lowers syntax and adds prefixes for the floor, so source can stay modern.
    lightningcss: { targets: browserslistToTargets(browserslist()) },
    transformer: "lightningcss",
  },
  plugins: [
    basicSsl(),
    enhancedImages(),
    prismjs({ languages: [] }),
    sveltekit(),
    htaccess(options),
    svelteSitemap({
      domain: origin,
      ignore: ["fallback.html"],
      outDir: "dist",
    }),
  ],
});
