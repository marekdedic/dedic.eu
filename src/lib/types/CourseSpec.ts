// Per-course metadata co-located with each course's route folder
// (`teaching/<COURSE>/meta.ts`).
export interface CourseMeta {
  current: string | null;
  faculty: string;
  name: string;
}

export interface CourseSpec extends CourseMeta {
  slug: string;
  versions: Array<CourseVersionSpec>;
}

export interface CourseVersionSpec {
  semester: string;
  slug: string;
}
