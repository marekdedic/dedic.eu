<script lang="ts" strictEvents>
  import EnhancedImg from "$lib/components/EnhancedImg.svelte";

  export let title: string;
  export let previewImage: string;
</script>

<figure>
  <EnhancedImg alt={title} src={previewImage} />
</figure>

<style>
  figure {
    margin: 0;
  }

  figure :global(img) {
    height: auto;
    max-width: 100%;
  }
</style>
