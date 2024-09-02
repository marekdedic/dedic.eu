<script lang="ts" strictEvents>
  import type { PublicationParams } from "$lib/types/PublicationParams.ts";

  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import Publication from "$lib/components/Publication.svelte";

  export let data: { publications: Array<PublicationParams> };
</script>

<PageHeader>
  <span slot="title">publications</span>
  <span slot="subtitle">my publications in reverse chronological order.</span>
</PageHeader>
<PageContent>
  {#each data.publications as publication (publication.title)}
    <Publication {...publication} />
  {/each}
</PageContent>
