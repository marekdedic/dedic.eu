<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import { resolve } from "$app/paths";
  import LeftSidePanel from "$lib/components/LeftSidePanel.svelte";
  import {
    getCurrentCourseList,
    getPastCourseList,
  } from "$lib/utils/courseLists";
  import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  interface Props {
    spec: Array<CourseSpec>;
  }

  let { spec }: Props = $props();

  let inlinePanelOpen = $state(false);

  const current = $derived(getCurrentCourseList(spec));
  const past = $derived(getPastCourseList(spec));
</script>

{#snippet withoutFirstHeading()}
  {#if current.length > 0}
    {#each current as { defaultRoute, faculty, name } (name)}
      <a href={resolve(defaultRoute)}>{name} [{faculty}]</a>
    {/each}
  {:else}
    <p>I am not teaching any courses currently.</p>
  {/if}
  {#if past.length > 0}
    <h3 class="past">past courses</h3>
    {#each past as { defaultRoute, faculty, name } (name)}
      <a class="past" href={resolve(defaultRoute)}>{name} [{faculty}]</a>
    {/each}
  {/if}
{/snippet}

<LeftSidePanel>
  <h3>my courses</h3>
  {@render withoutFirstHeading()}
  {#snippet inlineVersion()}
    <div>
      {#if inlinePanelOpen}
        <button
          onclick={(): void => {
            inlinePanelOpen = false;
          }}
          type="button"
        >
          <h3>my courses &nbsp;<Fa icon={faAngleUp} /></h3>
        </button>
        {@render withoutFirstHeading()}
      {:else}
        <button
          onclick={(): void => {
            inlinePanelOpen = true;
          }}
          type="button"
        >
          <h3>other courses &nbsp;<Fa icon={faAngleDown} /></h3>
        </button>
      {/if}
    </div>
  {/snippet}
</LeftSidePanel>

<style>
  div {
    background: var(--primary-bg-color);
    border-radius: 0.25rem;
    padding: 1rem;
    margin-bottom: -2rem;
  }

  button {
    all: unset;
    cursor: pointer;
    display: block;
  }

  button + * {
    margin-top: 1rem;
  }

  h3:first-child {
    margin-top: 0;
  }

  button h3 {
    margin-bottom: 0;
  }

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
