import type { RouteId } from "$app/types";

import { error, redirect } from "@sveltejs/kit";

import { teachingSpec } from "#lib/data/teaching.js";
import { findCourseByCode } from "#lib/utils/findCourseByCode.js";

import type { EntryGenerator, PageServerLoad } from "./$types";

// `/teaching/<CODE>/<VERSION>` is an alias for that version of the course,
// provided it was offered under that code
export const entries: EntryGenerator = () =>
  teachingSpec.flatMap((course) =>
    course.versions.flatMap((version) =>
      version.offerings.map((offering) => ({
        code: offering.code,
        version: version.slug,
      })),
    ),
  );

export const load: PageServerLoad = ({ params }) => {
  const course = findCourseByCode(teachingSpec, params.code);
  const version = course?.versions.find(
    (v) =>
      v.slug === params.version &&
      v.offerings.some((offering) => offering.code === params.code),
  );
  if (course === undefined || version === undefined) {
    error(404);
  }
  redirect(302, `/teaching/${course.slug}/${version.slug}` as RouteId);
};
