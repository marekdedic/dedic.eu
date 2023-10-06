<script lang="ts" strictEvents>
  import CodeBlock from "$lib/components/CodeBlock.svelte";

  export let abstract: string;
  export let authors: Array<string>;
  export let date: Date;
  export let title: string;

  export let bib: string | undefined = undefined;
  export let pdf: string | undefined = undefined;
  export let previewImage: string | undefined = undefined;
  export let tags: Array<string> = [];

  let showBib = false;

  function monthName(month: number): string {
    switch (month) {
      case 1:
        return "January";
      case 2:
        return "February";
      case 3:
        return "March";
      case 4:
        return "April";
      case 5:
        return "May";
      case 6:
        return "June";
      case 7:
        return "July";
      case 8:
        return "August";
      case 9:
        return "September";
      case 10:
        return "October";
      case 11:
        return "November";
      case 12:
        return "December";
    }
    return month.toString();
  }

  function formatDate(date: Date): string {
    return (
      date.getDay() +
      1 +
      " " +
      monthName(date.getMonth() + 1) +
      " " +
      date.getFullYear()
    );
  }
</script>

<div class="row">
  <div class="metadata">
    <div>{formatDate(date)}</div>
    <div>
      {#each tags as tag}
        <div class="tag">{tag}</div>
      {/each}
    </div>
  </div>
  <div class="description">
    <h2>{title}</h2>
    <div class="authors">
      {authors.slice(0, -1).join(", ")}{#if authors.length > 1}, and
      {/if}
      {authors[authors.length - 1]}
    </div>
    <div class="abstract">
      {abstract}
    </div>
    <div>
      {#if bib !== undefined}
        <button
          type="button"
          on:click={() => {
            showBib = !showBib;
          }}>BIB</button
        >
      {/if}
      {#if pdf !== undefined}
        <button type="button">
          <a href={pdf} rel="noopener noreferrer" target="_blank">PDF</a>
        </button>
      {/if}
    </div>
    {#if showBib && bib !== undefined}
      <div class="bib">
        <CodeBlock code={bib} language="bib" />
      </div>
    {/if}
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

<style lang="scss">
  @use "../../lib/theme.scss";

  a {
    color: var(--text-color);
    transition: color theme.$transition-duration ease;
  }

  a:hover {
    color: var(--primary-color);
    text-decoration: none;
  }

  button {
    background-color: var(--background-color);
    border: 1px solid var(--text-color);
    border-radius: 3px;
    cursor: pointer;
    font-size: 0.64rem;
    font-weight: 400;
    margin-right: 10px;
    padding: 0.25rem 1rem;
    transition:
      color theme.$transition-duration ease,
      background-color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
  }

  button:hover {
    border: 1px solid var(--primary-color);
    color: var(--primary-color);
  }

  button:hover a {
    color: var(--primary-color);
  }

  h2 {
    font-weight: 400;
    font-size: 1.5rem;
    margin: 0;
  }

  figure {
    margin: 0;
  }

  .abstract {
    margin-bottom: 0.5rem;
  }

  .authors {
    color: var(--text-color-faded);
    font-size: 0.8rem;
    margin-bottom: 0.9rem;
    margin-top: 0.3rem;
    transition: color theme.$transition-duration ease;
  }

  .bib {
    margin-top: 1rem;
  }

  .description {
    flex: 0 0 50%;
    width: 50%;
  }

  .metadata {
    flex: 0 0 15%;
    font-size: 0.8rem;
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
    display: flex;
    padding-bottom: 2rem;
    padding-top: 2rem;
    transition: border-color theme.$transition-duration ease;
  }

  .row:last-of-type {
    border-bottom: none;
  }

  .tag {
    background-color: var(--primary-bg-color);
    border: 1px solid var(--primary-color);
    border-radius: 3px;
    margin-top: 0.5rem;
    padding: 0.1rem 0.3rem;
    width: fit-content;
    transition:
      background-color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
  }
</style>
