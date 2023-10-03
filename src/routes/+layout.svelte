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
<slot />

<style>
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
</style>
