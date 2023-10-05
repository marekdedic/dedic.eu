<script lang="ts" strictEvents>
  import { faBars, faMoon, faXmark } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import MediaQuery from "./MediaQuery.svelte";
  import NavigationItem from "./NavigationItem.svelte";

  let expandNavigation = false;
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
  {#if matches}
    <button class="menu-toggle" type="button" on:click={() => {expandNavigation = !expandNavigation}}>
      <Fa icon={expandNavigation ? faXmark : faBars} size="2x" />
    </button>
    {#if expandNavigation}
      <ul class="vertical-navigation">
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
          <button class="dark-mode-toggle" type="button">
            <Fa icon={faMoon} />
          </button>
        </li>
      </ul>
    {/if}
  {:else}
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
        <button class="dark-mode-toggle" type="button">
          <Fa icon={faMoon} />
        </button>
      </li>
    </ul>
  {/if}
</MediaQuery>

<style>
  button {
    background-color: inherit;
    border: 0;
    cursor: pointer;
    padding: 0;
  }

  ul {
    display: flex;
    margin-bottom: 0;
    margin-left: auto;
    margin-top: 0;
    padding-left: 0;
    text-align: right;
  }

  li {
    list-style: none;
  }

  .dark-mode-toggle {
    padding-left: 10px;
    padding-top: 12px;
  }

  .menu-toggle {
    margin-left: auto;
    padding: .4rem;
  }

  .vertical-navigation {
    flex-direction: column;
  }
</style>
