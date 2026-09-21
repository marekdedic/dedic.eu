<script lang="ts">
  import type { BlogPostSpec } from "$lib/types/BlogPostSpec";

  import { resolve } from "$app/paths";
  import Image from "$lib/components/Image.svelte";
  import Metadata from "$lib/components/Publication/Metadata.svelte";

  interface Props {
    post: BlogPostSpec;
  }

  let { post }: Props = $props();
  const {
    date,
    description,
    previewImage,
    slug,
    tags = [],
    title,
  } = $derived(post);
</script>

<a href={resolve(`/blog/${slug}` as "/")}>
  <div class="body">
    <h2>{title}</h2>
    <Metadata {date} inline {tags} />
    <p>{description}</p>
  </div>
  {#if previewImage !== undefined}
    <div class="preview">
      <Image alt={title} src={previewImage} />
    </div>
  {/if}
</a>

<style>
  a {
    border-bottom: 1px solid var(--divider-color);
    color: unset;
    display: flex;
    gap: 1.5rem;
    padding-bottom: 2rem;
    padding-top: 2rem;
    text-decoration: none;
  }

  a:first-of-type {
    padding-top: 0;
  }

  a:last-of-type {
    border-bottom: none;
  }

  .body {
    flex: 1 1 auto;
  }

  h2 {
    margin-bottom: 0.3rem;
    margin-top: 0;
  }

  a:hover {
    text-decoration: none;
  }

  a:hover h2 {
    text-decoration: underline;
  }

  p {
    margin-bottom: 0;
    margin-top: 0.5rem;
  }

  .preview {
    align-items: center;
    display: flex;
    flex: 0 0 30%;
  }

  @media (width <= 800px) {
    a {
      flex-direction: column;
    }
  }
</style>
