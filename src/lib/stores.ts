import { writable } from "svelte/store";

const { subscribe, set, update } = writable<"dark" | "light">("light");
export const theme = {
  subscribe,
  set,
  toggle: (): void => {
    update((current) => (current === "dark" ? "light" : "dark"));
  },
};

export const tableOfContents = writable<
  Map<string, [string, 2 | 3 | 4 | 5 | 6]>
>(new Map());
