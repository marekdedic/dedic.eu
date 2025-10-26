<script lang="ts">
  import type { CourseSpec } from "$lib/types/CourseSpec";

  import { asset } from "$app/paths";
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
  <header>
    <h1>teoretické základy neuronových sítí</h1>
    FJFI, ZS 25/26
  </header>

  <article>
    <p>
      Cvičení předmětu teoretické základy neuronových sítí probíhají v sudé
      týdny v pondělí od 8:00 do 9:40 v místnosti T-115, případně dle změn
      oznámených na přednáškách a cvičeních. Informace ke zkoušce a podmínky
      klasifikace posk
    </p>

    <!-- h3>zápočet</h3 -->

    <h3>studijní materiály</h3>

    Materiály ke cvičení mají podobu <ExternalLink
      href="https://jupyter.org/install.html">Jupyter</ExternalLink
    > notebooků využívajících Python. Pro snadnou instalaci pythonu, Jupyteru a potřebných
    balíčků budeme využívat systém <ExternalLink
      href="https://docs.astral.sh/uv/">uv</ExternalLink
    >. K seznámení s touto technologií je určeno první cvičení. Pro replikaci
    přesného prostředí, v němž byly notebooky vytvořeny, můžete využít souborů
    <a
      href={asset("/teaching/B251-TZN-materials/pyproject.toml")}
      rel="noopener noreferrer"
      target="_blank">pyproject.toml</a
    >
    a
    <a
      href={asset("/teaching/B251-TZN-materials/uv.lock")}
      rel="noopener noreferrer"
      target="_blank">uv.lock</a
    >.

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>název</th>
          <th>témata</th>
          <th>zadání</th>
          <th>řešení</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>úvod do neuronových sítí</td>
          <td
            >základy strojového učení v Python, algoritmy pro automatické
            počítání gradientů, jednoduché neuronové sítě, jejich architektura,
            gradientní sestup, aktivační funkce, hyperparametery a jejich volba</td
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
          <td>optimalizace</td>
          <td
            >optimalizace neuronových sítí, algoritmy SGD, Momentum, Nesterov,
            Adagrad, Adadelta, Adam, AdamW</td
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
          <td>regularizace</td>
          <td
            >rozdělení dat na trénovací a testovací sadu, overfitting,
            bias-variance trade-off, L1, L2 regularizace, early stopping,
            dropout, batching, cross-validace, její varianty a použití, fenomén
            double descent</td
          >
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>4</td>
          <td>rekurentní sítě</td>
          <td>rekurentní sítě, zpracovaní přirozeného jazyka, transformery</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>5</td>
          <td>grafové neuronové sítě</td>
          <td
            >učení na grafech, rekurentní neuronové sítě na grafech, sítě
            postavené na náhodných procházkách, analogie se zpracováním textu,
            konvoluce na grafech</td
          >
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
  </article>
</PageContentBox>
