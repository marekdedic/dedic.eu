<script lang="ts" strictEvents>
  import Name from "./Name.svelte";

  export let first: string;
  export let last: string;
</script>

<a href="/">
  <Name {first} {last} />
</a>

<style lang="scss">
  @use "../theme.scss";

  a {
    color: var(--text-color);
    font-size: 1.25rem;
    margin-bottom: 0.3125rem;
    margin-right: 1rem;
    margin-top: 0.3125rem;
    white-space: nowrap;
    transition: color theme.$transition-duration ease;
  }

  a:hover {
    text-decoration: none;
  }
</style>
