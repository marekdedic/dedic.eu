<script lang="ts" strictEvents>
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import MediaQuery from "$lib/components/MediaQuery.svelte";
  import Authors from "$lib/components/Publication/Authors.svelte";
  import Metadata from "$lib/components/Publication/Metadata.svelte";
  import Preview from "$lib/components/Publication/Preview.svelte";
  import SourceButtons from "$lib/components/Publication/SourceButtons.svelte";
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
</script>

<div class="row">
  <MediaQuery query="(max-width: 800px)" let:matches>
    {#if matches}
      <Title {title} />
      <div class="metadata-mobile">
        <Metadata {date} inline {tags} />
      </div>
      <div class="authors">
        <Authors {authors} />
      </div>
      {#if previewImage !== undefined}
        <div class="preview preview-mobile">
          <Preview {previewImage} {title} />
        </div>
      {/if}
      <div class="abstract">
        {abstract}
      </div>
      <SourceButtons
        {bib}
        {pdf}
        on:toggleBib={() => {
          showBib = !showBib;
        }}
      />
      {#if showBib && bib !== undefined}
        <CodeBlock code={bib} language="bib" />
      {/if}
    {:else}
      <div class="container">
        <div class="metadata">
          <Metadata {date} {tags} />
        </div>
        <div
          class:one-column={previewImage !== undefined}
          class:two-column={previewImage === undefined}
        >
          <Title {title} />
          <div class="authors">
            <Authors {authors} />
          </div>
          <div class="abstract">
            {abstract}
          </div>
          <SourceButtons
            {bib}
            {pdf}
            on:toggleBib={() => {
              showBib = !showBib;
            }}
          />
        </div>
        {#if previewImage !== undefined}
          <div class="preview">
            <Preview {previewImage} {title} />
          </div>
        {/if}
      </div>
      {#if showBib && bib !== undefined}
        <div class="bib">
          <CodeBlock code={bib} language="bib" />
        </div>
      {/if}
    {/if}
  </MediaQuery>
</div>

<style lang="scss">
  @use "../../lib/theme.scss";

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

  .metadata-mobile {
    padding-bottom: 0.5rem;
    padding-top: 0.2rem;
  }

  .one-column {
    flex: 0 0 50%;
    width: 50%;
  }

  .preview {
    align-items: center;
    display: flex;
    flex: 0 0 35%;
    justify-content: center;
    padding: 0 30px;
  }

  .preview-mobile {
    padding: 0rem 2rem 1rem 2rem;
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

  .two-column {
    flex: 0 0 85%;
    width: 85%;
  }
</style>
