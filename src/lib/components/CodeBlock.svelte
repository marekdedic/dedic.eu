<script lang="ts">
  import {
    faClipboard,
    faClipboardCheck,
  } from "@fortawesome/free-solid-svg-icons";
  import Prism from "prismjs";
  import "prismjs/themes/prism-coy.css";
  import "prismjs-bibtex";
  import Fa from "svelte-fa";

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
    overflow-y: auto;
    padding: 0.5rem;
    transition:
      background-color var(--transition-duration) ease,
      border-color var(--transition-duration) ease;
  }

  :global(html[data-theme="dark"]) code[class*="language-"] {
    color: var(--text-color);
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
    transition:
      color var(--transition-duration) ease,
      background-color var(--transition-duration) ease;
  }

  button:hover {
    color: var(--primary-color);
  }

  div:hover button {
    display: block;
  }
</style>
