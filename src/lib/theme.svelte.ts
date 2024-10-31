export const theme: { value: "dark" | "light" } = $state({ value: "light" });

export function toggleTheme(): void {
  theme.value = theme.value === "dark" ? "light" : "dark";
}
