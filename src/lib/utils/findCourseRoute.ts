import type { RouteId } from "$app/types";
import type { CourseSpec } from "$lib/types/CourseSpec";

import { findDefaultCourseVersion } from "$lib/utils/findDefaultCourseVersion";

export function findCourseRoute(course: CourseSpec): RouteId {
  const defaultVersion = findDefaultCourseVersion(course);
  return `/teaching/${course.slug}/${defaultVersion.slug}` as RouteId;
}
