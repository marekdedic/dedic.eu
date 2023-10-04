<script lang="ts" strictEvents>
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import NavigationItem from "./NavigationItem.svelte";
</script>

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

<style>
  button {
    background-color: inherit;
    border: 0;
    padding: 0;
    padding-left: 10px;
    padding-top: 12px;
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
</style>
