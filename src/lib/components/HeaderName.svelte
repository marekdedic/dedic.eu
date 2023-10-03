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
    color: theme.$text-color;
    font-size: 1.25rem;
    margin-bottom: .3125rem;
    margin-right: 1rem;
    margin-top: .3125rem;
    white-space: nowrap;
  }

  a:hover {
    text-decoration: none;
  }
</style>
