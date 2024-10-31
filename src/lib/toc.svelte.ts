import { SvelteMap } from "svelte/reactivity";

export const tableOfContents = new SvelteMap<
  string,
  [string, 2 | 3 | 4 | 5 | 6]
>();
