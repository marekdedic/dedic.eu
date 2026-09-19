<script lang="ts">
  import {
    faClipboard,
    faClipboardCheck,
  } from "@fortawesome/free-solid-svg-icons";
  import Prism from "prismjs";
  import "prismjs-bibtex";
  import Fa from "svelte-fa";
  import "$lib/code-syntax-highlighting.css";

  interface Props {
    code: string;
    copyButton?: boolean;
    language?: string;
  }

  let { code, copyButton = true, language }: Props = $props();

  // We highlight manually via Prism.highlight() below. Without this, Prism
  // auto-runs highlightAll() on DOMContentLoaded.
  Prism.manual = true;

  // Missing a language? Add it to vite.config.js
  let formattedCode = $derived(
    language !== undefined && language in Prism.languages
      ? Prism.highlight(code, Prism.languages[language], language)
      : code,
  );

  let codeClass = $derived(
    language === undefined ? undefined : `language-${language}`,
  );

  let copied = $state(false);

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
    <button aria-label="Copy to clipboard" onclick={copy} type="button">
      <Fa icon={copied ? faClipboardCheck : faClipboard} size="lg" />
    </button>
  {/if}
  <!-- eslint-disable-next-line svelte/no-unused-class-name svelte/no-at-html-tags -->
  <pre><code class={codeClass}>{@html formattedCode}</code></pre>
</div>

<style>
  pre {
    background-color: var(--primary-bg-color);
    border-radius: 0.25rem;
    color: var(--text-color);
    overflow-y: auto;
    padding: 0.5rem;
  }

  div {
    position: relative;
  }

  button {
    background-color: var(--background-color);
    border: none;
    border-radius: 5px;
    color: var(--text-color);
    cursor: pointer;
    display: none;
    padding: 5px;
    position: absolute;
    right: 10px;
    top: 10px;
  }

  button:hover {
    color: var(--primary-color);
  }

  div:hover button {
    display: block;
  }
</style>
