<script lang="ts">
  import type { PublicationParams } from "$lib/types/PublicationParams.ts";

  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Publication from "$lib/components/Publication.svelte";

  interface Props {
    data: { publications: Array<PublicationParams> };
  }

  let { data }: Props = $props();
</script>

<PageHeader>
  {#snippet title()}
    <span>publications</span>
  {/snippet}
  {#snippet subtitle()}
    <span>my publications in reverse chronological order.</span>
  {/snippet}
</PageHeader>
<PageContent>
  {#each data.publications as publication (publication.title)}
    <Publication {...publication} />
  {/each}
</PageContent>
