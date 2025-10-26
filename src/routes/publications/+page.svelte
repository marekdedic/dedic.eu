<script lang="ts">
  import type { PublicationSpec } from "$lib/types/PublicationSpec.ts";

  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Publication from "$lib/components/Publication.svelte";

  interface Props {
    data: { publications: Array<PublicationSpec> };
  }

  let { data }: Props = $props();
</script>

<PageContentBox>
  <PageHeader>
    {#snippet title()}
      publications
    {/snippet}
    {#snippet subtitle()}
      my publications in reverse chronological order.
    {/snippet}
  </PageHeader>
  <article>
    {#each data.publications as publication (publication.title)}
      <Publication {...publication} />
    {/each}
  </article>
</PageContentBox>
