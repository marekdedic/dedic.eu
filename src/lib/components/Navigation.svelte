<script lang="ts">
  import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  import MediaQuery from "./MediaQuery.svelte";
  import NavigationItems from "./NavigationItems.svelte";

  let expandNavigation = $state(false);
</script>

<MediaQuery query="(max-width: 800px)">
  {#snippet children(matches)}
    {#if matches}
      <div>
        <button
          aria-label="Open/close navigation"
          onclick={() => {
            expandNavigation = !expandNavigation;
          }}
          type="button"
        >
          <Fa icon={expandNavigation ? faXmark : faBars} size="2x" />
        </button>
        {#if expandNavigation}
          <ul class="vertical-navigation">
            <NavigationItems
              onclick={() => {
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
  {/snippet}
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
