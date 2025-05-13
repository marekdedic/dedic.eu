<script lang="ts">
  import CodeBlock from "$lib/components/CodeBlock.svelte";
  import Image from "$lib/components/Image.svelte";
  import Authors from "$lib/components/Publication/Authors.svelte";
  import Metadata from "$lib/components/Publication/Metadata.svelte";
  import SourceButtons from "$lib/components/Publication/SourceButtons.svelte";
  import Title from "$lib/components/Publication/Title.svelte";
  import { MediaQuery } from "svelte/reactivity";

  interface Props {
    abstract: string;
    authors: Array<string>;
    bib?: string | undefined;
    date: Date;
    pdf?: string | undefined;
    previewImage?: string | undefined;
    tags?: Array<string>;
    title: string;
  }

  let {
    abstract,
    authors,
    bib = undefined,
    date,
    pdf = undefined,
    previewImage = undefined,
    tags = [],
    title,
  }: Props = $props();

  let showBib = $state(false);

  const isNarrow = new MediaQuery("max-width: 800px");
</script>

<div class="publication">
  {#if isNarrow.current}
    <Title {title} />
    <div class="metadata-mobile">
      <Metadata {date} inline {tags} />
    </div>
    <div class="authors">
      <Authors {authors} />
    </div>
    {#if previewImage !== undefined}
      <div class="preview preview-mobile">
        <Image alt={title} src={previewImage} />
      </div>
    {/if}
    <div class="abstract">
      {abstract}
    </div>
    <SourceButtons
      {bib}
      ontoggleBib={(): void => {
        showBib = !showBib;
      }}
      {pdf}
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
          ontoggleBib={(): void => {
            showBib = !showBib;
          }}
          {pdf}
        />
      </div>
      {#if previewImage !== undefined}
        <div class="preview">
          <Image alt={title} src={previewImage} />
        </div>
      {/if}
    </div>
    {#if showBib && bib !== undefined}
      <div class="bib">
        <CodeBlock code={bib} language="bib" />
      </div>
    {/if}
  {/if}
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

  .publication {
    border-bottom: 1px solid var(--divider-color);
    padding-bottom: 2rem;
    padding-top: 2rem;
    transition: border-color theme.$transition-duration ease;
  }

  .publication:last-of-type {
    border-bottom: none;
  }

  .two-column {
    flex: 0 0 85%;
    width: 85%;
  }
</style>
