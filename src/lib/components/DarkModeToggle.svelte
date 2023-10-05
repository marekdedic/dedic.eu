<script lang="ts" strictEvents>
  import { faMoon } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import { theme } from "$lib/stores";
</script>

<li>
  <button
    type="button"
    on:click={() => {
      console.log("click");
      theme.toggle();
    }}
  >
    <Fa icon={faMoon} />
  </button>
</li>

<style>
  button {
    background-color: inherit;
    border: 0;
    cursor: pointer;
    padding: 0;
    padding-left: 10px;
    padding-top: 12px;
  }

  li {
    list-style: none;
  }
</style>
