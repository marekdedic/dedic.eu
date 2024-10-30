<script lang="ts">
  interface Props {
    previewImage: string | undefined;
    title: string;
  }

  let { previewImage, title }: Props = $props();
</script>

<figure>
  <picture>
    <img alt={title} src={previewImage} />
  </picture>
</figure>

<style>
  figure {
    margin: 0;
  }

  img {
    max-width: 100%;
  }
</style>
