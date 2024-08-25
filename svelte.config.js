import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      pages: "dist",
      assets: "dist",
      fallback: "index.html",
      precompress: false,
      strict: true,
    }),
    csp: {
      mode: "hash",
      /* eslint-disable @typescript-eslint/naming-convention -- These are CSP directive names */
      directives: {
        "upgrade-insecure-requests": true,
        "default-src": ["self"],
        "object-src": ["none"],
        "frame-src": ["https://docs.google.com/"],
        "font-src": ["self", "data:"],
        "report-uri": ["https://marekdedic.report-uri.com/r/d/csp/enforce"],
      },
      /* eslint-enable @typescript-eslint/naming-convention */
    },
  },
};
