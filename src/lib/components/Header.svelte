<script lang="ts" strictEvents>
  import { page } from "$app/stores";

  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import Name from "./Name.svelte";
  import NavigationItem from "./NavigationItem.svelte";

  $: isBase = $page.route.id === "/";
</script>

<header>
  <nav>
    <div class="container">
      {#if !isBase}
        <a class="name" href="/">
          <Name first="You" last="R. Name" />
        </a>
    {/if}
      <ul>
        <NavigationItem href="/" title="about" />
        <NavigationItem href="/blog" title="blog" />
        <NavigationItem href="/publications" title="publications" />
        <NavigationItem href="/projects" title="projects" />
        <NavigationItem href="/repositories" title="repositories" />
        <NavigationItem href="/cv" title="cv" />
        <NavigationItem href="/teaching" title="teaching" />
        <NavigationItem href="/people" title="people" />
        <NavigationItem href="/submenus" title="submenus" />
        <li>
          <button type="button">
            <Fa icon={faMoon} />
          </button>
        </li>
      </ul>
    </div>
  </nav>
</header>

<style lang="scss">
  @use "../theme.scss";

  button {
    background-color: inherit;
    border: 0;
    padding: 0;
    padding-left: 10px;
    padding-top: 12px;
  }

  nav {
    border-bottom: 1px solid theme.$divider-color;
    padding: 0.5rem 1rem;
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
  }

  ul {
    display: flex;
    margin-bottom: 0;
    margin-left: auto;
    margin-top: 0;
    padding-left: 0;
  }

  li {
    list-style: none;
  }

  .container {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }

  .name {
    color: theme.$text-color;
    font-size: 1.25rem;
    margin-bottom: .3125rem;
    margin-right: 1rem;
    margin-top: .3125rem;
    white-space: nowrap;
  }

  .name:hover {
    text-decoration: none;
  }
</style>
