<script lang="ts" strictEvents>
  import Prism from 'prismjs';
  import "prismjs/themes/prism.css";
  import 'prismjs-bibtex';

  export let language: string;
  export let code: string;

  $: formattedCode = Prism.highlight(code, Prism.languages[language], language)
</script>

<pre><code class="language-{language}">{@html formattedCode}</code></pre>

<style lang="scss">
  @use "../../lib/theme.scss";

  pre {
    background-color: var(--primary-bg-color);
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    overflow-y: auto;
    padding: .5rem;
    transition: background-color theme.$transition-duration ease, border-color theme.$transition-duration ease;
  }
</style>
