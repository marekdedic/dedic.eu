<script lang="ts">
  import { resolve } from "$app/paths";

  import Name from "./Name.svelte";

  interface Props {
    first: string;
    last: string;
  }

  let { first, last }: Props = $props();
</script>

<a href={resolve("/")}>
  <Name {first} {last} />
</a>

<style>
  a {
    color: var(--text-color);
    font-size: 1.25rem;
    margin-bottom: 0.3125rem;
    margin-right: 1rem;
    margin-top: 0.3125rem;
    white-space: nowrap;
  }

  a:hover {
    text-decoration: none;
  }
</style>
