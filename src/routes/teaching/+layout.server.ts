import type { CourseSpec } from "$lib/types/CourseSpec";

import { loadJsonConfig } from "$lib/utils/loadJsonConfig";

import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad<{
  teachingSpec: Array<CourseSpec>;
}> = async ({ fetch }) => ({
  teachingSpec: await loadJsonConfig<Array<CourseSpec>>(
    "/teaching.json",
    fetch,
  ),
});
