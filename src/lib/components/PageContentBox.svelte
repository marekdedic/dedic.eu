<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    leftSidePanel?: boolean;
  }

  let { children, leftSidePanel = false }: Props = $props();
</script>

<div class:left-side-panel={leftSidePanel}>
  {@render children()}
</div>

<style>
  div {
    display: flow-root;
    margin-left: auto;
    margin-right: auto;
    margin-top: 1.5rem;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }

  @media (width >= 1150px) and (width <= 1499.98px) {
    .left-side-panel {
      margin-left: 350px;
      margin-right: auto;
    }
  }
</style>
