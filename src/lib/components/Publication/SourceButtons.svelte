<script lang="ts">
  import { base } from "$app/paths";

  interface Props {
    bib: string | undefined;
    pdf: string | undefined;
    toggleBib(this: void): void;
  }

  let { bib, pdf, toggleBib }: Props = $props();
</script>

<div>
  {#if bib !== undefined}
    <button aria-label="Show bibtex citation" onclick={toggleBib} type="button">
      BIB
    </button>
  {/if}
  {#if pdf !== undefined}
    <a href={`${base}/${pdf}`} rel="noopener noreferrer" target="_blank">PDF</a>
  {/if}
</div>

<style lang="scss">
  @use "../../../lib/theme.scss";

  a,
  button {
    background-color: var(--background-color);
    border: 1px solid var(--text-color);
    border-radius: 3px;
    color: var(--text-color);
    cursor: pointer;
    font-size: 0.64rem;
    font-weight: 400;
    margin-right: 20px;
    padding: 0.25rem 1rem;
    transition:
      color theme.$transition-duration ease,
      background-color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
  }

  a:hover,
  button:hover {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
    transition:
      color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
  }

  a:hover {
    text-decoration: none;
  }

  div {
    display: flex;
  }
</style>
