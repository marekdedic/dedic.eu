<script lang="ts">
  import type { Snippet } from "svelte";

  interface Props {
    children: Snippet;
    id: string;
  }

  let { children, id }: Props = $props();
</script>

<h2><a href={`#${id}`}>{@render children()}</a></h2>

<style>
  a {
    color: unset;
    cursor: pointer;
    text-decoration: unset;
  }

  a:hover {
    text-decoration: underline;
  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
  }
</style>
