import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default {
  kit: {
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
        "style-src": ["self", "unsafe-inline"],
        "upgrade-insecure-requests": true,
      },
      mode: "hash",
    },
  },
  preprocess: vitePreprocess(),
};
