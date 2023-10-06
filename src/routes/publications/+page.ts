import type { PageLoad } from "./$types";
import type { JsonPublication } from "./JsonPublication";

export const load: PageLoad<{ publications: Array<JsonPublication> }> = async ({
  fetch,
}) => {
  const res = await fetch("/publications.json");
  return { publications: (await res.json()) as Array<JsonPublication> };
};
