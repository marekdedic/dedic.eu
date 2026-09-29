import type { RouteId } from "$app/types";
import type { CourseSpec } from "$lib/types/CourseSpec";

import { courseFaculties } from "$lib/utils/courseFaculties";
import { findCourseRoute } from "$lib/utils/findCourseRoute";

export function getCurrentCourseList(spec: Array<CourseSpec>): Array<{
  defaultRoute: RouteId;
  faculty: string;
  name: string;
}> {
  return spec
    .filter((course) => course.current !== null)
    .map((course) => ({
      defaultRoute: findCourseRoute(course),
      faculty: courseFaculties(course).join(", "),
      name: course.name,
    }))
    .reverse();
}

export function getPastCourseList(spec: Array<CourseSpec>): Array<{
  defaultRoute: RouteId;
  faculty: string;
  name: string;
}> {
  return spec
    .filter((course) => course.current === null)
    .map((course) => ({
      defaultRoute: findCourseRoute(course),
      faculty: courseFaculties(course).join(", "),
      name: course.name,
    }))
    .reverse();
}
