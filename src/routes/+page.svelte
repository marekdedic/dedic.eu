<script lang="ts">
  import type { PublicationSpec } from "$lib/types/PublicationSpec.ts";

  import { resolve } from "$app/paths";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import HeaderImage from "$lib/components/HeaderImage.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import Name from "$lib/components/Name.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import Publication from "$lib/components/Publication.svelte";

  interface Props {
    data: { publications: Array<PublicationSpec> };
  }

  let { data }: Props = $props();
</script>

<PageContentBox>
  <PageHeader>
    {#snippet title()}
      <Name first="Marek" last="Dědič" />
    {/snippet}
    {#snippet subtitle()}
      executive director of EA Czechia & machine learning scientist
    {/snippet}
  </PageHeader>

  <article>
    <PageSection>
      <HeaderImage alt="Me" src="/images/profile.jpg" />

      <p>
        I am the executive director of <ExternalLink
          href="https://www.efektivni-altruismus.cz/en/"
          >Effective altruism Czechia</ExternalLink
        > and a machine learning researcher specializing in neural networks and ways
        to exploit data structure with them. I am doing a PhD at <ExternalLink
          href="https://cognitive-intelligence.github.io/cognitive-web/"
          >Cisco</ExternalLink
        > and the <ExternalLink href="https://www.fjfi.cvut.cz/en/"
          >Faculty of Nuclear Sciences and Physical Engineering</ExternalLink
        > of the Czech Technical University.
      </p>

      <p>
        My current research interests are mostly in graphs and graph neural
        networks, particularly graph structure and its interplay with the
        performance of machine learning tasks on the graph. I proposed a method
        for graph reduction guided by local properties of the graph. Together
        with my colleagues, we study the effect of graph properties on
        downstream tasks and their usability in hyper-parameter optimization for
        GNNs. Additionally, I maintain an interest in multi-instance learning,
        an underdeveloped field of machine learning. I am mainly interested in
        nested hierarchical models and their use in the field of computer
        network security. See more details in the <a
          href={resolve("/publications")}>publications</a
        > page.
      </p>

      <p>
        Additionally, I am an active member of the Czech Scouting organization.
        Since 2015, I am a lecturer at a summer course for aspiring patrol
        leaders, which I was also leading from 2019 until 2023. I was in
        previous years organising an educator conference for ca. 100 attendees
        as a programme chair or a general chair. I am also combining IT with
        scouting as a software developer for internal applications. Lastly,
        since 2024, I am serving as an elected member of the National Board, the
        top legislative and strategic body of the Czech Scouting organization.
      </p>
    </PageSection>

    <Heading level={2}>recent publications</Heading>

    {#each data.publications.slice(0, 2) as publication (publication.title)}
      <Publication {...publication} />
    {/each}
  </article>
</PageContentBox>
