import type { CourseSpec } from "$lib/types/CourseSpec";

export function courseFaculties(course: CourseSpec): Array<string> {
  return [
    ...new Set(
      course.versions.flatMap((version) =>
        version.offerings.map((offering) => offering.faculty),
      ),
    ),
  ];
}
