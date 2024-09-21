import { enhancedImages } from "@sveltejs/enhanced-img";
import { sveltekit } from "@sveltejs/kit/vite";
import htaccess from "rollup-plugin-htaccess";
import { defineConfig } from "vite";

import options from "./rollup-plugin-htaccess.config";

export default defineConfig({
  plugins: [enhancedImages(), sveltekit(), htaccess(options)],
});
