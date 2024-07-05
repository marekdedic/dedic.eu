<script context="module" lang="ts">
  import type { Picture } from "vite-imagetools";

  const allImages = import.meta.glob<{ default: Picture }>(
    ["../../../static/images/**/*.{avif,gif,heif,jpeg,jpg,png,tiff,webp}"],
    {
      eager: true,
      query: { enhanced: true },
    },
  );

  function getImage(src: string): Picture {
    return allImages["../../../static" + src].default;
  }
</script>

<script lang="ts" strictEvents>
  export let alt: string;
  export let src: string;

  const image = getImage(src);
</script>

<enhanced:img {alt} src={image} />
