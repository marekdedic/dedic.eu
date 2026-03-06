<script lang="ts">
  import katex from "katex";

  interface Props {
    displayMode?: boolean;
    src: string;
  }

  let { displayMode = false, src }: Props = $props();

  let outputElement: HTMLSpanElement | undefined = $state();

  $effect(() => {
    if (outputElement === undefined) {
      return;
    }
    katex.render(src, outputElement, {
      displayMode,
      throwOnError: false,
    });
  });
</script>

<span bind:this={outputElement}></span>
