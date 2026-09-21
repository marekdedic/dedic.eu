<script lang="ts">
  import { page } from "$app/state";
  import TopBar from "$lib/components/TopBar.svelte";
  import { theme } from "$lib/theme.svelte";
  import "$lib/theme.css";
  import "@fontsource/roboto/300.css";
  import "@fontsource/roboto/300-italic.css";
  import "@fontsource/roboto/400.css";
  import "@fontsource/roboto/400-italic.css";
  import "@fontsource/roboto/700.css";
  import "@fontsource/roboto/700-italic.css";
  import "katex/dist/katex.min.css";
  import { onMount, type Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  $effect(() => {
    document.documentElement.dataset["theme"] = theme.value;
    localStorage.setItem("theme", theme.value);
  });

  onMount(() => {
    document.body.classList.add("svelteKitReady");
  });
</script>

<svelte:head>
  <title
    >{page.data.title === undefined
      ? "Marek Dědič"
      : `${page.data.title} — Marek Dědič`}</title
  >
  <link href={`${page.url.origin}${page.url.pathname}`} rel="canonical" />
  <!-- Kept in sync with --primary-color light / dark in src/lib/theme.css -->
  <meta
    name="theme-color"
    content="#af28c7"
    media="(prefers-color-scheme: light)"
  />
  <meta
    name="theme-color"
    content="#f4abff"
    media="(prefers-color-scheme: dark)"
  />
  <meta content={page.data.title ?? "Marek Dědič"} property="og:title" />
  <meta content="Marek Dědič" property="og:site_name" />
  <meta content={`${page.url.origin}${page.url.pathname}`} property="og:url" />
  <meta content={page.data.ogType ?? "website"} property="og:type" />
  <meta content="en_US" property="og:locale" />
  {#if page.data.description}
    <meta name="description" content={page.data.description} />
    <meta content={page.data.description} property="og:description" />
  {/if}
</svelte:head>

<TopBar />

{@render children()}

<style>
  :global(*) {
    box-sizing: border-box;
    transition:
      background-color var(--transition-duration) ease,
      border-color var(--transition-duration) ease,
      color var(--transition-duration) ease;
  }

  :global(body) {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: Roboto, sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    padding-top: 57px;
  }

  :global(p) {
    text-wrap: pretty;
  }

  :global(header) {
    margin-bottom: 1rem;
  }

  :global(a) {
    text-decoration: none;
    color: var(--primary-color);
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: 300;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
    text-wrap: balance;
  }

  :global(h1) {
    font-size: 2.5rem;
    line-height: 1.2;
    margin-bottom: 0.5rem;
  }

  :global(h2) {
    font-size: 2rem;
  }

  :global(h3) {
    font-weight: 400;
  }

  :global(table) {
    border-collapse: collapse;
    display: block;
    margin: 1rem auto 0;
    max-width: 100%;
    overflow-x: auto;
    width: max-content;
  }

  :global(td),
  :global(th) {
    border: 1px solid var(--table-border);
    padding: 8px 20px;
  }

  :global(th) {
    border-bottom-width: 2px;
  }

  :global(tbody tr:nth-child(2n + 1)) {
    background-color: var(--table-odd-row-background);
  }
</style>
