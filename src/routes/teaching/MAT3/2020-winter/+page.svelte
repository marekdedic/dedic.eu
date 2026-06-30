<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import CouseHeader from "$lib/components/CouseHeader.svelte";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import InlineCode from "$lib/components/InlineCode.svelte";
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
    course={data.teachingSpec.find((c) => c.slug === "MAT3")}
    version="2020-winter"
  />

  <article>
    <p>
      Cvičení probíhají každý <b>čtvrtek od 16:30 do 18:10</b>.
    </p>
    <p>
      Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v
      Microsoft Teams, kde by všichni studenti měli být členy týmu <InlineCode
        >Team-B201-01MAT3</InlineCode
      >.
    </p>

    <p>
      Aktuální studijní materiály jsou v Microsoft Teams, z dalších materiálů
      pak mohu doporučit ještě:
    </p>

    <ul>
      <li>
        Sérii videí <ExternalLink
          href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
          >Essence of linear algebra</ExternalLink
        > od 3Blue1Brown
      </li>
    </ul>
  </article>
</PageContentBox>
