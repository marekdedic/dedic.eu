import { writable } from "svelte/store";

const { subscribe, set, update } = writable("light"); // TODO: Persistence & set default from browser
export const theme = {
  subscribe,
  set,
  toggle(): void {
    update((current) => (current === "dark" ? "light" : "dark"));
  },
};
