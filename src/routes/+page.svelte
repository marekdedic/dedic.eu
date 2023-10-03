<script lang="ts" strictEvents>
import HeaderImage from "$lib/components/HeaderImage.svelte";
import PageContent from "$lib/components/PageContent.svelte";
import PageHeader from "$lib/components/PageHeader.svelte";

</script>

<PageHeader>
  <span slot="title">
    <span class="first-name">You</span> R. Name
  </span>
  <span slot="subtitle"><a href="#">Affiliations</a>. Address. Contacts. Moto. Etc.</span>
</PageHeader>

<PageContent>
  <HeaderImage src="https://alshedivat.github.io/al-folio/assets/img/prof_pic.jpg?974957d202f671e4fa6700c04e68deae">
    555 your office number
    123 your address street
    Your City, State 12345
  </HeaderImage>

  <p>Write your biography here. Tell the world about yourself. Link to your favorite subreddit. You can put a picture in, too. The code is already in, just name your picture prof_pic.jpg and put it in the img/ folder.</p>

  <p>Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing profile property of the YAML header of your _pages/about.md. Edit _bibliography/papers.bib and Jekyll will render your publications page automatically.</p>

  <p>Link to your social media connections, too. This theme is set up to use Font Awesome icons and Academicons, like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.</p>
  news
  <p>Jan 15, 2016 	A simple inline announcement with Markdown emoji! :sparkles: :smile:</p>
  <p>Nov 7, 2015 	A long announcement with details</p>
  <p>Oct 22, 2015 	A simple inline announcement.</p>
  <p>latest posts</p>
  <p>Jul 12, 2023 	a post with bibliography</p>
  <p>Jul 4, 2023 	a post with jupyter notebook</p>
  <p>May 12, 2023 	a post with custom blockquotes</p>
  <p>selected publications</p>
  1935

      PhysRev
      Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?
      A. Einstein, B. Podolsky, and N. Rosen
      Phys. Rev., May 1935

  Article has an altmetric score of 812
  11k
  11k total citations on Dimensions.
</PageContent>

<style>
  .first-name {
    font-weight: 700;
  }
</style>
