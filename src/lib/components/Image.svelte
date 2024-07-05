<script lang="ts" module>
  import type { Picture } from "vite-imagetools";

  const allImages = import.meta.glob<{ default: Picture }>(
    ["../../../static/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}"],
    {
      eager: true,
      query: { enhanced: true },
    },
  );

  function getImage(src: string): Picture {
    return allImages[`../../../static${src}`].default;
  }
</script>

<script lang="ts">
  interface Props {
    alt: string;
    src: string;
  }

  let { alt, src }: Props = $props();

  const image = getImage(src);
</script>

<figure>
  <enhanced:img {alt} src={image} />
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
