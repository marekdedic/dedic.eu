<script lang="ts">
  import type { Snippet } from "svelte";

  import Image from "$lib/components/Image.svelte";

  interface Props {
    alt: string;
    children?: Snippet;
    src: string;
  }

  let { alt, children, src }: Props = $props();
</script>

<div class="container">
  <Image {alt} {src} />

  {#if children !== undefined}
    <div class="title">
      {@render children()}
    </div>
  {/if}
</div>

<style>
  .container {
    float: right;

    /* Goes full-width once the containing block drops to 450px, without a
       container query: the percentage resolves against that block, and the
       999 multiplier saturates the result so min/max act as a switch rather
       than an interpolation. 450.5 rather than 450 because the term must be
       positive at the breakpoint, not zero. */
    width: min(100%, max(40%, (450.5px - 100%) * 999));
    margin-left: 1rem;
    margin-right: 0;
  }

  .title {
    font-family: monospace;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .container :global(img) {
    border-radius: 0.25rem;
    box-shadow:
      0 2px 5px 0 rgb(0 0 0 / 16%),
      0 2px 10px 0 rgb(0 0 0 / 12%);
  }
</style>
