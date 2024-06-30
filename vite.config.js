import { sveltekit } from "@sveltejs/kit/vite";
import htaccess from "rollup-plugin-htaccess";
import { defineConfig } from "vite";

import options from "./rollup-plugin-htaccess.config";

export default defineConfig({
  plugins: [sveltekit(), htaccess(options)],
});
