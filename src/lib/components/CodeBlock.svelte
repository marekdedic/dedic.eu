<script lang="ts">
  import Prism from "$lib/utils/prism";
  import {
    faClipboard,
    faClipboardCheck,
  } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
  import "$lib/code-syntax-highlighting.css";

  interface Props {
    code: Record<string, string> | string;
    copyButton?: boolean;
  }

  let { code, copyButton = true }: Props = $props();

  let tabs: Array<{
    code: string;
    language: string | undefined;
  }> = $derived(
    typeof code === "string"
      ? [{ code, language: undefined }]
      : Object.entries(code).map(([language, tabCode]) => ({
          code: tabCode,
          language,
        })),
  );

  let active = $state(0);

  let activeTab = $derived(tabs[Math.min(active, tabs.length - 1)]);

  // Missing a language? Add it to vite.config.ts
  let formattedCode = $derived(
    activeTab.language !== undefined && activeTab.language in Prism.languages
      ? Prism.highlight(
          activeTab.code,
          Prism.languages[activeTab.language],
          activeTab.language,
        )
      : activeTab.code,
  );

  let codeClass = $derived(
    activeTab.language === undefined
      ? undefined
      : `language-${activeTab.language}`,
  );

  let copied = $state(false);

  function copy(): void {
    void navigator.clipboard.writeText(activeTab.code).then(() => {
      copied = true;
      setTimeout(() => {
        copied = false;
      }, 2000);
    });
  }
</script>

<div class:tabbed={tabs.length > 1}>
  {#if tabs.length > 1}
    <div class="tabs" role="tablist">
      {#each tabs as tab, index (tab.language ?? index)}
        <button
          class="tab"
          class:active={index === active}
          aria-selected={index === active}
          onclick={(): void => {
            active = index;
            copied = false;
          }}
          role="tab"
          type="button">{tab.language}</button
        >
      {/each}
    </div>
  {/if}
  {#if copyButton}
    <button
      class="copy"
      aria-label="Copy to clipboard"
      onclick={copy}
      type="button"
    >
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

  .tabbed pre {
    border-radius: 0 0 0.25rem 0.25rem;
    margin-top: 0;
  }

  .tabs {
    background-color: var(--primary-bg-color);
    border-bottom: 1px solid var(--divider-color);
    border-radius: 0.25rem 0.25rem 0 0;
    margin-top: 1em;
    padding: 0 0.5rem;
  }

  .tab {
    background: none;
    border: none;
    border-bottom: 2px solid transparent;
    color: var(--text-color);
    cursor: pointer;
    margin-bottom: -1px;
    padding: 0.5rem 0.6rem;
  }

  .tab:hover {
    color: var(--primary-color);
  }

  .tab.active {
    border-bottom-color: var(--primary-color);
    color: var(--primary-color);
  }

  .copy {
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

  .tabbed .copy {
    top: 3rem;
  }

  .copy:hover {
    color: var(--primary-color);
  }

  div:hover .copy {
    display: block;
  }
</style>
