import type { RouteId } from "$app/types";
import type { CourseSpec, CourseVersionSpec } from "$lib/types/CourseSpec";

export function findCourseRoute(course: CourseSpec): RouteId {
  const defaultVersion = findDefaultCourseVersion(course);
  return `/teaching/${course.slug}/${defaultVersion.slug}` as RouteId;
}

function findDefaultCourseVersion(course: CourseSpec): CourseVersionSpec {
  if (course.current !== null) {
    const currentVersion = course.versions.find(
      (version) => version.slug === course.current,
    );
    if (currentVersion !== undefined) {
      return currentVersion;
    }
  }
  return course.versions[course.versions.length - 1];
}
