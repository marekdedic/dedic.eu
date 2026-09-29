<script lang="ts" module>
  import type { CourseSpec, CourseVersionMeta } from "$lib/types/CourseSpec";

  export const version: CourseVersionMeta = {
    offerings: [
      {
        code: "TNN",
        faculty: "FIT",
        name: "theory of neural networks",
      },
    ],
    semester: "summer 2023",
  };
</script>

<script lang="ts">
  import CourseHeader from "$lib/components/CourseHeader.svelte";
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
  <CourseHeader spec={data.teachingSpec} />

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
