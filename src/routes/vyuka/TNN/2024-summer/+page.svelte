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

<TeachingSideNav spec={data.teachingSpec} />

<PageContentBox leftSidePanel={true}>
  <CouseHeader
    course={data.teachingSpec.find((c) => c.slug === "TNN")}
    version="2024-summer"
  />

  <article>
    <p>
      Cvičení předmětu teorie neuronových sítí probíhají v liché týdny ve
      čtvrtky od 12:45 do 14:15 v místnosti TH:A-1142 (viz <ExternalLink
        href="https://timetable.fit.cvut.cz/new/courses/NI-TNN"
        >rozvrh</ExternalLink
      >), případně dle změn oznámených na přednáškách a cvičeních. Informace ke
      zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v <ExternalLink
        href="https://courses.fit.cvut.cz/NI-TNN/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
