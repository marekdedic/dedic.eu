<script lang="ts" strictEvents>
  import "@fontsource/roboto/300.css";
  import "@fontsource/roboto/300-italic.css";
  import "@fontsource/roboto/400.css";
  import "@fontsource/roboto/400-italic.css";
  import "@fontsource/roboto/700.css";
  import "@fontsource/roboto/700-italic.css";

  import Header from "$lib/components/Header.svelte";
</script>

<Header />

<div>
  <slot />
</div>

<style lang="scss">
  @use "../lib/theme.scss";

  :global(a) {
    text-decoration: none;
    color: theme.$primary-color;
  }

  :global(a:hover) {
    text-decoration: underline;
  }

  :global(body) {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.5;
    margin: 0;
    padding-top: 57px;
  }

  :global(*) {
    box-sizing: border-box;
  }

  :global(svg.svelte-fa) {
    height: 1rem !important;
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