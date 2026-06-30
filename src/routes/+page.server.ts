import type { PublicationSpec } from "$lib/types/PublicationSpec";

import { loadPublications } from "$lib/utils/loadPublications";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  description: string;
  publications: Array<PublicationSpec>;
}> = async ({ fetch }) => ({
  description:
    "Personal webpage of Marek Dědič — machine learning researcher at Cisco and FJFI CTU specializing in graph neural networks, and executive director of Effective Altruism Czechia.",
  publications: await loadPublications("/publications.json", fetch),
});
