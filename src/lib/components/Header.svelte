<script lang="ts">
  import { page } from "$app/state";

  import HeaderName from "./HeaderName.svelte";
  import Navigation from "./Navigation.svelte";

  let isBase = $derived(page.route.id === "/");
</script>

<header>
  <nav>
    <div>
      {#if !isBase}
        <HeaderName first="Marek" last="Dědič" />
      {/if}
      <Navigation />
    </div>
  </nav>
</header>

<style lang="scss">
  @use "../theme.scss";

  nav {
    background-color: var(--background-color);
    border-bottom: 1px solid var(--divider-color);
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    transition:
      background-color theme.$transition-duration ease,
      border-color theme.$transition-duration ease;
    z-index: 1000;
  }

  div {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
