<script lang="ts" strictEvents>
  // eslint-disable-next-line simple-import-sort/imports
  import * as Prism from "prismjs";
  import "prismjs/themes/prism-coy.css";
  import "prismjs-bibtex";

  import {
    faClipboard,
    faClipboardCheck,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let language: string;
  export let code: string;
  export let copyButton = true;

  $: formattedCode = Prism.highlight(code, Prism.languages[language], language);

  let copied = false;

  function copy(): void {
    void navigator.clipboard.writeText(code).then(() => {
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    });
  }
</script>

<div>
  {#if copyButton}
    <button aria-label="Copy to clipboard" type="button" on:click={copy}>
      <Fa icon={copied ? faClipboardCheck : faClipboard} size="lg" />
    </button>
  {/if}
  <!-- eslint-disable-next-line svelte/no-unused-class-name svelte/no-at-html-tags -->
  <pre><code class="language-{language}">{@html formattedCode}</code></pre>
</div>

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

  div {
    position: relative;
  }

  div:hover button {
    display: block;
  }

  button {
    background-color: var(--background-color);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    display: none;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 10px;
    transition:
      color theme.$transition-duration ease,
      background-color theme.$transition-duration ease;
  }

  button:hover {
    color: var(--primary-color);
  }
</style>
