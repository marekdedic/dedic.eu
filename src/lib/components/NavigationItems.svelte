<script lang="ts" strictEvents>
  import { createEventDispatcher } from "svelte";

  import DarkModeToggle from "./DarkModeToggle.svelte";
  import NavigationItem from "./NavigationItem.svelte";

  const dispatch = createEventDispatcher<{ click: null }>();
</script>

<NavigationItem
  href="/"
  title="about"
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
<!-- NavigationItem
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
/ -->
<NavigationItem
  href="/vyuka"
  title="teaching"
  on:click={() => {
    dispatch("click");
  }}
/>
<DarkModeToggle />
