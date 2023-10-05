<script lang="ts" strictEvents>
  import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import MediaQuery from "./MediaQuery.svelte";
  import NavigationItems from "./NavigationItems.svelte";

  let expandNavigation = false;
</script>

<MediaQuery query="(max-width: 800px)" let:matches>
  {#if matches}
    <div>
      <button
        type="button"
        on:click={() => {
          expandNavigation = !expandNavigation;
        }}
      >
        <Fa icon={expandNavigation ? faXmark : faBars} size="2x" />
      </button>
      {#if expandNavigation}
        <ul class="vertical-navigation">
          <NavigationItems
            on:click={() => {
              expandNavigation = false;
            }}
          />
        </ul>
      {/if}
    </div>
  {:else}
    <ul>
      <NavigationItems />
    </ul>
  {/if}
</MediaQuery>

<style lang="scss">
  @use "../theme.scss";

  button {
    background-color: inherit;
    border: 0;
    color: var(--text-color);
    cursor: pointer;
    margin-left: auto;
    padding: 0.4rem;
    transition: color theme.$transition-duration ease;
  }

  button:hover {
    color: var(--primary-color);
    transition: color theme.$transition-duration ease;
  }

  div {
    animation: max-height 5s ease;
    display: flex;
    flex-direction: column;
    margin-left: auto;
  }

  ul {
    display: flex;
    margin-bottom: 0;
    margin-left: auto;
    margin-top: 0;
    padding-left: 0;
    text-align: right;
  }

  .vertical-navigation {
    flex-direction: column;
  }
</style>
