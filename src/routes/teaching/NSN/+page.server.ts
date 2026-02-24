import { findCourseRoute } from "$lib/utils/findCourseRoute";
import { redirect } from "@sveltejs/kit";

import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ parent }) => {
  const { teachingSpec } = await parent();
  const course = teachingSpec.find((c) => c.slug === "NSN");
  if (course !== undefined) {
    redirect(302, findCourseRoute(course));
  }
};
