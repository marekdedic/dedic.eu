export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html/svelte"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    "plugin/no-unsupported-browser-features": [true, { severity: "warning" }],
    // Svelte scopes styles and exposes :global() to opt out.
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
  },
};
