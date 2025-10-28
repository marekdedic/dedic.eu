<script lang="ts">
  import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  interface Props {
    current: string;
    onselect(this: void, key: string): void;
    options: Record<string, string>;
  }

  let { current, onselect, options }: Props = $props();

  const changeable = $derived(Object.keys(options).length > 1);
  let open = $state(false);
</script>

{#if open}
  <button
    class="overlay"
    aria-label="Overlay for select"
    onclick={(): void => {
      open = false;
    }}
    type="button"
  ></button>
{/if}
<div class="wrapper">
  <button
    class="current"
    class:changeable
    class:open
    onclick={(): void => {
      if (changeable) {
        open = !open;
      }
    }}
    type="button"
  >
    {options[current]}
    {#if changeable}
      &nbsp;<Fa icon={faAngleDown} />
    {/if}
  </button>
  {#if open}
    <div class="options">
      {#each Object.entries(options) as [key, label] (key)}
        {#if key !== current}
          <button
            class="option"
            onclick={(): void => {
              open = false;
              onselect(key);
            }}
            type="button">{label}</button
          >
        {/if}
      {/each}
    </div>
  {/if}
</div>

<style>
  .wrapper {
    display: inline-block;
    position: relative;
  }

  .current {
    background: var(--divider-color);
    border-radius: 0.25rem;
    cursor: default;
    padding: 0.7rem;
    position: relative;
  }

  .open {
    border-radius: 0.25rem 0.25rem 0 0;
    z-index: 2001;
  }

  .changeable {
    background: var(--primary-bg-color);
    cursor: pointer;
  }

  .overlay {
    cursor: default;
    inset: 0;
    position: fixed;
    z-index: 2000;
  }

  .options {
    background: var(--divider-color);
    border-radius: 0 0 0.25rem 0.25rem;
    left: 0;
    min-width: 100%;
    position: absolute;
    top: 100%;
    z-index: 2001;
  }

  button {
    all: unset;
    cursor: pointer;
    text-wrap: nowrap;
    user-select: none;
  }

  .option {
    box-sizing: border-box;
    display: block;
    padding: 0.7rem;
    width: 100%;
  }

  .option:hover {
    background: var(--primary-bg-color);
  }
</style>
