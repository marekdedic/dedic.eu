<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import CouseHeader from "$lib/components/CouseHeader.svelte";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import PageContentBox from "$lib/components/PageContentBox.svelte";
  import TeachingSideNav from "$lib/components/TeachingSideNav.svelte";

  interface Props {
    data: { teachingSpec: Array<CourseSpec> };
  }

  let { data }: Props = $props();
</script>

<svelte:head>
  <title>Theory of neural networks, summer 2023 — Marek Dědič</title>
  <meta
    name="description"
    content="Theory of neural networks [FIT CTU], summer 2023 — study materials, requirements, and grading, taught by Marek Dědič."
  />
</svelte:head>

<TeachingSideNav spec={data.teachingSpec} />

<PageContentBox leftSidePanel={true}>
  <CouseHeader
    course={data.teachingSpec.find((c) => c.slug === "TNN")}
    version="2023-summer"
  />

  <article>
    <p>
      Cvičení předmětu teorie neuronových sítí probíhají nepravidelně, viz
      e-mail. Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze
      nalézt v <ExternalLink
        href="https://courses.fit.cvut.cz/NI-TNN/@B222/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
