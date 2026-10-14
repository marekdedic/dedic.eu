import type { PublicationSpec } from "#lib/types/PublicationSpec.js";

import { publications } from "#lib/data/publications.js";
import { sortPublications } from "#lib/utils/sortPublications.js";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  description: string;
  publications: Array<PublicationSpec>;
  title: string;
}> = () => ({
  description:
    "Research publications by Marek Dědič on graph neural networks, graph structure learning, multi-instance learning, and network security.",
  publications: sortPublications(publications),
  title: "Publications",
});
