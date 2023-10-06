import type { JsonPublication } from "$lib/types/JsonPublication";

import type { PageLoad } from "./$types";

export const load: PageLoad<{ publications: Array<JsonPublication> }> = async ({
  fetch,
}) => {
  const res = await fetch("/publications.json");
  return { publications: (await res.json()) as Array<JsonPublication> };
};
