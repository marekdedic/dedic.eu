<script lang="ts">
  import type { PublicationSpec } from "$lib/types/PublicationSpec.ts";

  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Publication from "$lib/components/Publication.svelte";

  interface Props {
    data: { publications: Array<PublicationSpec> };
  }

  let { data }: Props = $props();
</script>

<PageHeader>
  {#snippet title()}
    publications
  {/snippet}
  {#snippet subtitle()}
    my publications in reverse chronological order.
  {/snippet}
</PageHeader>
<PageContent>
  {#each data.publications as publication (publication.title)}
    <Publication {...publication} />
  {/each}
</PageContent>
