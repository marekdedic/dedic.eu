<script lang="ts" strictEvents>
  export let title: string;
  export let previewImage: string | undefined;
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
