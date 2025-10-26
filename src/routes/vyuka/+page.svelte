<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import { resolve } from "$app/paths";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import {
    getCurrentCourseList,
    getPastCourseList,
  } from "$lib/utils/courseLists";

  interface Props {
    data: { teachingSpec: Array<CourseSpec> };
  }

  let { data }: Props = $props();

  const current = $derived(getCurrentCourseList(data.teachingSpec));
  const past = $derived(getPastCourseList(data.teachingSpec));
</script>

<PageContentBox>
  <header>
    <h1>výuka</h1>
    informace k předmětům, které učím – studijní materiály, podmínky splnění, výsledky.
  </header>

  {#if current.length > 0}
    {#each current as { defaultRoute, faculties, name } (name)}
      <a href={resolve(defaultRoute)}>{name} [{faculties.join(", ")}]</a>
    {/each}
  {/if}
  {#if past.length > 0}
    <h2 class="past">past courses</h2>
    {#each past as { defaultRoute, faculties, name } (name)}
      <a class="past" href={resolve(defaultRoute)}
        >{name} [{faculties.join(", ")}]</a
      >
    {/each}
  {/if}
</PageContentBox>

<style>
  a {
    color: unset;
    display: block;
    margin-bottom: 0.5rem;
    text-decoration: underline;
  }

  .past {
    color: var(--text-color-faded);
  }
</style>
