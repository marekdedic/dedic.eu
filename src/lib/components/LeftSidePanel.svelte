<script lang="ts">
  import type { Snippet } from "svelte";

  import { MediaQuery } from "svelte/reactivity";

  const inline = new MediaQuery("width < 1150px");

  interface Props {
    children: Snippet;
    inlineVersion?: Snippet;
  }

  let { children, inlineVersion }: Props = $props();

  inlineVersion ??= children;
</script>

<div>
  {#if inline.current}
    {@render inlineVersion()}
  {:else}
    {@render children()}
  {/if}
</div>

<style>
  div {
    left: 50%;
    margin-left: -750px;
    padding: 1rem;
    position: fixed;
    top: 5rem;
    width: 350px;
  }

  @media (width >= 1150px) and (width <= 1499.98px) {
    div {
      left: 0;
      margin-left: 0;
    }
  }

  @media (width >= 800px) and (width <= 1149.98px) {
    div {
      margin-left: auto;
      margin-right: auto;
      width: 800px;
      position: unset;
    }
  }

  @media (width <= 799.98px) {
    div {
      margin-left: 0;
      position: unset;
      width: unset;
    }
  }
</style>
