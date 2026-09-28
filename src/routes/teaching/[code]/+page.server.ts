import { teachingSpec } from "$lib/data/teaching";
import { findCourseByCode } from "$lib/utils/findCourseByCode";
import { findCourseRoute } from "$lib/utils/findCourseRoute";
import { error, redirect } from "@sveltejs/kit";

import type { EntryGenerator, PageServerLoad } from "./$types";

// `/teaching/<CODE>` is an alias for the course offered under that code
export const entries: EntryGenerator = () =>
  [
    ...new Set(
      teachingSpec.flatMap((course) =>
        course.versions.flatMap((version) =>
          version.offerings.map((offering) => offering.code),
        ),
      ),
    ),
  ].map((code) => ({ code }));

export const load: PageServerLoad = ({ params }) => {
  const course = findCourseByCode(teachingSpec, params.code);
  if (course === undefined) {
    error(404);
  }
  redirect(302, findCourseRoute(course));
};
