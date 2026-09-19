<script lang="ts">
  interface Props {
    authors: Array<string>;
  }

  let { authors }: Props = $props();
</script>

<div>
  {authors.slice(0, -1).join(", ")}{#if authors.length > 1}, and
  {/if}
  {authors[authors.length - 1]}
</div>

<style>
  div {
    color: var(--text-color-faded);
    font-size: 0.8rem;
    transition: color var(--transition-duration) ease;
  }
</style>
