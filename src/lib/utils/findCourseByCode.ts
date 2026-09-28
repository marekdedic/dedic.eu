import type { CourseSpec } from "$lib/types/CourseSpec";

export function findCourseByCode(
  spec: Array<CourseSpec>,
  code: string,
): CourseSpec | undefined {
  return spec.find((course) =>
    course.versions.some((version) =>
      version.offerings.some((offering) => offering.code === code),
    ),
  );
}
