import type { PublicationSpec } from "$lib/types/PublicationSpec";

import { loadPublications } from "$lib/utils/loadPublications";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  description: string;
  publications: Array<PublicationSpec>;
  title: string;
}> = async ({ fetch }) => ({
  description:
    "Research publications by Marek Dědič on graph neural networks, graph structure learning, multi-instance learning, and network security.",
  publications: await loadPublications("/publications.json", fetch),
  title: "Publications",
});
