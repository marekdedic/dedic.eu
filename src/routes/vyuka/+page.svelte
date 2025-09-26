<script lang="ts">
  import { base } from "$app/paths";
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import GoogleSheet from "$lib/components/GoogleSheet.svelte";
  import Heading from "$lib/components/Heading.svelte";
  import InlineCode from "$lib/components/InlineCode.svelte";
  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
  import ToC from "$lib/components/ToC.svelte";
</script>

<PageHeader>
  {#snippet title()}
    <span>výuka</span>
  {/snippet}
  {#snippet subtitle()}
    <span>
      informace k předmětům, které učím – studijní materiály, podmínky splnění,
      výsledky.
    </span>
  {/snippet}
</PageHeader>

<ToC />

<PageContent>
  <Heading level={2}
    >teoretické základy neuronových sítí – FJFI, ZS 25/26</Heading
  >

  <p>
    Cvičení předmětu teoretické základy neuronových sítí probíhají v sudé týdny
    v pondělí od 8:00 do 9:40 v místnosti T-115, případně dle změn oznámených na
    přednáškách a cvičeních. Informace ke zkoušce a podmínky klasifikace posk
  </p>

  <!-- h3>zápočet</h3 -->

  <h3>studijní materiály</h3>

  Materiály ke cvičení mají podobu <ExternalLink
    href="https://jupyter.org/install.html">Jupyter</ExternalLink
  > notebooků využívajících Python. Pro snadnou instalaci pythonu, Jupyteru a potřebných
  balíčků budeme využívat systém <ExternalLink href="https://docs.astral.sh/uv/"
    >uv</ExternalLink
  >. K seznámení s touto technologií je určeno první cvičení. Pro replikaci
  přesného prostředí, v němž byly notebooky vytvořeny, můžete využít souborů
  <a
    href={`${base}/teaching/B251-TZN-materials/pyproject.toml`}
    rel="noopener noreferrer"
    target="_blank">pyproject.toml</a
  >
  a
  <a
    href={`${base}/teaching/B251-TZN-materials/uv.lock`}
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
          >základy strojového učení v Python, algoritmy pro automatické počítání
          gradientů, jednoduché neuronové sítě, jejich architektura, gradientní
          sestup, aktivační funkce, hyperparametery a jejich volba</td
        >
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>2</td>
        <td>optimalizace</td>
        <td
          >optimalizace neuronových sítí, algoritmy SGD, Momentum, Nesterov,
          Adagrad, Adadelta, Adam, AdamW</td
        >
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>3</td>
        <td>regularizace</td>
        <td
          >rozdělení dat na trénovací a testovací sadu, overfitting,
          bias-variance trade-off, L1, L2 regularizace, early stopping, dropout,
          batching, cross-validace, její varianty a použití, fenomén double
          descent</td
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

  <Heading level={2}
    >neuronové sítě, strojové učení a náhodnost – FIT, ZS 25/26</Heading
  >

  <p>
    Cvičení předmětu neuronové sítě, strojové učení a náhodnost probíhají v sudé
    týdny ve středy od 16:15 do 17:45 v místnosti T9:348 (viz <ExternalLink
      href="https://timetable.fit.cvut.cz/new/courses/NI-NMS"
      >rozvrh</ExternalLink
    >), případně dle změn oznámených na přednáškách a cvičeních. Informace ke
    zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v <ExternalLink
      href="https://courses.fit.cvut.cz/NI-NMS/index.html"
      >FIT courses</ExternalLink
    >.
  </p>

  <Heading level={2}>teorie neuronových sítí – FIT, LS 24/25</Heading>

  <p>
    Cvičení předmětu teorie neuronových sítí probíhají v sudé týdny ve úterky od
    14:30 do 16:00 v místnosti T9:351 (viz <ExternalLink
      href="https://timetable.fit.cvut.cz/new/courses/NI-TNN"
      >rozvrh</ExternalLink
    >), případně dle změn oznámených na přednáškách a cvičeních. Informace ke
    zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v <ExternalLink
      href="https://courses.fit.cvut.cz/NI-TNN/index.html"
      >FIT courses</ExternalLink
    >.
  </p>

  <Heading level={2}>lineární algebra 1 – FJFI, ZS 24/25</Heading>

  <p>
    Cvičení pro obory Aplikace informatiky v přírodních vědách a Aplikované
    matematicko-stochastické metody probíhají každé <b
      >úterý od 14:00 do 15:40</b
    >
    v místnosti <b>B-115</b>.
  </p>
  <p>
    Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v
    Microsoft Teams, kde by všichni studenti měli být členy týmu <InlineCode
      >Team-B241-01LAL</InlineCode
    >, případně na <ExternalLink
      href="https://kmlinux.fjfi.cvut.cz/~ambrop1/?loc=lna1&lg=cs"
      >webu přednášejících</ExternalLink
    >.
  </p>

  <h3>studijní materiály</h3>

  <p>
    Aktuální studijní materiály od přednášejících jsou v Microsoft Teams, obecně
    jde hlavně o:
  </p>

  <ul>
    <li>
      <ExternalLink href="https://people.fjfi.cvut.cz/balkolub/galleryW20/"
        >Skripta</ExternalLink
      > k přednáškám
    </li>
    <li>
      <ExternalLink href="https://kmlinux.fjfi.cvut.cz/~ambrop1/?loc=lna1&lg=cs"
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

  <h3>podmínky zápočtu</h3>

  Na konci semestru na základě práce při cvičeních může každý získat kromě
  zápočtu až 10% navíc k praktické části zkoušky (podrobnosti v podmínkách
  zkoušky). Získání zápočtu i tato bonusová procenta se počítají z bodů
  získaných během cvičení. Body lze získat třemi různými způsoby:

  <ul>
    <li>
      Na začátku každého cvičení (počínaje druhým, včetně posledního) se bude
      psát mini-test obsahující 1 příklad typově z předcházejícího cvičení. Za
      každý test lze získat maximálně 1 bod. Testy jsou <i>open-book</i>, tedy
      je povoleno používání jakýchkoliv materiálů (skripta, vlastní
      poznámky...), není povoleno komunikovat s kýmkoliv dalším či používat
      software řešící příklady.
    </li>
    <li>
      Za aktivitu při cvičeních (počítání příkladů u tabule apod.) lze získat za
      každé cvičení 0.5 bodu.
    </li>
    <li>
      Pro ty, kdo nenasbírají dostatečný počet bodů, budou ke konci semestru
      zadané <a
        href={`${base}/teaching/B241-01LAL1-homework/B241-01LAL1-homework.pdf`}
        rel="noopener noreferrer"
        target="_blank">3 domácí úkoly</a
      >, z každého z nich lze získat maximálně 1 bod.
    </li>
  </ul>

  <p>Pro získání zápočtu je třeba splnit 2 podmínky:</p>

  <ul>
    <li>Mít maximálně 2 absence.</li>
    <li>Mít součet bodů alespoň 5.</li>
  </ul>

  <p>Bonusová procenta ke zkoušce jsou pak daná součtem bodů, mínus 5.</p>

  <h3>výsledky</h3>

  <GoogleSheet
    height="920px"
    sheetId="2096801087"
    title="Přehled výsledků"
    url="https://docs.google.com/spreadsheets/d/e/2PACX-1vTH5_Nyf7fqlbrQaWU0kIH1D9O4jGirf-FrJyE2yPUd_d9h11pmSzagpXrYUE7yteqPzm9J26aHpSax/pubhtml"
  />

  <Heading level={2}>teorie neuronových sítí – FIT, LS 23/24</Heading>

  <p>
    Cvičení předmětu teorie neuronových sítí probíhají v liché týdny ve čtvrtky
    od 12:45 do 14:15 v místnosti TH:A-1142 (viz <ExternalLink
      href="https://timetable.fit.cvut.cz/new/courses/NI-TNN"
      >rozvrh</ExternalLink
    >), případně dle změn oznámených na přednáškách a cvičeních. Informace ke
    zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v <ExternalLink
      href="https://courses.fit.cvut.cz/NI-TNN/index.html"
      >FIT courses</ExternalLink
    >.
  </p>

  <Heading level={2}>lineární algebra 1 – FJFI, ZS 23/24</Heading>

  <p>
    Cvičení pro 1. kruh oboru jaderná a částicová fyzika probíhají každé <b
      >pondělí od 14:00 do 15:30</b
    >
    v místnosti <b>T-209</b>.
  </p>
  <p>
    Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v
    Microsoft Teams, kde by všichni studenti měli být členy týmu <InlineCode
      >Team-B231-01LAL</InlineCode
    >, případně na <ExternalLink
      href="https://kmlinux.fjfi.cvut.cz/~ambrop1/?loc=lna1&lg=cs"
      >webu přednášejících</ExternalLink
    >.
  </p>

  <h3>studijní materiály</h3>

  <p>
    Aktuální studijní materiály od přednášejících jsou v Microsoft Teams, obecně
    jde hlavně o:
  </p>

  <ul>
    <li>
      <ExternalLink href="https://people.fjfi.cvut.cz/balkolub/galleryW20/"
        >Skripta</ExternalLink
      > k přednáškám
    </li>
    <li>
      <ExternalLink href="https://kmlinux.fjfi.cvut.cz/~ambrop1/?loc=lna1&lg=cs"
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

  <h3>podmínky zápočtu</h3>

  Na konci semestru na základě práce při cvičeních může každý získat kromě
  zápočtu až 10% navíc k praktické části zkoušky (podrobnosti v podmínkách
  zkoušky). Získání zápočtu i tato bonusová procenta se počítají z bodů
  získaných během cvičení. Body lze získat třemi různými způsoby:

  <ul>
    <li>
      Na začátku každého cvičení (počínaje třetím, včetně posledního) se bude
      psát mini-test obsahující 1 příklad typově z předcházejícího cvičení. Za
      každý test lze získat maximálně 1 bod. Testy jsou <i>open-book</i>, tedy
      je povoleno používání jakýchkoliv materiálů (skripta, vlastní
      poznámky...), není povoleno komunikovat s kýmkoliv dalším či používat
      software řešící příklady.
    </li>
    <li>
      Za aktivitu při cvičeních (počítání příkladů u tabule apod.) lze získat za
      každé cvičení 0.5 bodu.
    </li>
    <li>
      Pro ty, kdo nenasbírají dostatečný počet bodů, budou ke konci semestru
      zadané <a
        href={`${base}/teaching/B231-01LAL1-homework/B231-01LAL1-homework.pdf`}
        rel="noopener noreferrer"
        target="_blank">3 domácí úkoly</a
      >, z každého z nich lze získat maximálně 1 bod.
    </li>
  </ul>

  <p>Pro získání zápočtu je třeba splnit 2 podmínky:</p>

  <ul>
    <li>Mít maximálně 2 absence.</li>
    <li>
      Mít součet bodů z mini-testů a domácích úkolů alespoň 5 (tedy vyjma bodů
      za aktivitu).
    </li>
  </ul>

  <p>
    Bonusová procenta ke zkoušce jsou pak daná součtem bodů z mini-testů,
    aktivity a domácích úkolů, mínus 5.
  </p>

  <h3>výsledky</h3>

  <GoogleSheet
    height="660px"
    sheetId="2096801087"
    title="Přehled výsledků"
    url="https://docs.google.com/spreadsheets/d/e/2PACX-1vSd1Iv2HuIZhq8XMgYmW8KtoP6kaCK2JefGOceLyaQ6fACbm0iWCYwfjlixWwEX0SLzaFIlNw833b3P/pubhtml"
  />

  <Heading level={2}>teorie neuronových sítí – FIT, LS 22/23</Heading>

  <p>
    Cvičení předmětu teorie neuronových sítí probíhají nepravidelně, viz e-mail.
    Informace ke zkoušce, podmínky splnění předmětu a klasifikace lze nalézt v <ExternalLink
      href="https://courses.fit.cvut.cz/NI-TNN/index.html"
      >FIT courses</ExternalLink
    >.
  </p>
</PageContent>
