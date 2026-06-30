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
    course={data.teachingSpec.find((c) => c.slug === "LAL2")}
    version="2021-summer"
  />

  <article>
    <p>
      Cvičení probíhají každé <b>úterý od 11:30 do 13:10</b>.
    </p>
    <p>
      Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v
      Microsoft Teams, kde by všichni studenti měli být členy týmu <InlineCode
        >Team-B202-01LAL2</InlineCode
      >, případně na <ExternalLink
        href="https://kmlinux.fjfi.cvut.cz/~balkolub/vyukaLAAleto2021.html"
        >webu přednášejících</ExternalLink
      >.
    </p>

    <h3>studijní materiály</h3>

    <p>
      Aktuální studijní materiály od přednášejících jsou v Microsoft Teams, z
      dalších materiálů pak mohu doporučit ještě:
    </p>

    <ul>
      <li>
        <ExternalLink href="https://nsa.fjfi.cvut.cz/david/other/reseni-LA2.pdf"
          >Řešené příklady ze cvičení</ExternalLink
        > od prof. Krejčiříka
      </li>
      <li>
        <ExternalLink
          href="https://kmlinux.fjfi.cvut.cz/~balkolub/Vyuka/zima2012/LAPzima2012/sbirka_array.pdf"
          >Sbírka příkladů</ExternalLink
        > z lineární algebry
      </li>
      <li>
        Sérii videí <ExternalLink
          href="https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
          >Essence of linear algebra</ExternalLink
        > od 3Blue1Brown
      </li>
    </ul>
  </article>
</PageContentBox>
