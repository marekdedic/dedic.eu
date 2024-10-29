import js from "@eslint/js";
import eslintComments from "@eslint-community/eslint-plugin-eslint-comments";
import commentsConfig from "@eslint-community/eslint-plugin-eslint-comments/configs";
import compat from "eslint-plugin-compat";
import perfectionist from "eslint-plugin-perfectionist";
import playwright from "eslint-plugin-playwright";
import preferArrowFunctions from "eslint-plugin-prefer-arrow-functions";
import prettierRecommended from "eslint-plugin-prettier/recommended";
import svelte from "eslint-plugin-svelte";
import globals from "globals";
import svelteParser from "svelte-eslint-parser";
import tseslint from "typescript-eslint";

/* eslint-disable @typescript-eslint/naming-convention -- Not applicable to this file */

export default tseslint.config(
  js.configs.recommended,
  prettierRecommended,
  commentsConfig.recommended,
  compat.configs["flat/recommended"],
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...svelte.configs["flat/recommended"],
  ...svelte.configs["flat/prettier"],
  perfectionist.configs["recommended-natural"],
  {
    languageOptions: {
      parserOptions: {
        extraFileExtensions: [".svelte"],
        projectService: {
          allowDefaultProject: ["*.js", "*.config.ts"],
          defaultProject: "tsconfig.json",
        },
      },
    },
    plugins: {
      "eslint-comments": eslintComments,
      "prefer-arrow-functions": preferArrowFunctions,
    },
    rules: {
      "@typescript-eslint/array-type": ["error", { default: "generic" }],
      "@typescript-eslint/class-methods-use-this": "error",
      "@typescript-eslint/consistent-type-exports": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      "@typescript-eslint/default-param-last": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": "error",
      "@typescript-eslint/explicit-module-boundary-types": "error",
      "@typescript-eslint/init-declarations": "error",
      "@typescript-eslint/method-signature-style": ["error", "method"],
      "@typescript-eslint/naming-convention": "error",
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/no-invalid-void-type": [
        "error",
        { allowAsThisParameter: true },
      ],
      "@typescript-eslint/no-shadow": "error",
      "@typescript-eslint/no-unnecessary-parameter-property-assignment":
        "error",
      "@typescript-eslint/no-unnecessary-qualifier": "error",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          varsIgnorePattern: "^\\$\\$Slots$",
        },
      ],
      "@typescript-eslint/no-use-before-define": "error",
      "@typescript-eslint/no-useless-empty-export": "error",
      "@typescript-eslint/parameter-properties": "error",
      "@typescript-eslint/prefer-enum-initializers": "error",
      "@typescript-eslint/prefer-readonly": "error",
      "@typescript-eslint/promise-function-async": "error",
      "@typescript-eslint/require-array-sort-compare": "error",
      "@typescript-eslint/strict-boolean-expressions": "error",
      "@typescript-eslint/switch-exhaustiveness-check": "error",
      "@typescript-eslint/typedef": "error",
      "array-callback-return": "error",
      "arrow-body-style": ["error", "as-needed"],
      "block-scoped-var": "error",
      "consistent-return": "error",
      "default-case": "error",
      "default-case-last": "error",
      eqeqeq: "error",
      "eslint-comments/no-unused-disable": "error",
      "eslint-comments/require-description": [
        "error",
        {
          ignore: ["eslint-enable"],
        },
      ],
      "guard-for-in": "error",
      "logical-assignment-operators": "error",
      "new-cap": "error",
      "no-alert": "error",
      "no-await-in-loop": "error",
      "no-console": "error",
      "no-constructor-return": "error",
      "no-duplicate-imports": "error",
      "no-else-return": "error",
      "no-eval": "error",
      "no-extend-native": "error",
      "no-extra-bind": "error",
      "no-inner-declarations": "error",
      "no-invalid-this": "error",
      "no-iterator": "error",
      "no-lone-blocks": "error",
      "no-lonely-if": "error",
      "no-multi-assign": "error",
      "no-new-func": "error",
      "no-object-constructor": "error",
      "no-param-reassign": "error",
      "no-promise-executor-return": "error",
      "no-return-assign": "error",
      "no-self-compare": "error",
      "no-sequences": "error",
      "no-template-curly-in-string": "error",
      "no-unreachable-loop": "error",
      "no-useless-call": "error",
      "no-useless-computed-key": "error",
      "no-useless-concat": "error",
      "no-useless-return": "error",
      "no-warning-comments": "warn",
      "object-shorthand": "error",
      "operator-assignment": "error",
      "perfectionist/sort-svelte-attributes": "off",
      "perfectionist/sort-union-types": [
        "error",
        {
          groups: [
            "literal",
            "function",
            "import",
            "operator",
            "conditional",
            "object",
            "tuple",
            "intersection",
            "union",
            "named",
            "keyword",
            "nullish",
            "unknown",
          ],
        },
      ],
      "prefer-arrow-functions/prefer-arrow-functions": [
        "error",
        {
          allowNamedFunctions: true,
        },
      ],
      "prefer-exponentiation-operator": "error",
      "prefer-object-spread": "error",
      "prefer-regex-literals": "error",
      "prefer-template": "error",
      radix: "error",
      "require-atomic-updates": "error",
      "require-unicode-regexp": "error",
      strict: ["error", "never"],
      "svelte/block-lang": [
        "error",
        {
          enforceScriptPresent: true,
          script: "ts",
          style: ["scss", null],
        },
      ],
      "svelte/button-has-type": "error",
      "svelte/derived-has-same-inputs-outputs": "error",
      "svelte/infinite-reactive-loop": "error",
      "svelte/no-dom-manipulating": "error",
      "svelte/no-dupe-use-directives": "error",
      "svelte/no-extra-reactive-curlies": "error",
      "svelte/no-goto-without-base": "error",
      "svelte/no-ignored-unsubscribe": "error",
      "svelte/no-inline-styles": "error",
      "svelte/no-store-async": "error",
      "svelte/no-target-blank": "error",
      "svelte/no-unused-class-name": "error",
      "svelte/no-useless-mustaches": "error",
      "svelte/prefer-class-directive": "error",
      "svelte/prefer-destructured-store-props": "error",
      "svelte/prefer-style-directive": "error",
      "svelte/require-each-key": "error",
      "svelte/require-optimized-style-attribute": "error",
      "svelte/require-store-callbacks-use-set-param": "error",
      "svelte/require-store-reactive-access": "error",
      "svelte/require-stores-init": "error",
      "svelte/shorthand-attribute": "error",
      "svelte/shorthand-directive": "error",
      "svelte/sort-attributes": "error",
      "svelte/spaced-html-comment": "error",
      "svelte/valid-each-key": "error",
    },
  },
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parser: svelteParser,
      parserOptions: {
        parser: tseslint.parser,
      },
    },
    rules: {
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
    settings: {
      svelte: {
        ignoreWarnings: ["@typescript-eslint/explicit-function-return-type"],
      },
    },
  },
  {
    ...playwright.configs["flat/recommended"],
    files: ["tests/**/*.ts"],
    rules: {
      ...playwright.configs["flat/recommended"].rules,
      "playwright/no-commented-out-tests": "error",
      "playwright/no-duplicate-hooks": "error",
      "playwright/no-get-by-title": "error",
      "playwright/no-nth-methods": "error",
      "playwright/no-raw-locators": "error",
      "playwright/prefer-comparison-matcher": "error",
      "playwright/prefer-equality-matcher": "error",
      "playwright/prefer-hooks-in-order": "error",
      "playwright/prefer-hooks-on-top": "error",
      "playwright/prefer-strict-equal": "error",
      "playwright/prefer-to-be": "error",
      "playwright/prefer-to-contain": "error",
      "playwright/prefer-to-have-count": "error",
      "playwright/prefer-to-have-length": "error",
      "playwright/require-hook": "error",
      "playwright/require-to-throw-message": "error",
    },
  },
  {
    files: ["*.config.js", "*.config.ts"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.js"],
    rules: {
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
    },
  },
);

/* eslint-enable @typescript-eslint/naming-convention */
