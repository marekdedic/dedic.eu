<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import { asset } from "$app/paths";
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
    course={data.teachingSpec.find((c) => c.slug === "NSN")}
    version="2026-winter"
  />

  <article>
    <p>
      The tutorials for the course Neural Networks, Machine Learning, and
      Randomness are held on odd weeks on Wednesdays from 8:00 to 9:40 in room
      T-124, or as announced in lectures and tutorials.
    </p>

    <h3>study materials</h3>

    The exercise materials are in the form of <ExternalLink
      href="https://jupyter.org/install.html">Jupyter</ExternalLink
    > notebooks using Python. For easy installation of Python, Jupyter, and the required
    packages, we will use <ExternalLink href="https://docs.astral.sh/uv/"
      >uv</ExternalLink
    >. The first exercise is intended to familiarize you with this technology.
    To replicate the exact environment in which the notebooks were created, you
    can use the files
    <a
      href={asset("/teaching/B252-NSN-materials/pyproject.toml")}
      rel="noopener noreferrer"
      target="_blank">pyproject.toml</a
    >
    and
    <a
      href={asset("/teaching/B252-NSN-materials/uv.lock")}
      rel="noopener noreferrer"
      target="_blank">uv.lock</a
    >.

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>topics</th>
          <th>assignment</th>
          <th>solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>introduction to machine learning</td>
          <td
            >basics of machine learning in Python, supervised, unsupervised,
            reinforcement, self-supervised learning, linear regression, cost
            function, visualizing the regression line, evaluating simple models</td
          >
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>2</td>
          <td>perceptron and logistic regression</td>
          <td
            >logistic regression, binary classification, cost function,
            implementation and visualizitaion of the decision strategy,
            perceptron, its learning algorithm and implementation</td
          >
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>dimensionality reduction and clustering</td>
          <td
            >principal component analysis, dimensionality reduction and its
            mathematical concepts (SVD), visualizing data with PCA, k-means
            clustering, clustering metrics</td
          >
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>decision trees</td>
          <td
            >decision trees, random forrests, their construction, splitting
            criteria and implementation</td
          >
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>bayesian methods</td>
          <td
            >bayes theorem, maximum likelihood estimation vs. maximum
            a-posteriori estimation, naive bayes classifier vs. k-nearest
            neighbor classifier</td
          >
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </article>
</PageContentBox>
