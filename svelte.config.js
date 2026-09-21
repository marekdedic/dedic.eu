import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export const origin = "https://dedic.eu";

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
    prerender: { origin },
  },
  preprocess: vitePreprocess(),
};
