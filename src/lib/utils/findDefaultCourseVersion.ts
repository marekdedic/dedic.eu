import type { CourseSpec, CourseVersionSpec } from "$lib/types/CourseSpec";

export function findDefaultCourseVersion(
  course: CourseSpec,
): CourseVersionSpec {
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
