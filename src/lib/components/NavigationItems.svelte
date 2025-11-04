<script lang="ts">
  import { resolve } from "$app/paths";

  import DarkModeToggle from "./DarkModeToggle.svelte";
  import NavigationItem from "./NavigationItem.svelte";

  interface Props {
    onclick?(this: void): void;
  }

  let { onclick }: Props = $props();
</script>

<NavigationItem href={resolve("/")} {onclick} title="about" />
<NavigationItem
  href={resolve("/publications")}
  {onclick}
  title="publications"
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
<NavigationItem href={resolve("/teaching")} {onclick} title="teaching" />
<DarkModeToggle />
