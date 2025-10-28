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
    padding: 1rem 1rem 1rem 1rem;
    position: fixed;
    top: 5rem;
    width: 350px;
  }

  @media (1150px <= width < 1500px) {
    div {
      left: 0;
      margin-left: 0;
    }
  }

  @media (800px <= width < 1150px) {
    div {
      margin-left: auto;
      margin-right: auto;
      width: 800px;
      position: unset;
    }
  }

  @media (width < 800px) {
    div {
      margin-left: 0;
      position: unset;
      width: unset;
    }
  }
</style>
