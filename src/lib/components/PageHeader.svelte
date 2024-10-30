<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    subtitle?: Snippet;
    title: Snippet;
  }

  let { subtitle, title }: Props = $props();
</script>

<header>
  <h1>{@render title()}</h1>
  {@render subtitle?.()}
</header>

<style>
  header {
    margin-bottom: 1rem;
  }

  h1 {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }
</style>
