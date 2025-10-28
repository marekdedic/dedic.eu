<script lang="ts">
  import DarkModeToggle from "./DarkModeToggle.svelte";
  import NavigationItem from "./NavigationItem.svelte";

  interface Props {
    onclick?(this: void): void;
  }

  let { onclick }: Props = $props();
</script>

<NavigationItem href="/" {onclick} title="about" />
<NavigationItem href="/publications" {onclick} title="publications" />
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
<NavigationItem href="/teaching" {onclick} title="teaching" />
<DarkModeToggle />
