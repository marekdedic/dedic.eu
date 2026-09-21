<script lang="ts">
  import type { Token, TokenStream } from "prismjs";

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
    lineNumbers?: boolean;
  }

  let { code, copyButton = true, lineNumbers = true }: Props = $props();

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

  function encode(text: string): string {
    return text.replaceAll("&", "&amp;").replaceAll("<", "&lt;");
  }

  // Prism produces a single HTML blob; split it into one entry per source line
  // (without breaking highlight spans) so each line can be rendered as its own
  // row and the line numbers stay aligned even when a line wraps.
  function stringifyLines(tokens: TokenStream): Array<string> {
    if (typeof tokens === "string") {
      return encode(tokens).split("\n");
    }
    if (Array.isArray(tokens)) {
      const lines = [""];
      for (const token of tokens) {
        const tokenLines = stringifyLines(token);
        lines[lines.length - 1] += tokenLines[0];
        lines.push(...tokenLines.slice(1));
      }
      return lines;
    }
    const className = tokenClassName(tokens);
    return stringifyLines(tokens.content).map(
      (line) => `<span class="${className}">${line}</span>`,
    );
  }

  function tokenClassName(token: Token): string {
    return [
      "token",
      token.type,
      ...(Array.isArray(token.alias) ? token.alias : [token.alias]),
    ]
      .filter(Boolean)
      .join(" ");
  }

  // Missing a language? Add it to vite.config.ts
  let codeLines = $derived.by((): Array<string> => {
    const source = activeTab.code.replace(/\n$/u, "");
    return activeTab.language !== undefined &&
      activeTab.language in Prism.languages
      ? stringifyLines(
          Prism.tokenize(source, Prism.languages[activeTab.language]),
        )
      : source.split("\n").map(encode);
  });

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
  <!-- eslint-disable svelte/no-at-html-tags -->
  <div class="code" class:with-line-numbers={lineNumbers}>
    <code
      >{#each codeLines as line, index (index)}{#if lineNumbers}<span
            class="line-number"
            aria-hidden="true">{index + 1}</span
          >{/if}<span class="line-content">{@html line}</span>{/each}</code
    >
  </div>
  <!-- eslint-enable -->
</div>

<style>
  .code {
    background-color: var(--primary-bg-color);
    border-radius: 0.25rem;
    color: var(--text-color);
    padding: 0.5rem;
  }

  .code code {
    display: grid;
    grid-template-columns: 1fr;
  }

  .with-line-numbers code {
    grid-template-columns: auto 1fr;
  }

  .line-number {
    color: var(--text-color-faded);
    padding-right: 1.25rem;
    text-align: right;
    user-select: none;
  }

  .line-content {
    min-height: 1.5em;
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }

  div {
    position: relative;
  }

  .tabbed .code {
    border-radius: 0 0 0.25rem 0.25rem;
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
