<script lang="ts" strictEvents>
  import { page } from "$app/stores";

  import HeaderName from "./HeaderName.svelte";
  import Navigation from "./Navigation.svelte";

  $: isBase = $page.route.id === "/";
</script>

<header>
  <nav>
    <div class="container">
      {#if !isBase}
        <HeaderName first="You" last="R. Name" />
      {/if}
      <Navigation />
    </div>
  </nav>
</header>

<style lang="scss">
  @use "../theme.scss";

  nav {
    background-color: theme.$background-color;
    border-bottom: 1px solid theme.$divider-color;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  .container {
    display: flex;
    flex-direction: column;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
