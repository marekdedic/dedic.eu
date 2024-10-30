<script lang="ts">
  import { onMount, type Snippet } from "svelte";

  interface Props {
    children: Snippet<[boolean]>;
    query: string;
  }

  let { children, query }: Props = $props();

  let mql: MediaQueryList | undefined = undefined;
  let matches = $state(false);

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

{@render children(matches)}
