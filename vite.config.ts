import adapter from "@sveltejs/adapter-static";
import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import basicSsl from "@vitejs/plugin-basic-ssl";
import browserslist from "browserslist";
import { browserslistToTargets } from "lightningcss";
import htaccess from "rollup-plugin-htaccess";
import { svelteSitemap } from "svelte-sitemap/vite";
import { defineConfig } from "vite";
import prismjs from "vite-plugin-prismjs";

import options from "./rollup-plugin-htaccess.config.ts";

const origin = "https://dedic.eu";

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
    prismjs({ languages: ["python"] }),
    sveltekit({
      adapter: adapter({
        assets: "dist",
        fallback: "fallback.html",
        pages: "dist",
        precompress: false,
        strict: true,
      }),
      csp: {
        directives: {
          "default-src": ["self"],
          "font-src": ["self", "data:"],
          "frame-src": ["https://docs.google.com/"],
          "object-src": ["none"],
          // Hash of the inline theme-init script in src/app.html
          "script-src": [
            "self",
            "sha256-upM2JqPAVnUkR/yUUybD/h+31u36R0nSCBeNKVbh/qM=",
          ],
          "style-src": ["self", "unsafe-inline"],
          "upgrade-insecure-requests": true,
        },
        mode: "hash",
      },
      paths: { origin },
      preprocess: vitePreprocess(),
    }),
    htaccess(options),
    svelteSitemap({
      domain: origin,
      ignore: [
        "fallback.html",
        // Course redirects: subject roots and course code aliases
        "teaching/*.html",
        "teaching/[A-Z]*/**",
      ],
      outDir: "dist",
    }),
  ],
});
