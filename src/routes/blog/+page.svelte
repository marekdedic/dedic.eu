<script lang="ts">
  import type { BlogPostSpec } from "$lib/types/BlogPostSpec";

  import BlogPostListing from "$lib/components/BlogPostListing.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";

  interface Props {
    data: { posts: Array<BlogPostSpec> };
  }

  let { data }: Props = $props();
</script>

<PageContentBox>
  <header>
    <h1>blog</h1>
    my writing on whatever I find interesting.
  </header>

  <article>
    {#each data.posts as post (post.slug)}
      <BlogPostListing {post} />
    {/each}
  </article>
</PageContentBox>
