<script lang="ts">
  import type { Snippet } from "svelte";

  import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
  import Fa from "svelte-fa";

  interface Props {
    children: Snippet;
    href: string;
  }

  let { children, href }: Props = $props();
</script>

<a {href} rel="noopener noreferrer" target="_blank">
  {@render children()}
  <Fa icon={faArrowUpRightFromSquare} size="0.6x" translateY={-0.1} />
</a>
