<script lang="ts">
  import { theme } from "$lib/theme.svelte";
  import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";
</script>

<li>
  <button
    class:light={theme.value !== "dark"}
    aria-label="Dark mode toggle"
    onclick={(): void => {
      theme.toggle();
    }}
    type="button"
  >
    <Fa icon={theme.value === "dark" ? faSun : faMoon} size="lg" />
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

  .light {
    margin-right: 0.275rem;
  }
</style>
