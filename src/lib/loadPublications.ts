import type { JsonPublication } from "$lib/types/JsonPublication";
import type { PublicationParams } from "$lib/types/PublicationParams";

export async function loadPublications(
  file: string,
  kitFetch: typeof fetch,
): Promise<Array<PublicationParams>> {
  const res = await kitFetch(file);
  return ((await res.json()) as Array<JsonPublication>)
    .map((publication) => ({
      ...publication,
      date: new Date(publication.date),
    }))
    .sort((left, right) => right.date.getTime() - left.date.getTime());
}
