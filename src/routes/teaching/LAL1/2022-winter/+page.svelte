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
    course={data.teachingSpec.find((c) => c.slug === "LAL1")}
    version="2022-winter"
  />

  <article>
    <p>
      Cvičení probíhají každé <b>úterý od 8:00 do 9:40</b>
      v místnosti <b>T-207</b>.
    </p>
    <p>
      Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v
      Microsoft Teams, kde by všichni studenti měli být členy týmu <InlineCode
        >Team-B221-01LAL</InlineCode
      >, případně na <ExternalLink
        href="https://kmlinux.fjfi.cvut.cz/~ambrop1/?loc=lna1&lg=cs"
        >webu přednášejících</ExternalLink
      >.
    </p>

    <h3>studijní materiály</h3>

    <p>
      Aktuální studijní materiály od přednášejících jsou v Microsoft Teams,
      obecně jde hlavně o:
    </p>

    <ul>
      <li>
        <ExternalLink href="https://people.fjfi.cvut.cz/balkolub/galleryW20/"
          >Skripta</ExternalLink
        > k přednáškám
      </li>
      <li>
        <ExternalLink
          href="https://kmlinux.fjfi.cvut.cz/~ambrop1/?loc=lna1&lg=cs"
          >Seznamy příkladů</ExternalLink
        >, z nichž část budeme řešit na cvičeních
      </li>
    </ul>

    <p>Z dalších materiálů pak mohu doporučit ještě:</p>

    <ul>
      <li>
        <ExternalLink href="https://nsa.fjfi.cvut.cz/david/other/reseni-LA1.pdf"
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
      <li>
        Interaktivní demo <ExternalLink
          href="https://yizhe-ang.github.io/matrix-explorable/"
          >The matrix arcade</ExternalLink
        > vhodné k 9. cvičení o lineárních zobrazeních.
      </li>
    </ul>
  </article>
</PageContentBox>
