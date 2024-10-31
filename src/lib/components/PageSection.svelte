<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();
</script>

<div>
  {@render children()}
</div>

<style>
  div::after {
    clear: both;
    content: "";
    display: block;
  }
</style>
