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
    course={data.teachingSpec.find((c) => c.slug === "NMS")}
    version="2025-winter"
  />

  <article>
    <p>
      Cvičení předmětu neuronové sítě, strojové učení a náhodnost probíhají v
      sudé týdny ve středy od 16:15 do 17:45 v místnosti T9:348 (viz <ExternalLink
        href="https://timetable.fit.cvut.cz/new/courses/NI-NMS"
        >rozvrh</ExternalLink
      >), případně dle změn oznámených na přednáškách a cvičeních. Informace ke
      zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v <ExternalLink
        href="https://courses.fit.cvut.cz/NI-NMS/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
