<script lang="ts" strictEvents>
  import "@fontsource/roboto/300.css";
  import "@fontsource/roboto/300-italic.css";
  import "@fontsource/roboto/700.css";
  import "@fontsource/roboto/700-italic.css";

  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<div>
  <b>Hello</b>

  <p>You R. Name</p>

  <p>Affiliations. Address. Contacts. Moto. Etc.</p>
  prof_pic.jpg

  <p>555 your office number</p>

  <p>123 your address street</p>

  <p>Your City, State 12345</p>

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
</div>

<style>
  :global(body) {
    font-family: "Roboto", sans-serif;
  }

  div {
    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
    max-width: 800px;
    padding-left: 15px;
    padding-right: 15px;
  }
</style>
