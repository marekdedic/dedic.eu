export interface CourseSpec {
  current: string | null;
  name: string;
  slug: string;
  versions: Array<CourseVersionSpec>;
}

export interface CourseVersionSpec {
  faculties: Array<string>;
  semester: string;
  slug: string;
}
