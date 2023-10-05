<script lang="ts" strictEvents>
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import NavigationItem from "./NavigationItem.svelte";
</script>

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

<style>
  button {
    background-color: inherit;
    border: 0;
    cursor: pointer;
    padding: 0;
    padding-left: 10px;
    padding-top: 12px;
  }

  li {
    list-style: none;
  }
</style>
