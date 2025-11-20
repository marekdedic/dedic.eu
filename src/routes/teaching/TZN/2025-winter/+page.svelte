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
    course={data.teachingSpec.find((c) => c.slug === "TZN")}
    version="2025-winter"
  />

  <article>
    <p>
      The tutorials for the course Theoretical Foundations of Neural Networks
      are held on even weeks on Mondays from 8:00 to 9:40 in room T-115, or as
      announced in lectures and tutorials.
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
      href={asset("/teaching/B251-TZN-materials/pyproject.toml")}
      rel="noopener noreferrer"
      target="_blank">pyproject.toml</a
    >
    and
    <a
      href={asset("/teaching/B251-TZN-materials/uv.lock")}
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
          <td>introduction to neural networks</td>
          <td
            >basics of machine learning in Python, automatic differentiation,
            simple neural networks, their architecture, gradient descent,
            activation functions, hyperparameters and their selection</td
          >
          <td
            ><a
              href={asset("/teaching/B251-TZN-materials/TZN-01.ipynb")}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
          <td
            ><a
              href={asset(
                "/teaching/B251-TZN-materials/TZN-01-solutions.ipynb",
              )}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
        </tr>
        <tr>
          <td>2</td>
          <td>optimization</td>
          <td
            >optimization of neural networks, SGD, Momentum, Nesterov, Adagrad,
            Adadelta, Adam, AdamW</td
          >
          <td
            ><a
              href={asset("/teaching/B251-TZN-materials/TZN-02.ipynb")}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
          <td
            ><a
              href={asset(
                "/teaching/B251-TZN-materials/TZN-02-solutions.ipynb",
              )}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
        </tr>
        <tr>
          <td>3</td>
          <td>regularization</td>
          <td
            >data splitting into training and test sets, overfitting,
            bias-variance trade-off, L1, L2 regularization, early stopping,
            dropout, batching, cross-validation, its variants and usage, double
            descent</td
          >
          <td
            ><a
              href={asset("/teaching/B251-TZN-materials/TZN-03.ipynb")}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
          <td>N/A</td>
        </tr>
        <tr>
          <td>4</td>
          <td>graph neural networks</td>
          <td
            >learning on graphs, recurrent neural networks on graphs, networks
            based on random walks, analogies with text processing, convolutions
            on graphs</td
          >
          <td
            ><a
              href={asset(
                "/teaching/B251-TZN-materials/TZN-04-presentation/TZN-04-presentation.pdf",
              )}
              rel="noopener noreferrer"
              target="_blank">slides</a
            >,
            <a
              href={asset("/teaching/B251-TZN-materials/TZN-04.ipynb")}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>recurrent networks</td>
          <td>recurrent networks, natural language processing, transformers</td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </article>
</PageContentBox>
