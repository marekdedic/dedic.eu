<script lang="ts" strictEvents>
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import Authors from "$lib/components/Publication/Authors.svelte";
  import Metadata from "$lib/components/Publication/Metadata.svelte";
  import Title from "$lib/components/Publication/Title.svelte";

  export let abstract: string;
  export let authors: Array<string>;
  export let date: Date;
  export let title: string;

  export let bib: string | undefined = undefined;
  export let pdf: string | undefined = undefined;
  export let previewImage: string | undefined = undefined;
  export let tags: Array<string> = [];

  let showBib = false;

  $: descriptionWidth = previewImage !== undefined ? "50%" : "85%";
</script>

<div class="row">
  <div class="container">
    <div class="metadata">
      <Metadata {date} {tags} />
    </div>
    <div style:flex="0 0 {descriptionWidth}" style:width={descriptionWidth}>
      <Title {title} />
      <div class="authors">
        <Authors {authors} />
      </div>
      <div class="abstract">
        {abstract}
      </div>
      <div class="source-buttons">
        {#if bib !== undefined}
          <button
            aria-label="Show bibtex citation"
            type="button"
            on:click={() => {
              showBib = !showBib;
            }}
          >
            BIB
          </button>
        {/if}
        {#if pdf !== undefined}
          <a href={pdf} rel="noopener noreferrer" target="_blank">PDF</a>
        {/if}
      </div>
    </div>
    {#if previewImage !== undefined}
      <div class="preview">
        <figure>
          <picture>
            <img alt={title} src={previewImage} />
          </picture>
        </figure>
      </div>
    {/if}
  </div>
  {#if showBib && bib !== undefined}
    <div class="bib">
      <CodeBlock code={bib} language="bib" />
    </div>
  {/if}
</div>

<style lang="scss">
  @use "../../lib/theme.scss";

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

  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }

  .abstract {
    margin-bottom: 0.5rem;
  }

  .authors {
    margin-bottom: 0.9rem;
    margin-top: 0.3rem;
  }

  .bib {
    margin-left: auto;
    max-width: 85%;
  }

  .container {
    display: flex;
  }

  .metadata {
    flex: 0 0 15%;
    padding-top: 0.5rem;
  }

  .preview {
    align-items: center;
    display: flex;
    flex: 0 0 35%;
    justify-content: center;
    padding: 0 30px;
  }

  .row {
    border-bottom: 1px solid var(--divider-color);
    padding-bottom: 2rem;
    padding-top: 2rem;
    transition: border-color theme.$transition-duration ease;
  }

  .row:last-of-type {
    border-bottom: none;
  }

  .source-buttons {
    display: flex;
  }
</style>
