<script lang="ts">
  import InlineMath from "$lib/components/InlineMath.svelte";

  interface Props {
    src: string;
  }

  let { src }: Props = $props();
</script>

<div>
  <InlineMath displayMode={true} {src} />
</div>

<style>
  div {
    display: block;
    text-align: center;
    margin: 1em 0;
  }
</style>
