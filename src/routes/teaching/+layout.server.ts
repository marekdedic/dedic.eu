import type { CourseSpec } from "$lib/types/CourseSpec";

import { loadJsonConfig } from "$lib/utils/loadJsonConfig";

import type { LayoutServerLoad } from "./$types";

const capitalize = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);

export const load: LayoutServerLoad<{
  description: string;
  teachingSpec: Array<CourseSpec>;
  title: string;
}> = async ({ fetch, url }) => {
  const teachingSpec = await loadJsonConfig<Array<CourseSpec>>(
    "/teaching.json",
    fetch,
  );

  const parts = url.pathname.split("/").filter(Boolean);
  // Parts: ['teaching'] | ['teaching', courseSlug] | ['teaching', courseSlug, versionSlug]

  let title = "Teaching";
  let description =
    "Courses taught by Marek Dědič at FIT CTU and FJFI CTU — neural networks, linear algebra, and mathematics. Study materials, requirements, and grading.";

  if (parts.length >= 3) {
    const course = teachingSpec.find((c) => c.slug === parts[1]);
    if (course !== undefined) {
      const version = course.versions.find((v) => v.slug === parts[2]);
      const semester = version?.semester ?? parts[2];
      title = `${capitalize(course.name)}, ${semester}`;
      description = `${capitalize(course.name)} [${course.faculty} CTU], ${semester} — study materials, requirements, and grading, taught by Marek Dědič.`;
    }
  }

  return { description, teachingSpec, title };
};
