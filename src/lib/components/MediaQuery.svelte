<script lang="ts" strictEvents>
  import { onMount } from "svelte";

  export let query: string;

  interface $$Slots {
    default: { matches: boolean };
  }

  let mql: MediaQueryList | undefined;
  let matches = false;

  const mqlListener = (v: MediaQueryListEvent): void => {
    matches = v.matches;
  };

  function removeActiveListener(): void {
    if (mql) {
      mql.removeEventListener("change", mqlListener);
    }
  }

  function addNewListener(): void {
    mql = window.matchMedia(query);
    mql.addEventListener("change", mqlListener);
    matches = mql.matches;
  }

  onMount(() => {
    removeActiveListener();
    addNewListener();
    return (): void => {
      removeActiveListener();
    };
  });
</script>

<slot {matches} />
