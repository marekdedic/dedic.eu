function createThemeState(): {
  set(value: "dark" | "light"): void;
  toggle(): void;
  value: "dark" | "light";
} {
  let state: "dark" | "light" = $state("light");

  return {
    set: (value: "dark" | "light"): void => {
      state = value;
    },
    toggle: (): void => {
      state = state === "dark" ? "light" : "dark";
    },
    get value(): "dark" | "light" {
      return state;
    },
  };
}

export const theme = createThemeState();
