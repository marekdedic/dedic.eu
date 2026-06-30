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
    version="2025-summer"
  />

  <article>
    <p>
      Cvičení předmětu teorie neuronových sítí probíhají v sudé týdny ve úterky
      od 14:30 do 16:00 v místnosti T9:351, případně dle změn oznámených na
      přednáškách a cvičeních. Informace ke zkoušce, podmínky splnění předmětu a
      klasifikace lze nalézt v <ExternalLink
        href="https://courses.fit.cvut.cz/NI-TNN/@B242/index.html"
        >FIT courses</ExternalLink
      >.
    </p>
  </article>
</PageContentBox>
