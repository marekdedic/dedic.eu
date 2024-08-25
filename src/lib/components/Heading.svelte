<script lang="ts" strictEvents>
  import { tableOfContents } from "$lib/stores";
  import { onDestroy } from "svelte";

  export let level: 2 | 3 | 4 | 5 | 6;
  export let inToC = true;

  interface $$Slots {
    default: Record<string, never>;
  }

  let anchorComponent: HTMLAnchorElement | undefined;

  $: title = anchorComponent?.innerText ?? "";
  $: id = title
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/gu, "")
    .toLowerCase()
    .replace(/[^0-9a-z\s]/gu, "")
    .replace(/\s+/gu, "-");

  $: if (inToC && id !== "") {
    tableOfContents.update((toc) => {
      toc.set(id, [title, level]);
      return toc;
    });
  }

  onDestroy(() => {
    tableOfContents.update((toc) => {
      toc.delete(id);
      return toc;
    });
  });
</script>

{#if level === 2}
  <h2>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h2>
{:else if level === 3}
  <h3>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h3>
{:else if level === 4}
  <h4>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h4>
{:else if level === 5}
  <h5>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
  </h5>
{:else if level === 6}
  <h6>
    <a bind:this={anchorComponent} {id} href={"#" + id}>
      <slot />
    </a>
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
