import type {
  CourseMeta,
  CourseSpec,
  CourseVersionSpec,
} from "$lib/types/CourseSpec";

const courseMetas = import.meta.glob<CourseMeta>(
  "/src/routes/teaching/*/meta.ts",
  { eager: true, import: "course" },
);
const versionSemesters = import.meta.glob<string>(
  "/src/routes/teaching/*/*/+page.svelte",
  { eager: true, import: "semester" },
);

const courseRe = /^\/src\/routes\/teaching\/([^/]+)\/meta\.ts$/u;
const versionRe =
  /^\/src\/routes\/teaching\/([^/]+)\/([^/]+)\/\+page\.svelte$/u;

function buildTeachingSpec(): Array<CourseSpec> {
  const versionsByCourse = new Map<string, Array<CourseVersionSpec>>();
  for (const [path, semester] of Object.entries(versionSemesters)) {
    const match = versionRe.exec(path);
    if (match === null) {
      continue;
    }
    const [, courseSlug, slug] = match;
    const versions = versionsByCourse.get(courseSlug) ?? [];
    versions.push({ semester, slug });
    versionsByCourse.set(courseSlug, versions);
  }

  return Object.entries(courseMetas)
    .flatMap(([path, meta]): Array<CourseSpec> => {
      const match = courseRe.exec(path);
      if (match === null) {
        return [];
      }
      const [, slug] = match;
      const versions = (versionsByCourse.get(slug) ?? []).sort((left, right) =>
        left.slug.localeCompare(right.slug),
      );
      return [{ ...meta, slug, versions }];
    })
    .sort((left, right) => {
      const byLatest = latestSlug(left).localeCompare(latestSlug(right));
      return byLatest === 0 ? left.slug.localeCompare(right.slug) : byLatest;
    });
}

function latestSlug(course: CourseSpec): string {
  return course.versions[course.versions.length - 1]?.slug ?? "";
}

export const teachingSpec: Array<CourseSpec> = buildTeachingSpec();
