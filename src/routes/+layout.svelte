<script lang="ts" strictEvents>
  import "@fontsource/roboto/300.css";
  import "@fontsource/roboto/300-italic.css";
  import "@fontsource/roboto/400.css";
  import "@fontsource/roboto/400-italic.css";
  import "@fontsource/roboto/700.css";
  import "@fontsource/roboto/700-italic.css";

  import { onDestroy, onMount } from "svelte";

  import Header from "$lib/components/Header.svelte";
  import { theme } from "$lib/stores";

  interface $$Slots {
    default: Record<string, never>;
  }

  let unsubscribe: (() => void) | undefined = undefined;

  onMount(() => {
    if ("theme" in localStorage) {
      theme.set(localStorage.theme as string);
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      theme.set("dark");
    }

    unsubscribe = theme.subscribe((value) => {
      document.documentElement.dataset.theme = value;

      localStorage.setItem("theme", value);
    });
  });

  onDestroy(() => {
    if (unsubscribe !== undefined) {
      unsubscribe();
    }
  });
</script>

<Header />

<div>
  <slot />
</div>

<style lang="scss">
  @use "../lib/theme.scss";

  :global(*) {
    box-sizing: border-box;
  }

  :global(html[data-theme="dark"]) {
    --background-color: #{theme.$background-color-dark};
    --divider-color: #{theme.$divider-color-dark};
    --primary-bg-color: #{theme.$primary-bg-color-dark};
    --primary-color: #{theme.$primary-color-dark};
    --text-color: #{theme.$text-color-dark};
  }

  :global(html[data-theme="light"]) {
    --background-color: #{theme.$background-color-light};
    --divider-color: #{theme.$divider-color-light};
    --primary-bg-color: #{theme.$primary-bg-color-light};
    --primary-color: #{theme.$primary-color-light};
    --text-color: #{theme.$text-color-light};
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
    margin-top: 0;
  }

  :global(h2) {
    font-size: 2rem;
  }

  div {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
