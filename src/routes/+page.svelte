<script lang="ts" strictEvents>
  import HeaderImage from "$lib/components/HeaderImage.svelte";
  import InlineCode from "$lib/components/InlineCode.svelte";
  import Name from "$lib/components/Name.svelte";
  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import PageSection from "$lib/components/PageSection.svelte";
  import Publication from "$lib/components/Publication.svelte";
  import type { JsonPublication } from "$lib/types/JsonPublication.ts";

  export let data: { publications: Array<JsonPublication> };
</script>

<PageHeader>
  <span slot="title">
    <Name first="You" last="R. Name" />
  </span>
  <span slot="subtitle"
    ><a href="/">Affiliations</a>. Address. Contacts. Moto. Etc.</span
  >
</PageHeader>

<PageContent>
  <PageSection>
    <HeaderImage
      alt="Me"
      src="https://alshedivat.github.io/al-folio/assets/img/prof_pic.jpg?974957d202f671e4fa6700c04e68deae"
    >
      555 your office number 123 your address street Your City, State 12345
    </HeaderImage>

    <p>
      Write your biography here. Tell the world about yourself. Link to your
      favorite <a href="http://reddit.com">subreddit</a>. You can put a picture
      in, too. The code is already in, just name your picture <InlineCode
        >prof_pic.jpg</InlineCode
      > and put it in the <InlineCode>img/</InlineCode> folder.
    </p>

    <p>
      Put your address / P.O. box / other info right below your picture. You can
      also disable any of these elements by editing <InlineCode
        >profile</InlineCode
      > property of the YAML header of your <InlineCode
        >_pages/about.md</InlineCode
      >. Edit <InlineCode>_bibliography/papers.bib</InlineCode> and Jekyll will render
      your <a href="/publications">publications page</a> automatically.
    </p>

    <p>
      Link to your social media connections, too. This theme is set up to use <a
        href="http://fortawesome.github.io/Font-Awesome/">Font Awesome icons</a
      >
      and <a href="https://jpswalsh.github.io/academicons/">Academicons</a>,
      like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar,
      or just disable all of them.
    </p>
  </PageSection>
  <h2>news</h2>
  <p>
    Jan 15, 2016 A simple inline announcement with Markdown emoji! :sparkles:
    :smile:
  </p>
  <p>Nov 7, 2015 A long announcement with details</p>
  <p>Oct 22, 2015 A simple inline announcement.</p>
  <h2>latest posts</h2>
  <p>Jul 12, 2023 a post with bibliography</p>
  <p>Jul 4, 2023 a post with jupyter notebook</p>
  <p>May 12, 2023 a post with custom blockquotes</p>

  <h2 class="no-space">recent publications</h2>

  {#each data.publications.slice(0, 2) as publication (publication.title)}
    <Publication
      abstract={publication.abstract}
      authors={publication.authors}
      bib={publication.bib}
      date={new Date(publication.date)}
      pdf={publication.pdf}
      previewImage={publication.previewImage}
      tags={publication.tags}
      title={publication.title}
    />
  {/each}
</PageContent>

<style>
  .no-space {
    margin-bottom: 0;
  }
</style>
