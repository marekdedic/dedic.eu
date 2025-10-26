<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import TeachingSideNav from "$lib/components/TeachingSideNav.svelte";

  interface Props {
    data: { teachingSpec: Array<CourseSpec> };
  }

  let { data }: Props = $props();
</script>

<TeachingSideNav spec={data.teachingSpec} />

<PageContentBox leftSidePanel={true}>
  <header>
    <h1>teorie neuronových sítí</h1>
    FIT, LS 22/23
  </header>

  <article>
    <p>
      Cvičení předmětu teorie neuronových sítí probíhají nepravidelně, viz
      e-mail. Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze
      nalézt v <ExternalLink
        href="https://courses.fit.cvut.cz/NI-TNN/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
