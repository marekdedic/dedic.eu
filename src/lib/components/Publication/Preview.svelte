<script lang="ts">
  interface Props {
    previewImage: string | undefined;
    title: string;
  }

  let { previewImage, title }: Props = $props();
</script>

<figure>
  <enhanced:img class="image" alt={title} src={previewImage} />
</figure>

<style>
  figure {
    margin: 0;
  }

  .image {
    max-width: 100%;
  }
</style>
