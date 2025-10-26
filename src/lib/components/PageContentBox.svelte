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
  div {
    margin-left: auto;
    margin-right: auto;
    margin-top: 3rem;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
