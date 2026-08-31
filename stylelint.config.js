export default {
  extends: ["stylelint-config-standard-scss", "stylelint-config-html/svelte"],
  plugins: ["stylelint-no-unsupported-browser-features"],
  rules: {
    // Range syntax needs Safari 16.4; the floor is 16.0.
    "media-feature-range-notation": "prefix",
    "plugin/no-unsupported-browser-features": [
      true,
      {
        // Caniuse marks intrinsic-width partial in every Firefox, forever.
        ignore: ["intrinsic-width"],
      },
    ],
    // Svelte scopes styles and exposes :global() to opt out.
    "selector-pseudo-class-no-unknown": [
      true,
      { ignorePseudoClasses: ["global"] },
    ],
  },
};
