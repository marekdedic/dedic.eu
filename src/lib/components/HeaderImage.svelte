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
    width: 30%;
    margin-left: 1rem;
    margin-right: 0;
  }

  @media (max-width: 576px) {
    .container {
      width: 100%;
    }
  }

  .title {
    font-family: monospace;
    margin-bottom: 1rem;
    margin-top: 1rem;
  }

  .container :global(img) {
    border-radius: 0.25rem;
    box-shadow:
      0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);
  }
</style>
