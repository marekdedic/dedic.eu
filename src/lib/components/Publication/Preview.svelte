<script lang="ts" strictEvents>
  export let title: string;
  export let previewImage: string | undefined;
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
