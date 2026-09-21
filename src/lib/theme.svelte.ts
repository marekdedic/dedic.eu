const getInitialTheme = (): "dark" | "light" => {
  if (typeof document !== "undefined") {
    const attr = document.documentElement.dataset["theme"];
    if (attr === "dark" || attr === "light") {
      return attr;
    }
  }
  return "light";
};

function createThemeState(): {
  set(value: "dark" | "light"): void;
  toggle(): void;
  value: "dark" | "light";
} {
  let state: "dark" | "light" = $state(getInitialTheme());

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
