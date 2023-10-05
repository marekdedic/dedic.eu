import { writable } from "svelte/store";

const { subscribe, update } = writable("light"); // TODO: Persistence & set default from browser
export const theme = {
  subscribe,
  toggle(): void {
    update((current) => (current === "dark" ? "light" : "dark"));
  },
};
