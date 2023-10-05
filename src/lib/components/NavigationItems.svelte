<script lang="ts" strictEvents>
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import { createEventDispatcher } from "svelte";
  import Fa from "svelte-fa";

  import NavigationItem from "./NavigationItem.svelte";

  const dispatch = createEventDispatcher<{ click: never }>();
</script>

<NavigationItem
  href="/"
  title="about"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/blog"
  title="blog"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/publications"
  title="publications"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/projects"
  title="projects"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/repositories"
  title="repositories"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/cv"
  title="cv"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/teaching"
  title="teaching"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/people"
  title="people"
  on:click={() => {
    dispatch("click");
  }}
/>
<NavigationItem
  href="/submenus"
  title="submenus"
  on:click={() => {
    dispatch("click");
  }}
/>
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
