import type { PublicationSpec } from "$lib/types/PublicationSpec";

export interface RawPublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  date: string;
  pdf?: string;
  previewImage?: string;
  tags?: Array<string>;
  title: string;
}

export async function loadPublications(
  file: string,
  kitFetch: typeof fetch,
): Promise<Array<PublicationSpec>> {
  const res = await kitFetch(file);
  return ((await res.json()) as Array<RawPublicationSpec>)
    .map((publication) => ({
      ...publication,
      date: new Date(publication.date),
    }))
    .sort((left, right) => right.date.getTime() - left.date.getTime());
}
