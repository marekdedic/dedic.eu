<script lang="ts" strictEvents>
  import { tableOfContents } from "$lib/stores";

  $: tocEntries = $tableOfContents.entries();
</script>

<ul>
  <h3>Contents</h3>
  {#each tocEntries as [id, name] (id)}
    <li>
      <a href={"#" + id}>{name}</a>
    </li>
  {/each}
</ul>

<style lang="scss">
  @use "../theme.scss";

  ul {
    background: var(--primary-bg-color);
    padding: 1rem 1rem 1rem 1rem;
  }

  h3 {
    margin-top: 0;
  }

  li {
    list-style-type: none;
  }

  li + li {
    margin-top: 0.5rem;
  }

  a {
    color: unset;
    text-decoration: underline;
  }
</style>
