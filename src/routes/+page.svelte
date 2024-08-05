<script lang="ts" strictEvents>
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import HeaderImage from "$lib/components/HeaderImage.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import Name from "$lib/components/Name.svelte";
  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import Publication from "$lib/components/Publication.svelte";
  import type { PublicationParams } from "$lib/types/PublicationParams.ts";

  export let data: { publications: Array<PublicationParams> };
</script>

<PageHeader>
  <span slot="title">
    <Name first="Marek" last="Dědič" />
  </span>
  <span slot="subtitle">
    machine learning scientist at Cisco & PhD student at CTU
  </span>
</PageHeader>

<PageContent>
  <PageSection>
    <HeaderImage alt="Me" src="/images/profile.jpg" />

    <p>
      I am a machine learning researcher working at <ExternalLink
        href="https://cognitive-intelligence.github.io/cognitive-web/"
        >Cisco</ExternalLink
      > and specializing in neural networks and ways to exploit data structure with
      them. At the same time, I am doing a PhD at the <ExternalLink
        href="https://www.fjfi.cvut.cz/en/"
        >Faculty of Nuclear Sciences and Physical Engineering</ExternalLink
      > of the Czech Technical University.
    </p>

    <p>
      My current interests are mostly in graphs and graph neural networks,
      particularly graph structure and its interplay with the performance of
      machine learning tasks on the graph. I proposed a method for graph
      reduction guided by local properties of the graph. Together with my
      colleagues, we study the effect of graph properties on downstream tasks
      and their usability in hyper-parameter optimization for GNNs.
      Additionally, I maintain an interest in multi-instance learning, an
      underdeveloped field of machine learning. I am mainly interested in nested
      hierarchical models and their use in the field of computer network
      security. See more details in the <a href="/publications">publications</a>
      page.
    </p>

    <p>
      Additionally, I am an active member of the Czech Scouting organization.
      Since 2015, I am a lecturer at a summer course for aspiring patrol
      leaders, which I was also leading from 2019 until 2023. I was in previous
      years organising an educator conference for ca. 100 attendees as a
      programme chair or a general chair. I am also combining IT with scouting
      as a software developer for internal applications. Lastly, since 2024, I
      am serving as an elected member of the National Board, the top legislative
      and strategic body of the Czech Scouting organization.
    </p>
  </PageSection>

  <Heading level={2}>recent publications</Heading>

  {#each data.publications.slice(0, 2) as publication (publication.title)}
    <Publication {...publication} />
  {/each}
</PageContent>
