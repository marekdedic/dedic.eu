import type { PublicationSpec } from "$lib/types/PublicationSpec";

import { publications } from "$lib/data/publications";
import { sortPublications } from "$lib/utils/sortPublications";

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
