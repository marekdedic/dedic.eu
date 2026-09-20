// Prism must be imported from a .ts module, not a .svelte file
import Prism from "prismjs";
import "prismjs-bibtex";

// We highlight manually via Prism.highlight(). Without this, Prism auto-runs
// highlightAll() on DOMContentLoaded.
Prism.manual = true;

// BibLaTeX shares BibTeX's syntax; reuse the bibtex grammar for highlighting.
Prism.languages["biblatex"] = Prism.languages["bib"];

export default Prism;
