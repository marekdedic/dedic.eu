<script lang="ts" strictEvents>
  import ExternalLink from "$lib/components/ExternalLink.svelte";
  import GoogleSheet from "$lib/components/GoogleSheet.svelte";
  import InlineCode from "$lib/components/InlineCode.svelte";
  import PageContent from "$lib/components/PageContent.svelte";
  import PageHeader from "$lib/components/PageHeader.svelte";
</script>

<PageHeader>
  <span slot="title">výuka</span>
  <span slot="subtitle">
    informace k předmětům, které učím – studijní materiály, podmínky splnění,
    výsledky.
  </span>
</PageHeader>

<PageContent>
  <h2>lineární algera 1 – FJFI, ZS 23/24</h2>

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
  </ul>

  <h3>podmínky zápočtu</h3>

  Na konci semestru na základě práce při cvičeních každý může získat kromě
  zápočtu až 10% navíc k praktické části zkoušky (podrobnosti v podmínkách
  zkoušky). Získání zápočtu i tyto bonusová procenta se počítají z bodů
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
      zadané 3 domácí úkoly, z každého z nich lze získat maximálně 1 bod.
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
    sheetId="2096801087"
    title="Přehled výsledků"
    url="https://docs.google.com/spreadsheets/d/e/2PACX-1vQOlPd-nlIljrCz_NIvkTFehlMJzedOHIClP1CSohavxk7hcTK-BRC4-wJXJ7KJ5Y3f6sMIzXduTxG0/pubhtml"
  />
</PageContent>
