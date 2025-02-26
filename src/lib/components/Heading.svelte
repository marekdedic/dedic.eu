<script lang="ts">
  import { tableOfContents } from "$lib/toc.svelte";
  import { onDestroy, type Snippet } from "svelte";

  interface Props {
    children: Snippet;
    inToC?: boolean;
    level: 2 | 3 | 4 | 5 | 6;
  }

  let { children, inToC = true, level }: Props = $props();

  let anchorComponent: HTMLAnchorElement | undefined = $state();

  let title = $derived(anchorComponent?.innerText ?? "");
  let id = $derived(
    title
      .normalize("NFKD")
      .replace(/[\u0300-\u036f]/gu, "")
      .toLowerCase()
      .replace(/[^0-9a-z\s]/gu, "")
      .replace(/\s+/gu, "-"),
  );

  $effect(() => {
    if (inToC && id !== "") {
      tableOfContents.set(id, [title, level]);
    }
  });

  onDestroy(() => {
    tableOfContents.delete(id);
  });
</script>

{#snippet link()}
  <a bind:this={anchorComponent} {id} href={`#${id}`}>
    {@render children()}
  </a>
{/snippet}

{#if level === 2}
  <h2>
    <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- False positive caused by sveltejs/svelte-eslint-parser#657 -->
    {@render link()}
  </h2>
{:else if level === 3}
  <h3>
    <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- False positive caused by sveltejs/svelte-eslint-parser#657 -->
    {@render link()}
  </h3>
{:else if level === 4}
  <h4>
    <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- False positive caused by sveltejs/svelte-eslint-parser#657 -->
    {@render link()}
  </h4>
{:else if level === 5}
  <h5>
    <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- False positive caused by sveltejs/svelte-eslint-parser#657 -->
    {@render link()}
  </h5>
{:else if level === 6}
  <h6>
    <!-- eslint-disable-next-line @typescript-eslint/no-confusing-void-expression -- False positive caused by sveltejs/svelte-eslint-parser#657 -->
    {@render link()}
  </h6>
{/if}

<style>
  a {
    color: unset;
    cursor: pointer;
    text-decoration: unset;
  }

  a:hover {
    text-decoration: underline;
  }
</style>
