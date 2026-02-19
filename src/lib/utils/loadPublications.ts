import type { PublicationSpec } from "$lib/types/PublicationSpec";

import { loadJsonConfig } from "$lib/utils/loadJsonConfig";

export interface RawPublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  date: string;
  id: string;
  pdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}

export async function loadPublications(
  file: string,
  kitFetch: typeof fetch,
): Promise<Array<PublicationSpec>> {
  return (await loadJsonConfig<Array<RawPublicationSpec>>(file, kitFetch))
    .map((publication) => ({
      ...publication,
      date: new Date(publication.date),
    }))
    .sort((left, right) => right.date.getTime() - left.date.getTime());
}
