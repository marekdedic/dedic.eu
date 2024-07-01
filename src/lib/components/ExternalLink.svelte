<script lang="ts" strictEvents>
  import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  export let href: string;

  interface $$Slots {
    default: Record<string, never>;
  }
</script>

<a {href} rel="noopener noreferrer" target="_blank">
  <slot />
  <Fa icon={faArrowUpRightFromSquare} size="0.6x" translateY={-0.1} />
</a>
