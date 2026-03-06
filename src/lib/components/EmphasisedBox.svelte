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

<style lang="scss">
  @use "../../lib/theme.scss";

  div {
    border: 1px solid var(--primary-color);
    background-color: var(--primary-bg-color);
    border-radius: 0.25rem;
    padding: 0.2rem 1.2rem;
    margin: 1.2rem 0;
  }
</style>
