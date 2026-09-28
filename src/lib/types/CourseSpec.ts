// A course is a subject taught over time. Its metadata is co-located with the
// course's route folder (`teaching/<COURSE>/meta.ts`), each version of it is
// a `teaching/<COURSE>/<VERSION>/+page.svelte` exporting `version`.
export interface CourseMeta {
  current: string | null;
  name: string;
}

// A single faculty's listing of a course version.
export interface CourseOffering {
  code: string;
  faculty: string;
  name: string;
}

export interface CourseSpec extends CourseMeta {
  slug: string;
  versions: Array<CourseVersionSpec>;
}

export interface CourseVersionMeta {
  offerings: Array<CourseOffering>;
  semester: string;
}

export interface CourseVersionSpec extends CourseVersionMeta {
  slug: string;
}
