import type { JsonPublication } from "$lib/types/JsonPublication";
import type { PublicationParams } from "$lib/types/PublicationParams";

import type { PageLoad } from "./$types";

export const load: PageLoad<{
  publications: Array<PublicationParams>;
}> = async ({ fetch }) => {
  const res = await fetch("/publications.json");
  const publications = ((await res.json()) as Array<JsonPublication>)
    .map((publication) => ({
      ...publication,
      date: new Date(publication.date),
    }))
    .sort((left, right) => right.date.getTime() - left.date.getTime());
  return { publications };
};
