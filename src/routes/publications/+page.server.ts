import type { PublicationParams } from "$lib/types/PublicationParams";

import { loadPublications } from "$lib/loadPublications";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad<{
  publications: Array<PublicationParams>;
}> = async ({ fetch }) => ({
  publications: await loadPublications("/publications.json", fetch),
});
