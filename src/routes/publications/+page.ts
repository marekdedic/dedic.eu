import { loadPublications } from "$lib/loadPublications";
import type { PublicationParams } from "$lib/types/PublicationParams";

import type { PageLoad } from "./$types";

export const load: PageLoad<{
  publications: Array<PublicationParams>;
}> = async ({ fetch }) => {
  return { publications: await loadPublications("/publications.json", fetch) };
};
