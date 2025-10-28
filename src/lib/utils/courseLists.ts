import type { RouteId } from "$app/types";
import type { CourseSpec } from "$lib/types/CourseSpec";

import { findCourseRoute } from "$lib/utils/findCourseRoute";
import { findDefaultCourseVersion } from "$lib/utils/findDefaultCourseVersion";

export function getCurrentCourseList(spec: Array<CourseSpec>): Array<{
  defaultRoute: RouteId;
  faculties: Array<string>;
  name: string;
}> {
  return spec
    .filter((course) => course.current !== null)
    .map((course) => ({
      defaultRoute: findCourseRoute(course),
      faculties: findDefaultCourseVersion(course).faculties,
      name: course.name,
    }))
    .reverse();
}

export function getPastCourseList(spec: Array<CourseSpec>): Array<{
  defaultRoute: RouteId;
  faculties: Array<string>;
  name: string;
}> {
  return spec
    .filter((course) => course.current === null)
    .map((course) => ({
      defaultRoute: findCourseRoute(course),
      faculties: [
        ...new Set(course.versions.flatMap((version) => version.faculties)),
      ],
      name: course.name,
    }))
    .reverse();
}
