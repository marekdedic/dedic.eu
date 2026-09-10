import type { PublicationSpec } from "$lib/types/PublicationSpec";

import { loadJsonConfig } from "$lib/utils/loadJsonConfig";

export interface RawPublicationSpec {
  abstract: string;
  authors: Array<string>;
  bib?: string;
  blogpost?: string;
  date?: string;
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
    .map(({ date, ...publication }) => ({
      ...publication,
      ...(date === undefined ? {} : { date: new Date(date) }),
    }))
    .sort((left, right) =>
      left.date === undefined
        ? right.date === undefined
          ? 0
          : -1
        : right.date === undefined
          ? 1
          : right.date.getTime() - left.date.getTime(),
    );
}
