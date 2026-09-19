export default {
  extends: ["stylelint-config-standard", "stylelint-config-html/svelte"],
  rules: {
    // Svelte scopes styles and exposes :global() to opt out.
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
  },
};
