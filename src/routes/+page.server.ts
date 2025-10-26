import type { PublicationSpec } from "$lib/types/PublicationSpec";

import { loadPublications } from "$lib/loadPublications";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  publications: Array<PublicationSpec>;
}> = async ({ fetch }) => ({
  publications: await loadPublications("/publications.json", fetch),
});
