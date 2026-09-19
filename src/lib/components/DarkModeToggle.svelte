<script lang="ts">
  import { theme } from "$lib/theme.svelte";
  import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
</script>

<li>
  <button
    aria-label="Dark mode toggle"
    onclick={(): void => {
      theme.toggle();
    }}
    type="button"
  >
    <Fa fw icon={theme.value === "dark" ? faSun : faMoon} size="lg" />
  </button>
</li>

<style>
  button {
    background-color: inherit;
    border: 0;
    color: var(--text-color);
    cursor: pointer;
    padding: 0;
    padding-left: 10px;
    padding-top: 11px;
  }

  button:hover {
    color: var(--primary-color);
  }

  li {
    list-style: none;
  }
</style>
