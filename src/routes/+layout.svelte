<script lang="ts">
  import TopBar from "$lib/components/TopBar.svelte";
  import { theme } from "$lib/theme.svelte";
  import "@fontsource/roboto/300.css";
  import "@fontsource/roboto/300-italic.css";
  import "@fontsource/roboto/400.css";
  import "@fontsource/roboto/400-italic.css";
  import "@fontsource/roboto/700.css";
  import "@fontsource/roboto/700-italic.css";
  import { onMount, type Snippet } from "svelte";

  interface Props {
    children: Snippet;
  }

  let { children }: Props = $props();

  onMount(() => {
    if ("theme" in localStorage) {
      theme.set(localStorage["theme"] as "dark" | "light");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.set("dark");
    }
    $effect(() => {
      document.documentElement.dataset["theme"] = theme.value;
      localStorage.setItem("theme", theme.value);
    });
  });

  onMount(() => {
    document.body.classList.add("svelteKitReady");
  });
</script>

<TopBar />

{@render children()}

<style lang="scss">
  @use "../lib/theme.scss";

  :global(*) {
    box-sizing: border-box;
  }

  :global(html:not([data-theme]), html[data-theme="light"]) {
    --background-color: #{theme.$background-color-light};
    --divider-color: #{theme.$divider-color-light};
    --primary-bg-color: #{theme.$primary-bg-color-light};
    --primary-color: #{theme.$primary-color-light};
    --table-border: #{theme.$table-border-light};
    --table-odd-row-background: #{theme.$table-odd-row-background-light};
    --text-color: #{theme.$text-color-light};
    --text-color-faded: #{theme.$text-color-faded-light};
  }

  :global(html[data-theme="dark"]) {
    --background-color: #{theme.$background-color-dark};
    --divider-color: #{theme.$divider-color-dark};
    --primary-bg-color: #{theme.$primary-bg-color-dark};
    --primary-color: #{theme.$primary-color-dark};
    --table-border: #{theme.$table-border-dark};
    --table-odd-row-background: #{theme.$table-odd-row-background-dark};
    --text-color: #{theme.$text-color-dark};
    --text-color-faded: #{theme.$text-color-faded-dark};
  }

  :global(body) {
    background-color: var(--background-color);
    color: var(--text-color);
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    padding-top: 57px;
    transition:
      background-color theme.$transition-duration ease,
      color theme.$transition-duration ease;
  }

  :global(header) {
    margin-bottom: 1rem;
  }

  :global(a) {
    text-decoration: none;
    color: var(--primary-color);
    transition: color theme.$transition-duration ease;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  :global(h1, h2, h3, h4, h5, h6) {
    font-weight: 300;
    margin-bottom: 1rem;
    margin-top: 1.5rem;
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
    margin-top: 1rem;
    border: 1px solid var(--table-border);
    border-collapse: collapse;
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
