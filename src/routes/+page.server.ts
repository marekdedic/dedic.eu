import type { PublicationSpec } from "#lib/types/PublicationSpec.js";

import { publications } from "#lib/data/publications.js";
import { sortPublications } from "#lib/utils/sortPublications.js";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  description: string;
  publications: Array<PublicationSpec>;
}> = () => ({
  description:
    "Personal webpage of Marek Dědič — machine learning researcher at Cisco and FJFI CTU specializing in graph neural networks, and executive director of Effective Altruism Czechia.",
  publications: sortPublications(publications),
});
