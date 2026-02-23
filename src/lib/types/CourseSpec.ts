export interface CourseSpec {
  current: string | null;
  faculty: string;
  name: string;
  slug: string;
  versions: Array<CourseVersionSpec>;
}

export interface CourseVersionSpec {
  semester: string;
  slug: string;
}
