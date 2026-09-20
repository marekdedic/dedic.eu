import type { CourseSpec } from "$lib/types/CourseSpec";

import { findCourseRoute } from "$lib/utils/findCourseRoute";
import { redirect, type ServerLoadEvent } from "@sveltejs/kit";

// Shared redirect for every `teaching/<COURSE>/+page.server.ts`
export async function load({ parent, url }: ServerLoadEvent): Promise<void> {
  const { teachingSpec } = (await parent()) as {
    teachingSpec: Array<CourseSpec>;
  };
  const [, slug] = url.pathname.split("/").filter(Boolean);
  const course = teachingSpec.find((c) => c.slug === slug);
  if (course !== undefined) {
    redirect(302, findCourseRoute(course));
  }
}
