import type { PublicationSpec } from "$lib/types/PublicationSpec";

export function sortPublications(
  publications: Array<PublicationSpec>,
): Array<PublicationSpec> {
  return [...publications].sort((left, right) =>
    left.date === undefined
      ? right.date === undefined
        ? 0
        : -1
      : right.date === undefined
        ? 1
        : right.date.getTime() - left.date.getTime(),
  );
}
