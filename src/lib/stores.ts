import { writable } from "svelte/store";

export const tableOfContents = writable<
  Map<string, [string, 2 | 3 | 4 | 5 | 6]>
>(new Map());
