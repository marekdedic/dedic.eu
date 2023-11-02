<script lang="ts" strictEvents>
  export let authors: Array<string>;
</script>

<div>
  {authors.slice(0, -1).join(", ")}{#if authors.length > 1}, and
  {/if}
  {authors[authors.length - 1]}
</div>

<style lang="scss">
  @use "../../../lib/theme.scss";

  div {
    color: var(--text-color-faded);
    font-size: 0.8rem;
    transition: color theme.$transition-duration ease;
  }
</style>
