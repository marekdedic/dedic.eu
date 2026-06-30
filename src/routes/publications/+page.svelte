<script lang="ts">
  import type { PublicationSpec } from "$lib/types/PublicationSpec.ts";

  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import Publication from "$lib/components/Publication.svelte";

  interface Props {
    data: { publications: Array<PublicationSpec> };
  }

  let { data }: Props = $props();
</script>

<PageContentBox>
  <header>
    <h1>publications</h1>
    my publications in reverse chronological order.
  </header>

  <article>
    {#each data.publications as publication (publication.title)}
      <Publication {publication} />
    {/each}
  </article>
</PageContentBox>
