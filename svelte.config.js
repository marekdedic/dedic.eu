import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  kit: {
    adapter: adapter({
      assets: "dist",
      fallback: "index.html",
      pages: "dist",
      precompress: false,
      strict: true,
    }),
    csp: {
      /* eslint-disable @typescript-eslint/naming-convention -- These are CSP directive names */
      directives: {
        "default-src": ["self"],
        "font-src": ["self", "data:"],
        "frame-src": ["https://docs.google.com/"],
        "object-src": ["none"],
        "report-uri": ["https://marekdedic.report-uri.com/r/d/csp/enforce"],
        "style-src": ["self", "unsafe-inline"],
        "upgrade-insecure-requests": true,
      },
      /* eslint-enable */
      mode: "hash",
    },
  },
  preprocess: vitePreprocess(),
};
