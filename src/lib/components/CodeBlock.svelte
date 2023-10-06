<script lang="ts" strictEvents>
  import "prismjs/themes/prism-coy.css";
  import "prismjs-bibtex";

  import Prism from "prismjs";

  export let language: string;
  export let code: string;

  $: formattedCode = Prism.highlight(code, Prism.languages[language], language);
</script>

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
