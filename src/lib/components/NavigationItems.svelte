<script lang="ts" strictEvents>
  import { createEventDispatcher } from "svelte";

  import DarkModeToggle from "./DarkModeToggle.svelte";
  import NavigationItem from "./NavigationItem.svelte";

  const dispatch = createEventDispatcher<{ click: void }>();
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
<DarkModeToggle />
