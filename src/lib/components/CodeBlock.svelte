<script lang="ts" strictEvents>
  // eslint-disable-next-line simple-import-sort/imports
  import * as Prism from "prismjs";
  import "prismjs/themes/prism-coy.css";
  import "prismjs-bibtex";

  export let language: string;
  export let code: string;

  $: formattedCode = Prism.highlight(code, Prism.languages[language], language);
</script>

<!-- eslint-disable-next-line svelte/no-unused-class-name svelte/no-at-html-tags -->
<pre><code class="language-{language}">{@html formattedCode}</code></pre>

<style lang="scss">
  @use "../../lib/theme.scss";

  pre {
    background-color: var(--primary-bg-color);
    border-radius: 0.25rem;
    overflow-y: auto;
    padding: 0.5rem;
    transition:
      background-color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
  }
</style>
