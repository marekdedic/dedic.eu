<script lang="ts" module>
  import type { CourseSpec, CourseVersionMeta } from "$lib/types/CourseSpec";

  export const version: CourseVersionMeta = {
    offerings: [
      {
        code: "NMS",
        faculty: "FIT",
        name: "neural networks, machine learning and randomness",
      },
      {
        code: "NAIL138",
        faculty: "MFF",
        name: "neural networks, machine learning, and randomness",
      },
    ],
    semester: "winter 2026",
  };
</script>

<script lang="ts">
  import { asset } from "$app/paths";
  import CourseHeader from "$lib/components/CourseHeader.svelte";
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
  <CourseHeader spec={data.teachingSpec} />

  <article>
    <p>
      The tutorials for the course Neural Networks, Machine Learning and
      Randomness are held on odd weeks on Wednesdays (there are some exceptions,
      exact dates bellow) from 11:0 to 12:30 and from 12:45 to 14:15 (two
      parallel groups) in room T9:350.
    </p>

    <h3>credit</h3>
    <p>
      In order to be able to take the exam, you have to attend the tutorials and
      actively participate in them. There is no strict limit on attendance,
      contact me if you will have missed multiple tutorials.
    </p>

    <p>
      Additionally, you have to submit a semester project. The project should
      cover some of the topics of the lectures or tutorials and apply them in
      practice and should consist of some experiments and a report. The topic of
      the project should be agreed with me in advance. After submitting the
      project, you will have to schedule a short call with me to discuss the
      project and answer some questions about it. After that, the project will
      be awarded 0-70 points. Finishing the project is a prerequisite for taking
      the exam.
    </p>

    <h3>study materials</h3>

    <p>
      The exercise materials are in the form of <ExternalLink
        href="https://jupyter.org/install.html">Jupyter</ExternalLink
      > notebooks using Python. For easy installation of Python, Jupyter, and the
      required packages, we will use <ExternalLink
        href="https://docs.astral.sh/uv/">uv</ExternalLink
      >. The first exercise is intended to familiarize you with this technology.
      To replicate the exact environment in which the notebooks were created,
      you can use the files
      <a
        href={asset(
          "/teaching/neural-networks-machine-learning-and-randomness/2026-winter/pyproject.toml",
        )}
        rel="noopener noreferrer"
        target="_blank">pyproject.toml</a
      >
      and
      <a
        href={asset(
          "/teaching/neural-networks-machine-learning-and-randomness/2026-winter/uv.lock",
        )}
        rel="noopener noreferrer"
        target="_blank">uv.lock</a
      >.
    </p>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>date</th>
          <th>name</th>
          <th>topics</th>
          <th>assignment</th>
          <th>solution</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>2026-10-05</td>
          <td>introduction to machine learning</td>
          <td
            >basics of machine learning in Python, supervised, unsupervised,
            reinforcement, self-supervised learning, linear regression, cost
            function, visualizing the regression line, evaluating simple models</td
          >
          <td
            ><a
              href={asset(
                "/teaching/neural-networks-machine-learning-and-randomness/2026-winter/01-introduction-to-machine-learning.ipynb",
              )}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
          <td
            ><a
              href={asset(
                "/teaching/neural-networks-machine-learning-and-randomness/2026-winter/01-introduction-to-machine-learning-solutions.ipynb",
              )}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
        </tr>
        <tr>
          <td>2</td>
          <td>2026-10-07</td>
          <td>perceptron and logistic regression</td>
          <td
            >logistic regression, binary classification, cost function,
            implementation and visualizitaion of the decision strategy,
            perceptron, its learning algorithm and implementation</td
          >
          <td
            ><a
              href={asset(
                "/teaching/neural-networks-machine-learning-and-randomness/2026-winter/02-perceptron-and-logistic-regression.ipynb",
              )}
              rel="noopener noreferrer"
              target="_blank">notebook</a
            ></td
          >
          <td></td>
        </tr>
        <tr>
          <td>3</td>
          <td>2026-10-21</td>
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
          <td>2026-11-18</td>
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
          <td>2026-12-02</td>
          <td>bayesian methods</td>
          <td
            >bayes theorem, maximum likelihood estimation vs. maximum
            a-posteriori estimation, naive bayes classifier vs. k-nearest
            neighbor classifier</td
          >
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>6</td>
          <td>2026-12-16</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </article>
</PageContentBox>
