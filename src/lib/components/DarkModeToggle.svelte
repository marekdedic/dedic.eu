<script lang="ts" strictEvents>
  import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import { theme } from "$lib/stores";
</script>

<li>
  <button
    type="button"
    on:click={() => {
      theme.toggle();
    }}
  >
    <Fa icon={$theme === "dark" ? faSun : faMoon} size="lg" />
  </button>
</li>

<style lang="scss">
  @use "../theme.scss";

  button {
    background-color: inherit;
    border: 0;
    color: var(--text-color);
    cursor: pointer;
    padding: 0;
    padding-left: 10px;
    padding-top: 11px;
    transition: color theme.$transition-duration ease;
  }

  button:hover {
    color: var(--primary-color);
    transition: color theme.$transition-duration ease;
  }

  li {
    list-style: none;
  }
</style>
